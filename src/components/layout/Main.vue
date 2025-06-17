<script setup lang="ts">
	import { defineComponent } from 'vue';

	defineComponent({
		name: 'Main',
	});
</script>

<template>
	<main class="main">
		<slot />
	</main>
</template>
