<template>
<div class="slices">
	<div class="slice" v-for="(slice, index) in slices" :key="'slice-' + index">

		<template v-if="slice.slice_type === 'code'">
			<Codeblock :slice="slice" />
		</template>

		<template v-else-if="slice.slice_type === 'images'">
			<Images :slice="slice" />
		</template>

		<template v-else-if="slice.slice_type === 'image___text'">
			<ImageText :slice="slice" />
		</template>

		<template v-else-if="slice.slice_type === 'text'">
			<TextSlice :slice="slice" />
		</template>

		<template v-else-if="slice.slice_type === 'embed'">
			<EmbedSlice :slice="slice" />
		</template>

		<template v-else-if="slice.slice_type === 'banner'">
			<Banner :slice="slice" />
		</template>

		<template v-else-if="slice.slice_type === 'accordion'">
			<Accordion :slice="slice" />
		</template>

		<template v-else-if="slice.slice_type === 'information'">
			<Information :slice="slice" />
		</template>

		<template v-else-if="slice.slice_type === 'table'">
			<Table :slice="slice" />
		</template>

	</div>
</div>
</template>

<script>
import Codeblock from '~/components/slices/Codeblock.vue'
import Images from '~/components/slices/Images.vue'
import ImageText from '~/components/slices/ImageText.vue'
import TextSlice from '~/components/slices/TextSlice.vue'
import EmbedSlice from '~/components/slices/EmbedSlice.vue'
import Banner from '~/components/slices/Banner.vue'
import Accordion from '~/components/slices/Accordion.vue'
import Information from '~/components/slices/InfoSlice.vue'
import Table from '~/components/slices/TableSlice.vue'

export default {
	props: ['slices'],
	name: 'slices-block',
	components: {
		TextSlice,
		Images,
		ImageText,
		Codeblock,
		EmbedSlice,
		Banner,
		Accordion,
		Information,
		Table
	},
}
</script>
