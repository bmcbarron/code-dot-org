---

title: <%= hoc_s(:title_country_resources) %>
layout: wide
nav: promote_nav

---

<%= view :signup_button %>

<% if @country == 'la' %>

# Recursos

## Vídeos <iframe width="560" height="315" src="https://www.youtube.com/embed/HrBh2165KjE" frameborder="0" allowfullscreen></iframe>
<

p>[**Por que todos precisam aprender a programar? Participe da Hora do Código na Argentina (5 min)**](https://www.youtube.com/watch?v=HrBh2165KjE)

  
 <iframe width="560" height="315" src="https://www.youtube.com/embed/_vq6Wpb-WyQ" frameborder="0" allowfullscreen></iframe>
<

p>[**La Hora del Código en Chile (2 min)**](https://www.youtube.com/watch?v=vq6Wpb-WyQ)

<% elsif @country == 'ca' %>

## Vídeos <iframe width="560" height="315" src="https://www.youtube.com/embed/k3cg1e27zQM" frameborder="0" allowfullscreen></iframe>
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

[<%= localized_image('/images/fit-500x300/corporations.png') %>](<%= localized_file('/files/corporations.pdf') %>)

## 1) Try the tutorials:

We’ll host a variety of fun, hour-long tutorials, created by a variety of partners. New tutorials are coming to kick off the Hour of Code before <%= campaign_date('full') %>.

**Todos os tutoriais da Hora do Código:**

  * Exigem um tempo mínimo de preparação dos organizadores
  * São autoexplicativos, o que permite que os alunos trabalhem em seu próprio ritmo e nível de habilidade

[![](https://uk.code.org/images/tutorials.png)](https://uk.code.org/learn)

## 2) Plan your hardware needs - computers are optional

The best Hour of Code experience will be with Internet-connected computers. But you don’t need a computer for every participant, and can even do the Hour of Code without a computer at all.

  * **Teste os tutoriais nos computadores ou dispositivos dos alunos.** Verifique se eles funcionam da maneira adequada (com som e vídeo).
  * **Visualize a página de parabenização** para saber o que os alunos veem quando terminam. 
  * **Forneça fones de ouvido para o seu grupo** ou peça aos alunos que tragam seus próprios fones, se o tutorial escolhido funcionar melhor com som.

## 3) Plan ahead based on your technology available

  * **Não tem dispositivos suficientes?** Use [programação em duplas](http://www.ncwit.org/resources/pair-programming-box-power-collaborative-learning). Quando os participantes trabalham em equipe, eles ajudam uns aos outros e dependem menos do professor.
  * **Tem baixa largura de banda?** Programe-se para mostrar os vídeos para a classe toda, assim os alunos não terão de fazer o download individualmente. Outra opção é trabalhar com os tutoriais offline.

## 4) Inspire students - show them a video

Show students an inspirational video to kick off the Hour of Code. Examples:

  * O vídeo original de lançamento da Code.org, com a participação de Bill Gates, Mark Zuckerberg e o astro da NBA, Chris Bosh (há versões de [1 minuto](https://www.youtube.com/watch?v=qYZF6oIZtfc), [5 minutos](https://www.youtube.com/watch?v=nKIu9yen5nc) e [9 minutos](https://www.youtube.com/watch?v=dU1xS07N-FA))
  * The [Hour of Code 2013 launch video](https://www.youtube.com/watch?v=FC5FbmsH4fw), or the [Hour of Code 2014 video](https://www.youtube.com/watch?v=96B5-JGA9EQ)
  * [O vídeo do presidente Obama convidando todos os alunos a aprender ciência da computação](https://www.youtube.com/watch?v=6XvmhE1J9PY)

**Get your students excited - give them a short intro**

<% else %>

# Outros recursos em breve!

<% end %>

<%= view :signup_button %>