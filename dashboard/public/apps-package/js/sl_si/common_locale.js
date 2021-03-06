var common_locale = {lc:{"ar":function(n){
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
v:function(d,k){common_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){common_locale.c(d,k);return d[k] in p?p[d[k]]:(k=common_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){common_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).common_locale = {
"and":function(d){return "in"},
"backToPreviousLevel":function(d){return "Nazaj na prejšnjo raven"},
"blocklyMessage":function(d){return "Blockly"},
"blocks":function(d){return "bloki"},
"booleanFalse":function(d){return "ne velja"},
"booleanTrue":function(d){return "velja"},
"catActions":function(d){return "Dejanja"},
"catColour":function(d){return "Barva"},
"catLists":function(d){return "Seznami"},
"catLogic":function(d){return "Logika"},
"catLoops":function(d){return "Zanke"},
"catMath":function(d){return "Matematika"},
"catProcedures":function(d){return "Funkcije"},
"catText":function(d){return "Besedilo"},
"catVariables":function(d){return "Spremenljivke"},
"clearPuzzle":function(d){return "Začni znova"},
"clearPuzzleConfirm":function(d){return "S tem bo uganka postavljena v začetno stanje. Vsi bloki, ki ste jih dodali ali spremenili, bodo pobrisani."},
"clearPuzzleConfirmHeader":function(d){return "Si prepričan, da želiš začeti znova?"},
"codeMode":function(d){return "Koda"},
"codeTooltip":function(d){return "Poglej generirano kodo v JavaScriptu."},
"continue":function(d){return "Nadaljuj"},
"defaultTwitterText":function(d){return "Poglej, kaj sem naredil"},
"designMode":function(d){return "Oblikovanje"},
"dialogCancel":function(d){return "Prekliči"},
"dialogOK":function(d){return "Vredu"},
"directionEastLetter":function(d){return "E"},
"directionNorthLetter":function(d){return "N"},
"directionSouthLetter":function(d){return "S"},
"directionWestLetter":function(d){return "W"},
"dropletBlock_addOperator_description":function(d){return "Add two numbers"},
"dropletBlock_addOperator_signatureOverride":function(d){return "Add operator"},
"dropletBlock_andOperator_description":function(d){return "Logical AND of two booleans"},
"dropletBlock_andOperator_signatureOverride":function(d){return "AND boolean operator"},
"dropletBlock_assign_x_description":function(d){return "Reassign a variable"},
"dropletBlock_assign_x_param0":function(d){return "x"},
"dropletBlock_assign_x_param0_description":function(d){return "The variable name being assigned to"},
"dropletBlock_assign_x_param1":function(d){return "value"},
"dropletBlock_assign_x_param1_description":function(d){return "The value the variable is being assigned to."},
"dropletBlock_assign_x_signatureOverride":function(d){return "Assign a variable"},
"dropletBlock_callMyFunction_description":function(d){return "Use a function without an argument"},
"dropletBlock_callMyFunction_n_description":function(d){return "Use a function with argument"},
"dropletBlock_callMyFunction_n_signatureOverride":function(d){return "Call a function with parameters"},
"dropletBlock_callMyFunction_signatureOverride":function(d){return "Call a function"},
"dropletBlock_declareAssign_x_array_1_4_description":function(d){return "Create a variable and initialize it as an array"},
"dropletBlock_declareAssign_x_array_1_4_param0":function(d){return "x"},
"dropletBlock_declareAssign_x_array_1_4_param0_description":function(d){return "The name you will use in the program to reference the variable"},
"dropletBlock_declareAssign_x_array_1_4_param1":function(d){return "1,2,3,4"},
"dropletBlock_declareAssign_x_array_1_4_param1_description":function(d){return "The initial values to the array"},
"dropletBlock_declareAssign_x_array_1_4_signatureOverride":function(d){return "Declare a variable assigned to an array"},
"dropletBlock_declareAssign_x_description":function(d){return "Create a variable for the first time"},
"dropletBlock_declareAssign_x_param0":function(d){return "x"},
"dropletBlock_declareAssign_x_param0_description":function(d){return "The name you will use in the program to reference the variable"},
"dropletBlock_declareAssign_x_param1":function(d){return "0"},
"dropletBlock_declareAssign_x_param1_description":function(d){return "The initial value of the variable"},
"dropletBlock_declareAssign_x_prompt_description":function(d){return "Create a variable and assign it a value by displaying a prompt"},
"dropletBlock_declareAssign_x_prompt_param0":function(d){return "x"},
"dropletBlock_declareAssign_x_prompt_param0_description":function(d){return "The name you will use in the program to reference the variable"},
"dropletBlock_declareAssign_x_prompt_param1":function(d){return "\"Enter value\""},
"dropletBlock_declareAssign_x_prompt_param1_description":function(d){return "The string the user will see in the pop up when asked to enter a value"},
"dropletBlock_declareAssign_x_prompt_signatureOverride":function(d){return "Prompt the user for a value and store it"},
"dropletBlock_declareAssign_x_promptNum_description":function(d){return "Declares that the code will now use a variable and assign it an initial numerical value provided by the user"},
"dropletBlock_declareAssign_x_promptNum_param0":function(d){return "x"},
"dropletBlock_declareAssign_x_promptNum_param0_description":function(d){return "The name you will use in the program to reference the variable"},
"dropletBlock_declareAssign_x_promptNum_param1":function(d){return "\"Enter value\""},
"dropletBlock_declareAssign_x_promptNum_param1_description":function(d){return "The string the user will see in the pop up when asked to enter a value"},
"dropletBlock_declareAssign_x_promptNum_signatureOverride":function(d){return "Prompt the user for a numerical value and store it"},
"dropletBlock_declareAssign_x_signatureOverride":function(d){return "Declare a variable"},
"dropletBlock_declareNoAssign_x_description":function(d){return "Declares a variable with the given name after 'var'"},
"dropletBlock_declareNoAssign_x_signatureOverride":function(d){return "Declare a variable"},
"dropletBlock_divideOperator_description":function(d){return "Divide two numbers"},
"dropletBlock_divideOperator_signatureOverride":function(d){return "Divide operator"},
"dropletBlock_equalityOperator_description":function(d){return "Test for equality"},
"dropletBlock_equalityOperator_param0":function(d){return "x"},
"dropletBlock_equalityOperator_param0_description":function(d){return "The first value to use for comparison."},
"dropletBlock_equalityOperator_param1":function(d){return "y"},
"dropletBlock_equalityOperator_param1_description":function(d){return "The second value to use for comparison."},
"dropletBlock_equalityOperator_signatureOverride":function(d){return "Equality operator"},
"dropletBlock_forLoop_i_0_4_description":function(d){return "Do something multiple times"},
"dropletBlock_forLoop_i_0_4_signatureOverride":function(d){return "for loop"},
"dropletBlock_functionParams_n_description":function(d){return "Create a function with an argument"},
"dropletBlock_functionParams_n_signatureOverride":function(d){return "Function with a Parameter"},
"dropletBlock_functionParams_none_description":function(d){return "Create a function without an argument"},
"dropletBlock_functionParams_none_signatureOverride":function(d){return "Function Definition"},
"dropletBlock_getTime_description":function(d){return "Get the current time in milliseconds"},
"dropletBlock_greaterThanOperator_description":function(d){return "Compare two numbers"},
"dropletBlock_greaterThanOperator_param0":function(d){return "x"},
"dropletBlock_greaterThanOperator_param0_description":function(d){return "The first value to use for comparison."},
"dropletBlock_greaterThanOperator_param1":function(d){return "y"},
"dropletBlock_greaterThanOperator_param1_description":function(d){return "The second value to use for comparison."},
"dropletBlock_greaterThanOperator_signatureOverride":function(d){return "Greater than operator"},
"dropletBlock_ifBlock_description":function(d){return "Do something only if a condition is true"},
"dropletBlock_ifBlock_signatureOverride":function(d){return "if statement"},
"dropletBlock_ifElseBlock_description":function(d){return "Do something if a condition is true, otherwise do something else"},
"dropletBlock_ifElseBlock_signatureOverride":function(d){return "if/else statement"},
"dropletBlock_inequalityOperator_description":function(d){return "Test for inequality"},
"dropletBlock_inequalityOperator_param0":function(d){return "x"},
"dropletBlock_inequalityOperator_param0_description":function(d){return "The first value to use for comparison."},
"dropletBlock_inequalityOperator_param1":function(d){return "y"},
"dropletBlock_inequalityOperator_param1_description":function(d){return "The second value to use for comparison."},
"dropletBlock_inequalityOperator_signatureOverride":function(d){return "Inequality operator"},
"dropletBlock_lessThanOperator_description":function(d){return "Compare two numbers"},
"dropletBlock_lessThanOperator_param0":function(d){return "x"},
"dropletBlock_lessThanOperator_param0_description":function(d){return "The first value to use for comparison."},
"dropletBlock_lessThanOperator_param1":function(d){return "y"},
"dropletBlock_lessThanOperator_param1_description":function(d){return "The second value to use for comparison."},
"dropletBlock_lessThanOperator_signatureOverride":function(d){return "Less than operator"},
"dropletBlock_mathAbs_description":function(d){return "Absolute value"},
"dropletBlock_mathAbs_param0":function(d){return "x"},
"dropletBlock_mathAbs_param0_description":function(d){return "An arbitrary number."},
"dropletBlock_mathAbs_signatureOverride":function(d){return "Math.abs(x)"},
"dropletBlock_mathMax_description":function(d){return "Maximum value"},
"dropletBlock_mathMax_param0":function(d){return "n1, n2,..., nX"},
"dropletBlock_mathMax_param0_description":function(d){return "One or more numbers to compare."},
"dropletBlock_mathMax_signatureOverride":function(d){return "Math.max(n1, n2, ..., nX)"},
"dropletBlock_mathMin_description":function(d){return "Minimum value"},
"dropletBlock_mathMin_param0":function(d){return "n1, n2,..., nX"},
"dropletBlock_mathMin_param0_description":function(d){return "One or more numbers to compare."},
"dropletBlock_mathMin_signatureOverride":function(d){return "Math.min(n1, n2, ..., nX)"},
"dropletBlock_mathRound_description":function(d){return "Round to the nearest integer"},
"dropletBlock_mathRound_param0":function(d){return "x"},
"dropletBlock_mathRound_param0_description":function(d){return "An arbitrary number."},
"dropletBlock_mathRound_signatureOverride":function(d){return "Math.round(x)"},
"dropletBlock_multiplyOperator_description":function(d){return "Multiply two numbers"},
"dropletBlock_multiplyOperator_signatureOverride":function(d){return "Multiply operator"},
"dropletBlock_notOperator_description":function(d){return "Logical NOT of a boolean"},
"dropletBlock_notOperator_signatureOverride":function(d){return "AND boolean operator"},
"dropletBlock_orOperator_description":function(d){return "Logical OR of two booleans"},
"dropletBlock_orOperator_signatureOverride":function(d){return "OR boolean operator"},
"dropletBlock_randomNumber_max_description":function(d){return "Returns a random number ranging from zero to max, including both zero and max in the range"},
"dropletBlock_randomNumber_max_param0":function(d){return "max"},
"dropletBlock_randomNumber_max_param0_description":function(d){return "The maximum number returned"},
"dropletBlock_randomNumber_max_signatureOverride":function(d){return "randomNumber(max)"},
"dropletBlock_randomNumber_min_max_description":function(d){return "Get a random number between the specified minimum and maximum values"},
"dropletBlock_randomNumber_min_max_param0":function(d){return "min"},
"dropletBlock_randomNumber_min_max_param0_description":function(d){return "The minimum number returned"},
"dropletBlock_randomNumber_min_max_param1":function(d){return "max"},
"dropletBlock_randomNumber_min_max_param1_description":function(d){return "The maximum number returned"},
"dropletBlock_randomNumber_min_max_signatureOverride":function(d){return "randomNumber(min, max)"},
"dropletBlock_return_description":function(d){return "Return a value from a function"},
"dropletBlock_return_signatureOverride":function(d){return "vrne"},
"dropletBlock_setAttribute_description":function(d){return "Sets the given value"},
"dropletBlock_subtractOperator_description":function(d){return "Subtract two numbers"},
"dropletBlock_subtractOperator_signatureOverride":function(d){return "Subtract operator"},
"dropletBlock_whileBlock_description":function(d){return "Repeat something while a condition is true"},
"dropletBlock_whileBlock_signatureOverride":function(d){return "while loop"},
"emptyBlocksErrorMsg":function(d){return "Znotraj 'Ponovi' ali 'če' bloka morajo biti drugi bloki, da bo delovalo. Prepričaj se, da se notranji bloki ustrezno prilegajo zunanjemu bloku."},
"emptyBlockInFunction":function(d){return "Funkcija "+common_locale.v(d,"name")+" ima nezapolnjeni vhod."},
"emptyBlockInVariable":function(d){return "Spremenljivka "+common_locale.v(d,"name")+" ima nezapolnjeni vhod."},
"emptyExampleBlockErrorMsg":function(d){return "You need at least one example in function "+common_locale.v(d,"functionName")+". Make sure each example has a call and a result."},
"emptyFunctionBlocksErrorMsg":function(d){return "Da bi blok s funkcijo deloval, mora vsebovati druge bloke oz ukaze."},
"emptyFunctionalBlock":function(d){return "Eden od blokov je brez podatka."},
"emptyTopLevelBlock":function(d){return "There are no blocks to run. You must attach a block to the "+common_locale.v(d,"topLevelBlockName")+" block."},
"end":function(d){return "konec"},
"errorEmptyFunctionBlockModal":function(d){return "Funkcija mora vsebovati bloke z ukazi. Klikni \"uredi\" (ang.\"edit\") in povleci bloke z ukazi v zeleni blok."},
"errorIncompleteBlockInFunction":function(d){return "Klikni \"edit\" in preveri, če manjka kateri izmed blokov v tvoji funkciji."},
"errorParamInputUnattached":function(d){return "Ne pozabi v funkcijskem bloku dodati še bloka k vnosu vsakega parametra."},
"errorQuestionMarksInNumberField":function(d){return "Poskusite zamenjati \"???\" z vrednostjo."},
"errorRequiredParamsMissing":function(d){return "Klikni na \"uredi\" (ang. \"edit\") in dodaj v svojo funkcijopotreben parametre tako, da ustrezen blok povezan s parametrom povlečeš v opredelitev funkcije."},
"errorUnusedFunction":function(d){return "Usvaril/a si funkcijo, a si jo pozabil/a uporabiti v svojem delovnem prostoru. Klikni na \"Funkcije\" in poskrbi, da boš uporabil/a funkcijo v svojem programu."},
"errorUnusedParam":function(d){return "Dodal/a si blok k parametru, a si ga pozabil/a uporabiti v opredelitvi. Klikni na \"uredi\" (ang. \"edit\") in dodaj v zeleni blok ustrezen blok povezan s parametrom."},
"exampleErrorMessage":function(d){return "Funkcija "+common_locale.v(d,"functionName")+" ima enega ali več primerov, ki potrebujejo prilagajanje. Poskrbite, da ustrezajo vaši opredelitvi in odgovorite na vprašanje."},
"examplesFailedOnClose":function(d){return "Eden ali več vaših primerov se ne ujema z vašo opredelitvijo. Preverite svoje primere preden zaprete"},
"extraTopBlocks":function(d){return "Obstajajo bloki, ki niso povezani nikamor."},
"extraTopBlocksWhenRun":function(d){return "Obstajajo bloki, ki niso povezani nikamor. Ali jih nameravaš povezati na blok \"Ob zagonu\" (When run)?"},
"finalStage":function(d){return "Čestitke! Zaključil si zadnjo stopnjo."},
"finalStageTrophies":function(d){return "Čestitke! Zaključil/a si stopnjo "+common_locale.v(d,"stageNumber")+" in osvojil/a "+common_locale.p(d,"numTrophies",0,"sl",{"one":"trofejo","other":common_locale.n(d,"numTrophies")+" trofej"})+"."},
"finish":function(d){return "Končaj"},
"generatedCodeInfo":function(d){return "Celo najboljše univerze učijo programirati s pomočjo blokov (npr. "+common_locale.v(d,"berkeleyLink")+", "+common_locale.v(d,"harvardLink")+"). Pod pokrovom pa se skrivajo pravi programi, napisani v JavaScriptu, enem najbolj uporabljanih programskih jezikov:"},
"genericFeedback":function(d){return "Poglej kako si končal in poizkusi popraviti svoj program."},
"hashError":function(d){return "Žal, '%1' ne ustreza nobenemu shranjenemu programu."},
"help":function(d){return "Pomoč"},
"hideToolbox":function(d){return "(Skrij)"},
"hintHeader":function(d){return "Tukaj je namig:"},
"hintRequest":function(d){return "Poglej namig"},
"hintTitle":function(d){return "Namig:"},
"ignore":function(d){return "Prezri"},
"infinity":function(d){return "Neskončnost"},
"jump":function(d){return "skoči"},
"keepPlaying":function(d){return "Igraj naprej"},
"levelIncompleteError":function(d){return "Uporabljaš vse potrebne tipe blokov, a ne na pravi način."},
"listVariable":function(d){return "seznam"},
"makeYourOwnFlappy":function(d){return "Izdelaj svojo lastno igrico o Plahutaču (Flappyju)"},
"missingBlocksErrorMsg":function(d){return "Če boš uporabil/a vsaj en blok, ki ga najdeš spodaj, ali več, boš rešil/a uganko."},
"nestedForSameVariable":function(d){return "You're using the same variable inside two or more nested loops. Use unique variable names to avoid infinite loops."},
"nextLevel":function(d){return "Čestitke! Rešil/a si uganko "+common_locale.v(d,"puzzleNumber")+"."},
"nextLevelTrophies":function(d){return "Čestitke! Rešil/a si uganko "+common_locale.v(d,"puzzleNumber")+" in osvojil/a "+common_locale.p(d,"numTrophies",0,"sl",{"one":"lovoriko","other":common_locale.n(d,"numTrophies")+" lovorik"})+"."},
"nextPuzzle":function(d){return "Naslednja uganka"},
"nextStage":function(d){return "Čestitke! Dokončal/a si "+common_locale.v(d,"stageName")+"."},
"nextStageTrophies":function(d){return "Čestitke! Zaključil/a si stopnjo "+common_locale.v(d,"stageName")+" in osvojil/a "+common_locale.p(d,"numTrophies",0,"sl",{"one":"lovoriko","other":common_locale.n(d,"numTrophies")+" lovorik"})+"."},
"numBlocksNeeded":function(d){return "Čestitke! Zaključil/a si uganko "+common_locale.v(d,"puzzleNumber")+". (Vendar bi lahko uporabil samo  "+common_locale.p(d,"numBlocks",0,"sl",{"one":"1 blok","other":common_locale.n(d,"numBlocks")+" blokov"})+".)"},
"numLinesOfCodeWritten":function(d){return "Ravnokar si napisal/a "+common_locale.p(d,"numLines",0,"sl",{"one":"1 vrstico","other":common_locale.n(d,"numLines")+" vrstic"})+" kode!"},
"openWorkspace":function(d){return "Kako deluje"},
"orientationLock":function(d){return "Izključi zaklepanje orientacije v nastavitvah naprave."},
"play":function(d){return "igraj"},
"print":function(d){return "Natisni"},
"puzzleTitle":function(d){return "Uganka "+common_locale.v(d,"puzzle_number")+" od "+common_locale.v(d,"stage_total")},
"readonlyWorkspaceHeader":function(d){return "View only: "},
"repeat":function(d){return "ponovi"},
"resetProgram":function(d){return "resetiraj"},
"rotateText":function(d){return "Zasukaj tvojo napravo."},
"runProgram":function(d){return "Zaženi program"},
"runtimeErrorMsg":function(d){return "Your program did not run successfully. Please remove line "+common_locale.v(d,"lineNumber")+" and try again."},
"runTooltip":function(d){return "Zaženi program, definiran z bloki na delovni površini."},
"saveToGallery":function(d){return "Shrani v galerijo"},
"savedToGallery":function(d){return "Shranjeno v galerijo!"},
"score":function(d){return "rezultat"},
"shareFailure":function(d){return "Žal, ne moremo objaviti tega programa."},
"shareWarningsAge":function(d){return "Please provide your age below and click OK to continue."},
"shareWarningsMoreInfo":function(d){return "More Info"},
"shareWarningsStoreData":function(d){return "This app built on Code Studio stores data that could be viewed by anyone with this sharing link, so be careful if you are asked to provide personal information."},
"showBlocksHeader":function(d){return "Prikaži bloke"},
"showCodeHeader":function(d){return "Pokaži kodo"},
"showGeneratedCode":function(d){return "Pokaži kodo"},
"showTextHeader":function(d){return "Prikaži besedilo"},
"showVersionsHeader":function(d){return "Zgodovina različic"},
"showToolbox":function(d){return "Pokaži orodjarno"},
"signup":function(d){return "Vpiši se za uvodni tečaj"},
"stringEquals":function(d){return "črkovni niz =?"},
"submit":function(d){return "Pošlji"},
"submitYourProject":function(d){return "Submit your project"},
"submitYourProjectConfirm":function(d){return "You cannot edit your project after submitting it, really submit?"},
"subtitle":function(d){return "vizualno programersko okolje"},
"syntaxErrorMsg":function(d){return "Your program contains a typo. Please remove line "+common_locale.v(d,"lineNumber")+" and try again."},
"textVariable":function(d){return "besedilo"},
"toggleBlocksErrorMsg":function(d){return "Da bo program prikazan kot bloki, moraš odpraviti napako v njem."},
"tooFewBlocksMsg":function(d){return "Uporabil/a si prave tipe blokov, a potrebuješ jih še več za rešitev te uganke."},
"tooManyBlocksMsg":function(d){return "Ta uganka je lahko rešena z <x id='START_SPAN'/><x id='END_SPAN'/> bloki."},
"tooMuchWork":function(d){return "Si me pa utrudil/a! Bi se lahko poskusil/a manjkrat ponavljati?"},
"toolboxHeader":function(d){return "Bloki"},
"toolboxHeaderDroplet":function(d){return "Orodjarna"},
"totalNumLinesOfCodeWritten":function(d){return "Seštevek vseh skupaj:  "+common_locale.p(d,"numLines",0,"sl",{"one":"1 vrstica","other":common_locale.n(d,"numLines")+" vrstic"})+" kode."},
"tryAgain":function(d){return "Poskusi ponovno"},
"tryHOC":function(d){return "Poizkusi Uro za programiranje (Hour to Code)"},
"unnamedFunction":function(d){return "Imate spremenljivko ali funkcijo, ki nima imena. Ne pozabite vsega opisno poimenovati."},
"wantToLearn":function(d){return "Se želiš naučiti programirati?"},
"watchVideo":function(d){return "Glej video"},
"when":function(d){return "ko"},
"whenRun":function(d){return "ob zagonu"},
"workspaceHeaderShort":function(d){return "Delovni prostor: "},
"completedWithoutRecommendedBlock":function(d){return "Congratulations! You completed Puzzle "+common_locale.v(d,"puzzleNumber")+". (But you could use a different block for stronger code.)"},
"dropletBlock_mathRandom_description":function(d){return "Returns a random number ranging from 0 (inclusive) up to but not including 1 (exclusive)"},
"dropletBlock_mathRandom_signatureOverride":function(d){return "Math.random()"},
"dropletBlock_randomNumber_param0":function(d){return "min"},
"dropletBlock_randomNumber_param0_description":function(d){return "The minimum number returned"},
"dropletBlock_randomNumber_param1":function(d){return "max"},
"dropletBlock_randomNumber_param1_description":function(d){return "The maximum number returned"},
"dropletBlock_randomNumber_signatureOverride":function(d){return "randomNumber(min, max)"},
"missingRecommendedBlocksErrorMsg":function(d){return "Not quite. Try using a block you aren’t using yet."},
"missingRequiredBlocksErrorMsg":function(d){return "Not quite. You have to use a block you aren’t using yet."},
"unsubmit":function(d){return "Unsubmit"},
"unsubmitYourProject":function(d){return "Unsubmit your project"},
"unsubmitYourProjectConfirm":function(d){return "Unsubmitting your project will reset the submitted date, really unsubmit?"},
"tryBlocksBelowFeedback":function(d){return "Try using one of the blocks below:"}};