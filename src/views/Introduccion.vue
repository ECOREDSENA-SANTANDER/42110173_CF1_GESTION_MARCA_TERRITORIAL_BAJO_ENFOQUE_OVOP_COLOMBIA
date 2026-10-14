<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-5.align-items-end
      .col-sm-12.col-lg-8
        p.mb-3 La marca territorial se construye a partir de los elementos que hacen único a un territorio: su identidad, cultura, recursos, saberes, actividades productivas y, especialmente, las personas y organizaciones que participan en su desarrollo. Desde el enfoque OVOP Colombia, reconocer estas características permite comprender el territorio desde sus propias capacidades y potencialidades, valorando los tesoros locales y los principios del desarrollo endógeno como elementos fundamentales para fortalecer la identidad y generar oportunidades de desarrollo.
        .bg-color-1.p-4
          p.mb-0 En este componente formativo se abordarán los fundamentos de la marca territorial, la identidad y los tesoros locales, así como el papel de los actores y las características del mercado vinculadas con el territorio. A través de herramientas de investigación y diagnóstico participativo, se recopilará y analizará información que permita establecer el estado actual de la marca territorial, reconocer fortalezas, necesidades y oportunidades, y generar insumos para orientar posteriormente su fortalecimiento desde una perspectiva participativa, sostenible y coherente con el enfoque OVOP Colombia.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/1.png')
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
