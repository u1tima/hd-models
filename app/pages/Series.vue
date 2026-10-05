<script setup lang="ts">
	import { storeToRefs } from 'pinia';
	import SeriesCard from '@/components/SeriesCard.vue';
	import { useModelStore } from '@/stores';

	const { result } = storeToRefs(useModelStore());
</script>

<template>
	<SeriesCard v-for="series in result"
				:key="series.name"
				:title="series.name"
				:models="series.models" />
</template>
