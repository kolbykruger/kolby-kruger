<template>
<section class="banner">
	<prismic-image :field="slice.primary.image" />
</section>
</template>

<script>
export default {
	props: ['slice'],
	name: 'banner',
}
</script>
