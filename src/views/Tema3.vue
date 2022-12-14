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
      TabsA.tabs-a-edit.color-acento-botones.mb-5
        .tarjeta.p-4(titulo="Chocolate negro")
          h4 Chocolate negro
          .d-flex.flex-wrap.align-items-center
            .col-xl-7.pe-xl-3.order-2.order-xl-1
              p Es el chocolate que utilizan los chocolateros y los pasteleros como materia prima, se utiliza para cubrir frutas u otros alimentos congelados; puede ser negro o en leche.
              ul.lista-ul--color
                li.d-flex.mb-0
                  span(style="background-color: #FD7F23; min-width: 11px; width: 11px; height: 11px; border-radius: 50%; margin-top: .35rem;")
                  p.mb-0 #[b Composición: ] proporción de manteca de cacao del 30 %.
                li.d-flex.mb-0
                  span(style="background-color: #FD7F23; min-width: 11px; width: 11px; height: 11px; border-radius: 50%; margin-top: .35rem;")
                  p.mb-0 #[b Característica:] puede ser negro o con leche.
                li.d-flex.mb-0
                  span(style="background-color: #FD7F23; min-width: 11px; width: 11px; height: 11px; border-radius: 50%; margin-top: .35rem;")
                  p.mb-0 #[b Uso:] se usa para rellenar o forrar pasteles, es muy moldeable y da brillo.
            img.col-xl-5.mb-4.mb-xl-0.order-1.order-xl-2.mx-auto(src="@/assets/curso/temas/tema3/img-3.png" style="max-width: 333px;")
        .tarjeta.p-4(titulo="Cobertura de chocolate")
          h4 Cobertura de chocolate
          .d-flex.flex-wrap.align-items-center
            .col-xl-7.pe-xl-3.order-2.order-xl-1
              p El chocolate negro con alto contenido de cacao tiende a ser muy amargo, al menos que se haya elaborado con cacao fino o de semilla blanca.
              ul.lista-ul--color
                li.d-flex.mb-0
                  span(style="background-color: #FD7F23; min-width: 11px; width: 11px; height: 11px; border-radius: 50%; margin-top: .35rem;")
                  p.mb-0 #[b Composición:] proporción de chocolate negro mayor del 50 % (a partir de esa proporción el sabor amargo es perceptible).
                li.d-flex.mb-0
                  span(style="background-color: #FD7F23; min-width: 11px; width: 11px; height: 11px; border-radius: 50%; margin-top: .35rem;")
                  p.mb-0 #[b Característica:] pasta de cacao + manteca de cacao (azúcar opcional).
                li.d-flex.mb-0
                  span(style="background-color: #FD7F23; min-width: 11px; width: 11px; height: 11px; border-radius: 50%; margin-top: .35rem;")
                  p.mb-0 #[b Uso:] de fácil acceso en el mercado, se encuentra en diferentes presentaciones.
            img.col-xl-5.mb-4.mb-xl-0.order-1.order-xl-2.mx-auto(src="@/assets/curso/temas/tema3/img-4.png" style="max-width: 333px;")
        .tarjeta.p-4(titulo="Chocolate con leche")
          h4 Chocolate con leche
          .d-flex.flex-wrap.align-items-center
            .col-xl-7.pe-xl-3.order-2.order-xl-1
              p Es básicamente un dulce, por lo que la proporción de pasta de cacao normalmente está por debajo del 40 %. Como su nombre lo indica, lleva leche en polvo añadida, por lo que su color es más claro.
              ul.lista-ul--color
                li.d-flex.mb-0
                  span(style="background-color: #FD7F23; min-width: 11px; width: 11px; height: 11px; border-radius: 50%; margin-top: .35rem;")
                  p.mb-0 #[b Composición:] proporción de pasta de cacao por debajo del 40 %.
                li.d-flex.mb-0
                  span(style="background-color: #FD7F23; min-width: 11px; width: 11px; height: 11px; border-radius: 50%; margin-top: .35rem;")
                  p.mb-0 #[b Característica:] pasta del cacao + leche (condensada o en polvo) + azúcar (50 %).
                li.d-flex.mb-0
                  span(style="background-color: #FD7F23; min-width: 11px; width: 11px; height: 11px; border-radius: 50%; margin-top: .35rem;")
                  p.mb-0 #[b Uso:] es de fácil acceso y se encuentra en diferentes presentaciones, chocolatina preferida por los niños.
            img.col-xl-5.mb-4.mb-xl-0.order-1.order-xl-2.mx-auto(src="@/assets/curso/temas/tema3/img-5.png" style="max-width: 333px;")
        .tarjeta.p-4(titulo="Chocolate blanco")
          h4 Chocolate blanco
          .d-flex.flex-wrap.align-items-center
            .col-xl-7.pe-xl-3.order-2.order-xl-1
              p Se elabora de manteca de cacao (por lo menos el 20 %), leche en polvo y azúcar. Estrictamente hablando no es chocolate.
              ul.lista-ul--color
                li.d-flex.mb-0
                  span(style="background-color: #FD7F23; min-width: 11px; width: 11px; height: 11px; border-radius: 50%; margin-top: .35rem;")
                  p.mb-0 #[b Composición: ] carece de pasta de cacao.
                li.d-flex.mb-0
                  span(style="background-color: #FD7F23; min-width: 11px; width: 11px; height: 11px; border-radius: 50%; margin-top: .35rem;")
                  p.mb-0 #[b Característica:] manteca de cacao + azúcar + leche.
                li.d-flex.mb-0
                  span(style="background-color: #FD7F23; min-width: 11px; width: 11px; height: 11px; border-radius: 50%; margin-top: .35rem;")
                  p.mb-0 #[b Uso:] se utiliza en la repostería para realizar pasteles, bombones y otras especialidades.
            img.col-xl-5.mb-4.mb-xl-0.order-1.order-xl-2.mx-auto(src="@/assets/curso/temas/tema3/img-6.png" style="max-width: 333px;")

    .col-xl-10.mx-auto
      .tarjeta.tarjeta-edit.d-flex.flex-wrap.p-4
        .col-lg-3.mx-auto.position-relative(style="z-index: 1;")
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema3/img-2.svg" style="max-width: 230px;")
        p.position-relative.col-lg-8.mx-auto.px-lg-4(style="z-index: 1;") El proceso productivo de la cobertura de chocolate inicia con la mezcla de cacao, azúcar y manteca, a partir de ese momento comienzan las etapas de fabricación, cuyo primer paso es realizar la mezcla del cacao, el azúcar y los lácteos en diferentes proporciones a través de una “concha-refinadora de chocolates” según el tipo de cobertura que se desee; luego pasa por un proceso de refinado con el que se busca eliminar las partículas arenosas que hayan quedado de la mezcla para obtener una masa homogénea y completamente suave; seguido es llevada a una conchadora buscando mejorar la textura y eliminar la viscosidad de la masa resultante y pasarla al almacenamiento en tanques para conservar su estado de fluidez y finalmente moldearla en diversos tamaños y peso, con el fin de obtener las tabletas que serán comercializadas una vez estén frías.
        img.d-none.d-lg-flex(src="@/assets/curso/temas/tema3/img-8.svg" style="max-width: 150px; bottom: 0; right: 0; position: absolute;")
      img.d-none.d-lg-flex(src="@/assets/curso/temas/tema3/img-7.png" style="max-width: 98px; position: relative; margin-top: -2.7rem;")
    p Lo anterior hace parte de las etapas de producción de la cobertura de chocolate, las cuales se describen a continuación.
      
    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_3_1 3.1  Mezclado
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img.col-xl-5.mb-4.mb-xl-0.mx-auto(src="@/assets/curso/temas/tema3/img-9.png" style="max-width: 505px;")
      .col-xl-7.ps-xl-4
        p La elaboración de chocolate parte de la obtención de la pasta de cacao, pero para lograr un sabor y textura característico y de calidad se deben añadir diferentes ingredientes como lo son: manteca de cacao, azúcar, leche, aderezos, saborizantes y frutos deshidratados como almendras, maní o avellanas; a este proceso se le conoce como mezclado y es donde se mezclan todos los productos anteriormente citados para lograr así una sola masa para luego pasarla al proceso de refinado. 
        .position-relative.p-4(style="background-color: #F6F6F6;")
          p.mb-0 Las características más relevantes de la masa que se genera en esta fase es su color y aspecto físico, el primero es agradable y el segundo es arenoso. Esta acción se realiza en una mezcladora donde por medio de un agitador unifica todos los ingredientes y, por presentar un movimiento repetitivo, el calor de la masa aumenta. Respecto a las clases de chocolates que existen, en el chocolate negro se mezcla la pasta de cacao, la manteca de cacao y el azúcar; en el chocolate con leche se mezcla la pasta de cacao, la manteca de cacao, el azúcar y la leche; y en el chocolate blanco se mezcla la manteca de cacao, el azúcar y la leche.
          img.d-none.d-lg-flex(src="@/assets/curso/temas/tema3/img-10.svg" style="max-width: 98px; position: absolute; bottom: -2rem; right: 0;")
    
    .d-flex.flex-wrap.align-items-center.mb-5
      .col-xl-7.pe-xl-4.order-2.order-xl-1
        p El objetivo de esta fase es mezclar los ingredientes para obtener una pasta homogénea y así poder seguir con el proceso productivo, los ingredientes a los que se les realiza este proceso son la pasta de cacao, la manteca de cacao, el azúcar, la leche y los demás productos que le ayudarán a dar las condiciones deseadas al producto final. El mezclado se realiza en una mezcladora industrial y su proceso puede dudar hasta 30 horas, una vez finalice se obtiene una masa homogénea y cremosa con un aspecto arenoso.
        .tarjeta.position-relative.p-4.px-xl-5(style="background-color: #FFF6DF; box-shadow: 0 3px 6px #00000020;")
          p.mb-0.fw-bold Cabe aclarar que cuando se desea procesar un chocolate de calidad al licor de cacao se le mezcla manteca de cacao, pero si se desea procesar un chocolate de menor calidad se mezcla polvo de cacao, grasas vegetales, azúcar, saborizante y espesantes.
      img.col-xl-5.mb-4.mb-xl-0.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema3/img-9.png" style="max-width: 505px;")
    .bg-left-to-right.pb-5.position-relative(style="background: linear-gradient(0deg, rgba(255,255,255,1) 45%, rgba(252,192,45,1) 45%, rgba(252,192,45,1) 90%, rgba(255,255,255,1) 90%);")
      img.d-none.d-lg-flex(src="@/assets/curso/temas/float-bg-6.png" style="max-width: 127px; position: absolute; left: 0; top: 220px;")
      img.d-none.d-lg-flex(src="@/assets/curso/temas/float-bg-3.png" style="max-width: 120px; position: absolute; right: -1rem; top: 270px;")
      .tarjeta.d-flex.flex-wrap.mb-5.p-4.position-relative(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/bg-tj.svg')})`}"
        style="z-index: 1;overflow: hidden; box-shadow: 0px 8px 21px #00000020; background-repeat: no-repeat; background-size: cover"
      )
        img.d-flex.mx-auto.col-xl-4.mb-4.my-xl-auto(src="@/assets/curso/temas/tema3/img-11.png" style="max-width: 300px")
        p.p-4.mb-0.col-xl-8 En esta fase al igual que en las siguientes, existe la manipulación de los productos por parte de los operarios, quienes son los encargados de garantizar la calidad del proceso productivo, ellos deben conocer perfectamente en qué consiste la actividad de transformación del cacao y del chocolate, pues en caso de que algo salga mal, deberán eliminar lo realizado y comenzar de nuevo. La rutina de mezclado en la planta procesadora es la siguiente: 
      .tarjeta.p-4.position-relative(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/bg-1.png')})`}"
        style="z-index: 1; background-color: white; box-shadow: 0 8px 21px #00000080; background-repeat: no-repeat;"
      )
        .col-xl-10.mx-auto
          p En esta fase existen tres tipos de conchado: seco, plástico y líquido. A continuación se explicará cada uno:
          PasosA.color-acento-contenido.mb-5(tipo="n")
            .row
              .col-lg-8.mb-4.mb-md-0.order-2.order-lg-1
                h4 Mezclar el azúcar
                p Cuando el operario que se encarga de esta fase lleva el azúcar a la mezcladora se calcula el tiempo de mezcla de cada bulto de azúcar que son 8 minutos. Es importante aclarar que por cada descarga de licor se le adiciona un bulto de azúcar.
              .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0
                figure
                  img.mx-auto(src='@/assets/curso/temas/tema3/img-12.png' style="max-width: 257px;")
            
            .row
              .col-lg-4.mb-4.mb-lg-0
                figure
                  img.mx-auto(src='@/assets/curso/temas/tema3/img-13.png' style="max-width: 257px;")
              .col-lg-8.mb-4.mb-md-0
                h4.text-start Compactación
                p.text-start Una vez ocurra esto se pasa la masa obtenida de la mezcla a una segunda mezcladora, con el fin de que quede más compacta, esto se da ya que la segunda máquina posee aspas, lo que permite una mejor agitación.
            
            .row
              .col-lg-8.mb-4.mb-md-0.order-2.order-lg-1
                h4 Verificación de temperatura
                p Durante el proceso el operario debe verificar la temperatura tanto de la masa como del agua con la que trabaja la máquina. En esta fase se busca obtener una pasta homogénea.
              .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0
                figure
                  img.mx-auto(src='@/assets/curso/temas/tema3/img-14.png' style="max-width: 257px;")
    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_3_2 3.2 Refinado
    
    .d-flex.flex-wrap.align-items-center.mb-5
      p.col-xl-7.pe-xl-4.order-2.order-xl-1 Esta fase consiste en someter la mezcla que llega de la fase anterior a una serie de rodillos para obtener una pasta suave, a través de un proceso que busca mejorar la textura del chocolate, generando un producto sin sensación de aspereza; la masa se pasa por un molino refinador hasta que no presente ninguna partícula arenosa. 
        br
        br
        |Las pequeñas partículas de sólidos (cacao, azúcar y leche) se comportan como una fase dispersa, adquieren una forma más uniforme y se recubren con manteca de cacao, lo cual está relacionado con la viscosidad y la fluidez, las propiedades de textura del chocolate, así como la manera en la que el producto terminado se funde suavemente en la boca. Este proceso promueve el desarrollo del sabor mediante diversos factores como el tiempo, la temperatura y los demás ingredientes de la receta, pero también elimina la humedad y los sabores desagradables volátiles (aldehídos y ácidos grasos volátiles de cadena corta) que están altamente relacionados con el origen y las características de los granos de cacao.
      img.col-xl-5.mb-4.mb-xl-0.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema3/img-15.png" style="max-width: 505px;")
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img.col-lg-4.mb-4.mb-xl-0.mx-auto(src="@/assets/curso/temas/tema3/img-16.png" style="max-width: 505px;")
      .col-lg-8.ps-xl-4
        .tarjeta.position-relative.p-4.px-xl-5(style="background-color: #FFF6DF; box-shadow: 0 3px 6px #00000020;")
          p.fw-bold Parámetros de control 
          p Están asociados al tamaño de las partículas generadas en el proceso de refinado, en este caso debe ser 25 micras, esto se obtiene gracias a la pulverización del cacao, las cuales quedan más pequeñas que las papilas gustativas, generando así un producto sin sensación de grumos o partículas en la masa. 
    
    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_3_3 3.3  Conchado
    
    .d-flex.flex-wrap.align-items-center.mb-5.p-4.p-xl-0.position-relative
      img.mx-auto.col-xl-5.mb-4.mb-xl-0.position-relative(src="@/assets/curso/temas/tema3/img-17.png" style="max-width: 505px; z-index: 1;")
      .col-xl-7.ps-xl-4.bg-text-t4
        p.mb-0.p-4 Esta fase es fundamental en el proceso de obtención del chocolate, el sabor y la textura se clarifican gracias a la mezcla constante a temperaturas elevadas, pues de las buenas prácticas depende la calidad del resultado; el conchado se realiza mediante un proceso mecánico y el porcentaje de grasa se obtiene en este proceso. 
          br
          br
          |Para mejorar el porcentaje de grasa muchas veces se utiliza la adición de lecitina de soja, en especial para los chocolates negros; este emulsionante debe manipularse con precaución, ya que si no se usan las cantidades necesarias la viscosidad puede aumentar y no se debe olvidar que este es un factor diferenciador de la buena calidad del chocolate.
      img(src="@/assets/curso/temas/tema3/img-18.svg" style="max-width: 110px; z-index: 1; position: absolute; bottom: -50px; right: 0;")
    
    .d-flex.flex-wrap.align-items-center
      p.tarjeta.col-md.mb-0.pe-md-5.order-2.order-md-1 En este proceso de conchado se mezclan los componentes de la masa por medio de la conchadora, que tiene amasadores que giran en sentido contrario y a diferentes velocidades, buscando que la masa de chocolate mejore la viscosidad y la textura para obtener como resultado un producto con características óptimas de fusión. La agitación constante en la conchadora y el tiempo de la masa en la misma depende de la calidad que se desea, pues el proceso puede durar hasta 3 días en la búsqueda de la emulsión deseada.
      img.mb-4.mb-md-0.position-relative.py-2.order-1.order-md-2(src="@/assets/curso/temas/img-1.svg" style="max-width: 85px")
    
    .bg-left-to-right.py-5.mb-5(style="background: linear-gradient(0deg, rgba(255,255,255,1) 30%, rgba(252,192,45,1) 30%, rgba(252,192,45,1) 80%, rgba(255,255,255,1) 80%);")
      .tarjeta.d-flex.flex-wrap.align-items-center.mb-5.mb-xl-0.p-4.position-relative(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-21.svg')})`}"
          style="z-index: 1;overflow: hidden; box-shadow: 0px 8px 21px #00000020; background-repeat: no-repeat; background-size: cover"
        )
          img.d-none.d-xl-flex.mx-auto.col-xl-2.mb-4.my-xl-auto.order-xl-1(src="@/assets/curso/temas/tema3/img-19.svg" style="max-width: 300px")
          .p-4.mb-0.col-xl-6.order-2.order-xl-2
            h4 En la etapa de conchado se busca:
            ul.lista-ul--color
              li.d-flex.mb-2
                span(style="background-color: #FD7F23; min-width: 11px; width: 11px; height: 11px; border-radius: 50%; margin-top: .35rem;")
                p.mb-0 Reducir el agua y ácidos orgánicos como el acético de la masa.
              li.d-flex.mb-2
                span(style="background-color: #FD7F23; min-width: 11px; width: 11px; height: 11px; border-radius: 50%; margin-top: .35rem;")
                p.mb-0 Humectar con grasa las partículas no grasas de la masa.
              li.d-flex.mb-2
                span(style="background-color: #FD7F23; min-width: 11px; width: 11px; height: 11px; border-radius: 50%; margin-top: .35rem;")
                p.mb-0 Alcanzar una grasa continua.
              li.d-flex.mb-2
                span(style="background-color: #FD7F23; min-width: 11px; width: 11px; height: 11px; border-radius: 50%; margin-top: .35rem;")
                p.mb-0 Obtener el sabor que se desea.
              li.d-flex.mb-2
                span(style="background-color: #FD7F23; min-width: 11px; width: 11px; height: 11px; border-radius: 50%; margin-top: .35rem;")
                p.mb-0 Disminuir la viscosidad.
          img.d-flex.mx-auto.col-xl-4.mb-4.my-xl-auto.order-1.order-xl-3(src="@/assets/curso/temas/tema3/img-20.svg" style="max-width: 300px")
      .position-relative
        p.d-flex.d-lg-none.mb-5 En esta fase existen tres tipos de conchado: seco, plástico y líquido. A continuación se explicará cada uno:
        p.d-none.d-lg-flex.mb-0(style="position: absolute; bottom: -6rem; left: 2rem; z-index: 1") En esta fase existen tres tipos de conchado: seco, plástico y líquido. A continuación se explicará cada uno:
      .position-relative.d-flex.justify-content-between.mb-5.mb-lg-0
        img.d-none.d-lg-flex.mb-auto(src="@/assets/curso/temas/float-bg-6.png" style="max-width: 127px; margin-top: -4rem; margin-left: -3rem;")
        img.d-none.d-lg-flex.my-auto(src="@/assets/curso/temas/float-bg-3.png" style="max-width: 85px; margin-right: -3rem;")
      
      .tarjeta.d-flex.flex-wrap.align-items-center.mb-5.p-4.position-relative(
          style="margin-top: -4rem; background-color: white;z-index: 1;overflow: hidden; box-shadow: 0px 8px 21px #00000020; background-repeat: no-repeat; background-size: cover"
        )
        .col-xl-11.d-flex.flex-wrap.mx-auto
          AcordionA.col-xl-6.acordeon-edit.order-2.order-xl-1(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .p-0(titulo="Conchado seco")
              p.mb-0 El parámetro de control de este tipo es permitir la evaporación de los ácidos volátiles del cacao y el % de humedad de la masa. La concentración del ácido acético permanecerá, ya que no hay agua que actúe como vapor de arrastre. 
            .p-0(titulo="Conchado plástico")
              p.mb-0 El parámetro de control permite desarrollar por medio de reacciones químicas un sabor característico del producto, esto debido al proceso continuo de agitación con temperaturas constantes, y se genera una gran volatilización de ácido acético que a la vez genera la fermentación del cacao.
            .p-0(titulo="Conchado líquido")
              p.mb-0 El parámetro de control permite identificar las propiedades de viscosidad y fluidez en la adición de manteca de cacao y emulsionantes; algunos chocolates negros se pueden conchar en una temperatura máxima de 90°C, debido a los productos volátiles generados en la fermentación. 
          img.mx-auto.col-xl-6.mb-4.my-xl-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema3/img-22.png" style="max-width: 505px")

    .tarjeta.d-flex.flex-wrap.align-items-center.position-relative.p-4.px-xl-5(style="background-color: #FFF6DF;")
      img.mx-auto.col-xl-4.mb-4.mb-xl-0(src="@/assets/curso/temas/tema3/img-23.png" style="max-width: 403px")
      p.mb-0.col-xl-8 Para finalizar, es importante mencionar que agroindustrialmente el cacao pertenece a los alimentos que gracias a su proceso de fermentación natural, genera sus cualidades de aroma y sabor característicos; en la calidad del chocolate influye de forma significativa la solidificación y la cristalización de la manteca de cacao, además de la eliminación de sabores amargos y texturas que vienen de las fases anteriores, teniendo en cuenta el número de cristales, su forma y tamaño y especialmente, el modo en el que se fusionan entre sí, sin dejar de lado la oxigenación y la cremosidad adecuada de la masa, son determinantes para que el chocolate tenga las propiedades y las cualidades aromáticas deseadas.
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
.tabs-a-edit
  .tabs-a__tab
    background-color: #FEE9B5 !important
  .tabs-a__tab__selected, .tabs-a__tab:hover
    background-color: #3A1C12 !important
    color: white !important
    &::before
      background-color: #3A1C12 !important
  .tarjeta
    background-color: white
    box-shadow: 0 3px 6px #00000020
.tarjeta-edit
  background-color: #FFF6DF
  overflow: hidden
  position: relative
  &::after
    content: ''
    position: absolute
    background-color: #7D5F54
    z-index: 0
    width: 1000px
    height: 500px
    top: 6rem
    left: -45%
    transform: rotate(50deg)
</style>
