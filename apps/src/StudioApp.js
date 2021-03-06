/* global Blockly, ace:true, droplet, marked, digestManifest, dashboard */

/**
 * For the most part, we depend on dashboard providing us with React as a global.
 * However, there is at least one context in which this won't be true - when we
 * show feedback blocks in their own iframe. In that case, load React from
 * our module.
 * This approach has a couple of drawbacks
 * (1) ability for dashboard React and apps React versions to get out of sync
 * (2) if we end up in other cases where React isn't provided to us as a global
 *     we probably won't notice, which may not be intended behavior
 */
if (!window.React) {
  window.React = require('react');
}

var aceMode = require('./acemode/mode-javascript_codeorg');
var parseXmlElement = require('./xml').parseElement;
var utils = require('./utils');
var dropletUtils = require('./dropletUtils');
var _ = utils.getLodash();
var dom = require('./dom');
var constants = require('./constants.js');
var msg = require('./locale');
var blockUtils = require('./block_utils');
var DropletTooltipManager = require('./blockTooltips/DropletTooltipManager');
var url = require('url');
var FeedbackUtils = require('./feedback');
var VersionHistory = require('./templates/VersionHistory.jsx');
var Alert = require('./templates/alert.jsx');
var codegen = require('./codegen');

/**
* The minimum width of a playable whole blockly game.
*/
var MIN_WIDTH = 900;
var MOBILE_SHARE_WIDTH_PADDING = 50;
var DEFAULT_MOBILE_NO_PADDING_SHARE_WIDTH = 400;
var MAX_VISUALIZATION_WIDTH = 400;
var MIN_VISUALIZATION_WIDTH = 200;

var ENGLISH_LOCALE = 'en_us';

/**
 * Treat mobile devices with screen.width less than the value below as phones.
 */
var MAX_PHONE_WIDTH = 500;

var StudioApp = function () {
  this.feedback_ = new FeedbackUtils(this);

  /**
  * The parent directory of the apps. Contains common.js.
  */
  this.BASE_URL = undefined;

  /**
  * If truthy, a version number to be appended to asset urls.
  */
  this.CACHE_BUST = undefined;

  /**
  * The current locale code.
  */
  this.LOCALE = ENGLISH_LOCALE;

  this.enableShowCode = true;
  this.editCode = false;
  this.usingBlockly_ = true;

  /**
   * @type {AudioPlayer}
   */
  this.cdoSounds = null;
  this.Dialog = null;
  /**
   * @type {?Droplet.Editor}
   */
  this.editor = null;
  /**
   * @type {?DropletTooltipManager}
   */
  this.dropletTooltipManager = null;

  // @type {string} for all of these
  this.icon = undefined;
  this.smallIcon = undefined;
  this.winIcon = undefined;
  this.failureIcon = undefined;

  // The following properties get their non-default values set by the application.

  /**
   * Whether to alert user to empty blocks, short-circuiting all other tests.
   * @member {boolean}
   */
  this.checkForEmptyBlocks_ = false;

  /**
  * The ideal number of blocks to solve this level.  Users only get 2
  * stars if they use more than this number.
  * @type {number}
  */
  this.IDEAL_BLOCK_NUM = undefined;

  /**
   * @typedef {Object} TestableBlock
   * @property {string|function} test - A test whether the block is
   *           present, either:
   *           - A string, in which case the string is searched for in
   *             the generated code.
   *           - A single-argument function is called on each user-added
   *             block individually.  If any call returns true, the block
   *             is deemed present.  "User-added" blocks are ones that are
   *             neither disabled or undeletable.
   * @property {string} type - The type of block to be produced for
   *           display to the user if the test failed.
   * @property {Object} [titles] - A dictionary, where, for each
   *           KEY-VALUE pair, this is added to the block definition:
   *           <title name="KEY">VALUE</title>.
   * @property {Object} [value] - A dictionary, where, for each
   *           KEY-VALUE pair, this is added to the block definition:
   *           <value name="KEY">VALUE</value>
   * @property {string} [extra] - A string that should be blacked
   *           between the "block" start and end tags.
   */

  /**
  * @type {!TestableBlock[]}
  */
  this.requiredBlocks_ = [];

  /**
  * The number of required blocks to give hints about at any one time.
  * Set this to Infinity to show all.
  * @type {number}
  */
  this.maxRequiredBlocksToFlag_ = 1;

  /**
  * @type {!TestableBlock[]}
  */
  this.recommendedBlocks_ = [];

  /**
  * The number of recommended blocks to give hints about at any one time.
  * Set this to Infinity to show all.
  * @type {number}
  */
  this.maxRecommendedBlocksToFlag_ = 1;

  /**
  * The number of attempts (how many times the run button has been pressed)
  * @type {?number}
  */
  this.attempts = 0;

  /**
  * Stores the time at init. The delta to current time is used for logging
  * and reporting to capture how long it took to arrive at an attempt.
  * @type {?number}
  */
  this.initTime = undefined;

  /**
  * Enumeration of user program execution outcomes.
  */
  this.ResultType = constants.ResultType;

  /**
  * Enumeration of test results.
  */
  this.TestResults = constants.TestResults;

  /**
   * If true, we don't show blockspace. Used when viewing shared levels
   */
  this.hideSource = false;

  /**
   * If true, we're viewing a shared level.
   */
  this.share = false;

  this.onAttempt = undefined;
  this.onContinue = undefined;
  this.onResetPressed = undefined;
  this.backToPreviousLevel = undefined;
  this.sendToPhone = undefined;
  this.enableShowBlockCount = true;

  this.disableSocialShare = false;
  this.noPadding = false;

  this.MIN_WORKSPACE_HEIGHT = undefined;
};
module.exports = StudioApp;
StudioApp.singleton = new StudioApp();

/**
 * Configure StudioApp options
 */
StudioApp.prototype.configure = function (options) {
  this.BASE_URL = options.baseUrl;
  this.CACHE_BUST = options.cacheBust;
  this.LOCALE = options.locale || this.LOCALE;
  // NOTE: editCode (which currently implies droplet) and usingBlockly_ are
  // currently mutually exclusive.
  this.editCode = options.level && options.level.editCode;
  this.usingBlockly_ = !this.editCode;

  // TODO (bbuchanan) : Replace this editorless-hack with setting an editor enum
  // or (even better) inject an appropriate editor-adaptor.
  if (options.isEditorless) {
    this.editCode = false;
    this.usingBlockly_ = false;
  }

  this.cdoSounds = options.cdoSounds;
  this.Dialog = options.Dialog;

  // Bind assetUrl to the instance so that we don't need to depend on callers
  // binding correctly as they pass this function around.
  this.assetUrl = _.bind(this.assetUrl_, this);
};

StudioApp.prototype.hasInstructionsToShow = function (config) {
  return !!(config.level.instructions || config.level.aniGifURL);
};

/**
 * Common startup tasks for all apps. Happens after configure.
 */
