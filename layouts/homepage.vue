<template>
  <div class="homepage">
    <Header/>
    <nuxt />
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  head () {
    return {
      title: 'Prismic Nuxt.js Multi Page Website',
    }
  },
}
</script>
