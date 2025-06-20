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
        p.mb-0 Partiendo de los patrones básicos de la camisa clásica o slim fit masculina, se pueden aplicar modificaciones para generar diferentes estilos desde el diseño.
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


    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3  Sudadera deportiva

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


    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.4  Camisa manga corta y cuello deportivo

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