StudioApp.prototype.init = function(config) {
  if (!config) {
    config = {};
  }

  this.setConfigValues_(config);

  this.configureDom(config);

  if (config.hideSource) {
    this.handleHideSource_({
      containerId: config.containerId,
      embed: config.embed,
      level: config.level,
      level_source_id: config.level_source_id,
      phone_share_url: config.send_to_phone_url,
      sendToPhone: config.sendToPhone,
      twitter: config.twitter,
      app: config.app
    });
  }

  if (config.share) {
    this.handleSharing_({
      noButtonsBelowOnMobileShare: config.noButtonsBelowOnMobileShare,
      makeUrl: config.makeUrl,
      makeString: config.makeString,
      makeImage: config.makeImage,
      makeYourOwn: config.makeYourOwn
    });
  }

  // Record time at initialization.
  this.initTime = new Date().getTime();

  // Fixes viewport for small screens.
  var viewport = document.querySelector('meta[name="viewport"]');
  if (viewport) {
    this.fixViewportForSmallScreens_(viewport, config);
  }

  var showCode = document.getElementById('show-code-header');
  if (showCode && this.enableShowCode) {
    dom.addClickTouchEvent(showCode, _.bind(function() {
      if (this.editCode) {
        var result;
        try {
          result = this.editor.toggleBlocks();
        } catch (err) {
          result = {error: err};
        }
        if (result && result.error) {
          // TODO (cpirich) We could extract error.loc to determine where the
          // error occurred and highlight that error
          this.feedback_.showToggleBlocksError(this.Dialog);
        }
        this.onDropletToggle_();
      } else {
        this.feedback_.showGeneratedCode(this.Dialog);
      }
    }, this));
  }

  var blockCount = document.getElementById('blockCounter');
  if (blockCount && !this.enableShowBlockCount) {
    blockCount.style.display = 'none';
  }

  this.icon = config.skin.staticAvatar;
  this.smallIcon = config.skin.smallStaticAvatar;
  this.winIcon = config.skin.winAvatar;
  this.failureIcon = config.skin.failureAvatar;

  if (config.level.instructionsIcon) {
    this.icon = config.skin[config.level.instructionsIcon];
    this.winIcon = config.skin[config.level.instructionsIcon];
  }

  if (config.showInstructionsWrapper) {
    config.showInstructionsWrapper(_.bind(function () {
      var shouldAutoClose = !!config.level.aniGifURL;
      this.showInstructions_(config.level, shouldAutoClose);
    }, this));
  }

  // The share and embed pages do not show the rotateContainer.
  if (this.share || config.embed) {
    var rotateContainer = document.getElementById('rotateContainer');
    if (rotateContainer) {
      rotateContainer.style.display = 'none';
    }
  }

  // In embed mode, the display scales down when the width of the visualizationColumn goes below the min width
  if(config.embed) {
    var resized = false;
    var resize = function() {
      var vizCol = document.getElementById('visualizationColumn');
      var width = vizCol.offsetWidth;
      var height = vizCol.offsetHeight;
      var displayWidth = DEFAULT_MOBILE_NO_PADDING_SHARE_WIDTH;
      var scale = Math.min(width / displayWidth, height / displayWidth);
      var viz = document.getElementById('visualization');
      viz.style['transform-origin'] = 'left top';
      viz.style['-webkit-transform'] = 'scale(' + scale + ')';
      viz.style['max-height'] = (displayWidth * scale) + 'px';
      viz.style.display = 'block';
      vizCol.style.width = '';
      vizCol.style.maxWidth = displayWidth + 'px';
      // Needs to run twice on initialization
      if(!resized) {
        resized = true;
        resize();
      }
    };
    // Depends on ResizeSensor.js
    var ResizeSensor = require('./ResizeSensor');
    new ResizeSensor(document.getElementById('visualizationColumn'), resize);
  }

  var orientationHandler = function() {
    window.scrollTo(0, 0);  // Browsers like to mess with scroll on rotate.
  };
  window.addEventListener('orientationchange', orientationHandler);
  orientationHandler();

  if (config.loadAudio) {
    config.loadAudio();
  }

  var promptDiv = document.getElementById('prompt');
  var prompt2Div = document.getElementById('prompt2');
  if (config.level.instructions) {
    $(promptDiv).text(config.level.instructions);
  }
  if (config.level.instructions2) {
    $(prompt2Div).text(config.level.instructions2);
    $(prompt2Div).show();
  }

  if (this.hasInstructionsToShow(config)) {
    var promptIcon = document.getElementById('prompt-icon');
    if (this.smallIcon) {
      promptIcon.src = this.smallIcon;
      $('#prompt-icon-cell').show();
    }
    var bubble = document.getElementById('bubble');
    dom.addClickTouchEvent(bubble, _.bind(function() {
      this.showInstructions_(config.level, false);
    }, this));
  }

  var aniGifPreview = document.getElementById('ani-gif-preview');
  if (config.level.aniGifURL) {
    aniGifPreview.style.backgroundImage = "url('" + config.level.aniGifURL + "')";
    var promptTable = document.getElementById('prompt-table');
    promptTable.className += " with-ani-gif";
  } else {
    var wrapper = document.getElementById('ani-gif-preview-wrapper');
    wrapper.style.display = 'none';
  }

  if (this.editCode) {
    this.handleEditCode_(config);
  }

  if (this.isUsingBlockly()) {
    this.handleUsingBlockly_(config);
  } else {
    // handleUsingBlockly_ already does an onResize. We still want that goodness
    // if we're not blockly
    this.onResize();
  }

  var vizResizeBar = document.getElementById('visualizationResizeBar');
  if (vizResizeBar) {
    dom.addMouseDownTouchEvent(vizResizeBar,
                               _.bind(this.onMouseDownVizResizeBar, this));

    // Can't use dom.addMouseUpTouchEvent() because it will preventDefault on
    // all touchend events on the page, breaking click events...
    document.body.addEventListener('mouseup',
                                   _.bind(this.onMouseUpVizResizeBar, this));
    var mouseUpTouchEventName = dom.getTouchEventName('mouseup');
    if (mouseUpTouchEventName) {
      document.body.addEventListener(mouseUpTouchEventName,
                                     _.bind(this.onMouseUpVizResizeBar, this));
    }
  }

  window.addEventListener('resize', _.bind(this.onResize, this));

  this.reset(true);

  // Add display of blocks used.
  this.setIdealBlockNumber_();

  // TODO (cpirich): implement block count for droplet (for now, blockly only)
  if (this.isUsingBlockly()) {
    Blockly.mainBlockSpaceEditor.addChangeListener(_.bind(function() {
      this.updateBlockCount();
    }, this));

    if (config.level.openFunctionDefinition) {
      this.openFunctionDefinition_(config);
    }
  }

  // Bind listener to 'Clear Puzzle' button
  var clearPuzzleHeader = document.getElementById('clear-puzzle-header');
  if (clearPuzzleHeader) {
    dom.addClickTouchEvent(clearPuzzleHeader, (function() {
      this.feedback_.showClearPuzzleConfirmation(this.Dialog, (function() {
        this.handleClearPuzzle(config);
      }).bind(this));
    }).bind(this));
  }

  // Bind listener to 'Version History' button
  var versionsHeader = document.getElementById('versions-header');
  if (versionsHeader) {
    dom.addClickTouchEvent(versionsHeader, (function() {
      var codeDiv = document.createElement('div');
      var dialog = this.createModalDialog({
        Dialog: this.Dialog,
        contentDiv: codeDiv,
        defaultBtnSelector: 'again-button',
        id: 'showVersionsModal'
      });
      React.render(React.createElement(VersionHistory, {
        handleClearPuzzle: this.handleClearPuzzle.bind(this, config)
      }), codeDiv);

      dialog.show();
    }).bind(this));
  }

  if (this.isUsingBlockly() && Blockly.contractEditor) {
    Blockly.contractEditor.registerTestsFailedOnCloseHandler(function () {
      this.feedback_.showSimpleDialog(this.Dialog, {
        headerText: undefined,
        bodyText: msg.examplesFailedOnClose(),
        cancelText: msg.ignore(),
        confirmText: msg.tryAgain(),
        onConfirm: null,
        onCancel: function () {
          Blockly.contractEditor.hideIfOpen();
        }
      });

      // return true to indicate to blockly-core that we'll own closing the
      // contract editor
      return true;
    }.bind(this));
  }
};

StudioApp.prototype.getCode = function () {
  if (!this.editCode) {
    throw "getCode() requires editCode";
  }
  if (this.hideSource) {
    return this.startBlocks_;
  } else {
    return this.editor.getValue();
  }
};

StudioApp.prototype.handleClearPuzzle = function (config) {
  if (this.isUsingBlockly()) {
    if (Blockly.functionEditor) {
      Blockly.functionEditor.hideIfOpen();
    }
    Blockly.mainBlockSpace.clear();
    this.setStartBlocks_(config, false);
    if (config.level.openFunctionDefinition) {
      this.openFunctionDefinition_(config);
    }
  } else {
    var resetValue = '';
    if (config.level.startBlocks) {
      // Don't pass CRLF pairs to droplet until they fix CR handling:
      resetValue = config.level.startBlocks.replace(/\r\n/g, '\n');
    }
    this.editor.setValue(resetValue);
  }
  if (config.afterClearPuzzle) {
    config.afterClearPuzzle();
  }
};

/**
 * TRUE if the current app uses blockly (as opposed to editCode or another
 * editor)
 * @return {boolean}
 */
StudioApp.prototype.isUsingBlockly = function () {
  return this.usingBlockly_;
};

/**
 *
 */
StudioApp.prototype.handleSharing_ = function (options) {
  // 1. Move the buttons, 2. Hide the slider in the share page for mobile.
  var belowVisualization = document.getElementById('belowVisualization');
  if (dom.isMobile()) {
    var sliderCell = document.getElementById('slider-cell');
    if (sliderCell) {
      sliderCell.style.display = 'none';
    }
    if (belowVisualization) {
      if (options.noButtonsBelowOnMobileShare) {
        var visualization = document.getElementById('visualization');
        belowVisualization.style.display = 'none';
        visualization.style.marginBottom = '0px';
      } else {
        belowVisualization.style.display = 'block';
        belowVisualization.style.marginLeft = '0px';
        if (this.noPadding) {
          var shareCell = document.getElementById('share-cell') ||
              document.getElementById('right-button-cell');
          if (shareCell) {
            shareCell.style.marginLeft = '10px';
            shareCell.style.marginRight = '10px';
          }
          var softButtons = document.getElementById('soft-buttons');
          if (softButtons) {
            softButtons.style.marginLeft = '10px';
            softButtons.style.marginRight = '10px';
          }
        }
      }
    }
  }

  // Show flappy upsale on desktop and mobile.  Show learn upsale only on desktop
  var upSale = document.createElement('div');
  if (options.makeYourOwn) {
    upSale.innerHTML = require('./templates/makeYourOwn.html.ejs')({
      data: {
        makeUrl: options.makeUrl,
        makeString: options.makeString,
        makeImage: options.makeImage
      }
    });
    if (this.noPadding) {
      upSale.style.marginLeft = '10px';
    }
    belowVisualization.appendChild(upSale);
  } else if (typeof options.makeYourOwn === 'undefined') {
    upSale.innerHTML = require('./templates/learn.html.ejs')({
      assetUrl: this.assetUrl
    });
    belowVisualization.appendChild(upSale);
  }
};

