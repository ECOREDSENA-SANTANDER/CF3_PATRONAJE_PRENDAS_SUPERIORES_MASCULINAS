<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Señalización de los patrones

      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/t1/1.jpg')})`}")
        .bloque-texto-g__texto.p-4.p-lg-5
          p.mb-0 La lectura correcta de un patrón depende de un sistema gráfico estandarizado que condensa información dimensional y secuencial en signos concisos. Estos signos; flechas, muescas, líneas discontinuas, entre otros, garantizan que cualquier persona con formación técnica pueda interpretar, cortar y ensamblar las piezas sin ambigüedad. 
          br 
          br
          p.mb-0 A continuación, se describen las convenciones gráficas esenciales (ejes, muescas, dirección de hilo) y se ofrece un glosario resumido de los símbolos y abreviaturas más habituales:

      .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
        h5 Tabla 1.
        span Símbolos en la señalización de patrones      
      
      .tabla-a.color-acento-botones(data-aos='fade')
        table
          thead.bg-3
            tr
              th Denominación técnica
              th Símbolo (convención)
              th Descripción
              th Función principal
              th Ejemplo
          tbody.text-left
            tr
              td.fw-bold Hilo de tela
              td ↕ (fecha doble vertical).
              td Trazado recto culminado en flechas opuestas.
              td Orienta la pieza respecto a la urdimbre para asegurar caída y estabilidad dimensional.
              td Flecha paralela al centro delantero de una camisa; mantiene el drapeado uniforme.
            tr
              td.fw-bold Corte al sesgo / #[em bias line]
              td ↗ (fecha diagonal 45°).
              td Línea oblicua (≈ 45°) rematada con flechas en ambos extremos.
              td Señala que la pieza debe colocarse diagonal al hilo, otorgando elasticidad controlada.
              td Tira de vivo al blés para refuerzo de sisa en chaqueta ligera.
            tr
              td.fw-bold Doblez de tela
              td ••• (tres puntos en triángulo).
              td Conjunto de tres círculos dispuestos en triángulo.
              td Indica que ese borde se apoya sobre el lomo de la tela para cortar la pieza simétrica.
              td Centro espalda de un canesú corrido “colocar al doblez”.
            tr
              td.fw-bold Línea de corte
              td ✂ (tijeras).
              td Ícono de tijeras sobre la línea.
              td Determina dónde efectuar el corte definitivo del tejido o de la entretela.
              td Señal de recorte en la vista frontal para crear tapeta francesa.
            tr
              td.fw-bold Piquete / #[em notch]
              td ┤ (T horizontal).
              td Segmento perpendicular que forma una "T".
              td Marca de ensamblaje para hacer coincidir costuras y curvas.
              td Piquete simple a ⅓ de la copa de manga; piquete doble a ½ de la espalda.
            tr
              td.fw-bold Ubicación de botón
              td Ⓧ (círculo con X).
              td Círculo del diámetro del botón cruzado por "X".
              td Precisa el tamaño y el punto exacto de costura del botón.
              td Botón de cuello deportivo: Ⓧ a 1 cm del borde de pala.
            tr
              td.fw-bold Ubicación de ojal
              td ─┤┤ (segmento igual al ancho del ojal).
              td Trazo recto limitado por dos marcas cortas perpendiculares.
              td Define la longitud y posición del ojal.
              td Ojales horizontales de puño: cuatro marcas separadas 1,5 cm.
            tr
              td.fw-bold Línea de costura
              td – – – (línea guionada).
              td Serie de guiones regulares próxima al borde.
              td Indica la trayectoria de la puntada o margen interno.
              td Guionada a 1 cm dentro de la línea de corte del cuello.
            tr
              td.fw-bold Puntos internos / perforaciones
              td ✱ P / ✱ In (asterisco + sigla).
              td Pequeños orificios señalados con asterisco y abreviatura.
              td Sirven de referencia para ubicar piezas internas (bolsillos, pinzas, presillas).
              td ✱ P marca inicio de pinza de pecho; ✱ In para bolsillo interior de blazer.


      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Marcaciones de piezas

      .row.justify-content-center.mb-5
        .col-lg-5
        .col-lg-7
          p.mb-0 En un despiece de patronaje, cada pieza debe ser marcada de forma técnica, clara y estandarizada para garantizar su correcta interpretación durante el proceso de corte y confección; estas marcas permiten identificar la función de cada molde, su orientación en el tejido, y las instrucciones necesarias para ensamblar la prenda con precisión.

      .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
        h5 Tabla 2.
        span Información detallada de los patrones
      
      .tabla-a.color-acento-botones.mb-5(data-aos='fade')
        table
          thead.bg-3
            tr
              th Elemento de marcación
              th Qué debe consignarse
              th Función técnica
              th Ejemplo en patrón masculino de prenda superior
          tbody.text-left
            tr
              td Nombre de la pieza
              td Término exacto de la parte del molde.
              td Distingue y ordena los componentes durante el montaje.
              td Delantero camisa sport.
            tr
              td Referencia / código de modelo
              td Clave alfanumérica asociada a la ficha técnica.
              td Permite rastrear el diseño dentro de la colección.
              td PS001, grabado bajo el nombre de pieza.
            tr
              td Talla
              td Sigla o número de la gradación.
              td Evita confusión entre moldes de tallas distintas.
              td Talla 40 (M-COL)
            tr
              td Cantidad a cortar
              td Número de capas por material (tela, forro, entretela).
              td Garantiza que todas las capas requeridas se incluyan.
              td “Cortar × 2 en tela — × 1 en entretela” para el cuello.
            tr
              td Sentido del hilo
              td Flecha recta longitudinal.
              td Asegura el comportamiento del tejido y el calce.
              td Flecha paralela al centro delantero de la chaqueta.
            tr
              td Indicaciones de doblez
              td Leyenda “al lomo / colocar al doblez”.
              td Evita costuras innecesarias, produce una pieza simétrica.
              td Centro espalda de un yugo: colocar al lomo.
            tr
              td Simbología de piquetes
              td Muescas simples, dobles o triples en bordes estratégicos.
              td Alinea correctamente costuras y puntos de unión.
              td ▼ en sisa delantero, ▼▼ en sisa espalda para casar la manga.
            tr
              td Nombre del patronista
              td Firma o iniciales del responsable.
              td Facilita trazabilidad y control de versiones.
              td Patronista: J. Rincón.
            tr
              td Observaciones adicionales
              td Notas sobre materiales o procesos especiales.
              td Aclara requisitos específicos del diseño.
              td “Refuerzo con entretela fusible en tapeta”.

      .row.bgcc-1.align-items-center.p-2.p-md-3.mb-2(data-aos="fade-down")
        .col-lg-12.col-12.px-lg-4
          .row.justify-content-center.align-items-center

            .row.justify-content-center.align-items-center
              .col-12
                .titulo-sexto.color-acento-contenido.mb-4
                  h5 Figura 1.
                  span Patrón con especificaciones técnicas. 
              .col-md-11
                figure
                  img(src='@/assets/curso/temas/t1/fig1.svg', alt='Ficha técnica de moldería para saco informal masculino, correspondiente a la temporada invierno del año 2019. Incluye esquema completo con las piezas del textil base numeradas y etiquetadas: espalda, costadillo, vista, frente, manga, cuello, vistas internas y externas, tapas de bolsillo y bajo manga. Cada pieza está asociada a una cantidad de corte y talla (T.42), con indicaciones como “doble”, “X2” o “X4” según corresponda. En la parte superior se especifica que se trata de un saco sastre de línea informal, bajo la marca Winsor y desarrollado por la empresa Lincoln S.A.')
      figcaption Fuente: https://www.behance.net/search/projects/molderia%20fichas%20t%C3%A9cnicas 
      
      .mb-5


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
