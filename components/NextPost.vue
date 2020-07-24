<template>
	<section class="next-post">
		<div class="container">
			<div class="group">
				<nuxt-link v-if="post !== undefined" :to="$prismic.linkResolver(post)">
					<h3 class="next-post__title">{{ $prismic.asText(post.data.title) }}</h3>
					<p class="next-post__summary">{{ post.data.summary }}</p>
				</nuxt-link>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'next-post',
	props: ['post'],
};
</script>
