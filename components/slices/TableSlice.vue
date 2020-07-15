<template>
<section class="table" :class="label">
	<div class="container">
		<prismic-rich-text v-if="slice.primary.heading[0].text" class="heading" :field="slice.primary.heading" />
		<table>
			<thead>
				<tr>
					<th v-if="slice.primary.heading_1">{{ slice.primary.heading_1 }}</th>
					<th v-if="slice.primary.heading_2">{{ slice.primary.heading_2 }}</th>
					<th v-if="slice.primary.heading_3">{{ slice.primary.heading_3 }}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(row, index) in slice.items">
					<td v-if="row.column_1">{{ row.column_1 }}</td>
					<td v-if="row.column_2">{{ row.column_2 }}</td>
					<td v-if="row.column_3">{{ row.column_3 }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</section>
</template>

<script>
export default {
	props: ['slice'],
	name: 'table-slice',
	data() {
		return {
			label: '',
		}
	},
	mounted() {
		const label = this.slice.slice_label ? this.slice.slice_label : '';
		if (label != '') {
			this.label = 'text__' + label;
		}
	}
}
</script>