/**
 * Get the url of path appended to BASE_URL
 */
StudioApp.prototype.assetUrl_ = function (path) {
  if (this.BASE_URL === undefined) {
    throw new Error('StudioApp BASE_URL has not been set. ' +
      'Call configure() first');
  }
  return this.BASE_URL + ((window.digestManifest || {})[path] || path);
};

/**
 * Reset the playing field to the start position and kill any pending
 * animation tasks.  This will typically be replaced by an application.
 * @param {boolean} shouldPlayOpeningAnimation True if an opening animation is
 *   to be played.
 */
StudioApp.prototype.reset = function (shouldPlayOpeningAnimation) {
  // TODO (bbuchanan): Look for comon reset logic we can pull here
  // Override in app subclass
};


/**
 * Override to change run behavior.
 */
StudioApp.prototype.runButtonClick = function() {};

/**
 * Toggle whether run button or reset button is shown
 * @param {string} button Button to show, either "run" or "reset"
 */
StudioApp.prototype.toggleRunReset = function(button) {
  var showRun = (button === 'run');
  if (button !== 'run' && button !== 'reset') {
    throw "Unexpected input";
  }

  var run = document.getElementById('runButton');
  var reset = document.getElementById('resetButton');
  run.style.display = showRun ? 'inline-block' : 'none';
  run.disabled = !showRun;
  reset.style.display = !showRun ? 'inline-block' : 'none';
  reset.disabled = showRun;

  // Toggle soft-buttons (all have the 'arrow' class set):
  $('.arrow').prop("disabled", showRun);
};

/**
 * Attempts to associate a set of audio files to a given name
 * Handles the case where cdoSounds does not exist, e.g. in tests
 * and grunt dev preview mode
 * @param {Array.<string>} filenames file paths for sounds
 * @param {string} name ID to associate sound effect with
 */
StudioApp.prototype.loadAudio = function(filenames, name) {
  if (!this.cdoSounds) {
    return;
  }

  this.cdoSounds.registerByFilenamesAndID(filenames, name);
};

/**
 * Attempts to play a sound effect
 * @param {string} name sound ID
 * @param {Object} options for sound playback
 * @param {number} options.volume value between 0.0 and 1.0 specifying volume
 * @param {function} [options.onEnded]
 */
StudioApp.prototype.playAudio = function(name, options) {
  if (!this.cdoSounds) {
    return;
  }

  options = options || {};
  var defaultOptions = {volume: 0.5};
  var newOptions = utils.extend(defaultOptions, options);
  this.cdoSounds.play(name, newOptions);
};

/**
 * Stops looping a given sound
 * @param {string} name ID of sound
 */
StudioApp.prototype.stopLoopingAudio = function(name) {
  if (!this.cdoSounds) {
    return;
  }

  this.cdoSounds.stopLoopingAudio(name);
};

/**
* @param {Object} options Configuration parameters for Blockly. Parameters are
* optional and include:
*  - {string} path The root path to the /apps directory, defaults to the
*    the directory in which this script is located.
*  - {boolean} rtl True if the current language right to left.
*  - {DomElement} toolbox The element in which to insert the toolbox,
*    defaults to the element with 'toolbox'.
*  - {boolean} trashcan True if the trashcan should be displayed, defaults to
*    true.
* @param {Element} div The parent div in which to insert Blockly.
*/
StudioApp.prototype.inject = function(div, options) {
  var defaults = {
    assetUrl: this.assetUrl,
    rtl: this.isRtl(),
    toolbox: document.getElementById('toolbox'),
    trashcan: true,
    customSimpleDialog: this.feedback_.showSimpleDialog.bind(this.feedback_,
        this.Dialog)
  };
  Blockly.inject(div, utils.extend(defaults, options), this.cdoSounds);
};

/**
 * Returns true if the current HTML page is in right-to-left language mode.
 */
StudioApp.prototype.isRtl = function() {
  var head = document.getElementsByTagName('head')[0];
  if (head && head.parentElement) {
    var dir = head.parentElement.getAttribute('dir');
    return (dir && dir.toLowerCase() === 'rtl');
  } else {
    return false;
  }
};

/**
 * @return {string} Locale direction string based on app direction.
 */
StudioApp.prototype.localeDirection = function() {
  return (this.isRtl() ? 'rtl' : 'ltr');
};

/**
* Initialize Blockly for a readonly iframe.  Called on page load. No sounds.
* XML argument may be generated from the console with:
* Blockly.Xml.domToText(Blockly.Xml.blockSpaceToDom(Blockly.mainBlockSpace)).slice(5, -6)
*/
StudioApp.prototype.initReadonly = function(options) {
  Blockly.inject(document.getElementById('codeWorkspace'), {
    assetUrl: this.assetUrl,
    readOnly: true,
    rtl: this.isRtl(),
    scrollbars: false
  });
  this.loadBlocks(options.blocks);
};

/**
* Load the editor with blocks.
* @param {string} blocksXml Text representation of blocks.
*/
StudioApp.prototype.loadBlocks = function(blocksXml) {
  var xml = parseXmlElement(blocksXml);
  Blockly.Xml.domToBlockSpace(Blockly.mainBlockSpace, xml);
};

/**
* Applies the specified arrangement to top startBlocks. If any
* individual blocks have x or y properties set in the XML, those values
* take priority. If no arrangement for a particular block type is
* specified, blocks are automatically positioned by Blockly.
*
* Note that, currently, only bounce and flappy use arrangements.
*
* @param {string} startBlocks String representation of start blocks xml.
* @param {Object.<Object>} arrangement A map from block type to position.
* @return {string} String representation of start blocks xml, including
*    block position.
*/
StudioApp.prototype.arrangeBlockPosition = function(startBlocks, arrangement) {

  var type, xmlChild;

  var xml = parseXmlElement(startBlocks);

  var xmlChildNodes = xml.childNodes || [];
  arrangement = arrangement || {};

  for (var i = 0; i < xmlChildNodes.length; i++) {
    xmlChild = xmlChildNodes[i];

    // Only look at element nodes
    if (xmlChild.nodeType === 1) {
      // look to see if we have a predefined arrangement for this type
      type = xmlChild.getAttribute('type');
      if (arrangement[type]) {
        if (arrangement[type].x && !xmlChild.hasAttribute('x')) {
          xmlChild.setAttribute('x', arrangement[type].x);
        }
        if (arrangement[type].y && !xmlChild.hasAttribute('y')) {
          xmlChild.setAttribute('y', arrangement[type].y);
        }
      }
    }
  }
  return Blockly.Xml.domToText(xml);
};

StudioApp.prototype.createModalDialog = function(options) {
  options.Dialog = utils.valueOr(options.Dialog, this.Dialog);
  return this.feedback_.createModalDialog(options);
};

StudioApp.prototype.showInstructions_ = function(level, autoClose) {
  var instructionsDiv = document.createElement('div');
  var renderedMarkdown;
  var scrollableSelector;
  var headerElement;

  var puzzleTitle = msg.puzzleTitle({
    stage_total: level.stage_total,
    puzzle_number: level.puzzle_number
  });

  if (window.marked && level.markdownInstructions && this.LOCALE === ENGLISH_LOCALE) {
    renderedMarkdown = marked(level.markdownInstructions);
    scrollableSelector = '.instructions-markdown';
    instructionsDiv.className += ' markdown-instructions-container';
    headerElement = document.createElement('h1');
    headerElement.className = 'markdown-level-header-text dialog-title';
    headerElement.innerHTML = puzzleTitle;
    if (!this.icon) {
      headerElement.className += ' no-modal-icon';
    }
  }

  instructionsDiv.innerHTML = require('./templates/instructions.html.ejs')({
    puzzleTitle: puzzleTitle,
    instructions: level.instructions,
    instructions2: level.instructions2,
    renderedMarkdown: renderedMarkdown,
    aniGifURL: level.aniGifURL
  });

  var buttons = document.createElement('div');
  buttons.innerHTML = require('./templates/buttons.html.ejs')({
    data: {
      ok: true
    }
  });

  instructionsDiv.appendChild(buttons);

  // If there is an instructions block on the screen, we want the instructions dialog to
  // shrink down to that instructions block when it's dismissed.
  // We then want to flash the instructions block.
  var hideOptions = null;
  var endTargetSelector = "#bubble";

  if ($(endTargetSelector).length) {
    hideOptions = {};
    hideOptions.endTarget = endTargetSelector;
  }

  var hideFn = _.bind(function() {
    // Momentarily flash the instruction block white then back to regular.
    if ($(endTargetSelector).length) {
      $(endTargetSelector).css({"background-color":"rgba(255,255,255,1)"})
        .delay(500)
        .animate({"background-color":"rgba(0,0,0,0)"},1000);
    }
    // Set focus to ace editor when instructions close:
    if (this.editCode && this.editor && !this.editor.currentlyUsingBlocks) {
      this.editor.aceEditor.focus();
    }
  }, this);

  this.instructionsDialog = this.createModalDialog({
    contentDiv: instructionsDiv,
    icon: this.icon,
    defaultBtnSelector: '#ok-button',
    onHidden: hideFn,
    scrollContent: !!renderedMarkdown,
    scrollableSelector: scrollableSelector,
    header: headerElement
  });

  if (autoClose) {
    setTimeout(_.bind(function() {
      this.instructionsDialog.hide();
    }, this), 32000);
  }

  var okayButton = buttons.querySelector('#ok-button');
  if (okayButton) {
    dom.addClickTouchEvent(okayButton, _.bind(function() {
      if (this.instructionsDialog) {
        this.instructionsDialog.hide();
      }
    }, this));
  }

  this.instructionsDialog.show({hideOptions: hideOptions});

  if (renderedMarkdown) {
    // process <details> tags with polyfill jQuery plugin
    $('details').details();
  }

  // Fire a custom event on the document so that other code can respond
  // to instructions being shown.
  var event = document.createEvent('Event');
  event.initEvent('instructionsShown', true, true);
  document.dispatchEvent(event);
};

