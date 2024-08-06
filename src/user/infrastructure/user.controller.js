const express = require('express');
const path = require('path');

const CreateUserUseCase = require('../application/usecases/create-user.usecase');
const ValidationError = require('../application/errors/validation-error');

const router = express.Router();

router.get('/registration', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../../../dist', 'index.html'));
});

router.post('/registration', (req, res) => {
	const {
		name,
		email,
		cpf,
		cnpj,
		personType,
		birthday,
		phone,
		openedAt,
		socialReason,
		password,
	} = req.body;

	if (!personType)
		throw new ValidationError('É obrigatório informar o tipo de pessoa');

	if (personType === 'pf') {
		if (!name) throw new ValidationError('O nome é obrigatório para PF');
		if (!cpf) throw new ValidationError('O cpf é obrigatório para PF');
		if (!birthday)
			throw new ValidationError('A data de nascimento é obrigatória para PF');
	} else if (personType === 'pj') {
		if (!socialReason)
			throw new ValidationError('A razão social é obrigatória para PJ');
		if (!cnpj) throw new ValidationError('O cnpj é obrigatório para PJ');
		if (!openedAt)
			throw new ValidationError('A data de abertura é obrigatória para PJ');
	} else throw new Error('Invalid personType. Valid values: pf, pj');

	if (!email) throw new ValidationError('O email é obrigatório');
	if (!phone) throw new ValidationError('O telefone é obrigatório');
	if (!password) throw new ValidationError('A senha é obrigatória');

	const user = CreateUserUseCase.execute({
		personType,
		email,
		phone,
		password,
		name,
		cpf,
		birthday,
		socialReason,
		cnpj,
		openedAt,
	});

	res.status(201).json({
		message: 'Registro efetuado com sucesso',
		data: user,
	});
});

module.exports = router;
