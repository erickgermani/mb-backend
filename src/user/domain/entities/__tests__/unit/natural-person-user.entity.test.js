const NaturalPersonUserEntityFactory = require('../../factory/natural-person-user-entity.factory.js');

describe('NaturalPersonUserEntity', () => {
	test('should create an instance with the correct properties', () => {
		const email = 'user@example.com';
		const phone = '123-456-7890';
		const password = 'securepassword';
		const name = 'John Doe';
		const cpf = '123.456.789-00';
		const birthday = new Date('1990-01-01');

		const user = NaturalPersonUserEntityFactory.factory(
			email,
			phone,
			password,
			cpf,
			name,
			birthday,
		);

		expect(user.email).toBe(email);
		expect(user.phone).toBe(phone);
		expect(user.password).toBe(password);
		expect(user.name).toBe(name);
		expect(user.cpf).toBe(cpf);
		expect(user.birthday).toEqual(birthday);
	});

	test('should correctly convert to JSON', () => {
		const email = 'user@example.com';
		const phone = '123-456-7890';
		const password = 'securepassword';
		const name = 'John Doe';
		const cpf = '123.456.789-00';
		const birthday = new Date('1990-01-01');

		const user = NaturalPersonUserEntityFactory.factory(
			email,
			phone,
			password,
			cpf,
			name,
			birthday,
		);

		const json = user.toJSON();

		expect(json).toEqual({
			email,
			phone,
			password,
			name,
			cpf,
			birthday,
			personType: 'pf',
		});
	});
});
