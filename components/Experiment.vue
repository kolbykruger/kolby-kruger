<template>
<div class="experiment-card" :class="'experiment-card__'+post.data.type.toLowerCase()">

	<a target="_blank" rel="nofollow norefer" :href="post.data.link.url" v-if="post.data.type == 'Tool'">
		<h3 class="experiment-card__title">{{ post.data.name[0].text }}</h3>
		<p class="experiment-card__summary">{{ post.data.summary }}</p>
	</a>

	<nuxt-link :to="link" v-else>
		<h3 class="experiment-card__title">{{ post.data.name[0].text }}</h3>
		<p class="experiment-card__summary">{{ post.data.summary }}</p>
	</nuxt-link>

</div>
</template>

<script>
import LinkResolver from "~/plugins/link-resolver.js";

export default {
	name: 'Experiment',
	props: ['post'],
	data() {
		return {
			link: '',
			date: '',
		}
	},
	created() {
		this.link = LinkResolver(this.post)
		this.date = Intl.DateTimeFormat('en-US', {
			year: 'numeric',
			month: 'short',
			day: '2-digit'
		}).format(new Date(this.post.last_publication_date))
	}
}
</script>
