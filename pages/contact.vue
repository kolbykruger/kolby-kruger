<template>
	<main>
		<PageHeading
			heading="Let's chat"
			summary="Complete the form below, or email me at hi@kolby.dev."
			alignment="center"
		/>

		<article>
			<section>
				<form
					class="form"
					name="vue-contact"
					method="post"
					data-netlify="true"
					data-netlify-honeypot="bot-field"
				>
					<input type="hidden" name="form-name" value="vue-contact" />
					<div class="form__section">
						<h2 class="form__section--label">Hi, what's' your name?</h2>
						<div class="form__field">
							<label for="name" class="visually-hidden">Hi, what is your name?</label>
							<input
								type="text"
								id="name"
								name="name"
								v-model="name"
								placeholder="Your name..."
								autocomplete="off"
								required
							/>
						</div>
					</div>
					<div class="form__section">
						<h2 class="form__section--label">What's your email?</h2>
						<div class="form__field">
							<label for="email" class="visually-hidden">What is your email?</label>
							<input
								type="email"
								id="email"
								name="email"
								v-model="email"
								placeholder="Your email..."
								autocomplete="off"
								required
							/>
						</div>
					</div>
					<div class="form__section">
						<h2 class="form__section--label">Tell me about your project.</h2>
						<div class="form__field">
							<label for="details" class="visually-hidden">Tell me about your project.</label>
							<textarea
								name="details"
								id="details"
								v-model="details"
								placeholder="My project is..."
								autocomplete="off"
								rows="1"
								@keyup="resizeTextarea"
							></textarea>
						</div>
					</div>
					<div class="form__section">
						<h2 class="form__section--label">How can I help?</h2>
						<div class="form__fields">
							<div class="form__field form__field--checkbox">
								<input
									type="checkbox"
									id="accessibility"
									name="accessibility"
									value="Accessibility"
									v-model="service"
								/>

								<label for="accessibility">Accessibility</label>
							</div>
							<div class="form__field form__field--checkbox">
								<input
									type="checkbox"
									id="consulting"
									name="consulting"
									value="Consulting"
									v-model="service"
								/>

								<label for="consulting">Consulting</label>
							</div>
							<div class="form__field form__field--checkbox">
								<input type="checkbox" id="design" name="design" value="Web design" v-model="service" />

								<label for="design">Website design</label>
							</div>
							<div class="form__field form__field--checkbox">
								<input
									type="checkbox"
									id="development"
									name="development"
									value="Web development"
									v-model="service"
								/>

								<label for="development">Website development</label>
							</div>
							<div class="form__field form__field--checkbox">
								<input type="checkbox" id="ux-ui" name="ux-ui" value="UX / UI" v-model="service" />

								<label for="ux-ui">UX / UI</label>
							</div>
							<div class="form__field form__field--checkbox">
								<input
									type="checkbox"
									id="unsure"
									name="unsure"
									value="Not sure..."
									v-model="service"
								/>
								<label for="unsure">Not sure...</label>
							</div>
						</div>
					</div>
					<div class="form__section">
						<h2 class="form__section--label">What's your budget?</h2>
						<div class="form__fields">
							<div class="form__field form__field--radio">
								<input type="radio" id="low" name="low" value="Less than 5,000" v-model="budget" />
								<label for="low">&lt; $5k</label>
							</div>
							<div class="form__field form__field--radio">
								<input type="radio" id="medium" name="medium" value="5 - 10k" v-model="budget" />
								<label for="medium">5 - 10k</label>
							</div>
							<div class="form__field form__field--radio">
								<input type="radio" id="high" name="high" value="Greater than 10k" v-model="budget" />
								<label for="high">&gt; 10k</label>
							</div>
						</div>
					</div>
					<div class="link__gradient">
						<button class="link__gradient--colorized" @click="formSubmit">
							Send message <span class="arrow">-></span>
						</button>
					</div>
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
			name: '',
			email: '',
			details: '',
			service: [],
			budget: '',
			textareaHeight: 0,
		};
	},
	computed: {},
	methods: {
		formSubmit() {
			alert('SUBMITTED FORM');
		},
		resizeTextarea(e) {
			if (this.textareaHeight < e.target.scrollHeight) {
				this.textareaHeight = e.target.scrollHeight;
				e.target.style.height = this.textareaHeight + 'px';
			}
		},
	},
};
</script>
