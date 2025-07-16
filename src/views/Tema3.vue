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
        p Las proporciones son medidas, se obtienen de una figura, prototipo físico, ficha técnica, dibujo plano o diseño, que al hacer un paralelo con los básicos o moldes bases de la línea, silueta o talla que se esté trabajando, permiten obtener medidas o dimensiones de referencia para el desarrollo o trazo del molde correspondiente al diseño. 
        .bg-10.tarjeta.p-3.p-lg-4
          p.mb-0 Si bien en ocasiones anteriores se han desarrollado ejercicios sobre análisis de proporciones, es importante resaltar que las medidas y el análisis de proporciones varía de acuerdo al tamaño, diseño, impresión, dibujo, básico y sistema de medida, las referencias implementadas son solo ejemplos detallados de cómo y de qué manera se debe implementar el desarrollo.
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
              h4.mb-1 Trazo de prendas superiores - camisa
              p.mb-0 Allí encontrará la interpretación de estilos de camisas partiendo de bases superiores masculinas.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="('https://youtu.be/JuuGDR01fhU')" target="_blank")
                span Ir al sitio
                i.fas.fa-circle-play

    p.mb-4 Como complemento a la información expuesta, se detallan los planos de patronaje de básicas masculinas; camiseta y/o camisilla en las siguientes figuras:
  
    .row.justify-content-center.mb-4
      .col-lg-6
        .bg-7.p-3.mb-2
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 15.
            span Trazo camiseta masculina básica delantero          
          .row.justify-content-center.mb-3        
            .col-lg-8.col-md-8.col-12
              figure.mb-3.mb-lg-0
                img(src='@/assets/curso/temas/t3/fig15.svg', alt='Molde técnico para prenda superior sin mangas, ajustada a partir de un patrón base. Se especifican ajustes en escote y sisa: se bajan 2 cm en escote delantero, 2.5 cm en hombro y se proyecta una curva que se entra 0.5 cm en la sisa. Las distancias de referencia en hombro y sisa son de 14 cm, y se indican los puntos de entrada en curva para un mejor calce. El largo de la prenda corresponde a la altura de cadera más 8 cm, con una línea base recta en el inferior. El trazo incluye líneas punteadas para mostrar modificaciones sobre el patrón original.')
          figcaption Fuente: SENA, (2025)
      .col-lg-6
        .bg-7.p-3.mb-2
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 16.
            span Trazo camiseta masculina básica posterior          
          .row.justify-content-center.mb-3
            .col-lg-8.col-md-8.col-12
              figure.mb-3.mb-lg-0
                img.px-lg-2(src='@/assets/curso/temas/t3/fig16.svg', alt='Molde técnico posterior de prenda superior sin mangas. Contiene escote curvo en la parte superior, hombro inclinado, sisa ajustada con entrada en curva y pinza lateral ubicada bajo la sisa. El largo se extiende por debajo de la cadera. Incluye anotaciones numéricas que marcan medidas y ajustes.')
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
            td 1
            td Extender la línea del hombro desde el escote hacia afuera.
            td 2,5 cm.
            td Utilizar regla recta para prolongar el hombro en línea continua desde la inclinación original.
          tr
            td 2
            td Desde el nuevo extremo del hombro, bajar una línea vertical hacia el escote.
            td 2,5 cm.
            td Asegurarse de que esta bajada sea perpendicular al hombro para mantener simetría en ambos lados.
          tr
            td 3
            td Desde el centro delantero, entrar hacia la derecha sobre la línea del escote base y luego subir.
            td Entrar 2,5 cm y subir 2,5 cm.
            td Marcar bien ambos puntos para luego trazar una curva fluida que conecte con el hombro descendido.
          tr
            td 4
            td Trazar la nueva curva del escote uniendo los dos puntos anteriores con una línea curva suave.
            td ——
            td Usar curvigrafo o mano alzada firme; evitar ángulos rectos o trazos quebrados.
          tr
            td 5
            td Prolongar desde el extremo del nuevo hombro una línea horizontal para ubicar el nuevo punto alto de la sisa.
            td 2,5 cm hacia afuera.
            td Trazar con precisión para mantener la proporción entre hombro y curva de sisa.
          tr
            td 6
            td Bajar desde el vértice original de la sisa base y entrar hacia el cuerpo.
            td Bajar 1,5 cm y entrar 2,5 cm.
            td Marcar ambos puntos y verificar su ubicación antes de unir con curva.
          tr
            td 7
            td Unir los dos puntos anteriores (punto alto y punto bajo de la sisa modificada) con una curva continua.
            td ——
            td Usar curvigrafo para mantener armonía entre la nueva sisa y el contorno del cuerpo.
          tr
            td 8
            td Entrar 0,5 cm en la línea lateral del cuerpo y formar una ligera curva en el costado.
            td Entrar 0,5 cm.
            td Esta curva debe ser suave para mejorar el ajuste sin alterar el equilibrio estructural.
          tr
            td 9
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
            td 1
            td Extender la línea del hombro desde el escote hacia afuera.
            td 2,5 cm.
            td Mantener la misma inclinación del hombro original para asegurar armonía estructural.
          tr
            td 2
            td Desde el nuevo punto final del hombro, bajar en línea recta perpendicular hacia el escote.
            td 2,5 cm.
            td Confirmar la perpendicularidad con escuadra o ángulo de 90°.
          tr
            td 3
            td Desde el centro delantero, entrar sobre la línea del escote base y luego subir.
            td Entrar 2,5 cm.  #[br]Subir 2,5 cm.
            td Marcar con precisión ambos puntos antes de trazar la curva del nuevo escote.
          tr
            td 4
            td Unir con curva suave el punto de subida con el extremo del hombro descendido para formar el nuevo escote.
            td ——
            td Usar curvigrafo o trazo fluido para evitar quiebres.
          tr
            td 5
            td Prolongar una línea horizontal desde el nuevo hombro hacia el costado para encontrar el nuevo punto de sisa.
            td 2 cm.
            td Esta nueva referencia ajusta el ancho de la sisa. Revisar que mantenga relación con el escote bajado.
          tr
            td 6
            td Desde la sisa original, bajar y entrar para redefinir el quiebre de la nueva sisa.
            td Bajar 1,5 cm. #[br]Entrar 2,5 cm.
            td Estos puntos determinan el volumen y caída de la sisa; deben ubicarse con exactitud.
          tr
            td 7
            td Unir el punto superior e inferior de la nueva sisa mediante una curva armónica.
            td ——
            td Trazar con curvigrafo respetando el contorno anatómico.
          tr
            td 8
            td Entrar 0,5 cm en la línea del costado bajo el busto y suavizar con curva hacia la línea lateral.
            td Entrar 0,5 cm.
            td Esta curva estiliza la prenda. Evitar ángulos rectos al conectarla con el costado inferior.
          tr
            td 9
            td Determinar el nuevo largo del cuerpo desde la cintura hacia abajo.
            td Altura de cadera + 10 cm.
            td Medir con regla larga en línea recta desde la cintura hasta el nuevo punto final.    

    .row.justify-content-center.mb-5
      .col-lg-6
        .bg-7.p-3.mb-2 
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 17.
            span Trazo de la camisilla delantero           
          .row.justify-content-center.mb-3
            .col-lg-7.col-md-7.col-10
              figure.mb-3.mb-lg-0
                img(src='@/assets/curso/temas/t3/fig17.svg', alt='Molde técnico delantero de prenda superior sin mangas. Incluye escote curvo profundo, hombro modificado con una nueva línea inclinada, sisa con ajuste en curva y pinza lateral descendente. El largo supera la altura de cadera. Se señalan distancias y ajustes con medidas precisas en centímetros.')
          figcaption Fuente: SENA, (2025)
      .col-lg-6
        .bg-7.p-3.mb-2.h-100
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 18.
            span Trazo de la camisilla posterior          
          .row.justify-content-center.mb-3
            .col-lg-9.col-md-8.col-11
              figure.mb-3.mb-lg-0
                img.px-lg-4(src='@/assets/curso/temas/t3/fig18.svg', alt='Molde técnico delantero de prenda superior sin mangas, adaptado con diseño de revoque en el escote y la sisa. Contiene escote redibujado con profundización y desplazamiento lateral, hombro con nueva inclinación, y sisa curvada con ajuste en el costado. La forma del revoque sigue el contorno del escote y la sisa, con separación marcada para corte o acabado decorativo. Incluye medidas específicas en centímetros y prolongación hasta debajo de la cadera.')
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
            td 1
            td Desde el escote, prolongar el hombro original hacia afuera y bajar una línea diagonal para formar uno nuevo.
            td Subir 1 cm. Salir 2 cm.
            td Trazar una nueva línea de hombro más inclinada con ayuda de una regla recta.
          tr
            td 2
            td Desde la línea del centro delantero, entrar sobre la línea de escote y luego subir.
            td Entrar 2 cm. Subir 2 cm.
            td Estos puntos definen el nuevo escote. Confirmar su ubicación antes de curvar.
          tr
            td 3
            td Unir el punto subido del escote con el nuevo extremo del hombro mediante una curva suave.
            td ___
            td Usar curvigrafo o mano firme para asegurar fluidez en el escote.
          tr
            td 4
            td Desde el vértice original de la sisa, medir hacia afuera en línea horizontal para ubicar el nuevo punto superior.
            td Salir 2 cm.
            td Mantener la proporción con el hombro extendido para generar armonía en la sisa.
          tr
            td 5
            td Desde la sisa base, bajar 1 cm y entrar 2 cm hacia el cuerpo para formar el nuevo punto de quiebre.
            td Bajar 1 cm. Entrar 2 cm.
            td Marcar bien ambos puntos antes de trazar la curva de sisa.
          tr
            td 6
            td Unir con una curva el nuevo punto superior e inferior de la sisa modificada.
            td ___
            td La curva debe ser continua y anatómica; evitar ángulos marcados.
          tr
            td 7
            td Desde la línea del hombro hacia la sisa, trazar una guía para formar una curva de ajuste.
            td Línea guía de conexión.
            td Esta línea suaviza el paso del hombro al contorno de sisa.
          tr
            td 8
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
            td 1
            td Desde el escote, prolongar el hombro original hacia afuera y trazar una nueva línea inclinada hacia abajo.
            td Subir 1 cm. Salir 2 cm.
            td Asegurar que la nueva línea mantenga una inclinación fluida con el escote ampliado.
          tr
            td 2
            td Desde el centro delantero, entrar y subir sobre la línea del escote para trazar una nueva forma.
            td Entrar 2 cm. Subir 2 cm.
            td Confirmar la escuadra desde el centro delantero al nuevo punto antes de trazar la curva.
          tr
            td 3
            td Unir el nuevo punto del escote con el extremo descendido del hombro con una curva suave.
            td ——
            td Usar curvigrafo para una transición limpia y anatómica.
          tr
            td 4
            td Desde el vértice de la sisa original, salir horizontalmente para marcar el nuevo punto superior de sisa.
            td Salir 2 cm.
            td Verificar simetría con el hombro extendido para mantener proporción.
          tr
            td 5
            td Bajar y entrar desde la sisa base para redefinir el punto inferior de la nueva curva.
            td Bajar 1 cm. Entrar 2 cm.
            td Marcar con precisión, ya que estos puntos controlan la amplitud y ajuste de la sisa.
          tr
            td 6
            td Unir con curva suave los puntos superior e inferior para trazar la nueva sisa modificada.
            td ——
            td Trazar de forma continua sin quiebres para conservar ergonomía.
          tr
            td 7
            td Medir sobre la línea lateral del cuerpo la profundidad del rebaje deseado según el diseño.
            td Variable recomendada: 4 cm hacia adentro.
            td Esta medida define el tipo de escote lateral o apertura. Debe ajustarse al diseño específico.
          tr
            td 8
            td Trazar una curva que conecte el nuevo escote con el punto de rebaje lateral.
            td ——
            td Utilizar curvigrafo para garantizar un trazo limpio, sin picos ni ángulos rectos.
          tr
            td 9
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
            p.mb-0 El trazo de la camiseta tipo polo combina elementos del patronaje básico de camisetas con detalles estructurales que le aportan un estilo semiformal; se caracteriza por tener cuello tipo #[em sport], tapeta delantera con abertura parcial y, en algunos casos, puños en las mangas. El desarrollo del patrón incluye el trazado de las piezas principales (espalda, delantero, manga y cuello), integrando holguras adecuadas para el confort y permitiendo ensamblajes limpios que se adapten tanto a procesos industriales como artesanales.

    .row.justify-content-center.mb-5
      .col-lg-6.col-md-10.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-7.p-3.mb-2
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Figura 19.
            span Trazo de la camiseta polo delantero
          figure
            img(src='@/assets/curso/temas/t3/fig19.svg', alt='Molde técnico de prenda superior masculina con botonera central. La línea punteada representa la base de corpiño, sobre la cual se realizan transformaciones. Incluye escote redondo, hombros con inclinación y sisa ligeramente curva. En el centro se detalla la abertura de la botonera con medidas verticales y horizontales precisas. Los costados presentan entradas con leve entalle hacia la cintura. El largo total supera la altura de cadera y se indican márgenes de confección en hombros, sisas y laterales.')
      .col-lg-6.col-md-10.mb-4.mb-lg-0(data-aos="fade-left")
        .bg-7.p-3.mb-2
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Figura 20.
            span Trazo de la camiseta polo con botonera
          figure
            img(src='@/assets/curso/temas/t3/fig20.svg', alt='Molde técnico delantero de prenda superior masculina, construido a partir de una base de corpiño representada con línea punteada. Incluye escote redondo, hombros inclinados y sisas suavemente curvadas. En el centro se ubica una abertura vertical que indica la mitad del ancho de la botonera, con medidas registradas en centímetros. Los costados presentan entalle y el largo se extiende más allá de la cadera. Se marcan márgenes y referencias de ajuste en hombros, sisas y laterales.')

    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla 14.
      span Proceso del trazo del delantero de la camiseta polo
    .tabla-a.color-acento-botones.mb-5(data-aos='fade')
      table.table-mpad(alt="Tabla con diez pasos para modificar el delantero de una prenda sin mangas. Cada acción incluye medidas y recomendaciones para ajustar hombros, sisa, escote, abertura frontal, costados y largo total. Se sugiere precisión en simetría, uso de escuadra y curvígrafo para lograr un diseño proporcional, anatómico y equilibrado.")
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
            td 1,5 cm hacia afuera.
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
                    p Largo de la abertura + 4 cm (holgura) + 2 cm (superior).
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
          h4.bg-color-primario.mb-4.w-fit.px-2.py-1 Notas
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
                    p Dos veces el ancho de la botonera + 1,5 cm.                    
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
          h4.bg-color-primario.mb-4.w-fit.px-2.py-1 Notas
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
        .bg-7.p-3.mb-2.h-100
          .titulo-sexto.color-acento-contenido.mb-2
            h5 Figura 23.
            span Trazo de la camisa hindú delantero
          figure.mb-2
            img(src='@/assets/curso/temas/t3/fig23.svg', alt='Molde técnico delantero de prenda superior masculina. Incluye escote redondeado, hombros inclinados, sisas curvas con ajuste lateral y pinzas que parten desde el busto hacia el centro. Se añaden líneas de transformación para bolsillo de parche central, con medidas específicas. La parte inferior está prolongada con una extensión rectangular que incorpora aberturas laterales señaladas y doblez de 3 cm. Se indican múltiples valores numéricos para cortes y ajustes estructurales.')
      .col-lg-6.col-md-11.mb-4(data-aos="fade-left")
        .bg-7.p-3.mb-2.h-100
          .titulo-sexto.color-acento-contenido.mb-2
            h5 Figura 24.
            span Trazo del posterior de camisa hindú
          figure.mb-2.px-lg-4
            img.px-lg-5(src='@/assets/curso/temas/t3/fig24.svg', alt='Molde técnico lateral de prenda superior masculina, representado con silueta extendida hasta la altura de cadera más ocho centímetros. Incluye escote redondeado, hombro inclinado y costado con entalle. Se destaca una pinza lateral, una vista con trazo angular de 12 cm y un bolsillo con forma rectangular centrado en la parte superior del molde. En la parte inferior se indica una abertura lateral de 3 cm por 10 cm y ajustes en curva en el área de la sisa.')

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

    .bg-7.p-4.mb-5(data-aos="fade-down")
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

    .bg-7.p-3.mb-5(data-aos="fade-down")
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

    .bg-7.p-3.mb-5(data-aos="fade-down")
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
        .bg-7.p-3.mb-2
          .titulo-sexto.color-acento-contenido.mb-2
            h5 Figura 28.
            span Trazo de patronaje de camisa 
          figure.mb-2
            img(src='@/assets/curso/temas/t3/fig28.svg', alt='Molde técnico para prenda superior dividido en delantero y trasero, con líneas guías y referencias anatómicas. En la parte delantera se trazan el centro, la línea de botonadura, el escote, la sisa, el hombro, el bolsillo y las líneas de cintura y cadera. En la parte trasera se indican el centro, el escote trasero, el hombro, la línea de canesú y la prolongación hacia el fondo de la prenda. Ambas mitades presentan ejes horizontales que organizan la estructura: línea de espalda, línea axilar, línea cintura, línea cadera y fondo. También se incluye el desarrollo de cuello, tapeta y pinza de entalle, configurando un molde base completo.')
          figcaption Fuente: Donnanno, (2016)
      .col-lg-6.col-md-11.mb-4(data-aos="fade-left")
        .bg-7.p-3.mb-2
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
      table.table-mpad.table-mmpad(alt="Tabla con trece operaciones para construir una camisa. Se incluyen instrucciones detalladas para crear el rectángulo base, trazar líneas estructurales, definir escotes, marcar hombros, dibujar sisa, modelar costados y entalles, colocar pinzas, canesú, bolsillos y configurar el bajo. También se añaden vistas, márgenes, simbología y se realiza verificación final del ajuste.")
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
                  span.mb-0 Ancho = ½ pecho + holgura (clásico 4 cm / #[em slim] 2 – 3 cm).
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
            td Unir los puntos de sisa, cintura y cadera con ligera curva. Si se busca silueta #[em slim], desplazar la línea costado 1 cm hacia adentro a nivel de cintura.
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
                  | Señalar piquetes de ojales cada 8 – 9 cm.
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
                  | Piquetes: ⅓ delantero y ½ posterior de copa de manga; unión canesú-hombro; extremos de pinza.
                li.mb-1
                  i.fas.fa-circle
                  | Flechas de hilo paralelas a los centros de pieza.
          tr
            td 13
            td Verificación final
            td Comprobar que la curva de sisa exceda el perímetro del hueco del cuerpo en ≈ 2 % (embebido de manga) y que la longitud del canesú coincida en delantero y espalda.

    .row.justify-content-center.mb-3
      .col-lg-6.col-md-11.mb-4(data-aos="fade-right")
        .bg-7.p-3.mb-2 
          .titulo-sexto.color-acento-contenido.mb-2
            h5 Figura 30.
            span Trazo de manga corta
          figure.mb-2
            img(src='@/assets/curso/temas/t3/fig30.svg', alt='Molde técnico de manga dividida en dos zonas principales: delantera y trasera. En la parte superior se encuentra la copa, cuyo borde curvo se diferencia en copa delantera y copa trasera. La línea vertical central indica el centro del hombro, que desciende hasta el puño. Se marca también la línea del bíceps, que divide horizontalmente la manga en su parte superior. En la zona inferior se señala un margen para el dobladillo y la indicación de pliegue. La estructura permite identificar proporciones, ejes y puntos de montaje con el cuerpo de la prenda.')
          figcaption Fuente: Donnanno, (2016)
      .col-lg-6.col-md-11.mb-4(data-aos="fade-left")
        .bg-7.p-3.mb-2 
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
      table.table-mpad.table-mmpad(alt="Tabla con trece pasos para el trazo de una manga. Incluye construcción del rectángulo guía, definición del eje, altura y curvatura de copa, largo, línea de codo, puño, holguras y dobleces. Se incorporan márgenes, simbología y verificación de embebido, con referencias específicas para asegurar ajuste y movilidad anatómica.")
        thead.bg-3
          tr
            th.w-85 Paso
            th Operación
            th Detalle técnico
            th Cotas de referencia*
        tbody.text-left
          tr
            td 1
            td Rectángulo guía
            td Dibujar un rectángulo ancho = ½ contorno bíceps + holgura (clásica + 6 cm / #[em slim] + 4 cm); alto provisional = largo de manga hasta la muñeca.
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
            td.text-center 22 – 25 cm en camisas talla media.
          tr
            td 4
            td Anchuras de copa
            td Sobre la línea de bíceps, dividir el ancho total en cuatro partes. Elevar 1 cm en los cuartos externos; estos puntos definen la curvatura inicial de la copa.
            td.text-center —
          tr
            td 5
            td Curva de copa
            td Desde el vértice superior izquierdo (copa delantera) dibujar curva suave que pase por el punto elevado del primer cuarto; repetir en el lado derecho, levantando 0,5 – 1 cm más para la copa trasera (necesita mayor altura).
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
            td En el lado trasero, añadir 1 cm extra en la línea de codo; conectar con una curva ligera hacia bíceps y puño, adelantando la costura 1 – 2 cm hacia el delantero para compensar la rotación natural del brazo.
            td.text-center —
          tr
            td 11
            td Marcado del pliegue para puño
            td Sobre la línea de unión manga-puño, indicar una pestaña de 3 cm (plegar) en el centro del eje; esto generará el fuelle que facilita el movimiento al abotonar.
            td.text-center 3 cm (plegar).
          tr
            td 12
            td Márgenes y simbología
            td Añadir 1 cm de margen en costados y copa; 0,7 cm en costura central del puño; marcar la dirección de hilo paralela al eje central.
            td.text-center —
          tr
            td 13
            td Verificación de embebido
            td La curva completa de la copa debe superar el perímetro de la sisa del cuerpo en ≈ 1,5 – 2 %, esa diferencia se embebe en la costura del hombro para que la manga asiente sin frunces visibles.
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
          table.table-mpad.table-mmpad(alt="Tabla con siete pasos para el trazo del cuello. Incluye la toma de medidas base, construcción del rectángulo guía, ubicación del punto de hombro, diseño de curvas inferior y superior, ajustes técnicos finales y corte del patrón. Las indicaciones detallan proporciones, simetría y recomendaciones para lograr un acabado limpio y funcional.")
            thead.bg-3
              tr
                th.w-85 Paso
                th Acción de patronaje
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
      .col-lg-7.px-0
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

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/20.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .bg-1.h-100.p-4
          p.mb-0 La camisa con canesú delantero y trasero es un diseño estructuralmente enriquecido que aporta firmeza, estilo y funcionalidad a la prenda; el canesú es una pieza superior, colocada sobre el pecho y la espalda, que actúa como base de ensamblaje para el resto del cuerpo de la camisa. En la parte trasera, es común ver un canesú completo o doble, a veces con cortes en diagonal o curvos, mientras que en el delantero puede presentarse de forma recta, curva o como parte de un diseño con pinzas o bolsillos superiores.

    .bg-8.p-4.mb-5(data-aos="fade")
      p.mb-0 Este tipo de construcción facilita el ajuste anatómico, mejora la resistencia en zonas de mayor tensión (como los hombros) y ofrece opciones decorativas sin afectar la funcionalidad. En patronaje, el trazo de los canesús requiere delimitar la altura del corte (generalmente desde el escote hasta unos 5 a 8 cm por debajo del hombro), y prever piquetes de empalme para una confección precisa y simétrica.

    .row.justify-content-center.mb-4
      .col-lg-6.mb-4(data-aos="fade-right")
        .bg-7.p-3.mb-2
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 32.
            span Trazo del patronaje de camisa con canesú
          figure.mb-3
            img(src='@/assets/curso/temas/t3/fig32.svg', alt='Molde base de cuerpo superior dividido en delantero y trasero con ejes y proporciones detalladas. Se incluyen líneas estructurales como escote, hombro, sisa, línea de canesú, espalda, axilar, cintura, cadera y fondo. Cada sección está marcada con letras y puntos de referencia que permiten trazar curvas, cortes y pinzas de forma precisa. El molde presenta indicaciones para pliegue de tela, centro delantero y centro trasero, junto con el desarrollo de pinza vertical en el centro del cuerpo que permite entallar la prenda.')
          figcaption Fuente: Donnanno, (2016)
      .col-lg-6.mb-4(data-aos="fade-left")
        .bg-7.p-3.mb-2
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 33.
            span Camisa con canesú
          figure.mb-3
            img(src='@/assets/curso/temas/t3/fig33.svg', alt='Figura masculina de pie con prenda superior tipo camisa de estilo western. El diseño incluye cuello clásico, botonadura central y canesú en delantero y espalda con corte angular. Las mangas son largas, ajustadas con puños y abotonadas, como se detalla en el recuadro inferior que presenta la vista extendida de la manga y el canesú trasero. La camisa está metida dentro del pantalón, el cual se sujeta con cinturón. La postura resalta detalles estructurales y de confección.')
          figcaption Fuente: Donnanno, (2016)


    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla 24.
      span Pasos para el levantamiento del plano de patronaje
    .tabla-a.color-acento-botones.mb-5(data-aos='fade')
      table.table-mpad.table-mmpad(alt="Tabla con trece pasos para el trazo completo de una prenda superior. Contempla la construcción del rectángulo base, líneas horizontales, escotes, hombros, canesú, sisa, costados, pinzas, dobladillos, vistas, márgenes, dirección de hilo y verificación. Cada acción está acompañada de referencias técnicas, puntos clave y medidas para garantizar precisión y simetría en el diseño.")
        thead.bg-3
          tr
            th.w-85 Paso
            th Acción
            th Detalle técnico
            th Punto(s) resultante(s)
        tbody.text-left
          tr
            td 1
            td Rectángulo madre
            td Ancho = ½ contorno de pecho + holgura.#[br] Alto = largo total de la prenda.
            td 
              ul.lista-ul.fa-lista.circle-lista.mb-0
                li.mb-1
                  i.fas.fa-circle
                  | A (esquina superior izquierda). 
                li.mb-1
                  i.fas.fa-circle
                  | B (superior derecha). 
                li.mb-1
                  i.fas.fa-circle
                  | C (cadera espalda).
                li.mb-1
                  i.fas.fa-circle
                  | D (cadera parte delantera).
          tr
            td 2
            td Líneas horizontales
            td Medidas desde A hacia abajo:
              ul.lista-ul.fa-lista.circle-lista.mb-0
                li.mb-1
                  i.fas.fa-circle
                  | 3 cm → línea de hombro (A – B).
                li.mb-1
                  i.fas.fa-circle
                  | (¼ pecho + 2 cm) → línea de sisa (S1). 
                li.mb-1
                  i.fas.fa-circle
                  | 1 cm bajo sisa → línea axilar.
                li.mb-1
                  i.fas.fa-circle
                  | Altura talle → línea cintura (C).
                li.mb-1
                  i.fas.fa-circle
                  | Altura cadera → línea cadera (X). 
            td.text-center Trazar a todo lo ancho.
          tr
            td 3
            td Escote y hombros
            td #[b Espalda:] entrar 6 cm y bajar 2 cm desde A → P2; unir con curva. #[br]#[b Delantero:] entrar 1 cm y bajar 8 cm desde B → P1; unir con curva suave. #[br]#[b Cadera hombro:] caída 2,5 cm; longitud = ½ ancho espalda; marcar P3 (esp.) y P4 (del.)
            td.text-center P1 #[br]P2 #[br]P3 #[br]P4
          tr
            td 4
            td Canesú
            td Desde P3 y P4 bajar 3 cm → O1 y O2; trazar línea canesú.
            td.text-center O1 #[br]O2
          tr
            td 5
            td Curva de sisa
            td En línea de sisa medir ¼ ancho espalda desde centro espalda (S1) → S2; bajar 2 cm; unir P3 – S2 con curva esp. En delantero repetir bajando 0,5 cm extra → S3; unir P4 – S3.
            td.text-center S2 #[br]S3
          tr
            td 6
            td Costados
            td Unir S2 – C (espalda) y S3 – W (delantero) con ligera curva. Para silueta #[em slim], adentrar 1 cm en cintura.
            td.text-center C #[br]W
          tr
            td 7
            td Pinza central
            td Sobre línea cintura trazar eje vertical centro (E1). Ancho pinza 2 cm; longitud 14 cm, terminando 2 cm sobre sisa axilar; unir a E1.
            td.text-center E1 (vértice)
          tr
            td 8
            td Trazado de canesú recortado
            td Completar línea recta O1 – O2 y recortar la pieza; igual recorrido hombro delantero-espalda.
            td.text-center —
          tr
            td 9
            td Dobladillos
            td Delantero: levantar 1 cm en D → D1; unir con curva suave al costado. #[br]Espalda: prolongar 2 cm en C → C1; unir a X con curva.
            td.text-center D1 #[br]C1
          tr
            td 10
            td Vista y pliegue frontal
            td Añadir tira de 3 cm paralela al centro delantero para vista / tapeta; pegar doblez de 1,5 cm.
            td.text-center —
          tr
            td 11
            td Márgenes y piquetes
            td Añadir 1 cm en hombros, costados, sisas, escotes; 1,5 cm en dobladillo y vista. #[br]Agregar piquetes: 1/3 y 1/2 de copa manga; unión canesú; extremos pinza; línea cintura y cadera.
            td.text-center —
          tr
            td 12
            td Dirección de hilo
            td Dibujar flechas paralelas a los centros (delantero y espalda).
            td.text-center —
          tr
            td 13
            td Verificación
            td Medir perímetro de sisa vs. copa de manga (supera 1,5 – 2 %). Comprobar simetría entre canesú y hombro.
            td.text-center Patrón listo para #[em toile].
    
    .py-3

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-5.pe-lg-0.bg-1
        .h-100
          img.m-auto.w-200.mtn-10(src='@/assets/curso/temas/t3/21.png', alt='')
      .col-lg-7.px-0
        .bg-8.p-4.p-lg-5.h-100
          h4.mb-4.bg-color-primario.w-fit.px-2 Nota
          ul.lista-ul--color.fa-lista.mb-0
            li
              i.fas.fa-circle-chevron-right
              span.mb-0 Las coordenadas con letras (W₁ - W₂, S₁ - S₃, E₁ - E₂) corresponden a los puntos indicados en la lámina original.
            li
              i.fas.fa-circle-chevron-right
              span.mb-0 Ajuste de holguras: clásico = 4 – 6 cm en pecho, #[em slim] = 2 – 3 cm.


    .bg-7.p-3.mb-2(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-12
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Figura 34.
            span Despiece del patronaje de camisa con canesú
        .col-lg-6.mb-4
          figure.mb-3
            img(src='@/assets/curso/temas/t3/fig34.svg', alt='Conjunto de piezas de molde base para prenda superior. Se incluyen delantero y trasero completos, cada uno con líneas guía que indican axilar, cintura, cadera y fondo. También se trazan las piezas correspondientes al canesú del delantero y del trasero, con líneas de escote y hombro. A la izquierda se presenta una vista de tapeta con marcas para doblez y centro delantero. Cada parte está señalada con el eje de orientación para el corte y líneas que organizan la construcción anatómica de la prenda.')
        .col-12
          figcaption Fuente: Donnanno, (2016)


    Separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.6  Chaquetas

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/22.jpg')})`}")
      .bloque-texto-g__texto.p-4.p-md-5
        p.mb-0 Las chaquetas son prendas exteriores de estructura compleja que combinan funcionalidad, protección térmica y diseño estético. Se caracterizan por contar con forro interior, cuello estructurado, cierres frontales (cremallera o botones), mangas completas y, con frecuencia, bolsillos utilitarios. Pueden tener ajuste en cintura, puños, capuchas o solapas, según el estilo (deportiva, casual, formal, utilitaria).
        br 
        br
        p.mb-0 Desde el patronaje, el desarrollo de una chaqueta implica un análisis detallado del tipo de tejido (generalmente de mayor gramaje), la distribución de holguras para permitir el uso sobre otras prendas, y la inclusión de canesús, vistas, piezas de refuerzo y márgenes adicionales para el montaje del forro.
    
    .bg-8.mb-5(data-aos="fade")
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/23.png', alt='')
        .col-lg-9
          p.mb-0.p-4 El trazo requiere precisión técnica en cada pieza: delantero, espalda, mangas, cuello, vistas, forro y elementos complementarios, cuidando la simetría, funcionalidad y ensamblaje correcto.

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t2/subt.svg")
      h3.ps-3.pe-4.mb-0 Chaqueta sastre

    .bloque-texto-g.color-acento-contenido.bg-5.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/24.jpg')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 La chaqueta sastre es una prenda formal y estructurada que destaca por su ajuste anatómico, solapas definidas, cuello sastre y forro completo; su patronaje incluye múltiples piezas (delantero, espalda, mangas, cuello, vistas y forro) y requiere precisión en entalles, cortes y refuerzos internos. Se elabora con tejidos firmes y técnicas de confección avanzadas para garantizar elegancia, estabilidad y un calce personalizado.

    .bg-7.p-4.mb-5(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-12
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Figura 35.
            span Base para chaqueta sastre masculina 
        .row.justify-content-center.mb-3
          .col-lg-9
            figure
              img(src='@/assets/curso/temas/t3/fig35.svg', alt='Molde base para prenda superior con trazo simétrico de delantero y trasero, indicado por las siglas CF (centro frente) y CA (centro atrás). El desarrollo incluye medidas expresadas en centímetros y proporciones referenciadas al contorno de pecho, marcado con la letra P. Se definen curvas para escote, sisa y hombro, trazadas a partir de divisiones y distancias precisas. El molde incluye líneas horizontales que corresponden a ejes anatómicos como pecho, cintura y cadera. Las instrucciones especifican que las medidas están en centímetros, basadas en el contorno de pecho, y que las costuras no están incluidas en el trazado.')

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t3/subt2.svg")
      h3.ps-3.pe-4.mb-0 Trazado paso a paso del patrón
    
    p.mb-5 (Sistema proporcional con la variable P = contorno de pecho en cm; todas las distancias ya incluyen holgura básica, costuras no incluidas).

    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla 25.
      span Proceso para el levantamiento del plano básico para chaqueta sastre
    .tabla-a.color-acento-botones.mb-5(data-aos='fade')
      table.table-mpad.table-mmpad(alt="Tabla con quince pasos para levantar el plano básico de una chaqueta sastre. Incluye construcción del rectángulo madre, divisiones, trazado de escotes, hombros, sisas, pinzas, costados, líneas estructurales y dobladillos. Se utilizan fórmulas proporcionales al contorno de pecho y vértices anatómicos, con símbolos y referencias técnicas para asegurar precisión y embebido adecuado.")
        thead.bg-3
          tr
            th.w-85 Paso
            th Operación
            th Fórmula / valor
            th Referencia
        tbody.text-left
          tr
            td 1
            td Rectángulo madre
            td Ancho = (P/2) + 6 cm. #[br]Alto = largo de talle (centro atrás).
            td.text-center Contorno exterior.
          tr
            td 2
            td Dividir en mitades
            td Trazar la línea vertical central → separar delantero (CA) y espalda (CF). 
            td.text-center Línea vertical.
          tr
            td 3
            td Escote espalda
            td Profundidad = (P/36) + 0,6 cm. #[br]Ancho = (P/12).
            td.text-center Curva escote espalda.
          tr
            td 4
            td Escote delantero
            td Profundidad = (P/6) + 3 cm. #[br]Ancho = (P/12).
            td.text-center Curva escote delantero.
          tr
            td 5
            td Pendiente hombro
            td Caída = (P/36 cm) + 0,6 cm.
            td.text-center Segmento oblicuo.
          tr
            td 6
            td Longitud hombro
            td Longitud = 1 + (P/36).
            td.text-center Mismo segmento.
          tr
            td 7
            td Bajada de sisa
            td Medida vertical = (P/6) + 7 cm.
            td.text-center Línea axilar.
          tr
            td 8
            td Curva sisa espalda
            td Radio auxiliar; bajar 2,5 cm en costado.
            td.text-center Arco punteado esp.
          tr
            td 9
            td Curva sisa delantero
            td Radio auxiliar; bajar 5 cm en costado.
            td.text-center Arco punteado del.
          tr
            td 10
            td Costado delantero
            td Entrar 0,6 cm en axila y unir.
            td.text-center Trazo quebrado.
          tr
            td 11
            td Pinza central
            td Ancho base = 2 cm; vértice a (P/6) + 3,5 cm bajo axila.
            td.text-center Triángulos Δ.
          tr
            td 12
            td Líneas estructurales
            td Canesú, cintura, cadera (cadera = P/6 + 3).
            td.text-center Bandas horizontales.
          tr
            td 13
            td Dobladillo
            td Curva ligera une costados; ancho total = (P/2) + 6 cm.
            td.text-center Semicírculo inferior.
          tr
            td 14
            td Muescas y ejes
            td Δ en pinza, piquetes en sisa; ejes "CF", "CA".
            td.text-center Símbolos.
          tr
            td 15
            td Verificación
            td Perímetro sisa debe superar el hueco 2 % para embebido.
            td.text-center Control final.

    .row.justify-content-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/25.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .tarjeta.bg-1.h-100.p-4.px-lg-5
          h4.bg-7.px-1.py-2.mb-4.w-fit Símbolos empleados
          ul.lista-ul--color.fa-lista.ps-3
            li
              i.fas.fa-circle-chevron-right
              | P = contorno de pecho (en centímetros).
            li
              i.fas.fa-circle-chevron-right
              | Todas las cifras decimales (0,6 cm, 0,8 cm, etc.) suavizan vértices y transiciones.
            li.mb-0
              i.fas.fa-circle-chevron-right
              | Márgenes de costura no incluidos.

    p.mb-4 Teniendo en cuenta el básico anterior, se desarrollarán los siguientes trazos para la chaqueta sastre:

    .bg-7.p-4.mb-5(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-12
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Figura 36.
            span Paso 1 de la chaqueta sastre con tres botones
        .row.justify-content-center.mb-3
          .col-lg-10
            figure
              img(src='@/assets/curso/temas/t3/fig36.svg', alt='Molde base para chaqueta masculina compuesto por delantero y trasero dispuestos simétricamente. El trazado incluye escote redondeado en el delantero y más cerrado en el trasero, hombros inclinados, sisas amplias y estructura dividida horizontalmente por líneas guía correspondientes a pecho, cintura y cadera. En el centro frontal se indica el cruce para la botonadura mediante una línea curva. La figura señala que las medidas están en centímetros y que las costuras no están incluidas en el trazo.')

    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla 26.
      span Paso a paso del trazo de la base para chaqueta
    .tabla-a.color-acento-botones.mb-5(data-aos='fade')
      table.table-mpad(alt="Tabla con seis pasos para trazar la base de una chaqueta. Incluye el modelado de curvas de sisa, línea de canesú, costados, escote delantero, dobladillo y verificación final. Se utilizan fórmulas proporcionales para asegurar ajuste anatómico, caída frontal y preparación del patrón para confección.")
        thead.bg-3
          tr
            th.w-85 Paso
            th Operación
            th Cotas / fórmulas prácticas
            th Resultado en el esquema
        tbody.text-left
          tr
            td 1
            td Curvas de sisa
            td Espalda: radio auxiliar, bajar 2 cm. #[br]Delantero: radio auxiliar, bajar 5 cm.
            td.text-center Arcos laterales.
          tr
            td 2
            td Línea de canesú
            td 2 cm por debajo del hombro.
            td.text-center Banda horizontal alta.
          tr
            td 3
            td Costados
            td Unir sisa – cintura – cadera con ligera curva; estrechar 1 cm en cintura si se desea entalle moderado.
            td.text-center Perfil lateral.
          tr
            td 4
            td Desbocado delantero
            td Inclinar el cruce 1 cm hacia fuera a partir de la cintura – crea soltura para sobreposición de solapa.
            td.text-center Línea oblicua junto al centro.
          tr
            td 5
            td Dobladillo
            td Curvar ligeramente hacia el delantero; longitud final = (P/2) + 7 cm.
            td.text-center Línea inferior.
          tr
            td 6
            td Verificación final
            td Perímetro sisa debe superar el hueco corporal ≈ 2 % (embebido manga). Hombros delanteros / espalda de igual largo. 
            td.text-center Patrón listo para prototipo.

    .py-3
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-5.pe-lg-0.bg-1
        .h-100
          img.m-auto.mtn-10.w-75(src='@/assets/curso/temas/t3/26.png', alt='')
      .col-lg-7.px-0
        .bg-8.p-4.p-lg-5.h-100
          h4.mb-4.bg-color-primario.w-fit.px-2 Importante
          ul.lista-ul--color.fa-lista.mb-0
            li
              i.fas.fa-circle-chevron-right
              span.mb-0 Este bloque está pensado para chaquetas con solapa clásica; el desbocado (paso 4) es la base de la línea de quiebre de la solapa.
            li
              i.fas.fa-circle-chevron-right
              span.mb-0 Para versiones #[em slim] reduzca la constante “+ 7 cm” (ancho) a “+ 5 cm” y rebaje 0,5 cm adicionales en costados.

    .tarjeta.color-primario.p-3.mb-4(data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/t2/cta1.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Base chaqueta sastre masculina
              p.mb-0 Se invita a explorar el paso a paso del trazo de la base para la elaboración del patronaje de la chaqueta sastre masculina de tres botones.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="('https://youtu.be/ZRCjy8C5A2Q')" target="_blank")
                span Ir al sitio
                i.fas.fa-circle-play


    .bg-7.p-4.mb-5(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-12
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Figura 37.
            span  Paso 2 del trazo de la chaqueta
        .row.justify-content-center.mb-3
          .col-lg-7
            figure
              img(src='@/assets/curso/temas/t3/fig37.svg', alt='Molde técnico correspondiente al paso dos en la construcción de una chaqueta masculina. El trazado incluye delantero y trasero, con desarrollo de escote, hombros, sisa, línea de pecho, cintura y cadera. Se incorporan elementos de diseño como cuello con pie, solapa, botones marcados con círculos y líneas de doblez. También se trazan bolsillos: uno de parche con tapa sobre el pecho y otro en la parte inferior. Se incluyen medidas precisas en centímetros para cada segmento, así como flechas que indican direcciones para corte o montaje. La estructura presenta líneas curvas, guías diagonales y puntos de referencia para ajustes y simetrías.')

    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla 27.
      span Paso a paso del trazo de la chaqueta paso 2
    .tabla-a.color-acento-botones.mb-5(data-aos='fade')
      table.table-mpad(alt="Tabla con diez operaciones adicionales para ajustar el diseño de una chaqueta. Incluye rediseño de escote, pinzas, vista frontal, bolsillos, costados, dobladillo y manga. Cada acción detalla medidas, trazo técnico y propósito constructivo, buscando mejorar el ajuste, funcionalidad y acabado visual del patrón.")
        thead.bg-3
          tr
            th.w-85 Nº
            th Operación adicional
            th Medidas y trazos indicados en el esquema
            th Propósito constructivo
        tbody.text-left
          tr
            td 1
            td Rediseño del escote y solapa
            td 
              ul.lista-ul.fa-lista.circle-lista.mb-0
                li.mb-0
                  i.fas.fa-circle
                  | Desde el vértice cuello – hombro trazar un retroceso de 0,6 cm y alzar 0,7 cm (punto A). 
                li.mb-0
                  i.fas.fa-circle
                  | Girar la línea de escote 2,5 cm hacia afuera; largo hombro 2,9 cm. 
                li.mb-0
                  i.fas.fa-circle
                  | Añadir pestaña de 3,5 x 2,5 cm para quiebre de cuello (líneas inclinadas).
            td Define #[em roll-line] del cuello con mayor apertura; crea la base de la solapa.
          tr
            td 2
            td Traslación de pinza de pecho
            td 
              ul.lista-ul.fa-lista.circle-lista.mb-0
                li.mb-0
                  i.fas.fa-circle
                  | Desde la pinza original mover 4 cm hacia la sisa; abrir nueva boca de 2 cm y cerrar la anterior. 
                li.mb-0
                  i.fas.fa-circle
                  | Longitud de pinza 10 cm, vértice a 2,7 cm del costado.
            td Reubica volumen del busto hacia la sisa para un perfil más sastre.
          tr
            td 3
            td Formación de vista frontal
            td Reservar tira vertical de 3 cm paralela al centro frente; señalar tres círculos (◯) como piquetes de botones a 9 cm, 21 cm y 32 cm bajo el escote.
            td Vista incorporada que albergará botones y ojales.
          tr
            td 4
            td Corte del bolsillo superior (vivo)
            td 
              ul.lista-ul.fa-lista.circle-lista.mb-0
                li.mb-0
                  i.fas.fa-circle
                  | Línea de boca 10,5 cm de largo, inclinada 2°; colocar 2,2 cm bajo la línea de canesú.
                li.mb-0
                  i.fas.fa-circle
                  | Profundidad de bolsa 7 cm; ancho total 2,7 cm.
            td Bolsillo ojal superior, típico de chaqueta #[em sport].
          tr
            td 5
            td Corte del bolsillo inferior (tapeta)
            td 
              ul.lista-ul.fa-lista.circle-lista.mb-0
                li.mb-0
                  i.fas.fa-circle
                  | Boca horizontal 11,5 cm a 1,7 cm sobre la línea de cadera.
                li.mb-0
                  i.fas.fa-circle
                  | Tapeta: alto 3,5 cm; profundidad bolsa 15 cm.
            td Bolsillo de parche con tapeta para carga.
          tr
            td 6
            td Redefinición de costado y entalle
            td Entrar 1 cm en cintura, suavizar costura hasta axila (5 cm bajo sisa) y hasta cadera.
            td Ajuste intermedio: silueta entallada sin llegar a #[em slim fit].
          tr
            td 7
            td Extensión de dobladillo delantero
            td Avanzar 3 cm en el bajo; curvar con radio suave que conecta costado y vista.
            td Proporciona caída compensada y evita retracción visual.
          tr
            td 8
            td Curva de sisa corregida
            td Rebajar 0,7 cm en el punto medio de la curva; unir con línea continua hacia hombro y costado.
            td Prepara hueco de manga con holgura uniforme.
          tr
            td 9
            td Guías de manga
            td Indicar sobre la sisa: "2 + D" (cota destinada al cálculo de copa) y sobre la espalda "C" (altura para manga).
            td Servirán para emparejar la copa en el paso de manga.
          tr
            td 10
            td Simbología y ejes
            td Flechas verticales = dirección de hilo. Δ = vértices de pinzas abiertas / cerradas. 
            td Anclan la lectura del patrón durante el corte.

    .py-3
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-5.pe-lg-0.bg-1
        .h-100
          img.m-auto.w-75.mtn-10(src='@/assets/curso/temas/t3/27.png', alt='')
      .col-lg-7.px-0
        .bg-8.p-4.p-lg-5.h-100
          h4.mb-4.bg-color-primario.w-fit.px-2 Importante
          ul.lista-ul--color.fa-lista.mb-0
            li
              i.fas.fa-circle-chevron-right
              span.mb-0 La nueva posición de pinza y los cortes de bolsillo transforman el bloque base en un delantero de chaqueta deportiva con solapa.
            li
              i.fas.fa-circle-chevron-right
              span.mb-0 Todas las cifras fraccionarias (0,5 cm, 0,7 cm, 1,5 cm) suavizan quiebres y garantizan transiciones limpias.
            li
              i.fas.fa-circle-chevron-right
              span.mb-0 Antes de añadir márgenes de costura conviene realizar comprobación de prototipo para verificar la armonía entre pinza trasladada, nueva sisa y caída de solapa.
    
    .tarjeta.color-primario.p-3.mb-5(data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/t2/cta1.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Trazo de chaqueta sastre masculina
              p.mb-0 Presentación del paso a paso del trazo de la chaqueta sastre masculina.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="('https://youtu.be/oH9SmGbFdDM')" target="_blank")
                span Ir al sitio
                i.fas.fa-circle-play

    .bg-7.p-4.mb-5(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-12
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Figura 38.
            span Trazo de la manga de la chaqueta 
        .row.justify-content-center.mb-3
          .col-lg-9
            figure
              img(src='@/assets/curso/temas/t3/fig38.svg', alt='Secuencia de trazado técnico para la construcción de una manga de chaqueta masculina. La primera figura corresponde al desarrollo inicial del largo de manga y posicionamiento de líneas horizontales para el codo y la sisa. La segunda figura incorpora el contorno superior, correspondiente a la copa de manga, con inclinación y medidas proporcionales. La tercera figura presenta la manga completa, con forma anatómica curva, líneas de doblez, separación entre delantero y trasero, y señalización de botones en el puño. Las medidas están indicadas en centímetros y distribuidas para garantizar ajuste estructural al cuerpo base previamente desarrollado.')
    
    .bgi-1.mb-4(data-aos="fade-down")
      .row.justify-content-center
        .col-lg-5.grad-bloque
          img(src='@/assets/curso/temas/t3/28.png', alt='')
        .col-lg-7
          .h-100.p-4.p-lg-5
            h4.subt3.w-fit.mb-4 Lectura rápida del esquema
            ul.lista-ul--color.fa-lista.mb-0
              li.mb-4
                i.fas.fa-circle-chevron-right
                span.mb-0 Vista 1 (izquierda): estructura bruta con tres horizontales clave, contorno sisa, línea de bíceps (2,2 = D) y altura C.
              li.mb-4
                i.fas.fa-circle-chevron-right
                span.mb-0 Vista 2 (centro): se agrega la diagonal de balance y se traslada la curva frontal de la copa.
              li.mb-0
                i.fas.fa-circle-chevron-right
                span.mb-0 Vista 3 (derecha): manga definitiva con #[em cap-height] diferenciada, entalle de codo, puño inclinado y perforaciones para botones.


    p.mb-4 A continuación, se detalla el procedimiento:

    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla 28.
      span Paso a paso del trazo de la manga de la chaqueta sastre
    .tabla-a.color-acento-botones.mb-5(data-aos='fade')
      table.table-mpad(alt="Tabla con once pasos para el trazo de la manga de una chaqueta sastre. Incluye construcción del rectángulo base, división en secciones, formación de la cabeza de manga, dirección del brazo, línea de codo, entalle, boca de puño, holguras, abertura de botones y simbología. Cada paso indica medidas aproximadas y su propósito técnico para asegurar ajuste anatómico, movilidad y confección precisa.")
        thead.bg-3
          tr
            th.w-85 Paso
            th Acción operativa
            th Cotas indicativas (cm)
            th Propósito técnico 
        tbody.text-left
          tr
            td 1
            td Rectángulo inicial
            td 
              ul.lista-ul.fa-lista.circle-lista.mb-0
                li.mb-0
                  i.fas.fa-circle
                  | Ancho = contorno sisa ÷ 2 cm + 3 cm.
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 Alto = largo de manga deseado + 1 cm.
            td Marco de construcción.
          tr
            td 2
            td Dividir ancho en 3 secciones
            td Trazar dos líneas verticales interiores iguales.
            td Facilitar el modelado de la copa (frente, centro, espalda).
          tr
            td 3
            td #[em Cap-height]
            td Desde el borde superior bajar la medida C (altura de copa).
            td Ubica la línea de bíceps.
          tr
            td 4
            td Oblicua de dirección
            td Dibujar una diagonal suave desde 3 cm a la derecha del vértice superior hasta el borde inferior opuesto (indicado "largo manga + 1").
            td Compensa la inclinación natural del brazo.
          tr
            td 5
            td Formar cabeza de manga
            td 
              ul.lista-ul.fa-lista.circle-lista.mb-0
                li.mb-0
                  i.fas.fa-circle
                  | Sobre la línea de bíceps entrar 2 cm (frente) y 3 cm (espalda). 
                li.mb-0
                  i.fas.fa-circle
                  | Elevar 0,7 cm en centro frente y 1 cm en centro espalda. 
                li.mb-0
                  i.fas.fa-circle
                  | Unir con curva continua (ver flechas 1,3 cm y 1 cm en la vista 3).
            td Genera la diferencia de copa: espalda más alta para movilidad. 
          tr
            td 6
            td Línea de codo
            td Ubicarla a 3/5 de la longitud total; escuadrar 90°.
            td Punto de referencia para entalle.
          tr
            td 7
            td Entalle de codo y costado
            td 
              ul.lista-ul.fa-lista.circle-lista.mb-0
                li.mb-0
                  i.fas.fa-circle
                  | En costura trasera adelantar 1 cm en codo y 0,7 cm en axila. 
                li.mb-0
                  i.fas.fa-circle
                  | En costura delantera salir 1 cm en axila y 2 cm en codo. 
                li.mb-0
                  i.fas.fa-circle
                  | Conectar puntos con curvas tensas (flechas de 1 – 1,5 – 2,5 cm).
            td Ajusta la manga al brazo sin arrugas.
          tr
            td 8
            td Boca de puño
            td 
              ul.lista-ul.fa-lista.circle-lista.mb-0
                li.mb-0
                  i.fas.fa-circle
                  | Rectángulo-puño: ancho = deseo de muñeca + 10 cm (solape), alto desplegado = 7 cm. 
                li.mb-0
                  i.fas.fa-circle
                  | Línea inferior del rectángulo base inclínese 3,8 cm hacia arriba en costura delantera (vista 3).
            td Proporciona inclinación de puño típica en chaqueta.
          tr
            td 9
            td #[em Placket] y botones
            td Marcar 4 – 5 botones a 1,5 cm del borde y piquetes a 1,5 cm entre sí (circulos).
            td Prepara abertura superpuesta.
          tr
            td 10
            td Holguras internas
            td 
              ul.lista-ul.fa-lista.circle-lista.mb-0
                li.mb-0
                  i.fas.fa-circle
                  | Holgura bíceps = + 6 clásica / + 4 entallada. 
                li.mb-0
                  i.fas.fa-circle
                  | Desfase copa = 2 % sobre perímetro sisa (embebido).
            td Garantiza comodidad y montaje limpio.
          tr
            td 11
            td Simbología final
            td ▼ frente (¼ copa), ▼▼ espalda (½ copa); flecha vertical = hilo; 90° en punta inferior.
            td Lectura universal del molde.
    
    .py-3
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-5.pe-lg-0.bg-color-primario
        .h-100
          img.m-auto.w-75.mtn-10(src='@/assets/curso/temas/t3/29.png', alt='')
      .col-lg-7.px-0
        .bg-8.p-4.h-100.p-lg-5
          h4.mb-4.bg-color-primario.w-fit.px-2 Importante
          p #[em Cap-height], es la distancia vertical entre la cabeza o corona de la manga (el punto más alto del patrón de la manga) hasta la línea de unión con la sisa (la línea de costura del brazo al cuerpo).

    p.mb-5 Antes de añadir márgenes de costura, confeccione un prototipo, preferiblemente en liencillo, para verificar que la copa se embeba limpiamente en la sisa del cuerpo y que el brazo pueda flexionar 90° sin tiranteces.    

    
    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t2/subt.svg")
      h3.ps-3.pe-4.mb-0 Chaqueta #[em bomber]

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/30.jpg')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 La chaqueta #[em bomber] casual masculina, con su corte recto o ligeramente entallado y puños, cuello y cinturilla de punto elástico, combina materiales como #[em nylon], algodón o poliéster técnico, a menudo con forro ligero o acolchado, para ofrecer ligereza, abrigo y resistencia al viento; su cierre frontal de cremallera y bolsillos laterales brindan funcionalidad urbana, mientras que su estética atemporal la hace adecuada tanto para paseos y ocio en la ciudad como para oficinas creativas de #[em dress code] relajado, viajes en climas variables y #[em looks] de #[em smart] casual al combinarla con camisa de botones, chinos y mocasines, o con camiseta, pantalones #[em slim] y zapatillas para un estilo deportivo; disponible en tonos neutros para máxima versatilidad o en colores más vivos y detalles bordados para un toque distintivo.

    .bg-7.p-4.mb-5(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-12
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Figura 39.
            span Chaqueta #[em bomber] masculina
        .row.justify-content-center.mb-3
          .col-lg-10
            figure
              img(src='@/assets/curso/temas/t3/fig39.svg', alt='Prenda superior tipo chaqueta bomber con silueta amplia y terminaciones ajustadas. El diseño incluye cuello corto y redondeado, cierre frontal con cremallera, bolsillos diagonales con ribete en el delantero y costuras de manga caída. Tanto el cuello, como los puños y la pretina inferior están rematados con tejido elástico. En la manga izquierda se ubica un detalle gráfico rectangular compuesto por líneas paralelas. La vista posterior mantiene una superficie limpia, con costuras en los hombros y mangas.')
          figcaption Fuente: 
            a(href="https://es.pinterest.com/pin/4785143350554431/" target="_blank") https://es.pinterest.com/pin/4785143350554431/

    .tarjeta.color-primario.p-3.mb-5(data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/t2/cta1.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Interpretación de chaqueta #[em bomber]
              p.mb-0 Se invita a realizar el paso a paso del trazo de la chaqueta #[em bomber] masculina. 
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="('https://youtu.be/bK-PL29vc8U')" target="_blank")
                span Ir al sitio
                i.fas.fa-circle-play

    
    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t2/subt.svg")
      h3.ps-3.pe-4.mb-0 Chaqueta en #[em denim] tipo Levi's

    .bg-deg1.p-3.mb-4(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-lg-9
          .bg-white.p-4.px-lg-5
            p La chaqueta en #[em denim] tipo Levi's es un ícono del vestuario casual, reconocida por su estructura robusta, corte recto, y su construcción modular. Se caracteriza por tener canesú delantero y trasero, bolsillos con tapa en el pecho, cuello camisero, mangas con puño, y costuras visibles reforzadas. Usualmente confeccionada en mezclilla (#[em denim] rígido), esta prenda combina funcionalidad, durabilidad y estilo atemporal.
            p.mb-0 Desde el patronaje, se compone de múltiples piezas: espalda con canesú, delanteros divididos, cuello clásico, mangas completas con copa alta, vistas internas, tapetas, bolsillos de parche con cartera, y pretina inferior con abotonadura lateral o reguladores. Su diseño exige precisión en el ensamblaje, simetría y cuidado en los detalles como piquetes, pespuntes decorativos y refuerzos en zonas de tensión.
        .col-lg-3.d-none.d-lg-block
          img.px-lg-4(src='@/assets/curso/temas/t3/31.png', alt='')

    .bg-7.p-4.mb-5(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-12
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Figura 40.
            span Diseño de chaqueta en #[em denim]  tipo Levi's
        .row.justify-content-center.mb-3
          .col-lg-10
            figure
              img(src='@/assets/curso/temas/t3/fig40.svg', alt='Chaqueta tipo denim con estructura clásica y detalles de confección visibles. En el delantero se incluyen cuello camisero, botonadura central, bolsillos de parche con tapa y botón en el pecho, bolsillos laterales verticales con cierre, y costuras decorativas a lo largo del cuerpo. En la parte trasera, se aprecia un canesú horizontal, costuras verticales en los laterales y centro, además de ajuste con botones en la parte baja. Las mangas son largas, con puños abotonados, y el diseño general se caracteriza por líneas de pespunte marcadas que refuerzan la estructura.')
          figcaption Fuente: 
            a(href="https://es.pinterest.com/pin/2533343531454928/" target="_blank") https://es.pinterest.com/pin/2533343531454928/
      
    p.mb-4 A continuación, se detalla el patronaje de la chaqueta:

    .bg-7.p-4.mb-5(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-12
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Figura 41.
            span Trazo del patronaje de la chaqueta 
          .row.justify-content-center.mb-3
            .col-lg-9
              figure.mb-3
                img(src='@/assets/curso/temas/t3/fig41.svg', alt='Molde técnico de chaqueta tipo denim con desarrollo de delantero y trasero. El delantero incluye escote, hombro, sisa, doblez para botonadura, bolsillo superior con tapa y bolsillo lateral con cierre. El trasero presenta escote, hombro, pinza vertical y línea de canesú. Todas las piezas están acompañadas por medidas en centímetros para trazo exacto.')
            figcaption Fuente: 
              a(href="https://es.pinterest.com/pin/2533343531454928/" target="_blank") https://es.pinterest.com/pin/2533343531454928/ 

    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla 29.
      span Paso a paso del trazo de la chaqueta delantero y posterior
    .tabla-a.color-acento-botones.mb-5(data-aos='fade')
      table.table-mpad(alt="Tabla con quince pasos para el trazo detallado de una chaqueta. Incluye construcción del rectángulo base, líneas de hombro, escote, sisas, costados, líneas internas, pinza, bolsillos, vista frontal, dobladillos y control final de la copa de manga. Se especifican medidas precisas y operaciones para lograr un diseño funcional, estructurado y listo para confección.")
        thead.bg-3
          tr
            th.w-85 Paso
            th Acción de trazado
            th Cotas indicadas
            th Detalle operativo  
        tbody.text-left
          tr
            td 1
            td Rectángulo maestro
            td Alto total = 31,8 cm. #[br]Ancho total = (11,5 cm delantero + 22 cm espalda) + extensiones.
            td Dibujar una línea horizontal superior y una inferior; escuadrar los laterales.
          tr
            td 2
            td Extension de vista delantera
            td 1,7 cm de ancho (borde izquierdo).
            td Esta faja corresponde al doblez para botones / ojales.
          tr
            td 3
            td Línea de hombro delantero
            td Entrar 3,2 cm desde el vértice; bajar 1,5 cm para la pendiente.
            td Unir esos dos puntos; después prolongar 3,5 cm hasta la sisa para la costura de hombro.
          tr
            td 4
            td Escote delantero
            td Profundidad 3 cm ; ancho 9,4 cm.
            td Dibujar curva suave que parte de la línea de hombro y llega a la vista.
          tr
            td 5
            td Escote espalda
            td Bajada 1 cm; ancho 9,8 cm.
            td Curva más plana que la delantera; entronca con el hombro espalda.
          tr
            td 6
            td Sisa delantera
            td Bajar 6,8 cm desde hombro; adelantar 2,5 cm hacia el cuerpo.
            td Curvar conectando escote – hombro – costado.
          tr
            td 7
            td Sisa espalda
            td Bajar 5,9 cm; adelantar 2,0 cm.
            td Curva ligeramente menos profunda; unirse al costado espalda.
          tr
            td 8
            td Costados
            td Delantero: 8,5 cm de ancho hasta la línea de cadera. Espalda: 22 cm de ancho.
            td Trazar líneas rectas descendentes hasta las líneas de cintura y cadera.
          tr
            td 9
            td Líneas horizontales internas
            td 
              ul.lista-ul.fa-lista.circle-lista.mb-0
                li.mb-1
                  i.fas.fa-circle
                  | Línea de axila a 8,5 cm desde el escote. 
                li.mb-1
                  i.fas.fa-circle
                  | Línea de cintura a 11,6 cm desde el bajo. 
                li.mb-0
                  i.fas.fa-circle
                  | Línea de cadera a 19,8 cm desde el hombro.
            td Estas guías estructuran pinza y bolsillos.
          tr
            td 10
            td Pinza delantera
            td Base 2 cm; vértice a 20,5 cm desde la línea de axila.
            td Distribuir 1 cm a cada lado sobre la cintura, cerrar al vértice.
          tr
            td 11
            td Bolsa de parche superior
            td Boca 10,5 cm × 2,2 cm; posición: arranca 7 cm bajo la axila, a 2 cm de costado.
            td Delimitar rectángulo; marcar líneas de costura.
          tr
            td 12
            td Bolsa inferior con tapa
            td Boca 11,5 cm × 3,5 cm; situada 15 cm sobre el bajo.
            td Otra apertura rectangular con tapa superpuesta.
          tr
            td 13
            td Línea de botón guía
            td Perforaciones cada 2,7 cm desde 3 cm bajo escote hasta 17,7 cm.
            td Dibujar círculos sobre la vista.
          tr
            td 14
            td Dobladillos
            td Delantero: bajar 1,5 cm. #[br]Espalda: bajar 2,2 cm.
            td Curvar suavemente los bajos y escuadrar los vértices.
          tr
            td 15
            td Control final de manga
            td Anotar: "medida 2,2 cm = D (copa)" en la sisa y "medida C" al costado espalda.
            td Estos datos se usan para calcular la copa de la manga en su patrón aparte.
    
    .py-lg-3
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-7.pe-lg-0
        .bg-8.p-4.h-100.p-lg-5
          h4.mb-4.bg-color-primario.w-fit.px-2 Importante
          ul.lista-ul--color.fa-lista
            li.mb-2
              i.fas.fa-circle-chevron-right
              | Los valores decimales (0,5 – 0,7 – 2,5, etc.) afinan uniones y evitan picos en las curvas.
            li.mb-2
              i.fas.fa-circle-chevron-right
              | Cada símbolo ▼ marca un piquete de ensamblaje: sisa, bolsillo y base de pinza.
            li.mb-0
              i.fas.fa-circle-chevron-right
              | Tras verificar simetría y holguras, añadir márgenes de costura estándar (1 cm en costados y sisas; 1,5 cm en dobladillo; 2 cm en vista).
      .col-lg-5.ps-lg-0.bg-color-primario.d-none.d-lg-block
        .h-100
          img.m-auto.w-230.mtn-10(src='@/assets/curso/temas/t3/32.png', alt='')

    .bg-7.p-4.mb-5(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-12
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Figura 42.
            span Trazo de la manga 
          .row.justify-content-center.mb-3
            .col-lg-8
              figure.mb-3
                img(src='@/assets/curso/temas/t3/fig42.svg', alt='Molde técnico de manga para chaqueta tipo denim, compuesto por vista delantera y trasera. Se incluyen curvas de copa, largo total, línea de codo y terminación en puño. Las piezas están trazadas con medidas precisas en centímetros, lo que permite un ensamblaje anatómico y ajuste correcto al cuerpo base.')
            figcaption Fuente: 
              a(href="https://es.pinterest.com/pin/2533343531454928/" target="_blank") https://es.pinterest.com/pin/2533343531454928/ 

    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla 30.
      span Paso a paso del patronaje de la manga
    .tabla-a.color-acento-botones.mb-5(data-aos='fade')
      table.table-mpad(alt="Tabla con doce pasos para el trazo completo de una manga. Incluye construcción del rectángulo base, segmentación por altura, formación de la cabeza de manga, curvas delantera y posterior, costuras laterales, forma del puño, ubicación del placket, botones, piquetes de ensamblaje y márgenes de costura. Cada paso detalla medidas precisas y secuencia para un diseño funcional y anatómico.")
        caption Fuente: SENA, (2025) 
        thead.bg-3
          tr
            th.w-85 Paso
            th Acción
            th Cotas precisas
            th Detalle de ejecución
        tbody.text-left
          tr
            td 1
            td Trazar el rectángulo base
            td Ancho inferior = 15,2 cm. #[br]Alto total = 42 cm (11,4 cm + 22 cm + 8,6 cm).
            td El eje vertical centra la manga (línea de hilo).
          tr
            td 2
            td Dividir la altura en tres segmentos
            td 11,4 cm desde arriba (línea de bíceps). #[br]22 cm adicionales (línea de codo). #[br]8.6 cm restantes (línea de puño).
            td Escuadrar horizontales en cada punto.
          tr
            td 3
            td Marcar el ancho de bíceps
            td Sobre la línea de bíceps: 22 cm totales (11 cm a cada lado del eje).
            td Indica la holgura de brazo.
          tr
            td 4
            td Construir la cabeza de manga
            td Desde la vertical, medir hacia ambos lados: 5,4 cm – 5,4 cm – 3,5 cm – 5,9 cm según la secuencia. Alturas: 7,6 cm, 6 cm y 5 cm hacia arriba en secciones alternas.
            td Unir puntos con curva continua (espalda ligeramente más alta).
          tr
            td 5
            td Definir la curva delantera de la copa
            td Avanzar 2,5 cm hacia el cuerpo y bajar 7 cm desde el punto más alto; unir con radio suave.
            td Genera la caída frontal.
          tr
            td 6
            td Definir la curva posterior
            td Avanzar 3 cm y descender 8 cm; unir con curva menos pronunciada.
            td Permite el giro del hombro.
          tr
            td 7
            td Trazar costuras laterales
            td Delantera: inclinar 2 cm hacia dentro en puño y 1 cm en codo. #[br]Posterior: inclinar 1 cm en codo y 0,7 cm en puño.
            td Conectar mediante líneas rectas; suavizar levemente en la zona del codo.
          tr
            td 8
            td Formar el puño
            td Anchura delantera = 14.5 cm. #[br]Anchura posterior = 15 cm de inclinación de la línea inferior y 2 cm en delantera; 1 cm en posterior.
            td Dibujar un pequeño rectángulo para la vista del puño.
          tr
            td 9
            td Señalar el #[em placket] (abertura)
            td A 3 cm del costado posterior; longitud 8 cm; ancho 1 cm.
            td Marcar la ubicación para la tapeta de manga.
          tr
            td 10
            td Ubicar botones de puño
            td Cinco perforaciones a 1,5 cm del borde y espaciadas 1 cm entre sí.
            td Colocar círculos en línea vertical.
          tr
            td 11
            td Piquetes de ensamblaje
            td ▶ Copa delantera = 1 piquete; copa posterior = 2 piquetes. Pie de #[em placket] = 1 piquete.
            td Facilitan el casado con la sisa del cuerpo.
          tr
            td 12
            td Añadir márgenes de costura
            td 1 cm en curvas y costados. #[br]1,5 cm en puño.
            td Trazar línea paralela exterior.
    
    .py-3
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-5.pe-lg-0.bg-1
        .h-100
          img.m-auto.w-75.mtn-10(src='@/assets/curso/temas/t3/33.png', alt='')
      .col-lg-7.px-0
        .bg-8.p-4.p-lg-5.h-100
          h4.mb-4.bg-color-primario.w-fit.px-2 Importante
          ul.lista-ul--color.fa-lista.mb-0
            li
              i.fas.fa-circle-chevron-right
              span.mb-0 La copa posterior sobrepasa a la delantera en 1 cm para permitir embebido.
            li
              i.fas.fa-circle-chevron-right
              span.mb-0 El desplazamiento lateral de 2 cm inferior en delantera corrige la rotación natural del brazo.
            li.mb-0
              i.fas.fa-circle-chevron-right
              span.mb-0 La abertura o #[em placket] se coloca sólo en el lado posterior para facilitar el remangado.

    .row.justify-content-center
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-7.p-3.mb-2.h-100
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 43. 
            span Cinturilla completa
          figure.mb-4
            img(src='@/assets/curso/temas/t3/fig43.svg', alt='Vista técnica de un puño de camisa con medidas detalladas. La pieza es rectangular, con una longitud total de 56.8 cm y altura de 4.5 cm. Incluye marcas para ojal, botones y tapeta superpuesta de 8 cm. Las divisiones internas indican posicionamiento de elementos funcionales para cierre y ajuste.')
          figcaption Fuente: 
            a(href="https://es.pinterest.com/pin/2533343531454928/" target="_blank") https://es.pinterest.com/pin/2533343531454928/      
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
        .bg-7.p-3.mb-2.h-100
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 44. 
            span Cinturilla media
          figure.mb-4
            img.px-lg-4(src='@/assets/curso/temas/t3/fig44.svg', alt='Pieza técnica rectangular correspondiente a un puño de camisa con medidas especificadas. El largo total es de 35.4 cm y el alto de 4 cm. Se indican dos posiciones para botones y un ojal al extremo opuesto. Las distancias internas marcan la ubicación precisa de los elementos de cierre y los márgenes para costura.')
          figcaption Fuente: 
            a(href="https://es.pinterest.com/pin/2533343531454928/ " target="_blank") https://es.pinterest.com/pin/2533343531454928/ 

    .py-3
    .titulo-sexto.color-acento-contenido.mb-3.mt-5(data-aos='fade-right')
      h5 Tabla 31.
      span Indicaciones de la cinturilla completa
    .tabla-a.color-acento-botones.mb-5(data-aos='fade')
      table.table-mpad(alt="Tabla con nueve pasos para la elaboración de un molde técnico de detalle. Se describe el uso de reglas, compás y marcador para construir un rectángulo base, marcar líneas guía, trazar formas geométricas como orificios, rebajes y óvalos, verificar simetrías y repasar el contorno final. Cada paso incluye medidas precisas y recomendaciones para asegurar un patrón claro y limpio.")
        thead.bg-3
          tr
            th.w-85 Paso
            th Acción a realizar
            th Instrumento sugerido
            th Medidas y datos técnicos
            th Recomendaciones
        tbody.text-left
          tr
            td 1
            td Dibujar un rectángulo base de 4,5 cm de alto por 5,68 cm de largo sobre el papel o cartón de molde.
            td Regla metálica, escuadra.
            td 4,5 × 5,68 cm.
            td Asegurarse que los ángulos sean rectos y las líneas rectas.
          tr
            td 2
            td Marcar desde el borde izquierdo una línea vertical a los 2,45 cm.
            td Regla y lápiz.
            td Línea guía a 2,45 cm desde el borde izquierdo.
            td Esta línea marca el inicio del área de los detalles interiores.
          tr
            td 3
            td Desde la línea marcada en el paso anterior, medir y marcar un segundo tramo de 0,8 cm de largo.
            td Regla corta o calibrador escolar.
            td 0,8 cm de longitud.
            td Esta sección contendrá los orificios y rebajes.
          tr
            td 4
            td Dentro del tramo de 0,8 cm, dibujar un rectángulo centrado de 3,5 cm de alto, mismo ancho de 0,8 cm.
            td Escuadra y regla.
            td Altura 3,5 cm.
            td Este rectángulo se usará como zona para perforaciones o detalles internos.
          tr
            td 5
            td Dibujar un círculo pequeño (representa un orificio) en el centro de la zona de 0,8 cm.
            td Compás o plantilla de círculos.
            td Diámetro estimado: 0,3 cm
            td Ubicar el centro del círculo a mitad del ancho (0,4 cm) y altura (aprox. 1,75 cm).
          tr
            td 6
            td Dibujar un segundo círculo a la derecha del primero (más pequeño), alineado horizontalmente.
            td Compás o lápiz con plantilla.
            td Diámetro aproximado: 0,2 cm.
            td Dejar entre ambos una separación proporcional (0,2 – 0,3 cm).
          tr
            td 7
            td Dibujar una forma oval o triangular alrededor de los dos orificios, simulando el rebaje o área fresada.
            td Lápiz blando y borrador.
            td Longitud: 0,8 cm. Altura: 3,5 cm.
            td Este contorno debe enmarcar suavemente ambos círculos, usando líneas suaves.
          tr
            td 8
            td Verificar el conjunto completo: largo total 5,68 cm, zonas intermedias de 2,45 cm y 0,8 cm, con detalles centrados.
            td Regla, compás y escuadra.
            td Revisión de proporciones y simetría.
            td Se sugiere medir de nuevo y marcar en lápiz para correcciones antes del trazo final.
          tr
            td 9
            td Repasar con marcador o estilógrafo técnico las líneas finales del patrón.
            td Marcador 0,3 o estilógrafo.
            td Trazos uniformes y limpios.
            td Ideal para tener un patrón limpio y legible para calcar o digitalizar.
    
    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla 32.
      span Detalle técnico del trazo de la cinturilla media
    .tabla-a.color-acento-botones.mb-5(data-aos='fade')
      table.table-mpad(alt="Tabla con cinco pasos para el trazo técnico de una cinturilla media. Incluye la construcción de un rectángulo base, líneas guía, círculos de referencia, una línea auxiliar y una ranura central. Se emplean instrumentos de medición de precisión como regla milimetrada, compás y lápiz técnico. Las medidas están indicadas en centímetros para asegurar exactitud en el diseño.")
        thead.bg-3
          tr
            th.w-85 Paso
            th Acción a realizar
            th Instrumento sugerido
            th Medidas 
        tbody.text-left
          tr
            td 1
            td Dibujar un rectángulo base de 1,5 cm de alto por 3,54 cm de largo.
            td Regla y escuadra.
            td 1,5 x 3,54 cm.
          tr
            td 2
            td Desde el borde izquierdo, marcar una línea vertical a 0,3 cm.
            td Regla milimetrada.
            td Línea a 0,3 cm del borde.
          tr
            td 3
            td Dentro de esa franja, trazar dos círculos con centro a 0,5 cm del borde inferior.
            td Compás o plantilla de círculos.
            td Diámetro aproximado de 0,2 y 0,3 cm.
          tr
            td 4
            td Dibujar una línea guía desde el borde derecho a 0,15 cm.
            td Regla corta
            td Línea a 0,15 cm desde el borde derecho.
          tr
            td 5
            td Dibujar un rectángulo angosto que simula una ranura, centrado en la altura.
            td Lápiz técnico.
            td Longitud aproximada de 0,8 cm y alto de 0,1 cm.

    .py-3
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-5.pe-lg-0.bg-1
        .h-100
          img.m-auto.w-60.mtn-10(src='@/assets/curso/temas/t3/34.png', alt='')
      .col-lg-7.px-0
        .bg-8.p-4.p-lg-5.h-100
          h4.mb-4.bg-color-primario.w-fit.px-2 Importante
          ul.lista-ul--color.fa-lista.mb-0
            li
              i.fas.fa-circle-chevron-right
              span.mb-0 Verificar que los círculos estén alineados horizontalmente.
            li
              i.fas.fa-circle-chevron-right
              span.mb-0 Mantener simetría vertical entre los detalles y los bordes superior e inferior.
            li
              i.fas.fa-circle-chevron-right
              span.mb-0 El trazo debe ser limpio y preciso para facilitar su posterior digitalización o recorte.

    .bg-7.p-4.mb-5(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-12
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Figura 45.
            span Cuello
          .row.justify-content-center.mb-3
            .col-lg-9
              figure.mb-3
                img(src='@/assets/curso/temas/t3/fig45.svg', alt='Pieza técnica correspondiente a una tapa de bolsillo con forma trapezoidal. Tiene un ancho total de 30 cm, dividido en tres segmentos: 2.5 cm, 9.2 cm y 18.3 cm. La altura varía de 5 a 8 cm, con una ligera curva descendente en el borde inferior. Las medidas permiten su montaje simétrico sobre el delantero de una prenda.')
            figcaption Fuente: 
              a(href="https://es.pinterest.com/pin/2533343531454928/" target="_blank") https://es.pinterest.com/pin/2533343531454928/ 
      

    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla 33.
      span Procedimiento técnico trazo del cuello
    .tabla-a.color-acento-botones.mb-5(data-aos='fade')
      table.table-mpad(alt="")
        thead.bg-3
          tr
            th.w-85 Paso
            th Acción a realizar
            th Instrumento sugerido
            th Medidas 
        tbody.text-left
          tr
            td 1
            td Dibujar un rectángulo base de 8 cm de alto por 30 cm de largo.
            td Regla y escuadra.
            td Base general: 8 cm × 30 cm.
          tr
            td 2
            td Marcar desde el borde izquierdo las distancias: 2,5 cm, 9,2 cm y 18,3 cm.
            td Regla milimetrada.
            td Segmentos acumulados en la base.
          tr
            td 3
            td Dibujar el lateral izquierdo con inclinación desde 8 cm hasta 5 cm de altura.
            td Regla o plantilla curva.
            td Inclinación vertical: 8 cm a 5 cm.
          tr
            td 4
            td Del lado derecho, marcar 5 cm en la parte superior y 3 cm en la parte inferior.
            td Regla.
            td Borde derecho: 5 cm arriba / 3 cm abajo.
          tr
            td 5
            td Unir los puntos inferiores con una curva suave desde 2,5 cm hasta el final del patrón.
            td Curvígrafo o mano alzada.
            td Linea curva inferior desde 2,5 cm hasta 30 cm.

    .py-3
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-5.pe-lg-0.bg-1
        .h-100
          img.m-auto.w-70.mtn-10(src='@/assets/curso/temas/t3/35.png', alt='')
      .col-lg-7.px-0
        .bg-8.p-4.p-lg-5.h-100
          h4.mb-4.bg-color-primario.w-fit.px-2 Importante
          ul.lista-ul--color.fa-lista.mb-0
            li
              i.fas.fa-circle-chevron-right
              span.mb-0 La curva inferior puede trazarse con curvígrafo o usando una plantilla elíptica.
            li
              i.fas.fa-circle-chevron-right
              span.mb-0 El patrón tiene una forma trapezoidal con curvatura asimétrica inferior.
            li
              i.fas.fa-circle-chevron-right
              span.mb-0 Asegurar simetría horizontal en el desarrollo para mantener la proporción del diseño.
            li
              i.fas.fa-circle-chevron-right
              span.mb-0 En la línea central se desdobla el patrón en el despiece. 


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
