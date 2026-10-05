<script setup lang="ts">
	import { defineComponent } from 'vue';
	import { TypographyTitle } from 'ant-design-vue';

	defineComponent({
		name: 'IndexPlaceholder',
	});
</script>

<template>
	<div class="nuxt-smoke">
		<TypographyTitle :level="2">
			Каркас Nuxt работает
		</TypographyTitle>
	</div>
</template>

<style lang="scss">
	.nuxt-smoke {
		padding: 20px;
		background-color: $series-card-body-bg;
	}
</style>
