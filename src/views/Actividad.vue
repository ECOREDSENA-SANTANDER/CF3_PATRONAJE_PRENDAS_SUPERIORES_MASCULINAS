<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Interpretación de modelos masculinos',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> A continuación, se presenta un esquema que sintetiza los elementos clave del componente formativo interpretación de modelos masculinos de moda casual. Este abarca la señalización de patrones, la marcación de piezas y la lectura visual y técnica de prendas, permitiendo identificar estructuras, cortes y detalles propios del vestuario masculino. Además, se desarrollan variaciones aplicadas a prendas como camisetas polo, sudaderas, camisas y chaquetas, con el fin de adaptar los modelos al estilo casual y fortalecer las competencias necesarias para el trazado y construcción de patrones en el contexto del patronaje industrial. ',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'El análisis de la silueta y la proporción incluye variables como la línea de hombro, el escote, la longitud total de la prenda y el nivel de holgura, siendo determinantes para elegir el bloque base del patrón. ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos de interpretación de modelos masculinos. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.   ',
        },
        {
          id: 2,
          texto:
            'Es cierto que el tipo de ajuste (clásico, regular, <em>slim</em> u <em>oversize</em>) no influye en los valores de holgura aplicados al patrón. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos de interpretación de modelos masculinos. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.   ',
        },
        {
          id: 3,
          texto:
            'La estructura principal de una prenda contempla elementos como el cuerpo, el canesú, el cuello, la manga y el puño, y puede verse modificada por cortes adicionales como costadillos o paneles. ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos de interpretación de modelos masculinos. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.   ',
        },
        {
          id: 4,
          texto:
            'Los sistemas de abotonadura, las vistas y las tapetas no requieren márgenes adicionales ni refuerzos estructurales en el proceso de confección.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos de interpretación de modelos masculinos. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.   ',
        },
        {
          id: 5,
          texto:
            'Los ornamentos de tipo volumétrico, como pliegues o tablas, pueden requerir incrementos de ancho en el patrón y la marcación de guías específicas. ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos de interpretación de modelos masculinos. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.   ',
        },
        {
          id: 6,
          texto:
            'La selección del tejido, su elasticidad y gramaje inciden directamente en los ajustes de holgura y en la elección de técnicas de costura compatibles. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos de interpretación de modelos masculinos. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.   ',
        },
        {
          id: 7,
          texto:
            'El análisis técnico de una prenda comienza con una figura base obtenida por fotografía directa o escaneo, sobre la cual se trazan ejes estructurales. ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos de interpretación de modelos masculinos. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.   ',
        },
        {
          id: 8,
          texto:
            'El trazado de líneas de referencia como la línea de pecho, la línea de cadera y los ejes verticales es innecesario para establecer proporciones. ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos de interpretación de modelos masculinos. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.  ',
        },
        {
          id: 9,
          texto:
            'El uso de códigos de color o capas digitales permite delimitar contornos y subcontornos, facilitando la lectura estructural de una prenda mediante un mapa cromático. ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos de interpretación de modelos masculinos. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.   ',
        },
        {
          id: 10,
          texto:
            'La ficha técnica preliminar, construida sobre una plantilla institucional, consolida observaciones claves y sirve como documento base para el desarrollo del patrón definitivo. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos de interpretación de modelos masculinos. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.   ',
        },
      ],
      mensaje_final_aprobado:
        '¡Felicitaciones! Ha captado con claridad los conceptos de interpretación de modelos masculinos ¡Continúe aprendiendo y explorando este apasionante tema!',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica. ',
    },
  }),
}
</script>
