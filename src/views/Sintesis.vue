<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La siguiente síntesis integra los principales conceptos abordados en el desarrollo de la actividad de aprendizaje, articulando los elementos que intervienen en la construcción y gestión de una marca territorial desde el enfoque OVOP. Su propósito es consolidar los aprendizajes relacionados con la identidad territorial, los tesoros locales, la participación de los actores, el desarrollo endógeno, el diagnóstico y el análisis de mercado, como componentes que orientan la valorización sostenible del territorio.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Síntesis conceptual de la marca territorial desde el enfoque OVOP, integrando identidad, tesoros locales, actores, diagnóstico, desarrollo endógeno y mercado.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
