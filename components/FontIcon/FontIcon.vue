<template>
	<text
		class="font-icon iconfont"
		:class="[name]"
		:style="{
			fontSize: size,
			color: color
		}"
	></text>
</template>

<script>
	export default {
		name: 'FontIcon',
		props: {
			name: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: 'currentColor'
			},
			size: {
				type: String,
				default: '1em'
			},
		},
		data() {
			return {
			}
		},
		created() {
		},
	}
</script>

<style scoped>
	.font-icon {
		display: inline-block;
	}
</style>