/**
*  Resizes the blockly workspace.
*/
StudioApp.prototype.onResize = function() {
  var workspaceWidth = document.getElementById('codeWorkspace').clientWidth;

  // Keep blocks static relative to the right edge in RTL mode
  if (this.isUsingBlockly() && Blockly.RTL) {
    if (this.lastWorkspaceWidth && (this.lastWorkspaceWidth !== workspaceWidth)) {
      var blockOffset = workspaceWidth - this.lastWorkspaceWidth;
      Blockly.mainBlockSpace.getTopBlocks().forEach(function (topBlock) {
        topBlock.moveBy(blockOffset, 0);
      });
    }
  }
  this.lastWorkspaceWidth = workspaceWidth;

  // Droplet toolbox width varies as the window size changes, so refresh:
  this.resizeToolboxHeader();

  // Content below visualization is a resizing scroll area in pinned mode
  onResizeSmallFooter();
};

/**
 * Resizes the content area below the visualization in pinned (viewport height)
 * view mode.
 */
function resizePinnedBelowVisualizationArea() {
  var pinnedBelowVisualization = document.querySelector(
      '#visualizationColumn.pin_bottom #belowVisualization');
  if (!pinnedBelowVisualization) {
    return;
  }

  var visualization = document.getElementById('visualization');
  var gameButtons = document.getElementById('gameButtons');
  var smallFooter = document.querySelector('#page-small-footer .small-footer-base');

  var top = 0;
  if (visualization) {
    top += $(visualization).outerHeight(true);
  }

  if (gameButtons) {
    top += $(gameButtons).outerHeight(true);
  }

  var bottom = 0;
  if (smallFooter) {
    var codeApp = $('#codeApp');
    bottom += $(smallFooter).outerHeight(true);
    // Footer is relative to the document, not codeApp, so we need to
    // remove the codeApp bottom offset to get the correct margin.
    bottom -= parseInt(codeApp.css('bottom'), 10);
  }

  pinnedBelowVisualization.style.top = top + 'px';
  pinnedBelowVisualization.style.bottom = bottom + 'px';
}

/**
 * Debounced onResize operations that update the layout to support sizing
 * to viewport height and using the small footer.
 * @type {Function}
 */
var onResizeSmallFooter = _.debounce(function () {
  resizePinnedBelowVisualizationArea();
}, 10);

StudioApp.prototype.onMouseDownVizResizeBar = function (event) {
  // When we see a mouse down in the resize bar, start tracking mouse moves:

  if (!this.onMouseMoveBoundHandler) {
    this.onMouseMoveBoundHandler = _.bind(this.onMouseMoveVizResizeBar, this);
    document.body.addEventListener('mousemove', this.onMouseMoveBoundHandler);
    this.mouseMoveTouchEventName = dom.getTouchEventName('mousemove');
    if (this.mouseMoveTouchEventName) {
      document.body.addEventListener(this.mouseMoveTouchEventName,
                                     this.onMouseMoveBoundHandler);
    }

    event.preventDefault();
  }
};

function applyTransformScaleToChildren(element, scale) {
  for (var i = 0; i < element.children.length; i++) {
    var childScale = ($(element.children[i]).css('position') === 'absolute') ? 'scale(1)' : scale;
    element.children[i].style.transform = childScale;
    element.children[i].style.msTransform = childScale;
    element.children[i].style.webkitTransform = childScale;
  }
}

/**
*  Handle mouse moves while dragging the visualization resize bar. We set
*  styles on each of the elements directly, overriding the normal responsive
*  classes that would typically adjust width and scale.
*/
StudioApp.prototype.onMouseMoveVizResizeBar = function (event) {
  var visualizationResizeBar = document.getElementById('visualizationResizeBar');

  var rect = visualizationResizeBar.getBoundingClientRect();
  var offset;
  var newVizWidth;
  if (this.isRtl()) {
    offset = window.innerWidth -
      (window.pageXOffset + rect.left + (rect.width / 2)) -
      parseInt(window.getComputedStyle(visualizationResizeBar).right, 10);
    newVizWidth = (window.innerWidth - event.pageX) - offset;
  } else {
    offset = window.pageXOffset + rect.left + (rect.width / 2) -
      parseInt(window.getComputedStyle(visualizationResizeBar).left, 10);
    newVizWidth = event.pageX - offset;
  }
  this.resizeVisualization(newVizWidth);
};

/**
 * Resize the visualization to the given width
 */
StudioApp.prototype.resizeVisualization = function (width) {
  var codeWorkspace = document.getElementById('codeWorkspace');
  var visualization = document.getElementById('visualization');
  var visualizationResizeBar = document.getElementById('visualizationResizeBar');
  var visualizationColumn = document.getElementById('visualizationColumn');
  var visualizationEditor = document.getElementById('visualizationEditor');

  var newVizWidth = Math.max(MIN_VISUALIZATION_WIDTH,
                         Math.min(MAX_VISUALIZATION_WIDTH, width));
  var newVizWidthString = newVizWidth + 'px';
  var newVizHeightString = (newVizWidth / this.vizAspectRatio) + 'px';
  var vizSideBorderWidth = visualization.offsetWidth - visualization.clientWidth;

  if (this.isRtl()) {
    visualizationResizeBar.style.right = newVizWidthString;
    codeWorkspace.style.right = newVizWidthString;
  } else {
    visualizationResizeBar.style.left = newVizWidthString;
    codeWorkspace.style.left = newVizWidthString;
  }
  visualizationResizeBar.style.lineHeight = newVizHeightString;
  // Add extra width to visualizationColumn if visualization has a border:
  visualizationColumn.style.maxWidth = (newVizWidth + vizSideBorderWidth) + 'px';
  visualization.style.maxWidth = newVizWidthString;
  visualization.style.maxHeight = newVizHeightString;

  // We don't get the benefits of our responsive styling, so set height
  // explicitly
  if (!utils.browserSupportsCssMedia()) {
    visualization.style.height = newVizHeightString;
    visualization.style.width = newVizWidthString;
  }
  var scale = (newVizWidth / this.nativeVizWidth);

  applyTransformScaleToChildren(visualization, 'scale(' + scale + ')');
  if (visualizationEditor) {
    visualizationEditor.style.marginLeft = newVizWidthString;
  }

  var smallFooter = document.querySelector('#page-small-footer .small-footer-base');
  if (smallFooter) {
    smallFooter.style.maxWidth = newVizWidthString;

    // If the small print and language selector are on the same line,
    // the small print should float right.  Otherwise, it should float left.
    var languageSelector = smallFooter.querySelector('form');
    var smallPrint = smallFooter.querySelector('small');
    if (languageSelector && smallPrint.offsetTop === languageSelector.offsetTop) {
      smallPrint.style.float = 'right';
    } else {
      smallPrint.style.float = 'left';
    }
  }

  // Fire resize so blockly and droplet handle this type of resize properly:
  utils.fireResizeEvent();
};

StudioApp.prototype.onMouseUpVizResizeBar = function (event) {
  // If we have been tracking mouse moves, remove the handler now:
  if (this.onMouseMoveBoundHandler) {
    document.body.removeEventListener('mousemove', this.onMouseMoveBoundHandler);
    if (this.mouseMoveTouchEventName) {
      document.body.removeEventListener(this.mouseMoveTouchEventName,
                                        this.onMouseMoveBoundHandler);
    }
    this.onMouseMoveBoundHandler = null;
  }
};


/**
*  Updates the width of the toolbox-header to match the width of the toolbox
*  or palette in the workspace below the header.
*/
StudioApp.prototype.resizeToolboxHeader = function() {
  var toolboxWidth = 0;
  if (this.editCode && this.editor && this.editor.paletteEnabled) {
    // If in the droplet editor, set toolboxWidth based on the block palette width:
    var categories = document.querySelector('.droplet-palette-wrapper');
    toolboxWidth = categories.getBoundingClientRect().width;
  } else if (this.isUsingBlockly()) {
    toolboxWidth = Blockly.mainBlockSpaceEditor.getToolboxWidth();
  }
  document.getElementById('toolbox-header').style.width = toolboxWidth + 'px';
};

