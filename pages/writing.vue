<template>
<main>

	<PageHeading heading="writing" summary="I write stuff occasionally..." />

	<section class="post-cards" v-if="posts.length !== 0">
		<div class="container">
			<Post v-for="(post, index) in posts" :key="index" :post="post" />
		</div>
	</section>


</main>
</template>

<script>
import PageHeading from '~/components/PageHeading.vue'
import Post from '~/components/Post.vue'

export default {
	name: 'Home',
	layout: 'default',
	components: {
		PageHeading,
		Post,
	},
	head() {
		return {
			title: 'Writing',
		}
	},
	async asyncData({
		$prismic,
		error
	}) {
		try {
			const posts = await $prismic.api.query(
				$prismic.predicates.at('document.type', 'post')
			)

			return {
				posts: posts.results
			}
		} catch (e) {
			error({
				statusCode: 404,
				message: 'Page not found'
			})
		}
	},
}
</script>
