* * *

title: <%= hoc_s(:title_tutorial_guidelines) %> layout: wide

* * *

<%= view :signup_button %>

# Linee guida al Tutorial per "L'Ora del Codice" e per "La Settimana dell'Insegnamento dell'Informatica"

Code.org organizzerà un gran numero di attività di Hour of Code™ sui siti Code.org, Hour of Code, e CSEdWeek. La lista corrente è disponibile alla pagina [<%= resolve_url('code.org/learn') %>](%= resolve_url('https://code.org/learn') %).

Vorremmo mettere a disposizione dei fruitori diverse interessanti opportunità, ma il nostro obiettivo principale è quello di garantire il massimo dell'esperienza a studenti e docenti che si avvicinano all'informatica per la prima volta. Ti chiediamo di usare questo documento come guida per la creazione della tua attività, destinata ad utenti che non hanno alcuna esperienza nella scrittura di codice, nella programmazione e, in generale, nell'informatica.

  


**After reading the guidelines, you can submit your tutorial through our [Hour of Code™ Activity Submission page](https://goo.gl/kNrV3l).**

**NOVITÀ:** A differenza degli anni passati, abbiamo intenzione di introdurre un nuovo formato per le attività di Hour of Code guidate dagli insegnanti. Esse saranno elencate sotto le attività svolgibili in autonomia in pagine ed email destinate agli studenti. I dettagli sono qui di seguito.

<a id="top"></a>

## Indice:

  * [General guidelines for creating an Hour of Code™ activity](#guidelines)
  * [Come saranno valutati i tutorial per poter essere inclusi](#inclusion)
  * [How to submit (Due 10/15/2015)](#submit)
  * [Suggerimenti per progettare la tua attività](#design)
  * [Linee guida sui marchi](#tm)
  * [Pixel di tracciamento](#pixel)
  * [Come promuovere il tuo tutorial, la CSEdWeek e l'Ora del Codice](#promote)
  * [Una nota sugli studenti con disabilità](#disabilities)

<a id="guidelines"></a>

## New for 2015: two formats of activities: self-guided or *lesson-plan*

Now that tens of thousands of educators have tried the Hour of Code, many classrooms are ready for more creative, less one-size-fits-all activities that teach the basics of computer science. To help teachers find inspiration, we'd like to collect and curate one-hour "Teacher-Led" lesson and activity plans for Hour of Code veterans. We will continue promoting the "Self-guided" format as well.

**Submit a Teacher-Led Lesson Plan, ideally for different subject areas *(NEW)***: Do you have an engaging or unique idea for an Hour of Code lesson? Some educators may prefer to host Hour of Code activities that follow a traditional lesson format rather than a guided-puzzle/game experience. If facilitated properly, more open-ended activities can better showcase the creative nature of computer science. We would love to collect **one-hour lesson plans designed for different subject areas**. For example, a one-hour lesson plan for teaching code in a geometry class. Or a mad-lib exercise for English class. Or a creative quiz-creation activity for history class. This can help recruit teachers in other subject areas to guide an Hour of Code activity that is unique to their field, while demonstrating how CS can influence and enhance many different subject areas.

You can start with this [empty template](https://docs.google.com/document/d/1zyD4H6qs7K67lUN2lVX0ewd8CgMyknD2N893EKsLWTg/pub) for your lesson plan.

Examples:

  * [Mirror Images (an activity for an art teacher)](https://csedweek.org/csteacher/mirrorimages.pdf)
  * [An arduino activity for a physics teacher](https://csedweek.org/csteacher/arduino.pdf)
  * [A history of technology activity for a history teacher](https://csedweek.org/csteacher/besttechnology.pdf)

[<button>How can I submit my own lesson plan?</button>](#submit)

  
  
**Student-led (Self-Guided) Format**: The original Hour of Code was built mostly on the success of self-guided tutorials or lessons, optionally facilitated by the teacher. There are plenty of existing options, but if you want to create a new one, these activities should be designed so they can be fun for a student working alone, or in a classroom whose teacher has minimal prep or CS background. They should provide directions for students as opposed to an open-ended hour-long challenge. Idealmente, le istruzioni e le esercitazioni dovrebbero essere integrati direttamente nella piattaforma di programmazione, per evitare il continuo cambio di scheda del browser o di finestra dal tutorial alla piattaforma di programmazione.

Note: On student-facing pages we'll list teacher-led activities *below* the self-guided ones, but we'll specifically call them out on pages or emails meant for educators.

## Linee guida generali per la creazione di un'attività per l'Ora del Codice

The goal of an Hour of Code is to give beginners an accessible first taste of computer science or programming (not HTML). The tone should be that:

  * Computer science is not just for geniuses, regardless of age, gender, race. Anybody *can* learn!
  * L'informatica si collega a un'ampia gamma di campi e di interessi. Tutti *dovrebbero* imparare!
  * Incoraggia gli studenti a creare qualcosa che possono condividere con gli amici e online.

**Technical requirements**: Because of the wide variety of school and classroom technology setups, the best activities are Web-based or smartphone-friendly, or otherwise unplugged-style activities that teach computer science concepts without the use of a computer (see <http://csunplugged.com/>). Activities that require an app-install, desktop app, or game-console experiences are ok but not ideal.

[**Torna all'inizio**](#top)

<a id="inclusion"></a>

## Come saranno valutati i tutorial per poter essere inclusi

Un comitato di docenti di informatica classificherà i tutorial proposti sulla base di misure sia qualitative che quantitative, tra cui i risultati ottenuti da indagini condotte su un ampio insieme di educatori.

**I tutorial compariranno più in alto nell'elenco se sono:**

  * di alta qualità
  * progettati per neofiti - sia studenti che insegnanti
  * progettati come un'attività di durata pari a circa 1 ora
  * non richiedono autenticazione
  * non richiedono nessun pagamento
  * non richiedono alcuna installazione
  * funzionano su più piattaforme SO/dispositivo, inclusi i dispositivi mobili e i tablet
  * funzionano in più lingue
  * promuovono l'apprendimento di tutti i gruppi demografici (specialmente delle minoranze)
  * non sono focalizzati soltanto sul web design e sull'uso dell'HTML puro + CSS - (l'informatica, il nostro obiettivo, non è solo la scrittura di HTML)

**I tutorial compariranno più in basso nell'elenco se sono:**

  * di qualità inferiore
  * riferiti a livelli di insegnamento più avanzati (non per principianti)
  * riferiti ad un numero limitato di piattaforme SO/dispositivo supportate - per le piattaforme Web si dovrebbe mirare a supportare almeno tutti i seguenti browser: IE dalla versione 9 e succesive, le ultime versioni di Chrome, Firefox e Safari
  * funzionano solo in inglese
  * rafforzarano stereotipi che ostacolano la partecipazione degli studenti delle minoranze
  * servono come propaganda per una piattaforma di apprendimento a pagamento

**I tutorial NON compariranno nell'elenco se:**

  * non sono progettati per essere svolti in un'ora (approssimativamente)
  * richiedono una registrazione 
  * sono attività a pagamento
  * richiedono l'installazione (ad eccezione delle app per mobile)
  * si concentrano solo sul web design basato su HTML + CSS
  * vengono inviati dopo il termine di presentazione, o con informazioni incomplete (vedi sotto)

**If your tutorial is student-led** Student-led tutorials need to be designed to be self-directed, not to require significant CS instruction or prep from teachers

In definitiva, l'obiettivo della campagna condotta dall'Ora del Codice è quello di allargare il coinvolgimento di studenti e insegnanti nell'informatica e di contribuire a mostrare che l'informatica è accessibile a tutti e "più facile di quanto si pensi". Per molti versi questo obiettivo è più facile da raggiungere dando agli studenti e agli insegnanti meno scelte e soprattutto più semplici, focalizzandosi sulle opzioni di maggiore qualità per quegli utenti che si affacciano per la prima volta sul mondo dell'informatica. Si noti inoltre che le campagne de "L'Ora del Codice" 2013 e 2014 sono state un successo fantastico con oltre 120mila persone servite, e risposte positive quasi unanimi al sondaggio da parte di studenti e insegnanti partecipanti. Come risultato, l'elenco attuale dei tutorial de "L'Ora del Codice" è già sen'zaltro buono, e la ragione principale per aggiungere nuovi tutorial all'elenco non è tanto quello di ampliarne la scelta, quanto quella di aumentarne la qualità (e l'immediatezza) per gli studenti, o di aumentare le possibilità per chi non parla l'Inglese data la natura globale della campagna 2015.

[**Torna all'inizio**](#top)

<a id="submit"></a>

## How to submit (Due 10/15/2015)

Visit the [Hour of Code™ Activity Submission page](https://goo.gl/kNrV3l) and follow the steps to submit your tutorial.

**Cosa ti serve:**

  * Il tuo nome e un logo (jpg, png, ecc.)
  * L'URL di uno screenshot o di un'immagine per pubblicizzare l'attività dell'OdC. Immagini e screenshot dovrebbero misurare esattamente 446 x 335 pixel. Se non viene fornita un'immagine appropriata potremo decidere di usare un nostro screenshot del tuo tutorial OPPURE potremmo scegliere di non includerlo del tutto in elenco.
  * URL di collegamento al logo
  * Nome dell'attività
  * URL di collegamento all'attività
  * URL di collegamento alle note dell'insegnante (opzionale, vedi dettagli sotto)
  * Descrizione dell'attività (sia in visualizzazione desktop che mobile) 
      * **Massima lunghezza (in caratteri) per la descrizione della visualizzazione su desktop:** 384
      * **Massima lunghezza (in caratteri) per la descrizione della visualizzazione su mobile:** 74
      * Si prega di specificare nella descrizione dell'attività se è principalmente autoesplicativa o se è principalmente necessaria la guida di un insegnante. Inoltre, alcune scuole sono interessate a sapere se le attività proposte per l'Ora del Codice rispecchiano gli standard "Common Core" o "Next Generation Science". Se l'attività aderisce a standard specifici, considera di includere queste informazioni.
  * Un elenco delle piattaforme compatibili o sulle quali l'attività è stata testata: 
      * Basate su Web: specificare le piattaforme testate 
          * SO - se Mac o Windows, specificando le versioni supportate
          * Browser - IE8, IE9, IE10, Firefox, Chrome, Safari
          * iOS Safari su dispositivo mobile (ottimizzata per il mobile)
          * Android Chrome (ottimizzata per il mobile)
      * Non basate su web: specificare la piattaforma per il codice nativo (Mac, Win, iOS, Android, xBox, altro)
      * Non necessita di PC
  * Un elenco delle lingue supportate e del formato appropriato: 
      * I tutorial dovrebbero specificare quali lingue sono supportate indicando gli appropriati codici standard di due lettere, ad esempio en - inglese; ja - giapponese
      * Se è necessario essere ancora più specifici, usando dei trattini, ad esempio fr-be - francese (Belgio) o fr-ca - francese (Canada)
      * ***Nota: Il rilevamento della lingua è compito di chi fornisce il tutorial, noi ci limiteremo a reindirizzare tutti gli utenti al singolo URL fornito.*** 
  * Se decidi di inviare un tutorial online, abbiamo bisogno di sapere se [rispetta le specifiche COPPA](http://en.wikipedia.org/wiki/Children's_Online_Privacy_Protection_Act) oppure no.
  * Livello/i consigliato/i per gli utenti finali. Si può fare riferimento agli [Standard K-12 della Science Teachers' Association](http://csta.acm.org/Curriculum/sub/K12Standards.html) per indicare il livello appropriato per i concetti di informatica presenti nell'attività. Esempi di livelli includono: 
      * Scuola elementare: livello K-2 (seconda elementare) o livello 3-5 (dalla 3° alla 5° elementare)
      * Scuola media: livello 6-8 (classi dalla 1° alla 3° media)
      * Scuole superiori: livello 9-12 (classi dalla 1° alla 5° superiore)
      * Tutte le età
  * Si prega di includere anche il livello di conoscenze consigliate di informatica all'interno grado: Principiante, Intermedio o Avanzato. Il sito Hour of Code metterà maggiormente in evidenza le attività per principianti. Se desideri preparare attività per "L'Ora del Codice" di livello Intermedio o Avanzato, specifica le conoscenze preliminari necessarie nella descrizione della tua attività.
  * Requisiti tecnici: 
      * Al fine di monitorare con maggiore precisione la partecipazione vogliamo che tutti i tutorial dei nostri partner includano un'immagine di 1 pixel, usata per scopi di tracciamento, nella prima e nell'ultima pagina del loro tutorial. Inserisci l'immagine iniziale di 1 pixel nella prima pagina e l'immagine finale di 1 pixel nell'ultima pagina. Non collocare i pixel nelle pagine intermedie). Per maggiori dettagli leggi la sezione sui Pixel di Tracciamento. 
      * Dopo aver completato la tua attività, gli utenti devono essere reindirizzati a [<%= resolve_url('code.org/api/hour/finish') %>](%= resolve_url('https://code.org/api/hour/finish') %) where they will be able to: 
          * Condividi sui social network la notizia che hanno completato L'Ora del Codice
          * Ricevere un certificato che attesti che hanno completato l'Ora del Codice
          * Vedere classifiche sui paesi/città che hanno avuto il maggior numero di partecipazioni alle attività dell'Ora del Codice
          * For users who spend an hour on your activity and don’t complete it, please include a button on your activity that says “I’m finished with my Hour of Code” which links back to [<%= resolve_url('code.org/api/hour/finish') %>](%= resolve_url('https://code.org/api/hour/finish') %) as well. 
  * *(Opzionale)* Svolgeremo un follow-up inviando un link ad un sondaggio/modulo online, e chiederemo un feed-back dei seguenti parametri di attività per la settimana dal 7 Dicembre, ore 00:01, al 13 Dicembre, ore 23:59) 
      * Per attività online (soprattutto app per smartphone/tablet): 
          * Numero di utenti
          * Quanti hanno completato l'attività
          * Tempo medio speso per svolgere il compito
          * Numero totale righe di codice scritte da tutti gli utenti
          * Quanti hanno proseguito svolgendo ulteriori attività (misurato come il numero di utenti che dopo aver terminato l'attività hanno iniziato attività aggiuntive sul tuo sito)
      * Per attività offline 
          * Numero di scaricamenti della versione cartacea dell'attività (se applicabile)

[**Torna all'inizio**](#top)

<a id="design"></a>

## Suggerimenti per progettare la tua attività

E' possibile includere il logo di CSEdWeek ([piccolo](https://www.dropbox.com/s/ojlltuegr7ruvx1/csedweek-logo-final-small.jpg) o [grande](https://www.dropbox.com/s/yolheibpxapzpp1/csedweek-logo-final-big.png)) o il logo de [L'Ora del Codice](https://www.dropbox.com/work/Marketing/HOC2014/Logos%202014/HOC%20Logos) nel proprio tutorial, ma questo non è obbligatorio. Se si utilizza il logo de "L'Ora del Codice", vedere le linee guida del marchio qui sotto. In nessun caso il nome e il logo di Code.org possono essere utilizzati. Entrambi sono marchi registrati, e non possono essere co-utilizzati con il marchio di un partner terzo senza espressa autorizzazione scritta.

**Assicurati che lo studente medio possa completare l'attività comodamente in un'ora.** Prendi in considerazione la possibilità di aggiungere alla fine della tua attività un'attività senza una durata temporale prefissata, per quegli studenti che procedono più rapidamente attraverso la tua lezione. Ricorda che la maggior parte dei bambini saranno principianti assoluti in informatica e programmazione.

**Includere le note per l'insegnante.** La maggior parte delle attività dovrebbe essere autogestita dagli studenti, ma se un'attività deve essere guidata o gestita da un insegnante ti preghiamo di includere delle indicazioni chiare e semplici per l'insegnante, in forma di note disponibili ad un URL separato da inviare unitamente alla tua attività. Non sono solo gli studenti ad essere principianti, lo sono anche alcuni degli insegnanti. Includere informazioni quali:

  * Il nostro tutorial funziona meglio sulle seguenti piattaforme e browser
  * Funziona su smartphone? Su tablet?
  * Si consiglia la programmazione in coppia? 
  * Considerazioni per l'uso in aula? Ad esempio, se l'attività include dei video, consigliare agli insegnanti di mostrare i video proiettandoli su uno schermo, in modo da poterli vedere tutti insieme

**Aggiungi un feedback alla fine dell'attività.** (Per esempio: "Hai completato 10 livelli e hai imparato cosa sono i cicli! Ottimo lavoro!")

**Incoraggiare gli studenti a postare quanto fatto sui social media (se del caso) quando hanno finito.** Ad esempio "ho fatto un'Ora di Codice con ________ E tu? #HourOfCode" oppure "Ho fatto un #HourofCode come parte della #CSEdWeek. E tu? @Scratch." Utilizzare l'hashtag **#HourOfCode** (con lettere H, O e C maiuscole)

**Crea la tua attività in Spagnolo o altre lingue oltre che in Inglese.**

**Spiega o collega l'attività a un contesto sociale significativo.** La programmazione dei computer diventa un superpotere quando gli studenti vedono come può cambiare il mondo in meglio!

**Non richiedere l'iscrizione o il pagamento prima che gli studenti possono provare il tuo tutorial.** Tutorial che richiedono un'iscrizione o il pagamento non verranno inseriti nell'elenco

**Assicurati che il tuo tutorial possa essere utilizzato in un paradigma di [Pair Programming](http://www.ncwit.org/resources/pair-programming-box-power-collaborative-learning)(programmazione in coppia).** Le tre regole del Pair Programming in un ambiente scolastico sono:

  * Il "conducente" controlla il mouse e la tastiera.
  * Il "navigatore" fa proposte, sottolinea gli errori e pone delle domande. 
  * Gli studenti devono scambiarsi i ruoli almeno due volte durante una sessione.

Vantaggi della programmazione in coppia:

  * Gli studenti possono aiutarsi reciprocamente anziché fare affidamento sull'insegnante
  * Mostra che la programmazione di computer non è un'attività solitaria, ma è un'attività che riguarda l'interazione sociale
  * Non tutte le aule o laboratori hanno abbastanza computer per un'esperienza 1:1

[**Torna all'inizio**](#top)

<a id="tm"></a>

## Linee guida sui marchi

Dopo il successo della campagna 2013, abbiamo preso delle misure per assicurarci di istituire "L'Ora del Codice" come un movimento che si possa ripetere ogni anno con maggiore fedeltà e senza confusione.

Come parte di cioè è importante la protezione del marchio "Hour of Code" per evitare confusione. Molti dei partner che hanno sviluppato dei tutorial hanno usato "Hour of Code" sui loro siti web. Non vogliamo impedire questo uso, ma vogliamo verificare che esso rispetti alcuni vincoli:

  1. Qualsiasi riferimento a "Hour of Code" deve essere fatto in modo che non suggerisca che sia un tuo marchio, ma piuttosto si riferisca all'Ora del Codice come un movimento dal basso. Un esempio di uso corretto: "Partecipa a "L'Ora del Codice™" sul sito ACMECorp.com". Un esempio di uso sbagliato: "Prova l'Ora del Codice di ACME Corp"
  2. Utilizzare un apice "TM" nei posti più importanti in cui menzioni l'"Ora del Codice", sia sul tuo sito web che nelle descrizioni delle app
  3. Includi una nota nella pagina (o nel piè di pagina), inclusi collegamenti ai siti web CSEdWeek e Code.org, che dica quanto segue:
    
    *"L'Ora del Codice™" è un'iniziativa nazionale della Computer Science Education Week[csedweek.org] e di Code.org [code.org] per introdurre milioni di studenti ad un'ora di informatica e di programmazione dei computer*

  4. Non è concesso alcun uso di "Hour of Code" nei nomi delle app

[**Torna all'inizio**](#top)

<a id="pixel"></a>

## Pixel di tracciamento

Al fine di monitorare più accuratamente la partecipazione, chiediamo a tutti i nostri partner che predispongono dei tutorial di terze parti di includere le immagini di tracciamento da 1 pixel nella prima e nell'ultima pagina dei loro tutorial per l'Ora del Codice (un'immagine di 1 pixel iniziale nella prima pagina e un'immagine di 1 pixel finale nell'ultima pagina. Nessuna immagine nelle pagine intermedie).

Questo ci permetterà di conteggiare gli utenti che hai personalmente reclutato per visitare il tuo sito web per completare la loro Ora del Codice, o gli utenti che visitano la pagina quando un insegnante mostra il tuo URL direttamente sulla sua lavagna. Questo permetterà di realizzare conteggi più accurati dei partecipanti al tuo tutorial, cosa che ti aiuterà ad attirare gli utenti. Se si integra il pixel anche alla fine ci permetterà di misurare il tasso di completamento dei tutorial.

Se il tuo tutorial viene approvato e incluso nell'elenco finale dei tutorial, Code.org ti fornirà uno specifico pixel di tracciamento che potrai integrare nel tuo tutorial. Guarda l'esempio riportato qui sotto.

Nota: non è importante farlo per le applicazioni installabili (app iOS/Android, o app da installare sul PC)

Esempio di pixel di tracciamento per AppInventor:

IMG SRC = <http://code.org/api/hour/begin_appinventor.png>   
IMG SRC = <http://code.org/api/hour/finish_appinventor.png>

[**Torna all'inizio**](#top)

<a id="promote"></a>

## Come promuovere il tuo tutorial, la CSEdWeek e l'Ora del Codice

Chiediamo a tutti di promuovere i propri tutorial di 1 ora ai propri utenti. Ti preghiamo di indirizzarli alla ***tua propria*** pagina de "L'Ora del Codice". I tuoi utenti saranno molto più propensi ad iniziare l'attività ricevendo da te una mail riguardante i tuoi tutorial. Utilizza la campagna internazionale Ora del Codice per la Computer Science Education Week come una scusa per incoraggiare gli utenti a invitare altri a partecipare, aiutaci a raggiungere i 100 milioni di partecipanti totali.

  * Presenta "L'Ora del Codice" e la CSEdWeek sul tuo sito Web.   
    Ad es.: <http://www.tynker.com/hour-of-code>
  * Promuovi l'Ora del Codice utilizzando i sociali network, i media tradizionali, le mailing list, ecc, usando l'hashtag **#HourOfCode** (con le lettere H, O e C maiuscole)
  * Organizza un evento locale o chiedi ai tuoi dipendenti di organizzare un evento nelle scuole locali o nelle associazioni locali.
  * Consulta il nostro kit di risorse per ulteriori informazioni (in preparazione).

[**Torna all'inizio**](#top)

<a id="disabilities"></a>

## Una nota speciale per gli studenti con disabilità

Se crei un tutorial che è progettato per gli ipovedenti, ci piacerebbe metterlo in evidenzia per gli utenti dotati di screenreader. Non abbiamo ancora ricevuto un tutorial di questo tipo e ci piacerebbe molto includerne almeno uno come opzione per questi studenti.

[**Torna all'inizio**](#top)

<%= view :signup_button %>