<template>
<section class="banner">
	<LazyImage :src="slice.primary.image" mobile="" tablet="" laptop="" desktop="" aspect="" />
</section>
</template>

<script>
export default {
	props: ['slice'],
	name: 'banner',
}
</script>