/**
* Highlight the block (or clear highlighting).
* @param {?string} id ID of block that triggered this action.
* @param {boolean} spotlight Optional.  Highlight entire block if true
*/
StudioApp.prototype.highlight = function(id, spotlight) {
  if (this.isUsingBlockly()) {
    if (id) {
      var m = id.match(/^block_id_(\d+)$/);
      if (m) {
        id = m[1];
      }
    }

    Blockly.mainBlockSpace.highlightBlock(id, spotlight);
  }
};

/**
* Remove highlighting from all blocks
*/
StudioApp.prototype.clearHighlighting = function () {
  if (this.isUsingBlockly()) {
    this.highlight(null);
  } else if (this.editCode && this.editor) {
    // Clear everything (step highlighting, errors, etc.)
    codegen.clearDropletAceHighlighting(this.editor, true);
  }
};

/**
* Display feedback based on test results.  The test results must be
* explicitly provided.
* @param {{feedbackType: number}} Test results (a constant property of
*     this.TestResults).
*/
StudioApp.prototype.displayFeedback = function(options) {
  options.Dialog = this.Dialog;
  options.onContinue = this.onContinue;
  options.backToPreviousLevel = this.backToPreviousLevel;
  options.sendToPhone = this.sendToPhone;

  // Special test code for edit blocks.
  if (options.level.edit_blocks) {
    options.feedbackType = this.TestResults.EDIT_BLOCKS;
  }

  this.feedback_.displayFeedback(options, this.requiredBlocks_,
      this.maxRequiredBlocksToFlag_, this.recommendedBlocks_,
      this.maxRecommendedBlocksToFlag_);
};

/**
 * Runs the tests and returns results.
 * @param {boolean} levelComplete Was the level completed successfully?
 * @param {Object} options
 * @return {number} The appropriate property of TestResults.
 */
StudioApp.prototype.getTestResults = function(levelComplete, options) {
  return this.feedback_.getTestResults(levelComplete,
      this.requiredBlocks_, this.recommendedBlocks_, this.checkForEmptyBlocks_, options);
};

// Builds the dom to get more info from the user. After user enters info
// and click "create level" onAttemptCallback is called to deliver the info
// to the server.
StudioApp.prototype.builderForm_ = function(onAttemptCallback) {
  var builderDetails = document.createElement('div');
  builderDetails.innerHTML = require('./templates/builder.html.ejs')();
  var dialog = this.createModalDialog({
    contentDiv: builderDetails,
    icon: this.icon
  });
  var createLevelButton = document.getElementById('create-level-button');
  dom.addClickTouchEvent(createLevelButton, function() {
    var instructions = builderDetails.querySelector('[name="instructions"]').value;
    var name = builderDetails.querySelector('[name="level_name"]').value;
    var query = url.parse(window.location.href, true).query;
    onAttemptCallback(utils.extend({
      "instructions": instructions,
      "name": name
    }, query));
  });

  dialog.show({ backdrop: 'static' });
};

/**
* Report back to the server, if available.
* @param {object} options - parameter block which includes:
* {string} app The name of the application.
* {number} id A unique identifier generated when the page was loaded.
* {string} level The ID of the current level.
* {number} result An indicator of the success of the code.
* {number} testResult More specific data on success or failure of code.
* {string} program The user program, which will get URL-encoded.
* {function} onComplete Function to be called upon completion.
*/
StudioApp.prototype.report = function(options) {
  // copy from options: app, level, result, testResult, program, onComplete
  var report = options;
  report.pass = this.feedback_.canContinueToNextLevel(options.testResult);
  report.time = ((new Date().getTime()) - this.initTime);
  report.attempt = this.attempts;
  report.lines = this.feedback_.getNumBlocksUsed();

  // If hideSource is enabled, the user is looking at a shared level that
  // they cannot have modified. In that case, don't report it to the service
  // or call the onComplete() callback expected. The app will just sit
  // there with the Reset button as the only option.
  var self = this;
  if (!(this.hideSource && this.share)) {
    var onAttemptCallback = (function() {
      return function(builderDetails) {
        for (var option in builderDetails) {
          report[option] = builderDetails[option];
        }
        self.onAttempt(report);
      };
    })();

    // If this is the level builder, go to builderForm to get more info from
    // the level builder.
    if (options.builder) {
      this.builderForm_(onAttemptCallback);
    } else {
      onAttemptCallback();
    }
  }
};

/**
* Click the reset button.  Reset the application.
*/
StudioApp.prototype.resetButtonClick = function() {
  this.onResetPressed();
  this.toggleRunReset('run');
  this.clearHighlighting();
  if (this.isUsingBlockly()) {
    Blockly.mainBlockSpaceEditor.setEnableToolbox(true);
    Blockly.mainBlockSpace.traceOn(false);
  }
  this.reset(false);
};

/**
* Add count of blocks used.
*/
StudioApp.prototype.updateBlockCount = function() {
  // If the number of block used is bigger than the ideal number of blocks,
  // set it to be yellow, otherwise, keep it as black.
  var element = document.getElementById('blockUsed');
  if (this.IDEAL_BLOCK_NUM < this.feedback_.getNumCountableBlocks()) {
    element.className = "block-counter-overflow";
  } else {
    element.className = "block-counter-default";
  }

  // Update number of blocks used.
  if (element) {
    element.innerHTML = '';  // Remove existing children or text.
    element.appendChild(document.createTextNode(
      this.feedback_.getNumCountableBlocks()));
  }
};

/**
 * Set the ideal Number of blocks.
 */
StudioApp.prototype.setIdealBlockNumber_ = function() {
  var element = document.getElementById('idealBlockNumber');
  if (!element) {
    return;
  }

  var idealBlockNumberMsg = this.IDEAL_BLOCK_NUM === Infinity ?
    msg.infinity() : this.IDEAL_BLOCK_NUM;
  element.innerHTML = '';  // Remove existing children or text.
  element.appendChild(document.createTextNode(
    idealBlockNumberMsg));
};


/**
 *
 */
StudioApp.prototype.fixViewportForSmallScreens_ = function (viewport, config) {
  var deviceWidth;
  var desiredWidth;
  var minWidth;
  if (this.share && dom.isMobile()) {
    var mobileNoPaddingShareWidth =
      config.mobileNoPaddingShareWidth || DEFAULT_MOBILE_NO_PADDING_SHARE_WIDTH;
    // for mobile sharing, don't assume landscape mode, use screen.width
    deviceWidth = desiredWidth = screen.width;
    if (this.noPadding && screen.width < MAX_PHONE_WIDTH) {
      desiredWidth = Math.min(desiredWidth, mobileNoPaddingShareWidth);
    }
    minWidth = mobileNoPaddingShareWidth +
      (this.noPadding ? 0 : MOBILE_SHARE_WIDTH_PADDING);
  }
  else {
    // assume we are in landscape mode, so width is the longer of the two
    deviceWidth = desiredWidth = Math.max(screen.width, screen.height);
    minWidth = MIN_WIDTH;
  }
  var width = Math.max(minWidth, desiredWidth);
  var scale = deviceWidth / width;
  var content = ['width=' + width,
    'minimal-ui',
    'initial-scale=' + scale,
    'maximum-scale=' + scale,
    'minimum-scale=' + scale,
    'target-densityDpi=device-dpi',
    'user-scalable=no'];
  viewport.setAttribute('content', content.join(', '));
};

/**
 *
 */
StudioApp.prototype.setConfigValues_ = function (config) {
  this.share = config.share;

  // if true, dont provide links to share on fb/twitter
  this.disableSocialShare = config.disableSocialShare;
  this.sendToPhone = config.sendToPhone;
  this.noPadding = config.noPadding;

  // contract editor requires more vertical space. set height to 1250 unless
  // explicitly specified
  if (config.level.useContractEditor) {
    config.level.minWorkspaceHeight = config.level.minWorkspaceHeight || 1250;
  }

  this.appMsg = config.appMsg;
  this.IDEAL_BLOCK_NUM = config.level.ideal || Infinity;
  this.MIN_WORKSPACE_HEIGHT = config.level.minWorkspaceHeight || 800;
  this.requiredBlocks_ = config.level.requiredBlocks || [];
  this.recommendedBlocks_ = config.level.recommendedBlocks || [];
  this.startBlocks_ = config.level.lastAttempt || config.level.startBlocks || '';
  this.vizAspectRatio = config.vizAspectRatio || 1.0;
  this.nativeVizWidth = config.nativeVizWidth || MAX_VISUALIZATION_WIDTH;

  // enableShowCode defaults to true if not defined
  this.enableShowCode = (config.enableShowCode !== false);

  // If the level has no ideal block count, don't show a block count. If it does
  // have an ideal, show block count unless explicitly configured not to.
  if (config.level && (config.level.ideal === undefined || config.level.ideal === Infinity)) {
    this.enableShowBlockCount = false;
  } else {
    this.enableShowBlockCount = config.enableShowBlockCount !== false;
  }

  // Store configuration.
  this.onAttempt = config.onAttempt || function () {};
  this.onContinue = config.onContinue || function () {};
  this.onInitialize = config.onInitialize ?
                        config.onInitialize.bind(config) : function () {};
  this.onResetPressed = config.onResetPressed || function () {};
  this.backToPreviousLevel = config.backToPreviousLevel || function () {};
};

