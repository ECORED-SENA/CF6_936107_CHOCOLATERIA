export default {
  global: {
    componenteFormativo: 'Proceso de producción de coberturas',
    descripcionCurso:
      'Este componente formativo presenta la elaboración de la cobertura a base de chocolate, según los requerimientos técnicos y la normatividad vigente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-6.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Composición del chocolate',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Especificaciones técnicas de materias primas y órdenes de producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Propiedades nutricionales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Orden de carga de materias primas',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Producción de la cobertura de chocolate',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Mezclado',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Refinado',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Conchado',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Finalización del proceso de elaboración de la cobertura de chocolate',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Atemperado',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Moldeado y empacado',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Especificaciones técnicas de las materias primas y de las órdenes de producción',
      referencia:
        'Mundo Cacao. (2020). <em>Norma Técnica Colombiana del ICONTEC - NTC 1252.</em> Mundo Cacao.',
      tipo: 'Artículo',
      link:
        'https://www.mundocacao.com.co/calidad/c/0/i/49741462/norma-tecnica-colombiana-del-icontec-ntc-1252',
    },
    {
      tema: 'Producción de la cobertura de chocolate',
      referencia:
        'Grupo Nutresa. (2019). <em>Cosecha, beneficio y calidad del grano de cacao.</em> Grupo Nutresa.',
      tipo: 'Artículo',
      link:
        'https://chocolates.com.co/wp-content/uploads/2020/06/Cartilla-Cosecha-Benef-Calidad-SEP-2019.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Chocolate aromatizado',
      significado:
        'Es el producto para el consumo directo, al que se le añadido aromatizantes permitidos por la legislación nacional vigente y las características organolépticas se declaran propiedades en el producto.',
    },
    {
      termino: 'Chocolate compuesto',
      significado:
        'Es el producto para el consumo directo, al que se le han agregado productos alimenticios que no modifiquen la composición del chocolate.',
    },
    {
      termino: 'Chocolate para el consumo directo',
      significado:
        'Producto obtenido por la mezcla, en proporciones variables, de subproductos del cacao o sin la adición de azúcares y de otros productos alimenticios.',
    },
    {
      termino: 'Chocolate relleno',
      significado:
        'Es el producto para el consumo directo, cuyo centro se distingue claramente del revestimiento por su composición. No incluye dulces de harina, productos de repostería, ni bizcochos.',
    },
    {
      termino: 'Coberturas',
      significado:
        'Son las obtenidas del chocolate, sucedáneos de chocolate, chocolate compuesto o chocolate aromatizado, que se utilizan generalmente para recubrir otros productos o hacer chocolates o productos de sucedáneos para el consumo directo.',
    },
    {
      termino: 'Sucedáneos de chocolate',
      significado:
        'Productos obtenidos por la sustitución de la manteca de cacao por otras grasas vegetales en proporciones variables con la adición de otros productos alimenticios.',
    },
    {
      termino: 'Subproductos del cacao',
      significado:
        'Son los productos obtenidos del cacao, como el licor de cacao, la manteca de cacao y la cocoa.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguilar, H. (2016). <em>Manual para la evaluación de la calidad del grano de cacao.</em> FHIA.',
      link:
        'http://www.fhia.org.hn/descargas/Proyecto_de_Cacao_SECO/Manual_para_la_Evaluacion_de_la_Calidad_del_Grano_de_Cacao.pdf',
    },
    {
      referencia:
        'Cajo, M. (2021.) <em>Control de calidad en chocolate.</em> Editorial Barreto.',
      link:
        'https://repositorio.unamad.edu.pe/bitstream/handle/20.500.14070/705/Control%20de%20calidad%20en%20chocolates_Mar%c3%ada%20Cajo.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'CODEX STAN 141. (s.f.). <em>Norma para el cacao en pasta (licor de cacao/chocolate) y torta de cacao.</em> CODEX STAN 141.',
      link: 'https://cacaofcaug.files.wordpress.com/2014/09/licor-de-cacau.pdf',
    },
    {
      referencia:
        'Cuídate Plus. (2001). <em>Chocolate: valor nutricional.</em> Cuídate Plus.',
      link:
        'https://cuidateplus.marca.com/alimentacion/nutricion/2001/04/16/chocolate-nutricional-9652.html',
    },
    {
      referencia:
        'Mincomercio. (2021). Nuevas normas o estándares disponibles para las cadenas de cacao y aguacate Hass, aprobados por ICONTEC y gestionados por ColombiaMide. Mincomercio.',
      link:
        'https://colombiamide.inm.gov.co/nuevas-normas-o-estandares-disponibles-para-las-cadenas-de-cacao-y-aguacate-hass-aprobados-por-icontec-y-gestionados-por-colombiamide/',
    },
    {
      referencia:
        'Resolución 1511 de 2011. [Ministerio de la Protección Social]. Por la cual se establece el reglamento técnico sobre los requisitos sanitarios que debe cumplir el chocolate y productos de chocolate para consumo humano, que se procese, envase, almacene, transporte, comercialice, expenda, importe o exporte en el territorio nacional. Mayo 11 de 2011.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Resolucion-1511-de-2011.pdf',
    },
    {
      referencia:
        'Resolución 2674 de 2013. [Ministerio de la Protección Social]. Por la cual se reglamenta el artículo 126 del Decreto Ley 019 de 2012 y se dictan otras disposiciones. Julio 22 de 2013.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-2674-de-2013.pdf',
    },
    {
      referencia:
        'Voy a ser cocinero. (2017). Chocolate I: Componentes del chocolate y el atemperado. Voy a ser cocinero.',
      link: 'https://voyasercocinero.es/componentes-chocolate-atemperado/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Abel Gordillo Peña',
        cargo: 'Experto temático',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Caterine Bedoya Mejía',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor metodológico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Edinson Castañeda Oviedo',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
