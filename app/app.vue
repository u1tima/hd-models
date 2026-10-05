<script setup lang="ts">
	import { ConfigProvider, StyleProvider } from 'ant-design-vue';
	import Navbar from '@/components/layout/navbar/Navbar.vue';
	import Main from '@/components/layout/Main.vue';
</script>

<template>
	<ConfigProvider :theme="{ hashed: false }">
		<StyleProvider hash-priority="high">
			<div class="app-shell">
				<Navbar />
				<Main>
					<NuxtPage />
				</Main>
			</div>
		</StyleProvider>
	</ConfigProvider>
</template>

<style lang="scss">
	.app-shell {
		height: 100%;
		display: grid;
		grid-template-rows: auto 1fr;
		overflow: hidden;
	}

	.main {
		overflow: auto;
		padding: 20px;
	}
</style>
