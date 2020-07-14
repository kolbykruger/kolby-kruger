<template>
<div class="project-card">

	<a :href="data.data.link.url" target="_blank" rel="nofollow norefer">

		<div class="project-card__cover">

			<prismic-image :field="data.data.cover" />

			<div class="project-card__meta">

				<div class="project-card__role">
					<p class="visually-hidden">Role</p>
					<p>
						<span v-for="(item, index) in data.data.role" :key="index" :data-type="item.item.toLowerCase()">
							{{ item.item }}
						</span>
					</p>
				</div>

				<div class="project-card__date">
					<p class="visually-hidden">Date</p>
					<p>
						{{ date }}
					</p>
				</div>

			</div>

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
