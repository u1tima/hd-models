<script setup lang="ts">
	import { defineComponent, ref, watch } from 'vue';
	import { InputSearch, Select } from 'ant-design-vue';
	import { useModelStore } from '@/stores';

	defineComponent({
		name: 'Filters',
	});

	const modelName = ref<string>('');
	const manufacture = ref<string[]>(['modimio-id']);
	const brand = ref<string[]>(['hd']);
	const scale = ref<string[]>(['1:18']);

	const { search } = useModelStore();

	watch(modelName, () => search(modelName.value));

	const manufactureOptions = [
		{
			value: 'maisto-id',
			label: 'Maisto'
		},
		{
			value: 'modimio-id',
			label: 'Modimio'
		},
	];

	const brandOptions = [
		{
			value: 'hd',
			label: 'Harley Davidson'
		},
		{
			value: 'java',
			label: 'Java'
		},
		{
			value: 'bmw',
			label: 'BMW'
		},
	];

	const scaleOptions = [
		{
			value: '1:12',
			label: '1:12'
		},
		{
			value: '1:18',
			label: '1:18'
		},
		{
			value: '1:24',
			label: '1:24'
		},
	];
</script>

<template>
	<div class="filters">
		<InputSearch v-model:value="modelName"
					 placeholder="Search model name"
					 class="model-search" />
		<Select v-model:value="manufacture"
				:options="manufactureOptions"
				mode="multiple"
				placeholder="Select manufacture name"
				class="manufacture-select" />
		<Select v-model:value="brand"
				:options="brandOptions"
				maxTagCount="responsive"
				mode="multiple"
				allowClear
				placeholder="Select brand"
				class="brand-select" />
		<Select v-model:value="scale"
				:options="scaleOptions"
				maxTagCount="responsive"
				mode="multiple"
				allowClear
				placeholder="Select scale"
				class="scale-select" />
	</div>
</template>

<style lang="scss">
	.filters {
		display: flex;
		gap: 8px;

		.model-search,
		.manufacture-select,
		.brand-select,
		.scale-select {
			width: 200px;
		}
	}
</style>
