<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-4 A continuación, se presenta un esquema que sintetiza los elementos clave del componente formativo interpretación de modelos masculinos de moda casual. Este abarca la señalización de patrones, la marcación de piezas y la lectura visual y técnica de prendas, permitiendo identificar estructuras, cortes y detalles propios del vestuario masculino. Además, se desarrollan variaciones aplicadas a prendas como camisetas polo, sudaderas, camisas y chaquetas, con el fin de adaptar los modelos al estilo casual y fortalecer las competencias necesarias para el trazado y construcción de patrones en el contexto del patronaje industrial. 

    .tarjeta.tarjeta--gris.mb-5
      .row.justify-content-center
        .col-lg-11.mb-5.bgs.p-4
          figure
            img(src="@/assets/curso/sintesis.svg", alt="Organigrama temático titulado 'Interpretación de modelos masculinos', dividido en cuatro ejes principales. El primero, 'Señalización de patrones', incluye el subtema 'Marcaciones'. El segundo, 'Análisis e interpretación de modelos masculinos', abarca lectura visual y técnica de prendas, elementos estructurales, estudio de cortes y detalles, y adaptación de modelos para moda casual. El tercero, 'Variaciones de modelos masculinos', comprende trazo de camiseta polo, sudadera deportiva, camisa de manga corta con cuello deportivo, y camisa con canesú delantero y trasero. El cuarto eje, 'Chaquetas', se subdivide en chaqueta sastre, chaqueta bomber y chaqueta en denim tipo Levi's")
    
    .row.justify-content-center
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis


</template>

<script>
export default {
  name: 'Sintesis',
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
