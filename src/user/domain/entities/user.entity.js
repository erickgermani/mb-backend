/**
 * A classe abstrata UserEntity que representa um usuário.
 * Esta classe serve como base para outras classes de usuário e não pode ser instanciada diretamente.
 *
 * @abstract
 */
class UserEntity {
	/**
	 * O endereço de email do usuário.
	 * @type {string}
	 */
	email;

	/**
	 * O número de telefone do usuário.
	 * @type {string}
	 */
	phone;

	/**
	 * A senha do usuário.
	 * @type {string}
	 */
	password;

	/**
	 * O tipo do usuário.
	 * @type {string}
	 */
	personType;

	/**
	 * Cria uma nova instância de UserEntity.
	 * @param {string} email - O endereço de email do usuário.
	 * @param {string} phone - O número de telefone do usuário.
	 * @param {string} password - A senha do usuário.
	 * @param {string} personType - O tipo do usuário.
	 */
	constructor(email, phone, password, personType) {
		if (new.target === UserEntity) {
			throw new Error('Cannot instantiate abstract class UserEntity directly');
		}
		this.email = email;
		this.phone = phone;
		this.password = password;
		this.personType = personType;
	}

	toJSON() {
		return {
			email: this.email,
			phone: this.phone,
			password: this.password,
			personType: this.personType,
		};
	}
}

module.exports = UserEntity;
