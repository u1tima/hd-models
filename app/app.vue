<script setup lang="ts">
	import { ConfigProvider, StyleProvider } from 'ant-design-vue';
</script>

<template>
	<ConfigProvider :theme="{ hashed: false }">
		<StyleProvider hash-priority="high">
			<NuxtPage />
		</StyleProvider>
	</ConfigProvider>
</template>
