<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de los conceptos y herramientas fundamentales para establecer el estado de una marca territorial desde el enfoque OVOP Colombia, mediante la identificación de elementos relacionados con identidad territorial, desarrollo endógeno, tesoros locales, actores, mercado territorial y herramientas de investigación y diagnóstico.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de las siguientes afirmaciones describe mejor una marca territorial desde el enfoque OVOP Colombia?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un logotipo utilizado exclusivamente para promocionar los productos turísticos de un municipio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una estrategia integral que articula identidad, recursos, productos, servicios, valores y capacidades locales para diferenciar y proyectar un territorio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Una campaña publicitaria diseñada por una institución para aumentar temporalmente el número de visitantes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un símbolo gráfico que puede construirse sin participación de la comunidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Reconoce que la marca territorial trasciende los elementos gráficos y expresa de manera estratégica la identidad y los atributos diferenciales del territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué diferencia principalmente a una marca territorial de una marca comercial?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La marca territorial solamente puede representar productos agrícolas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La marca comercial siempre requiere participación ciudadana.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La marca territorial surge de la identidad colectiva de un lugar y requiere participación y apropiación de la comunidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La marca territorial no busca generar diferenciación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha identificado el carácter colectivo y territorial que diferencia la marca territorial de una marca comercial.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes corresponde a uno de los principios orientadores del enfoque OVOP Colombia?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pensar local y depender de recursos externos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desarrollo del recurso humano.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Concentración de las decisiones en actores externos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estandarización de todos los territorios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El desarrollo del recurso humano es uno de los tres principios orientadores del enfoque OVOP Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Desde el enfoque OVOP, el desarrollo endógeno se caracteriza principalmente por:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Construir el desarrollo a partir de las capacidades, recursos, saberes y organización de la propia comunidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustituir los recursos locales por modelos externos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Concentrar el desarrollo exclusivamente en la promoción turística.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Depender principalmente de inversión y decisiones provenientes de otros territorios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Comprende que el desarrollo endógeno nace desde el territorio y reconoce a sus habitantes y organizaciones como protagonistas del cambio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué función cumple la identidad territorial en la construcción de una marca territorial?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar las actividades económicas del territorio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Aportar historia, cultura, tradiciones, símbolos y referentes colectivos que dan sentido y autenticidad a la marca.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Definir únicamente los colores y la tipografía del logotipo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Promocionar exclusivamente los productos con mayores ventas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La identidad territorial constituye la base que aporta autenticidad, coherencia y sentido a la marca.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: 'En el enfoque OVOP, los tesoros locales son:',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente atractivos turísticos reconocidos nacionalmente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Recursos que deben ser creados exclusivamente para atraer visitantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Riquezas materiales e inmateriales con valor especial para la comunidad por su historia, significado o potencial de desarrollo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Productos que necesariamente deben comercializarse internacionalmente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Comprende que los tesoros locales pueden ser naturales, productivos o culturales y forman parte de la identidad del territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de los siguientes es un criterio utilizado para valorar y seleccionar un tesoro local?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Dependencia externa.', esCorrecta: false },
            { id: 'b', texto: 'Unicidad.', esCorrecta: true },
            { id: 'c', texto: 'Publicidad masiva.', esCorrecta: false },
            { id: 'd', texto: 'Número de competidores.', esCorrecta: false },
          ],
          mensaje_correcto:
            'La unicidad permite establecer qué tan distintivo es un tesoro dentro de la región o del país.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuándo un tesoro local puede convertirse en un producto territorial?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cuando se transforma en un bien, servicio o experiencia capaz de ofrecerse a un público, manteniendo su vínculo con la identidad territorial.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Cuando pierde su relación con la cultura local para responder al mercado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cuando es administrado exclusivamente por una empresa externa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Cuando necesariamente se convierte en un producto físico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Reconoce que el producto territorial materializa un tesoro en un bien, servicio o experiencia sin perder su autenticidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué caracteriza principalmente a un producto estrella territorial?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser el producto de menor precio del territorio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ser necesariamente el producto con mayor volumen de producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Representar de manera destacada la identidad del territorio, poseer diferenciación, reconocimiento y capacidad para dinamizar la economía local.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ser comercializado exclusivamente fuera del territorio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El producto estrella actúa como emblema y carta de presentación del territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Para qué sirve principalmente el mapeo de actores en una estrategia de marca territorial?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para identificar únicamente a las instituciones públicas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para identificar y analizar personas, grupos e instituciones, sus intereses, capacidades, relaciones y niveles de influencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Para sustituir el análisis de mercado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para seleccionar exclusivamente a los actores que financian la marca.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El mapeo permite comprender el ecosistema territorial, reconocer aliados y anticipar riesgos o conflictos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'Productores, artesanos, cabildos, líderes y asociaciones corresponden principalmente a:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Reguladores y garantes.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Protagonistas del territorio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ecosistema económico y comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aliados mediáticos externos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Estos actores custodian saberes, fortalecen la narrativa territorial y participan directamente en la construcción de valor colectivo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Qué se entiende por mercado territorial?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El lugar físico donde únicamente se comercializan productos agrícolas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El conjunto de relaciones de intercambio alrededor de bienes, servicios, experiencias, recursos y atributos de un territorio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El conjunto de empresas que compiten dentro de un municipio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un sistema orientado exclusivamente a atraer inversionistas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Reconoce que el mercado territorial integra dimensiones económicas, sociales, culturales y ambientales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál de los siguientes elementos hace parte del mercado territorial?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Oferta territorial.', esCorrecta: true },
            {
              id: 'b',
              texto: 'Identidad corporativa exclusivamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estructura salarial de las instituciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Manual administrativo municipal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La oferta territorial está conformada por los bienes, servicios, experiencias y recursos que ofrece el territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'Para analizar integralmente los tipos de mercado relacionados con una marca territorial se consideran tres dimensiones principales:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Precio, producto y publicidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cultura, tecnología e infraestructura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Alcance territorial, públicos objetivo y entorno competitivo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Producción, financiación y exportación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Estas dimensiones permiten comprender dónde se proyecta la marca, con quién se relaciona y frente a qué ofertas compite.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál de las siguientes corresponde a una fuente primaria para el diagnóstico de marca territorial?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un informe estadístico del DANE.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un Plan de Ordenamiento Territorial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una entrevista realizada a productores, habitantes o visitantes del territorio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un diagnóstico institucional elaborado previamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Las entrevistas permiten obtener información directa sobre percepciones, experiencias, relatos y valoraciones de los actores.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es el propósito principal del diagnóstico participativo de una marca territorial?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar inmediatamente un nuevo logotipo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar características, fortalezas, desafíos, actores y oportunidades para establecer el estado real de la marca territorial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir la participación comunitaria por análisis técnicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluar únicamente las ventas de productos locales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El diagnóstico permite conocer el punto de partida de la marca y sustentar decisiones para su fortalecimiento.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'Durante el diagnóstico se identifica que una marca ya cuenta con reconocimiento, actores articulados y acciones orientadas a ampliar su visibilidad en diferentes mercados. ¿En qué etapa podría encontrarse principalmente?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Creación.', esCorrecta: false },
            { id: 'b', texto: 'Posicionamiento.', esCorrecta: true },
            {
              id: 'c',
              texto: 'Redescubrimiento de tesoros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Identificación inicial del territorio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El diagnóstico permite establecer si una marca se encuentra en creación, consolidación o posicionamiento.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Para qué se utiliza el método CRAAP en el diagnóstico de una marca territorial?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para diseñar la identidad visual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para evaluar la actualidad, relevancia, autoridad, exactitud y propósito de las fuentes de información.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Para clasificar los tesoros locales según su potencial económico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para determinar exclusivamente el precio de los productos territoriales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Este método contribuye a utilizar información confiable y pertinente durante el diagnóstico.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'Si se desea conocer qué historias, memorias y significados asocian los habitantes con la marca y el territorio, ¿qué herramienta resulta especialmente pertinente?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Entrevistas.', esCorrecta: true },
            {
              id: 'b',
              texto: 'Análisis exclusivo de ventas.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Registro de inventarios.', esCorrecta: false },
            { id: 'd', texto: 'Proyección de precios.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Las entrevistas permiten profundizar en relatos, memorias, emociones y significados asociados con la identidad y la marca territorial.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'Una comunidad quiere establecer el estado actual de su marca territorial. ¿Cuál de las siguientes acciones representa mejor el enfoque propuesto en el componente formativo?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Analizar únicamente el logotipo y decidir si requiere modernización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Contratar una campaña publicitaria antes de conocer la percepción de la comunidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Integrar información sobre identidad y tesoros locales, actores, apropiación comunitaria, mercado, percepciones y fuentes de información para identificar fortalezas, vacíos y oportunidades.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Comparar exclusivamente las ventas del territorio con las de otros municipios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha comprendido que establecer el estado de una marca territorial requiere una lectura integral y participativa que articule identidad, comunidad, actores y mercado.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
