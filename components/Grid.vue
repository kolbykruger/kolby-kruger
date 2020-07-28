<template>
	<div class="grid" v-if="active">
		<div class="grid-container" :style="{ 'grid-template-columns': gridColumns }">
			<div class="grid-column" v-for="(item, index) in columns" :key="index" :data-number="item"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'grid',
	data() {
		return {
			columns: 20,
			rows: 20,
			active: false,
		};
	},
	computed: {
		gridColumns() {
			return `repeat(${this.columns}, 1fr)`;
		},
	},
};
</script>

<style lang="scss">
.grid-container {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	display: grid;
	pointer-events: none;
	z-index: 999999;

	.grid-column,
	.grid-row {
		position: relative;
		box-shadow: inset 0 0 1px 0 red;
		background-color: rgba(255, 0, 0, 0.1);

		&::before,
		&::after {
			content: attr(data-number);
			position: absolute;
			width: 100%;
			color: red;
			opacity: 0.5;
		}
	}

	.grid-column {
		&::before,
		&::after {
			text-align: center;
		}

		&::before {
			top: 1em;
			left: 0;
		}

		&::after {
			bottom: 1em;
			left: 0;
		}
	}
}
</style>
