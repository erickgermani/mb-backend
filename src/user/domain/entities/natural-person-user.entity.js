const UserEntity = require('./user.entity');

/**
 * A classe concreta NaturalPersonUserEntity que representa um usuário pessoa física.
 *
 * @class
 */
class NaturalPersonUserEntity extends UserEntity {
	/**
	 * O nome do usuário
	 *
	 * @type {string}
	 */
	name;

	/**
	 * O cpf do usuário
	 *
	 * @type {string}
	 */
	cpf;

	/**
	 * A data de nascimento do usuário
	 *
	 * @type {Date}
	 */
	birthday;

	/**
	 * Cria uma nova instância de NaturalPersonUserEntity.
	 * @param {string} email - O endereço de email do usuário.
	 * @param {string} phone - O número de telefone do usuário.
	 * @param {string} password - A senha do usuário.
	 * @param {string} name - O nome do usuário.
	 * @param {string} cpf - O CPF do usuário.
	 * @param {Date} birthday - A data de nascimento do usuário.
	 */
	constructor(email, phone, password, cpf, name, birthday) {
		super(email, phone, password, 'pf');
		this.name = name;
		this.cpf = cpf;
		this.birthday = birthday;
	}

	toJSON() {
		return {
			...super.toJSON(),
			name: this.name,
			cpf: this.cpf,
			birthday: this.birthday,
		};
	}
}

module.exports = NaturalPersonUserEntity;
