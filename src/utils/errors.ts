export class InternalServerError extends Error {

	public message: string;
	public status: number;

	constructor(status: number, message: string) {
		super(message);

		this.status = status;
		this.message = message;
	}
}


export class NotFoundError extends Error {

	public message: string;
	public status: number;

	constructor(status: number, message: string) {
		super(message);

		this.status = status;
		this.message = message;
	}
}


export class BadRequestError extends Error {

	public message: string;
	public status: number;

	constructor(status: number, message: string) {
		super(message);

		this.status = status;
		this.message = message;
	}
}


