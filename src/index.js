import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

const port = process.env.PORT || 3333;

app.listen(port, () => {
	console.log(`Server rodando na Porta ${port}!`);
});
