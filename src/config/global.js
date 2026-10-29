export default {
  global: {
    Name: 'Diagnóstico y estado de la marca territorial',
    Description:
      'Este componente formativo orienta al aprendiz en la comprensión y diagnóstico de la marca territorial desde el enfoque OVOP Colombia, reconociendo la relación entre identidad, cultura, recursos locales, dinámica económica y participación comunitaria. Mediante herramientas de investigación y diagnóstico participativo, el aprendiz analiza el estado actual de la marca territorial a partir de la identificación de tesoros locales, el reconocimiento y mapeo de actores, el análisis del entorno y la revisión de información relevante del territorio.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
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
        titulo:
          'Diagnóstico y estado de la marca territorial con enfoque OVOP Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Marca y marca territorial',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Desarrollo endógeno en el enfoque OVOP',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Identidad territorial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tesoros locales y marca territorial',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Ejemplos de tesoros locales',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Del tesoro local al producto estrella y su integración en la marca territorial',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Del producto territorial al producto estrella',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Actores de la marca territorial',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo:
              'Importancia estratégica del mapeo de actores para la marca territorial',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Mercado y <i>marketing</i> territorial: concepto, tipos y herramientas de análisis',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto de mercado territorial',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Concepto de <i>marketing</i> territorial',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Tipos de mercado en la marca territorial',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Diagnóstico participativo de la marca territorial',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo:
              'Herramientas para el análisis de mercado orientado a marca territorial',
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
  glosario: [
    {
      termino: 'Apropiación comunitaria',
      significado:
        'nivel de reconocimiento, valoración y uso que la comunidad otorga a la marca territorial. implica participación, sentido de pertenencia y compromiso con la gestión de los tesoros locales.',
    },
    {
      termino: 'Atributos locales',
      significado:
        'elementos propios del territorio incorporados a un producto, servicio o experiencia, como materias primas locales, técnicas tradicionales, símbolos culturales, memorias colectivas y saberes ancestrales. refuerzan la autenticidad y el vínculo identitario con el lugar.',
    },
    {
      termino: 'Desarrollo endógeno',
      significado:
        'modelo de desarrollo que surge desde las capacidades internas del territorio: sus recursos humanos, culturales, naturales y productivos. promueve autonomía, innovación y sostenibilidad.',
    },
    {
      termino: 'Diferenciación territorial',
      significado:
        'estrategia que resalta los rasgos únicos del territorio —cultura, patrimonio, biodiversidad, oficios, paisajes— para distinguirlo frente a otros territorios y fortalecer su posicionamiento en mercados turísticos, culturales o productivos.',
    },
    {
      termino: 'Enfoque OVOP',
      significado:
        'metodología <i>One village, One product</i> basada en la creación de valor desde los tesoros locales, la autogestión comunitaria, la creatividad y el fortalecimiento del recurso humano para promover desarrollo endógeno y competitividad territorial.',
    },
    {
      termino: 'Gobernanza de marca',
      significado:
        'sistema de acuerdos, reglas, roles e instancias (como el Comité Local OVOP) encargadas de gestionar, proteger y orientar el uso de la marca territorial. garantiza transparencia, sostenibilidad y corresponsabilidad.',
    },
    {
      termino: 'Identidad visual',
      significado:
        'sistema gráfico que representa la esencia cultural del territorio. incluye logotipo, isotipo, paleta cromática, tipografías, patrones, eslogan e iconografía inspirados en tesoros locales, artesanías, paisajes y símbolos comunitarios.',
    },
    {
      termino: 'Mapeo de actores',
      significado:
        'herramienta participativa que identifica, clasifica y analiza los actores (instituciones, organizaciones, líderes, productores y comunidad) que influyen en la construcción, gestión y sostenibilidad de la marca territorial. facilita la articulación y la gobernanza.',
    },
    {
      termino: 'Narrativa territorial',
      significado:
        'relato identitario que integra historia, cultura, tesoros locales, emociones y visión de futuro. da sentido a la marca territorial y conecta emocionalmente a residentes, visitantes e inversionistas.',
    },
    {
      termino: 'Producto estrella',
      significado:
        'producto territorial emblemático reconocido por su calidad, autenticidad y capacidad de representar al territorio. actúa como símbolo identitario, dinamizador económico y eje estratégico de la marca territorial.',
    },
    {
      termino: 'Producto territorial',
      significado:
        'bien, servicio o experiencia derivada de tesoros locales que expresa la identidad del territorio y puede ser ofertada al mercado manteniendo autenticidad y coherencia cultural.',
    },
    {
      termino: 'Sueño colectivo',
      significado:
        'visión de futuro construida de manera participativa, que expresa las aspiraciones, valores, metas y propósitos del territorio. orienta la narrativa territorial, la estrategia de marca y las acciones de desarrollo endógeno.',
    },
    {
      termino: 'Tesoros locales',
      significado:
        'recursos naturales, culturales o productivos que poseen alto valor simbólico para la comunidad y que, al ponerse en valor, fortalecen la identidad territorial, la cohesión social y las oportunidades económicas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ancin A., I. (2018). Análisis sobre la elección de isotipos y logotipos en los procesos de comunicación de la marca. Revista Caribeña de Ciencias Sociales.',
    },
    {
      referencia:
        'Anholt, S. (2010). Places: Identity, image and reputation. Palgrave Macmillan.',
    },
    {
      referencia:
        'Barra Villalón, C. (s. f.). Elementos de la identidad de marca. Facultad de Economía y Negocios, Universidad de Chile.',
    },
    {
      referencia: 'Cassisi, L. (2020). Cómo crear una marca-lugar. Foroalfa.',
    },
    {
      referencia:
        'Comisión Nacional de la Micro y Pequeña Empresa (CONAMYPE). (2017). Manual para la Facilitación del Programa Un Pueblo, Un producto.',
    },
    {
      referencia:
        'Correa, A., & Doria, F. (2021). Narrativas del territorio: Herramientas para el fortalecimiento de la identidad local. Universidad del Norte.',
    },
    {
      referencia:
        'Díaz Mesa, H., & Ruiz Rallo, A. (2023). Diseño de marcas territoriales en España. I+Diseño. Revista Científica de Investigación y Desarrollo en Diseño, 18, 7-22.',
    },
    {
      referencia:
        'Harada Olivares, E. (2014). Logotipos, isotipos, imagotipos e isologos: Una aclaración terminológica. Revista Mixcoac: De la academia a la sociedad, 2 (33), 36–47.',
    },
    {
      referencia:
        'Pangea Diseño. (2017). Conoce la diferencia entre logotipo, imagotipo, isotipo e isologo. Citado en Ancin (2018).',
    },
    {
      referencia:
        'Paz, S. (2005). Administración estratégica de marca territorial: Cómo construir y administrar la marca de ciudades y regiones. Revista Electrónica de Administración (REAd), 11(3), 1–20.',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA) & Agencia de Cooperación Internacional del Japón (JICA). (2020). Estrategia de desarrollo local incluyente OVOP Colombia Documento Estratégico. OVOP COLOMBIA.',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA) & Agencia de Cooperación Internacional del Japón (JICA). (2025a). Guía DM_01 – Redescubrimiento de Tesoros Locales.',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA) & Agencia de Cooperación Internacional del Japón (JICA). (2025b). Guía DM_02 – Construcción del Sueño Colectivo OVOP.',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA) & Agencia de Cooperación Internacional del Japón (JICA). (2025c). Guía DM_08 – Análisis de actores para el desarrollo local.',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA) & Agencia de Cooperación Internacional del Japón (JICA). (2025d). Guía DM_09 – Estrategia de Marca Territorial.',
    },
    {
      referencia:
        'Vaca López, A. (2016). Las marcas territoriales, una apuesta al desarrollo local desde la cultura: La valoración de la marca Quindío como caso de estudio. Revista Asuntos Económicos y Administrativos, (31).',
    },
    {
      referencia:
        'Vázquez Barquero, A. (2005). Las nuevas fuerzas del desarrollo. Antoni Bosch Editor.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yadira Eliana Cruz González',
          cargo: 'Instructora',
          centro:
            'Centro Nacional de Hotelería, Turismo y Alimentos - Regional Distrito Capital',
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
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
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
