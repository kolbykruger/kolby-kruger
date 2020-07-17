<template>
	<main>
		<article>
			<PageHeading :heading="teaName" summary="a collection of experiments I've built over the years" />

			<section>
				<form name="vue-tea" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
					<input type="hidden" name="form-name" value="vue-tea" />
					<div class="tea">
						<h2>Pick a Tea</h2>
						<label
							v-for="tea in teaNames"
							:key="tea"
							:class="{
								'tea-label': true,
								checked: tea === chosenTea,
							}"
						>
							<input id="tea" v-model="chosenTea" name="tea" type="radio" :value="tea" />
							<span>{{ tea }}</span>
						</label>
					</div>
					<br />
					<button @click="formSubmit" class="button">Submit</button>
				</form>
			</section>
		</article>
	</main>
</template>

<script>
import PageHeading from '~/components/PageHeading.vue';

export default {
	name: 'Contact',
	layout: 'default',
	components: {
		PageHeading,
	},
	data() {
		return {
			chosenTea: 'Earl Grey',
			teaTypes: {
				'Earl Grey': 'London',
				'Irish Breakfast': 'Dublin',
				Chai: 'Bombay',
				Rose: 'Atlantic City',
				Matcha: 'Tokyo',
				Rooibos: 'Cape Town',
				'Yerba Mate': 'Montreal',
				Green: 'Oregon Mist',
			},
		};
	},
	computed: {
		teaName() {
			return `${this.teaTypes[this.chosenTea]} Fog`;
		},
		teaNames() {
			return Object.keys(this.teaTypes);
		},
	},
	methods: {
		formSubmit() {
			alert('SUBMITTED FORM');
		},
	},
};
</script>

<style lang="scss">
form {
	text-align: center;
}
</style>
