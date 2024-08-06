module.exports = class ValidationError extends Error {
	constructor(props) {
		super(props);
		this.name = 'ValidationError';
		this.status = 400;
	}
};
