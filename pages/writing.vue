<template>
	<main>
		<PageHeading heading="writing" summary="I write stuff occasionally..." />

		<section class="post-cards" v-if="posts.length !== 0">
			<div class="container">
				<PostCard v-for="(post, index) in posts" :key="index" :post="post" />
			</div>
		</section>
	</main>
</template>

<script>
import PageHeading from '~/components/PageHeading.vue';
import PostCard from '~/components/PostCard.vue';

export default {
	name: 'Home',
	layout: 'default',
	components: {
		PageHeading,
		PostCard,
	},
	head() {
		return {
			title: 'Writing',
		};
	},
	async asyncData({ $prismic, error }) {
		try {
			const posts = await $prismic.api.query($prismic.predicates.at('document.type', 'post'), {
				orderings: '[document.first_publication_date desc]',
			});

			return {
				posts: posts.results,
			};
		} catch (e) {
			error({
				statusCode: 404,
				message: 'Page not found',
			});
		}
	},
};
</script>
