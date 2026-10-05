<script setup lang="ts">
	// Корневой маршрут раньше не обрабатывался вообще; ведём на основную страницу каталога.
	definePageMeta({
		redirect: '/series',
	});
</script>

<template>
	<div />
</template>
