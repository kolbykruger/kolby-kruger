<template>
	<div class="case-study-card" :class="label" ref="card">
		<div class="case-study-card__layers">
			<!-- <div class="case-study-card__layer case-study-card__layer--1" ref="layer1">
        <LazyImage :src="data.data.layer_1" />
      </div>

      <div class="case-study-card__layer case-study-card__layer--3" ref="layer3">
        <LazyImage :src="data.data.layer_2" />
      </div>-->

			<div class="case-study-card__layer case-study-card__layer--2" ref="layer2">
				<div class="case-study-card__details">
					<h1 class="case-study-card__title">{{ $prismic.asText(data.data.name) }}</h1>
					<nuxt-link ref="button" class="case-study-card__button" :to="link">
						<span class="case-study-card__button--layer-1"></span>
						<span class="case-study-card__button--layer-2"></span>
						<span class="case-study-card__button--text">View</span>
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import LinkResolver from '~/plugins/link-resolver.js';
import { TweenMax } from 'gsap';

export default {
	name: 'CaseStudyCard',
	props: ['data', 'count'],
	data() {
		return {
			link: '',
			label: '',
		};
	},
	created() {
		this.link = LinkResolver(this.data);
	},
	mounted() {
		this.label = this.data.data.class_name ? 'case-study-card__' + this.data.data.class_name : '';
	},
	methods: {},
	beforeDestroy() {},
};
</script>
