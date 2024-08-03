const UserDataBuilder = require('../../../domain/testing/helpers/user-data-builder');
const CreateUserUseCase = require('../create-user.usecase');
const BadRequestError = require('../../errors/bad-request-error');

describe('CreateUserUseCase unit tests', () => {
	let sut;

	beforeEach(() => {
		sut = new CreateUserUseCase();
	});

	it('should create an user', () => {
		let props = UserDataBuilder();

		let result = sut.execute({ ...props, personType: 'pf' });

		expect(result.email).toBeDefined();
		expect(result.personType).toEqual('pf');

		props = UserDataBuilder({ personType: 'pj' });

		result = sut.execute({ ...props, personType: 'pj' });

		expect(result.email).toBeDefined();
		expect(result.personType).toEqual('pj');
	});

	it('Should throws error when props is not provided', () => {
		let props = Object.assign(UserDataBuilder(), { name: null });

		expect(() => sut.execute({ ...props, personType: 'pf' })).toThrow(
			new BadRequestError('Input data not provided'),
		);

		props = Object.assign(UserDataBuilder({ personType: 'pj' }), {
			socialReason: null,
		});

		expect(() => sut.execute({ ...props, personType: 'pj' })).toThrow(
			new BadRequestError('Input data not provided'),
		);
	});
});
