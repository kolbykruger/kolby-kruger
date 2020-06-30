<template>
  <div>
    <Header/>
        <nuxt />
    <Footer/>
    <Theme />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Theme from '~/components/Theme.vue'

export default {
  components: {
    Header,
    Footer,
    Theme
  },
  head () {
    return {
      title: 'Prismic Nuxt.js Multi Page Website',
    }
  },
  transition: "page",
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
