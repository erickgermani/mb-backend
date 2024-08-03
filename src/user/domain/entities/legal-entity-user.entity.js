const UserEntity = require('./user.entity');

/**
 * A classe concreta LegalEntityUserEntity que representa um usuário pessoa jurídica.
 *
 * @class
 */
class LegalEntityUserEntity extends UserEntity {
	/**
	 * @type {string}
	 */
	socialReason;

	/**
	 * @type {string}
	 */
	cnpj;

	/**
	 * @type {Date}
	 */
	openedAt;

	/**
	 * Cria uma nova instância de LegalEntityUserEntity.
	 * @param {string} email - O endereço de email do usuário.
	 * @param {string} phone - O número de telefone do usuário.
	 * @param {string} password - A senha do usuário.
	 * @param {string} socialReason - A razão social do usuário.
	 * @param {string} cnpj - O CNPJ do usuário.
	 * @param {Date} openedAt - A data de abertura do usuário.
	 */
	constructor(email, phone, password, socialReason, cnpj, openedAt) {
		super(email, phone, password, 'pj');
		this.socialReason = socialReason;
		this.cnpj = cnpj;
		this.openedAt = openedAt;
	}

	toJSON() {
		return {
			...super.toJSON(),
			socialReason: this.socialReason,
			cnpj: this.cnpj,
			openedAt: this.openedAt,
		};
	}
}

module.exports = LegalEntityUserEntity;
