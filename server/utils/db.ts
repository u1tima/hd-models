import { createPool, type Pool } from 'mysql2/promise';

let pool: Pool | undefined;

// Пул создаётся лениво: на этапе сборки и без обращений к API подключение не нужно.
// Значения приходят из runtimeConfig, то есть из переменных окружения NUXT_MYSQL_*.
export const useDb = (): Pool => {
	if (!pool) {
		const config = useRuntimeConfig();

		pool = createPool({
			host: config.mysql.host,
			database: config.mysql.database,
			user: config.mysql.user,
			password: config.mysql.password,
		});
	}

	return pool;
};
