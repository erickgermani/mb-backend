const ValidationError = require('./errors/ValidationError');

const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/');
	},
	filename: function (req, file, cb) {
		cb(
			null,
			file.fieldname + '-' + Date.now() + path.extname(file.originalname),
		);
	},
});

const upload = multer({ storage: storage });

app.get('/registration', (req, res) => {
	res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Registration</title>
            <style>
                .pf-fields, .pj-fields { display: none; }
            </style>
        </head>
        <body>
            <h1>Registration Form</h1>
            <form id="registration-form" action="/registration" method="POST">
                <label for="personTypePF">Pessoa Física (PF):</label>
                <input type="radio" id="personTypePF" name="personType" value="pf" ><br>
                <label for="personTypePJ">Pessoa Jurídica (PJ):</label>
                <input type="radio" id="personTypePJ" name="personType" value="pj" ><br><br>

                <div class="pf-fields">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name"><br><br>
                    <label for="cpf">CPF:</label>
                    <input type="text" id="cpf" name="cpf"><br><br>
                    <label for="birthday">Birthday:</label>
                    <input type="date" id="birthday" name="birthday"><br><br>
                </div>

                <div class="pj-fields">
                    <label for="socialReason">Social Reason:</label>
                    <input type="text" id="socialReason" name="socialReason"><br><br>
                    <label for="cnpj">CNPJ:</label>
                    <input type="text" id="cnpj" name="cnpj"><br><br>
                    <label for="openingDate">Opening Date:</label>
                    <input type="date" id="openingDate" name="openingDate"><br><br>
                </div>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" ><br><br>
                <label for="phone">Phone:</label>
                <input type="text" id="phone" name="phone" ><br><br>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" ><br><br>
                <button type="submit">Submit</button>
            </form>

            <script>
                document.addEventListener('DOMContentLoaded', function() {
                    const personTypePF = document.getElementById('personTypePF');
                    const personTypePJ = document.getElementById('personTypePJ');
                    const pfFields = document.querySelector('.pf-fields');
                    const pjFields = document.querySelector('.pj-fields');

                    personTypePF.addEventListener('change', toggleFields);
                    personTypePJ.addEventListener('change', toggleFields);

                    function toggleFields() {
                        if (personTypePF.checked) {
                            pfFields.style.display = 'block';
                            pjFields.style.display = 'none';
                        } else if (personTypePJ.checked) {
                            pfFields.style.display = 'none';
                            pjFields.style.display = 'block';
                        }
                    }

										document.querySelector('#registration-form').addEventListener('submit', (event) => {
											event.preventDefault();

											const formData = new FormData(event.target);

											fetch('/registration', {
													method: 'POST',
													body: formData
											})
											.then(response => {
													if (!response.ok) {
														return response.json().then(data => {
																throw new Error(data.error || 'Erro na solicitação');
														});
													}
													return response.json();
											})
											.then(data => {
													alert(data.message);
													event.target.reset();
											})
											.catch(({error}) => {
													alert(error);
											});
										});

										personTypePF.click();
                });
            </script>
        </body>
        </html>
    `);
});

app.post('/registration', upload.none(), (req, res) => {
	const {
		name,
		email,
		cpf,
		cnpj,
		personType,
		birthday,
		phone,
		openingDate,
		socialReason,
		password,
	} = req.body;

	if (!personType)
		throw new ValidationError('É obrigatório informar o tipo de pessoa');

	if (personType.toLocaleLowerCase() === 'pf') {
		if (!name) throw new ValidationError('O nome é obrigatório para PF');
		if (!cpf) throw new ValidationError('O cpf é obrigatório para PF');
		if (!birthday)
			throw new ValidationError('A data de nascimento é obrigatória para PF');
	} else {
		if (!socialReason)
			throw new ValidationError('A razão social é obrigatória para PJ');
		if (!cnpj) throw new ValidationError('O cnpj é obrigatório para PJ');
		if (!openingDate)
			throw new ValidationError('A data de abertura é obrigatória para PJ');
	}

	if (!email) throw new ValidationError();
	if (!phone) throw new ValidationError('O telefone é obrigatório');
	if (!password) throw new ValidationError('A senha é obrigatória');

	res.status(201).json({
		message: 'Registro efetuado com sucesso',
		data: {
			email,
			name,
			socialReason,
			phone,
			cpf,
			cnpj,
			birthday,
			openingDate,
			password,
		},
	});
});

app.use((err, req, res, next) => {
	const status = err.status || 500;
	const message = err.message || 'Internal Server Error';
	res.status(status).json({ error: message });
});

app.listen(port, () => {
	console.log(`App rodando na porta :${port}`);
});
