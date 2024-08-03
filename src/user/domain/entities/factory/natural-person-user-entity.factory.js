const NaturalPersonUserEntity = require('../natural-person-user.entity');

class NaturalPersonUserEntityFactory {
	/**
	 * Função factory para criar uma instância de NaturalPersonUserEntity.
	 *
	 * @static
	 * @param {string} email - O endereço de email do usuário.
	 * @param {string} phone - O número de telefone do usuário.
	 * @param {string} password - A senha do usuário.
	 * @param {string} name - O nome do usuário.
	 * @param {string} cpf - O CPF do usuário.
	 * @param {Date} birthday - A data de nascimento do usuário.
	 * @returns {NaturalPersonUserEntity} - A instância criada de NaturalPersonUserEntity.
	 */
	static factory(email, phone, password, name, cpf, birthday) {
		return new NaturalPersonUserEntity(
			email,
			phone,
			password,
			name,
			cpf,
			birthday,
		);
	}
}

module.exports = NaturalPersonUserEntityFactory;
