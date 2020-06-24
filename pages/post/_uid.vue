<template>
  <section>
    <!-- Slices block component -->

    <article>

        <h2>{{ $prismic.asText(content.title) }}</h2>

        <slices-block :slices="slices"/>
        
    </article>

  </section>
</template>

<script>
// Imports for Prismic Slice components
import SlicesBlock from '~/components/SlicesBlock.vue'

export default {
  name: 'post',
  components: {
    SlicesBlock
  },
  head () {
    return {
      title: 'Post',
    }
  },
  async asyncData({ $prismic, params, error }) {
    try{
      // Query to get post content
      const document = (await $prismic.api.getByUID('post', params.uid)).data

      return {
        // Set slices as variable
        content: document,
        slices: document.body
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>
