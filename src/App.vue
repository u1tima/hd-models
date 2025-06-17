<script setup lang="ts">
	import { ConfigProvider, StyleProvider } from 'ant-design-vue';
	import Navbar from '@/components/layout/navbar/Navbar.vue';
	import Main from '@/components/layout/Main.vue';
	import SeriesCard from '@/components/SeriesCard.vue';
	import { useModelStore } from './stores';

	const { result } = useModelStore();
</script>

<template>
	<ConfigProvider :theme="{ hashed: false }">
		<StyleProvider hash-priority="high">
			<Navbar />
			<Main>
				<SeriesCard v-for="series in result"
							:key="series.name"
							:title="series.name"
							:models="series.models" />
			</Main>
		</StyleProvider>
	</ConfigProvider>
</template>

<style lang="scss">
	#app {
		height: 100%;
		display: grid;
		grid-template-rows: auto 1fr;
		overflow: hidden;

		.main {
			overflow: auto;
			padding: 20px;
		}
	}
</style>
