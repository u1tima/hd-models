<script setup lang="ts">
	import { defineComponent } from 'vue';
	import { Card, CardMeta, Space } from 'ant-design-vue';
	import { CheckCircleFilled, DollarOutlined } from '@ant-design/icons-vue'
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
		  class="hd-1-18-model-card">
		<template #cover>
			<img alt="example"
				 :src="`/${model.catalogImage}`" />
		</template>
		<template #extra>
			<Space>
				<CheckCircleFilled v-show="model.isEnabled"
								   :style="{ fontSize: '32px', color: 'green' }" />
				<DollarOutlined v-show="model.isOrdered"
								:style="{ fontSize: '32px', color: 'green' }" />
			</Space>
		</template>
		<!-- <template #actions>
			<span>action 1</span>
			<span>action 1</span>
			<span>action 1</span>
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
