<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Identidad territorial
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.1 Tesoros locales y marca territorial
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.2 Ejemplos de tesoros locales
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.3 Del tesoro local al producto estrella y su integración en la marca territorial
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.4 Del producto territorial al producto estrella
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.5 Actores de la marca territorial
      Separador
      #t_2_6.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.6 Importancia estratégica del mapeo de actores para la marca territorial
      
        

  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