// Overwritten by applab.
StudioApp.prototype.runButtonClickWrapper = function (callback) {
  if (window.$) {
    $(window).trigger('run_button_pressed');
    $(window).trigger('appModeChanged');
  }
  callback();
};

/**
 * Begin modifying the DOM based on config.
 * Note: Has side effects on config
 */
StudioApp.prototype.configureDom = function (config) {
  var container = document.getElementById(config.containerId);
  container.innerHTML = config.html;
  if (!this.enableShowCode) {
    document.getElementById('show-code-header').style.display = 'none';
  }
  var codeWorkspace = container.querySelector('#codeWorkspace');

  var runButton = container.querySelector('#runButton');
  var resetButton = container.querySelector('#resetButton');
  var runClick = this.runButtonClick.bind(this);
  var throttledRunClick = _.debounce(this.runButtonClickWrapper.bind(this, runClick), 250, true);
  dom.addClickTouchEvent(runButton, _.bind(throttledRunClick, this));
  dom.addClickTouchEvent(resetButton, _.bind(this.resetButtonClick, this));

  // TODO (cpirich): make conditional for applab
  var belowViz = document.getElementById('belowVisualization');
  var referenceArea = document.getElementById('reference_area');
  if (referenceArea) {
    belowViz.appendChild(referenceArea);
  }

  var visualizationColumn = document.getElementById('visualizationColumn');
  var visualization = document.getElementById('visualization');

  if (!config.hideSource || config.embed) {
    var vizHeight = this.MIN_WORKSPACE_HEIGHT;
    if (this.isUsingBlockly() && config.level.edit_blocks) {
      // Set a class on the main blockly div so CSS can style blocks differently
      $(codeWorkspace).addClass('edit');
      // If in level builder editing blocks, make workspace extra tall
      vizHeight = 3000;
      // Modify the arrangement of toolbox blocks so categories align left
      if (config.level.edit_blocks == "toolbox_blocks") {
        this.blockYCoordinateInterval = 80;
        config.blockArrangement = { category : { x: 20 } };
      }
      // Enable param & var editing in levelbuilder, regardless of level setting
      config.level.disableParamEditing = false;
      config.level.disableVariableEditing = false;
    }

    if (config.pinWorkspaceToBottom) {
      var bodyElement = document.body;
      bodyElement.style.overflow = "hidden";
      bodyElement.className = bodyElement.className + " pin_bottom";
      container.className = container.className + " pin_bottom";
      visualizationColumn.className = visualizationColumn.className + " pin_bottom";
      codeWorkspace.className = codeWorkspace.className + " pin_bottom";
      if (this.editCode) {
        var codeTextbox = document.getElementById('codeTextbox');
        codeTextbox.className = codeTextbox.className + " pin_bottom";
      }
    } else {
      visualizationColumn.style.minHeight = vizHeight + 'px';
      container.style.minHeight = vizHeight + 'px';
    }
  }

  if (config.readonlyWorkspace) {
    $(codeWorkspace).addClass('readonly');
  }

  if (config.embed && config.hideSource) {
    container.className = container.className + " embed_hidesource";
    visualizationColumn.className = visualizationColumn.className + " embed_hidesource";
  }

  if (!config.embed && !config.hideSource) {
    // Make the visualization responsive to screen size, except on share page.
    visualization.className += " responsive";
    visualizationColumn.className += " responsive";
    var smallFooter = document.querySelector('#page-small-footer .small-footer-base');
    if (smallFooter) {
      smallFooter.className += " responsive";
    }
  }
};

/**
 *
 */
StudioApp.prototype.handleHideSource_ = function (options) {
  var container = document.getElementById(options.containerId);
  this.hideSource = true;
  var workspaceDiv = document.getElementById('codeWorkspace');
  if (!options.embed || options.level.skipInstructionsPopup) {
    container.className = 'hide-source';
  }
  workspaceDiv.style.display = 'none';
  document.getElementById('visualizationResizeBar').style.display = 'none';

  // Chrome-less share page.
  if (this.share && options.app === 'applab') {
    if (dom.isMobile()) {
      document.getElementById('visualizationColumn').className = 'chromelessShare';
    } else {
      document.getElementsByClassName('header-wrapper')[0].style.display = 'none';
      document.getElementById('visualizationColumn').className = 'wireframeShare';
    }
    document.body.style.backgroundColor = '#202B34';
  // For share page on mobile, do not show this part.
  } else if (!options.embed && !(this.share && dom.isMobile())) {
    var runButton = document.getElementById('runButton');
    var buttonRow = runButton.parentElement;
    var openWorkspace = document.createElement('button');
    openWorkspace.setAttribute('id', 'open-workspace');
    openWorkspace.appendChild(document.createTextNode(msg.openWorkspace()));

    var belowViz = document.getElementById('belowVisualization');
    belowViz.appendChild(this.feedback_.createSharingDiv({
      response: {
        level_source: window.location,
        level_source_id: options.level_source_id,
        phone_share_url: options.phone_share_url
      },
      sendToPhone: options.sendToPhone,
      level: options.level,
      twitter: options.twitter,
      onMainPage: true
    }));

    dom.addClickTouchEvent(openWorkspace, function() {
      // TODO: don't make assumptions about hideSource during init so this works.
      // workspaceDiv.style.display = '';

      // /c/ URLs go to /edit when we click open workspace.
      // /project/ URLs we want to go to /view (which doesnt require login)
      if (/^\/c\//.test(location.pathname)) {
        location.href += '/edit';
      } else {
        location.href += '/view';
      }
    });

    buttonRow.appendChild(openWorkspace);
  }
};

StudioApp.prototype.handleEditCode_ = function (config) {

  if (this.hideSource) {
    // In hide source mode, just call afterInject and exit immediately
    if (config.afterInject) {
      config.afterInject();
    }
    return;
  }

  var displayMessage, examplePrograms, messageElement, onChange, startingText;

  // Ensure global ace variable is the same as window.ace
  // (important because they can be different in our test environment)

  /* jshint ignore:start */
  ace = window.ace;
  /* jshint ignore:end */

  var fullDropletPalette = dropletUtils.generateDropletPalette(
    config.level.codeFunctions, config.dropletConfig);
  this.editor = new droplet.Editor(document.getElementById('codeTextbox'), {
    mode: 'javascript',
    modeOptions: dropletUtils.generateDropletModeOptions(config),
    palette: fullDropletPalette,
    showPaletteInTextMode: true,
    dropIntoAceAtLineStart: config.dropIntoAceAtLineStart,
    enablePaletteAtStart: !config.readonlyWorkspace,
    textModeAtStart: config.level.textModeAtStart
  });

  this.editor.aceEditor.setShowPrintMargin(false);

  // Init and define our custom ace mode:
  aceMode.defineForAce(config.dropletConfig, config.unusedConfig, this.editor);
  // Now set the editor to that mode:
  this.editor.aceEditor.session.setMode('ace/mode/javascript_codeorg');

  // Add an ace completer for the API functions exposed for this level
  if (config.dropletConfig) {
    var functionsFilter = null;
    if (config.level.autocompletePaletteApisOnly) {
       functionsFilter = config.level.codeFunctions;
    }
    var langTools = window.ace.require("ace/ext/language_tools");
    langTools.addCompleter(
      dropletUtils.generateAceApiCompleter(functionsFilter, config.dropletConfig));
  }

  this.editor.aceEditor.setOptions({
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true
  });

  this.dropletTooltipManager = new DropletTooltipManager(this.appMsg, config.dropletConfig);
  if (config.level.dropletTooltipsDisabled) {
    this.dropletTooltipManager.setTooltipsEnabled(false);
  }
  this.dropletTooltipManager.registerBlocksFromList(
    dropletUtils.getAllAvailableDropletBlocks(config.dropletConfig));

  // Bind listener to palette/toolbox 'Hide' and 'Show' links
  var hideToolboxHeader = document.getElementById('toolbox-header');
  var hideToolboxIcon = document.getElementById('hide-toolbox-icon');
  var showToolboxHeader = document.getElementById('show-toolbox-header');
  if (hideToolboxHeader && hideToolboxIcon && showToolboxHeader) {
    hideToolboxHeader.className += ' toggleable';
    hideToolboxIcon.style.display = 'inline-block';
    var handleTogglePalette = (function() {
      if (this.editor) {
        this.editor.enablePalette(!this.editor.paletteEnabled);
        showToolboxHeader.style.display =
            this.editor.paletteEnabled ? 'none' : 'inline-block';
        hideToolboxIcon.style.display =
            !this.editor.paletteEnabled ? 'none' : 'inline-block';
        this.resizeToolboxHeader();
      }
    }).bind(this);
    dom.addClickTouchEvent(hideToolboxHeader, handleTogglePalette);
    dom.addClickTouchEvent(showToolboxHeader, handleTogglePalette);
  }

  this.resizeToolboxHeader();

  var startBlocks = config.level.lastAttempt || config.level.startBlocks;
  if (startBlocks) {

    try {
      // Don't pass CRLF pairs to droplet until they fix CR handling:
      this.editor.setValue(startBlocks.replace(/\r\n/g, '\n'));
    } catch (err) {
      // catch errors without blowing up entirely. we may still not be in a
      // great state
      console.error(err.message);
    }
    // Reset droplet Undo stack:
    this.editor.clearUndoStack();
    // Reset ace Undo stack:
    var UndoManager = window.ace.require("ace/undomanager").UndoManager;
    this.editor.aceEditor.getSession().setUndoManager(new UndoManager());
  }

  if (config.readonlyWorkspace) {
    // When in readOnly mode, show source, but do not allow editing,
    // disable the palette, and hide the UI to show the palette:
    this.editor.setReadOnly(true);
    showToolboxHeader.style.display = 'none';
  }

  // droplet may now be in code mode if it couldn't parse the code into
  // blocks, so update the UI based on the current state (don't autofocus
  // if we have already created an instructionsDialog at this stage of init)
  this.onDropletToggle_(!this.instructionsDialog);

  this.dropletTooltipManager.registerDropletBlockModeHandlers(this.editor);

  this.editor.on('palettetoggledone', function(e) {
    // Reposition callouts after block/text toggle (in case they need to move)
    $('.cdo-qtips').qtip('reposition', null, false);
  });

  if (this.instructionsDialog) {
    // Initializing the droplet editor in text mode (ace) can steal the focus
    // from our visible instructions dialog. Restore focus where it belongs:
    this.instructionsDialog.focus();
  }

  if (config.afterEditorReady) {
    config.afterEditorReady();
  }

  if (config.afterInject) {
    config.afterInject();
  }
};

