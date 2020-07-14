<template>
<div class="project-list-card">
	<a v-if="data.data.link.url" class="project-list-card__link" :href="data.data.link.url" target="_blank" rel="nofollow norefer">
		<p class="font-size__4 project-list-card__date">{{ date }}</p>
		<h4 class="project-list-card__title">{{ $prismic.asText(data.data.name) }}</h4>
		<p class="font-size__4 tags project-list-card__role">
			<span class="tag" v-for="(item, index) in data.data.role" :key="index" :data-type="item.item">
				{{ item.item }}
			</span>
		</p>
	</a>
	<div class="project-list-card__link" v-else>
		<p class="font-size__4 project-list-card__date">{{ date }}</p>
		<h4 class="project-list-card__title">{{ $prismic.asText(data.data.name) }}</h4>
		<p class="font-size__4 tags project-list-card__role">
			<span class="tag" v-for="(item, index) in data.data.role" :key="index" :data-type="item.item">
				{{ item.item }}
			</span>
		</p>
	</div>
</div>
</template>

<script>
export default {
	props: ['data'],
	name: 'project-list-card',
	data() {
		return {
			date: '',
		}
	},
	mounted() {
		if (this.data.data.date) {
			this.date = Intl.DateTimeFormat('en-US', {
				year: 'numeric',
			}).format(new Date(this.data.data.date))
		}
	}
}
</script>
