<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Análisis e interpretación de modelos masculinos

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7(data-aos="fade-right")
        .row.justify-content-center.align-items-end.mb-3
          .col-lg-10
            p.mb-0 La interpretación de prendas masculinas, como la camisa, el polo o la sobrecamisa, representa un ejercicio técnico y analítico de decisiones estructuradas que posibiliten su producción; este proceso inicia con la comprensión de la lógica constructiva de la prenda, es decir, cómo se organiza y se ensambla cada parte de acuerdo con su función y estética. 
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/2.svg', alt='')
        p Para lograrlo, se requiere una combinación de habilidades visuales y técnicas que permitan traducir la prenda a patrones precisos y funcionales, considerando las características del diseño original. 
      .col-lg-5.col-md-10(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/1.png', alt='')

    p.mb-4 El análisis se fundamenta en dos enfoques clave: 

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/3.png', alt='')
      .col-lg-3.col-md-6.mb-3.mb-lg-0
        .bg-tarj.tarjeta.p-4.p-lg-5.h-100
          img.w-85.m-auto.mb-4.mb-lg-5(src='@/assets/curso/temas/t2/4.svg', alt='')
          h4.bg-color-acento-contenido.w-fit.text-white.m-auto.mb-3.px-4.py-1 Lectura visual
          p.text-center Centrada en la silueta, las proporciones y los detalles estilísticos distintivos que definen la identidad de la prenda.
      .col-lg-3.col-md-6
        .bg-tarj.tarjeta.p-4.p-lg-5.h-100
          img.w-85.m-auto.mb-4.mb-lg-5(src='@/assets/curso/temas/t2/4.svg', alt='')
          h4.bg-color-acento-contenido.w-fit.text-white.m-auto.mb-3.px-4.py-1 Lectura técnica
          p.text-center Enfocada en costuras, sistemas de cierre, secuencias de montaje y tolerancias que garantizan la viabilidad industrial del diseño.

    .bloque-texto-g.color-acento-contenido.bg-5.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/5.jpg')})`}")
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 Dominar ambas formas de lectura es esencial para los procesos de patronaje y confección, ya que permite prever la complejidad técnica de la prenda, anticipar posibles dificultades en la elaboración y optimizar los tiempos de producción; además, esta doble interpretación brinda herramientas para realizar ajustes pertinentes según el tipo de tejido utilizado, las propiedades físicas del material o las particularidades del público al que está dirigida la prenda. 

    .row.justify-content-center
      .col-lg-5.col-md-10.mb-3.mb-lg-0
        img(src='@/assets/curso/temas/t2/6.svg', alt='')
      .col-lg-5.col-md-10
        .tarjeta.bg-2.h-100.p-4.p-lg-5
          h4 Por ejemplo
          p.mb-0 Una camisa diseñada para un público joven puede requerir proporciones más ajustadas y materiales con mayor elasticidad, mientras que una sobrecamisa para clima frío demandará estructuras reforzadas y tejidos más pesados. En este sentido, el análisis de modelos masculinos no solo es un ejercicio de observación, sino una competencia estratégica en la industria del diseño y la confección.


    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Lectura visual y técnica de prendas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        .subt(data-aos="fade")
          img(src="@/assets/curso/temas/t2/subt.svg")
          h3.ps-3.pe-4.mb-0 A. Parámetros a tener en cuenta
      .col-lg-8
        p.mb-0 Para realizar una lectura integral y coherente del diseño, es fundamental considerar distintas dimensiones que afectan directamente el patronaje:
    
    TabsC.color-acento-botones.mb-5(data-aos="fade-down")
      .bg-6.py-4.py-md-5(titulo="Dimensión 1")
        .row.align-items-center.justify-content-center
          .col-lg-5.col-md-9.col-10.mb-4.mb-lg-0
            img(src='@/assets/curso/temas/t2/tabs1-1.svg', alt='')
          .col-lg-6.col-10
            h4 Silueta y proporción
            p La silueta y proporción, en la que se analizan variables como la línea de hombro, el escote, la longitud total de la prenda y el nivel de holgura. A partir de esto, se determina si el ajuste responde a una silueta clásica, regular, #[em slim] o #[em oversize], lo cual incide en la elección del bloque base adecuado y en los valores de holgura que se aplicarán al patrón.
      .bg-6.py-4.py-md-5(titulo="Dimensión 2")
        .row.align-items-center.justify-content-center
          .col-lg-5.col-md-9.col-10.mb-4.mb-lg-0
            img(src='@/assets/curso/temas/t2/tabs1-2.svg', alt='')
          .col-lg-6.col-10
            h4 Estructura principal
            p La estructura principal, la cual contempla los elementos fundamentales como el cuerpo, el canesú, el cuello, la manga y el puño. Aquí es clave identificar si existen cortes adicionales como costadillos o paneles, ya que esto impacta directamente en el número de piezas patrón necesarias y en la definición de piquetes de empalme para una correcta confección.
      .bg-6.py-4.py-md-5(titulo="Dimensión 3")
        .row.align-items-center.justify-content-center
          .col-lg-5.col-md-9.col-10.mb-4.mb-lg-0
            img(src='@/assets/curso/temas/t2/tabs1-3.svg', alt='')
          .col-lg-6.col-10
            h4 Detalles funcionales
            p Se consideran los detalles funcionales, tales como tapetas, vistas y sistemas de abotonadura. Es relevante establecer qué tipo de cierre se emplea y su ubicación, ya que esto requiere adicionar márgenes específicos de confección y prever refuerzos interiores para garantizar resistencia y estabilidad en el uso.
      .bg-6.py-4.py-md-5(titulo="Dimensión 4")
        .row.align-items-center.justify-content-center
          .col-lg-5.col-md-9.col-10.mb-4.mb-lg-0
            img(src='@/assets/curso/temas/t2/tabs1-4.svg', alt='')
          .col-lg-6.col-10
            h4 Ornamentos
            p Corresponde a los ornamentos, donde se incluyen elementos como pliegues, tablas, apliques o bordados. En este caso, es importante distinguir si se trata de recursos volumétricos o superficiales, ya que los primeros pueden requerir incrementos o traslados de ancho en el patrón, así como la marcación de guías de ubicación o dobleces.
      .bg-6.py-4.py-md-5(titulo="Dimensión 5")
        .row.align-items-center.justify-content-center
          .col-lg-5.col-md-9.col-10.mb-4.mb-lg-0
            img(src='@/assets/curso/temas/t2/tabs1-5.svg', alt='')
          .col-lg-6.col-10
            h4 Materialidad textil
            p La materialidad de la prenda, definida por el tipo de tejido, su elasticidad y gramaje, esto influye notablemente en la interpretación del patrón. 
            p Si el material requiere mayor movilidad o adaptación al cuerpo, se deberá ajustar la holgura correspondiente y seleccionar técnicas de costura compatibles con las características del textil.

    .subt2.mb-4(data-aos="fade")
      h3.mb-0 Dimensiones y variables en la interpretación de diseños masculinos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p Se refieren a los diferentes aspectos formales y técnicos que se analizan al estudiar una prenda, como la silueta, proporciones, líneas estructurales, funcionalidad, materiales y acabados; las dimensiones permiten descomponer el diseño en elementos medibles y comparables, mientras que las variables definen las posibles variaciones según el estilo, el uso previsto o las tendencias de moda. Su análisis facilita la traducción del diseño en patrones precisos y reproducibles.
      .col-lg-4.col-md-10(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/7.png', alt='')

    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla 4.
      span Dimensiones y variables 
    .tabla-a.color-acento-botones.mb-5(data-aos='fade')
      table(alt="Una tabla organizada en cuatro columnas presenta las dimensiones clave para interpretar diseños masculinos. La primera columna identifica aspectos como silueta, estructura, detalles funcionales, ornamentos y materialidad. La segunda lista variables asociadas como línea de hombro, cortes o tipo de tejido. La tercera columna formula preguntas orientadoras para el análisis técnico, y la cuarta indica el impacto de cada dimensión sobre el patrón, como selección de bloques base, cantidad de piezas, o necesidad de holguras y guías.")
        thead.bg-3
          tr
            th Dimensión de lectura
            th Variables clave
            th Preguntas guía
            th Impacto sobre el patrón
        tbody.text-left
          tr
            td Silueta y proporción
            td Línea de hombro, escote, longitud total, nivel de holgura.
            td ¿El ajuste es clásico, regular, #[em slim] u #[em oversize]?
            td Selección del bloque base y valores de holgura.
          tr
            td Estructura principal
            td Cuerpo, canesú, cuello, manga, puño.
            td ¿Hay cortes adicionales (costadillos, paneles)?
            td Número de piezas patrón y piquetes de empalme.
          tr
            td Detalles funcionales
            td Tapetas, vistas, aberturas, abotonaduras.
            td ¿Qué sistema de cierre se emplea y dónde?
            td Añadido de márgenes y refuerzos interiores.
          tr
            td Ornamentos
            td Pliegues, tablas, apliques, bordados.
            td ¿Son volumétricos o superficiales?
            td Incremento traslado de ancho y marcaje de guías.
          tr
            td Materialidad
            td Tipo de tejido, elasticidad, gramaje.
            td ¿Se requiere holgura extra para movilidad?
            td Ajuste de holguras y selección de costuras.

    .subt.mb-5(data-aos="fade")
      img(src="@/assets/curso/temas/t2/subt.svg")
      h3.ps-3.pe-4.mb-0 B. Ruta paso a paso

    .tarjeta.bg-1.mb-4(data-aos="fade-down")
      .row.justify-content-center
        .col-lg-7
          .h-100.d-flex.align-items-center.p-4
            p.mb-0 El análisis técnico de una prenda comienza con la obtención de una figura base de alta resolución, ya sea a través de una fotografía directa o del escaneo plano de vistas clave como el frente, la espalda y el lateral; esta figura sirve como punto de partida para el desarrollo del análisis estructural y constructivo de la prenda.
        .col-lg-4.mtn-5.d-none.d-lg-block
          img(src="@/assets/curso/temas/t2/8.svg")

    .tarjeta.color-primario.p-3.mb-5(data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/t2/cta1.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Análisis de proporciones prendas superiores
              p.mb-0 Este video ofrece un análisis técnico y detallado de prendas superiores masculinas, orientado a su aplicación en el patronaje industrial.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="('https://youtu.be/oJRhtnimo6Q')" target="_blank")
                span Ir al sitio
                i.fas.fa-circle-play

    .row.bgc-1.align-items-center.p-2.p-md-3.mb-2(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-around.align-items-center.mb-5
            .col-lg-3.d-none.d-lg-block
              img(src="@/assets/curso/temas/t2/9.png")
            .col-lg-8
              .tarjeta.bg-slider.p-3
                SlyderA.p-4(tipo='b')
                  .row
                    .col-md-12
                      p Seguidamente, se procede a superponer ejes estructurales y líneas de referencia como el eje vertical, el eje horizontal, la línea de pecho y la línea de cadera, lo cual puede realizarse utilizando #[em software] de diseño asistido por computador (CAD) o de manera análoga, empleando un acetato sobre la figura impresa. El resultado esperado es una cuadrícula de referencia que permita establecer proporciones precisas.
                      h5 El siguiente paso del análisis técnico consiste en:
                  .row
                    .col-md-6
                      ol.lista-ol.fa-lista
                        li
                          span.text-bold a)
                          | Delimitar visualmente los contornos principales y subcontornos de la  prenda, utilizando herramientas digitales o manuales.
                        li
                          span.text-bold b)
                          | Identificar componentes estructurales, tales como:
                        ul.lista-ul--color.ps-3
                          li.mb-0
                            i.fas.fa-circle-chevron-right
                            | Canesú
                          li.mb-0
                            i.fas.fa-circle-chevron-right
                            | Cortes princesa
                          li.mb-0
                            i.fas.fa-circle-chevron-right
                            | Costadillos o paneles
                    .col-md-6
                      ol.lista-ol.fa-lista
                        li
                          span.text-bold c)
                          | Aplicar códigos de color o capas digitales diferenciadas para cada componente, con el fin de organizarlos visualment
                        li
                          span.text-bold d)
                          | Generar un mapa cromático que facilite la lectura técnica y la identificación clara de cada parte estructural de la prenda.
                  .row
                    .col-md-12
                      p Posteriormente, se incorporan anotaciones numéricas relativas, como relaciones entre el largo total y el ancho de pecho (por ejemplo, largo total = 1,3 × ancho de pecho). Esta información se registra en forma de tabla, empleando herramientas como reglas digitales o calibres virtuales, permitiendo establecer proporciones que servirán como base para el escalado del patrón.
                      p Luego, se marcan las costuras visibles, tales como pespuntes dobles, ribetes o costuras francesas.  El objetivo es construir un inventario de procesos de confección que deberán considerarse en la interpretación del patrón.
                  .row
                    .col-md-12
                      p Con estos pasos desarrollados, se procede a identifican los recursos móviles o funcionales como #[em plackets], pinzas, pliegues de caja o aberturas. Esta acción puede ser apoyada mediante pruebas sobre #[em mock-ups] en papel, y su resultado es una lista clara de puntos donde la prenda se adapta o se expande para facilitar el uso.
                    .col-md-6
                      h5 Para finalizar esta etapa, se elabora una ficha técnica preliminar que consolida:
                      ul.lista-ul--color
                        li.mb-0
                          i.fas.fa-circle-chevron-right
                          | Un croquis detallado de la prenda.
                        li.mb-0
                          i.fas.fa-circle-chevron-right
                          | Observaciones estructurales relevantes.
                        li.mb-0
                          i.fas.fa-circle-chevron-right
                          | Anotaciones funcionales sobre componentes y procesos.
                    .col-md-6
                      p Esta ficha se construye sobre una plantilla institucional (como las del SENA o formatos en Excel) y constituye el documento base de respaldo para dar inicio al desarrollo del patrón definitivo.

    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla 5.
      span Proceso de análisis de prendas
    .tabla-a.color-acento-botones(data-aos='fade')
      table(alt="Una tabla de siete filas describe el proceso secuencial para el análisis técnico de prendas. Cada fila corresponde a un paso específico: inicia con la captura del modelo mediante fotografía o escáner, seguido por la superposición de ejes estructurales y la delimitación de contornos. Luego, se anotan proporciones numéricas y se marcan costuras visibles. También se identifican recursos móviles y finalmente se elabora una ficha técnica preliminar. Cada acción operativa se asocia con una herramienta sugerida y un resultado esperado, como mapas cromáticos, tablas proporcionales o documentos técnicos para patronaje.")
        thead.bg-3
          tr
            th.w-85 Paso
            th Acción operativa
            th Herramienta sugerida
            th Resultado esperado
        tbody.text-left
          tr
            td.fw-bold.text-center 1.
            td Fotografiar o escanear el modelo (frente / espalda / lateral)
            td Cámara / escáner plano
            td Figura base en alta resolución
          tr
            td.fw-bold.text-center 2.
            td Superponer ejes vertical / horizontal, líneas de pecho y cadera
            td #[em Software] CAD o acetato sobre impreso
            td Cuadrícula de referencia proporcional
          tr
            td.fw-bold.text-center 3.
            td Delimitar contorno y sub-contorno (costadillos, canest) con color
            td Marcador o capa digital
            td Mapa cromático de componentes
          tr
            td.fw-bold.text-center 4.
            td Anotar relaciones numéricas (ej.: largo total = 1,3 x ancho pecho)
            td Regla virtual/calibre digital
            td Tabla de proporciones relativas
          tr
            td.fw-bold.text-center 5.
            td Marcar costuras visibles (doble pespunte, ribete, #[em french seam])
            td Lupa / #[em zoom] CAD
            td Inventario de procesos de confección
          tr
            td.fw-bold.text-center 6.
            td Identificar recursos móviles (#[em placket], pinzas, pliegues de caja)
            td Pinzas de papel sobre #[em mock-up]
            td Lista de puntos de holgura y apertura
          tr
            td.fw-bold.text-center 7.
            td Completar ficha técnica preliminar (croquis + observaciones)
            td Plantilla SENA / Excel
            td Documento de respaldo para patronaje


    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Elementos estructurales de la prenda

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/10.jpg')})`}")
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 En una camisa masculina, cada pieza cumple una función morfológica precisa que condiciona el patronaje, el montaje y la ergonomía final. Conocer estos elementos estructurales permite descomponer cualquier diseño e interpretar qué parámetros deben modificarse para reproducir la silueta, la holgura y los detalles propuestos por el creador. A continuación, se describe, en lenguaje técnico académico, la anatomía fundamental y las implicaciones de trazo de los cinco bloques esenciales: cuerpo, canesú, cuello, manga y puño.

    .row.justify-content-center.mb-3
      .col-lg-6.mb-4(data-aos='fade-right')
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 2.
          span Partes de una camisa delantero
        figure.mb-2
          img(src='@/assets/curso/temas/t2/fig2.svg', alt='Camisa de manga larga representada con etiquetas que señalan partes fundamentales de su estructura. En la parte superior se encuentra el cuello y su punto de unión central. A los costados, en la unión entre manga y cuerpo, se ubican las sisas. En el frente, del lado izquierdo, hay un bolsillo de parche. La botonadura central corresponde al cruce de botones o tapeta, donde también se encuentran los ojales y botones. En el extremo de la manga se encuentra el puño, mientras que la zona principal del cuerpo se denomina delantero')
        figcaption Fuente: 
          a(href="https://123dreamit.com/todo-lo-que-debes-saber-acerca-de-la-camisa/" target="_blank") https://123dreamit.com/todo-lo-que-debes-saber-acerca-de-la-camisa/
      .col-lg-6.mb-4(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 3.
          span Partes de una camisa posterior
        figure.mb-2
          img(src='@/assets/curso/temas/t2/fig3.svg', alt='Vista trasera de una camisa con indicaciones anatómicas del diseño. En la parte superior se encuentra el canesú o bata, acompañado por un bucle central y un pliegue de espalda que facilita el movimiento. Las mangas cuentan con aletilla y la zona inferior con pinzas para ajuste y un faldón de camisa que prolonga el largo posterior. La parte central del cuerpo se identifica como trasero.')
        figcaption Fuente: 
          a(href="https: https://123dreamit.com/todo-lo-que-debes-saber-acerca-de-la-camisa/" target="_blank") https: https://123dreamit.com/todo-lo-que-debes-saber-acerca-de-la-camisa/

    .row.bgc-slider.align-items-center.p-3.p-md-4.p-lg-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center.align-items-center
            .tarjeta.tarjeta--blanca.p-4
              LineaTiempoC.color-acento-contenido
                .row.align-items-center.justify-content-around(titulo="Cuerpo")
                  .col-11.col-lg-6.mb-4.mb-md-0
                    h4 Cuerpo (delantero y espalda)
                    p El cuerpo constituye el soporte principal de la prenda y define la silueta global. Su trazo parte de un rectángulo cuyas anchuras derivan de la mitad del contorno de pecho, cintura y cadera, incrementadas por la holgura correspondiente. La bajada de sisa (¼ pecho + 2 cm) y la inclinación de hombro (2–3 cm) reproducen la anatomía torácica; el dobladillo puede ser recto industrial o curvo deportivo según el estilo.
                  .col-11.col-md-9.col-lg-6.col-lg-4
                    img(src='@/assets/curso/temas/t2/slider2-1.png', alt='')
                .row.align-items-center.justify-content-around(titulo="Canesú")
                  .col-11.col-lg-6.mb-4.mb-md-0
                    h4 Canesú
                    p Pieza estabilizadora que se coloca en la parte superior de la espalda (a 6–8 cm bajo el punto alto de cuello) para absorber la curvatura dorsal y evitar deformaciones en el hombro. Puede ser corrido (continúa hacia el delantero) o segmentado (solo espalda). Su largo debe igualar el recorrido de hombro en el delantero para evitar tensiones.
                  .col-11.col-md-9.col-lg-6.col-lg-4
                    img(src='@/assets/curso/temas/t2/slider2-2.png', alt='')
                .row.align-items-center.justify-content-around(titulo="Cuello")
                  .col-11.col-lg-6.mb-4.mb-md-0
                    h4 Cuello (pie + pala)
                    p El cuello se compone de un pie (#[em stand:] base o pie del cuello) que abraza el escote y una pala (#[em fall:] parte doblada del cuello) que descansa sobre el pecho. El largo total equivale al perímetro de escote más 1 cm de facilidad. El pie suele medir 3 cm de alto en el centro y la pala presenta una caída frontal de 4–5 cm. La línea de quiebre (#[em roll line]) se marca a 1,5 cm del borde de ensamblaje para garantizar un virado limpio.
                  .col-11.col-md-9.col-lg-6.col-lg-4
                    img(src='@/assets/curso/temas/t2/slider2-3.png', alt='')
                .row.align-items-center.justify-content-around(titulo="Manga")
                  .col-11.col-lg-6.mb-4.mb-md-0
                    h4 Manga
                    p Diseñada para alojar el brazo sin restringir la movilidad, la manga se traza a partir de su ancho de bíceps (medido + holgura) y una altura de copa aproximada de (contorno de sisa ÷ 3) + 2 cm. La costura lateral se adelanta 2 cm hacia el delantero para equilibrar la rotación natural del brazo; a nivel de codo se suele añadir 1 cm extra en el trasero para flexión.
                  .col-11.col-md-9.col-lg-6.col-lg-4
                    img(src='@/assets/curso/temas/t2/slider2-4.png', alt='')
                .row.align-items-center.justify-content-around(titulo="Puño")
                  .col-11.col-lg-4.mb-4.mb-md-0
                    h4 Puño
                    p Elemento de cierre que regula la boca de la manga. Su rectángulo desplegado equivale al contorno de muñeca más 5–6 cm de solapa y un alto total de 7 cm (acabado 3,5 cm). La ranura de placket (10–12 cm) se refuerza con una torre o tapeta para facilitar el abotonado sin deformar la copa de manga.
                  .col-12.col-md-11.col-lg-7
                    .tarjeta.bg-7.p-2
                      SlyderA.figuras.p-3(tipo='a')
                        .row
                          .col-12
                            .titulo-sexto.color-acento-contenido.mb-2
                              h5 Figura 4.
                              span Partes de un cuello
                            .row.justify-content-center.mb-2
                              .col-md-8.col-10
                                figure
                                  img(src='@/assets/curso/temas/t2/fig4.svg', alt='Estructura anatómica del cuello de una camisa. La parte superior corresponde al doblez de cuello, mientras que la sección que lo sostiene desde la base se denomina pie de cuello. La línea interna horizontal indica la base del cuello, las puntas marcan el largo frontal, y el espacio entre ellas define el ensanche. Cada componente cumple una función estructural y estética dentro del diseño de la prenda.')
                            figcaption Fuente: 
                              a(href=" https://123dreamit.com/todo-lo-que-debes-saber-acerca-de-la-camisa/" target="_blank") https://123dreamit.com/todo-lo-que-debes-saber-acerca-de-la-camisa/
                        .row
                          .col-12
                            .titulo-sexto.color-acento-contenido.mb-2
                              h5 Figura 5.
                              span Tipos de cuellos
                            .row.justify-content-center.mb-2
                              .col-md-10.col-10
                                figure
                                  img(src='@/assets/curso/temas/t2/fig5.svg', alt='Conjunto de ocho tipos de cuellos de camisa, clasificados según su forma y función. El cuello mandarín o mao es corto y recto, sin solapas. El cuello francés tiene puntas abiertas hacia los costados, ideal para corbatas anchas. El cuello con botones abajo presenta botones en las puntas para sujetarlo al cuerpo de la camisa. El clásico o inglés tiene puntas ligeramente inclinadas hacia abajo, equilibrado para usos formales. El cuello para pajarita o smoking presenta base estrecha y puntas pequeñas, diseñado para corbatín. El cuello tipo banda es una tira recta sin doblez. El cuello de ojal tiene un espacio central diseñado para pasar un broche o accesorio decorativo. El cuello italiano se caracteriza por tener puntas cortas y muy abiertas hacia los lados.')
                            figcaption Fuente: 
                              a(href="https://123dreamit.com/todo-lo-que-debes-saber-acerca-de-la-camisa/" target="_blank") https://123dreamit.com/todo-lo-que-debes-saber-acerca-de-la-camisa/
                        .row
                          .col-12
                            .titulo-sexto.color-acento-contenido.mb-2
                              h5 Figura 6.
                              span Tipos de puños 
                            .row.justify-content-center.mb-2
                              .col-md-10.col-10
                                figure
                                  img(src='@/assets/curso/temas/t2/fig6.svg', alt='Clasificación de distintos tipos de puños utilizados en camisas, según su forma y sistema de cierre. El puño ángulo con uno o dos botones tiene terminación en punta inclinada. El puño redondo presenta bordes curvos y puede cerrarse con uno o dos botones. El puño recto, también con opción de uno o dos botones, tiene terminación plana y líneas perpendiculares. El puño recto corto es una versión más baja del puño recto convencional. Los modelos dobles, diseñados para usarse con mancuernillas, incluyen el doble angulado con terminación en punta, el doble recto con bordes rectos, y el doble redondo con terminación curva.')
                            figcaption Fuente: 
                              a(href="https://123dreamit.com/todo-lo-que-debes-saber-acerca-de-la-camisa/" target="_blank") https://123dreamit.com/todo-lo-que-debes-saber-acerca-de-la-camisa/


    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Estudio de cortes, detalles funcionales y ornamentales

    .mb-3(data-aos="fade")
      .titulo-sexto.color-acento-contenido.mb-4
        h5 Figura 7.
        span Diseño de botoneras y cuellos
      .row.justify-content-center.mb-4
        .col-lg-9
          figure
            img(src='@/assets/curso/temas/t2/fig7.svg', alt='Seis tipos de tapetas o acabados en la parte frontal de camisas, clasificados según su construcción. La front placket presenta una banda visible donde se cosen los botones, estructurada por doblez de tela. La french placket omite la banda externa, dejando los botones sobre una doblez interna, lo que genera una apariencia más limpia. La popover placket combina tapeta y cuello en una sola pieza continua con una abertura parcial que no recorre toda la camisa. La covered placket incluye una capa adicional de tela que cubre los botones. La pleated tuxedo incorpora pliegues verticales decorativos a ambos lados de la tapeta, típicos en camisas de etiqueta. La tuxedo front mantiene una superficie lisa y estructurada, con botones visibles y sin pliegues.')
      figcaption Fuente: 
        a(href="https://www.nimble-made.com/blogs/news/dress-shirt-placket" target="_blank") https://www.nimble-made.com/blogs/news/dress-shirt-placket 

    .bg-1.px-lg-5.p-4.mb-4
      p.mb-0 Comprender cómo se segmenta una camisa masculina en cortes, cómo se articulan sus detalles funcionales y cómo se añaden recursos ornamentales es imprescindible para traducir cualquier propuesta de diseño en un patrón técnicamente viable. El siguiente desarrollo combina redacción explicativa, tablas comparativas y una ruta operativa paso a paso.

    .row.bgcc-1.align-items-center.p-2.p-md-3.pt-3.pt-md-4.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center.align-items-center
            .col-lg-6.mb-3
              .titulo-sexto.color-acento-contenido.mb-4
                h5 Figura 8.
                span Trazo botonera clásica
              .row.justify-content-center.mb-3
                .col-lg-5.col-md-7.col-10
                  figure
                    img(src='@/assets/curso/temas/t2/fig8.svg', alt='La figura presenta el diseño técnico del delantero de una camisa con el trazo de la botonera clásica integrada. Incluye la prolongación de 3 cm hacia el borde para formar la botonera, con una línea punteada que indica el doblez central y una línea recta adicional a 1,5 cm que representa la ubicación de los ojales o botones.')
            .col-lg-6.mb-3
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 9.
                span Trazo botonera sencilla
              .row.justify-content-center.mb-3
                .col-lg-5.col-md-7.col-10
                  figure
                    img(src='@/assets/curso/temas/t2/fig8.svg', alt='La figura representa el trazo del delantero de una camisa con botonera sencilla. El diseño incluye una prolongación de 3 cm hacia el borde para formar la botonera, junto con una marca interna a 1 cm del borde que indica el doblez interior para el acabado del cruce.')
            .col-lg-6.mb-3
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 10.
                span Trazo botonera oculta
              .row.justify-content-center.mb-3
                .col-lg-5.col-md-7.col-10
                  figure
                    img(src='@/assets/curso/temas/t2/fig8.svg', alt='La figura representa el trazo del delantero de una camisa con botonera oculta. Se indican tres líneas paralelas: una prolongación externa de 4 cm, una pieza central de 6 cm y una solapa interna de 1,5 cm que permite cubrir los botones mediante dobleces sucesivos.')
            .col-lg-6.mb-3
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 11.
                span Trazo botonera separada 
              .row.justify-content-center.mb-3
                .col-lg-5.col-md-7.col-10
                  figure
                    img(src='@/assets/curso/temas/t2/fig8.svg', alt='La figura presenta el diseño del delantero de una camisa con botonera separada. El trazo incluye una pieza independiente conformada por tres franjas: dos de 3 cm para doblez y una de 1 cm para terminación, mientras que el cuerpo del delantero incorpora un margen de costura de 0,5 cm para la unión de ambas partes.')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        .subt(data-aos="fade")
          img(src="@/assets/curso/temas/t2/subt.svg")
          h3.ps-3.pe-4.mb-0 A. Cortes estructurales
      .col-lg-8
        p.mb-0 Los cortes alteran la arquitectura del bloque base para aportar ajuste, volumen controlado o variaciones estéticas.                    

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-8(data-aos='fade-right')
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 6.
          span Recomendaciones sobre modificación de bases para cortes
        .tabla-a.color-acento-botones.table-mpad
          table(alt="Una tabla de cuatro filas describe ajustes técnicos en el patronaje según el tipo de corte. Se señalan el costadillo lateral, el panel frontal, el canesú segmentado y el panel contrastado. Para cada uno, se especifica su ubicación frecuente en la prenda como delantero, espalda o tapeta y las implicaciones técnicas necesarias para su trazo, que incluyen traslados de entalle, curvas con radio definido, cortes desde el cuello y duplicación de piezas con márgenes de costura.")
            thead.bg-3
              tr
                th.w-130 Corte
                th Ubicación típica
                th Objetivo morfológico
                th Implicaciones de trazo 
            tbody
              tr
                td.fw-bold Costadillo lateral
                td Delantero y/o espalda.
                td Definir cintura sin pinzas.
                td Trasladar 2 – 3 cm de entalle lateral; añadir costura 1 cm.
              tr
                td.fw-bold Panel frontal
                td Delantero desde sisa a bajo.
                td Esbeltecer torso; resaltar pecho.
                td Curvar con radio 1,5 cm; controlar puntos en sisa.
              tr
                td.fw-bold Canesú segmentado
                td Espalda alta.
                td Estabilizar hombros; permitir mezcla tejidos.
                td Cortar a 6–8 cm del cuello; igualar recorrido hombro.
              tr
                td.fw-bold Panel contrastado
                td Pechera o tapeta.
                td Generar punto focal cromático.
                td Duplicar pieza; prever márgenes para pespunte visible.
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src="@/assets/curso/temas/t2/11.png") 
      .col-12
        table
          caption Fuente: SENA, (2025)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        .subt(data-aos="fade")
          img(src="@/assets/curso/temas/t2/subt.svg")
          h3.ps-3.pe-4.mb-0 B. Detalles funcionales
      .col-lg-8
        p.mb-0 Constituyen los mecanismos que posibilitan apertura, ajuste o refuerzo de zonas críticas. 

    .row.justify-content-center
      .col-lg-8(data-aos='fade-right')
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 7.
          span Recomendaciones para variantes cortes en camisa
        .tabla-a.color-acento-botones
          table(alt=" Una tabla que presenta cinco tipos de detalles comunes en camisas: abertura frontal, abertura de manga, bolsillo, vistas internas y pinzas de movimiento. Para cada uno se listan sus variantes más frecuentes como el tipo de vista, forma del bolsillo o ubicación de la pinza, así como instrucciones técnicas específicas de patronaje, como medidas para añadir vistas, márgenes de costura o ángulos y longitudes recomendadas para cortes y pliegues.")
            thead.bg-3
              tr
                th.w-130 Detalle
                th Variantes usuales
                th Función
                th Puntos técnicos claves 
            tbody
              tr
                td.fw-bold Abertura frontal
                td Clásico, francés, cubierto.
                td Apertura principal y soporte botones.
                td Añadir vista 3 cm × 1,5 cm; reforzar con entretela.
              tr
                td.fw-bold Abertura de manga
                td Torre, continuo.
                td Facilitar entrada mano; evitar deformación copa.
                td Ranura 10 – 12 cm; ángulo vértice = 60°.
              tr
                td.fw-bold Bolsillo
                td Parche, ribete, ojal.
                td Almacenaje; énfasis decorativo.
                td Centrar a 7 cm – 9 cm del P.H.C.; margen vuelta 1 cm.
              tr
                td.fw-bold Vistas internas
                td Delantero, cuello, bajo.
                td Ocultar costuras y reforzar tensiones.
                td Calcar silueta exterior – 2 mm; entretelar.
              tr
                td.fw-bold Pinzas de movimiento
                td Bajo canesú, codo.
                td Compensar flexión dorsal o articular.
                td Pliegues de 3 cm o pinza simple 1,5 cm.
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src="@/assets/curso/temas/t2/12.png") 


    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4 Adaptación de modelos para moda casual 
    
    .bloque-texto-g.color-acento-contenido.bg-5.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/13.jpg')})`}")
      .bloque-texto-g__texto.p-4.p-md-5
        p.mb-0 La adaptación de una camisa masculina, originalmente concebida para contextos formales, hacia una propuesta de moda casual implica realizar ajustes en las proporciones, las holguras, los acabados y los materiales, con el objetivo de obtener una prenda más versátil, cómoda y adecuada para el uso cotidiano. El proceso se estructura en torno a tres capas de decisión fundamentales:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-4.col-md-6.mb-3
        .tarjeta.bg-tarj2.p-4.p-lg-5.h-100
          img.w-85.m-auto.mb-4(src='@/assets/curso/temas/t2/14.svg', alt='')
          h4.mb-3.px-4.py-1 Principios de diseño 
          p.text-center.mb-0 Redefinición de la silueta, paleta de color, tipo de tejido y estilo general de la prenda en función del contexto casual.
      .col-lg-4.col-md-6.mb-3
        .tarjeta.bg-tarj2.p-4.p-lg-5.h-100
          img.w-85.m-auto.mb-4(src='@/assets/curso/temas/t2/15.svg', alt='')
          h4.mb-3.px-4.py-1 Ajustes sobre el patrón base
          p.text-center.mb-0 Modificación de líneas de corte, grados de holgura, largos y detalles constructivos que permitan una mayor funcionalidad y relajación en el diseño.
      .col-lg-4.col-md-6.mb-3
        .tarjeta.bg-tarj2.p-4.p-lg-5.h-100
          img.w-85.m-auto.mb-4(src='@/assets/curso/temas/t2/16.svg', alt='')
          h4.mb-3.px-4.py-1 Acabados y recursos técnicos
          p.text-center.mb-0 Selección de terminaciones visibles e interiores (como costuras, dobladillos o pespuntes decorativos), incorporación de elementos funcionales (como bolsillos o tapetas), y uso de recursos tecnológicos compatibles con la confección industrial o artesanal del modelo casual.

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t2/subt.svg")
      h3.ps-3.pe-4.mb-0 A. Principios de diseño: qué debe cambiar al pasar de lo formal a lo casual

    .row.justify-content-center.mb-5
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/17.png', alt='')
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-primario")
          .row.justify-content-center(titulo="a) Silueta general")
            .col-md-11.mb-4.mb-md-0
              ul.lista-ul--color.fa-lista
                li.mb-1
                  i.fas.fa-circle-chevron-right
                  span.mb-0 De líneas estructuradas y ajustadas → a formas más relajadas y orgánicas.
                li.mb-0
                  i.fas.fa-circle-chevron-right
                  span.mb-0 Se buscan cortes menos rígidos y con mayor movilidad corporal.
          .row.justify-content-center(titulo="b) Proporciones")
            .col-md-11.mb-4.mb-md-0
              ul.lista-ul--color.fa-lista.mb-0
                li.mb-1
                  i.fas.fa-circle-chevron-right
                  span.mb-0 Se amplían ciertas áreas como mangas, largo de prenda o contorno de torso para permitir comodidad.
                li.mb-0
                  i.fas.fa-circle-chevron-right
                  span.mb-0 Puede haber asimetrías o proporciones no convencionales que rompan con la rigidez formal.
          .row.justify-content-center(titulo="c) Paleta de color y estampados")
            .col-md-11.mb-4.mb-md-0
              ul.lista-ul--color.fa-lista.mb-0
                li.mb-1
                  i.fas.fa-circle-chevron-right
                  span.mb-0 De colores neutros y sobrios (como blanco, gris, azul marino) → a tonos más vivos, cálidos o combinaciones contrastantes.
                li.mb-0
                  i.fas.fa-circle-chevron-right
                  span.mb-0 Se incorporan estampados, rayas informales, cuadros o patrones creativos.
          .row.justify-content-center(titulo="d) Materiales y texturas")
            .col-md-11.mb-4.mb-md-0
              ul.lista-ul--color.fa-lista.mb-0
                li.mb-1
                  i.fas.fa-circle-chevron-right
                  span.mb-0 De tejidos rígidos o brillantes (como el popelín o satén) a telas con mayor suavidad, porosidad o elasticidad (como lino, algodón lavado o mezclas con elastano).
                li.mb-0
                  i.fas.fa-circle-chevron-right
                  span.mb-0 Se prioriza el confort térmico, el tacto suave y el acabado natural.
          .row.justify-content-center(titulo="e) Detalles de diseño")
            .col-md-11.mb-4.mb-md-0
              ul.lista-ul--color.fa-lista.mb-0
                li.mb-1
                  i.fas.fa-circle-chevron-right
                  span.mb-0 Se eliminan o transforman elementos típicos del estilo formal (como puños con gemelos, cuellos rígidos o pinzas marcadas).
                li.mb-0
                  i.fas.fa-circle-chevron-right
                  span.mb-0 Se incorporan recursos decorativos o utilitarios: bolsillos amplios, botones visibles, costuras expuestas, dobladillos simples.
          .row.justify-content-center(titulo="f) Percepción de uso")
            .col-md-11.mb-4.mb-md-0
              ul.lista-ul--color.fa-lista.mb-0
                li.mb-1
                  i.fas.fa-circle-chevron-right
                  span.mb-0 De una prenda asociada a contextos laborales o ceremoniales a una pieza apta para el día a día, lo urbano, lo recreativo o incluso lo híbrido (casual-#[em smart]).
            
    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla 8.
      span Recomendaciones de interpretación sobre básico masculino
    .tabla-a.color-acento-botones.mb-5(data-aos='fade')
      table.table-mpad(alt="Tabla que resume consideraciones clave para adaptar un básico masculino en contextos formales y casuales. Se comparan dimensiones como silueta, cuello, dobladillo, cierre frontal, tejido y color/estampado. Para cada una se establecen ajustes específicos: desde estructuras más rígidas y entalles moderados en el enfoque formal, hasta opciones con mayor holgura, tejidos más suaves y estampados diversos en el replanteo casual. Finalmente, se indica el efecto buscado en la prenda, como portabilidad, facilidad de uso o refuerzo de estilo relajado.")
        thead.bg-3
          tr
            th.w-170 Dimensión
            th Foco formal
            th Replanteo casual
            th Efecto buscado en la prenda
        tbody
          tr
            td.fw-bold Silueta
            td Entalle moderado, largo para vestir por dentro.
            td Holgura adicional en pecho (+ 1 cm) y manga (+ 0.5 cm); largo reducido 3–4 cm.
            td Portabilidad fuera del pantalón, caída natural.
          tr
            td.fw-bold Cuello
            td Camisero rígido, varillas.
            td #[em Button-down], mao o #[em camp] collar con #[em interfacing] suave.
            td Aire relajado y menor mantenimiento.
          tr
            td.fw-bold Dobladillo
            td Curvo pronunciado.
            td Curvo bajo, leve asimetría o recto con aberturas laterales.
            td Estética informal y libertad de movimiento.
          tr
            td.fw-bold Cierre frontal
            td Tapeta clásica visible.
            td Tapeta francesa, vista oculta o cierre automático.
            td Limpieza visual, facilidad de uso.
          tr
            td.fw-bold Tejido
            td Popelina, #[em twill] fino.
            td #[em Oxford, denim] liviano, lino, #[em chambray].
            td Texturas táctiles, transpirabilidad.
          tr
            td.fw-bold Color/estampado
            td Sólidos neutros.
            td Cuadros, rayas #[em bold], tonos pastel, #[em prints] micro.
            td Refuerzo de personalidad casual.

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t2/subt.svg")
      h3.ps-3.pe-4.mb-0 B.	Ajustes sobre el patrón base

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8.pe-lg-0
        .bg-8.h-100.p-4.p-lg-5
          h4.mb-4.bg-color-primario.w-fit.px-2 La adaptación a moda casual requiere intervenir el patrón base mediante:
          ul.lista-ul--color.fa-lista.mb-0.px-lg-4
            li
              i.fas.fa-circle-chevron-right
              span.mb-0 Incremento de holguras para mayor comodidad y calce relajado.
            li
              i.fas.fa-circle-chevron-right
              span.mb-0 Rediseño de líneas de corte, simplificando estructuras formales o incorporando paneles funcionales.
            li
              i.fas.fa-circle-chevron-right
              span.mb-0 Modificación de proporciones, ajustando largos y detalles como el tipo de cuello.
            li
              i.fas.fa-circle-chevron-right
              span.mb-0 Simplificación de componentes, eliminando elementos rígidos y añadiendo recursos funcionales.
            li
              i.fas.fa-circle-chevron-right
              span.mb-0 Adecuación a nuevos materiales, ajustando tolerancias según el comportamiento textil.
            li.mb-0
              i.fas.fa-circle-chevron-right
              span.mb-0 Actualización de marcaciones, para facilitar la confección en contextos industriales o artesanales.
      .col-lg-4.ps-lg-0.d-none.d-lg-block
        .bg-5.h-100.d-flex.align-items-end.img-t2.deco
          img(src='@/assets/curso/temas/t2/18.svg', alt='')

    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla 9.
      span Recomendaciones de ajuste sobre patrón base
    .tabla-a.color-acento-botones.mb-5(data-aos='fade')
      table.table-mpad(alt="Tabla con recomendaciones técnicas para ajustar un patrón base en diversas zonas de una prenda masculina. Incluye intervenciones como desplazamiento de costados para modificar el ajuste, recorte del largo del cuerpo, definición de dobladillo recto con aberturas laterales, transformación del cuello tipo mao, incorporación de una trabilla interna para enrollar la manga (roll-up) y redimensionamiento de bolsillos utilitarios.")
        thead.bg-3
          tr
            th.w-170 Zona
            th Operación de patronaje
            th Parámetro guía
            th Márgenes recomendados
        tbody
          tr
            td.fw-bold Costados
            td Desplazar la línea lateral 0,5–1 cm hacia afuera (de ajuste #[em slim] a versión casual).
            td Pecho + 4 cm de holgura total.
            td 1 cm de costura.
          tr
            td.fw-bold Largo del cuerpo
            td Recortar 3–4 cm en el dobladillo.
            td El bajo queda 5 cm por debajo de la cadera alta.
            td 1,5 cm de dobladillo.
          tr
            td.fw-bold Dobladillo recto
            td Trazar línea horizontal y añadir aberturas laterales de 4 cm.
            td Marcaje mediante piquetes.
            td Vuelta doble de 3 cm.
          tr
            td.fw-bold Cuello mao
            td Sustituir la pala; reducir el pie a 2,5 cm.
            td Largo = contorno del escote + 1 cm.
            td 0,7 cm de costura.
          tr
            td.fw-bold Manga remangable (#[em roll-up])
            td Añadir trabilla de 2,5 x 11 cm en la costura interior.
            td Colocar la trabilla a 6 cm por encima del codo.
            td 0,7 cm de costura en la trabilla.
          tr
            td.fw-bold Bolsillos utilitarios
            td Ampliar a 12 x 14 cm y colocar tapa con ángulo de 60°.
            td Situar a 8 cm bajo el Punto Alto de Pecho (PAP).
            td 1 cm de costura.

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t2/subt.svg")
      h3.ps-3.pe-4.mb-0 C.	Patrón de bolsillo industrial

    .bgi-1.mb-4(data-aos="fade-down")
      .row.justify-content-center
        .col-lg-5.grad-bloque
          img(src='@/assets/curso/temas/t2/19.png', alt='')
        .col-lg-7
          .h-100.d-flex.align-items-center.p-4.p-lg-5
            p.mb-0 Es la plantilla técnica que define la forma, medidas y márgenes necesarios para confeccionar un bolsillo en producción en serie; incluye la pieza del cuerpo del bolsillo, márgenes de costura, guías de ubicación y, si aplica, la tapeta. Se diseña considerando el tipo de tejido, la funcionalidad del bolsillo y los requerimientos del proceso industrial, garantizando precisión, facilidad de ensamblaje y acabados uniformes.

    .row.bgcc-1.align-items-center.p-2.p-md-3.mb-2.d-none.d-lg-block(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-4
                h5 Figura 12.
                span Trazo del patrón del bolsillo industrial
              .row.justify-content-center.mb-3
                .col-lg-8.col-md-7.col-10
                  figure
                    img(src='@/assets/curso/temas/t2/fig12.svg', alt='Molde técnico de bolsillo de parche con terminación en punta. El ancho total del bolsillo es de 13 cm y el largo es de 14 cm. En la parte superior se indica un doblez hacia el reverso de 3 cm, que forma la vista interna. En la parte inferior, las esquinas se pliegan 1.5 cm hacia el centro, generando un vértice que facilita el remate.')
            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-4
                h5 Figura 13.
                span Trazo del patrón del bolsillo industrial
              .row.justify-content-center.mb-3
                .col-lg-5.col-md-7.col-10
                  figure
                    img(src='@/assets/curso/temas/t2/fig13.svg', alt='Esquema técnico comparativo de dos tipos de bolsillos de parche con forma en punta. El primero, en la parte superior, tiene un ancho de 13 cm, altura de 7 cm y vértice inferior formado por dobleces de 2.5 cm desde cada extremo hacia el centro. El segundo bolsillo, en la parte inferior, tiene las mismas medidas de ancho (13 cm), pero un largo mayor (14 cm) e incluye una vista superior doblada hacia el reverso de 3 cm.')
    
    .row.justify-content-center(data-aos="fade-down")
      .col-lg-6.mb-5
        .d-block.d-lg-none  
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Figura 12.
            span Trazo del patrón del bolsillo industrial
          .row.justify-content-center.mb-3
            .col-lg-8.col-md-7.col-10
              figure
                img(src='@/assets/curso/temas/t2/fig12.svg', alt='Molde técnico de bolsillo de parche con terminación en punta. El ancho total del bolsillo es de 13 cm y el largo es de 14 cm. En la parte superior se indica un doblez hacia el reverso de 3 cm, que forma la vista interna. En la parte inferior, las esquinas se pliegan 1.5 cm hacia el centro, generando un vértice que facilita el remate.')
        figcaption Fuente: SENA, (2025)   
        TabsA.color-acento-botones.mt-4.mb-4.mb-lg-3
          .tarjeta.bg-7.p-4(titulo="PASO 1")
            h4 PASO 1
            p Se traza un rectángulo vertical de base 13 cm y altura total de 14 cm, correspondiente al largo del bolsillo.
          .tarjeta.bg-7.p-4(titulo="PASO 2")
            h4 PASO 2
            p Desde la parte superior del rectángulo, se mide hacia abajo 3 cm para marcar la línea de doblez superior del bolsillo. Esta sección corresponde al dobladillo superior.
          .tarjeta.bg-7.p-4(titulo="PASO 3")
            h4 PASO 3
            p Desde cada extremo inferior del rectángulo (esquinas inferiores), se mide hacia adentro 1,5 cm sobre la base inferior, marcando esos puntos como extremos del triángulo inferior del bolsillo.
          .tarjeta.bg-7.p-4(titulo="PASO 4")
            h4 PASO 4
            p Se une cada uno de esos puntos de 1,5 cm con el centro del borde inferior, formando una punta simétrica hacia abajo. Esta línea crea la forma característica del bolsillo con terminación en “V”.
          .tarjeta.bg-7.p-4(titulo="PASO 5")
            h4 PASO 5
            p En la parte superior del rectángulo, se refuerzan visualmente los extremos superiores con triángulos pequeños que simulan la posición de los remates o refuerzos de costura. Estas figuras se sitúan en los bordes del margen superior de 3 cm.
        .tarjeta.bgi-2
          .bg-color-acento-contenido.bt-r.p-3.mb-0
            h4.text-white.text-center.mb-0 Notas
          .p-4
            ul.lista-ul--color.fa-lista.mb-0.px-lg-4
              li
                i.fas.fa-circle-chevron-right
                span.mb-0 El patrón está pensado para ser cortado con 1 cm de margen de costura en todo su contorno.
              li
                i.fas.fa-circle-chevron-right
                span.mb-0 El doblez superior de 3 cm puede ser planchado y cosido para reforzar la boca del bolsillo.
              li.mb-0
                i.fas.fa-circle-chevron-right
                span.mb-0 La simetría entre los lados debe verificarse usando una escuadra central o doblando el patrón a la mitad.
      .col-lg-6.mb-5 
        .d-block.d-lg-none
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Figura 13.
            span Trazo del patrón del bolsillo industrial
          .row.justify-content-center.mb-3
            .col-lg-5.col-md-7.col-10
              figure
                img(src='@/assets/curso/temas/t2/fig13.svg', alt='Esquema técnico comparativo de dos tipos de bolsillos de parche con forma en punta. El primero, en la parte superior, tiene un ancho de 13 cm, altura de 7 cm y vértice inferior formado por dobleces de 2.5 cm desde cada extremo hacia el centro. El segundo bolsillo, en la parte inferior, tiene las mismas medidas de ancho (13 cm), pero un largo mayor (14 cm) e incluye una vista superior doblada hacia el reverso de 3 cm.')    
        figcaption Fuente: SENA, (2025)  
        TabsA.color-acento-botones.mt-4.mb-4.mb-lg-5.pb-lg-4
          .tarjeta.bg-7.p-4(titulo="PASO 1")
            h4 PASO 1
            p Se traza un rectángulo base de 13 cm de ancho por 7 cm de alto. Este rectángulo define el contorno general del bolsillo antes de formar la punta inferior.
          .tarjeta.bg-7.p-4(titulo="PASO 2")
            h4 PASO 2
            p Se mide desde la esquina inferior izquierda hacia arriba una distancia de 2,5 cm, y se marca ese punto. El mismo procedimiento se repite en la
          .tarjeta.bg-7.p-4(titulo="PASO 3")
            h4 PASO 3
            p Se une el punto marcado a 2,5 cm del borde inferior izquierdo con el centro exacto de la base inferior del rectángulo. Luego se repite esta acción del lado derecho, formando así una punta central en la parte inferior del bolsillo.
          .tarjeta.bg-7.p-4(titulo="PASO 4")
            h4 PASO 4
            p Se repasan todos los contornos del patrón, asegurando que la forma resultante sea simétrica respecto al eje vertical.
        .tarjeta.bgi-3
          .bg-color-secundario.bt-r.p-3.mb-0
            h4.text-white.text-center.mb-0 Notas
          .p-4
            ul.lista-ul--color.fa-lista.mb-0.px-lg-4
              li
                i.fas.fa-circle-chevron-right
                span.mb-0 El patrón puede incluir 1 cm adicional en todo el contorno como margen de costura.
              li
                i.fas.fa-circle-chevron-right
                span.mb-0 La punta inferior ayuda al drenaje visual de tensión en prendas como camisas o chaquetas.
              li.mb-0 
                i.fas.fa-circle-chevron-right
                span.mb-0 Es recomendable verificar que la mitad de la base (6,5 cm) coincida con el vértice inferior para asegurar simetría.

    .tarjeta.bg-9.p-4.mb-4(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-lg-1.col-md-2.col-3.mb-3.mb-md-0
          img(src='@/assets/curso/temas/t2/2.svg', alt='')
        .col-lg-10.col-md-10
          p.mb-0 A partir de los bolsillos detallados anteriormente, puede desarrollar las formas que considere, con los cortes y aberturas, esto según los diseños a desarrollar.  Es importante recordar que estos ornamentos parten de rectángulos y la interpretación puede ser múltiple, como la siguiente figura, en la que teniendo en cuenta los patrones anteriores se puede también trazar un bolsillo con tapa incluida. 

    .row.justify-content-center.align-items-center(data-aos="fade")
      .col-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 14.
          span Trazo de bolsillo con tapa incluida
      .col-lg-8.mb-3
        figure
          img(src='@/assets/curso/temas/t2/fig14.svg', alt='Molde técnico completo de bolsillo con tapa independiente. El bolsillo tiene un ancho de 13 cm y un largo total de 14 cm, con una vista superior doblada de 3 cm y un vértice inferior formado por dobleces laterales de 1.5 cm. La tapa mide 13 cm de ancho por 7 cm de alto, con una terminación en punta generada por dobleces laterales de 2.5 cm.')
      figcaption Fuente: SENA, (2025)


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

<style lang="sass"></style>
