<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Composición del chocolate
    
    .d-flex.flex-wrap.align-items-center.mb-5
      .col-xl-7.order-2.order-xl-1.pe-xl-4
        p El chocolate es el resultado del proceso de transformación del cacao, en este se mezclan dos componentes que resultan de sus fases, la masa y la manteca, de ahí es que nacen los diferentes tipos de chocolate que se conocen en el mercado y el comercio; su diversidad depende de los ingredientes que se le mezclan.
        p.p-4.p-xl-5.fw-bold(style="background-color: #FFF6DF;") El chocolate en la actualidad no solamente se usa para la industria alimentaria, también se ha venido utilizando en la farmacéutica y la cosmetología. 
      img.col-xl-5.mb-4.mb-xl-0.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema1/img-1.png" style="max-width: 505px;")
    
    p.mb-5 Existen diferentes tipos de chocolate con su respectivo porcentaje de composición, los más utilizados son:

    .bg-left-to-right.pt-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/bg-1.svg')})`}"
      style="background-repeat: no-repeat"
    )
      .d-flex.flex-wrap.mb-5.pt-5
        .col-12.col-md-6.col-lg-4.col-xl-3.mx-auto.d-flex.px-md-2.mb-4
          .w-100.p-4.tarjeta.tarjeta-edit
            img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/img-2.png" style="max-width: 248px;")
            h4 Chocolate negro semiamargo
            p Está compuesto por un 60 % de cacao, 30% de manteca y 10 % de azúcar.

        .col-12.col-md-6.col-lg-4.col-xl-3.mx-auto.d-flex.px-md-2.mb-4
          .w-100.p-4.tarjeta.tarjeta-edit
            img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/img-3.png" style="max-width: 248px;")
            h4 Chocolate negro amargo
            p Está compuesto por un 85 % de cacao, 10 % de manteca y 5 % de azúcar.
        
        .col-12.col-md-6.col-lg-4.col-xl-3.mx-auto.d-flex.px-md-2.mb-4
          .w-100.p-4.tarjeta.tarjeta-edit
            img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/img-4.png" style="max-width: 248px;")
            h4 Chocolate blanco
            p Está compuesto por un 25 % de manteca de cacao, 25 % de leche en polvo y 50 % de azúcar.
        
        .col-12.col-md-6.col-lg-4.col-xl-3.mx-auto.d-flex.px-md-2.mb-4
          .w-100.p-4.tarjeta.tarjeta-edit
            img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/img-5.png" style="max-width: 248px;")
            h4 Chocolate con leche
            p Está compuesto por un 10 % de licor de cacao, 25 % de manteca de cacao, 25 % de leche en polvo y 40 % de azúcar.
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img.mb-4.mb-md-0.position-relative.py-2(src="@/assets/curso/temas/img-1.svg" style="max-width: 85px")
      p.tarjeta.col-md.mb-0.ps-md-5 Durante su proceso productivo se generan pérdidas en cada fase, como también se reduce el peso de los productos que entran y salen a la siguiente etapa; en el siguiente ejercicio se mostrará el balance de masa en la producción del chocolate y #[b se tomará como base 500 kg de producto inicial], que corresponde al cacao recién cosechado:
    
    .d-flex.flex-wrap.align-items-start.mb-5.position-relative
      img.d-none.d-xl-flex(src="@/assets/curso/temas/float-bg-1.png" style="max-width: 98px; position: absolute; top: 0; left: -3rem;")
      img.d-none.d-xl-flex(src="@/assets/curso/temas/float-bg-2.png" style="max-width: 127px; position: absolute; top: 0; right: -3rem;")
      img.d-none.d-xl-flex(src="@/assets/curso/temas/float-bg-3.png" style="max-width: 85px; position: absolute; bottom: -2rem; left: -2rem;")
      AcordionA.col-12.col-xl-10.mx-auto.acordeon-edit(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
        .p-0(titulo="Tamizado")
          .d-flex.flex-wrap.align-items-center.justify-content-center.mb-5.w-100
            .col-xl-8.order-2.order-xl-1.pe-xl-4
              p.mb-0 En esta fase se busca separar la suciedad u otro material de desecho que presentan las semillas, estos en muchos casos son de diferentes tamaños, por eso se pasa la semilla por medio de un tamiz (filtro que se compone por una malla elaborada en alambre), donde los orificios deben permitir pasar la semilla y no el material que se desea retirar. Si el caso lo amerita, esta acción se puede repetir más de una vez en el proceso agroindustrial del cacao. La tabla muestra el ejemplo del balance de masa de esta fase:
            img.col-xl-4.mx-auto.mb-4.mb-xl-0.order-1.order-xl-2(src="@/assets/curso/temas/tema1/img-6.png" style="max-width: 325px;")

          .tabla-a.color-acento-contenido.col-12.col-xl-9.mx-auto.mb-5(style="overflow: auto;")
            table(style="min-width: 500px")
              thead
                tr
                  th Componente
                  th Entra (kg)
                  th Sale (kg)
                  th Pérdidas (kg)
                  th Pérdidas (%)
              tbody(style="background-color: white;")
                tr
                  td Semilla con suciedad 
                  td 500
                  td 
                  td 
                  td 
                tr
                  td Semilla humedad
                  td 
                  td 492,5
                  td 
                  td 
                tr
                  td Suciedad
                  td 
                  td 
                  td 7,5
                  td 1.5 %
          p La pérdida por separación de suciedad comparada con el total de kg que entra es pequeña, solo presenta un 1.5 % de impurezas. 

        .p-0(titulo="Tostado")
          .d-flex.flex-wrap.align-items-center.justify-content-center.mb-5.w-100
            .col-xl-8.order-2.order-xl-1.pe-xl-4
              p.mb-0 En esta fase se busca reducir la dureza de la almendra, realizando el proceso de dos formas: una es la tradicional, esta consiste en tostar la almendra con cascara en hornos a una temperatura de 120°C y la industrial que consiste en pretostar el grano, en esta a la semilla se le hace un proceso térmico previo con temperaturas inferiores a 90°C hasta lograr el desprendimiento de la cascara de la almendra, luego se tuesta el grano a temperaturas elevadas. La tabla muestra el ejemplo del balance de la masa de esta fase:
            img.col-xl-4.mx-auto.mb-4.mb-xl-0.order-1.order-xl-2(src="@/assets/curso/temas/tema1/img-13.png" style="max-width: 325px;")

          .tabla-a.color-acento-contenido.col-12.col-xl-9.mx-auto.mb-5(style="overflow: auto;")
            table(style="min-width: 500px")
              thead
                tr
                  th Componente
                  th Entra (kg)
                  th Sale (kg)
                  th Pérdidas (kg)
                  th Pérdidas (%)
              tbody(style="background-color: white;")
                tr
                  td Semilla humedad
                  td 492,5
                  td 
                  td 
                  td 
                tr
                  td Semilla tostada
                  td 
                  td 467,8
                  td 
                  td 
                tr
                  td Humedad
                  td 
                  td 
                  td 24,63
                  td 5 %
          p El grano en este proceso al presentar una pérdida por humedad del 5 %, da como resultado que el peso de la semilla tostada sea de 467,8 kg.
        
        .p-0(titulo="Descascarilladora")
          .d-flex.flex-wrap.align-items-center.justify-content-center.mb-5.w-100
            .col-xl-8.order-2.order-xl-1.pe-xl-4
              p.mb-0 En esta fase se tritura el cacao en diferentes tamaños, en ella se divide la cascara y la parte interna del fruto (#[em.fw-bold nibs]), entre más limpio sea el proceso, menos desechos se generarán, por eso se debe de garantizar que los granos salgan redondos y lisos y no lleven impurezas. Aparece el residuo sólido más importante que es reutilizado, #[em.fw-bold la cascarilla.] La tabla muestra el ejemplo del balance de la masa de esta fase:
            img.col-xl-4.mx-auto.mb-4.mb-xl-0.order-1.order-xl-2(src="@/assets/curso/temas/tema1/img-7.png" style="max-width: 325px;")

          .tabla-a.color-acento-contenido.col-12.col-xl-9.mx-auto.mb-5(style="overflow: auto;")
            table(style="min-width: 500px")
              thead
                tr
                  th Componente
                  th Entra (kg)
                  th Sale (kg)
                  th Pérdidas (kg)
                  th Pérdidas (%)
              tbody(style="background-color: white;")
                tr
                  td Semilla tostada
                  td 467,88
                  td 
                  td 
                  td 
                tr
                  td Semilla descascarillada
                  td 
                  td 350,91
                  td 
                  td 
                tr
                  td Cascarilla
                  td 
                  td 
                  td 116,97
                  td 25 %
          p En este proceso la semilla pierde en cascarilla 116,97 kg, en porcentaje de producto es del 25 %, a la fase de molienda entrarán 350,91 kg de semilla sin cascara.
        
        .p-0(titulo="Molienda ")
          .d-flex.flex-wrap.align-items-center.justify-content-center.mb-5.w-100
            .col-xl-8.order-2.order-xl-1.pe-xl-4
              p.mb-0 En la fase de molienda se busca obtener el licor del cacao, esta es la materia prima más importante en la transformación de productos de chocolatería y de las diferentes coberturas que se manejan. Este proceso se realiza a través de rodillos, molinos de masas, molinos de bola o molinos de discos hasta obtener una masa homogénea, esta después se pasa a una filtración donde se separan los sólidos de la manteca. La tabla muestra el ejemplo del balance de la masa de esta fase:
            img.col-xl-4.mx-auto.mb-4.mb-xl-0.order-1.order-xl-2(src="@/assets/curso/temas/tema1/img-8.png" style="max-width: 325px;")

          .tabla-a.color-acento-contenido.col-12.col-xl-9.mx-auto.mb-5(style="overflow: auto;")
            table(style="min-width: 500px")
              thead
                tr
                  th Componente
                  th Entra (kg)
                  th Sale (kg)
                  th Pérdidas (kg)
                  th Pérdidas (%)
              tbody(style="background-color: white;")
                tr
                  td Semilla descascarillada
                  td 350,91
                  td 
                  td 
                  td 
                tr
                  td Semilla partida
                  td 
                  td 349,68
                  td 
                  td 
                tr
                  td Pérdida en molino
                  td 
                  td 
                  td 1,23
                  td 0,35 %
          p La pérdida de producto en esta fase es baja, solo se tiene un 0,35 % de pérdida, para la fase de prensado se cuenta con 349,68 kg de semilla partida.
        
        .p-0(titulo="Prensado")
          .d-flex.flex-wrap.align-items-center.justify-content-center.mb-5.w-100
            .col-xl-8.order-2.order-xl-1.pe-xl-4
              p.mb-0 En esta fase se le aplica presión a la masa por medio de una prensa, con esta máquina se busca comprimir este componente buscando extraer el mayor porcentaje de humedad, con esto se garantizará el cumplimiento de los criterios de calidad del producto final, cabe aclarar que esta acción se realiza a temperaturas elevadas. La tabla muestra el ejemplo del balance de la masa de esta fase:
            img.col-xl-4.mx-auto.mb-4.mb-xl-0.order-1.order-xl-2(src="@/assets/curso/temas/tema1/img-9.png" style="max-width: 325px;")

          .tabla-a.color-acento-contenido.col-12.col-xl-9.mx-auto.mb-5(style="overflow: auto;")
            table(style="min-width: 500px")
              thead
                tr
                  th Componente
                  th Entra (kg)
                  th Sale (kg)
                  th Pérdidas (kg)
                  th Pérdidas (%)
              tbody(style="background-color: white;")
                tr
                  td Semilla partida
                  td 349,68
                  td 
                  td 
                  td 
                tr
                  td Licor de cacao
                  td 
                  td 239.37
                  td 
                  td 
                tr
                  td Manteca de cacao
                  td 
                  td 102,59
                  td 
                  td 
                tr
                  td Pérdida en prensado
                  td 
                  td 
                  td 7,69
                  td 2,2 %
          p En esta fase se produce 239,37 kg de licor de cacao y 102,59 de manteca de cacao, recordar que al iniciar esta fase se contaba con 349,68 kg de semilla partida, por ende, sus pérdidas serían solo del 2,2 %.
        
        .p-0(titulo="Mezclado")
          .d-flex.flex-wrap.align-items-center.justify-content-center.mb-5.w-100
            .col-xl-8.order-2.order-xl-1.pe-xl-4
              p.mb-0 En esta fase lo que se busca es unificar por medio de un mezclador industrial diferentes ingredientes en el proceso productivo, en este caso, si se desea obtener chocolate, los componentes que se mezclan son manteca de cacao, azúcar y leche en polvo. La máquina que se usa en esta fase cuenta con un agitador que es el encargado de combinar todos los ingredientes. La tabla muestra el ejemplo del balance de la masa de esta fase:
            img.col-xl-4.mx-auto.mb-4.mb-xl-0.order-1.order-xl-2(src="@/assets/curso/temas/tema1/img-10.png" style="max-width: 325px;")

          .tabla-a.color-acento-contenido.col-12.col-xl-9.mx-auto.mb-5(style="overflow: auto;")
            table(style="min-width: 500px")
              thead
                tr
                  th Componente
                  th Entra (kg)
                  th Sale (kg)
                  th Pérdidas (kg)
                  th Pérdidas (%)
              tbody(style="background-color: white;")
                tr
                  td Manteca de cacao
                  td 102,59
                  td 
                  td 
                  td 
                tr
                  td Azúcar
                  td 100
                  td 
                  td 
                  td 
                tr
                  td Leche en polvo
                  td 200
                  td 
                  td 
                  td 
                tr
                  td Manteca mezclada
                  td 
                  td 401,38
                  td 
                  td 
                tr
                  td Pérdidas en molino
                  td 
                  td 
                  td 1,21
                  td 0,3 %
          p En esta fase se utiliza la manteca de cacao de la fase anterior y se le adicionan componentes nuevos para obtener el producto final, en este caso, azúcar y leche en polvo, las pérdidas de producto son mínimas, son del 0,3 %.

        .p-0(titulo="Conchado y refinado ")
          .d-flex.flex-wrap.align-items-center.justify-content-center.mb-5.w-100
            .col-xl-8.order-2.order-xl-1.pe-xl-4
              p.mb-0 En el proceso de conchado se reduce la humedad y a la vez se mezclan los componentes de la masa, con esto se busca el sabor característico del chocolate, todo eso se realiza en una máquina llamada concha, que trabaja por medio de agitación mecánica; después la masa se pasa por un molino refinador, el cual procesa la masa hasta que no presente ninguna partícula que genere sensación áspera o granosa. La tabla muestra el ejemplo del balance de la masa de la fase del refinado:
            img.col-xl-4.mx-auto.mb-4.mb-xl-0.order-1.order-xl-2(src="@/assets/curso/temas/tema1/img-11.png" style="max-width: 325px;")

          .tabla-a.color-acento-contenido.col-12.col-xl-9.mx-auto.mb-5(style="overflow: auto;")
            table(style="min-width: 500px")
              thead
                tr
                  th Componente
                  th Entra (kg)
                  th Sale (kg)
                  th Pérdidas (kg)
                  th Pérdidas (%)
              tbody(style="background-color: white;")
                tr
                  td Pasta refinada
                  td 345,89
                  td 
                  td 
                  td 
                tr
                  td Lecitina
                  td 345
                  td 
                  td 
                  td 
                tr
                  td Vainilla
                  td 4.82
                  td 
                  td 
                  td 
                tr
                  td Pasta conchada
                  td 
                  td 556,58
                  td 
                  td 
                tr
                  td Pérdidas en conchado
                  td 
                  td 
                  td 139,15
                  td 20 %
          p En el refinado se obtiene la pasta refinada, en este proceso se obtiene 345,89 kg, el porcentaje en cuanto pérdidas es de 15 %.
        
        .p-0(titulo="Atemperado y moldeado")
          .d-flex.flex-wrap.align-items-center.justify-content-center.mb-5.w-100
            .col-xl-8.order-2.order-xl-1.pe-xl-4
              p.mb-0 Esta etapa es importante para la estandarización y la formulación del chocolate, acá se enfrían las coberturas, llegando así a la dureza que se desea; en este proceso se obtiene la cristalización de la manteca de cacao generando una masa fina y homogénea con mayor brillo, mejor textura y superficie lisa para ser llevada al moldeado; el producto es retirado del molde y empacado de acuerdo con la presentación que se desea. La tabla muestra el ejemplo del balance de la masa de la fase del moldeado:
            img.col-xl-4.mx-auto.mb-4.mb-xl-0.order-1.order-xl-2(src="@/assets/curso/temas/tema1/img-12.png" style="max-width: 325px;")

          .tabla-a.color-acento-contenido.col-12.col-xl-9.mx-auto.mb-5(style="overflow: auto;")
            table(style="min-width: 500px")
              thead
                tr
                  th Componente
                  th Entra (kg)
                  th Sale (kg)
                  th Pérdidas (kg)
                  th Pérdidas (%)
              tbody(style="background-color: white;")
                tr
                  td Pasta atemperada
                  td 552,13
                  td 
                  td 
                  td 
                tr
                  td Pasta moldeada
                  td 
                  td 469,31
                  td 
                  td 
                tr
                  td Pérdidas en moldes 
                  td 
                  td 
                  td 82,82
                  td 15 %
          p En esta última fase ha entrado 552,13 kg de pasta atemperada y las pérdidas en el proceso son del 15 %, por eso la pasta moldeada que sale en peso es de 469,31 kg. 
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
.tarjeta-edit
  background-color: #FEE9B5
  &:hover
    background-color: #FFECDE
</style>
