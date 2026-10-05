<script setup lang="ts">
	import { defineComponent } from 'vue';
	import { Card } from 'ant-design-vue';
	import type { IMotorcycle } from '@/interfaces/IMotorcycle';
	import ModelCard from './ModelCard.vue';

	defineComponent({
		name: 'SeriesCard',
	});

	defineProps<{
		title: string,
		models: IMotorcycle[],
	}>();
</script>

<template>
	<Card :title="title"
		  class="series-card"
		  size="small">
		<ModelCard v-for="model in models"
				   :key="model.catalogImage"
				   :model="model" />
	</Card>
</template>

<style lang="scss">
	.series-card {
		margin: 0 auto;
		margin-bottom: 20px;
		width: min-content;

		&:last-child {
			margin-bottom: 0;
		}

		&>.ant-card-head {
			background-color: $series-card-body-bg;
		}

		&>.ant-card-body {
			// background-color: $series-card-body-bg;
		}

		.ant-card-body {
			display: grid;
			gap: 20px;
			grid-template-columns: repeat(3, 450px);

			&::before,
			&::after {
				content: none;
			}
		}
	}
</style>
