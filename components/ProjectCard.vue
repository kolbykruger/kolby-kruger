<template>
<div class="project-card">

	<a :href="data.data.link.url" target="_blank" rel="nofollow norefer">

		<div class="project-card__cover">

			<prismic-image :field="data.data.cover" />

		</div>

		<div class="project-card__details">

			<h3 class="project-card__title">{{ $prismic.asText(data.data.name) }}</h3>

		</div>

	</a>

</div>
</div>
</template>

<script>
export default {
	props: ['data'],
	name: 'project',
	data() {
		return {
			date: '',
		}
	},
	mounted() {
		if (this.data.data.date) {
			this.date = Intl.DateTimeFormat('en-US', {
				month: 'short',
				year: 'numeric',
			}).format(new Date(this.data.data.date))
		}
	}
}
</script>
