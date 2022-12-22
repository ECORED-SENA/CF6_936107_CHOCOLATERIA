<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.tarjeta--blanca-t4.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Finalización del proceso de elaboración de la cobertura de chocolate

    .d-flex.flex-wrap.align-items-center.mb-5
      .col-xl-7.pe-xl-4.order-2.order-xl-1
        p Cuando la masa sale del proceso de conchado tiene una apariencia a la que usualmente el consumidor le da uso en bebidas y alimentos sólidos, pero la verdad es que aún no está finalizada, pues le faltan varias etapas para darle una correcta estructura. En este momento los cristales en la manteca de cacao tienden a ser inestables y se necesita de ciertos procedimientos realizados en la fase de atemperado para obtener el resultado deseado, llevar la masa al moldeado y finalmente al envasado o empacado.
        .tarjeta.position-relative.p-4.px-xl-5(style="background-color: #FFF6DF; box-shadow: 0 3px 6px #00000020;")
          p.mb-0.fw-bold Es muy importante tener en cuenta que si el objetivo final de la cobertura es especial en líquido, esta solo pasaría por la fase de atemperado y luego por el envasado, y no se llevaría a moldeo.
      img.col-xl-5.mb-4.mb-xl-0.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema4/img-1.png" style="max-width: 505px;")
    
    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_4_1 4.1  Atemperado
    
    .d-flex.flex-wrap.align-items-center.mb-5.p-4.p-xl-0.position-relative
      img.mx-auto.col-xl-5.mb-4.mb-xl-0.position-relative(src="@/assets/curso/temas/tema4/img-2.png" style="max-width: 505px; z-index: 1;")
      .col-xl-7.ps-xl-4.bg-text-t4
        p.mb-0.p-4 En este proceso se busca solidificar la grasa de una manera más adecuada a través de la precristalización de una pequeña cantidad de la grasa del chocolate que podría estar entre el 1 y el 3 %, esto es lo que permite que se obtengan las características brillantes, finas y suaves de la cobertura.
          br
          br
          |Generalmente cuando el chocolate sale del conchado presenta una temperatura por encima de los 40ºC y si a este no se le aplica la debida agitación durante cierto tiempo, se puede correr el riesgo de que la grasa suba y deje en el fondo del tanque un chocolate espeso con un cambio en su sabor, por ello se debe trabajar sobre la curva de temperatura para garantizar el color brillante y uniforme; esta puede variar entre los diferentes tipos de chocolate deseados, tal como lo muestra la siguiente tabla:
      img(src="@/assets/curso/temas/tema3/img-18.svg" style="max-width: 110px; z-index: 1; position: absolute; bottom: -50px; right: 0;")

    .position-relative
      .tabla-a.color-secundario.col-12.col-xl-10.mx-auto.mb-5(style="overflow: auto;")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Curva de temperatura en el atemperado
        table(style="min-width: 500px")
          thead
            tr(style="background-color: #FCC02D;")
              th(style="border: none;") Curva de temperatura
              th(style="border: none;") Chocolate negro
              th(style="border: none;") Chocolate con leche
              th(style="border: none;") Chocolate blanco
          tbody.text-center(style="background-color: white;")
            tr
              td.py-3(style="border: none; border-right: 1px solid #AFAFAF") Curva 1
              td(style="border: none; border-right: 1px solid #AFAFAF") 50°C - 55°C
              td(style="border: none; border-right: 1px solid #AFAFAF") 45°C - 50°C
              td(style="border: none;") 45°C - 50ºC
            tr(style="background-color: #FFF6DF;")
              td.py-3(style="border: none; border-right: 1px solid #AFAFAF") Curva 2
              td(style="border: none; border-right: 1px solid #AFAFAF") 28°C - 29°C
              td(style="border: none; border-right: 1px solid #AFAFAF") 27°C - 28°C
              td(style="border: none;") 26°C - 27°C
            tr
              td.py-3(style="border: none; border-right: 1px solid #AFAFAF") Curva 3
              td(style="border: none; border-right: 1px solid #AFAFAF") 31°C - 32°C
              td(style="border: none; border-right: 1px solid #AFAFAF") 29°C - 30°C
              td(style="border: none;") 28°C - 29°C
        p.mb-0.px-4.py-2(style="background-color: #E8E8E8") #[b Nota.] Adaptado de Voy a ser cocinero (2017).
    
    .tarjeta.d-flex.flex-wrap.align-items-center.col-xl-10.mx-auto.mb-5.p-4.position-relative(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/bg-t4.svg')})`}"
        style="z-index: 1;overflow: hidden; box-shadow: 0px 8px 21px #00000020; background-repeat: no-repeat; background-size: cover"
      )
        img.d-flex.mx-auto.col-xl-4.mb-4.my-xl-auto(src="@/assets/curso/temas/tema4/img-3.png" style="max-width: 300px")
        p.p-4.mb-0.col-xl-8 Con el atemperado se logra dar al producto acabado el proceso correcto del chocolate para el cubrimiento de dulces, tortas, galletas, helados, etc.
    
    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_4_2 4.2  Moldeado y empacado
    
    .d-flex.flex-wrap.align-items-center.mb-5
      p.col-xl-7.pe-xl-4.order-2.order-xl-1 Consiste en verter la masa líquida en moldes, los cuales pasan por un estado de baja temperatura donde el chocolate se endurece adquiriendo la forma definitiva con la que será vendido en cuanto sea empacado (recordar que si se desea como producto final la cobertura en líquido, no pasa por esta fase).
        br
        br
        |Cuando la masa se enfría los cristales de grasa se cristalizan y se obtienen las tabletas sólidas; si por el contrario se desean figuras de chocolate en tres dimensiones o trufas se utilizan moldes especiales, que permiten hacer movimientos de traslación y rotación, sin afectar la forma; finalizado este proceso se procede con el envasado individual y su posterior transporte del producto en cajas y palés.
      img.col-xl-5.mb-4.mb-xl-0.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema4/img-4.png" style="max-width: 505px;")

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

<style lang="sass">
@media (max-width: 1400px)
  .tarjeta--blanca-t4
    &::after
      top: 9.2rem !important
@media (max-width: 991px)
  .tarjeta--blanca-t4
    &::after
      top: 11.6rem !important
@media (max-width: 768px)
  .tarjeta--blanca-t4
    &::after
      top: 10rem !important
@media (max-width: 477px)
  .tarjeta--blanca-t4
    &::after
      top: 12.4rem !important
@media (max-width: 461px)
  .tarjeta--blanca-t4
    &::after
      top: 15rem !important
@media (max-width: 340px)
  .tarjeta--blanca-t4
    &::after
      top: 19.6rem !important
</style>
