<template>
	<a
		v-if="data.data.link.url"
		class="project-list-card"
		:href="data.data.link.url"
		target="_blank"
		rel="nofollow norefer"
	>
		{{ $prismic.asText(data.data.name) }}
	</a>
	<span v-else class="project-list-card">
		{{ $prismic.asText(data.data.name) }}
	</span>
</template>

<script>
export default {
	props: ['data'],
	name: 'project-list-card',
	data() {
		return {
			date: '',
		};
	},
	mounted() {
		if (this.data.data.date) {
			this.date = Intl.DateTimeFormat('en-US', {
				year: 'numeric',
			}).format(new Date(this.data.data.date));
		}
	},
};
</script>