/**
 * Set whether to alert user to empty blocks, short-circuiting all other tests.
 * @param {boolean} checkBlocks Whether to check for empty blocks.
 */
StudioApp.prototype.setCheckForEmptyBlocks = function (checkBlocks) {
  this.checkForEmptyBlocks_ = checkBlocks;
};

/**
 * Add the starting block(s).
 * @param loadLastAttempt If true, try to load config.lastAttempt.
 */
StudioApp.prototype.setStartBlocks_ = function (config, loadLastAttempt) {
  if (config.level.edit_blocks) {
    loadLastAttempt = false;
  }
  var startBlocks = config.level.startBlocks || '';
  if (loadLastAttempt) {
    startBlocks = config.level.lastAttempt || startBlocks;
  }
  if (config.forceInsertTopBlock) {
    startBlocks = blockUtils.forceInsertTopBlock(startBlocks,
        config.forceInsertTopBlock);
  }
  startBlocks = this.arrangeBlockPosition(startBlocks, config.blockArrangement);
  try {
    this.loadBlocks(startBlocks);
  } catch (e) {
    if (loadLastAttempt) {
      Blockly.mainBlockSpace.clear();
      // Try loading the default start blocks instead.
      this.setStartBlocks_(config, false);
    } else {
      throw e;
    }
  }
};

/**
 * Show the configured starting function definition.
 */
StudioApp.prototype.openFunctionDefinition_ = function(config) {
  if (Blockly.contractEditor) {
    Blockly.contractEditor.autoOpenWithLevelConfiguration({
      autoOpenFunction: config.level.openFunctionDefinition,
      contractCollapse: config.level.contractCollapse,
      contractHighlight: config.level.contractHighlight,
      examplesCollapse: config.level.examplesCollapse,
      examplesHighlight: config.level.examplesHighlight,
      definitionCollapse: config.level.definitionCollapse,
      definitionHighlight: config.level.definitionHighlight
    });
  } else {
    Blockly.functionEditor.autoOpenFunction(config.level.openFunctionDefinition);
  }
};

/**
 *
 */
StudioApp.prototype.handleUsingBlockly_ = function (config) {
  // Allow empty blocks if editing blocks.
  if (config.level.edit_blocks) {
    this.checkForEmptyBlocks_ = false;
    if (config.level.edit_blocks === 'required_blocks' ||
        config.level.edit_blocks === 'toolbox_blocks' ||
        config.level.edit_blocks === 'recommended_blocks') {
      // Don't show when run block for toolbox/required/recommended block editing
      config.forceInsertTopBlock = null;
    }
  }

  // If levelbuilder provides an empty toolbox, some apps (like artist)
  // replace it with a full toolbox. I think some levels may depend on this
  // behavior. We want a way to specify no toolbox, which is <xml></xml>
  if (config.level.toolbox) {
    var toolboxWithoutWhitespace = config.level.toolbox.replace(/\s/g, '');
    if (toolboxWithoutWhitespace === '<xml></xml>' ||
        toolboxWithoutWhitespace === '<xml/>') {
      config.level.toolbox = undefined;
    }
  }

  var div = document.getElementById('codeWorkspace');
  var options = {
    toolbox: config.level.toolbox,
    disableParamEditing: utils.valueOr(config.level.disableParamEditing, true),
    disableVariableEditing: utils.valueOr(config.level.disableVariableEditing, false),
    useModalFunctionEditor: utils.valueOr(config.level.useModalFunctionEditor, false),
    useContractEditor: utils.valueOr(config.level.useContractEditor, false),
    disableExamples: utils.valueOr(config.level.disableExamples, false),
    defaultNumExampleBlocks: utils.valueOr(config.level.defaultNumExampleBlocks, 2),
    scrollbars: config.level.scrollbars,
    hasVerticalScrollbars: config.hasVerticalScrollbars,
    hasHorizontalScrollbars: config.hasHorizontalScrollbars,
    editBlocks: utils.valueOr(config.level.edit_blocks, false),
    readOnly: utils.valueOr(config.readonlyWorkspace, false),
    showExampleTestButtons: utils.valueOr(config.showExampleTestButtons, false)
  };
  ['trashcan', 'varsInGlobals', 'grayOutUndeletableBlocks',
    'disableParamEditing'].forEach(
    function (prop) {
      if (config[prop] !== undefined) {
        options[prop] = config[prop];
      }
    });
  this.inject(div, options);
  this.onResize();

  if (config.afterInject) {
    config.afterInject();
  }
  this.setStartBlocks_(config, true);
};

/**
 * Modify the workspace header after a droplet blocks/code or palette toggle
 */
StudioApp.prototype.updateHeadersAfterDropletToggle_ = function (usingBlocks) {
  // Update header titles:
  var showCodeHeader = document.getElementById('show-code-header');
  var contentSpan = showCodeHeader.firstChild;
  var fontAwesomeGlyph = _.find(contentSpan.childNodes, function (node) {
    return /\bfa\b/.test(node.className);
  });
  var imgBlocksGlyph = _.find(contentSpan.childNodes, function (node) {
    return /\bblocks-glyph\b/.test(node.className);
  });

  // Change glyph
  if (usingBlocks) {
    if (fontAwesomeGlyph && imgBlocksGlyph) {
      fontAwesomeGlyph.style.display = 'inline-block';
      imgBlocksGlyph.style.display = 'none';
    }
    contentSpan.lastChild.textContent = msg.showTextHeader();
  } else {
    if (fontAwesomeGlyph && imgBlocksGlyph) {
      fontAwesomeGlyph.style.display = 'none';
      imgBlocksGlyph.style.display = 'inline-block';
    }
    contentSpan.lastChild.textContent = msg.showBlocksHeader();
  }

  var blockCount = document.getElementById('blockCounter');
  if (blockCount) {
    blockCount.style.display =
      (usingBlocks && this.enableShowBlockCount) ? 'inline-block' : 'none';
  }
};

/**
 * Handle updates after a droplet toggle between blocks/code has taken place
 */
StudioApp.prototype.onDropletToggle_ = function (autoFocus) {
  autoFocus = utils.valueOr(autoFocus, true);
  this.updateHeadersAfterDropletToggle_(this.editor.currentlyUsingBlocks);
  if (!this.editor.currentlyUsingBlocks) {
    if (autoFocus) {
      this.editor.aceEditor.focus();
    }
    this.dropletTooltipManager.registerDropletTextModeHandlers(this.editor);
  }
};

/**
 * Do we have any floating blocks not attached to an event block or function block?
 */
StudioApp.prototype.hasExtraTopBlocks = function () {
  return this.feedback_.hasExtraTopBlocks();
};

/**
 *
 */
StudioApp.prototype.hasQuestionMarksInNumberField = function () {
  return this.feedback_.hasQuestionMarksInNumberField();
};

/**
 * @returns true if any non-example block in the workspace has an unfilled input
 */
StudioApp.prototype.hasUnfilledFunctionalBlock = function () {
  return !!this.getUnfilledFunctionalBlock();
};

/**
 * @returns {Block} The first block that has an unfilled input, or undefined
 *   if there isn't one.
 */
