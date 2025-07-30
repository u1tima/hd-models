import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

const port = parseInt(process.env.PORT || '500');
const host = process.env.HOST || 'localhost';

const server = express();

server
	.use(express.json())
	.use(helmet())
	.use(cors())
	.use(express.urlencoded({
		extended: true,
	}))

server.listen(port, host, () => {
	console.log(`Server listens http://${host}:${port}`);
});

server.get('/', (_req, res) => {
	res.send('Hello World!')
})