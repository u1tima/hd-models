<script setup lang="ts">
	import { defineComponent } from 'vue';
	import SeriesCard from '@/components/SeriesCard.vue';
	import { useModelStore } from '@/stores';
	import type { IMotorcycle } from '@/interfaces/IMotorcycle';

	defineComponent({
		name: 'Series',
	});

	const { result } = useModelStore();

</script>

<template>
	<SeriesCard v-for="series in result"
				:key="series.name"
				:title="series.name"
				:models="series.models" />
</template>
