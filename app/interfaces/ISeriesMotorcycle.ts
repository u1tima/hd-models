import type { IMotorcycle } from './IMotorcycle';

export interface ISeriesMotorcycle {
	brand: string;
	name: string;
	scale: string;
	models: Array<IMotorcycle>;
}
