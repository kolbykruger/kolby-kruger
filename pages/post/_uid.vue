<template>
	<section>
		<article>
			<PageHeading :heading="$prismic.asText(content.title)" :summary="content.summary" alignment="center" />

			<section class="post__cover">
				<div class="container">
					<LazyImage :src="content.cover" mobile="640" tablet="960" laptop="1200" desktop="1920" />
				</div>
			</section>

			<slices-block :slices="slices" />

			{{ $prismic.linkResolver(nextPost) }}

			<nuxt-link v-if="nextPost !== undefined" :to="$prismic.linkResolver(nextPost)">next</nuxt-link><br />

			{{ $prismic.linkResolver(prevPost) }}

			<nuxt-link v-if="prevPost !== undefined" :to="$prismic.linkResolver(prevPost)">prev</nuxt-link>
			<br />
		</article>
	</section>
</template>

<script>
import PageHeading from '~/components/PageHeading.vue';
import SlicesBlock from '~/components/SlicesBlock.vue';

export default {
	name: 'post',
	components: {
		PageHeading,
		SlicesBlock,
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
			const prevpost = (
				await $prismic.api.query($prismic.predicates.at('document.type', 'post'), {
					pageSize: 1,
					after: `${post.id}`,
					orderings: '[my.post.date desc]',
				})
			).results[0];
			const nextpost = (
				await $prismic.api.query($prismic.predicates.at('document.type', 'post'), {
					pageSize: 3,
					after: `${post.id}`,
					orderings: '[my.post.date]',
				})
			).results[1];

			return {
				content: post.data,
				slices: post.body,
				nextPost: nextpost,
				prevPost: prevpost,
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
