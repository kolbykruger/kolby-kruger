<template>
<main>

	<PageHeading heading="laboratory" summary="a collection of experiments I've built over the years" />

	<section class="search">
		<div class="container">
			<div class="search__result">
				<p v-if="query">
					results for <span>{{ query }}</span>
				</p>
			</div>
			<input type="text" placeholder="Search..." v-model="query" @keyup="queryResults">
		</div>
	</section>

	<section class="experiment-cards" v-if="docs.length !== 0">
		<div class="container">
			<transition-group name="experiment-card" tag="div">
				<ExperimentCard v-for="(post, index) in queryResults()" :key="index" :post="post" />
			</transition-group>
		</div>
	</section>


</main>
</template>

<script>
import PageHeading from '~/components/PageHeading.vue'
import ExperimentCard from '~/components/ExperimentCard.vue'

export default {
	name: 'Laboratory',
	layout: 'default',
	components: {
		PageHeading,
		ExperimentCard,
	},
	data() {
		return {
			query: ''
		}
	},
	computed: {
		experiments() {
			return this.docs;
		}
	},
	methods: {
		queryResults(e) {

			const query = this.query;
			const docs = this.docs;

			if (query == '') {
				return docs;
			} else {

				let results = [];

				docs.forEach((doc) => {
					const name = doc.data.name[0].text.toLowerCase();
					const summary = doc.data.summary.toLowerCase();

					if (name.includes(query) || summary.includes(query)) {
						results.push(doc)
					}
				})

				return results;
			}
		}
	},
	head() {
		return {
			title: 'Laboratory',
		}
	},
	async asyncData({
		$prismic,
		error
	}) {
		try {
			const posts = await $prismic.api.query(
				$prismic.predicates.at('document.type', 'experiment')
			)

			return {
				docs: posts.results,
			}
		} catch (e) {
			error({
				statusCode: 404,
				message: 'Page not found'
			})
		}
	}
}
</script>

<style>
.experiment-card {
	transition: all 0.25s;
}

.experiment-card-enter,
.experiment-card-leave-to

/* .card-leave-active for <2.1.8 */
	{
	opacity: 0;
	transform: scale(0);
}

.experiment-card-enter-to {
	opacity: 1;
	transform: scale(1);
}

.experiment-card-leave-active {
	/*position: absolute;*/
}

.experiment-card-move {
	opacity: 1;
	transition: all 0.5s;
}
</style>
