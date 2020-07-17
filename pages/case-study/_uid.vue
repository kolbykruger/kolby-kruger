<template>
	<main>
		<article>
			<section class="page-heading page-heading__left">
				<div class="container">
					<div class="columns">
						<div class="column column__1">
							<h1 class="page-heading__heading">
								{{ $prismic.asText(content.name) }}
							</h1>
							<p class="page-heading__summary">
								{{ content.summary }}
							</p>
						</div>
						<div class="column column__2">
							<div class="case-study__meta">
								<p>{{ content.year }}</p>
								<p>
									<span
										v-for="(item, index) in content.role"
										:key="index"
									>
										{{ item.tag
										}}{{
											delimiter(
												index + 1,
												content.role.length
											)
										}}
									</span>
								</p>
								<p>{{ content.technologies }}</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="case-study__cover">
				<div class="container">
					<LazyImage
						:src="content.screen"
						mobile=""
						tablet=""
						laptop=""
						desktop=""
						aspect=""
					/>
				</div>
			</section>

			<slices-block :slices="slices" />

			<section class="case-study__link" :class="label">
				<div class="container">
					<a
						target="_blank"
						rel="nofollow norefer"
						:href="content.website.url + '?utm_source=Kolby.Kruger'"
						>Visit {{ $prismic.asText(content.name) }}
						<span class="arrow">-></span></a
					>
				</div>
			</section>
		</article>
	</main>
</template>

<script>
import PageHeading from '~/components/PageHeading.vue';
import SlicesBlock from '~/components/SlicesBlock.vue';
export default {
	name: 'case-study',
	components: {
		PageHeading,
		SlicesBlock,
	},
	head() {
		return {
			title: 'Case Study',
		};
	},
	data() {
		return {
			label: '',
		};
	},
	mounted() {
		this.label = this.content['class_name']
			? 'case-study__link--' + this.content['class_name']
			: '';
	},
	async asyncData({ $prismic, params, error }) {
		try {
			// Query to get post content
			const document = (
				await $prismic.api.getByUID('case_study', params.uid)
			).data;
			return {
				// Set slices as variable
				content: document,
				slices: document.body,
			};
		} catch (e) {
			// Returns error page
			error({
				statusCode: 404,
				message: 'Page not found',
			});
		}
	},
	methods: {
		delimiter(index, length) {
			if (index != length) {
				return `, `;
			}
		},
	},
};
</script>
