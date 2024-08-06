# mb-backend

## Requisitos

- Node.js
- NPM

## Instalação

```bash
$ npm install
```

## Rodando o back-end

Garanta que a porta 3000 esteja livre.

```bash
# development
$ npm start

# watch mode
$ npm run dev
```

## Para criar um usuário

### Criando via interface

Acesse o endereço [http://localhost:3000/registration](http://localhost:3000/registration) e preencha os formulários através da interface.

### Criando via requisição

Faça uma requisição POST para o endereço [http://localhost:3000/registration](http://localhost:3000/registration).

Formato de requisição para criar um usuário **pessoa física**:

```json
{
	"personType": "pf",
	"email": "erickgermani13@gmail.com",
	"phone": "11111111111",
	"password": "12345678",
	"name": "test",
	"cpf": "1111111111",
	"birthday": "01/01/2000"
}
```

Formato de requisição para criar um usuário **pessoa jurídica**:

```json
{
	"personType": "pj",
	"email": "erickgermani13@gmail.com",
	"phone": "11111111111",
	"password": "12345678",
	"socialReason": "test",
	"cnpj": "30.529.921/0001-07",
	"openedAt": "01/01/2000"
}
```

## Formatação

```bash
$ npm run format
```

## Lint

```bash
$ npm run lint
```
