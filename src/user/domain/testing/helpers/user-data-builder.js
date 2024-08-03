const { faker } = require('@faker-js/faker');

function UserDataBuilder(props = {}) {
	const personType = props.personType ?? 'pf';

	const email = props.email ?? faker.internet.email();
	const phone = props.phone ?? faker.phone.number();
	const password = props.password ?? faker.lorem.word();

	if (personType === 'pf')
		return {
			email,
			phone,
			password,
			name: props.name ?? faker.person.fullName(),
			cpf: props.cpf ?? '000.000.000-00',
			birthday: props.birthday ?? faker.date.birthdate({ refDate: Date }),
		};

	return {
		email,
		phone,
		password,
		socialReason: props.company ?? faker.company.name(),
		cnpj: props.cnpj ?? '00.000.000/0000-00',
		openedAt: props.birthday ?? faker.date.birthdate({ refDate: Date }),
	};
}

module.exports = UserDataBuilder;
