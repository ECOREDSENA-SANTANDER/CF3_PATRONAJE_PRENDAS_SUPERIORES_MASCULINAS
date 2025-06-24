<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Variaciones de modelos masculinos


    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/1.jpg')})`}")
      .bloque-texto-g__texto.p-4.p-lg-5
        h4.subt3.mb-0 Variantes de básicos superiores masculinos 
        br
        br
        p.mb-0 Partiendo de los patrones básicos de la camisa clásica o #[em slim fit] masculina, se pueden aplicar modificaciones para generar diferentes estilos desde el diseño.
        br
        br
        p.mb-0 Para profundizar en los conceptos y detalles trabajados en el trazo de camisas, se hará el análisis de diferentes diseños desde la figura de un diseño y dibujo plano, con el fin de tener referencias visuales de lo que se va trabajando, se tendrán varias imágenes de referencia, en este punto y con la firme intención de afianzar cada vez más el conocimiento, se hará o trabajará todo sobre análisis de proporciones.

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-5.col-md-6.mb-4.mb-md-0
        .bg-10.tarjeta.h-100.d-flex.align-items-center.p-3.p-lg-4
          p.mb-0 Las proporciones son medidas, se obtienen de una figura, prototipo físico, ficha técnica, dibujo plano o diseño, que al hacer un paralelo con los básicos o moldes bases de la línea, silueta o talla que se esté trabajando, permiten obtener medidas o dimensiones de referencia para el desarrollo o trazo del molde correspondiente al diseño. Si bien en ocasiones anteriores se han desarrollado ejercicios sobre análisis de proporciones, es importante resaltar que las medidas y el análisis de proporciones varía de acuerdo al tamaño, diseño, impresión, dibujo, básico y sistema de medida, las referencias implementadas son solo ejemplos detallados de cómo y de qué manera se debe implementar el desarrollo.
      .col-lg-3.d-none.d-lg-block
        .bg-8.deco.px-lg-5
          img.px-lg-2(src='@/assets/curso/temas/t3/2.svg', alt='')
      .col-lg-4.col-md-6
        img.mb-4.w-85(src='@/assets/curso/temas/t3/3.svg', alt='')
        p La finalidad del ejercicio es poder comparar de qué manera se puede implementar el básico llevándolo hacia diferentes tipos de diseño, bajo una misma tipología.
        p Cuando se empieza a trabajar el trazo de prendas, desde los básicos, los básicos siempre deben ir alineados o aplomados sobre una línea base de construcción, en prendas superiores la línea de aplome o línea base será la línea de profundidad de sisa.

    .tarjeta.color-primario.p-3.mb-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/t2/cta1.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Trazo prendas superiores - camisa
              p.mb-0 Allí encontrará la interpretación de estilos de camisas partiendo de bases superiores masculinas.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="('https://youtu.be/CxwJTRQh-aY')" target="_blank")
                span Ir al sitio
                i.fas.fa-circle-play

    p.mb-4 Como complemento a la información expuesta, se detallan los planos de patronaje de básicas masculinas; camiseta y/o camisilla en las siguientes figuras:

    .row.bgcc-1.align-items-center.p-2.p-md-3.mb-lg-2.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-4
                h5 Figura 15.
                span Trazo camiseta masculina básica delantero
              .row.justify-content-center.mb-3
                .col-lg-8.col-md-8.col-12
                  figure.mb-3.mb-lg-0
                    img(src='@/assets/curso/temas/t3/fig15.svg', alt='Molde técnico para prenda superior sin mangas, ajustada a partir de un patrón base. Se especifican ajustes en escote y sisa: se bajan 2 cm en escote delantero, 2.5 cm en hombro y se proyecta una curva que se entra 0.5 cm en la sisa. Las distancias de referencia en hombro y sisa son de 14 cm, y se indican los puntos de entrada en curva para un mejor calce. El largo de la prenda corresponde a la altura de cadera más 8 cm, con una línea base recta en el inferior. El trazo incluye líneas punteadas para mostrar modificaciones sobre el patrón original.')
                  figcaption.d-block.d-lg-none Fuente: SENA, (2025)
            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-4
                h5 Figura 16.
                span Trazo camiseta masculina básica posterior
              .row.justify-content-center.mb-3
                .col-lg-8.col-md-8.col-12
                  figure.mb-3.mb-lg-0
                    img.px-lg-3(src='@/assets/curso/temas/t3/fig16.svg', alt='Molde técnico posterior de prenda superior sin mangas. Contiene escote curvo en la parte superior, hombro inclinado, sisa ajustada con entrada en curva y pinza lateral ubicada bajo la sisa. El largo se extiende por debajo de la cadera. Incluye anotaciones numéricas que marcan medidas y ajustes.')
                  figcaption.d-block.d-lg-none Fuente: SENA, (2025)
    
    .row.justify-content-center.d-none.d-lg-flex.mb-5
      .col-lg-6
        figcaption Fuente: SENA, (2025)
      .col-lg-6
        figcaption Fuente: SENA, (2025)

    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla 10.
      span Pasos para el trazo de la camiseta delantero
    .tabla-a.color-acento-botones.mb-5(data-aos='fade')
      table.table-mpad(alt="Tabla con nueve pasos para transformar una base de corpiño masculino. Cada paso incluye la acción específica, medidas aproximadas en centímetros y una recomendación técnica. Las instrucciones abarcan extensiones, descensos, entradas, trazado de curvas y determinación del largo total del cuerpo. Se indican ajustes en hombros, escote, sisa y costados. Las recomendaciones destacan el uso de herramientas como regla recta y curvígrafo, así como la importancia de mantener simetría, proporción y fluidez en las líneas del trazo.")
        thead.bg-3
          tr
            th.w-85 Paso
            th Acción a realizar
            th Medidas
            th Recomendación técnica
        tbody
          tr
            td.fw-bold 1
            td Extender la línea del hombro desde el escote hacia afuera.
            td 2,5 cm.
            td Utilizar regla recta para prolongar el hombro en línea continua desde la inclinación original.
          tr
            td.fw-bold 2
            td Desde el nuevo extremo del hombro, bajar una línea vertical hacia el escote.
            td 2,5 cm.
            td Asegurarse de que esta bajada sea perpendicular al hombro para mantener simetría en ambos lados.
          tr
            td.fw-bold 3
            td Desde el centro delantero, entrar hacia la derecha sobre la línea del escote base y luego subir.
            td Entrar 2,5 cm y subir 2,5 cm.
            td Marcar bien ambos puntos para luego trazar una curva fluida que conecte con el hombro descendido.
          tr
            td.fw-bold 4
            td Trazar la nueva curva del escote uniendo los dos puntos anteriores con una línea curva suave.
            td ——
            td Usar curvigrafo o mano alzada firme; evitar ángulos rectos o trazos quebrados.
          tr
            td.fw-bold 5
            td Prolongar desde el extremo del nuevo hombro una línea horizontal para ubicar el nuevo punto alto de la sisa.
            td 2,5 cm hacia afuera.
            td Trazar con precisión para mantener la proporción entre hombro y curva de sisa.
          tr
            td.fw-bold 6
            td Bajar desde el vértice original de la sisa base y entrar hacia el cuerpo.
            td Bajar 1,5 cm y entrar 2,5 cm.
            td Marcar ambos puntos y verificar su ubicación antes de unir con curva.
          tr
            td.fw-bold 7
            td Unir los dos puntos anteriores (punto alto y punto bajo de la sisa modificada) con una curva continua.
            td ——
            td Usar curvigrafo para mantener armonía entre la nueva sisa y el contorno del cuerpo.
          tr
            td.fw-bold 8
            td Entrar 0,5 cm en la línea lateral del cuerpo y formar una ligera curva en el costado.
            td Entrar 0,5 cm.
            td Esta curva debe ser suave para mejorar el ajuste sin alterar el equilibrio estructural.
          tr
            td.fw-bold 9
            td Determinar el largo total del cuerpo desde la línea de cintura base.
            td Altura de cadera + 8 cm.
            td Medir desde el punto de cintura hacia abajo para asegurar un largo adecuado a la prenda final.

    .subt2.mb-4(data-aos="fade")
      h3.mb-0 Trazo de la camiseta posterior

    .bg-deg1.p-3.mb-4(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-lg-8
          .bg-white.p-4.px-lg-5
            ul.lista-ul--color.fa-lista
              li
                i.fas.fa-circle-chevron-right
                span.mb-0 Trazar un rectángulo base con el ancho (¼ del busto + holgura) y el largo total.
              li
                i.fas.fa-circle-chevron-right
                span.mb-0 Dibujar el escote posterior recto y poco profundo.
              li
                i.fas.fa-circle-chevron-right
                span.mb-0 Marcar la caída y el ancho del hombro.
              li
                i.fas.fa-circle-chevron-right
                span.mb-0 Trazar la sisa posterior con una curva suave.
              li
                i.fas.fa-circle-chevron-right
                span.mb-0 Definir las alturas de cintura y cadera, si el diseño lo requiere.
              li
                i.fas.fa-circle-chevron-right
                span.mb-0 Unir la sisa con el bajo por el costado.
              li
                i.fas.fa-circle-chevron-right
                span.mb-0 Añadir márgenes de costura y dobladillos según el tipo de confección.
        .col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/4.png', alt='')

    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla 11.
      span Pasos del trazo de la camiseta posterior
    .tabla-a.color-acento-botones.mb-4(data-aos='fade')
      table.table-mpad(alt="Tabla con nueve pasos para realizar el trazo posterior de una camiseta. Cada paso describe una acción específica acompañada de medidas en centímetros y recomendaciones técnicas. Las acciones incluyen proyecciones del hombro, ajustes en el escote, redefinición de la sisa, trazado de curvas laterales y determinación del largo total. Las recomendaciones destacan la importancia de conservar la armonía estructural, confirmar ángulos con escuadra, y utilizar herramientas de trazo como el curvígrafo para mantener continuidad y proporción anatómica en el diseño del patrón.")
        caption Fuente: SENA, (2025)
        thead.bg-3
          tr
            th.w-85 Paso
            th Acción a realizar
            th Medidas
            th Recomendación técnica
        tbody
          tr
            td.fw-bold 1
            td Extender la línea del hombro desde el escote hacia afuera.
            td 2,5 cm.
            td Mantener la misma inclinación del hombro original para asegurar armonía estructural.
          tr
            td.fw-bold 2
            td Desde el nuevo punto final del hombro, bajar en línea recta perpendicular hacia el escote.
            td 2,5 cm.
            td Confirmar la perpendicularidad con escuadra o ángulo de 90°.
          tr
            td.fw-bold 3
            td Desde el centro delantero, entrar sobre la línea del escote base y luego subir.
            td Entrar 2,5 cm y subir 2,5 cm.
            td Marcar con precisión ambos puntos antes de trazar la curva del nuevo escote.
          tr
            td.fw-bold 4
            td Unir con curva suave el punto de subida con el extremo del hombro descendido para formar el nuevo escote.
            td ——
            td Usar curvigrafo o trazo fluido para evitar quiebres.
          tr
            td.fw-bold 5
            td Prolongar una línea horizontal desde el nuevo hombro hacia el costado para encontrar el nuevo punto de sisa.
            td 2 cm.
            td Esta nueva referencia ajusta el ancho de la sisa. Revisar que mantenga relación con el escote bajado.
          tr
            td.fw-bold 6
            td Desde la sisa original, bajar y entrar para redefinir el quiebre de la nueva sisa.
            td Bajar 1,5 cm y entrar 2,5 cm.
            td Estos puntos determinan el volumen y caída de la sisa; deben ubicarse con exactitud.
          tr
            td.fw-bold 7
            td Unir el punto superior e inferior de la nueva sisa mediante una curva armónica.
            td ——
            td Trazar con curvigrafo respetando el contorno anatómico.
          tr
            td.fw-bold 8
            td Entrar 0,5 cm en la línea del costado bajo el busto y suavizar con curva hacia la línea lateral.
            td Entrar 0,5 cm.
            td Esta curva estiliza la prenda. Evitar ángulos rectos al conectarla con el costado inferior.
          tr
            td.fw-bold 9
            td Determinar el nuevo largo del cuerpo desde la cintura hacia abajo.
            td Altura de cadera + 10 cm.
            td Medir con regla larga en línea recta desde la cintura hasta el nuevo punto final.

    .row.bgcc-1.align-items-center.p-2.p-md-3.mb-lg-2.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-4
                h5 Figura 17.
                span Trazo de la camisilla delantero
              .row.justify-content-center.mb-3
                .col-lg-7.col-md-7.col-10
                  figure.mb-3.mb-lg-0
                    img(src='@/assets/curso/temas/t3/fig17.svg', alt='Molde técnico delantero de prenda superior sin mangas. Incluye escote curvo profundo, hombro modificado con una nueva línea inclinada, sisa con ajuste en curva y pinza lateral descendente. El largo supera la altura de cadera. Se señalan distancias y ajustes con medidas precisas en centímetros.')
                  figcaption.d-block.d-lg-none Fuente: SENA, (2025)
            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-4
                h5 Figura 18.
                span Trazo de la camisilla posterior
              .row.justify-content-center.mb-3
                .col-lg-9.col-md-8.col-11
                  figure.mb-3.mb-lg-0
                    img.px-lg-3(src='@/assets/curso/temas/t3/fig18.svg', alt='Molde técnico delantero de prenda superior sin mangas, adaptado con diseño de revoque en el escote y la sisa. Contiene escote redibujado con profundización y desplazamiento lateral, hombro con nueva inclinación, y sisa curvada con ajuste en el costado. La forma del revoque sigue el contorno del escote y la sisa, con separación marcada para corte o acabado decorativo. Incluye medidas específicas en centímetros y prolongación hasta debajo de la cadera.')
                  figcaption.d-block.d-lg-none Fuente: SENA, (2025)
    
    .row.justify-content-center.d-none.d-lg-flex.mb-5
      .col-lg-6
        figcaption Fuente: SENA, (2025)
      .col-lg-6
        figcaption Fuente: SENA, (2025)

    .subt2.mb-4(data-aos="fade")
      h3.mb-0 Pasos del trazo de la camisilla delantero y posterior 
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/5.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p El trazo de una camisilla básica requiere la construcción de dos piezas principales: delantero y posterior. Aunque comparten una base estructural similar, presentan diferencias clave en el escote, la sisa y el ajuste, las cuales responden a criterios anatómicos y funcionales del diseño.
        .row.align-items-center.mb-4
          .col-lg-2.col-md-2.col-3
            img.pe-lg-2(src='@/assets/curso/temas/t3/6.svg', alt='')
          .col-lg-10.col-md-10.col-9
            p.mb-0 En el delantero, se profundiza el escote, se adapta la sisa para mayor movilidad y puede reducirse ligeramente el largo. En el posterior, el escote es más cerrado y la caída del hombro es más controlada, manteniendo la estabilidad de la prenda.
        p A continuación, se detallan los pasos técnicos esenciales para el trazado correcto de ambas piezas, considerando proporciones, holguras, márgenes de costura y compatibilidad con el tejido.

    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla 12.
      span  Pasos del trazo de la camisilla delantero
    .tabla-a.color-acento-botones.mb-4(data-aos='fade')
      table.table-mpad(alt="Tabla con ocho pasos para el trazo delantero de una camisilla. Se indican acciones, medidas y recomendaciones para ajustar hombro, escote, sisa y largo total. Se sugiere usar regla y curvígrafo, manteniendo proporción y continuidad en las líneas del patrón.")
        caption Fuente: SENA, (2025)
        thead.bg-3
          tr
            th.w-85 Paso
            th Acción a realizar
            th Medidas
            th Recomendación técnica
        tbody
          tr
            td.fw-bold 1
            td Desde el escote, prolongar el hombro original hacia afuera y bajar una línea diagonal para formar uno nuevo.
            td Subir 1 cm. Salir 2 cm.
            td Trazar una nueva línea de hombro más inclinada con ayuda de una regla recta.
          tr
            td.fw-bold 2
            td Desde la línea del centro delantero, entrar sobre la línea de escote y luego subir.
            td Entrar 2 cm. Subir 2 cm.
            td Estos puntos definen el nuevo escote. Confirmar su ubicación antes de curvar.
          tr
            td.fw-bold 3
            td Unir el punto subido del escote con el nuevo extremo del hombro mediante una curva suave.
            td ___
            td Usar curvigrafo o mano firme para asegurar fluidez en el escote.
          tr
            td.fw-bold 4
            td Desde el vértice original de la sisa, medir hacia afuera en línea horizontal para ubicar el nuevo punto superior.
            td Salir 2 cm.
            td Mantener la proporción con el hombro extendido para generar armonía en la sisa.
          tr
            td.fw-bold 5
            td Desde la sisa base, bajar 1 cm y entrar 2 cm hacia el cuerpo para formar el nuevo punto de quiebre.
            td Bajar 1 cm. Entrar 2 cm.
            td Marcar bien ambos puntos antes de trazar la curva de sisa.
          tr
            td.fw-bold 6
            td Unir con una curva el nuevo punto superior e inferior de la sisa modificada.
            td ___
            td La curva debe ser continua y anatómica; evitar ángulos marcados.
          tr
            td.fw-bold 7
            td Desde la línea del hombro hacia la sisa, trazar una guía para formar una curva de ajuste.
            td Línea guía de conexión.
            td Esta línea suaviza el paso del hombro al contorno de sisa.
          tr
            td.fw-bold 8
            td Determinar el largo total del cuerpo bajando desde la línea de cintura.
            td Altura de cadera + 8 cm.
            td Medir en línea recta con escuadra para asegurar la verticalidad del trazo inferior.

    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla 13.
      span  Pasos del trazo de la camisilla posterior
    .tabla-a.color-acento-botones(data-aos='fade')
      table.table-mpad(alt="Tabla con nueve pasos para el trazo posterior de una camisilla. Incluye acciones con medidas y recomendaciones para ajustar hombro, escote, sisa, costado y largo. Se resalta el uso de escuadra y curvígrafo, priorizando proporción, continuidad anatómica y definición del diseño según el tipo de rebaje.")
        caption Fuente: SENA, (2025)
        thead.bg-3
          tr
            th.w-85 Paso
            th Acción a realizar
            th Medidas
            th Recomendación técnica
        tbody
          tr
            td.fw-bold 1
            td Desde el escote, prolongar el hombro original hacia afuera y trazar una nueva línea inclinada hacia abajo.
            td Subir 1 cm. Salir 2 cm.
            td Asegurar que la nueva línea mantenga una inclinación fluida con el escote ampliado.
          tr
            td.fw-bold 2
            td Desde el centro delantero, entrar y subir sobre la línea del escote para trazar una nueva forma.
            td Entrar 2 cm. Subir 2 cm.
            td Confirmar la escuadra desde el centro delantero al nuevo punto antes de trazar la curva.
          tr
            td.fw-bold 3
            td Unir el nuevo punto del escote con el extremo descendido del hombro con una curva suave.
            td ——
            td Usar curvigrafo para una transición limpia y anatómica.
          tr
            td.fw-bold 4
            td Desde el vértice de la sisa original, salir horizontalmente para marcar el nuevo punto superior de sisa.
            td Salir 2 cm.
            td Verificar simetría con el hombro extendido para mantener proporción.
          tr
            td.fw-bold 5
            td Bajar y entrar desde la sisa base para redefinir el punto inferior de la nueva curva.
            td Bajar 1 cm. Entrar 2 cm.
            td Marcar con precisión, ya que estos puntos controlan la amplitud y ajuste de la sisa.
          tr
            td.fw-bold 6
            td Unir con curva suave los puntos superior e inferior para trazar la nueva sisa modificada.
            td ——
            td Trazar de forma continua sin quiebres para conservar ergonomía.
          tr
            td.fw-bold 7
            td Medir sobre la línea lateral del cuerpo la profundidad del rebaje deseado según el diseño.
            td Variable recomendada: 4 cm hacia adentro.
            td Esta medida define el tipo de escote lateral o apertura. Debe ajustarse al diseño específico.
          tr
            td.fw-bold 8
            td Trazar una curva que conecte el nuevo escote con el punto de rebaje lateral.
            td ——
            td Utilizar curvigrafo para garantizar un trazo limpio, sin picos ni ángulos rectos.
          tr
            td.fw-bold 9
            td Determinar el largo total del cuerpo bajando desde la cintura base.
            td Altura de cadera + 8 cm.
            td Verificar verticalidad con regla larga. Esta medida define el largo final de la prenda.


    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1  Trazo de camiseta polo

    .bgi-1.mb-5(data-aos="fade-down")
      .row.justify-content-center
        .col-lg-5.grad-bloque
          img(src='@/assets/curso/temas/t3/7.jpg', alt='')
        .col-lg-7
          .h-100.d-flex.align-items-center.p-4.p-lg-5
            p.mb-0 El trazo de la camiseta tipo polo combina elementos del patronaje básico de camisetas con detalles estructurales que le aportan un estilo semiformal; se caracteriza por tener cuello tipo sport, tapeta delantera con abertura parcial y, en algunos casos, puños en las mangas. El desarrollo del patrón incluye el trazado de las piezas principales (espalda, delantero, manga y cuello), integrando holguras adecuadas para el confort y permitiendo ensamblajes limpios que se adapten tanto a procesos industriales como artesanales.

    .row.justify-content-center.mb-5
      .col-lg-6.col-md-10.mb-4.mb-lg-0(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 19.
          span Trazo de la camiseta polo delantero
        figure
          img(src='@/assets/curso/temas/t3/fig19.svg', alt='Molde técnico de prenda superior masculina con botonera central. La línea punteada representa la base de corpiño, sobre la cual se realizan transformaciones. Incluye escote redondo, hombros con inclinación y sisa ligeramente curva. En el centro se detalla la abertura de la botonera con medidas verticales y horizontales precisas. Los costados presentan entradas con leve entalle hacia la cintura. El largo total supera la altura de cadera y se indican márgenes de confección en hombros, sisas y laterales.')
      .col-lg-6.col-md-10.mb-4.mb-lg-0(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 20.
          span Trazo de la camiseta polo con botonera
        figure
          img(src='@/assets/curso/temas/t3/fig20.svg', alt='Molde técnico delantero de prenda superior masculina, construido a partir de una base de corpiño representada con línea punteada. Incluye escote redondo, hombros inclinados y sisas suavemente curvadas. En el centro se ubica una abertura vertical que indica la mitad del ancho de la botonera, con medidas registradas en centímetros. Los costados presentan entalle y el largo se extiende más allá de la cadera. Se marcan márgenes y referencias de ajuste en hombros, sisas y laterales.')

    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla 14.
      span Proceso del trazo del delantero de la camiseta polo
    .tabla-a.color-acento-botones.mb-5(data-aos='fade')
      table.table-mpad(alt="")
        thead.bg-3
          tr
            th.w-85 Paso
            th Acción a realizar
            th Medidas
            th Recomendación técnica
        tbody.text-left
          tr
            td 1
            td Reducir el ancho de hombros desde el escote hacia afuera en ambos lados.
            td 1,5 cm.
            td Medir con precisión para lograr simetría entre ambos hombros.
          tr
            td 2
            td Bajar una línea recta desde el nuevo hombro hacia la sisa.
            td 2,5 cm.
            td Esta bajada redefine la sisa; se recomienda trazar en línea recta antes de curvar.
          tr
            td 3
            td En el extremo de sisa, levantar en línea recta hacia arriba.
            td 1,5 cm.
            td Esta elevación compensa la profundidad del nuevo contorno de sisa.
          tr
            td 4
            td Redibujar la sisa uniendo suavemente los puntos obtenidos.
            td —
            td Usar curvigrafo para obtener un contorno continuo y anatómico.
          tr
            td 5
            td Medir desde el escote hacia abajo sobre el centro delantero para ubicar el largo de la abertura.
            td 13 cm.
            td Esta será la abertura frontal, ajustar según diseño deseado.
          tr
            td 6
            td Centrar el ancho de la abertura sobre la línea central del patrón.
            td 0,7 cm a cada lado del centro (1,4 cm total).
            td Asegurar que ambos lados queden equidistantes del centro para que abran correctamente.
          tr
            td 7
            td Dibujar el rectángulo que representa la abertura total.
            td 13 cm alto x 1,4 cm ancho.
            td El trazo debe ser limpio; usar escuadra para que los ángulos sean precisos.
          tr
            td 8
            td Marcar el centro superior del escote delantero, luego subir una curva levemente hacia ambos lados.
            td 1,5 cm. hacia afuera.
            td Esta curva da forma al escote más redondeado; trazar con suavidad.
          tr
            td 9
            td Agregar 1,5 cm en los costados hacia afuera, desde la base hasta la altura del busto.
            td 1,5 cm.
            td Este aumento amplía el cuerpo y ajusta la caída de la prenda sin mangas.
          tr
            td 10
            td Determinar el largo total desde la cintura hacia abajo.
            td Altura de cadera + 8 cm.
            td Medir con regla larga en línea recta, manteniendo la vertical desde el centro delantero.
    
    .row.justify-content-center
      .col-lg-6.mb-4(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 21.
          span Trazo de la martin gala
        .bg-11.tarjeta.p-4.p-lg-5
          figure
            img.mh-590(src='@/assets/curso/temas/t3/fig21.svg', alt='Molde rectangular correspondiente a una vista o pieza auxiliar de prenda superior. Presenta marcas en forma de triángulo a lo largo de los bordes superior e inferior, que indican los puntos donde deben realizarse piquetes. En el borde superior se describe una fórmula para calcular el ancho total, que incluye márgenes de costura, botonera y desahogo. En el lateral izquierdo se indica el cálculo para la altura, sumando valores de la prenda base.')
          .linea.my-4       
          .tarjeta.bgc-slider2.p-4.mb-3
            .tarjeta.bg-white.p-3
                SlyderA.p-4(tipo='b')
                  .row   
                    h4 Paso 1
                    p Se traza un rectángulo cuyo ancho corresponde a la suma de los siguientes valores:
                    p.mb-0 1 cm (costura) + ancho de botonera + 2 veces el ancho de la botonera + 2 cm de desahogo + 1 cm (costura).
                  .row   
                    h4 Paso 2
                    p Se determina el largo del rectángulo como:
                    p largo de la abertura + 4 cm (holgura) + 2 cm (superior).
                  .row   
                    h4 Paso 3
                    p Una vez definido el rectángulo, se reparten las marcas de frunce de manera uniforme en el borde superior e inferior, trazando pequeños triángulos o piquetes. Estos indican los puntos donde se deben realizar los pliegues o recogidos.
                  .row   
                    h4 Paso 4
                    p Se marca con precisión cada uno de los piquetes utilizando lápiz, tiza de sastre o corte superficial (sin exceder los 0,3 cm), según la técnica utilizada.
                  .row   
                    h4 Paso 5
                    p Se repasa el contorno con margen de costura de 1 cm en todos los lados para preparación de costura.
        .bg-8.tarjeta.p-4.px-lg-5.mtn-5
          h4.bg-color-primario.mb-4.w-fit.px-2.py-1 Nota
          ul.lista-ul--color.fa-lista.mb-0
            li
              i.fas.fa-circle-chevron-right
              span.mb-0 El desahogo de 2 cm permite holgura visual y funcional para que la botonera no se ajuste excesivamente.
            li
              i.fas.fa-circle-chevron-right
              span.mb-0 Es fundamental cortar la pieza con la dirección del hilo recto para evitar deformaciones en el fruncido final.
      .col-lg-6.mb-4(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 22.
          span Trazo martin gala 2
        .bg-11.tarjeta.p-4.p-lg-5
          figure
            img.mh-590(src='@/assets/curso/temas/t3/fig22.svg', alt='Molde técnico rectangular correspondiente a una vista de prenda superior. El lado más corto incluye una fórmula para calcular el ancho, basada en dos veces el valor de la botonera más 1.5 cm. El lado más largo indica la altura, que se obtiene sumando el largo de la prenda más márgenes de costura inferior y superior.')
          .linea.my-4
          .tarjeta.bgc-slider2.p-4.mb-3
            .tarjeta.bg-white.p-3
                SlyderA.p-4(tipo='b')
                  .row   
                    h4 Paso 1
                    p Se traza un rectángulo cuyo ancho equivale a la suma de:
                    p dos veces el ancho de la botonera + 1,5 cm.                    
                  .row   
                    h4 Paso 2
                    p El largo del rectángulo se determina a partir del largo de la abertura, al que se le suman:
                    p 4 cm para el margen inferior + 2 cm para el margen superior.
                  .row   
                    h4 Paso 3
                    p Se verifica que los lados estén escuadrados y los ángulos en 90°, asegurando que la pieza conserve su forma rectangular exacta.
                  .row   
                    h4 Paso 4
                    p Se puede remarcar con lápiz o marcador textil el contorno de la pieza para facilitar el corte y evitar confusiones con otras piezas similares.
                  .row   
                    h4 Paso 5
                    p Se añade margen de costura si el diseño lo requiere, generalmente 0,5 cm a 1 cm en cada lado, antes de proceder al corte.
        .bg-8.tarjeta.p-4.px-lg-5.mtn-5
          h4.bg-color-primario.mb-4.w-fit.px-2.py-1 Nota
          ul.lista-ul--color.fa-lista.mb-0
            li
              i.fas.fa-circle-chevron-right
              span.mb-0 Esta pieza puede utilizarse como refuerzo interno o como pliegue visible, dependiendo del diseño de la prenda.
            li
              i.fas.fa-circle-chevron-right
              span.mb-0 El valor de 1,5 cm añadido al ancho facilita la costura, el doblez o el cruce en el montaje de la botonera.


    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2  Camisa con estilo hindú

    .bloque-texto-g.color-acento-contenido.bg-5.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/8.jpg')})`}")
      .bloque-texto-g__texto.p-4.p-md-5
        p.mb-0 La camisa con estilo hindú se distingue por su diseño minimalista, cuello tipo mao (también llamado cuello mandarín), y una tapeta delantera corta con botones, que reemplaza la abotonadura completa típica de la camisa occidental. Su silueta suele ser recta o ligeramente amplia, lo que la hace cómoda y versátil tanto para uso casual como para contextos formales alternativos. 
        br
        br
        p.mb-0 El trazo del patrón incluye las piezas base (espalda, delantero, mangas, cuello y tapeta), y requiere especial atención en el diseño del escote y la forma del cuello, para conservar la esencia estética y funcional de este estilo tradicional.

    .row.justify-content-center.mb-3
      .col-lg-6.col-md-11.mb-4(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 23.
          span Trazo de la camisa hindú delantero
        figure.mb-2
          img(src='@/assets/curso/temas/t3/fig23.svg', alt='Molde técnico delantero de prenda superior masculina. Incluye escote redondeado, hombros inclinados, sisas curvas con ajuste lateral y pinzas que parten desde el busto hacia el centro. Se añaden líneas de transformación para bolsillo de parche central, con medidas específicas. La parte inferior está prolongada con una extensión rectangular que incorpora aberturas laterales señaladas y doblez de 3 cm. Se indican múltiples valores numéricos para cortes y ajustes estructurales.')
      .col-lg-6.col-md-11.mb-4(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 24.
          span Trazo del posterior de camisa hindú
        figure.mb-2
          img(src='@/assets/curso/temas/t3/fig24.svg', alt='Molde técnico lateral de prenda superior masculina, representado con silueta extendida hasta la altura de cadera más ocho centímetros. Incluye escote redondeado, hombro inclinado y costado con entalle. Se destaca una pinza lateral, una vista con trazo angular de 12 cm y un bolsillo con forma rectangular centrado en la parte superior del molde. En la parte inferior se indica una abertura lateral de 3 cm por 10 cm y ajustes en curva en el área de la sisa.')

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-8(data-aos='fade-right')
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 15.
          span Proceso del trazo del delantero de la camisa hindú 
        .tabla-a.color-acento-botones
          table.table-mpad.table-mmpad(alt="Tabla con ocho pasos para ampliar y ajustar el delantero de una prenda. Las acciones incluyen extensión del hombro, caída inicial, rediseño del escote, apertura central, ajuste en sisa, prolongación de costados y adición de pestañas para montaje. Se especifican medidas en centímetros para cada ajuste, priorizando precisión en el trazo y simetría estructural.")
            thead.bg-3
              tr
                th.w-85 Paso
                th Acción a realizar
                th.w-230 Medidas
            tbody.text-left
              tr
                td 1
                td Sobre la línea de hombro del básico, extender el hombro hacia afuera.
                td 3,5 cm.
              tr
                td 2
                td Desde el nuevo extremo del hombro, trazar una línea perpendicular hacia abajo para definir la caída inicial.
                td 3,5 cm.
              tr
                td 3
                td Marcar el margen de escote interior y prolongar la línea de hombro para ubicar el nuevo tope de escote.
                td 1 cm (margen).#[br] 6 cm (prolongación).
              tr
                td 4
                td Dibujar la curva del escote delantero, iniciando 1,5 cm por debajo del punto medio del margen.
                td 1,5 cm de profundidad del escote.
              tr
                td 5
                td En el centro delantero, bajar la línea de abertura y abrir el ancho total de la misma.
                td 6 cm de altura. #[br]7 cm de ancho.
              tr
                td 6
                td Sobre la línea de sisa, entrar hacia el cuerpo para suavizar el contorno.
                td 0,5 cm (entrada).
              tr
                td 7
                td Prolongar en línea recta ambos costados hasta alcanzar el largo total de la prenda.
                td Altura de cadera + 8 cm
              tr
                td 8
                td Añadir en cada costado inferior una pestaña de unión para montaje.
                td 3 cm de altura. #[br]2 cm de ancho.
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t3/9.png', alt='')

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-8(data-aos='fade-right')
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 16.
          span Proceso del trazo del posterior de la camisa hindú
        .tabla-a.color-acento-botones
          table.table-mpad.table-mmpad(alt="Tabla con siete pasos para el trazo posterior de una camisa hindú. Se detallan acciones con medidas para definir refuerzos, escote, costados, pinzas y largo total. Incluye también la adición de una pestaña inferior. Se prioriza simetría, proporción y claridad en el diseño estructural.")
            thead.bg-3
              tr
                th.w-85 Paso
                th Acción a realizar
                th.w-230 Medida
            tbody.text-left
              tr
                td 1
                td Sobre el escote base delantero, dibujar la pieza de refuerzo de hombro (retazo naranja) con ligera inclinación descendente.
                td Largo 6 cm.
              tr
                td 2
                td Desde el extremo exterior de ese retazo, bajar verticalmente para ubicar el nuevo punto de unión hombro-escote.
                td Bajar 2 cm.
              tr
                td 3
                td Sobre la línea de sisa del básico, medir hacia adentro y marcar el punto de entrada del costado; luego bajar y suavizar con curva.
                td Entrar 3,5 cm. #[br]Bajar 2 cm. #[br]Entrada curva 0,5 cm.
              tr
                td 4
                td Desde el vértice del hombro, bajar por la lateral 12 cm para ubicar la línea de busto; desde ahí, marcar el origen del pincho.
                td Bajar 12. #[br]Pincho a 7 desde costado.
              tr
                td 5
                td Unir el punto de origen del pincho con el escote mediante dos líneas convergentes, formando el corte de busto.
                td Ancho de apertura del pincho 6 cm.
              tr
                td 6
                td Prolongar la línea del costado hasta el bajo de la prenda según la medida de cadera, y añadir 8 cm de caída adicional.
                td Altura de cadera + 8 cm.
              tr
                td 7
                td En el bajo lateral añadir un refuerzo (pestaña) rectangular para unión de forro o vista.
                td Alto 3 cm. #[br]Ancho 2 cm.
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t3/10.png', alt='')

    .row.bgcc-1.align-items-center.p-2.p-md-4.mb-5(data-aos="fade-down")
        .col-lg-12.col-12.px-lg-4
          .row.justify-content-center.align-items-center

            .row.justify-content-center.align-items-center
              .col-12
                .titulo-sexto.color-acento-contenido.mb-4
                  h5 Figura 25.
                  span Trazo del cuello de la camisa hindú
              .col-lg-10.mb-4
                figure
                  img(src='@/assets/curso/temas/t3/fig25.svg', alt='Pieza de molde correspondiente al cuello de una prenda superior masculina. La figura se extiende horizontalmente desde el escote de espalda hasta el escote delantero, presentando un contorno ligeramente curvo en la parte inferior y una inclinación ascendente hacia el extremo delantero. Incluye indicación de márgenes de costura de 1.5 cm en sus bordes y tres marcas circulares agrupadas que sirven como guía para la ubicación o ensamblaje.')

    .row.justify-content-center.align-items-end
      .col-lg-8(data-aos='fade-right')
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 17.
          span Proceso del trazo del cuello 
        .tabla-a.color-acento-botones
          table.table-mpad.table-mmpad(alt="Tabla con cinco pasos para el trazo del cuello. Se definen puntos de holgura en el escote y costado delantero, y se conectan con una curva continua. El trazo final se repasa con instrumento técnico, respetando un margen de 1,5 cm.")
            thead.bg-3
              tr
                th.w-85 Paso
                th Acción a realizar
                th.w-230 Medidas
            tbody.text-left
              tr
                td 1
                td Sobre la curva del escote delantero original, trazar una línea paralela hacia afuera.
                td #[em Offset] de 1,5 cm.
              tr
                td 2
                td En el extremo superior del costado delantero, medir perpendicularmente hacia afuera y marcar el punto de holgura.
                td 1,5 cm.
              tr
                td 3
                td En la base del costado delantero, medir verticalmente hacia afuera y marcar el punto de holgura.
                td 1,5 cm.
              tr
                td 4
                td Unir los tres nuevos puntos de holgura (escote, sisa alta y sisa baja) mediante una curva suave continua.
                td —
              tr
                td 5
                td Repasar todo el contorno modificado con lápiz duro o estilógrafo, definiendo el trazo final a 1,5 cm de holgura.
                td —
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t3/11.png', alt='')


    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3  Sudadera deportiva

    .bg-deg1.p-3.mb-4(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-lg-8
          .bg-white.p-4.px-lg-5
            p La sudadera deportiva es una prenda funcional diseñada para brindar comodidad, libertad de movimiento y protección térmica durante actividades físicas o de uso cotidiano. Su construcción incluye una silueta semiajustada, mangas ranglán o clásicas, puños y pretina en #[em rib] o elástico, y, en algunos diseños, bolsillos tipo canguro o cierre frontal. 
            p El trazo del patrón debe considerar el tipo de tejido (generalmente punto o algodón perchado), las holguras necesarias para el confort, y los refuerzos en zonas de mayor tensión. La prenda combina criterios de ergonomía, resistencia y estilo deportivo.
        .col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/12.png', alt='')

    .row.bgcc-1.align-items-center.p-2.p-md-4.mb-5(data-aos="fade-down")
        .col-lg-12.col-12.px-lg-4
          .row.justify-content-center.align-items-center

            .row.justify-content-center.align-items-center
              .col-12
                .titulo-sexto.color-acento-contenido.mb-4
                  h5 Figura 26.
                  span Trazo de sudadera deportiva delantero
              .col-lg-9.mb-4
                figure
                  img(src='@/assets/curso/temas/t3/fig26.svg', alt='Molde técnico correspondiente a una prenda superior con manga tipo ranglán integrada al cuerpo. Se representa una vista lateral donde se combinan líneas rectas y curvas para definir cuello, hombro y sisa. Las líneas punteadas indican la base del cuerpo y el desarrollo de la manga. Incluye marcas de referencia como profundidad de escote, prolongaciones para holgura y medidas adicionales en puntos clave, como el ensanchamiento de la manga y los ajustes en la sisa. También se especifica el cálculo para el ancho del puño, sumando medio contorno más un centímetro de desahogo.')

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-8(data-aos='fade-right')
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 18.
          span Proceso del trazo sudadera delantero
        .tabla-a.color-acento-botones
          table.table-mpad.table-mmpad(alt="Tabla con seis pasos para el trazo delantero de una sudadera. Indica acciones para ampliar hombro, definir sisa, prolongar manga y suavizar contornos. Se incluyen medidas específicas para cada ajuste y se sugiere el uso de curvígrafo para un trazo anatómico y continuo.")
            thead.bg-3
              tr
                th.w-85 Paso
                th Acción a realizar
                th.w-260 Medida
            tbody.text-left
              tr
                td 1
                td Extender la línea de hombro desde el escote hacia afuera para dar más holgura.
                td 2 cm.
              tr
                td 2
                td Desde el nuevo extremo de hombro, bajar en perpendicular para definir la caída de la sisa modificada.
                td 2 cm.
              tr
                td 3
                td Sobre la copa de manga, prolongar la costura de hombro hasta el puño con la amplitud deseada.
                td ¼ del ancho de puño + 1 cm.
              tr
                td 4
                td Desde el vértice original de la sisa, entrar hacia el cuerpo y bajar para formar la nueva curva de sisa.
                td Entrar 2,5 cm. Bajar 1,5 cm.
              tr
                td 5
                td Unir esos dos puntos de sisa con una curva suave que enlace con la prolongación de hombro.
                td —
              tr
                td 6
                td Finalmente, repasar todo el contorno de la manga y sisa con lápiz duro o curvígrafo para obtener el trazo definitivo.
                td —
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t3/13.png', alt='')

    .row.bgcc-1.align-items-center.p-2.p-md-4.mb-5(data-aos="fade-down")
        .col-lg-12.col-12.px-lg-4
          .row.justify-content-center.align-items-center

            .row.justify-content-center.align-items-center
              .col-12
                .titulo-sexto.color-acento-contenido.mb-4
                  h5 Figura 27.
                  span Trazo de la parte posterior de sudadera
              .col-lg-8.mb-4
                figure
                  img(src='@/assets/curso/temas/t3/fig27.svg', alt='Composición que presenta dos moldes técnicos complementarios. A la izquierda, un molde de cuerpo superior con manga tipo ranglán incorporada, donde se aprecian líneas principales, líneas base punteadas y medidas que indican ensanches y profundidades en cuello, hombro y sisa. A la derecha, un rectángulo que representa el molde de una capucha construida a partir de proporciones relativas a la estatura, con líneas de escote delantero y posterior, margen inferior y marcas de doblez. La anotación inferior indica la necesidad de corregir la medida sobre la curva de escote para lograr un buen encaje en confección.')

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-8(data-aos='fade-right')
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 19.
          span Proceso del trazo del posterior de la sudadera
        .tabla-a.color-acento-botones
          table.table-mpad.table-mmpad(alt="Tabla con seis pasos para el trazo posterior de una sudadera. Incluye ajustes en hombro, sisa, costado y copa de manga. Se especifican medidas para extensión, desahogo y largo total. Se recomienda trazar líneas curvas y perpendiculares para lograr una estructura equilibrada.")
            thead.bg-3
              tr
                th.w-85 Paso
                th Acción a realizar
                th Medidas
            tbody.text-left
              tr
                td 1
                td Sobre el escote base, prolongar la línea de hombro hacia afuera.
                td + 6,0 de extensión + 1,0 de margen.
              tr
                td 2
                td Desde el nuevo extremo de hombro, bajar perpendicularmente para definir la toma de sisa modificada.
                td 2,0 cm.
              tr
                td 3
                td En el vértice original de la sisa, entrar hacia el centro del cuerpo y bajar para abrir la nueva curva de sisa.
                td Entrar 2,5 cm. Bajar 1,5 cm.
              tr
                td 4
                td Con línea curva, unir el punto de hombro bajado (paso 2) con el punto de sisa inferior (paso 3).
                td —
              tr
                td 5
                td Prolongar la costura de hombro modificado hasta formar la copa de manga, definiendo la caída de la manga.
                td ½ ancho de puño + 1,0 m de desahogo.
              tr
                td 6
                td Extender la línea de costado hasta el bajo de prenda.
                td Altura de cadera + 8,0 cm.
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t3/14.png', alt='')

    .row.justify-content-center.align-items-end
      .col-lg-8(data-aos='fade-right')
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 20.
          span Pasos del trazo de la capota
        .tabla-a.color-acento-botones
          table.table-mpad.table-mmpad(alt="Tabla con seis pasos para el trazo de una capota. Se detallan acciones para construir un rectángulo base, definir altura según estatura, modelar contorno trasero y frontal, ajustar costuras y holgura. Las medidas se expresan en proporciones y centímetros, asegurando ajuste anatómico y caída funcional.")
            thead.bg-3
              tr
                th.w-85 Paso
                th Acción a realizar
                th Medidas
            tbody.text-left
              tr
                td 1
                td Dibujar un rectángulo cuyo ancho sea la mitad del escote delantero + espalda.
                td ½ (escote delantero + espalda).
              tr
                td 2
                td Su altura corresponde a la quinta parte de la estatura de quien la usará.
                td 1/5 (estatura).
              tr
                td 3
                td Desde cada esquina superior, bajar 6,0 cm y entrar 6,0 cm hacia el interior para definir la forma trasera.
                td Bajar 6,0 cm. #[br]Entrar 6,0 cm.
              tr
                td 4
                td Sobre la cara interna del rectángulo, marcar a 3,0 cm de cada extremo superior para ajustar las costuras.
                td 3,0 cm desde cada lado.
              tr
                td 5
                td En la curva de escote (base inferior), corregir la holgura entrando 0,5 cm y prolongando 5,0 cm en los vértices.
                td Entrar 0,5 cm. #[br]Prolongar 5,0 cm.
              tr
                td 6
                td En el lateral derecho e izquierdo, bajar 10,0 cm para definir la caída frontal de la capota.
                td 10,0 cm.
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t3/15.png', alt='')


    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.4  Camisa manga corta y cuello deportivo

    .bg-1.mb-4
      .row.justify-content-center
        .col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/16.png', alt='')
        .col-lg-9
          p.p-4.mb-0 La camisa de manga corta provista de cuello deportivo, caracterizado por un pie abreviado y pala extendida en ángulo abierto, se integra de forma versátil en diversos contextos de indumentaria masculina. En el ámbito corporativo distendido (oficinas con código “#[em business casual]”), aporta una apariencia pulcra sin la rigidez del cuello camisero tradicional, especialmente cuando se combina con pantalones chinos o de sarga ligera. Dentro del sector turístico y hotelero, figura como parte del uniforme de recepción o servicio de alimentos en climas cálidos, gracias a su estructura ventilada y a la facilidad de mantenimiento de sus tejidos, generalmente popelinas de algodón poliéster o rayón texturizado, que preservan presencia impecable durante jornadas prolongadas. 
    
    p.mb-4 En entornos creativos y culturales (agencias de diseño, estudios audiovisuales), la misma prenda actúa como soporte para grafismos, bordados o bloques de color, reforzando la identidad visual de marca sin sacrificar comodidad ergonómica. Asimismo, en la moda #[em resort] y urbana se convierte en pieza clave de conjuntos veraniegos: combina con bermudas o #[em denim] ligero para actividades recreativas al aire libre, donde la caída relajada del cuello favorece la ventilación cervical. Su adopción en el #[em retail] especializado en #[em menswear] responde a la demanda de prendas transicionales, que cubren jornadas diurnas y eventos informales vespertinos, consolidando la camisa de manga corta con cuello deportivo como elemento híbrido entre el casual refinado y el funcional técnico.

    .row.justify-content-center.mb-3
      .col-lg-6.col-md-11.mb-4(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 28.
          span Trazo de patronaje de camisa 
        figure.mb-2
          img(src='@/assets/curso/temas/t3/fig28.svg', alt='Molde técnico para prenda superior dividido en delantero y trasero, con líneas guías y referencias anatómicas. En la parte delantera se trazan el centro, la línea de botonadura, el escote, la sisa, el hombro, el bolsillo y las líneas de cintura y cadera. En la parte trasera se indican el centro, el escote trasero, el hombro, la línea de canesú y la prolongación hacia el fondo de la prenda. Ambas mitades presentan ejes horizontales que organizan la estructura: línea de espalda, línea axilar, línea cintura, línea cadera y fondo. También se incluye el desarrollo de cuello, tapeta y pinza de entalle, configurando un molde base completo.')
        figcaption Fuente: Donnanno, (2016)
      .col-lg-6.col-md-11.mb-4(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 29.
          span Diseño de la camisa manga corta
        figure.mb-2
          img(src='@/assets/curso/temas/t3/fig29.svg', alt='Figura masculina de pie que lleva una camisa de estilo casual con cuello clásico, tapeta de botones, manga corta con doblez y bolsillo con tapeta en el lado izquierdo del pecho. El diseño incorpora un canesú recto en la parte superior delantera y trasera, generando un contraste visual. La prenda está metida dentro del pantalón y sujeta con cinturón. La postura y el trazo resaltan detalles estructurales de la prenda desde vista frontal y posterior.')
        figcaption Fuente: Donnanno, (2016)

    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla 21.
      span Pasos para la elaboración del patrón 
    .tabla-a.color-acento-botones.mb-5(data-aos='fade')
      table.table-mpad(alt="Tabla con trece operaciones para construir una camisa. Se incluyen instrucciones detalladas para crear el rectángulo base, trazar líneas estructurales, definir escotes, marcar hombros, dibujar sisa, modelar costados y entalles, colocar pinzas, canesú, bolsillos y configurar el bajo. También se añaden vistas, márgenes, simbología y se realiza verificación final del ajuste.")
        thead.bg-3
          tr
            th.w-85 #
            th Operación
            th Detalle técnico
        tbody.text-left
          tr
            td 1
            td Construir el rectángulo base
            td 
              ul.lista-ul.fa-lista.circle-lista.mb-0
                li.mb-1
                  i.fas.fa-circle
                  | Ancho = ½ pecho + holgura (clásico 4 cm/#[em slim] 2–3 cm).
                li.mb-1
                  i.fas.fa-circle
                  | Alto = largo total de la camisa.
                li.mb-1
                  i.fas.fa-circle
                  | El borde izquierdo es el centro delantero; el derecho, el centro espalda.
          tr
            td 2
            td Trazar líneas estructurales horizontales
            td Desde la esquina superior izquierda (PHC) hacia abajo:
              ul.lista-ul.fa-lista.circle-lista.mb-0
                li.mb-1
                  i.fas.fa-circle
                  | Línea de hombro (0 cm).
                li.mb-1
                  i.fas.fa-circle
                  | Línea de canesú (3 cm).
                li.mb-1
                  i.fas.fa-circle
                  | Línea de sisa (¼ pecho + 2 cm).
                li.mb-1
                  i.fas.fa-circle
                  | Línea de axila (igual a sisa).
                li.mb-1
                  i.fas.fa-circle
                  | Línea de cintura (aprox. ¼ alto total).
                li.mb-1
                  i.fas.fa-circle
                  | Línea de cadera (¼ alto total por debajo de cintura).
          tr
            td 3
            td Definir los escotes
            td 
              ul.lista-ul.fa-lista.circle-lista.mb-0
                li.mb-1
                  i.fas.fa-circle
                  | Trasero: 6 cm de ancho × 2 cm de profundidad.
                li.mb-1
                  i.fas.fa-circle
                  | Delantero: entrar 1 cm y descender 8 cm desde el punto alto de cuello; unir con curva suave al escote trasero.
          tr
            td 4
            td Marcar hombros
            td Desde el extremo del escote trazar la línea de hombro con caída de 2,5 cm; su longitud equivale a ½ ancho espalda. Repetir en delantero respetando la misma longitud.
          tr
            td 5
            td Dibujar la curva de sisa
            td 
              ul.lista-ul.fa-lista.circle-lista.mb-0
                li.mb-1
                  i.fas.fa-circle
                  | Sobre la línea de sisa medir ¼ ancho espalda desde el centro espalda y marcar.
                li.mb-1
                  i.fas.fa-circle
                  | Bajar 2 cm desde ese punto y conectar con curva continua al extremo del hombro.
                li.mb-1
                  i.fas.fa-circle
                  | En el delantero rebajar 0,5 cm adicionales en la curva para facilitar la movilidad.
          tr
            td 6
            td Plantear costados y entalles
            td Unir los puntos de sisa, cintura y cadera con ligera curva. Si se busca silueta #[em slim], desplazar la línea
          tr
            td 7
            td Trazar la pinza central
            td 
              ul.lista-ul.fa-lista.circle-lista.mb-0
                li.mb-1
                  i.fas.fa-circle
                  | Base = 2 cm sobre la línea de cintura.
                li.mb-1
                  i.fas.fa-circle
                  | Longitud = 14 cm (termina 2 cm por encima de la línea de sisa).
          tr
            td 8
            td Dividir y recortar el canesú
            td A 3 cm bajo la línea de hombro trazar horizontal completa. Esta pieza estabiliza la espalda y se prolonga hacia el delantero según el diseño.
          tr
            td 9
            td Posicionar el bolsillo
            td Rectángulo 13,5 × 14 cm. Su vértice superior queda a 3 cm por debajo de la línea de canesú y a 8 cm del centro delantero. Añadir márgenes de 1 cm y doblez superior de 2 cm.
          tr
            td 10
            td Configurar el bajo
            td 
              ul.lista-ul.fa-lista.circle-lista.mb-0
                li.mb-1
                  i.fas.fa-circle
                  | Curva del delantero: trazar ligera subida de 1 cm en el vértice.
                li.mb-1
                  i.fas.fa-circle
                  | Fondo trasero: prolongar 2 cm respecto al delantero; unir ambos con curva fluida.
                li.mb-1
                  i.fas.fa-circle
                  | Añadir 1,5 cm de margen para dobladillo.
          tr
            td 11
            td Insertar vistas y tapeta
            td 
              ul.lista-ul.fa-lista.circle-lista.mb-0
                li.mb-1
                  i.fas.fa-circle
                  | Sobre el centro delantero reservar 3 cm para la vista de botones (1,5 cm de doblez + 1,5 cm de margen).
                li.mb-1
                  i.fas.fa-circle
                  | Señalar piquetes de ojales cada 8–9 cm.
          tr
            td 12
            td Agregar simbología y márgenes
            td 
              ul.lista-ul.fa-lista.circle-lista.mb-0
                li.mb-1
                  i.fas.fa-circle
                  | 1 cm en hombros, costados, sisas y escotes.
                li.mb-1
                  i.fas.fa-circle
                  | 1,5 cm en dobladillo y vista.
                li.mb-1
                  i.fas.fa-circle
                  | Piquetes: delantero y ½ posterior de copa de manga; unión canesú-hombro; extremos de pinza.
                li.mb-1
                  i.fas.fa-circle
                  | Flechas de hilo paralelas a los centros de pieza.
          tr
            td 13
            td Verificación final
            td Comprobar que la curva de sisa exceda el perímetro del hueco del cuerpo en ≈ 2 % (embebido de manga) y que la longitud del canesú coincida en delantero y espalda.

    .row.justify-content-center.mb-3
      .col-lg-6.col-md-11.mb-4(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 30.
          span Trazo de manga corta
        figure.mb-2
          img(src='@/assets/curso/temas/t3/fig30.svg', alt='Molde técnico de manga dividida en dos zonas principales: delantera y trasera. En la parte superior se encuentra la copa, cuyo borde curvo se diferencia en copa delantera y copa trasera. La línea vertical central indica el centro del hombro, que desciende hasta el puño. Se marca también la línea del bíceps, que divide horizontalmente la manga en su parte superior. En la zona inferior se señala un margen para el dobladillo y la indicación de pliegue. La estructura permite identificar proporciones, ejes y puntos de montaje con el cuerpo de la prenda.')
        figcaption Fuente: Donnanno, (2016)
      .col-lg-6.col-md-11.mb-4(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 31.
          span Trazo de cuello deportivo
        figure.mb-2
          img(src='@/assets/curso/temas/t3/fig31.svg', alt='Molde técnico de cuello para prenda superior con indicaciones de montaje. La línea central vertical señala el eje de simetría donde se debe unir la pieza al cortar en tela doble. A cada lado se indican los puntos de hombro, que corresponden a las uniones con el escote delantero y trasero. La curva inferior representa el contorno del escote, mientras que la línea superior, en trazo discontinuo, marca el doblez que formará el cuello completo una vez ensamblado.')
        figcaption Fuente: Donnanno, (2016)

    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla 22.
      span Pasos para la elaboración del patrón de la manga
    .tabla-a.color-acento-botones.mb-5(data-aos='fade')
      table.table-mpad(alt="Tabla con trece pasos para el trazo de una manga. Incluye construcción del rectángulo guía, definición del eje, altura y curvatura de copa, largo, línea de codo, puño, holguras y dobleces. Se incorporan márgenes, simbología y verificación de embebido, con referencias específicas para asegurar ajuste y movilidad anatómica.")
        thead.bg-3
          tr
            th.w-85 Paso
            th.w-260 Operación
            th Detalle técnico
            th.w-230 Cotas de referencia*
        tbody.text-left
          tr
            td 1
            td Rectángulo guía
            td Dibujar un rectángulo ancho = ½ contorno bíceps + holgura (clásica + 6 cm/#[em slim] + 4 cm); alto provisional = largo de manga hasta la muñeca.
            td.text-center —
          tr
            td 2
            td Eje central
            td Trazar una línea vertical en el centro del rectángulo; servirá de centro hombro y de pliegue de simetría.
            td.text-center —
          tr
            td 3
            td Altura de copa
            td Sobre el eje marcar la línea de bíceps a una distancia = (contorno sisa ÷ 3) + 2 cm medida desde el borde superior del rectángulo.
            td.text-center 22–25 cm en camisas talla media.
          tr
            td 4
            td Anchuras de copa
            td Sobre la línea de bíceps, dividir el ancho total en cuatro partes. Elevar 1 cm en los cuartos externos; estos puntos definen la curvatura inicial de la copa.
            td.text-center —
          tr
            td 5
            td Curva de copa
            td Desde el vértice superior izquierdo (copa delantera) dibujar curva suave que pase por el punto elevado del primer cuarto; repetir en el lado derecho, levantando 0,5–1 cm más para la copa trasera (necesita mayor altura).
            td.text-center Diferencia copa trasera > delantera ≈ 0,5 cm.
          tr
            td 6
            td Marcado delantero/trasero
            td Señalar ¼ de la curva (lado delantero) con un piquete y ½ de la curva (lado trasero) con otro; estos puntos casarán con los piquetes equivalentes de la sisa del cuerpo.
            td.text-center —
          tr
            td 7
            td Longitud de manga
            td Desde la línea de bíceps, medir sobre el eje la distancia hasta el puño; generalmente igual al largo de brazo menos 1 cm de abertura vertical.
            td.text-center —
          tr
            td 8
            td Línea de codo
            td Entre bíceps y puño marcar la mitad; esta horizontal ayuda a verificar comodidad al flexionar.
            td.text-center —
          tr
            td 9
            td Puño
            td Trazar rectángulo complementario: largo = circunferencia muñeca + 5 cm (solapa) y alto desplegado = 7 cm (acabado 3,5 cm).
            td.text-center Plegar 3,5 cm desde borde.
          tr
            td 10
            td Holgura codo y costura lateral
            td En el lado trasero, añadir 1 cm extra en la línea de codo; conectar con una curva ligera hacia bíceps y puño, adelantando la costura 1–2 cm hacia el delantero para compensar la rotación natural del brazo.
            td.text-center —
          tr
            td 11
            td Marcado del pliegue para puño
            td Sobre la línea de unión manga-puño, indicar una pestaña de 3 cm (plegar) en el centro del eje; esto generará el fuelle que facilita el movimiento al abotonar.
            td.text-center 3 cm (plecar).
          tr
            td 12
            td Márgenes y simbología
            td Añadir 1 cm de margen en costados y copa; 0,7 cm en costura central del puño; marcar la dirección de hilo paralela al eje central.
            td.text-center —
          tr
            td 13
            td Verificación de embebido
            td La curva completa de la copa debe superar el perímetro de la sisa del cuerpo en ≈ 1,5–2 %, esa diferencia se embebe en la costura del hombro para que la manga asiente sin frunces visibles.
            td.text-center —

    .bg-1.tarjeta.mb-4(data-aos="fade-down")
      .row.justify-content-center
        .col-lg-9
          .d-flex.align-items-center.h-100.p-4
            p.mb-0 #[b Importante:] cotas de referencia* son medidas clave que se utilizan como puntos guía o valores estándar durante el trazo o construcción de un patrón. Estas cotas ayudan a verificar que las proporciones, longitudes o anchuras trazadas son correctas según el cuerpo humano, la talla o el diseño deseado.
        .col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/17.png', alt='')

    p.mb-5 A continuación, se detallan los pasos para el trazo del cuello deportivo:

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-9(data-aos='fade-right')
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 23.
          span Pasos del trazo del cuello
        .tabla-a.color-acento-botones
          table.table-mpad(alt="Tabla con siete pasos para el trazo del cuello. Incluye la toma de medidas base, construcción del rectángulo guía, ubicación del punto de hombro, diseño de curvas inferior y superior, ajustes técnicos finales y corte del patrón. Las indicaciones detallan proporciones, simetría y recomendaciones para lograr un acabado limpio y funcional.")
            thead.bg-3
              tr
                th.w-85 Paso
                th.w-260 Acción de patronaje
                th Indicaciones técnicas detalladas
            tbody.text-left
              tr
                td 1
                td Toma de medidas base
                td 
                  ul.lista-ul.fa-lista.circle-lista.mb-0
                    li.mb-1
                      i.fas.fa-circle
                      | Medir el contorno completo del escote delantero más el trasero.
                    li.mb-1
                      i.fas.fa-circle
                      | Determinar la altura del pie de cuello si corresponde.
                    li.mb-1
                      i.fas.fa-circle
                      | Definir el ancho o caída del cuello (promedio 5 – 7 cm).
                    li.mb-1
                      i.fas.fa-circle
                      | Registrar la distancia desde el centro delantero hasta el punto de hombro siguiendo la curva del escote.
              tr
                td 2
                td Trazado del rectángulo base
                td 
                  ul.lista-ul.fa-lista.circle-lista.mb-0
                    li.mb-1
                      i.fas.fa-circle
                      | Dibujar un rectángulo horizontal.
                    li.mb-1
                      i.fas.fa-circle
                      | Ancho: la mitad del contorno total del escote.
                    li.mb-1
                      i.fas.fa-circle
                      | Alto: el ancho decidido para el cuello (ejemplo: 6 cm).
                    li.mb-1
                      i.fas.fa-circle
                      | Señalar el centro delantero en el borde izquierdo, perpendicular a la base.
              tr
                td 3
                td Ubicación del punto de hombro
                td 
                  ul.lista-ul.fa-lista.circle-lista.mb-0
                    li.mb-1
                      i.fas.fa-circle
                      | Desde el centro delantero, medir hasta el punto de hombro a lo largo de la línea superior.
                    li.mb-1
                      i.fas.fa-circle
                      | Repetir la misma distancia sobre la línea inferior.
              tr
                td 4
                td Trazo de la curva inferior (línea de escote)
                td Unir el centro delantero con el punto de hombro mediante una curva suave. La curva representa la forma natural del escote delantero y trasero.
              tr
                td 5
                td Diseño de la forma superior del cuello
                td 
                  ul.lista-ul.fa-lista.circle-lista.mb-0
                    li.mb-1
                      i.fas.fa-circle
                      | Desde el centro delantero, elevar 0,5 – 1 cm.
                    li.mb-1
                      i.fas.fa-circle
                      | Dibujar una curva más amplia que la inferior hacia el borde derecho, pasando por el punto de hombro superior.
              tr
                td 6
                td Detalles técnicos finales
                td 
                  ul.lista-ul.fa-lista.circle-lista.mb-0
                    li.mb-1
                      i.fas.fa-circle
                      | Añadir 1 cm de margen de costura en todo el contorno.
                    li.mb-1
                      i.fas.fa-circle
                      | Marcar centro delantero, puntos de hombro y, si se corta en dos piezas, centro espalda.
              tr
                td 7
                td Corte del patrón
                td 
                  ul.lista-ul.fa-lista.circle-lista.mb-0
                    li.mb-1
                      i.fas.fa-circle
                      | Si la pieza es única: colocar el borde del centro delantero al doblez de la tela y cortar.
                    li.mb-1
                      i.fas.fa-circle
                      | Si incluye entretela: cortar una pieza en tela principal y otra en entretela.
                    li.mb-1
                      i.fas.fa-circle
                      | Para acabado limpio: cortar dos piezas en tela y unirlas como forro.
      .col-lg-3.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t3/18.png', alt='')

    .py-3

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-5.pe-lg-0.bg-1
        .h-100
          img.m-auto.w-200.mtn-10(src='@/assets/curso/temas/t3/19.png', alt='')
      .col-lg-7.ps-lg-0
        .bg-8.p-4.p-lg-5.h-100
          h4.mb-4.bg-color-primario.w-fit.px-2 Recomendaciones
          ul.lista-ul--color.fa-lista.mb-0
            li
              i.fas.fa-circle-chevron-right
              span.mb-0 Este tipo de cuello no lleva pie de cuello, por lo que descansa directamente sobre la prenda.
            li
              i.fas.fa-circle-chevron-right
              span.mb-0 Para mayor caída, use telas ligeras como algodón, lino o popelina.
            li.mb-0
              i.fas.fa-circle-chevron-right
              span.mb-0 Puede combinarlo con una vista interna en la prenda base para ocultar la costura del escote.


    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.5  Camisa con canesú adelante y atrás

    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla .
      span 
    .tabla-a.color-acento-botones.mb-5(data-aos='fade')
      table.table-mpad(alt="")
        thead.bg-3
          tr
            th 
        tbody.text-left
          tr
            td 

    .row.bgcc-1.align-items-center.p-2.p-md-4.mb-5(data-aos="fade-down")
        .col-lg-12.col-12.px-lg-4
          .row.justify-content-center.align-items-center

            .row.justify-content-center.align-items-center
              .col-12
                .titulo-sexto.color-acento-contenido.mb-4
                  h5 Figura 26.
                  span 
              .col-lg-10.mb-4
                figure
                  img(src='@/assets/curso/temas/t3/fig26.svg', alt='')



    Separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.6  Chaquetas

    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla .
      span 
    .tabla-a.color-acento-botones.mb-5(data-aos='fade')
      table.table-mpad(alt="")
        thead.bg-3
          tr
            th 
        tbody.text-left
          tr
            td 
    
    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla .
      span 
    .tabla-a.color-acento-botones.mb-5(data-aos='fade')
      table.table-mpad(alt="")
        thead.bg-3
          tr
            th 
        tbody.text-left
          tr
            td 



    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla .
      span 
    .tabla-a.color-acento-botones.mb-5(data-aos='fade')
      table.table-mpad(alt="")
        thead.bg-3
          tr
            th 
        tbody.text-left
          tr
            td 

          

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

<style lang="sass"></style>
