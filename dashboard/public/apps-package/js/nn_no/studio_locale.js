var studio_locale = {lc:{"ar":function(n){
  if (n === 0) {
    return 'zero';
  }
  if (n == 1) {
    return 'one';
  }
  if (n == 2) {
    return 'two';
  }
  if ((n % 100) >= 3 && (n % 100) <= 10 && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 100) >= 11 && (n % 100) <= 99 && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"en":function(n){return n===1?"one":"other"},"bg":function(n){return n===1?"one":"other"},"bn":function(n){return n===1?"one":"other"},"ca":function(n){return n===1?"one":"other"},"cs":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"da":function(n){return n===1?"one":"other"},"de":function(n){return n===1?"one":"other"},"el":function(n){return n===1?"one":"other"},"es":function(n){return n===1?"one":"other"},"et":function(n){return n===1?"one":"other"},"eu":function(n){return n===1?"one":"other"},"fa":function(n){return "other"},"fi":function(n){return n===1?"one":"other"},"fil":function(n){return n===0||n==1?"one":"other"},"fr":function(n){return Math.floor(n)===0||Math.floor(n)==1?"one":"other"},"ga":function(n){return n==1?"one":(n==2?"two":"other")},"gl":function(n){return n===1?"one":"other"},"he":function(n){return n===1?"one":"other"},"hi":function(n){return n===0||n==1?"one":"other"},"hr":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"hu":function(n){return "other"},"id":function(n){return "other"},"is":function(n){
    return ((n%10) === 1 && (n%100) !== 11) ? 'one' : 'other';
  },"it":function(n){return n===1?"one":"other"},"ja":function(n){return "other"},"ko":function(n){return "other"},"lt":function(n){
  if ((n % 10) == 1 && ((n % 100) < 11 || (n % 100) > 19)) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 9 &&
      ((n % 100) < 11 || (n % 100) > 19) && n == Math.floor(n)) {
    return 'few';
  }
  return 'other';
},"lv":function(n){
  if (n === 0) {
    return 'zero';
  }
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  return 'other';
},"mk":function(n){return (n%10)==1&&n!=11?"one":"other"},"mr":function(n){return n===1?"one":"other"},"ms":function(n){return "other"},"mt":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n === 0 || ((n % 100) >= 2 && (n % 100) <= 4 && n == Math.floor(n))) {
    return 'few';
  }
  if ((n % 100) >= 11 && (n % 100) <= 19 && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"nl":function(n){return n===1?"one":"other"},"no":function(n){return n===1?"one":"other"},"pl":function(n){
  if (n == 1) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || n != 1 && (n % 10) == 1 ||
      ((n % 10) >= 5 && (n % 10) <= 9 || (n % 100) >= 12 && (n % 100) <= 14) &&
      n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"pt":function(n){return n===1?"one":"other"},"ro":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n === 0 || n != 1 && (n % 100) >= 1 &&
      (n % 100) <= 19 && n == Math.floor(n)) {
    return 'few';
  }
  return 'other';
},"ru":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"sk":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"sl":function(n){
  if ((n % 100) == 1) {
    return 'one';
  }
  if ((n % 100) == 2) {
    return 'two';
  }
  if ((n % 100) == 3 || (n % 100) == 4) {
    return 'few';
  }
  return 'other';
},"sq":function(n){return n===1?"one":"other"},"sr":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"sv":function(n){return n===1?"one":"other"},"ta":function(n){return n===1?"one":"other"},"th":function(n){return "other"},"tr":function(n){return n===1?"one":"other"},"uk":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"ur":function(n){return n===1?"one":"other"},"vi":function(n){return "other"},"zh":function(n){return "other"}},
c:function(d,k){if(!d)throw new Error("MessageFormat: Data required for '"+k+"'.")},
n:function(d,k,o){if(isNaN(d[k]))throw new Error("MessageFormat: '"+k+"' isn't a number.");return d[k]-(o||0)},
v:function(d,k){studio_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){studio_locale.c(d,k);return d[k] in p?p[d[k]]:(k=studio_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){studio_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).studio_locale = {
"actor":function(d){return "skodespelar"},
"addCharacter":function(d){return "legg til en"},
"addCharacterTooltip":function(d){return "Legg til en figur til scenen."},
"alienInvasion":function(d){return "Romveseninvasjon!"},
"backgroundBlack":function(d){return "svart"},
"backgroundCave":function(d){return "hole"},
"backgroundCloudy":function(d){return "skya"},
"backgroundHardcourt":function(d){return "grusbane"},
"backgroundNight":function(d){return "natt"},
"backgroundUnderwater":function(d){return "undervass"},
"backgroundCity":function(d){return "by"},
"backgroundDesert":function(d){return "ørken"},
"backgroundRainbow":function(d){return "regnboge"},
"backgroundSoccer":function(d){return "fotball"},
"backgroundSpace":function(d){return "verdsommmet"},
"backgroundTennis":function(d){return "tennis"},
"backgroundWinter":function(d){return "vinter"},
"calloutPlaceCommandsHere":function(d){return "Place commands here"},
"calloutPlaceCommandsAtTop":function(d){return "Place commands to set up your game at the top"},
"calloutTypeCommandsHere":function(d){return "Type your commands here"},
"calloutCharactersMove":function(d){return "These new commands let you control how the characters move"},
"calloutPutCommandsTouchCharacter":function(d){return "Put a command here to have it happen when you touch a character"},
"calloutClickCategory":function(d){return "Click a category header to see commands in each category"},
"calloutTryOutNewCommands":function(d){return "Try out all the new commands you’ve unlocked"},
"catActions":function(d){return "Handlingar"},
"catControl":function(d){return "Løkker"},
"catEvents":function(d){return "Hendelser"},
"catLogic":function(d){return "Logikk"},
"catMath":function(d){return "Matematikk"},
"catProcedures":function(d){return "Funksjonar"},
"catText":function(d){return "Tekst"},
"catVariables":function(d){return "Variablar"},
"changeScoreTooltip":function(d){return "Legg til eller fjern eit poeng frå poengsummen."},
"changeScoreTooltipK1":function(d){return "Legg til eit poeng til poengsummen."},
"continue":function(d){return "Hald fram"},
"decrementPlayerScore":function(d){return "ta bort poeng"},
"defaultSayText":function(d){return "skriv her"},
"dropletBlock_addCharacter_description":function(d){return "Legg til en figur til scenen."},
"dropletBlock_addCharacter_param0":function(d){return "type"},
"dropletBlock_addCharacter_param0_description":function(d){return "The type of the character to be added ('random', 'man', 'pilot', 'pig', 'bird', 'mouse', 'roo', or 'spider')."},
"dropletBlock_changeScore_description":function(d){return "Legg til eller fjern eit poeng frå poengsummen."},
"dropletBlock_changeScore_param0":function(d){return "poengsum"},
"dropletBlock_changeScore_param0_description":function(d){return "The value to add to the score (negative values will reduce the score)."},
"dropletBlock_moveRight_description":function(d){return "Moves the character to the right."},
"dropletBlock_moveUp_description":function(d){return "Moves the character up."},
"dropletBlock_moveDown_description":function(d){return "Moves the character down."},
"dropletBlock_moveLeft_description":function(d){return "Moves the character left."},
"dropletBlock_moveSlow_description":function(d){return "Changes a set of characters to move slowly."},
"dropletBlock_moveSlow_param0":function(d){return "type"},
"dropletBlock_moveSlow_param0_description":function(d){return "The type of characters to be changed ('random', 'man', 'pilot', 'pig', 'bird', 'mouse', 'roo', or 'spider')."},
"dropletBlock_moveNormal_description":function(d){return "Changes a set of characters to move at a normal speed."},
"dropletBlock_moveNormal_param0":function(d){return "type"},
"dropletBlock_moveNormal_param0_description":function(d){return "The type of characters to be changed ('random', 'man', 'pilot', 'pig', 'bird', 'mouse', 'roo', or 'spider')."},
"dropletBlock_moveFast_description":function(d){return "Changes a set of characters to move quickly."},
"dropletBlock_moveFast_param0":function(d){return "type"},
"dropletBlock_moveFast_param0_description":function(d){return "The type of characters to be changed ('random', 'man', 'pilot', 'pig', 'bird', 'mouse', 'roo', or 'spider')."},
"dropletBlock_playSound_description":function(d){return "Spel av den valgte lyden."},
"dropletBlock_playSound_param0":function(d){return "sound"},
"dropletBlock_playSound_param0_description":function(d){return "The name of the sound to play."},
"dropletBlock_setBackground_description":function(d){return "vis bakgrunnsbilde"},
"dropletBlock_setBackground_param0":function(d){return "image"},
"dropletBlock_setBackground_param0_description":function(d){return "The name of the background theme ('background1', 'background2', or 'background3')."},
"dropletBlock_setBot_description":function(d){return "Changes the active bot."},
"dropletBlock_setBot_param0":function(d){return "image"},
"dropletBlock_setBot_param0_description":function(d){return "The name of the bot image ('random', 'bot1', or 'bot2')."},
"dropletBlock_setBotSpeed_description":function(d){return "Sets the bot speed."},
"dropletBlock_setBotSpeed_param0":function(d){return "fart"},
"dropletBlock_setBotSpeed_param0_description":function(d){return "The speed value ('random', 'slow', 'normal', or 'fast')."},
"dropletBlock_setSpriteEmotion_description":function(d){return "Set humøret til skodespelaren"},
"dropletBlock_setSpritePosition_description":function(d){return "Flyttar ein skodespelar direkte til gitt plassering."},
"dropletBlock_setSpriteSpeed_description":function(d){return "Set farta til ein skodespelar"},
"dropletBlock_setSprite_description":function(d){return "Set utsjånaden til skodespelar"},
"dropletBlock_setSprite_param0":function(d){return "index"},
"dropletBlock_setSprite_param0_description":function(d){return "The index (starting at 0) indicating which actor should change."},
"dropletBlock_setSprite_param1":function(d){return "image"},
"dropletBlock_setSprite_param1_description":function(d){return "The name of the actor image."},
"dropletBlock_setToChase_description":function(d){return "Changes a set of characters to chase the bot."},
"dropletBlock_setToChase_param0":function(d){return "type"},
"dropletBlock_setToChase_param0_description":function(d){return "The type of characters to be changed ('random', 'man', 'pilot', 'pig', 'bird', 'mouse', 'roo', or 'spider')."},
"dropletBlock_setToFlee_description":function(d){return "Changes a set of characters to flee from the bot."},
"dropletBlock_setToFlee_param0":function(d){return "type"},
"dropletBlock_setToFlee_param0_description":function(d){return "The type of characters to be changed ('random', 'man', 'pilot', 'pig', 'bird', 'mouse', 'roo', or 'spider')."},
"dropletBlock_setToRoam_description":function(d){return "Changes a set of characters to roam freely."},
"dropletBlock_setToRoam_param0":function(d){return "type"},
"dropletBlock_setToRoam_param0_description":function(d){return "The type of characters to be changed ('random', 'man', 'pilot', 'pig', 'bird', 'mouse', 'roo', or 'spider')."},
"dropletBlock_setToStop_description":function(d){return "Changes a set of characters to stop moving."},
"dropletBlock_setToStop_param0":function(d){return "type"},
"dropletBlock_setToStop_param0_description":function(d){return "The type of characters to be changed ('random', 'man', 'pilot', 'pig', 'bird', 'mouse', 'roo', or 'spider')."},
"dropletBlock_setMap_description":function(d){return "Changes the map in the scene."},
"dropletBlock_setMap_param0":function(d){return "name"},
"dropletBlock_setMap_param0_description":function(d){return "The name of the map ('random', 'blank', 'circle', 'circle2', 'horizontal', 'grid', or 'blobs')."},
"dropletBlock_throw_description":function(d){return "Kastar eit prosjektil frå gitt skodespelar."},
"dropletBlock_vanish_description":function(d){return "Fjernar skodespelaren."},
"dropletBlock_whenDown_description":function(d){return "This function executes when the down button is pressed."},
"dropletBlock_whenLeft_description":function(d){return "This function executes when the left button is pressed."},
"dropletBlock_whenRight_description":function(d){return "This function executes when the right button is pressed."},
"dropletBlock_whenTouchCharacter_description":function(d){return "This function executes when the character touches any character."},
"dropletBlock_whenTouchObstacle_description":function(d){return "This function executes when the character touches any obstacle."},
"dropletBlock_whenTouchMan_description":function(d){return "This function executes when the character touches man characters."},
"dropletBlock_whenTouchPilot_description":function(d){return "This function executes when the character touches pilot characters."},
"dropletBlock_whenTouchPig_description":function(d){return "This function executes when the character touches pig characters."},
"dropletBlock_whenTouchBird_description":function(d){return "This function executes when the character touches bird characters."},
"dropletBlock_whenTouchMouse_description":function(d){return "This function executes when the character touches mouse characters."},
"dropletBlock_whenTouchRoo_description":function(d){return "This function executes when the character touches roo characters."},
"dropletBlock_whenTouchSpider_description":function(d){return "This function executes when the character touches spider characters."},
"dropletBlock_whenUp_description":function(d){return "This function executes when the up button is pressed."},
"emotion":function(d){return "humør"},
"finalLevel":function(d){return "Gratulerer! Du har løyst den siste oppgåva."},
"for":function(d){return "for"},
"hello":function(d){return "hallo"},
"helloWorld":function(d){return "Hei verda!"},
"incrementPlayerScore":function(d){return "score poeng"},
"itemBlueFireball":function(d){return "blå eldkule"},
"itemPurpleFireball":function(d){return "lilla eldkule"},
"itemRedFireball":function(d){return "raud eldkule"},
"itemYellowHearts":function(d){return "gule hjerter"},
"itemPurpleHearts":function(d){return "lilla hjerter"},
"itemRedHearts":function(d){return "raude hjerter"},
"itemRandom":function(d){return "tilfeldig"},
"itemAnna":function(d){return "krok"},
"itemElsa":function(d){return "gnistring"},
"itemHiro":function(d){return "mikroboter"},
"itemBaymax":function(d){return "rakett"},
"itemRapunzel":function(d){return "kjele"},
"itemCherry":function(d){return "kirsebær"},
"itemIce":function(d){return "is"},
"itemDuck":function(d){return "and"},
"itemMan":function(d){return "mann"},
"itemPilot":function(d){return "pilot"},
"itemPig":function(d){return "gris"},
"itemBird":function(d){return "fugl"},
"itemMouse":function(d){return "mus"},
"itemRoo":function(d){return "kenguru"},
"itemSpider":function(d){return "edderkopp"},
"makeProjectileDisappear":function(d){return "forsvinne"},
"makeProjectileBounce":function(d){return "sprette"},
"makeProjectileBlueFireball":function(d){return "lag blå eldkule"},
"makeProjectilePurpleFireball":function(d){return "lag lilla eldkule"},
"makeProjectileRedFireball":function(d){return "lag raud eldkule"},
"makeProjectileYellowHearts":function(d){return "lag gule hjarte"},
"makeProjectilePurpleHearts":function(d){return "lag lilla hjarte"},
"makeProjectileRedHearts":function(d){return "lag raude hjarte"},
"makeProjectileTooltip":function(d){return "Få prosjektilet som nett kolliderte til å forsvinne eller sprette."},
"makeYourOwn":function(d){return "Lag din eigen LeikeLab-app"},
"moveDirectionDown":function(d){return "ned"},
"moveDirectionLeft":function(d){return "venstre"},
"moveDirectionRight":function(d){return "høgre"},
"moveDirectionUp":function(d){return "opp"},
"moveDirectionRandom":function(d){return "tilfeldig"},
"moveDistance25":function(d){return "25 piksel"},
"moveDistance50":function(d){return "50 piksel"},
"moveDistance100":function(d){return "100 piksel"},
"moveDistance200":function(d){return "200 piksel"},
"moveDistance400":function(d){return "400 piksel"},
"moveDistancePixels":function(d){return "pikslar"},
"moveDistanceRandom":function(d){return "tilfeldige piksel"},
"moveDistanceTooltip":function(d){return "Flytt ein skodepeler ein bestemd avstand i den gitte retninga."},
"moveSprite":function(d){return "flytt"},
"moveSpriteN":function(d){return "flytt skodespelar "+studio_locale.v(d,"spriteIndex")},
"toXY":function(d){return "til x,y"},
"moveDown":function(d){return "flytt ned"},
"moveDownTooltip":function(d){return "Flytt ein skodespelar ned."},
"moveLeft":function(d){return "flytt til venstre"},
"moveLeftTooltip":function(d){return "Flytt ein skodespelar til venstre."},
"moveRight":function(d){return "flytt høyre"},
"moveRightTooltip":function(d){return "Flytt ein skodespelar til høyre."},
"moveUp":function(d){return "flytt opp"},
"moveUpTooltip":function(d){return "Flytt ein skodespelar opp."},
"moveTooltip":function(d){return "Flytt ein skodespelar."},
"nextLevel":function(d){return "Gratulerer! Du har fullført denne oppgåva."},
"no":function(d){return "Nei"},
"numBlocksNeeded":function(d){return "Denne oppgåva kan løysast med %1 blokker."},
"onEventTooltip":function(d){return "Køyr kode som svar på den oppgjevne hendinga."},
"ouchExclamation":function(d){return "Au!"},
"playSoundCrunch":function(d){return "Spel av knase-lyd"},
"playSoundGoal1":function(d){return "spel av mål-lyd 1"},
"playSoundGoal2":function(d){return "spel av mål-lyd 2"},
"playSoundHit":function(d){return "spel av treff-lyd"},
"playSoundLosePoint":function(d){return "spel av miste-poeng-lyd"},
"playSoundLosePoint2":function(d){return "spel av miste-poeng-lyd 2"},
"playSoundRetro":function(d){return "spel av retro-lyd"},
"playSoundRubber":function(d){return "spel av gummi-lyd"},
"playSoundSlap":function(d){return "spel av smekke-lyd"},
"playSoundTooltip":function(d){return "Spel av den valgte lyden."},
"playSoundWinPoint":function(d){return "spel av poeng-lyd"},
"playSoundWinPoint2":function(d){return "spel av poeng-lyd 2"},
"playSoundWood":function(d){return "Spel av tre-lyd"},
"positionOutTopLeft":function(d){return "til øvre venstre posisjon"},
"positionOutTopRight":function(d){return "til øvste høgre posisjon"},
"positionTopOutLeft":function(d){return "til posisjonen på toppen utanfor til venstre"},
"positionTopLeft":function(d){return "til øvste venstre posisjon"},
"positionTopCenter":function(d){return "til øvste midtre posisjon"},
"positionTopRight":function(d){return "til øvste høgre posisjon"},
"positionTopOutRight":function(d){return "til toppen utanfor høgre posisjon"},
"positionMiddleLeft":function(d){return "til midterste venstre posisjon"},
"positionMiddleCenter":function(d){return "til midterste posisjon i midten"},
"positionMiddleRight":function(d){return "til midterste høgre posisjon"},
"positionBottomOutLeft":function(d){return "til nedst utanfor høyre posisjon"},
"positionBottomLeft":function(d){return "til nedste venstre posisjon"},
"positionBottomCenter":function(d){return "til nedst i midten posisjon"},
"positionBottomRight":function(d){return "til nedste høgre posisjon"},
"positionBottomOutRight":function(d){return "til nedst utanfor høgre posisjon"},
"positionOutBottomLeft":function(d){return "til under nedste venstre posisjon"},
"positionOutBottomRight":function(d){return "til under nedste høgre posisjon"},
"positionRandom":function(d){return "til ein tilfeldig posisjon"},
"projectileBlueFireball":function(d){return "blå eldkule"},
"projectilePurpleFireball":function(d){return "lilla eldkule"},
"projectileRedFireball":function(d){return "raud eldkule"},
"projectileYellowHearts":function(d){return "gule hjerter"},
"projectilePurpleHearts":function(d){return "lilla hjerter"},
"projectileRedHearts":function(d){return "raude hjerter"},
"projectileRandom":function(d){return "tilfeldig"},
"projectileAnna":function(d){return "krok"},
"projectileElsa":function(d){return "gnistring"},
"projectileHiro":function(d){return "mikroboter"},
"projectileBaymax":function(d){return "rakett"},
"projectileRapunzel":function(d){return "kjele"},
"projectileCherry":function(d){return "kirsebær"},
"projectileIce":function(d){return "is"},
"projectileDuck":function(d){return "and"},
"reinfFeedbackMsg":function(d){return "Du kan trykkje på \"Fortset å spele\"-knappen for å fortsetje å spele historia di."},
"repeatForever":function(d){return "gjenta for alltid"},
"repeatDo":function(d){return "gjer"},
"repeatForeverTooltip":function(d){return "Utfør handlingane i denne blokka gjentatte gonger medan historia køyrer."},
"saySprite":function(d){return "sei"},
"saySpriteN":function(d){return "skodespelar "+studio_locale.v(d,"spriteIndex")+" seier"},
"saySpriteTooltip":function(d){return "Vis ei snakkeboble med denne teksten frå den gjevne skodespelaren."},
"saySpriteChoices_0":function(d){return "Hei på deg."},
"saySpriteChoices_1":function(d){return "Hei, alle saman."},
"saySpriteChoices_2":function(d){return "Korleis går det?"},
"saySpriteChoices_3":function(d){return "God morgen"},
"saySpriteChoices_4":function(d){return "God ettermiddag"},
"saySpriteChoices_5":function(d){return "God natt"},
"saySpriteChoices_6":function(d){return "God kveld"},
"saySpriteChoices_7":function(d){return "Noko nytt?"},
"saySpriteChoices_8":function(d){return "Kva?"},
"saySpriteChoices_9":function(d){return "Kvar?"},
"saySpriteChoices_10":function(d){return "Når?"},
"saySpriteChoices_11":function(d){return "Bra."},
"saySpriteChoices_12":function(d){return "Flott!"},
"saySpriteChoices_13":function(d){return "Greit."},
"saySpriteChoices_14":function(d){return "Ikkje dårleg."},
"saySpriteChoices_15":function(d){return "Lukke til."},
"saySpriteChoices_16":function(d){return "Ja"},
"saySpriteChoices_17":function(d){return "Nei"},
"saySpriteChoices_18":function(d){return "OK"},
"saySpriteChoices_19":function(d){return "Bra kast!"},
"saySpriteChoices_20":function(d){return "Ha ein fin dag."},
"saySpriteChoices_21":function(d){return "Ha det."},
"saySpriteChoices_22":function(d){return "Eg kjem straks att."},
"saySpriteChoices_23":function(d){return "Vi sjåast i morgon!"},
"saySpriteChoices_24":function(d){return "Vi sjåast!"},
"saySpriteChoices_25":function(d){return "Ta vare på deg sjølv!"},
"saySpriteChoices_26":function(d){return "Kos deg!"},
"saySpriteChoices_27":function(d){return "Eg må gå."},
"saySpriteChoices_28":function(d){return "Skal vi vere vennar?"},
"saySpriteChoices_29":function(d){return "Bra jobba!"},
"saySpriteChoices_30":function(d){return "Hurra!"},
"saySpriteChoices_31":function(d){return "Ja!"},
"saySpriteChoices_32":function(d){return "Hyggeleg å møte deg."},
"saySpriteChoices_33":function(d){return "Greit!"},
"saySpriteChoices_34":function(d){return "Takk"},
"saySpriteChoices_35":function(d){return "Nei, takk"},
"saySpriteChoices_36":function(d){return "Aaaaaah!"},
"saySpriteChoices_37":function(d){return "Gløym det"},
"saySpriteChoices_38":function(d){return "I dag"},
"saySpriteChoices_39":function(d){return "I morgon"},
"saySpriteChoices_40":function(d){return "I går"},
"saySpriteChoices_41":function(d){return "Eg fann deg!"},
"saySpriteChoices_42":function(d){return "Du fann meg!"},
"saySpriteChoices_43":function(d){return "10, 9, 8, 7, 6, 5, 4, 3, 2, 1!"},
"saySpriteChoices_44":function(d){return "Du er god!"},
"saySpriteChoices_45":function(d){return "Du er lystig!"},
"saySpriteChoices_46":function(d){return "Du er tullete! "},
"saySpriteChoices_47":function(d){return "Du er ein god ven!"},
"saySpriteChoices_48":function(d){return "Se opp!"},
"saySpriteChoices_49":function(d){return "Dukk!"},
"saySpriteChoices_50":function(d){return "Tok deg!"},
"saySpriteChoices_51":function(d){return "Au!"},
"saySpriteChoices_52":function(d){return "Unnskyld!"},
"saySpriteChoices_53":function(d){return "Forsiktig!"},
"saySpriteChoices_54":function(d){return "Oi!"},
"saySpriteChoices_55":function(d){return "Oisann!"},
"saySpriteChoices_56":function(d){return "Du tok meg nesten!"},
"saySpriteChoices_57":function(d){return "Godt forsøk!"},
"saySpriteChoices_58":function(d){return "Du kan ikkje ta meg!"},
"scoreText":function(d){return "Poengsum: "+studio_locale.v(d,"playerScore")},
"setActivityRandom":function(d){return "angi aktiviteten som tilfeldig for"},
"setActivityRoam":function(d){return "angi aktiviteten å streife for"},
"setActivityChase":function(d){return "angi aktiviteten å jage for"},
"setActivityFlee":function(d){return "angir aktiviteten å flykte for"},
"setActivityNone":function(d){return "angi aktiviteten til ingen for"},
"setActivityTooltip":function(d){return "Angir aktiviteten for et sett med figurer"},
"setBackground":function(d){return "vis bakgrunn"},
"setBackgroundRandom":function(d){return "vis tilfeldig bakgrunn"},
"setBackgroundBlack":function(d){return "vis svart bakgrunn"},
"setBackgroundCave":function(d){return "vis hole-bagrunn"},
"setBackgroundCloudy":function(d){return "set skya bakgrunn"},
"setBackgroundHardcourt":function(d){return "set grusbane bakgrunn"},
"setBackgroundNight":function(d){return "vis natt bakgrunn"},
"setBackgroundUnderwater":function(d){return "vis undervass bakgrunn"},
"setBackgroundCity":function(d){return "vis by bakgrunn"},
"setBackgroundDesert":function(d){return "vis ørken bakgrunn"},
"setBackgroundRainbow":function(d){return "vis regnboge bakgrunn"},
"setBackgroundSoccer":function(d){return "vis fotball bakgrunn"},
"setBackgroundSpace":function(d){return "vis verdsrom bakgrunn"},
"setBackgroundTennis":function(d){return "vis tennis bakgrunn"},
"setBackgroundWinter":function(d){return "vis vinter bakgrunn"},
"setBackgroundLeafy":function(d){return "Legg til bladbakgrunn"},
"setBackgroundGrassy":function(d){return "Legg til grasbakgrunn"},
"setBackgroundFlower":function(d){return "Legg til blomebakgrunn"},
"setBackgroundTile":function(d){return "Legg til flisebakgrunn"},
"setBackgroundIcy":function(d){return "Legg til isbakgrunn"},
"setBackgroundSnowy":function(d){return "Legg til snøbakgrunn"},
"setBackgroundForest":function(d){return "angi skogbakgrunn"},
"setBackgroundSnow":function(d){return "angi snøbakgrunn"},
"setBackgroundShip":function(d){return "angi skipsbakgrunn"},
"setBackgroundTooltip":function(d){return "vis bakgrunnsbilde"},
"setEnemySpeed":function(d){return "set fiende fart"},
"setItemSpeedSet":function(d){return "angi type"},
"setItemSpeedTooltip":function(d){return "Angir hastigheten for et sett med figurer"},
"setPlayerSpeed":function(d){return "set spelar fart"},
"setScoreText":function(d){return "set poengsum"},
"setScoreTextTooltip":function(d){return "Angi teksten som skal visast i poeng-feltet."},
"setSpriteEmotionAngry":function(d){return "til eit dårleg humør"},
"setSpriteEmotionHappy":function(d){return "til blidt humør"},
"setSpriteEmotionNormal":function(d){return "til nøytralt humør"},
"setSpriteEmotionRandom":function(d){return "til tilfeldig humør"},
"setSpriteEmotionSad":function(d){return "til trist humør"},
"setSpriteEmotionTooltip":function(d){return "Set humøret til skodespelaren"},
"setSpriteAlien":function(d){return "til romvesen utsjånad"},
"setSpriteBat":function(d){return "til flaggermus utsjånad"},
"setSpriteBird":function(d){return "til fugle utsjånad"},
"setSpriteCat":function(d){return "til katte utsjånad"},
"setSpriteCaveBoy":function(d){return "til steinaldergut utsjånad"},
"setSpriteCaveGirl":function(d){return "til steinalderjente utsjånad"},
"setSpriteDinosaur":function(d){return "til dinosaur utsjånad"},
"setSpriteDog":function(d){return "til hunde utsjånad"},
"setSpriteDragon":function(d){return "til drage utsjånad"},
"setSpriteGhost":function(d){return "til spøkelse uutsjånad"},
"setSpriteHidden":function(d){return "til usynlig utsjånad"},
"setSpriteHideK1":function(d){return "gjøyme"},
"setSpriteAnna":function(d){return "til eit Anna-bilete"},
"setSpriteElsa":function(d){return "til eit Elsa-bilete"},
"setSpriteHiro":function(d){return "til Hiro-avatar"},
"setSpriteBaymax":function(d){return "til Baymax-avatar"},
"setSpriteRapunzel":function(d){return "til Rapunzel-avatar"},
"setSpriteKnight":function(d){return "til ridder utsjånad"},
"setSpriteMonster":function(d){return "til monster utsjånad"},
"setSpriteNinja":function(d){return "til ninja utsjånad"},
"setSpriteOctopus":function(d){return "til blekksprut utsjånad"},
"setSpritePenguin":function(d){return "til pingvin utsjånad"},
"setSpritePirate":function(d){return "til pirat utsjånad"},
"setSpritePrincess":function(d){return "til prinsesse utsjånad"},
"setSpriteRandom":function(d){return "til tilfeldig utsjånad"},
"setSpriteRobot":function(d){return "til robot utsjånad"},
"setSpriteShowK1":function(d){return "vis"},
"setSpriteSpacebot":function(d){return "til robot utsjånad"},
"setSpriteSoccerGirl":function(d){return "til fotballjente utsjånad"},
"setSpriteSoccerBoy":function(d){return "til fotballgut utsjånad"},
"setSpriteSquirrel":function(d){return "til ekorn utsjånad"},
"setSpriteTennisGirl":function(d){return "til tennisjente uutsjånad"},
"setSpriteTennisBoy":function(d){return "til tennisgutt utsjånad"},
"setSpriteUnicorn":function(d){return "til enhjøring utsjånad"},
"setSpriteWitch":function(d){return "til heks utsjånad"},
"setSpriteWizard":function(d){return "til trollmann utsjånad"},
"setSpritePositionTooltip":function(d){return "Flyttar ein skodespelar direkte til gitt plassering."},
"setSpriteK1Tooltip":function(d){return "Viser eller skjuler gitt skodespelar."},
"setSpriteTooltip":function(d){return "Set utsjånaden til skodespelar"},
"setSpriteSizeRandom":function(d){return "til tilfeldig storleik"},
"setSpriteSizeVerySmall":function(d){return "til veldig liten storleik"},
"setSpriteSizeSmall":function(d){return "til liten storleik"},
"setSpriteSizeNormal":function(d){return "til normal storleik"},
"setSpriteSizeLarge":function(d){return "til stor storleik"},
"setSpriteSizeVeryLarge":function(d){return "til veldig stor storleik"},
"setSpriteSizeTooltip":function(d){return "Set størrelsen på ein skodespelar"},
"setSpriteSpeedRandom":function(d){return "til ei tilfeldig fart"},
"setSpriteSpeedVerySlow":function(d){return "til ei svært sakte fart"},
"setSpriteSpeedSlow":function(d){return "til ei sakte fart"},
"setSpriteSpeedNormal":function(d){return "til ei normal fart"},
"setSpriteSpeedFast":function(d){return "til ei rask fart"},
"setSpriteSpeedVeryFast":function(d){return "til ei veldig rask fart"},
"setSpriteSpeedTooltip":function(d){return "Set farta til ein skodespelar"},
"setSpriteZombie":function(d){return "til zombie utsjånad"},
"setSpriteBot1":function(d){return "til bot1"},
"setSpriteBot2":function(d){return "til bot2"},
"setMap":function(d){return "angi kart"},
"setMapRandom":function(d){return "angi tilfeldig kart"},
"setMapBlank":function(d){return "angi tomt kart"},
"setMapCircle":function(d){return "angi sirkel-kart"},
"setMapCircle2":function(d){return "angi sirkel2-kart"},
"setMapHorizontal":function(d){return "angi vannrett kart"},
"setMapGrid":function(d){return "angi rutenettet-kart"},
"setMapBlobs":function(d){return "angi boblekart"},
"setMapTooltip":function(d){return "Endrer kartet i scenen"},
"shareStudioTwitter":function(d){return "Sjekk historia eg lagde. Eg skreiv ho sjølv med @codeorg"},
"shareGame":function(d){return "Del historia di:"},
"showCoordinates":function(d){return "vis koordinatar"},
"showCoordinatesTooltip":function(d){return "vis hovudpersonen sine koordinatar på skjermen"},
"showTitleScreen":function(d){return "vis tittelskjerm"},
"showTitleScreenTitle":function(d){return "tittel"},
"showTitleScreenText":function(d){return "tekst"},
"showTSDefTitle":function(d){return "skriv tittelen her"},
"showTSDefText":function(d){return "skriv teksten her"},
"showTitleScreenTooltip":function(d){return "Vis ein tittelskjerm med tilhørande tittel og tekst."},
"size":function(d){return "størrelse"},
"setSprite":function(d){return "sett"},
"setSpriteN":function(d){return "vis skodespelar "+studio_locale.v(d,"spriteIndex")},
"soundCrunch":function(d){return "knørve"},
"soundGoal1":function(d){return "mål 1"},
"soundGoal2":function(d){return "mål 2"},
"soundHit":function(d){return "treff"},
"soundLosePoint":function(d){return "miste poeng"},
"soundLosePoint2":function(d){return "miste poeng 2"},
"soundRetro":function(d){return "retro"},
"soundRubber":function(d){return "gummi"},
"soundSlap":function(d){return "slå"},
"soundWinPoint":function(d){return "vinne poeng"},
"soundWinPoint2":function(d){return "vinne poeng 2"},
"soundWood":function(d){return "tre"},
"speed":function(d){return "fart"},
"startSetValue":function(d){return "start (funksjon)"},
"startSetVars":function(d){return "spel_variablar (tittel, undertittel, bakgrunn, mål, fare, spelar)"},
"startSetFuncs":function(d){return "spel_funk(oppdater-mål, oppdater-fare, oppdater-spelar, kollider?, på-skjermen?)"},
"stopSprite":function(d){return "stopp"},
"stopSpriteN":function(d){return "stopp skodespelar "+studio_locale.v(d,"spriteIndex")},
"stopTooltip":function(d){return "Stoppar rørslene til ein skodespelar."},
"throwSprite":function(d){return "kaste"},
"throwSpriteN":function(d){return "skodespelar kastar "+studio_locale.v(d,"spriteIndex")},
"throwTooltip":function(d){return "Kastar eit prosjektil frå gitt skodespelar."},
"vanish":function(d){return "fjern"},
"vanishActorN":function(d){return "fjern skodespelar "+studio_locale.v(d,"spriteIndex")},
"vanishTooltip":function(d){return "Fjernar skodespelaren."},
"waitFor":function(d){return "vent i"},
"waitSeconds":function(d){return "sekund"},
"waitForClick":function(d){return "vent på klikk"},
"waitForRandom":function(d){return "vent på tilfeldig"},
"waitForHalfSecond":function(d){return "vent i eit halvt sekund"},
"waitFor1Second":function(d){return "vent i 1 sekund"},
"waitFor2Seconds":function(d){return "vent i 2 sekund"},
"waitFor5Seconds":function(d){return "vent i fem sekund"},
"waitFor10Seconds":function(d){return "vent i 10 sekund"},
"waitParamsTooltip":function(d){return "Vent det gitte antall sekund, eller bruk null til å vente på eit klikk."},
"waitTooltip":function(d){return "Venter i gitt antall sekund eller på eit klikk."},
"whenArrowDown":function(d){return "pil ned"},
"whenArrowLeft":function(d){return "pil venstre"},
"whenArrowRight":function(d){return "pil høgre"},
"whenArrowUp":function(d){return "pil opp"},
"whenArrowTooltip":function(d){return "Utfør handlingane under når gitt piltaste blir trykt."},
"whenDown":function(d){return "når pil ned"},
"whenDownTooltip":function(d){return "Utfør handlingane nedanfor når pil ned-tasten blir trykt."},
"whenGameStarts":function(d){return "når historia startar"},
"whenGameStartsTooltip":function(d){return "Utfør handlingane nedenfor når historia startar."},
"whenLeft":function(d){return "når venstre pil"},
"whenLeftTooltip":function(d){return "Utfør handlingane nedenfor når venstre pil-tasten blir trykt."},
"whenRight":function(d){return "når høyre pil"},
"whenRightTooltip":function(d){return "Utfør handlingene nedenfor når du høgre-pil-tasten blir trykt."},
"whenSpriteClicked":function(d){return "når skodespelaren blir klikket"},
"whenSpriteClickedN":function(d){return "når skodespelar "+studio_locale.v(d,"spriteIndex")+" blir klikka på"},
"whenSpriteClickedTooltip":function(d){return "Utfør handlingane under når ein skodespelar blir klikka på."},
"whenSpriteCollidedN":function(d){return "når skodespelar "+studio_locale.v(d,"spriteIndex")},
"whenSpriteCollidedTooltip":function(d){return "Utfør handlingane nedanfor når ein skodespelar rører ein annan skodespelar."},
"whenSpriteCollidedWith":function(d){return "rører"},
"whenSpriteCollidedWithAnyActor":function(d){return "rører ein skodespelar"},
"whenSpriteCollidedWithAnyEdge":function(d){return "rører ein kant"},
"whenSpriteCollidedWithAnyProjectile":function(d){return "rører eit prosjektil"},
"whenSpriteCollidedWithAnything":function(d){return "rører noko"},
"whenSpriteCollidedWithN":function(d){return "rører skodespelar "+studio_locale.v(d,"spriteIndex")},
"whenSpriteCollidedWithBlueFireball":function(d){return "rører blå eldkule"},
"whenSpriteCollidedWithPurpleFireball":function(d){return "rører lilla eldkule"},
"whenSpriteCollidedWithRedFireball":function(d){return "rører raud eldkule"},
"whenSpriteCollidedWithYellowHearts":function(d){return "rører gule hjerter"},
"whenSpriteCollidedWithPurpleHearts":function(d){return "rører lilla hjerter"},
"whenSpriteCollidedWithRedHearts":function(d){return "berører raude hjerter"},
"whenSpriteCollidedWithBottomEdge":function(d){return "rører nedre kant"},
"whenSpriteCollidedWithLeftEdge":function(d){return "rører venstre kant"},
"whenSpriteCollidedWithRightEdge":function(d){return "rører høyre kant"},
"whenSpriteCollidedWithTopEdge":function(d){return "rører øvre kant"},
"whenTouchItem":function(d){return "når figuren berørte"},
"whenTouchItemTooltip":function(d){return "Utfør handlingene nedenfor når figuren berører en figur."},
"whenTouchWall":function(d){return "når hinder er berørt"},
"whenTouchWallTooltip":function(d){return "Utfør handlingene nedenfor når skuespilleren berører en hindring."},
"whenUp":function(d){return "når pil opp"},
"whenUpTooltip":function(d){return "Utfør handlingane nedanfor når pil-opp-tasten blir trykt."},
"yes":function(d){return "Ja"},
"failedHasSetSprite":function(d){return "Next time, set a character."},
"failedHasSetBotSpeed":function(d){return "Next time, set a bot speed."},
"failedTouchAllItems":function(d){return "Next time, get all the items."},
"failedScoreMinimum":function(d){return "Next time, reach the minimum score."},
"failedRemovedItemCount":function(d){return "Next time, get the right number of items."},
"failedSetActivity":function(d){return "Next time, set the correct character activity."},
"calloutPutCommandsHereRunStart":function(d){return "Put commands here to have them run when the program starts"},
"calloutClickEvents":function(d){return "Click on the events header to see event function blocks."},
"calloutUseArrowButtons":function(d){return "Hold down these buttons or the arrow keys on your keyboard to trigger the move events"},
"calloutRunButton":function(d){return "Add a moveRight command to your code and then click here to run it"},
"calloutShowCodeToggle":function(d){return "Click here to switch between block and text mode"},
"calloutShowPlaceGoUpHere":function(d){return "Place goUp command here to move up"},
"calloutShowPlaySound":function(d){return "It's your game, so you choose the sounds now. Try the dropdown to pick a different sound"},
"calloutInstructions":function(d){return "Don't know what to do? Click the instructions to see them again"},
"calloutPlaceTwo":function(d){return "Can you make two MOUSEs appear when you get a BIRD?"},
"calloutSetMapAndSpeed":function(d){return "Set the map and your speed."},
"dropletBlock_addPoints_description":function(d){return "Add points to the score."},
"dropletBlock_addPoints_param0":function(d){return "score"},
"dropletBlock_addPoints_param0_description":function(d){return "The value to add to the score."},
"dropletBlock_removePoints_description":function(d){return "Remove points from the score."},
"dropletBlock_removePoints_param0":function(d){return "score"},
"dropletBlock_removePoints_param0_description":function(d){return "The value to remove from the score."},
"dropletBlock_endGame_description":function(d){return "End the game."},
"dropletBlock_endGame_param0":function(d){return "type"},
"dropletBlock_endGame_param0_description":function(d){return "Whether the game was won or lost ('win', 'lose')."},
"dropletBlock_whenGetCharacter_description":function(d){return "This function executes when the character gets any character."},
"dropletBlock_whenGetMan_description":function(d){return "This function executes when the character gets man characters."},
"dropletBlock_whenGetPilot_description":function(d){return "This function executes when the character gets pilot characters."},
"dropletBlock_whenGetPig_description":function(d){return "This function executes when the character gets pig characters."},
"dropletBlock_whenGetBird_description":function(d){return "This function executes when the character gets bird characters."},
"dropletBlock_whenGetMouse_description":function(d){return "This function executes when the character gets mouse characters."},
"dropletBlock_whenGetRoo_description":function(d){return "This function executes when the character gets roo characters."},
"dropletBlock_whenGetSpider_description":function(d){return "This function executes when the character gets spider characters."},
"itemIAProjectile1":function(d){return "item 1"},
"itemIAProjectile2":function(d){return "item 2"},
"itemIAProjectile3":function(d){return "item 3"},
"itemIAProjectile4":function(d){return "item 4"},
"itemIAProjectile5":function(d){return "item 5"},
"loseMessage":function(d){return "You lose!"},
"projectileIAProjectile1":function(d){return "projectile 1"},
"projectileIAProjectile2":function(d){return "projectile 2"},
"projectileIAProjectile3":function(d){return "projectile 3"},
"projectileIAProjectile4":function(d){return "projectile 4"},
"projectileIAProjectile5":function(d){return "projectile 5"},
"setSpriteManny":function(d){return "to a Manny image"},
"setSpriteSid":function(d){return "to a Sid image"},
"setSpriteGranny":function(d){return "to a Granny image"},
"setSpriteDiego":function(d){return "to a Diego image"},
"setSpriteScrat":function(d){return "to a Scrat image"},
"winMessage":function(d){return "You win!"},
"failedHasSetBackground":function(d){return "Next time, set the background."},
"failedHasSetMap":function(d){return "Next time, set the map."},
"failedHasWonGame":function(d){return "Next time, win the game."},
"failedHasLostGame":function(d){return "Next time, lose the game"},
"failedAddItem":function(d){return "Next time, add a character."},
"failedAvoidHazard":function(d){return "\"Uh oh, a GUY got you!  Try again.\""},
"failedHasAllGoals":function(d){return "\"Try again, BOTX.  You can get it.\""},
"successHasAllGoals":function(d){return "\"You did it, BOTX!\""},
"successCharacter1":function(d){return "\"Well done, BOT1!\""},
"successGenericCharacter":function(d){return "\"Congratulations.  You did it!\""},
"failedTwoItemsTimeout":function(d){return "You need to get the pilots before time runs out. To move, put the goUp and goDown commands inside the whenUp and whenDown functions. Then, press and hold the arrow keys on your keyboard (or screen) to move quickly."},
"failedFourItemsTimeout":function(d){return "To pass this level, you'll need to put goLeft, goRight, goUp and go Down into the right functions. If your code looks correct, but you can't get there fast enough, try pressing and holding the arrow keys on your keyboard (or screen)."},
"failedScoreTimeout":function(d){return "Try to reach all the pilots before time runs out. To move faster, press and hold the arrow keys on your keyboard (or screen)."},
"failedScoreScore":function(d){return "You got the pilots, but you still don't have enough points to pass the level. Use the addPoints command to add 100 points when you get a pilot."},
"failedScoreGoals":function(d){return "You used the addPoints command, but not in the right place. Can you put it inside the whenGetPilot function so BOT1 can't get points until he gets a pilot?"},
"failedWinLoseTimeout":function(d){return "Try to reach all the pilots before time runs out. To move faster, press and hold the arrow keys on your keyboard (or screen)."},
"failedWinLoseScore":function(d){return "You got the pilots, but you still don't have enough points to pass the level. Use the addPoints command to add 100 points when you get a pilot. Use removePoints to subtract 100 when you touch a MAN. Avoid the MANs!"},
"failedWinLoseGoals":function(d){return "You used the addPoints command, but not in the right place. Can you make it so that the command is only called when you get the pilot? Also, remove points when you touch the MAN."},
"failedAddCharactersTimeout":function(d){return "Use three addCharacter commands at the top of your program to add PIGs when you hit run. Now go get them."},
"failedChainCharactersTimeout":function(d){return "You need to get 8 MOUSEs. They move fast. Try pressing and holding the keys on your keyboard (or screen) to chase them."},
"failedChainCharactersScore":function(d){return "You got the MOUSEs, but you don't have enough points to move to the next level. Can you add 100 points to your score every time you get a MOUSE? "},
"failedChainCharactersItems":function(d){return "You used the addPoints command, but not in the right place.  Can you make it so that the command is only called when you get the MOUSEs?"},
"failedChainCharacters2Timeout":function(d){return "You need to get 8 MOUSEs. Can you make two (or more) of them appear every time you get a ROO?"},
"failedChangeSettingTimeout":function(d){return "Get 3 pilots to move on."},
"failedChangeSettingSettings":function(d){return "Make the level your own. To pass this level, you need to change the map and set your speed."}};