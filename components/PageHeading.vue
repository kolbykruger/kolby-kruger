<template>
	<section class="page-heading">
		<div class="page-heading__container">
			<div class="page-heading__group">
				<h1 class="page-heading__title">{{ heading }}<span class="page-heading__period">.</span></h1>
				<span class="page-heading__line"></span>
				<p class="page-heading__summary">{{ summary }}</p>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'PageHeading',
	props: ['heading', 'summary'],
};
</script>
