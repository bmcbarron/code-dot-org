* * *

title: <%= hoc_s(:title_country_resources) %> layout: wide nav: promote_nav

* * *

<%= view :signup_button %>

<% if @country == 'la' %>

# Recursos

## Vídeos <iframe width="560" height="315" src="https://www.youtube.com/embed/HrBh2165KjE" frameborder="0" allowfullscreen></iframe>
<

p>[**¿Por qué todos tienen que aprender a programar? Participá de la Hora del Código en Argentina (5 min)**](https://www.youtube.com/watch?v=HrBh2165KjE)

  
 <iframe width="560" height="315" src="https://www.youtube.com/embed/_vq6Wpb-WyQ" frameborder="0" allowfullscreen></iframe>
<

p>[**La Hora del Código en Chile (2 min)**](https://www.youtube.com/watch?v=vq6Wpb-WyQ)

<% elsif @country == 'ca' %>

## Vidéos <iframe width="560" height="315" src="https://www.youtube.com/embed/k3cg1e27zQM" frameborder="0" allowfullscreen></iframe>
<

p>[**Join Nova Scotia for the Hour of Code (3 min)**](https://www.youtube.com/watch?v=k3cg1e27zQM)

<% elsif @country == 'id' %>

Di luar dari fakata bahwa Pekan Edukasi Ilmu Komputer jatuh pada 7 hingga 13 Desember 2015, kami mengetahui bahwa banyak siswa-siswi Indonesia yang menjalankan prosesi ujian. Untuk alasan ini kami memutuskan untuk menjalankan masa kampanye Hour of Code di Indonesia pada 12 hingga 20 Desember 2015. Kita tetap akan merasakan kemeriahan yang sama dan dengan tujuan yang sama namun dengan kebersamaan yang lebih besar karena akan ada lebih banyak siswa-siswi yang dapat mengikutinya.

Mari bersama kita dukung gerakan Hour of Code di Indonesia!

<% elsif @country == 'jp' %>

## Hour of Code(アワーオブコード) 2015紹介ビデオ <iframe width="560" height="315" src="https://www.youtube.com/embed/_C9odNcq3uQ" frameborder="0" allowfullscreen></iframe>
<

p>[**Hour of Code(アワーオブコード) 2015紹介ビデオ (1 min)**](https://www.youtube.com/watch?v=_C9odNcq3uQ)

[Hour of Code Lesson Guide](/files/HourofCodeLessonGuideJapan.pdf)

<% elsif @country == 'uk' %>

# How-to Guide for Organizations

## Use this handout to recruit corporations

[<%= localized_image('/images/fit-500x300/corporations.png') %>](%= localized_file('/files/corporations.pdf') %)

## 1) Try the tutorials:

We’ll host a variety of fun, hour-long tutorials, created by a variety of partners. New tutorials are coming to kick off the Hour of Code before <%= campaign_date('full') %>.

**Tous les tutoriels Une Heure de Code:**

  * Nécessitent un minimum de préparation
  * Sont guidés, permettant aux élèves de travailler à leur rythme et à leur niveau

[![](https://uk.code.org/images/tutorials.png)](https://uk.code.org/learn)

## 2) Plan your hardware needs - computers are optional

The best Hour of Code experience will be with Internet-connected computers. But you don’t need a computer for every participant, and can even do the Hour of Code without a computer at all.

  * **Testez les tutoriels sur les ordinateurs ou le matériel qu'utiliseront les élèves.** Assurez-vous que tout fonctionne correctement (avec son et vidéo).
  * **Prévisualisez la page de félicitation** pour voir ce que les élèves verront lorsqu'ils auront fini. 
  * **Fournissez des écouteurs à votre classe**, ou demandez à vos élèves de prendre les leurs, si le tutoriel que vous avez choisi fonctionne mieux avec du son.

## 3) Plan ahead based on your technology available

  * **Vous n'avez pas assez de matériel ?** Faites de la [programmation en binôme](http://www.ncwit.org/resources/pair-programming-box-power-collaborative-learning). Lorsque les participants travaillent en binôme, ils peuvent s'entraider et s'appuie moins sur l'enseignant.
  * **Vous avez une connexion internet lente ?** Prévoyez de montrer les vidéos devant toute la classe, ainsi, les élèves n'auront pas à les télécharger. Ou essayez les tutoriels sans connexion requise.

## 4) Inspire students - show them a video

Show students an inspirational video to kick off the Hour of Code. Examples:

  * La vidéo originale du lancement de Code.org, avec Bill Gates, Mark Zuckerberg et la star du NBA Chris Bosh (Il y a une version [d'1 minute](https://www.youtube.com/watch?v=qYZF6oIZtfc), [de 5 minutes](https://www.youtube.com/watch?v=nKIu9yen5nc), et [de 9 minutes](https://www.youtube.com/watch?v=dU1xS07N-FA) )
  * The [Hour of Code 2013 launch video](https://www.youtube.com/watch?v=FC5FbmsH4fw), or the [Hour of Code 2014 video](https://www.youtube.com/watch?v=96B5-JGA9EQ)
  * [Le président Obama fait appel à tous les étudiants pour apprendre l'informatique](https://www.youtube.com/watch?v=6XvmhE1J9PY)

**Get your students excited - give them a short intro**

<% else %>

# Ressources supplémentaires très bientôt disponibles !

<% end %>

<%= view :signup_button %>