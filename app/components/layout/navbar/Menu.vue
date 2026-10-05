<script setup lang="ts">
	import { defineComponent, h, ref } from 'vue';
	import { Menu as AntMenu, type MenuProps } from 'ant-design-vue';
	import type { MenuItemType } from 'ant-design-vue/es/menu/src/interface';
	import { useRouter } from 'vue-router';
	import { UserOutlined, SettingOutlined } from '@ant-design/icons-vue';

	defineComponent({
		name: 'Menu',
	});

	const router = useRouter();

	const navigate = ({ key }: MenuItemType): void => {
		router.push(key as string);
	};

	const menuItems = ref<MenuProps['items']>([
		{
			key: 'news',
			label: 'Новости',
		},
		{
			key: 'models',
			label: 'Модели',
		},
		{
			key: 'series',
			label: 'Серии',
		},
		{
			key: 'catalogs',
			label: 'Каталоги',
		},
		{
			key: 'login',
			icon: () => h(UserOutlined),
		},
		{
			key: 'settings',
			icon: () => h(SettingOutlined),
		},
		// {
		// 	key: 'cabinet',
		// 	label: 'Кабинет',
		// 	children: [
		// 		{
		// 			type: 'group',
		// 			label: 'Item 1',
		// 			children: [
		// 				{
		// 					label: 'Option 1',
		// 					key: 'setting:1',
		// 					danger: true
		// 				},
		// 				{
		// 					label: 'Option 2',
		// 					key: 'setting:2',
		// 				},
		// 			],
		// 		},
		// 		{
		// 			type: 'group',
		// 			label: 'Item 2',
		// 			children: [
		// 				{
		// 					label: 'Option 3',
		// 					key: 'setting:3',
		// 				},
		// 				{
		// 					label: 'Option 4',
		// 					key: 'setting:4',
		// 				},
		// 			],
		// 		},
		// 	],
		// },
	]);
</script>

<template>
	<AntMenu :items="menuItems"
			 mode="horizontal"
			 @click="navigate" />
</template>

<style lang="scss">
	.ant-menu-horizontal {
		border-bottom: none
	}
</style>
