import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { hd_1_18 } from '@/data/hd-1-18';
import type { ISeriesMotorcycle } from '@/interfaces/ISeriesMotorcycle';

export const useModelStore = defineStore('modelStore', () => {
	const query = ref<string>('');
	const orderedOnly = ref<boolean>(false);

	// Результат вычисляется из исходных данных, а не мутируется на месте:
	// исходный массив остаётся нетронутым, промежуточных состояний не бывает.
	const result = computed<ISeriesMotorcycle[]>(() => {
		const needle = query.value.trim().toLowerCase();

		return hd_1_18
			.map((series) => ({
				...series,
				models: series.models.filter((model) => {
					const matchesName = model.name.toLowerCase().includes(needle);
					const matchesOrdered = !orderedOnly.value || Boolean(model.isOrdered);

					return matchesName && matchesOrdered;
				}),
			}))
			.filter((series) => series.models.length > 0);
	});

	// Прежний интерфейс сохранён: компонент фильтров вызывает search при изменении полей.
	const search = (searchValue: string, isOrdered: boolean): void => {
		query.value = searchValue;
		orderedOnly.value = isOrdered;
	};

	return { result, search };
});
