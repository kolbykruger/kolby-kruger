<template>
	<section>
		<PageHeading :heading="$prismic.asText(content.title)" :summary="content.summary" />
		<article>
			<!-- <section class="post__cover">
				<div class="container">
					<LazyImage :src="content.cover" mobile="640" tablet="960" laptop="1200" desktop="1920" />
				</div>
			</section> -->

			<slices-block :slices="slices" />

			<Author />

			<NextPost :post="nextPost" />
		</article>
	</section>
</template>

<script>
import PageHeading from '~/components/PageHeading.vue';
import SlicesBlock from '~/components/SlicesBlock.vue';
import Author from '~/components/Author.vue';
import NextPost from '~/components/NextPost.vue';

export default {
	name: 'post',
	components: {
		PageHeading,
		SlicesBlock,
		Author,
		NextPost,
	},
	head() {
		return {
			title: 'Post',
		};
	},
	async asyncData({ $prismic, params, error }) {
		try {
			// Query to get post content
			const post = await $prismic.api.getByUID('post', params.uid);
			const nextpost = (
				await $prismic.api.query($prismic.predicates.at('document.type', 'post'), {
					pageSize: 3,
					after: `${post.id}`,
					orderings: '[my.post.date]',
				})
			).results[0];

			return {
				content: post.data,
				slices: post.data.body,
				nextPost: nextpost,
			};
		} catch (e) {
			error({
				statusCode: 404,
				message: 'Page not found',
			});
		}
	},
	mounted() {},
};
</script>
