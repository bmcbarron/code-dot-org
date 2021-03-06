/** @file The maestro! Helper that knows which music tracks can be played, and
 *        which one is playing now, and selects and plays them appropriately. */
/* jshint
 funcscope: true,
 newcap: true,
 nonew: true,
 shadow: false,
 unused: true,
 eqeqeq: true,

 maxlen: 90,
 maxstatements: 200
 */
'use strict';

var utils = require('../utils');
var _ = utils.getLodash();

var debugLogging = false;
function debug(msg) {
  if (debugLogging && console && console.info) {
    console.info('MusicController: ' + msg);
  }
}

/**
 * @typedef {Object} MusicTrackDefinition
 * External track representation, used to define track info in skins.js.
 *
 * @property {string} name - corresponds to music filenames
 * @property {number} volume - on a 0..1 scale
 */

/**
 * @typedef {Object} MusicTrack
 * Internal track representation, includes track metadata and references to
 * loaded sound object.
 *
 * @property {string} name
 * @property {string[]} assetUrls
 * @property {number} volume
 * @property {Sound} sound
 * @property {boolean} isLoaded
 */

/**
 * A helper class that handles loading, choosing, playing and stopping
 * background music for Playlab.
 *
 * @param {AudioPlayer} audioPlayer - Reference to the Sounds object.
 * @param {function} assetUrl - Function for generating paths to static assets
 *        for the current skin.
 * @param {MusicTrackDefinition[]} [trackDefinitions] - List of music assets and
 *        general info about how they should be played. Can be omitted or empty
 *        if no music should be played.
 * @constructor
 */
var MusicController = function (audioPlayer, assetUrl, trackDefinitions) {
  /** @private {AudioPlayer} */
  this.audioPlayer_ = audioPlayer;

  /** @private {function} */
  this.assetUrl_ = assetUrl;

  /** @private {MusicTrack[]} */
  this.trackList_ = buildTrackData(trackDefinitions, assetUrl);

  /** @private {string} */
  this.nowPlaying_ = null;

  /** @private {string} Name of track to play on load */
  this.playOnLoad_ = null;

  // If the video player gets pulled up, make sure we stop the music.
  document.addEventListener('videoShown', function () {
    this.fadeOut();
  }.bind(this));

  debug('constructed');
};
module.exports = MusicController;

/**
 * Build up initial internal track metadata.
 * @param {MusicTrackDefinition[]} trackDefinitions
 * @param {function} assetUrl
 * @return {MusicTrack[]}
 */
function buildTrackData(trackDefinitions, assetUrl) {
  trackDefinitions = utils.valueOr(trackDefinitions, []);
  return trackDefinitions.map(function (trackDef) {
    return {
      name: trackDef.name,
      assetUrls: [ assetUrl(trackDef.name + '.mp3') ],
      volume: utils.valueOr(trackDef.volume, 1),
      sound: null,
      isLoaded: false
    };
  });
}

/**
 * Preload all music assets,
 */
MusicController.prototype.preload = function () {
  if (!this.audioPlayer_) {
    return;
  }

  this.trackList_.forEach(function (track) {
    track.sound = this.audioPlayer_.registerByFilenamesAndID(
        track.assetUrls, track.name);
    track.sound.onLoad = function () {
      debug('done loading ' + track.name);
      track.isLoaded = true;
      if (this.playOnLoad_ === track.name) {
        this.play(track.name);
      }
    }.bind(this);
  }, this);
};

/**
 * Begins playing a particular piece of music immediately.
 * @param {string} trackName
 */
MusicController.prototype.play = function (trackName) {
  debug('play ' + trackName);
  if (!this.audioPlayer_) {
    return;
  }

  var track;
  if (trackName) {
    track = this.getTrackByName_(trackName);
  } else {
    track = this.getRandomTrack_();
  }

  if (!track) {
    // No track to play - throw an exception?
    return;
  }

  if (track.sound && track.isLoaded) {
    debug('playing now');
    var callback = this.whenMusicStopped_.bind(this, track.name);
    track.sound.play({ volume: track.volume, onEnded: callback });
    this.nowPlaying_ = track.name;
  } else {
    debug('not done loading, playing after load');
    this.playOnLoad_ = track.name;
  }
};

/**
 * Stops playing whatever music is currently playing, immediately.
 */
MusicController.prototype.stop = function () {
  if (!this.nowPlaying_) {
    return;
  }

  var sound = this.audioPlayer_.get(this.nowPlaying_);
  if (sound) {
    sound.stop();
  }
};

/**
 * Fades music to nothing, then stops it.
 * @param {number} [durationSeconds] in seconds.  Default 3.
 */
MusicController.prototype.fadeOut = function (durationSeconds) {
  if (!this.nowPlaying_) {
    return;
  }

  durationSeconds = utils.valueOr(durationSeconds, 3);

  // Trigger a fade
  var sound = this.audioPlayer_.get(this.nowPlaying_);
  if (sound) {
    sound.fadeToGain(0, durationSeconds);
  }

  // Stop the audio after the fade.
  setTimeout(function () {
    this.stop();
  }.bind(this), 1000 * durationSeconds);
};

/**
 * Callback for when music stops, to update internal state.
 * @param {string} musicName that was playing.  Should be bound when music
 *        is started.
 * @private
 */
MusicController.prototype.whenMusicStopped_ = function (musicName) {
  if (this.nowPlaying_ === musicName) {
    this.nowPlaying_ = null;
  }
};

/**
 * @param {string} name
 * @returns {MusicTrack|undefined}
 * @private
 */
MusicController.prototype.getTrackByName_ = function (name) {
  return _.find(this.trackList_, function (track) {
    return track.name === name;
  });
};

/**
 * @returns {MusicTrack|undefined}
 * @private
 */
MusicController.prototype.getRandomTrack_ = function () {
  return this.trackList_[Math.floor(Math.random(this.trackList_.length))];
};
