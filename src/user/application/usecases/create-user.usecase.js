const LegalEntityUserEntityFactory = require('../../domain/entities/factory/legal-entity-user-entity.factory');
const NaturalPersonUserEntityFactory = require('../../domain/entities/factory/natural-person-user-entity.factory');
const BadRequestError = require('../errors/bad-request-error');

class CreateUserUseCase {
	execute(input) {
		const { personType, email, phone, password } = input;

		if (!email || !phone || !password)
			throw new BadRequestError('Input data not provided');

		let user;

		if (personType === 'pf') {
			const { name, cpf, birthday } = input;

			if (!name || !cpf || !birthday)
				throw new BadRequestError('Input data not provided');

			user = NaturalPersonUserEntityFactory.factory(
				email,
				phone,
				password,
				name,
				cpf,
				birthday,
			);
		} else if (personType === 'pj') {
			const { socialReason, cnpj, openedAt } = input;

			if (!socialReason || !cnpj || !openedAt)
				throw new BadRequestError('Input data not provided');

			user = LegalEntityUserEntityFactory.factory(
				email,
				phone,
				password,
				socialReason,
				cnpj,
				openedAt,
			);
		} else throw new Error('Invalid personType. Valid values: pf, pj');

		return user.toJSON();
	}
}

module.exports = CreateUserUseCase;
