<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Especificaciones técnicas de materias primas y órdenes de producción
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img.col-xl-5.mb-4.mb-xl-0.mx-auto(src="@/assets/curso/temas/tema2/img-1.png" style="max-width: 505px;")
      p.col-xl-7.ps-xl-4 La cobertura de chocolate se caracteriza por ser un insumo importante en la industria de la repostería y la pastelería, y su calidad depende del cumplimiento de la normatividad, de las propiedades nutricionales de la materia prima y obviamente, del adecuado proceso de producción, el cual se basa en los diferentes tipos de chocolate que se desee elaborar y de las características del mismo, cuya finalidad es tener un resultado óptimo en términos de calidad y que el producto llegue a las diferentes plataformas comerciales. 
        br
        br
        |Es importante tener presente que el proceso de la industria de la chocolatería está regido por normativas correspondientes a la manipulación de alimentos, en este caso por las Normas Técnicas Colombianas (NTC), que son guías que estandarizan los procesos de fabricación, operación y mantenimiento de diferentes industrias, estas son otorgadas por el Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC) y para la industria del cacao y chocolate han determinado las siguientes resoluciones que regulan el proceso en todas sus etapas y así mismo, la calidad del producto final:
    
    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span NTC calidad de producto final en chocolatería
    .tabla-a.color-acento-contenido.col-12.col-xl-10.mx-auto.mb-5(style="overflow: auto;")
      table(style="min-width: 500px")
        thead
          tr
            th Normativa
            th Orientada a
        tbody(style="background-color: white;")
          tr
            td NTC 1252: 2021
            td Cacao en grano, especificaciones y requisitos de calidad.
          tr
            td NTC 793:2016
            td Chocolate de mesa.
          tr
            td NTC 574:2016
            td Grasas, aceites animales y vegetales comestibles, manteca de cacao.
          tr
            td NTC 3619:2012
            td Chocolate de mesa instantáneo.
          tr
            td Resolución 1511 de 2011
            td Requisitos sanitarios que deben cumplir el chocolate y los productos de chocolate de mesa, cobertura y sucedáneos del chocolate.
          tr
            td NTC 486:2008
            td Masa, pasta o licor de cacao y torta de cacao para la fabricación de productos de cacao y chocolate.
          tr
            td NTC 792:2008
            td Chocolate y sus sucedáneos para el consumo directo.
      p.mb-0.px-4.py-2(style="background-color: #E8E8E8") #[b Nota.] Adaptada de la recopilación de las NTC de calidad del producto final en chocolatería.
    
    .position-relative
      img.d-none.d-xl-flex(src="@/assets/curso/temas/float-bg-1.png" style="max-width: 98px; position: absolute; top: -7rem; left: -3rem;")
      img.d-none.d-xl-flex(src="@/assets/curso/temas/float-bg-2.png" style="max-width: 127px; position: absolute; top: -6rem; right: -3rem;")
      .tarjeta.color-primario.p-3.mb-5.col-lg-10.mx-auto
        .row.justify-content-around.align-items-center
          img(src="@/assets/curso/temas/img-3.svg" style="withd: 100%; max-width: 85px")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.mb-0 Para conocer las normas internacionales de los alimentos, ingrese al enlace del CODEX ALIMENTARIUS:
              .col-sm-auto
                a.boton.color-acento-botones.fw-bold(:href="'https://repositorio-sena-edu-co.bdigital.sena.edu.co/bitstream/handle/11404/5241/agroindustria_cacao.pdf?sequence=1&isAllowed=y'" target="_blank")
                  span.pe-4 Enlace web
                  <svg style="width: 26px" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
                    <g id="Grupo_176308" data-name="Grupo 176308" transform="translate(-1221 -2969)">
                      <rect id="Rectángulo_35625" data-name="Rectángulo 35625" width="26" height="26" transform="translate(1221 2969)" fill="#12263f"/>
                      <g id="Icon_feather-link-2" data-name="Icon feather-link-2" transform="translate(1225.869 2984.305) rotate(-45)">
                        <path id="Trazado_1842" data-name="Trazado 1842" d="M10.173,0h2.18a3.633,3.633,0,1,1,0,7.266h-2.18m-4.36,0H3.633A3.633,3.633,0,1,1,3.633,0h2.18" transform="translate(0 0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        <path id="Trazado_1843" data-name="Trazado 1843" d="M0,0H5.813" transform="translate(5.086 3.633)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                      </g>
                    </g>
                  </svg>

    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1   Propiedades nutricionales
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img.col-xl-5.mb-4.mb-xl-0.mx-auto(src="@/assets/curso/temas/tema2/img-2.png" style="max-width: 505px;")
      .position-relative.col-xl-7.ps-xl-4
        img.d-none.d-xl-flex(src="@/assets/curso/temas/tema2/img-3.svg" style="max-width: 121px; position: absolute; bottom: -4rem; right: 0;")
        p Como se ha mencionado en diferentes momentos, el chocolate contiene grasas, carbohidratos y proteínas, tres componentes importantes para la obtención de energía del organismo, además de vitamina A, B, minerales, calcio, fósforo, hierro, magnesio y teobromina que ayudan en la circulación sanguínea; también se le atribuye bienestar psicológico por su agradable sabor, cuando es consumido de manera regular y aparte de los derivados y nutrientes, contiene además la sustancia llamada teobromina, que tiene efecto diurético y de estimulación de la circulación sanguínea. En cuanto a los minerales, se pueden encontrar calcio, fósforo, hierro, magnesio, potasio, entre otros; vitaminas A, B y B1 (tiamina), ácido fólico y polifenoles que previenen trastornos cardiovasculares y estimulan las defensas del organismo.
          br
          br
          |El Instituto Español del Cacao y el Chocolate ha realizado varias investigaciones acerca del valor nutricional y energético que aporta el chocolate al ser humano y su resultado es que puede generar entre 450 y 600 calorías    y, se considera un producto recomendable en situaciones que requieran un aporte energético. La tabla que se presenta a continuación compara la composición nutricional de las tres coberturas más conocidas

    
    .tabla-a.color-secundario.col-12.col-xl-10.mx-auto.mb-5(style="overflow: auto;")
      .titulo-sexto.color-acento-contenido
        h5 Tabla 2.
        span Composición nutricional del chocolate en tres tipos de coberturas
      table(style="min-width: 500px")
        thead
          tr(style="background-color: #FCC02D;")
            th(style="border: none;") Componentes (100 gramos)
            th(style="border: none;") Chocolate negro
            th(style="border: none;") Chocolate con leche
            th(style="border: none;") Chocolate blanco
        tbody.text-center(style="background-color: white;")
          tr
            td(style="border: none; border-right: 1px solid #AFAFAF") Energía (kcal)
            td(style="border: none; border-right: 1px solid #AFAFAF") 449-534
            td(style="border: none; border-right: 1px solid #AFAFAF") 511-542
            td(style="border: none;") 529
          tr(style="background-color: #FFF6DF;")
            td(style="border: none; border-right: 1px solid #AFAFAF") Proteínas (g)
            td(style="border: none; border-right: 1px solid #AFAFAF") 4,2-7,8
            td(style="border: none; border-right: 1px solid #AFAFAF") 6,1-9,2
            td(style="border: none;") 8
          tr
            td(style="border: none; border-right: 1px solid #AFAFAF") Hidratos de carbono (g)
            td(style="border: none; border-right: 1px solid #AFAFAF") 47-65
            td(style="border: none; border-right: 1px solid #AFAFAF") 54,1-60
            td(style="border: none;") 58,3
          tr(style="background-color: #FFF6DF;")
            td(style="border: none; border-right: 1px solid #AFAFAF") Almidón
            td(style="border: none; border-right: 1px solid #AFAFAF") 3,1
            td(style="border: none; border-right: 1px solid #AFAFAF") 1,1
            td(style="border: none;") -
          tr
            td(style="border: none; border-right: 1px solid #AFAFAF") Azúcares (g)
            td(style="border: none; border-right: 1px solid #AFAFAF") 50,1-60
            td(style="border: none; border-right: 1px solid #AFAFAF") 54,1-56,9
            td(style="border: none;") 58,3
          tr(style="background-color: #FFF6DF;")
            td(style="border: none; border-right: 1px solid #AFAFAF") Fibra (g)
            td(style="border: none; border-right: 1px solid #AFAFAF") 5,9-9
            td(style="border: none; border-right: 1px solid #AFAFAF") 1,8
            td(style="border: none;") -
          tr
            td(style="border: none; border-right: 1px solid #AFAFAF") Grasas (g)
            td(style="border: none; border-right: 1px solid #AFAFAF") 29-30,6
            td(style="border: none; border-right: 1px solid #AFAFAF") 30-31,8
            td(style="border: none;") 30,9
          tr(style="background-color: #FFF6DF;")
            td(style="border: none; border-right: 1px solid #AFAFAF") Grasa saturada (g)
            td(style="border: none; border-right: 1px solid #AFAFAF") 15,1-18,2
            td(style="border: none; border-right: 1px solid #AFAFAF") 17,6-19,9
            td(style="border: none;") 18,2
          tr
            td(style="border: none; border-right: 1px solid #AFAFAF") G. monoinsaturada (g)
            td(style="border: none; border-right: 1px solid #AFAFAF") 8,1-10
            td(style="border: none; border-right: 1px solid #AFAFAF") 9,6-10,7
            td(style="border: none;") 9,9
          tr(style="background-color: #FFF6DF;")
            td(style="border: none; border-right: 1px solid #AFAFAF") G. Poliinsaturada (g)
            td(style="border: none; border-right: 1px solid #AFAFAF") 0,7-1,2
            td(style="border: none; border-right: 1px solid #AFAFAF") 1,0-1,2
            td(style="border: none;") 1,1
          tr
            td(style="border: none; border-right: 1px solid #AFAFAF") Sodio (g)
            td(style="border: none; border-right: 1px solid #AFAFAF") 0,02-0,08
            td(style="border: none; border-right: 1px solid #AFAFAF") 0,06-1,12
            td(style="border: none;") 0,11
          tr(style="background-color: #FFF6DF;")
            td(style="border: none; border-right: 1px solid #AFAFAF") Potasio (g)
            td(style="border: none; border-right: 1px solid #AFAFAF") 0,4
            td(style="border: none; border-right: 1px solid #AFAFAF") 0,34-0,47
            td(style="border: none;") 0,35
          tr
            td(style="border: none; border-right: 1px solid #AFAFAF") Calcio (mg)
            td(style="border: none; border-right: 1px solid #AFAFAF") 35-63
            td(style="border: none; border-right: 1px solid #AFAFAF") 190-214
            td(style="border: none;") 270
          tr(style="background-color: #FFF6DF;")
            td(style="border: none; border-right: 1px solid #AFAFAF") Fósforo
            td(style="border: none; border-right: 1px solid #AFAFAF") 167-287
            td(style="border: none; border-right: 1px solid #AFAFAF") 199-242
            td(style="border: none;") 230
          tr
            td(style="border: none; border-right: 1px solid #AFAFAF") Hierro (mg)
            td(style="border: none; border-right: 1px solid #AFAFAF") 2,2-3,2
            td(style="border: none; border-right: 1px solid #AFAFAF") 0,8-2,3
            td(style="border: none;") 0,2
          tr(style="background-color: #FFF6DF;")
            td(style="border: none; border-right: 1px solid #AFAFAF") Magnesio (mg)
            td(style="border: none; border-right: 1px solid #AFAFAF") 100-113
            td(style="border: none; border-right: 1px solid #AFAFAF") 45-86
            td(style="border: none;") 26
          tr
            td(style="border: none; border-right: 1px solid #AFAFAF") Cinc (mg)
            td(style="border: none; border-right: 1px solid #AFAFAF") 1,4-2,0
            td(style="border: none; border-right: 1px solid #AFAFAF") 0,2-0,9
            td(style="border: none;") 0,9
          tr(style="background-color: #FFF6DF;")
            td(style="border: none; border-right: 1px solid #AFAFAF") Vit. A (UI)
            td(style="border: none; border-right: 1px solid #AFAFAF") 3
            td(style="border: none; border-right: 1px solid #AFAFAF") 150-165
            td(style="border: none;") 180
          tr
            td(style="border: none; border-right: 1px solid #AFAFAF") Vit. E (mg)
            td(style="border: none; border-right: 1px solid #AFAFAF") 0,25-0,3
            td(style="border: none; border-right: 1px solid #AFAFAF") 0,4-0,6
            td(style="border: none;") 1,14
          tr(style="background-color: #FFF6DF;")
            td(style="border: none; border-right: 1px solid #AFAFAF") Vit. B1 (mg)
            td(style="border: none; border-right: 1px solid #AFAFAF") 0,04-0,07
            td(style="border: none; border-right: 1px solid #AFAFAF") 0,05-0,1
            td(style="border: none;") 0,08
          tr
            td(style="border: none; border-right: 1px solid #AFAFAF") Vit. B6 (mg)
            td(style="border: none; border-right: 1px solid #AFAFAF") 0,04-0,05
            td(style="border: none; border-right: 1px solid #AFAFAF") 0,05-0,11
            td(style="border: none;") 0,07
          tr(style="background-color: #FFF6DF;")
            td(style="border: none; border-right: 1px solid #AFAFAF") Ac. fólico (micro g)
            td(style="border: none; border-right: 1px solid #AFAFAF") 6-10
            td(style="border: none; border-right: 1px solid #AFAFAF") 5-10
            td(style="border: none;") 10
      p.mb-0.px-4.py-2(style="background-color: #E8E8E8") #[b Nota.] Tomado del Instituto del Cacao y del Chocolate citado por Cuídate Plus (2017).

    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2  Orden de carga de materias primas

    .d-flex.flex-wrap.align-items-center.mb-5
      img.col-xl-5.mb-4.mb-xl-0.mx-auto(src="@/assets/curso/temas/tema2/img-4.png" style="max-width: 505px;")
      p.col-xl-7.ps-xl-4 Las materias primas son las encargadas de que un producto final sea lo esperado, la calidad de estas permitirá que se obtenga procesados acordes a las necesidades de los consumidores; algunas se deben transformar para poder ser un bien de consumo, mientras que otras pueden ser aptas para el consumo sin necesidad de ser transformadas. En los procesos agroindustriales y más precisamente el del cacao se agregan materias primas en la mayoría de las fases de producción, dependiendo del tipo de chocolate que se desea; por eso, cuando la producción es a gran escala y de forma continua, lo ideal es tener bodegas con materias primas, ordenadas de una forma que permita optimizar los tiempos y los movimientos en la planta transformadora.
    
    .bg-left-to-right.pb-5(style="background: linear-gradient(0deg, rgba(252,192,45,1) 40%, rgba(255,255,255,1) 40%);")
      .tarjeta.d-flex.flex-wrap.mb-5(
        :style="{'background-image': `url(${require('@/assets/curso/temas/bg-tj.svg')})`}"
        style="overflow: hidden; box-shadow: 0px 8px 21px #00000020; background-repeat: no-repeat; background-size: cover"
      )
        p.p-4.mb-0.col-xl-8.order-2.order-xl-1 Aunque parezca extraño, el transporte a granel de materias primas destinadas a la alimentación humana, también hace parte de las fases de la cadena agroalimentaria, ya que se debe garantizar que estas salgan de sus centros de acopio en óptimas condiciones y de igual manera lleguen a su destino final. La mercancía a transportar debe ir perfectamente identificada para evitar confusión y la contaminación cruzada o peligros que puedan suponer una afectación del producto.
          br
          br
          |Para tener un control sobre las mercancías a transportar se debe contar con este documento tipo contrato de servicios que especifica el trabajo a realizar por un operario de transporte, donde se define la carga y otros aspectos asociados a ella, incluida la información de las empresas que realizan el contrato. El servicio de transporte contratado debe tener en cuenta los siguientes aspectos a diligenciar en la orden de carga:
        img.d-flex.mx-auto.col-xl-4.order-1.order-xl-2.mb-4.my-xl-auto(src="@/assets/curso/temas/tema2/img-5.png" style="max-width: 300px")
    
    .bg-left-to-right.py-5.mb-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-6.svg')})`}"
      style="background-repeat: no-repeat;"
    )
      ImagenInfografica.color-acento-botones.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema2/img-7.svg')

        .tarjeta.p-3(x="19%" y="14%" numero="+" style="background-color: #FFECDE")
          h3 Información de envío
          ul.lista-ul--color
            li
              span(style="background-color: #FD7F23; min-width: 11px; height: 11px; border-radius: 50%; margin-top: .3rem;")
              | Número de orden de carga.
            li
              span(style="background-color: #FD7F23; min-width: 11px; height: 11px; border-radius: 50%; margin-top: .3rem;")
              | Fecha de envío.
            li
              span(style="background-color: #FD7F23; min-width: 11px; height: 11px; border-radius: 50%; margin-top: .3rem;")
              | Datos del cliente (nombre y número de documento).
            li
              span(style="background-color: #FD7F23; min-width: 11px; height: 11px; border-radius: 50%; margin-top: .3rem;")
              | Nombre y dirección de quien envía (origen).
            li
              span(style="background-color: #FD7F23; min-width: 11px; height: 11px; border-radius: 50%; margin-top: .3rem;")
              | Nombre y dirección de quien recibe (destino).

        .tarjeta.p-3(x="82%" y="18%" numero="+" style="background-color: #FFECDE")
          h3 Identificación del contrato
          ul.lista-ul--color
            li
              span(style="background-color: #FD7F23; min-width: 11px; height: 11px; border-radius: 50%; margin-top: .3rem;")
              | Datos de la empresa cargadora.
            li
              span(style="background-color: #FD7F23; min-width: 11px; height: 11px; border-radius: 50%; margin-top: .3rem;")
              | Datos de la empresa que transportará la mercancía.
        
        .tarjeta.p-3(x="19%" y="42%" numero="+" style="background-color: #FFECDE")
          h3 Información de la carga y la descarga
          ul.lista-ul--color
            li
              span(style="background-color: #FD7F23; min-width: 11px; height: 11px; border-radius: 50%; margin-top: .3rem;")
              | Producto.
            li
              span(style="background-color: #FD7F23; min-width: 11px; height: 11px; border-radius: 50%; margin-top: .3rem;")
              | Cantidad.
            li
              span(style="background-color: #FD7F23; min-width: 11px; height: 11px; border-radius: 50%; margin-top: .3rem;")
              | Peso.
        
        .tarjeta.p-3(x="82%" y="51%" numero="+" style="background-color: #FFECDE")
          h3 Identificación del transportista y la ruta a realizar
          ul.lista-ul--color
            li
              span(style="background-color: #FD7F23; min-width: 11px; height: 11px; border-radius: 50%; margin-top: .3rem;")
              | Conductor y número de identificación.
            li
              span(style="background-color: #FD7F23; min-width: 11px; height: 11px; border-radius: 50%; margin-top: .3rem;")
              | Datos del vehículo (marca, placa, modelo).
            li
              span(style="background-color: #FD7F23; min-width: 11px; height: 11px; border-radius: 50%; margin-top: .3rem;")
              | Datos del tráiler (número y color).
        
        .tarjeta.p-3(x="19%" y="71%" numero="+" style="background-color: #FFECDE")
          h3 Datos especiales de la carga
          ul.lista-ul--color
            li
              span(style="background-color: #FD7F23; min-width: 11px; height: 11px; border-radius: 50%; margin-top: .3rem;")
              | Condiciones especiales.
            li
              span(style="background-color: #FD7F23; min-width: 11px; height: 11px; border-radius: 50%; margin-top: .3rem;")
              | Sellos de seguridad.
            li
              span(style="background-color: #FD7F23; min-width: 11px; height: 11px; border-radius: 50%; margin-top: .3rem;")
              | Otras observaciones.
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img.mb-4.mb-md-0.position-relative.py-2(src="@/assets/curso/temas/img-1.svg" style="max-width: 85px")
      p.tarjeta.col-md.mb-0.ps-md-5 Adicional a la orden de carga, se debe garantizar que el transporte que ofrezca el servicio sea completamente higiénico y que su interior esté hecho de material que se pueda lavar y desinfectar fácilmente y que sea conducido por transportistas capacitados en el manejo de alimentos quienes al igual que los operarios que realicen las tareas de carga y descarga requieren establecer acciones seguras de manera obligatoria, a fin de evitar poner en riesgo su integridad, salud y seguridad, utilizando los siguientes elementos de protección personal:
    
    .bg-left-to-right.d-flex.flex-wrap.align-items-center.justify-content-center.py-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-8.png')})`}"
      style="background-repeat: no-repeat;"
    )
      .col-12.col-lg-5.col-xl-4.px-md-2.order-2.order-md-1
        .tarjeta-edit-v1.me-md-auto
          .header-tarjeta
            h3.col-10.mx-auto Lentes
            img.img-right(src="@/assets/curso/temas/tema2/c-1.svg" style="max-width: 107px")
          .tarjeta.px-5.py-4(style="margin-top: -1.7rem; background-color: #FEE9B5")
            p.pt-3.mb-0 Protege los ojos de alguna salpicadura de algún liquido en el proceso de carga y de descarga.
        
        .tarjeta-edit-v1.me-md-auto
          .header-tarjeta
            h3.col-10.mx-auto Tapones auditivos
            img.img-right(src="@/assets/curso/temas/tema2/c-2.svg" style="max-width: 107px")
          .tarjeta.px-5.py-4(style="margin-top: -1.7rem; background-color: #FEE9B5")
            p.pt-3.mb-0 Protege los oídos de ruidos altos causados por las maquinarias del proceso productivo. 
        
        .tarjeta-edit-v1.me-md-auto
          .header-tarjeta
            h3.col-10.mx-auto Chaleco reflectivo
            img.img-right(src="@/assets/curso/temas/tema2/c-3.svg" style="max-width: 107px")
          .tarjeta.px-5.py-4(style="margin-top: -1.7rem; background-color: #FEE9B5")
            p.pt-3.mb-0 Permite la visibilidad del operario en lugares con poca luz.
        
        .tarjeta-edit-v1.me-md-auto
          .header-tarjeta
            h3.col-10.mx-auto Fajas lumbares
            img.img-right(src="@/assets/curso/temas/tema2/c-4.svg" style="max-width: 107px")
          .tarjeta.px-5.py-4(style="margin-top: -1.7rem; background-color: #FEE9B5")
            p.pt-3.mb-0 Protegen la espalda cuando se levanta mucho peso.

      .d-none.d-lg-flex.col-lg-2.px-2.order-md-2
        img(src="@/assets/curso/temas/tema2/img-9.svg")

      .col-12.col-lg-5.col-xl-4.px-md-2.order-1.order-md-3
        .tarjeta-edit-v1.ms-md-auto
          .header-tarjeta
            h3.col-10.mx-auto Casco
            img.img-left(src="@/assets/curso/temas/tema2/c-5.svg" style="max-width: 107px")
          .tarjeta.px-5.py-4(style="margin-top: -1.7rem; background-color: #FEE9B5")
            p.pt-3.mb-0 Protege la cabeza de golpes causados por caídas o impactos de materiales que hacen parte del proceso de carga y de descarga.
        
        .tarjeta-edit-v1.ms-md-auto
          .header-tarjeta
            h3.col-10.mx-auto Guantes
            img.img-left(src="@/assets/curso/temas/tema2/c-6.svg" style="max-width: 107px")
          .tarjeta.px-5.py-4(style="margin-top: -1.7rem; background-color: #FEE9B5")
            p.pt-3.mb-0 Protege las manos de tener contacto con algún material contaminante y a la vez perjudicial para la salud.
        
        .tarjeta-edit-v1.ms-md-auto
          .header-tarjeta
            h3.col-10.mx-auto Botas punta de acero
            img.img-left(src="@/assets/curso/temas/tema2/c-7.svg" style="max-width: 107px")
          .tarjeta.px-5.py-4(style="margin-top: -1.7rem; background-color: #FEE9B5")
            p.pt-3.mb-0 Protege los pies de algún impacto con materiales contundentes. 
        
        .tarjeta-edit-v1.ms-md-auto
          .header-tarjeta
            h3.col-10.mx-auto Tapabocas
            img.img-left(src="@/assets/curso/temas/tema2/c-8.svg" style="max-width: 107px")
          .tarjeta.px-5.py-4(style="margin-top: -1.7rem; background-color: #FEE9B5")
            p.pt-3.mb-0 Evita inhalar sustancias o partículas que afectan directamente la salud del operario.

</template>

<script>
export default {
  name: 'Tema2',
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
.tarjeta-edit-v1
  width: 90%
  margin-bottom: 4rem
  .tarjeta
    min-height: 150px
  .header-tarjeta
    width: 100%
    position: relative
    h3
      background-color: #3A1C12
      color: #FCC02D
      text-align: center
      display: flex
      align-items: center
      justify-content: center
      min-height: 80px
      border-radius: 7px
    .img-right
      position: absolute
      top: 50%
      right: -2rem
      transform: translateY(-50%)
    .img-left
      position: absolute
      top: 50%
      left: -2rem
      transform: translateY(-50%)
</style>
