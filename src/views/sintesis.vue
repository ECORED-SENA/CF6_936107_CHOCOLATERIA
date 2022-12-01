<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.tarjeta--blanca-edit.p-4.p-md-5

    .d-flex.flex-wrap.align-items-stretch.mb-5.col-xl-10.mx-auto
      img.mb-4.mb-md-0.position-relative.py-2(src="@/assets/curso/temas/img-1.svg" style="max-width: 85px")
      p.tarjeta.col-md.mb-0.ps-md-5.bg-p Estimado aprendiz, en el siguiente recurso podrá acceder a la recapitulación de los temas abordados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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

<style lang="sass">
.tarjeta--blanca-edit::after
  display: none
.bg-p
  margin-left: -2rem
  background-color: #FFF6DF
  display: flex
  align-items: center
  @media (max-width: 768px)
    margin-left: 0
    padding: 1rem
</style>
