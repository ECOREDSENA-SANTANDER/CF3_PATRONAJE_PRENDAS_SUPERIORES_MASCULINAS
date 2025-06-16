export default {
  global: {
    Name: 'Interpretación de modelos masculinos.',
    Description:
      'Reconocer la secuencia didáctica permite articular desde los patrones base hasta las variaciones de modelos masculinos casuales. Se abordan marcaciones clave, lectura técnica de prendas y tipologías como polo, sudadera o chaqueta. Este proceso facilita al aprendiz comprender cómo aplicar el patronaje y datos antropométricos en soluciones de confección industrial con fidelidad y funcionalidad. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Señalización de los patrones ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Marcaciones de piezas',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Análisis e interpretación de modelos masculinos ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Lectura visual y técnica de prendas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Elementos estructurales de la prenda',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Estudio de cortes, detalles funcionales y ornamentales',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Adaptación de modelos para moda casual',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Variaciones de modelos masculinos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Trazo de camiseta polo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Sudadera deportiva',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Camisa manga corta y cuello deportivo',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Camisa con canesú adelante y atrás',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Chaquetas',
            hash: 't_3_5',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
      tema: 'Señalización de los patrones',
      referencia:
        'Valencia Martínez, M. I., Valbuena Agudelo, D. P., & López Fuentes, D. I. (2014). Patronaje masculino. Tecnológico Pascual Bravo. ',
      tipo: 'PDF',
      link: 'https://es.slideshare.net/ricardoJAI/patronaje-masculinopdf',
    },
    {
      tema: 'Adaptación de modelos para moda causal',
      referencia:
        'León, K. (2018). Patronaje para indumentaria masculina. [Trabajo de grado para el título de Diseñadora de Textil y Moda, Universidad del Azuay]. Repositorio Institucional de la Universidad del Azuay.',
      tipo: 'PDF',
      link: 'https://dspace.uazuay.edu.ec/bitstream/datos/8123/1/13846.pdf',
    },
    {
      tema: 'Adaptación de modelos para moda causal',
      referencia:
        'ACOLDEMODA. (2023). Curso gratis de patronaje para hombres y niños [Lista de reproducción]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/playlist?list=PLDDlOkDEoAT2Cn3fyoCAiAb4jQYfYaj9K',
    },
  ],
  glosario: [
    {
      termino: 'Alfiletero',
      significado:
        'recipiente o cojín pequeño utilizado para mantener las agujas y alfileres organizados durante el proceso de confección. ',
    },
    {
      termino: 'Antropometría',
      significado:
        'medición sistemática del cuerpo humano que sirve de base para establecer cuadros de tallas y ajustar patrones.',
    },
    {
      termino: 'Boceto plano',
      significado:
        'dibujo técnico sin perspectiva que representa las piezas de una prenda con líneas claras y proporciones exactas.',
    },
    {
      termino: 'Canesú',
      significado:
        'pieza horizontal que se coloca en la parte superior del delantero o la espalda para estabilizar hombros y facilitar el montaje.',
    },
    {
      termino: 'Corte al bies',
      significado:
        'orientación del patrón a 45° respecto al hilo de urdimbre, lo que confiere mayor elasticidad y caída al tejido.',
    },
    {
      termino: 'Dobladillo',
      significado:
        'terminación doblada y cosida en el borde inferior de una prenda que evita el deshilado y brinda peso al acabado.',
    },
    {
      termino: 'Entalle',
      significado:
        'reducción de holgura mediante pinzas o desplazamiento de costados para ajustar la prenda al contorno del cuerpo.',
    },
    {
      termino: 'Escote',
      significado:
        'abertura superior que rodea el cuello y determina la forma del borde frontal de la prenda.',
    },
    {
      termino: 'Holgura',
      significado:
        'cantidad adicional de tejido incorporada al contorno corporal para permitir movilidad y confort.',
    },
    {
      termino: 'Muesca',
      significado:
        'pequeña señal cortada o marcada en el borde del patrón que indica puntos de empalme entre piezas.',
    },
    {
      termino: 'Patrón base',
      significado:
        'representación bidimensional que reproduce las medidas corporales sin detalles de diseño, utilizada como bloque inicial.',
    },
    {
      termino: 'Piquete',
      significado:
        'corte o marca breve que guía la alineación precisa de costuras durante el ensamblaje. ',
    },
    {
      termino: '<em>Placket</em>',
      significado:
        'abertura reforzada con tapeta, habitual en mangas o delanteros, que permite la colocación de botones y facilita el vestir. ',
    },
    {
      termino: 'Sisa',
      significado:
        'curva que define la unión entre el cuerpo y la manga, esencial para la movilidad del brazo. ',
    },
    {
      termino: 'Vista',
      significado:
        'pieza interna que refuerza y limpia bordes como escotes, tapetas o aberturas. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Aldrich, W. (2012). Metric pattern cutting for men’s wear: Charting the fundamentals (2.ª ed.). Bloomsbury. ',
    },
    {
      referencia:
        'Brown, E. (2015). Pattern engineering: A science for fashion—Men’s shirt and collar systems. Metropolitan Press. ',
    },
    {
      referencia:
        'Carr, V., & Latham, B. (1991). The anatomy of dress patterns. Butterworth-Heinemann. ',
    },
    {
      referencia:
        'Cantillo, E. (2014). Patronaje industrial masculino: Programa y escalado [PDF]. SlideShare. ',
    },
    {
      referencia:
        'Donnanno, A. (2016). Técnicas de patronaje de moda. Volumen 1. Editorial GG. ',
    },
    {
      referencia:
        'García, R. (2014). Patrones de costura masculinos: Patrón XXI. Editorial Técnica. ',
    },
    {
      referencia:
        'Heller, E.-M. (2015). Escuela de costura: Nociones básicas y técnicas. Everand. ',
    },
    {
      referencia:
        'Heller, E.-M. (2016). Técnicas de patronaje de moda: Carrera Diseño y Gestión en Moda (Tomo II – Hombre). Universidad Peruana de Ciencias Aplicadas.',
    },
    {
      referencia:
        'Innovación y Cualificación, S. L. (2018). Materiales, herramientas, máquinas y equipos de confección. Everand. ',
    },
    {
      referencia:
        'Jungclaus, S. (2023). Guía avanzada de sastrería masculina: Manual de patronaje para diferentes formas corporales. Everand. ',
    },
    {
      referencia:
        'Martínez, M. I., Valbuena, D. P., & Fuentes, D. I. L. (2019). Fundamentos del patronaje y patronaje masculino básico. Servicio Nacional de Aprendizaje SENA.',
    },
    {
      referencia:
        'Muñoz, A. (2019). Manual de patronaje industrial para hombre: Trazado y escalado. Editorial Textil. ',
    },
    {
      referencia:
        'Pérez, C. (2018). Patronaje y confección de prendas masculinas: Enfoque industrial. Editorial Moda. ',
    },
    {
      referencia:
        'Promopress. (2017). Técnicas de patronaje de moda: Alta costura y patronaje industrial. Promopress. ',
    },
    {
      referencia:
        'Rodríguez, L. (2020). Patronaje industrial de prendas de vestir: Estudios y aplicaciones. Editorial Bogotá. ',
    },
    {
      referencia:
        'Rubio, J. (2021). Patronaje industrial: Del manuscrito al software CAD. Editorial Técnica. ',
    },
    {
      referencia:
        'Sánchez, P. (2018). Patronaje geométrico e informático para prendas masculinas. Patrón XXI. ',
    },
    {
      referencia:
        'Sierra, E. (2016). Métodos de escalado de patrones masculinos para producción industrial. Planeta Textil. ',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. (2014). Guía de patronaje básico masculino (Manual interno). SENA. ',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. (2014). Manual de operación de máquinas de coser industrial (p. 40). SENA. ',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. (2023). Normas gráficas para la señalización de patrones (Boletín técnico). SENA. ',
    },
    {
      referencia:
        'Torres, F. (2019). Diseño y patronaje industrial masculino: De la teoría a la práctica. T&M Editorial. ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jenny Rocío Reyes Acevedo',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
