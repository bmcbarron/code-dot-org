---

title: <%= hoc_s(:title_tutorial_guidelines) %>
layout: wide

---

<%= view :signup_button %>

# Tutorial guidelines for the Hour of Code™ and Computer Science Education Week

Code.org will host a variety of Hour of Code™ activities on the Code.org, Hour of Code, and CSEdWeek website(s). The current list is at [<%= resolve_url('code.org/learn') %>](<%= resolve_url('https://code.org/learn') %>).

Vi ønsker å arrangere flere forskjellige engasjerende muligheter, men hovedmålet er å gi studenter og lærere som er nye til datavitenskap en best mulig opplevelese. Vennligst bruk dette dokumentet for å veilede deg i utviklingen av din aktivitet, hvis målgruppe er brukere som har ingen bakgrunn i koden, programmering eller datavitenskap.

  


**After reading the guidelines, you can submit your tutorial through our [Hour of Code™ Activity Submission page](https://goo.gl/kNrV3l).**

**NEW:** Unlike past years, we plan to introduce a new format for "teacher-led" Hour of Code activities. These will be listed below the self-guided activities in student-facing pages and emails. Details below.

<a id="top"></a>

## Innhold:

  * [General guidelines for creating an Hour of Code™ activity](#guidelines)
  * [Hvordan en gjennomgang vil bli vurdert for inkludering](#inclusion)
  * [How to submit (Due 10/15/2015)](#submit)
  * [Forslag til utforming av din aktivitet](#design)
  * [Retningslinjer for varemerker](#tm)
  * [Sporingspiksel](#pixel)
  * [Markedsføre dine gjennomganger, IT-utdanningsuka og Kodetimen](#promote)
  * [Litt informasjon for elever med funksjonshemminger](#disabilities)

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

  
  
**Student-led (Self-Guided) Format**: The original Hour of Code was built mostly on the success of self-guided tutorials or lessons, optionally facilitated by the teacher. There are plenty of existing options, but if you want to create a new one, these activities should be designed so they can be fun for a student working alone, or in a classroom whose teacher has minimal prep or CS background. They should provide directions for students as opposed to an open-ended hour-long challenge. Instrukser og gjennomgang bør ideelt sett være integrert direkte i programmeringsmiljøet slik at man unngår å måtte bytte faner eller vinduer mellom gjennomgangen og programmeringsmiljøet.

Note: On student-facing pages we'll list teacher-led activities *below* the self-guided ones, but we'll specifically call them out on pages or emails meant for educators.

## Generelle retningslinjer for å opprette en Kodetime-aktivitet

The goal of an Hour of Code is to give beginners an accessible first taste of computer science or programming (not HTML). The tone should be that:

  * Computer science is not just for geniuses, regardless of age, gender, race. Anybody *can* learn!
  * Computer science is connected to a wide variety of fields and interests. Everybody *should* learn!
  * Oppmuntre elevene til å skape noe som kan deles med venner/online.

**Technical requirements**: Because of the wide variety of school and classroom technology setups, the best activities are Web-based or smartphone-friendly, or otherwise unplugged-style activities that teach computer science concepts without the use of a computer (see <http://csunplugged.com/>). Activities that require an app-install, desktop app, or game-console experiences are ok but not ideal.

[**Tilbake til toppen**](#top)

<a id="inclusion"></a>

## Hvordan en gjennomgang vil bli vurdert for inkludering

En komite av datavitenskapslærere vil rangere innleveringene basert på kvalitative og kvalitative kriterier, inkludert resultater fra spørreundersøkelser utdelt til en videre gruppe av lærere.

**Veiledninger vil bli satt høyere hvis de har:**

  * har høy kvalitet
  * designed for beginners - among students AND teachers
  * er utformet som en ~ 1 time aktivitet
  * require no sign up
  * require no payment
  * require no installation
  * virker på tvers av operativsystemer/plattformer, inkludert mobil og nettbrett
  * virker på tvers av språk
  * promote learning by all demographic groups (esp. under-represented groups)
  * ikke bare fokuserer på HTML+CSS web design (målet vårt er IT, ikke bare HTML-koding)

**Veiledninger vil bli satt lavere hvis de har:**

  * har lavere kvalitet
  * mer avansert læringsnivå (ikke for nybegynnere)
  * har et begrenset antall støttede operativsystemer/plattformer - for nettbaserte plattformer bør følgende støttes: IE9+ og nyeste Chrome, Firefox og Safari
  * virker kun på engelsk
  * reinforce stereotypes that hinder participation by under-represented student groups
  * tjener som innsalg for en læringsplattform som tar betalt for undervisning

**Veiledninger vil IKKE bli vist hvis de:**

  * er ikke utformet for å være (omtrent) én times aktivitet
  * krever registrering 
  * krever betaling
  * require installation (other than mobile apps)
  * kun fokuserer på HTML+CSS webdesign
  * sendes inn etter fristen eller med ufullstendig informasjon (se nedenfor)

**If your tutorial is student-led** Student-led tutorials need to be designed to be self-directed, not to require significant CS instruction or prep from teachers

Til sist, er målet til Kodetimekampanjen å utvide deltagelsen i datavitenskap av studenter og lærere, og for å hjelpe og vise at datavitenskap er tilgjengelig for alle, og «lettere enn du tror.» På mange måter er dette målet lettere oppnådd med å gi studenter og lærere færre og lettere valg, med fokus på valgene med høy kvalitet for førstegangsbrukerene. Note also that the 2013 and 2014 Hour of Code campaigns were a fantastic success with over 120M served, with nearly unanimous positive survey responses from participating teachers and students. As a result, the existing listings are certainly good and the driving reason to add tutorials to the Hour of Code listings isn't to broaden the choices, but to continue to raise the quality (or freshness) for students, or to expand the options for non-English speakers given the global nature of the 2015 campaign.

[**Tilbake til toppen**](#top)

<a id="submit"></a>

## How to submit (Due 10/15/2015)

Visit the [Hour of Code™ Activity Submission page](https://goo.gl/kNrV3l) and follow the steps to submit your tutorial.

**Det du kommer til å trenge:**

  * Navnet ditt, logo (jpg, png etc.)
  * Webadressen til et skjermbilde eller markedsføringsbilde av Kodetime-aktiviteten. Bilder/skjermbilder bør ha eksakt 446 x 335 oppløsning. Hvis et passende bilde ikke er levert, kan vi ta eget skjermbilde av gjennomgangen eller vi kan velge ikke å liste den.
  * URL-kobling for logoen
  * Navn på aktiviteten/gjennomgangen
  * URL-kobling til aktiviteten
  * URL-kobling til kommentarer for lærer (valgfritt, se detaljer nedenfor)
  * Beskrivelse av aktiviteten (både desktop- og mobil-visning) 
      * **Maks. antall tegn desktop-visning:** 384
      * **Maks. antall tegn for mobil-visning:** 74
      * Ta med i beskrivelsen om det hovedsakelig er selvstudium eller tilrettelagt av lærer. I tillegg er noen skoler interessert i å vite om Kodetime-aktiviteter retter seg etter spesifikke standarder. Hvis aktiviteten retter seg etter spesifikke standarder bør det vurderes å inkludere denne informasjonen.
  * En liste over testede/kompatible plattformer: 
      * Web based: Which platforms have you tested 
          * OS - Mac, Windows og versjoner
          * Nettlesere - IE8, IE9, IE10, Firefox, Chrome, Safari
          * iOS mobil Safari (optimalisert for mobil)
          * Android Chrome (optimalisert for mobil)
      * Non web-based: specify platform for native code (Mac, Win, iOS, Android, xBox, other)
      * Frakoblet
  * En liste over de støttede språkene og riktig format: 
      * Opplæring bør angi hvilke språk de støtter ved hjelp av totegnskoder, f.eks en - engelsk; no - Norsk
      * Hvis du må være mer spesifikk, bruk bindestrek, f.eks. fr-be - French (Belgium) eller fr-ca - French (Canada)
      * ***Viktig: Ansvaret for språkdeteksjon ligger på den som tilbyr opplæringsmaterialet. Vi starter med å dirigere alle brukere til den ene nettsiden som er oppgitt.*** 
  * Hvis du legger ut online veiledninger, så må vi vite om den følger [retningslinjene i COPPA](http://en.wikipedia.org/wiki/Children's_Online_Privacy_Protection_Act) eller ikke.
  * Anbefalt alderstrinn for tiltenkt brukere. Du kan referere til [Computer Science Teachers' Association's K-12 standarder](http://csta.acm.org/Curriculum/sub/K12Standards.html) for hvilke konsept som passer på hvilket trinn. Eksempel hvilke trinn som kan brukes: 
      * Grunnskole: barnetrinnet 3. til 5. årstrinn
      * Grunnskole: barnetrinnet 5. til 7. årstrinn
      * Videregående skole: 16 til 19 år
      * Alle aldre
  * Ta også med hvilke forkunnskaper i data som er forutsatt på det aktuelle klassetrinnet: nybegynner, middels eller avansert. Kodetimens nettsted kommer til å gi aktivitetene for nybegynnere den mest fremtredende plassen. If you’d like to prepare Intermediate and Advanced Hour of Code™ Activities, please include the prior knowledge needed in the description of your activity.
  * Tekniske krav: 
      * For å kunne spore deltagelsen nøyaktig, skal alle tredjeparts-aktiviter ha med et 1-piksel bilde på første og siste siden av instruksjonene. Plasser et start 1-pixel-bilde på startsiden og et slutt 1-pixel-bilde på siste side. Ikke plasser noen piksler på mellomliggende sider). Se seksjonen om pixler for sporing nedenfor for mer informasjon. 
      * Når din aktivitet avsluttes, skal brukere linkes til [<%= resolve_url('code.org/api/hour/finish') %>](<%= resolve_url('https://code.org/api/hour/finish') %>) where they will be able to: 
          * Dele på sosiale medier at de fullført Kodetimen
          * Motta et sertifikat som bevis for fullført Kodetime
          * Se resultatlister over hvilek land/byer som har de høyeste tallene for deltakelse i aktiviteter i Kodetimen
          * For users who spend an hour on your activity and don’t complete it, please include a button on your activity that says “I’m finished with my Hour of Code” which links back to [<%= resolve_url('code.org/api/hour/finish') %>](<%= resolve_url('https://code.org/api/hour/finish') %>) as well. 
  * *(Valgfritt)* We will follow-up with an online survey/form link asking for a report of the following activity metrics for the week of Dec. 7, 12:01 am through Dec. 13, 11:59 pm) 
      * For aktiviteter på nettet (spesielt apper for smarttelefoner og nettbrett): 
          * Antall brukere
          * Hvor mange som fullførte aktiviteten
          * Gjennomsnittlig tid på aktiviteten
          * Antall kodelinjer skrevet av alle brukere til sammen
          * Hvor mange gikk videre (målt som alle brukere som fullfører oppgaven og går på flere oppgaver på ditt nettsted)
      * For offline aktiviteter 
          * Antall nedlastinger av aktivitet i papirversjon (hvis aktuelt)

[**Tilbake til toppen**](#top)

<a id="design"></a>

## Forslag til utforming av din aktivitet

You can include either the CSEdWeek logo ([small](https://www.dropbox.com/s/ojlltuegr7ruvx1/csedweek-logo-final-small.jpg) or [big](https://www.dropbox.com/s/yolheibpxapzpp1/csedweek-logo-final-big.png)) or the [Hour of Code logo](https://www.dropbox.com/work/Marketing/HOC2014/Logos%202014/HOC%20Logos) in your tutorial, but this is not required. If you use the Hour of Code logo, see the trademark guidelines below. Under ingen omstendigheter kan Code.org logoen og navn bli brukt. Both are trademarked, and can’t be co-mingled with a 3rd party brand name without express written permission.

**Vær sikker på at gjennomsnittseleven kan fullføre godt innenfor en time.** Vurder å legge til en aktivitet med åpen-slutt på slutten av timen for studenter som beveger seg raskere gjennom leksjonen. Husk at de fleste barn vil være helt nye til datavitenskap og programmering.

**Inkluder notater til læreren.** De fleste aktiviteter burde være student-rettet, men hvis en aktivitet er tilrettelagt eller holdt av en lærer, vær så snill å inkluder klare og enkle instruksjoner for læreren i form av lærer-notater på en separat lenke innlevert med din aktivitet. Ikke bare studentene er nybegynnere, noen av lærerene er også det. Inkluder info som:

  * Vår veiledning funker best på følgende plattformer og nettlesere
  * Does it work on smartphones? Tablets?
  * anbefaler du par-programmering? 
  * Considerations for use in a classroom? E.g. if there are videos, advise teachers to show the videos on a projected screen for the entire classroom to view together

**Inkluder tilbakemeldinger på slutten av aktiviteten.**(E.g:«Du fullførte 10 levler og lære om løkker! Godt jobba!»)

**Encourage students to post to social media (where appropriate) when they've finished.** For example “I’ve done an Hour of Code with ________ Have you? #Kodetimen» eller «Jeg har fullført #Kodetimen som en del av #CSEdWeek. Har du? @Scratch.» Bruk hashtagen **#Kodetimen**(med stor forbokstav)

**Create your activity in Spanish or in other languages besides English.** ]

**Forklar eller koble din aktivitet til en sosialt signifikant kontekst.** Programmering blir en superkraft når studenter ser hvordan det kan forandre verden til det bedre!

**Ikke krev registrering eller betaling før studentene kan prøve din veiledning.** Veiledninger som krever registrering eller betaling vil ikke bli vist

**Make sure your tutorial can be used in a [Pair Programming](http://www.ncwit.org/resources/pair-programming-box-power-collaborative-learning) paradigm.** The three rules of pair programming in a school setting are:

  * Sjåføren kontrollerer musa og tastaturet.
  * Navigatøren gir forslag, peker ut feil, og stiller spørsmål. 
  * Studentene burde bytte rolle minst to ganger per sesjon.

Fordelene med Par Programmering:

  * Studentene kan hjelpe hverandre isteden for å være avhengig av læreren
  * Vis at koding er ikke en solo-aktivitet, men en som involverer sosial interaksjon
  * Ikke alle klasserom eller labber har nok datamaskiner for en 1:1 opplevelse

[**Tilbake til toppen**](#top)

<a id="tm"></a>

## Retningslinjer for varemerker

After the success of the 2013 campaign, we took steps to make sure we set up the Hour of Code as a movement that can repeat annually with greater fidelity and without confusion.

En del av dette er å beskytte varemerket «Kodetimen» for å forhindre forvirring. Mange av våre veiledningsparntere har brukt «Kodetimen» på sine sider. Vi ønsker ikke å forhindre denne bruken, men vi ønsker å være sikker på at det passer innenfor et par rammer:

  1. En hver referanse til «Kodetimen» burde bli brukt på en slik måte at det ikke tyder på at det er ditt eget merkenavn, men heller reffererer til Kodetimen som en grasrotbevegelse. Good example: "Participate in the Hour of Code™ at ACMECorp.com". Dårlig eksempel: «Prøv Kodetimen fra ACME Corp»
  2. Bruk et «TM» hevet i de mest fremtredene plassene du nevner «Kodetimen», både på din nettside og i app beskrivelsene
  3. Inkluder språk på siden (eller som bunntekst), inkluder lenker til CSEdWeek og Code.org sidene, som sier det følgende:
    
    *“The 'Hour of Code™' is a nationwide initiative by Computer Science Education Week[csedweek.org] and Code.org[code.org] to introduce millions of students to one hour of computer science and computer programming.”*

  4. Ingen bruk av «Kodetimen» i app navn

[**Tilbake til toppen**](#top)

<a id="pixel"></a>

## Sporingspiksel

For å mer presist følge deltagelsen spørr vi hver tredjeparts veiledningspartnere å inkludere en 1-pixel sporingsbilde på første og siste siden på deres Kodetimen veiledninger (En start pixel-bilde på startsiden og et siste pixel-bilde på slutt siden. og ikke på sider i mellom).

Dette vil gjøre det mulig for oss å telle antall brukere som du har rekruttert til å besøke din side for å gjøre sin Kodetime, eller brukere som besøker når en lærer skriver din lenke på deres tavle. Det vil føre til mer nøyaktig deltagelsestall for din veiledning, som vil hjelpe deg å tiltrekke deg brukere. Hvis du integrerer pixelen på slutten vil det tillate oss å måle hvor mange som fullfører opplæringen.

Hvis din veldening er godkjent og er inkludert på den siste veiledningsiden, Code.org vil gi deg en unik sporingspixel slik at du kan inkludere det i din veiledning. Se eksemplet under.

OBS: Dette er ikke viktig for installerbare apper (iOS/Android apper, eller desktop-install apper)

Eksempel sporingspixler for AppInventor:

IMG SRC = <http://code.org/api/hour/begin_appinventor.png>   
IMG SRC = <http://code.org/api/hour/finish_appinventor.png>

[**Tilbake til toppen**](#top)

<a id="promote"></a>

## Markedsføre dine gjennomganger, IT-utdanningsuka og Kodetimen

Vi ber aller å reklamere for sine egne 1-times veiledninger til dine brukere. Please direct them to ***your*** Hour of Code page. Det er mer sannsynlig at dine brukere reagerer på en mail fra deg om din veiledning. Bruk den internasjonale Kodetimen kampanjen for Utdanningsuken for Datavitenskap som en unnskyldning til å oppfordre brukere til å invitere andre til å være med, hjelp oss å nå 100 millioner deltagere totalt.

  * Feature Hour of Code and CSEdWeek on your website. Ex: <http://www.tynker.com/hour-of-code>
  * Frem Kodetimen ved hjelp av sosiale medier, tradisjonelle medier, epostlister, etc, ved å bruke hashtaggen **#Kodetimen**(med stor forbokstav)
  * Hold et lokalt arrangement eller spør dine ansatte om å holde et arrangement på lokale skoler eller samfunnsgrupper.
  * Se våre resurser for mer informasjon (kommer snart).

[**Tilbake til toppen**](#top)

<a id="disabilities"></a>

## En spesiell beskjed til studenter med funksjonshemminger

Hvis du lager en veiledning som er skapt for personer med synsproblemer, hadde vi elsket å utheve det for seere med skjerm-lesere. Vi har enda ikke mottatt en slik veiledning, og vi vil være ivrige på å inkludere en som et valg for disse studentene.

[**Tilbake til toppen**](#top)

<%= view :signup_button %>