<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos="fade-right")
        .tarjeta.bg-1.mb-4.p-3
          p.mb-0 La interpretación de modelos masculinos de moda casual inicia con la señalización precisa de los patrones y la marcación rigurosa de cada pieza; estos pasos iniciales aseguran el registro correcto de costuras, márgenes y piquetes, fundamentales para una reproducción fiel del diseño. A partir de esta base, el patronista realiza una lectura visual y técnica de la prenda, descomponiendo sus elementos estructurales (como pinzas, canesús y frentes) y analizando cortes, detalles funcionales (ojales, bolsillos, refuerzos) y ornamentos (tachuelas, ribetes, costuras decorativas) que definen su carácter y funcionalidad. Sobre este andamiaje técnico, se ajustan proporciones y se simplifican o enfatizan detalles para adaptar los modelos al estilo casual masculino, en respuesta a las tendencias actuales y al uso cotidiano.
        p Bajo esta metodología, cada tipología se aborda de manera específica: el trazo de la camiseta polo incorpora líneas rectas y canesú frontal; la sudadera deportiva requiere refuerzos en hombros y puños; la camisa de manga corta con cuello deportivo equilibra estructura y ligereza; la camisa con canesú delantero y trasero explora planos superpuestos; y las chaquetas, desde la sastre (con líneas sobrias y cortes entallados) hasta la #[em bomber] (de perfil amplio) y el denim  tipo Levi´s (con costuras expuestas y bolsillos de parche), ilustran cómo un mismo concepto base puede transformarse en múltiples expresiones del vestir casual masculino.
      .col-lg-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/intro/1.png', alt='')
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/intro/2.png', alt='')
      .col-lg-8(data-aos="fade-left")
        .tarjeta.bg-2.mb-4.p-3
          p.mb-0 Este enfoque integral permite al Servicio Nacional de Aprendizaje SENA consolidar su compromiso con la formación de aprendices competentes y versátiles, dotándolos de herramientas técnicas, metodológicas y creativas para enfrentar los desafíos de la industria de la moda. Al articular el dominio del patronaje, la interpretación técnica de modelos y la sensibilidad a las tendencias, el SENA fomenta el desarrollo de profesionales innovadores, capaces de aportar valor al mercado laboral y contribuir al fortalecimiento del sector textil y confección en Colombia.

    .row.justify-content-center.align-items-center(data-aos="fade")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
