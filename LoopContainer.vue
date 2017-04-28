<template>
	<div :class="['loop-container', {'full': full, 'horizontal': horizontal}]">
		<slot></slot>
	</div>
</template>

<script>
export default {

	props: {
		full: {
			type: Boolean,
			default: true
		},

		horizontal: {
			type: Boolean,
			default: false
		}
	}


}
</script>