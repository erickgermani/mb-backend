const UserEntity = require('../../user.entity.js');

class StubUserEntity extends UserEntity {
	name;

	constructor(email, phone, password, name) {
		super(email, phone, password, 'pf');
		this.name = name;
	}

	toJSON() {
		return {
			...super.toJSON(),
			name: this.name,
		};
	}
}

describe('UserEntity', () => {
	let sut;

	it('should throw error when trying to instantiate abstract class', () => {
		expect(() => {
			new UserEntity('email@example.com', '123-456-7890', 'password');
		}).toThrow('Cannot instantiate abstract class UserEntity directly');
	});

	test('should display props in json format', () => {
		const userEntity = new StubUserEntity(
			'email@example.com',
			'123-456-7890',
			'password',
			'fake name',
		);

		const userEntityToJson = userEntity.toJSON();

		expect(userEntityToJson).toStrictEqual({
			name: 'fake name',
			email: 'email@example.com',
			phone: '123-456-7890',
			password: 'password',
			personType: 'pf',
		});
	});
});
