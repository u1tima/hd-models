<script setup lang="ts">
	import { defineComponent, ref } from 'vue';
	import { Menu as AntMenu, type MenuProps } from 'ant-design-vue';

	defineComponent({
		name: 'Menu',
	});

	const menuItems = ref<MenuProps['items']>([
		{
			key: 'news',
			label: 'Новости',
		},
		{
			key: 'catalogs',
			label: 'Каталоги моделей',
		},
		{
			key: 'cabinet',
			label: 'Кабинет',
			children: [
				{
					type: 'group',
					label: 'Item 1',
					children: [
						{
							label: 'Option 1',
							key: 'setting:1',
							danger: true
						},
						{
							label: 'Option 2',
							key: 'setting:2',
						},
					],
				},
				{
					type: 'group',
					label: 'Item 2',
					children: [
						{
							label: 'Option 3',
							key: 'setting:3',
						},
						{
							label: 'Option 4',
							key: 'setting:4',
						},
					],
				},
			],
		},
	]);
</script>

<template>
	<AntMenu :items="menuItems"
			 mode="horizontal" />
</template>

<style lang="scss">
	.ant-menu-horizontal {
		border-bottom: none
	}
</style>
