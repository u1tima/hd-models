<script setup lang="ts">
	import { defineComponent } from 'vue';
	import Menu from './Menu.vue';
	import Filters from './Filters.vue';

	defineComponent({
		name: 'Navbar',
	});
</script>

<template>
	<div class="navbar">
		<Filters />
		<Menu />
	</div>
</template>

<style lang="scss">
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 12px;
		border-bottom: 1px solid rgba(5, 5, 5, 0.06);
	}
</style>
