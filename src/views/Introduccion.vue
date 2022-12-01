<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .d-flex.flex-wrap.align-items-center.mb-5
      p.col-xl-7.order-2.order-xl-1.pe-xl-4 Las buenas prácticas de manufactura permiten garantizar las condiciones sanitarias en la preparación, manipulación, envasado, almacenamiento, transporte y distribución de los alimentos, garantizando la inocuidad del producto terminado, ofreciéndole a los consumidores productos de excelente calidad, al igual que llevar el registro, el control, la verificación y la mejora de los procesos, permitiendo la trazabilidad y la gestión de la calidad, la competitividad y la productividad. Para conocer un poco más sobre lo relacionado con la cobertura de chocolate se invita a observar le siguiente video introductorio de la temática a abordar:
      img.col-xl-5.order-1.order-xl-2(src="@/assets/curso/temas/img-2.png" style="max-width: 505px;")
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
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
