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
"and":function(d){return "et"},
"backToPreviousLevel":function(d){return "Retour au niveau précédent"},
"blocklyMessage":function(d){return "Blockly"},
"blocks":function(d){return "blocs"},
"booleanFalse":function(d){return "faux"},
"booleanTrue":function(d){return "vrai"},
"catActions":function(d){return "Actions"},
"catColour":function(d){return "Couleur"},
"catLists":function(d){return "Listes"},
"catLogic":function(d){return "Logique"},
"catLoops":function(d){return "Boucles"},
"catMath":function(d){return "Calculs"},
"catProcedures":function(d){return "Fonctions"},
"catText":function(d){return "texte"},
"catVariables":function(d){return "Variables"},
"clearPuzzle":function(d){return "Recommencer"},
"clearPuzzleConfirm":function(d){return "Cela va réinitialiser le puzzle à son état de départ et supprimer tous les blocs que tu as ajouté ou changé."},
"clearPuzzleConfirmHeader":function(d){return "Est-tu certain(e) de vouloir recommencer ?"},
"codeMode":function(d){return "Code"},
"codeTooltip":function(d){return "Voir le code JavaScript généré."},
"continue":function(d){return "Continuer"},
"defaultTwitterText":function(d){return "Découvre ce que j'ai fait"},
"designMode":function(d){return "Design"},
"dialogCancel":function(d){return "Annuler"},
"dialogOK":function(d){return "OK"},
"directionEastLetter":function(d){return "E"},
"directionNorthLetter":function(d){return "N"},
"directionSouthLetter":function(d){return "S"},
"directionWestLetter":function(d){return "O"},
"dropletBlock_addOperator_description":function(d){return "Ajouter deux nombres"},
"dropletBlock_addOperator_signatureOverride":function(d){return "Ajouter un opérateur"},
"dropletBlock_andOperator_description":function(d){return "Retourner vrai seulement quand les deux expressions sont vraies et faux sinon"},
"dropletBlock_andOperator_signatureOverride":function(d){return "opérateur booléen ET"},
"dropletBlock_assign_x_description":function(d){return "Assigne un valeur à une variable existante. Par exemple, x = 0;"},
"dropletBlock_assign_x_param0":function(d){return "x"},
"dropletBlock_assign_x_param0_description":function(d){return "Le nom assigné à la variable"},
"dropletBlock_assign_x_param1":function(d){return "valeur"},
"dropletBlock_assign_x_param1_description":function(d){return "La valeur attribuée à la variable."},
"dropletBlock_assign_x_signatureOverride":function(d){return "Assigner une variable"},
"dropletBlock_callMyFunction_description":function(d){return "Appelle une fonction nommée qui ne prend aucun paramètre"},
"dropletBlock_callMyFunction_n_description":function(d){return "Appelle une fonction nommée qui prend un ou des paramètres"},
"dropletBlock_callMyFunction_n_signatureOverride":function(d){return "Appeler une fonction avec des paramètres"},
"dropletBlock_callMyFunction_signatureOverride":function(d){return "Appeler une fonction"},
"dropletBlock_declareAssign_x_array_1_4_description":function(d){return "Create a variable and initialize it as an array"},
"dropletBlock_declareAssign_x_array_1_4_param0":function(d){return "x"},
"dropletBlock_declareAssign_x_array_1_4_param0_description":function(d){return "The name you will use in the program to reference the variable"},
"dropletBlock_declareAssign_x_array_1_4_param1":function(d){return "1,2,3,4"},
"dropletBlock_declareAssign_x_array_1_4_param1_description":function(d){return "Les valeurs initiales du tableau"},
"dropletBlock_declareAssign_x_array_1_4_signatureOverride":function(d){return "Declare a variable assigned to an array"},
"dropletBlock_declareAssign_x_description":function(d){return "Créer une variable pour la première fois"},
"dropletBlock_declareAssign_x_param0":function(d){return "x"},
"dropletBlock_declareAssign_x_param0_description":function(d){return "The name you will use in the program to reference the variable"},
"dropletBlock_declareAssign_x_param1":function(d){return "0"},
"dropletBlock_declareAssign_x_param1_description":function(d){return "The initial value of the variable"},
"dropletBlock_declareAssign_x_prompt_description":function(d){return "Déclare que le code va maintenant utiliser une variable et lui assigne une valeur initiale fournie par l'utilisateur"},
"dropletBlock_declareAssign_x_prompt_param0":function(d){return "x"},
"dropletBlock_declareAssign_x_prompt_param0_description":function(d){return "The name you will use in the program to reference the variable"},
"dropletBlock_declareAssign_x_prompt_param1":function(d){return "« Entrer la valeur »"},
"dropletBlock_declareAssign_x_prompt_param1_description":function(d){return "The string the user will see in the pop up when asked to enter a value"},
"dropletBlock_declareAssign_x_prompt_signatureOverride":function(d){return "Demander une valeur à l'utilisateur et l'enregistrer"},
"dropletBlock_declareAssign_x_promptNum_description":function(d){return "Declares that the code will now use a variable and assign it an initial numerical value provided by the user"},
"dropletBlock_declareAssign_x_promptNum_param0":function(d){return "x"},
"dropletBlock_declareAssign_x_promptNum_param0_description":function(d){return "The name you will use in the program to reference the variable"},
"dropletBlock_declareAssign_x_promptNum_param1":function(d){return "« Entrer la valeur »"},
"dropletBlock_declareAssign_x_promptNum_param1_description":function(d){return "The string the user will see in the pop up when asked to enter a value"},
"dropletBlock_declareAssign_x_promptNum_signatureOverride":function(d){return "Prompt the user for a numerical value and store it"},
"dropletBlock_declareAssign_x_signatureOverride":function(d){return "Déclarer une variable"},
"dropletBlock_declareNoAssign_x_description":function(d){return "Declares a variable with the given name after 'var'"},
"dropletBlock_declareNoAssign_x_signatureOverride":function(d){return "Déclarer une variable"},
"dropletBlock_divideOperator_description":function(d){return "Diviser deux nombres"},
"dropletBlock_divideOperator_signatureOverride":function(d){return "Opérateur de division"},
"dropletBlock_equalityOperator_description":function(d){return "Test for equality"},
"dropletBlock_equalityOperator_param0":function(d){return "x"},
"dropletBlock_equalityOperator_param0_description":function(d){return "The first value to use for comparison."},
"dropletBlock_equalityOperator_param1":function(d){return "y"},
"dropletBlock_equalityOperator_param1_description":function(d){return "The second value to use for comparison."},
"dropletBlock_equalityOperator_signatureOverride":function(d){return "Equality operator"},
"dropletBlock_forLoop_i_0_4_description":function(d){return "Do something multiple times"},
"dropletBlock_forLoop_i_0_4_signatureOverride":function(d){return "for loop"},
"dropletBlock_functionParams_n_description":function(d){return "Create a function with an argument"},
"dropletBlock_functionParams_n_signatureOverride":function(d){return "Définit une fonction avec des paramètres"},
"dropletBlock_functionParams_none_description":function(d){return "Un ensemble d'instructions qui effectuent une tâche ou calculent une valeur quand la fonction est appelée"},
"dropletBlock_functionParams_none_signatureOverride":function(d){return "Définit une fonction"},
"dropletBlock_getTime_description":function(d){return "Get the current time in milliseconds"},
"dropletBlock_greaterThanOperator_description":function(d){return "Compare deux nombres"},
"dropletBlock_greaterThanOperator_param0":function(d){return "x"},
"dropletBlock_greaterThanOperator_param0_description":function(d){return "The first value to use for comparison."},
"dropletBlock_greaterThanOperator_param1":function(d){return "y"},
"dropletBlock_greaterThanOperator_param1_description":function(d){return "The second value to use for comparison."},
"dropletBlock_greaterThanOperator_signatureOverride":function(d){return "Greater than operator"},
"dropletBlock_ifBlock_description":function(d){return "Do something only if a condition is true"},
"dropletBlock_ifBlock_signatureOverride":function(d){return "instruction si"},
"dropletBlock_ifElseBlock_description":function(d){return "Do something if a condition is true, otherwise do something else"},
"dropletBlock_ifElseBlock_signatureOverride":function(d){return "instruction si/sinon"},
"dropletBlock_inequalityOperator_description":function(d){return "Test for inequality"},
"dropletBlock_inequalityOperator_param0":function(d){return "x"},
"dropletBlock_inequalityOperator_param0_description":function(d){return "The first value to use for comparison."},
"dropletBlock_inequalityOperator_param1":function(d){return "y"},
"dropletBlock_inequalityOperator_param1_description":function(d){return "The second value to use for comparison."},
"dropletBlock_inequalityOperator_signatureOverride":function(d){return "Opérateur d'inégalité"},
"dropletBlock_lessThanOperator_description":function(d){return "Compare deux nombres"},
"dropletBlock_lessThanOperator_param0":function(d){return "x"},
"dropletBlock_lessThanOperator_param0_description":function(d){return "The first value to use for comparison."},
"dropletBlock_lessThanOperator_param1":function(d){return "y"},
"dropletBlock_lessThanOperator_param1_description":function(d){return "The second value to use for comparison."},
"dropletBlock_lessThanOperator_signatureOverride":function(d){return "Opérateur inférieur"},
"dropletBlock_mathAbs_description":function(d){return "Absolute value"},
"dropletBlock_mathAbs_param0":function(d){return "x"},
"dropletBlock_mathAbs_param0_description":function(d){return "Un nombre arbitraire."},
"dropletBlock_mathAbs_signatureOverride":function(d){return "Math.absolu(x)"},
"dropletBlock_mathMax_description":function(d){return "Maximum value"},
"dropletBlock_mathMax_param0":function(d){return "n1, n2, …, nX"},
"dropletBlock_mathMax_param0_description":function(d){return "One or more numbers to compare."},
"dropletBlock_mathMax_signatureOverride":function(d){return "Math.max(n1, n2, …, nX)"},
"dropletBlock_mathMin_description":function(d){return "Minimum value"},
"dropletBlock_mathMin_param0":function(d){return "n1, n2, …, nX"},
"dropletBlock_mathMin_param0_description":function(d){return "One or more numbers to compare."},
"dropletBlock_mathMin_signatureOverride":function(d){return "Math.min(n1, n2, …, nX)"},
"dropletBlock_mathRound_description":function(d){return "Round to the nearest integer"},
"dropletBlock_mathRound_param0":function(d){return "x"},
"dropletBlock_mathRound_param0_description":function(d){return "Un nombre arbitraire."},
"dropletBlock_mathRound_signatureOverride":function(d){return "Math.arrondi(x)"},
"dropletBlock_multiplyOperator_description":function(d){return "Multiplie deux nombres"},
"dropletBlock_multiplyOperator_signatureOverride":function(d){return "Opérateur de multiplication"},
"dropletBlock_notOperator_description":function(d){return "Logical NOT of a boolean"},
"dropletBlock_notOperator_signatureOverride":function(d){return "Opérateur booléen NON"},
"dropletBlock_orOperator_description":function(d){return "Renvoie vrai lorsque chacune des expressions est vraie et faux sinon"},
"dropletBlock_orOperator_signatureOverride":function(d){return "Opérateur booléen OU"},
"dropletBlock_randomNumber_max_description":function(d){return "Returns a random number ranging from zero to max, including both zero and max in the range"},
"dropletBlock_randomNumber_max_param0":function(d){return "max"},
"dropletBlock_randomNumber_max_param0_description":function(d){return "La valeur maximale possible"},
"dropletBlock_randomNumber_max_signatureOverride":function(d){return "randomNumber(max)"},
"dropletBlock_randomNumber_min_max_description":function(d){return "Get a random number between the specified minimum and maximum values"},
"dropletBlock_randomNumber_min_max_param0":function(d){return "min"},
"dropletBlock_randomNumber_min_max_param0_description":function(d){return "The minimum number returned"},
"dropletBlock_randomNumber_min_max_param1":function(d){return "max"},
"dropletBlock_randomNumber_min_max_param1_description":function(d){return "La valeur maximale possible"},
"dropletBlock_randomNumber_min_max_signatureOverride":function(d){return "randomNumber(min, max)"},
"dropletBlock_return_description":function(d){return "Return a value from a function"},
"dropletBlock_return_signatureOverride":function(d){return "retour"},
"dropletBlock_setAttribute_description":function(d){return "Sets the given value"},
"dropletBlock_subtractOperator_description":function(d){return "Soustrait deux nombres"},
"dropletBlock_subtractOperator_signatureOverride":function(d){return "Opérateur de soustraction"},
"dropletBlock_whileBlock_description":function(d){return "Repeat something while a condition is true"},
"dropletBlock_whileBlock_signatureOverride":function(d){return "while loop"},
"emptyBlocksErrorMsg":function(d){return "Le bloc « Répéter » ou « si » doit contenir d'autres blocs pour fonctionner. Assurez-vous que le bloc interne s'insère correctement à l'intérieur du bloc conteneur."},
"emptyBlockInFunction":function(d){return "La fonction "+common_locale.v(d,"name")+" a une entrée non remplie."},
"emptyBlockInVariable":function(d){return "La variable "+common_locale.v(d,"name")+" à une entrée non remplie."},
"emptyExampleBlockErrorMsg":function(d){return "Il te faut au moins deux exemples dans la fonction "+common_locale.v(d,"functionName")+". Assure-toi que chaque exemple a un appel et un résultat."},
"emptyFunctionBlocksErrorMsg":function(d){return "Le bloc « Fonction » doit contenir d'autres blocs pour fonctionner."},
"emptyFunctionalBlock":function(d){return "Un de vos blocs ne contient pas d'entrée."},
"emptyTopLevelBlock":function(d){return "Il n'y a pas de blocs à exécuter. Vous devez joindre un bloc au bloc "+common_locale.v(d,"topLevelBlockName")+"."},
"end":function(d){return "fin"},
"errorEmptyFunctionBlockModal":function(d){return "Il faut des blocs dans votre définition de fonction. Cliquez sur \"modifier\" puis faites glisser les blocs dans le bloc vert."},
"errorIncompleteBlockInFunction":function(d){return "Cliquez sur \"modifier\" pour vous assurer qu'il ne manque pas de blocs dans votre définition de fonction."},
"errorParamInputUnattached":function(d){return "N'oubliez pas de joindre un bloc à l'entrée de chaque paramètre sur le bloc de fonction dans votre espace de travail."},
"errorQuestionMarksInNumberField":function(d){return "Essayez de remplacer \"???\" avec un nombre."},
"errorRequiredParamsMissing":function(d){return "Créez un paramètre pour votre fonction en cliquant sur « modifier » et en ajoutant les paramètres nécessaires. Faites glisser les nouveaux blocs de paramètres dans votre définition de fonction."},
"errorUnusedFunction":function(d){return "Vous avez créé une fonction mais ne l'avez pas ajoutée à votre espace de travail ! Cliquez « Fonctions » dans la boîte à outils et assurez-vous d'utiliser votre fonction dans votre programme."},
"errorUnusedParam":function(d){return "Vous avez ajouté un bloc de paramètres, mais il n'a pas été utilisé dans la définition. Assurez-vous d'utiliser votre paramètre en cliquant sur « modifier » et de placer le bloc de paramètres dans le bloc vert."},
"exampleErrorMessage":function(d){return "La fonction "+common_locale.v(d,"functionName")+" a un ou plusieurs des exemples qui doivent être modifiés. Assure-toi qu'ils correspondent à ta définition et qu'ils répondent à la question."},
"examplesFailedOnClose":function(d){return "Un ou plusieurs de tes exemples ne correspondent pas à ta définition. Vérifie tes exemples avant de terminer"},
"extraTopBlocks":function(d){return "Vous avez des blocs libres."},
"extraTopBlocksWhenRun":function(d){return "Vous avez des blocs libres. Pensiez-vous à fixer ceux-ci au bloc « lors du lancement » ?"},
"finalStage":function(d){return "Félicitations ! Tu as terminé l'étape finale."},
"finalStageTrophies":function(d){return "Félicitations ! Tu as terminé l'étape finale et gagné "+common_locale.p(d,"numTrophies",0,"fr",{"one":"un trophée","other":common_locale.n(d,"numTrophies")+" trophées"})+"."},
"finish":function(d){return "Terminer"},
"generatedCodeInfo":function(d){return "Même les plus grandes univesités enseignent la programmation basée sur les blocs. (ex., "+common_locale.v(d,"berkeleyLink")+", "+common_locale.v(d,"harvardLink")+"). Mais sous le capot, les blocs que vous avez assemblés peuvent aussi être affichés en Javascript, le langage de programmation le plus utilisé au monde:"},
"genericFeedback":function(d){return "Observez le résultat et essayez de corriger les erreurs."},
"hashError":function(d){return "Désolé, '%1' ne correspond à aucun programme enregistré."},
"help":function(d){return "Aide"},
"hideToolbox":function(d){return "(Masquer)"},
"hintHeader":function(d){return "Voici une astuce :"},
"hintRequest":function(d){return "Voir l'astuce"},
"hintTitle":function(d){return "Indice :"},
"ignore":function(d){return "Ignorer"},
"infinity":function(d){return "Infini"},
"jump":function(d){return "sauter"},
"keepPlaying":function(d){return "Continuer à jouer"},
"levelIncompleteError":function(d){return "Vous utilisez tous les types nécessaires de blocs, mais pas de la bonne manière."},
"listVariable":function(d){return "liste"},
"makeYourOwnFlappy":function(d){return "Réalisez votre propre Flappy Bird"},
"missingBlocksErrorMsg":function(d){return "Essayez un ou plusieurs des blocs ci-dessous pour résoudre ce puzzle."},
"nestedForSameVariable":function(d){return "Vous utilisez la même variable dans deux ou plusieurs boucles imbriquées. Utilisez des noms de variables uniques pour éviter des boucles infinies."},
"nextLevel":function(d){return "Félicitations ! Tu as terminé le Puzzle "+common_locale.v(d,"puzzleNumber")+"."},
"nextLevelTrophies":function(d){return "Félicitations ! Tu as terminé le Puzzle "+common_locale.v(d,"puzzleNumber")+" et gagné "+common_locale.p(d,"numTrophies",0,"fr",{"one":"un trophée","other":common_locale.n(d,"numTrophies")+" trophées"})+"."},
"nextPuzzle":function(d){return "Puzzle suivant"},
"nextStage":function(d){return "Félicitations ! Vous avez terminé "+common_locale.v(d,"stageName")+"."},
"nextStageTrophies":function(d){return "Félicitations ! Vous avez terminé "+common_locale.v(d,"stageName")+" et gagné "+common_locale.p(d,"numTrophies",0,"fr",{"one":"un trophée","other":common_locale.n(d,"numTrophies")+" trophées"})+"."},
"numBlocksNeeded":function(d){return "Félicitations !  Vous avez terminé le Puzzle "+common_locale.v(d,"puzzleNumber")+". (Toutefois, vous auriez pu utiliser seulement "+common_locale.p(d,"numBlocks",0,"fr",{"one":"1 bloc","other":common_locale.n(d,"numBlocks")+" blocs"})+".)"},
"numLinesOfCodeWritten":function(d){return "Tu viens d'écrire "+common_locale.p(d,"numLines",0,"fr",{"one":"1 ligne","other":common_locale.n(d,"numLines")+" lignes"})+" de code !"},
"openWorkspace":function(d){return "Comment ça marche"},
"orientationLock":function(d){return "Désactivez le verrouillage de l'orientation dans les réglages de votre appareil."},
"play":function(d){return "jouer"},
"print":function(d){return "Imprimer"},
"puzzleTitle":function(d){return "Puzzle "+common_locale.v(d,"puzzle_number")+" sur "+common_locale.v(d,"stage_total")},
"readonlyWorkspaceHeader":function(d){return "Afficher uniquement : "},
"repeat":function(d){return "répéter"},
"resetProgram":function(d){return "Réinitialiser"},
"rotateText":function(d){return "Tournez votre appareil."},
"runProgram":function(d){return "Démarrer"},
"runtimeErrorMsg":function(d){return "Your program did not run successfully. Please remove line "+common_locale.v(d,"lineNumber")+" and try again."},
"runTooltip":function(d){return "Exécuter le programme défini par les blocs dans l'espace de travail."},
"saveToGallery":function(d){return "Sauvegarder dans la galerie"},
"savedToGallery":function(d){return "Enregistré dans la galerie !"},
"score":function(d){return "score"},
"shareFailure":function(d){return "Désolé, nous ne pouvons pas partager ce programme."},
"shareWarningsAge":function(d){return "Please provide your age below and click OK to continue."},
"shareWarningsMoreInfo":function(d){return "More Info"},
"shareWarningsStoreData":function(d){return "This app built on Code Studio stores data that could be viewed by anyone with this sharing link, so be careful if you are asked to provide personal information."},
"showBlocksHeader":function(d){return "Afficher les blocs"},
"showCodeHeader":function(d){return "Afficher le code"},
"showGeneratedCode":function(d){return "Afficher le code"},
"showTextHeader":function(d){return "Afficher le texte"},
"showVersionsHeader":function(d){return "Historique des versions"},
"showToolbox":function(d){return "Voir la boîte à outils"},
"signup":function(d){return "Inscrivez-vous au cours d'introduction"},
"stringEquals":function(d){return "Texte = ?"},
"submit":function(d){return "Envoyer"},
"submitYourProject":function(d){return "Proposez votre projet"},
"submitYourProjectConfirm":function(d){return "Vous ne pouvez plus modifier votre projet après l'avoir envoyé, voulez-vous tout de même l'envoyer maintenant ?"},
"subtitle":function(d){return "un environnement de programmation visuelle"},
"syntaxErrorMsg":function(d){return "Your program contains a typo. Please remove line "+common_locale.v(d,"lineNumber")+" and try again."},
"textVariable":function(d){return "texte"},
"toggleBlocksErrorMsg":function(d){return "Vous devez corriger une erreur dans votre programme avant qu'il ne puisse être présenté sous forme de blocs."},
"tooFewBlocksMsg":function(d){return "Vous utilisez tous les types des blocs nécessaires, mais essayez d'utiliser plus de ces types de blocs pour compléter ce puzzle."},
"tooManyBlocksMsg":function(d){return "Ce puzzle peut être résolu avec <x id ='START_SPAN'/><x id='END_SPAN'/> blocs."},
"tooMuchWork":function(d){return "Vous m'avez fait faire beaucoup de travail !  Pourriez-vous essayer en répétant moins de fois ?"},
"toolboxHeader":function(d){return "Blocs"},
"toolboxHeaderDroplet":function(d){return "Boîte à outils"},
"totalNumLinesOfCodeWritten":function(d){return "Production totale : "+common_locale.p(d,"numLines",0,"fr",{"one":"1 ligne","other":common_locale.n(d,"numLines")+" lignes"})+" de code."},
"tryAgain":function(d){return "Réessayer"},
"tryHOC":function(d){return "Essayez l'Heure de Code"},
"unnamedFunction":function(d){return "Une des variables ou fonctions n'a pas de nom. N'oublie pas d'utiliser des noms descriptifs."},
"wantToLearn":function(d){return "Vous souhaitez apprendre à coder ?"},
"watchVideo":function(d){return "Voir la vidéo"},
"when":function(d){return "lorsque"},
"whenRun":function(d){return "lors du lancement"},
"workspaceHeaderShort":function(d){return "Espace de travail :"},
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