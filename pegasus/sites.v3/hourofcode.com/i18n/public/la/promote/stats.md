---

title: <%= hoc_s(:title_stats) %>
layout: wide
nav: promote_nav

---

<%= view :signup_button %>

# Reseñas y estadisticas útiles

## Usar esta breve reseña en boletines de noticias

### Lleva las Ciencias de Computación a tu escuela o colegio. Empiece con una Hora de Código

Las computadoras están en todas partes, pero hoy, menos escuelas enseñan ciencia de la computación que hace 10 años. Las buenas noticias son que: estamos trabajando para cambiar esto. If you heard about the [Hour of Code](<%= resolve_url('/') %>) last year, you might know it made history. In the first Hour of Code, 15 million students tried computer science. Last year, that number increased to 60 million students! The [Hour of Code](<%= resolve_url('/') %>) is a one-hour introduction to computer science, designed to demystify code and show that anybody can learn the basics. [Sign up](<%= resolve_url('/') %>) to host an Hour of Code this <%= campaign_date('full') %> during Computer Science Education Week. To add your school to the map, go to https://hourofcode.com/<%= @country %>

## Infographics

<%= view :stats_carousel %>

<%= view :signup_button %>