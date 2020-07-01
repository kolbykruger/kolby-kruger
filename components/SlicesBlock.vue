<template>
<div class="slices">
	<div class="slice" v-for="(slice, index) in slices" :key="'slice-' + index">

		<template v-if="slice.slice_type === 'code'">
			<Codeblock :slice="slice" />
		</template>

		<template v-else-if="slice.slice_type === 'images'">
			<images :slice="slice" />
		</template>

		<template v-else-if="slice.slice_type === 'image___text'">
			<ImageText :slice="slice" />
		</template>

		<template v-else-if="slice.slice_type === 'project'">
			<Project :slice="slice" />
		</template>

		<template v-else-if="slice.slice_type === 'text'">
			<text-slice :slice="slice" />
		</template>

		<template v-else-if="slice.slice_type === 'embed'">
			<embed-slice :slice="slice" />
		</template>

		<template v-else-if="slice.slice_type === 'banner'">
			<Banner :slice="slice" />
		</template>

	</div>
</div>
</template>

<script>
// Imports for all slices
const Codeblock = () => import('./slices/Codeblock.vue');
const Images = () => import('./slices/Images.vue');
const ImageText = () => import('./slices/ImageText.vue');
const Project = () => import('./slices/Project.vue');
const TextSlice = () => import("./slices/TextSlice.vue");
const EmbedSlice = () => import("./slices/EmbedSlice.vue");
const Banner = () => import("./slices/Banner.vue");

export default {
	props: ['slices'],
	name: 'slices-block',
	components: {
		TextSlice,
		Images,
		ImageText,
		Codeblock,
		Project,
		EmbedSlice,
		Banner
	},
}
</script>
