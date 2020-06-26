<template>
  <section>

    <div class="container">
        <h1>Writing</h1>

        <div v-if="posts.length !== 0">

            <div v-for="(post, index) in posts" :key="index">
                <Post :post="post" />
            </div>

        </div>
    </div>

  </section>
</template>

<script>
import Post from '~/components/Post.vue'

export default {
  name: 'Home',
  layout: 'default',
  components: {
    Post,
  },
  head () {
    return {
      title: 'Writing',
    }
  },
  async asyncData({ $prismic, error }) {
    try {
        const posts = await $prismic.api.query(
            $prismic.predicates.at('document.type', 'post')
        )

        return {
            posts: posts.results
        }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>
