<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Diagnóstico y estado de la marca territorial con enfoque OVOP Colombia
      
      img.d-none.d-lg-block.mb-5(src='@/assets/curso/temas/t1/1.png')(data-aos='fade-right')
      p.mb-3(data-aos='fade-right') La marca territorial debe entenderse como un sistema vivo que integra identidad, cultura, economía y participación comunitaria. A partir del enfoque OVOP Colombia, se exploran los fundamentos conceptuales de marca y marca territorial, los principios del desarrollo endógeno (autogestión, creatividad y pensar global – actuar local) y la manera en que estos orientan y son herramientas de desarrollo local en el territorio. 
      p.mb-5(data-aos='fade-right') El recorrido incluye el reconocimiento de tesoros locales, el análisis del papel que desempeñan los actores en el ecosistema territorial y la lectura del entorno mediante herramientas para examinar el mercado y el comportamiento del consumidor.

      
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0.br-1(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/2.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column.br-2
          p.mb-0 Con estos elementos, el aprendiz adquiere la capacidad de diagnosticar la situación actual de una marca territorial, integrando información cualitativa y cuantitativa obtenida mediante métodos participativos. Al finalizar este espacio, estará en condiciones de identificar avances, vacíos y oportunidades del territorio, así como de evaluar el nivel de incorporación de los principios OVOP, estableciendo una base técnica sólida para el diseño o fortalecimiento estratégico de la marca territorial.
      
      
      
      
      
      
      
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Marca y marca territorial
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/3.svg')
        .col-sm-12.col-lg-11
            p.mb-0 En la gestión de marca territorial teniendo en cuenta el enfoque OVOP Colombia, comprender los conceptos de marca y marca territorial permite reconocer cómo la identidad, los recursos, los saberes y los valores propios de una comunidad pueden contribuir a la diferenciación y proyección del territorio. 
            p.mb-0 Aunque ambos conceptos comparten elementos relacionados con la identidad y el reconocimiento, presentan diferencias en su propósito, alcance y forma de construcción, las cuales se abordarán a continuación:

      TabsC.color-primario.mb-5(data-aos='fade-right')
        .ptabs(titulo="¿Qué es una marca?")
          .row.justify-content-center.align-items-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/4.png')
            .col-sm-12.col-lg-7
              h4 ¿Qué es una marca?
              p.mb-0 Una marca es un sistema de identificación  y significado que, según la Asociación Americana de #[i Marketing] (AMA), puede incluir un nombre, símbolo, diseño o cualquier combinación de estos elementos para distinguir productos o servicios frente a la competencia. Su función va más allá del logotipo: integra el eslogan, la identidad visual, el tono de comunicación y las percepciones, emociones y experiencias que el consumidor asocia con ella. En un entorno con múltiples opciones, la marca actúa como una promesa de valor que facilita las decisiones, genera confianza en los consumidores y contribuye a la diferenciación en el mercado.
      
        .ptabs(titulo="¿Qué es una marca territorial?")
          .row.justify-content-center.align-items-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/5.png')
            .col-sm-12.col-lg-7
              h4 ¿Qué es una marca territorial?
              p.mb-3 Una marca territorial es una estrategia integral que articula la identidad y la imagen del territorio con sus productos y servicios locales, con el propósito de fortalecer su reconocimiento, competitividad y capacidad de diferenciación. Bajo el enfoque OVOP, esta marca se construye a partir de recursos auténticos (como productos con características locales que generan orgullo comunitario y pueden aportar valor agregado), junto con los elementos culturales, históricos, naturales y productivos que definen la esencia de un territorio. 
              p.mb-0 Más que un logotipo, la marca territorial, desde el enfoque OVOP, articula valores, relatos, símbolos y capacidades locales para expresar la identidad del territorio y aquello que lo hace singular. Su fortalecimiento requiere apropiación social; por ello, es fundamental que sea reconocida y validada por la comunidad. De esta manera, la marca territorial puede contribuir a transformar la riqueza cultural, social y económica en valor compartido, fortalecer la cohesión y participación comunitaria y favorecer el reconocimiento de los atributos diferenciales del territorio.

      
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Funciones de la marca territorial
      
      p.mb-5(data-aos='fade-right') La marca territorial cumple siete funciones fundamentales, que la convierten en una herramienta estratégica de desarrollo:

      .titulo-sexto.color-acento-botones(data-aos='fade-right')
        p.mb-0  #[b Tabla 1.] Funciones de la marca territorial
      .tabla-a.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th #[b Función]
              th #[b Descripción de cada función]
          tbody
            tr
              td #[b Diferenciación]
              td Permite distinguir al territorio frente a otros mediante atributos únicos culturales, naturales, productivos o simbólicos, facilitando su posicionamiento competitivo.
            tr
              td #[b Identificación y cohesión]
              td Unifica a la comunidad alrededor de valores, símbolos e historias compartidas, fortaleciendo el sentido de pertenencia, orgullo, autoestima colectiva y la acción comunitaria.
            tr
              td #[b Promesa de valor]
              td Comunica lo que el territorio ofrece y cómo desea ser percibido, orientando expectativas y generando confianza en visitantes, consumidores e inversionistas.
            tr
              td #[b Atracción]
              td Mejora la capacidad del territorio para atraer turismo, inversión, talento humano y oportunidades económicas, fortaleciendo su visibilidad externa.
            tr
              td #[b Posicionamiento y visibilidad]
              td Incrementa el reconocimiento del territorio en ámbitos regionales, nacionales e internacionales a través de estrategias de comunicación y elementos identitarios.
            tr
              td #[b Generación de valor económico y social]
              td Impulsa emprendimientos, dinamiza economías locales, promueve productos y servicios locales, y mejora la calidad de vida de la comunidad.
            tr
              td #[b Simplificación de decisiones]
              td Facilita al visitante o consumidor reconocer el territorio y elegirlo frente a otras opciones, reduciendo riesgos y acelerando decisiones de compra o visita.

      

      p.mb-5(data-aos='fade-right') Estas funciones permiten que la marca actúe como un tejido de identidad y transformación, más allá de lo visual, convirtiéndose en una fuerza social, cultural y económica.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elementos de la marca territorial

      .bloque-texto-g.bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.br-3.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/6.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column.br-4
          p.mb-3 Los elementos de una marca conforman el sistema visual, verbal y experiencial que permite identificar, diferenciar y comunicar la esencia de un producto, servicio o territorio. 
          p.mb-3 En el enfoque OVOP y en la construcción de marcas territoriales, estos elementos no solo cumplen una función estética, sino que reflejan la identidad, los valores, la cultura y los atributos simbólicos del territorio. 
          p.mb-0 Su coherencia y articulación permiten proyectar una imagen sólida, auténtica y reconocible tanto para los habitantes locales como para visitantes, consumidores e inversionistas.


      p.mb-5(data-aos='fade-right') La marca territorial se construye a partir de elementos que permiten identificar, diferenciar y comunicar los atributos propios del territorio. A continuación, se presentan sus principales elementos:

      .titulo-sexto.color-acento-botones(data-aos='fade-right')
        p.mb-0  #[b Tabla 2.] Elementos de la marca territorial
      .tabla-a.mb-5(data-aos='fade-right')
          table
            thead
              tr
                th.wcus-1 #[b Elemento de marca]
                th #[b Descripción]
            tbody
              tr
                td #[b Nombre de marca]
                td Identificador verbal principal. Debe ser memorable y representar la esencia del territorio, sus valores o sus productos locales. En OVOP suele evocar elementos culturales o naturales distintivos.
              tr
                td #[b Logotipo]
                td Representación gráfica del nombre mediante tipografía diseñada. Facilita reconocimiento inmediato y fortalece la identidad visual.
              tr
                td #[b Isotipo]
                td Símbolo o ícono que representa la marca sin texto. En marca territorial incorpora paisajes, tesoros locales, símbolos culturales o iconografía propia del territorio.
              tr
                td #[b Imagotipo]
                td Combinación de logotipo e isotipo que puede funcionar junto o por separado, permitiendo adaptabilidad en diferentes soportes de comunicación.
              tr
                td #[b Isologo]
                td Integración inseparable de símbolo y texto en una sola figura visual, útil para mensajes compactos y de alta recordación.
              tr
                td #[b Eslogan]
                td Frase breve que expresa la promesa de valor o esencia de la marca. En territorios refuerza el relato colectivo y la aspiración de desarrollo.
              tr
                td #[b Narrativa o #[i storytelling]]
                td Relato que articula historia, valores, símbolos y aspiraciones del territorio. Conecta identidad cultural con productos y servicios locales.
              tr
                td #[b Promesa de valor]
                td Beneficio central que la marca ofrece al visitante o consumidor. Resume lo que la hace única frente a otras alternativas.
              tr
                td #[b Experiencia de marca]
                td Sensaciones y percepciones que viven las personas al interactuar con la marca. En OVOP se nutre del contacto con productos locales, cultura viva y hospitalidad territorial.


      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 ¿En qué se diferencian una marca y una marca territorial?

      p.mb-3(data-aos='fade-right') Comprender las diferencias entre una marca y una marca territorial permite reconocer las particularidades que adquiere la gestión de marca cuando se vincula con un territorio. En el enfoque OVOP Colombia, esta distinción es especialmente relevante, dado que la marca territorial se relaciona con la identidad, los recursos y tesoros locales, así como con la participación y articulación de los actores del territorio.
      p.mb-5(data-aos='fade-right') Para facilitar este análisis, la comparación se organiza en tres categorías clave: 

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t1/7.svg')
            .tarjeta.bg-color-3
              .p-4
                h4.text-center Naturaleza
        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t1/8.svg')
            .tarjeta.bg-color-3
              .p-4
                h4.text-center Identidad y percepción
        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t1/9.svg')
            .tarjeta.bg-color-3
              .p-4
                h4.text-center Gobernanza y participación

      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/10.png')
        .col-sm-12.col-lg-9
          .row.justify-content-center.mb-3
            .col-sm-12.col-lg-5.d-none.d-lg-block.px-0
              img(src='@/assets/curso/temas/t1/11.svg')
            .col-sm-12.col-lg-7.px-0.bg-color-4
              .p-4
                p.mb-3 Estas categorías permiten reconocer:
                ul.lista-ul--color.mb-3
                  li.d-flex
                    i.fas.fa-cus
                    p.mb-0 Qué representa cada tipo de marca.
                  li.d-flex
                    i.fas.fa-cus
                    p.mb-0 Cómo se configura su identidad.
                  li.d-flex.mb-0
                    i.fas.fa-cus
                    p.mb-0 De qué manera intervienen los diferentes actores en su gestión.
                p.mb-0 Su comprensión aporta elementos conceptuales para el posterior diagnóstico de la marca territorial.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Naturaleza de la marca y la marca territorial
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/12.png')
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/13.svg')
              .col-sm-12.col-lg-10
                  p.mb-0 Esta categoría permite diferenciar ambos conceptos a partir de lo que representan y de su alcance; mientras una marca se orienta a identificar y diferenciar productos, servicios u organizaciones, la marca territorial se vincula con un lugar y con los atributos culturales, naturales, sociales y productivos que lo caracterizan. 
            p.mb-0  Desde el enfoque OVOP Colombia, esta distinción permite comprender que la marca territorial integra elementos propios del territorio, sus recursos y tesoros locales, así como las particularidades que conforman su identidad.


      .titulo-sexto.color-acento-botones(data-aos='fade-right')
        p.mb-0  #[b Tabla 3.] Naturaleza de la marca vs. marca territorial
      .tabla-a.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th.wcus-1 #[b Criterio]
              th #[b Marca]
              th #[b Marca territorial]
          tbody
            tr
              td #[b Objeto]
              td Productos, servicios, empresas u organizaciones.
              td Ciudades, regiones, destinos u otros territorios, en relación con sus recursos, productos, servicios y experiencias.
            tr
              td #[b Naturaleza]
              td Sistema de identificación y significado que permite reconocer y diferenciar una oferta frente a otras.
              td Construcción colectiva asociada con la identidad y los atributos culturales, naturales, sociales y productivos de un territorio.
            tr
              td #[b Alcance]
              td Se concentra principalmente en la relación entre la oferta, su identidad y los públicos con los que interactúa.
              td Integra diferentes dimensiones del territorio y las relaciones entre sus recursos, actores, productos, servicios y experiencias.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Identidad y percepción: marca vs. marca territorial
      
      p.mb-5(data-aos='fade-right') Esta categoría permite analizar el origen de la identidad y la manera en que esta influye en la percepción de los diferentes públicos; mientras en una marca la identidad se define principalmente a partir del propósito, los valores y la estrategia de la organización, en una marca territorial se sustenta en elementos compartidos como la historia, la cultura, las tradiciones, los saberes, el paisaje, los símbolos y los imaginarios colectivos.


      .titulo-sexto.color-acento-botones(data-aos='fade-right')
        p.mb-0  #[b Tabla 4.] Identidad y percepción: marca vs. marca territorial
      .tabla-a.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th.wcus-1 #[b Criterio]
              th #[b Marca]
              th #[b Marca territorial]
          tbody
            tr
              td #[b Identidad (origen)]
              td Se define a partir de los valores, el propósito y la estrategia de la organización.
              td Se sustenta en la identidad territorial: historia, cultura, tradiciones, saberes, paisaje, símbolos e imaginarios colectivos.
            tr
              td #[b Percepción]
              td Se configura a partir de las experiencias y asociaciones que los públicos establecen con la marca.
              td Integra las percepciones de la comunidad y de los públicos externos respecto al territorio y sus atributos.
            tr
              td #[b Autenticidad]
              td Se relaciona con la coherencia entre la identidad definida por la organización y su actuación.
              td Se relaciona con la correspondencia entre la marca y los atributos, valores y expresiones reconocidos por la comunidad.



      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Gobernanza y participación: marca vs. marca territorial
      
      p.mb-5(data-aos='fade-right') Esta categoría permite diferenciar las formas de gestión y participación de los actores involucrados. La marca suele gestionarse desde una organización responsable de orientar su desarrollo y tomar decisiones. Por su parte, la marca territorial requiere procesos de articulación y participación entre comunidades, sectores productivos, instituciones y otros actores vinculados con el territorio.

      .titulo-sexto.color-acento-botones(data-aos='fade-right')
        p.mb-0  #[b Tabla 5.] Gobernanza y participación: marca vs. marca territorial
      .tabla-a.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th.wcus-1 #[b Criterio]
              th #[b Marca]
              th #[b Marca territorial]
          tbody
            tr
              td #[b Participación]
              td Las decisiones se concentran principalmente en la organización responsable de la marca, considerando las necesidades y percepciones de sus públicos.
              td Requiere participación y apropiación de los actores del territorio para favorecer su representatividad y sostenibilidad.
            tr
              td #[b Gestión]
              td Es orientada por la organización responsable de administrar y desarrollar la marca.
              td Requiere articulación y acuerdos entre actores públicos, privados, comunitarios y productivos vinculados con el territorio.
            tr
              td #[b Beneficios esperados]
              td Busca favorecer el reconocimiento, posicionamiento, diferenciación y preferencia de
              td Puede contribuir al reconocimiento territorial, la cohesión social, la dinamización económica, el fortalecimiento de la identidad y el desarrollo local.
      
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0.br-1(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/14.png')})`}"
        )
        .bloque-texto-g__texto.p-5.d-flex.flex-column.br-2
          p.mb-0 Estas diferencias evidencian que la gestión de una marca territorial trasciende los aspectos comerciales y comunicativos, al incorporar elementos propios de la identidad, la participación y las dinámicas del territorio. Reconocer estas particularidades permite contar con referentes para analizar su situación actual e identificar aspectos relevantes dentro del diagnóstico de la marca territorial.

      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2 Desarrollo endógeno en el enfoque OVOP
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/15.png', alt='')
        .col-sm-12.col-lg-7
            p.mb-4 El desarrollo endógeno se entiende como un proceso de transformación que nace desde dentro del territorio. Se fundamenta en las capacidades internas de la comunidad (sus recursos humanos, naturales, productivos, culturales y sociales) y en su habilidad para organizarlos, fortalecerlos y proyectarlos hacia un bienestar colectivo. A diferencia de los modelos dependientes de factores externos, el desarrollo endógeno propone que el territorio se active desde su propia esencia: sus saberes, prácticas, creatividad y tejido social.
            p.mb-0 Este enfoque convierte a las personas y a sus organizaciones en protagonistas del cambio territorial. Desde esta mirada, el valor de lo local se transforma en una fuerza estratégica que impulsa la innovación, la cohesión social y la resiliencia económica. Tal como sostiene Vaca López (2016), la cultura y los referentes identitarios se vuelven motores de desarrollo: son la “semilla” desde la cual se proyecta el territorio y se construye su narrativa.
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Principios del enfoque OVOP

      p.mb-5(data-aos='fade-right') El enfoque OVOP Colombia traduce los fundamentos del desarrollo endógeno en una metodología práctica que fortalece las capacidades locales y promueve el aprovechamiento de los recursos y potencialidades del territorio. Este enfoque se sustenta en tres principios orientadores: desarrollo del recurso humano; pensar global, actuar local; y autogestión y creatividad (SENA & JICA, 2025b).

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-6.col-lg-4.mb-cus
          .tarjeta--boton.color-primario.p-4.hcus-1
            .row.justify-content-center.my-4
              .col-4
                figure
                  img(src='@/assets/curso/temas/t1/16.svg')
            h3.text-center Desarrollo del recurso humano
            p.text-center.mb-0 Fortalece las capacidades técnicas, creativas y de liderazgo de las personas para promover su participación en los procesos de desarrollo comunitario.
        .col-sm-6.col-lg-4.mb-cus
          .tarjeta--boton.color-primario.p-4.hcus-1
            .row.justify-content-center.my-4
              .col-4
                figure
                  img(src='@/assets/curso/temas/t1/17.svg')
            h3.text-center Pensar global, actuar local
            p.text-center.mb-0 Promueve el aprovechamiento de la identidad, los recursos y la autenticidad del territorio para generar propuestas con calidad y proyección hacia mercados más amplios.
        .col-sm-6.col-lg-4.mb-cus
          .tarjeta--boton.color-primario.p-4.hcus-1
            .row.justify-content-center.my-4
              .col-4
                figure
                  img(src='@/assets/curso/temas/t1/18.svg')
            h3.text-center Autogestión y creatividad
            p.text-center.mb-0 Impulsa procesos participativos, innovadores y sostenibles, liderados por la comunidad a partir de sus conocimientos, capacidades y recursos locales.

      p.mb-3(data-aos='fade-right') Estos principios fortalecen el sentido de pertenencia, la cooperación y la capacidad de las comunidades para generar iniciativas desde el territorio. En el contexto de la marca territorial, el enfoque OVOP permite comprender que el valor no reside únicamente en los productos, servicios o experiencias ofrecidos, sino también en la identidad, la historia, los saberes y la comunidad que los hacen posibles. Para fortalecer la comprensión del enfoque OVOP y su aporte al desarrollo territorial, le invitamos a consultar el siguiente recurso audiovisual, en el que podrá profundizar en sus principios y aplicación.

      p.mb-5(data-aos='fade-right') Para fortalecer la comprensión del enfoque OVOP y su aporte al desarrollo territorial, le invitamos a consultar el siguiente recurso audiovisual, en el que podrá profundizar en sus principios y aplicación.


      .row.justify-content-center.align-items-center(data-aos='fade-right')         
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/AIVSLwTOhcc?si=6Ff7DHEVAMaoLqIn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)

  </template>

<script>
export default {
  name: 'Tema1',
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
