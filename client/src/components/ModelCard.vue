<script setup lang="ts">
	import { defineComponent } from 'vue';
	import { Card, CardMeta } from 'ant-design-vue';
	import type { IMotorcycle } from '@/interfaces/IMotorcycle';

	defineComponent({
		name: 'ModelCard',
	});

	defineProps<{
		model: IMotorcycle,
	}>();
</script>

<template>
	<Card hoverable
		  class="hd-1-18-model-card"
		  size="small">
		<template #cover>
			<img alt="example"
				 :src="`/${model.catalogImage}`" />
		</template>
		<!-- <template #extra>
			<span>extra</span>
		</template>
		<template #actions>
			<span>action 1</span>
			<span>action 1</span>
			<span>action 1</span>
		</template> -->
		<!-- <template #title>
			<span>{{ model.name }}</span>
		</template> -->
		<CardMeta :title="model.name" />
	</Card>
</template>

<style lang="scss">
	.hd-1-18-model-card {
		.ant-card-cover {
			margin-top: 0;
			margin-inline-start: 0;
			margin-inline-end: 0;
		}

		.ant-card-meta-title {
			white-space: wrap;
		}
	}
</style>
