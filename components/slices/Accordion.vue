<template>
<section class="accordion">
	<div class="accordion__block" v-for="(item, index) in slice.items">
		<div class="accordion__value">0{{ index + 1 }}</div>
		<div class="accordion__container">
			<button class="accordion__action" @click="toggleAccordion">
				<span>{{ $prismic.asText(item.title) }}</span>
				<span class="icon">+</span>
			</button>
			<prismic-rich-text class="accordion__panel" :field="item.details" />
		</div>
	</div>
</section>
</template>

<script>
export default {
	props: ['slice'],
	name: 'accordion',
	methods: {
		toggleAccordion(e) {
			const action = e.target,
				panel = e.target.nextElementSibling;

			if (action.classList.contains('accordion__block--active')) {
				//collapse
				action.classList.remove('accordion__block--active')
				panel.style.maxHeight = null
			} else {
				//expand
				action.classList.add('accordion__block--active')
				panel.style.maxHeight = (panel.scrollHeight + 32) + 'px'

			}
		}
	}
}
</script>
