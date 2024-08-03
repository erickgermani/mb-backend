const LegalEntityUserEntity = require('../legal-entity-user.entity');

class LegalEntityUserEntityFactory {
	/**
	 * Função factory para criar uma instância de LegalEntityUserEntity.
	 *
	 * @static
	 * @param {string} email - O endereço de email do usuário.
	 * @param {string} phone - O número de telefone do usuário.
	 * @param {string} password - A senha do usuário.
	 * @param {string} socialReason - A razão social do usuário.
	 * @param {string} cnpj - O CNPJ do usuário.
	 * @param {Date} openedAt - A data de abertura do usuário.
	 * @returns {LegalEntityUserEntity} - A instância criada de LegalEntityUserEntity.
	 */
	static factory(email, phone, password, socialReason, cnpj, openedAt) {
		return new LegalEntityUserEntity(
			email,
			phone,
			password,
			socialReason,
			cnpj,
			openedAt,
		);
	}
}

module.exports = LegalEntityUserEntityFactory;
