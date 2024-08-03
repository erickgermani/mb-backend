const LegalEntityUserEntity = require('../legal-entity-user.entity');
const NaturalPersonUserEntity = require('../natural-person-user.entity');
const LegalEntityUserEntityFactory = require('./legal-entity-user-entity.factory');
const NaturalPersonUserEntityFactory = require('./natural-person-user-entity.factory');

class UserEntityFactory {
	/**
	 * Função factory para criar uma instância de UserEntity
	 *
	 * @static
	 * @param {string} personType - O tipo de pessoa: pj | pf
	 * @param {object} props - As propriedades da classe concreta
	 * @returns {NaturalPersonUserEntity | LegalEntityUserEntity} - A instância criada de NaturalPersonUserEntity ou LegalEntityUserEntity.
	 */
	static factory(personType, props) {
		if (personType === 'pf')
			return NaturalPersonUserEntityFactory.factory(
				props.email,
				props.phone,
				props.password,
				props.name,
				props.cpf,
				props.birthday,
			);
		else if (personType === 'pj')
			return LegalEntityUserEntityFactory.factory(
				props.email,
				props.phone,
				props.password,
				props.socialReason,
				props.cnpj,
				props.openedAt,
			);

		throw new Error('Invalid personType. Valid values: pf, pj');
	}
}

module.exports = UserEntityFactory;
