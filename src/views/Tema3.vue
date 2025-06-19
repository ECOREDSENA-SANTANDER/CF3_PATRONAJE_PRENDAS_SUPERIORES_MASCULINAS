<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Variaciones de modelos masculinos


    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla .
      span 
    .tabla-a.color-acento-botones.mb-5(data-aos='fade')
      table(alt="")
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
