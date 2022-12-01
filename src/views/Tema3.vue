<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Producción de la cobertura de chocolate

    .d-flex.flex-wrap.align-items-center.mb-5.p-3(style="background-color: #FFF6DF; position: relative; z-index: 1;")
      img.col-xl-4.mb-4.mb-xl-0.mx-auto(src="@/assets/curso/temas/tema3/img-1.svg" style="max-width: 390px;")
      p.col-xl-7.me-xl-auto Como ya se ha mencionado en diferentes momentos, la cobertura es un tipo de chocolate de muy buena calidad donde su  principal uso es en la repostería y se da gracias al proceso de mezcla de varios ingredientes y cuyo resultado es recubrir bombones u otros productos de confitería, pastelería, bizcochería, heladería, entre otros. Dentro de los ingredientes principales en la producción de la cobertura están las grasas como la manteca de cacao en proporción (32-39 %) o las grasas vegetales hidrogenadas, las cuales cumplen la función de dar cuerpo y textura.
    
    p La cobertura de chocolate se caracteriza por ser un insumo importante en la industria de la repostería y la pastelería, su calidad depende de la proporción de manteca de cacao que contenga; en cuanto a los tipos que existen los siguientes son los más conocidos en la actualidad:

    .bg-left-to-right.py-5.mb-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/bg-1.png')})`}"
      style="background-repeat: no-repeat;"
    )
      TabsA.color-acento-botones.mb-5
        .tarjeta.color-acento-botones--borde.p-4(titulo="Chocolate negro")
          h4 PASO 1: The splendor
          p This is a normal paragraph 
        .tarjeta.color-acento-botones--borde.p-4(titulo="Cobertura de chocolate")
          h4 PASO 1: The splendor
          p This is a normal paragraph 
        .tarjeta.color-acento-botones--borde.p-4(titulo="Chocolate con leche")
          h4 PASO 1: The splendor
          p This is a normal paragraph 
        .tarjeta.color-acento-botones--borde.p-4(titulo="Chocolate blanco")
          h4 PASO 1: The splendor
          p This is a normal paragraph 

      .tarjeta.d-flex.flex-wrap.col-xl-10.mx-auto
        .col-lg-3.mx-auto
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema3/img-2.svg" style="max-width: 230px;")
        p.col-lg-8.mx-auto.ps-lg-4 El proceso productivo de la cobertura de chocolate inicia con la mezcla de cacao, azúcar y manteca, a partir de ese momento comienzan las etapas de fabricación, cuyo primer paso es realizar la mezcla del cacao, el azúcar y los lácteos en diferentes proporciones a través de una “concha-refinadora de chocolates” según el tipo de cobertura que se desee; luego pasa por un proceso de refinado con el que se busca eliminar las partículas arenosas que hayan quedado de la mezcla para obtener una masa homogénea y completamente suave; seguido es llevada a una conchadora buscando mejorar la textura y eliminar la viscosidad de la masa resultante y pasarla al almacenamiento en tanques para conservar su estado de fluidez y finalmente moldearla en diversos tamaños y peso, con el fin de obtener las tabletas que serán comercializadas una vez estén frías.

</template>

<script>
export default {
  name: 'Tema3',
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
