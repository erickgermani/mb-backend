const express = require('express');
const cors = require('cors');
const path = require('path');

const port = 3000;

const userController = require('./user/infrastructure/user.controller');

const app = express();

app.use(express.json());

const corsOption = {
	origin: '*',
};

app.use(cors(corsOption));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', userController);

app.use((err, req, res, next) => {
	const status = err.status || 500;
	const message = err.message || 'Internal Server Error';
	res.status(status).json({ error: message });
});

app.listen(port, () => {
	console.log(`App rodando na porta :${port}`);
});
