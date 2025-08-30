import { defineStore } from 'pinia';
import { hd_1_18 } from '@/data/hd-1-18';
import { ref } from 'vue';
import type { IMotorcycle } from '@/interfaces/IMotorcycle';
import type { ISeriesMotorcycle } from '@/interfaces/ISeriesMotorcycle';

export const useModelStore = defineStore('modelStore', () => {
	const result = ref<ISeriesMotorcycle[]>([...hd_1_18]);

	const search = (searchValue: string, isOrdered: boolean): void => {
		result.value.length = 0;

		hd_1_18.forEach((series) => {
			let models: IMotorcycle[] = [];

			series.models.forEach((model) => {
				const found = model.name.toLowerCase().includes(searchValue.toLowerCase());

				if (found) {
					models.push(model);
				}
			});

			if (isOrdered) {
				models = models.filter((model) => model.isOrdered);
			}

			if (models.length) {
				result.value.push({
					...series,
					models
				});
			}
		});
	};

	return { result, search };
});