StudioApp.prototype.getUnfilledFunctionalBlock = function () {
  return this.getFilteredUnfilledFunctionalBlock_(function (rootBlock) {
    return rootBlock.type !== 'functional_example';
  });
};

/**
 * @returns {Block} The first example block that has an unfilled input, or
 *   undefined if there isn't one. Ignores example blocks that don't have a
 *   call portion, as these are considered invalid.
 */
StudioApp.prototype.getUnfilledFunctionalExample = function () {
  return this.getFilteredUnfilledFunctionalBlock_(function (rootBlock) {
    if (rootBlock.type !== 'functional_example') {
      return false;
    }
    var actual = rootBlock.getInputTargetBlock('ACTUAL');
    return actual && actual.getTitleValue('NAME');
  });
};

/**
 * @param {function} filter Run against root block in chain. Returns true if
 *   this is a block we care about
 */
StudioApp.prototype.getFilteredUnfilledFunctionalBlock_ = function (filter) {
  var unfilledBlock;
  Blockly.mainBlockSpace.getAllBlocks().some(function (block) {
    // Get the root block in the chain
    var rootBlock = block.getRootBlock();
    if (!filter(rootBlock)) {
      return false;
    }

    if (block.hasUnfilledFunctionalInput()) {
      unfilledBlock = block;
      return true;
    }
  });

  return unfilledBlock;
};

/**
 * @returns {string} The name of a function that doesn't have any examples, or
 *   undefined if all have at least one.
 */
StudioApp.prototype.getFunctionWithoutTwoExamples = function () {
  var definitionNames = Blockly.mainBlockSpace.getTopBlocks().filter(function (block) {
    return block.type === 'functional_definition' && !block.isVariable();
  }).map(function (definitionBlock) {
    return definitionBlock.getProcedureInfo().name;
  });

  var exampleNames = Blockly.mainBlockSpace.getTopBlocks().filter(function (block) {
    if (block.type !== 'functional_example') {
      return false;
    }

    // Only care about functional_examples that have an ACTUAL input (i.e. it's
    // clear which function they're for
    var actual = block.getInputTargetBlock('ACTUAL');
    return actual && actual.getTitleValue('NAME');
  }).map(function (exampleBlock) {
    return exampleBlock.getInputTargetBlock('ACTUAL').getTitleValue('NAME');
  });

  var definitionWithLessThanTwoExamples;
  definitionNames.forEach(function (def) {
    var definitionExamples = exampleNames.filter(function(example) {
      return def === example;
    });

    if (definitionExamples.length < 2) {
      definitionWithLessThanTwoExamples = def;
    }
  });
  return definitionWithLessThanTwoExamples;
};

/**
 * Get the error message when we have an unfilled block
 * @param {string} topLevelType The block.type For our expected top level block
 */
StudioApp.prototype.getUnfilledFunctionalBlockError = function (topLevelType) {
  var unfilled = this.getUnfilledFunctionalBlock();

  if (!unfilled) {
    return null;
  }

  var topParent = unfilled;
  while (topParent.getParent()) {
    topParent = topParent.getParent();
  }

  if (unfilled.type === topLevelType) {
    return msg.emptyTopLevelBlock({topLevelBlockName: unfilled.getTitleValue()});
  }

  if (topParent.type !== 'functional_definition') {
    return msg.emptyFunctionalBlock();
  }

  var procedureInfo = topParent.getProcedureInfo();
  if (topParent.isVariable()) {
    return msg.emptyBlockInVariable({name: procedureInfo.name});
  } else {
    return msg.emptyBlockInFunction({name: procedureInfo.name});
  }
};

/**
 * Looks for failing examples, and updates the result text for them if they're
 * open in the contract editor
 * @param {function} failureChecker Apps example tester that takes in an example
 *   block, and outputs a failure string (or null if success)
 * @returns {string} Name of block containing first failing example we found, or
 *   empty string if no failures.
 */
StudioApp.prototype.checkForFailingExamples = function (failureChecker) {
  var failingBlockName = '';
  Blockly.mainBlockSpace.findFunctionExamples().forEach(function (exampleBlock) {
    var failure = failureChecker(exampleBlock, false);

    // Update the example result. No-op if we're not currently editing this
    // function.
    Blockly.contractEditor.updateExampleResult(exampleBlock, failure);

    if (failure) {
      failingBlockName = exampleBlock.getInputTargetBlock('ACTUAL')
        .getTitleValue('NAME');
    }
  });
  return failingBlockName;
};

/**
 * @returns {boolean} True if we have a function or variable named "" (empty string)
 */
StudioApp.prototype.hasEmptyFunctionOrVariableName = function () {
  return Blockly.mainBlockSpace.getTopBlocks().some(function (block) {
    if (block.type !== 'functional_definition') {
      return false;
    }

    return !(block.getProcedureInfo().name);
  });
};

StudioApp.prototype.createCoordinateGridBackground = function (options) {
  var svgName = options.svg;
  var origin = options.origin;
  var firstLabel = options.firstLabel;
  var lastLabel = options.lastLabel;
  var increment = options.increment;

  var CANVAS_HEIGHT = 400;
  var CANVAS_WIDTH = 400;

  var svg = document.getElementById(svgName);

  var bbox, text, rect;
  for (var label = firstLabel; label <= lastLabel; label += increment) {
    // create x axis labels
    text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.appendChild(document.createTextNode(label));
    svg.appendChild(text);
    bbox = text.getBBox();
    text.setAttribute('x', label - origin - bbox.width / 2);
    text.setAttribute('y', CANVAS_HEIGHT);
    text.setAttribute('font-weight', 'bold');
    rect = rectFromElementBoundingBox(text);
    rect.setAttribute('fill', 'white');
    svg.insertBefore(rect, text);

    // create y axis labels
    text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.appendChild(document.createTextNode(label));
    svg.appendChild(text);
    bbox = text.getBBox();
    text.setAttribute('x', 0);
    text.setAttribute('y', CANVAS_HEIGHT - (label - origin));
    text.setAttribute('dominant-baseline', 'central');
    text.setAttribute('font-weight', 'bold');
    rect = rectFromElementBoundingBox(text);
    rect.setAttribute('fill', 'white');
    svg.insertBefore(rect, text);
  }
};

function rectFromElementBoundingBox(element) {
  var bbox = element.getBBox();
  var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('x', bbox.x);
  rect.setAttribute('y', bbox.y);
  rect.setAttribute('width', bbox.width);
  rect.setAttribute('height', bbox.height);
  return rect;
}

/**
 * Displays a small alert box inside DOM element at parentSelector.
 * @param {string} parentSelector
 * @param {object} props A set of React properties passed to the AbuseError
 *   component
 */
StudioApp.prototype.displayAlert = function (parentSelector, props) {
  // Each parent is assumed to have at most a single alert. This assumption
  // could be changed, but we would then want to clean up our DOM element on
  // close
  var parent = $(parentSelector);
  var container = parent.children('.react-alert');
  if (container.length === 0) {
    container = $("<div class='react-alert'/>");
    parent.append(container);
  }

  var reactProps = $.extend({}, {
    className: 'alert-error',
    onClose: function () {
      React.unmountComponentAtNode(container[0]);
    }
  }, props);

  var element = React.createElement(Alert, reactProps);
  React.render(element, container[0]);
};

/**
 * If the current project is considered abusive, display a small alert box
 * @param {string} parentSelector The selector for the DOM element parent we
 *   should display the error in.
 */
StudioApp.prototype.alertIfAbusiveProject = function (parentSelector) {
  if (window.dashboard && dashboard.project.exceedsAbuseThreshold()) {
    this.displayAlert(parentSelector, {
      body: React.createElement(dashboard.AbuseError, {
        i18n: {
          tos: window.dashboard.i18n.t('project.abuse.tos'),
          contact_us: window.dashboard.i18n.t('project.abuse.contact_us')
        }
      }),
      style: {
        top: 45,
        left: 350,
        right: 50
      }
    });
  }
};

/**
 * Searches for cases where we have two (or more) nested for loops in which
 * both loops use the same variable. This can cause infinite loops.
 * @returns {boolean} True if we detect an instance of this.
 */
StudioApp.prototype.hasDuplicateVariablesInForLoops = function () {
  return Blockly.mainBlockSpace.getAllBlocks().some(this.forLoopHasDuplicatedNestedVariables_);
};

/**
 * Looks to see if a particular block is (a) a for loop and (b) has a descendant
 * for loop using the same variable.
 * @returns {boolean} True if that is true of this block
 */
StudioApp.prototype.forLoopHasDuplicatedNestedVariables_ = function (block) {
  if (!block || block.type !== 'controls_for' &&
      block.type !== 'controls_for_counter') {
    return;
  }

  var innerBlock = block.getInput('DO').connection.targetBlock();

  // Not the most efficient of algo's, but we shouldn't have enough blocks for
  // it to matter.
  return block.getVars().some(function (varName) {
    return innerBlock.getDescendants().some(function (descendant) {
      if (descendant.type !== 'controls_for' &&
          descendant.type !== 'controls_for_counter') {
        return false;
      }
      return descendant.getVars().indexOf(varName) !== -1;
    });
  });
};
