const LegalEntityUserEntityFactory = require('../../factory/legal-entity-user-entity.factory.js');

describe('LegalEntityUserEntity', () => {
	test('should create an instance with the correct properties', () => {
		const email = 'user@example.com';
		const phone = '123-456-7890';
		const password = 'securepassword';
		const socialReason = 'Stub Corp';
		const cnpj = '43.586.290/0001-00';
		const openedAt = new Date('1990-01-01');

		const user = LegalEntityUserEntityFactory.factory(
			email,
			phone,
			password,
			socialReason,
			cnpj,
			openedAt,
		);

		expect(user.email).toBe(email);
		expect(user.phone).toBe(phone);
		expect(user.password).toBe(password);
		expect(user.socialReason).toBe(socialReason);
		expect(user.cnpj).toBe(cnpj);
		expect(user.openedAt).toEqual(openedAt);
	});

	test('should correctly convert to JSON', () => {
		const email = 'user@example.com';
		const phone = '123-456-7890';
		const password = 'securepassword';
		const socialReason = 'John Doe';
		const cnpj = '123.456.789-00';
		const openedAt = new Date('1990-01-01');

		const user = LegalEntityUserEntityFactory.factory(
			email,
			phone,
			password,
			socialReason,
			cnpj,
			openedAt,
		);

		const json = user.toJSON();

		expect(json).toEqual({
			email,
			phone,
			password,
			socialReason,
			cnpj,
			openedAt,
			personType: 'pj',
		});
	});
});
