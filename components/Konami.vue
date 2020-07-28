<template></template>

<script>
export default {
	name: 'Konami',
	data() {
		return {
			code: [],
			codeLength: 11,
		};
	},
	mounted() {
		const $el = this;
		window.addEventListener('keyup', function(e) {
			$el.code.push(e.key);
			$el.code.splice(0, $el.code.length - $el.codeLength);
			$el.validateCode($el.code);
		});
	},
	methods: {
		validateCode(code) {
			const pass = 'ArrowUp, ArrowUp, ArrowDown, ArrowDown, ArrowLeft, ArrowRight, ArrowLeft, ArrowRight, b, a, Enter';
			if (code.join(', ').includes(pass)) {
				console.log('KONAMI');
			}
		},
	},
};
</script>
