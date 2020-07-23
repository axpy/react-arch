export class SignInDto {
	userName: string;
	password: string;
	rememberMe: boolean;

	constructor(
		userName: string,
		password: string,
		rememberMe: boolean
	) {
		this.userName = userName;
		this.password = password;
		this.rememberMe = rememberMe;
	}
}