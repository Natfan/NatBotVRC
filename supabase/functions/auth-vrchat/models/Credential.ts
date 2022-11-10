export interface Credential {
	username: string
	password: string
	readonly encode: string
	readonly headers: Record<string, string>
}

export class CredentialObject {
	public username!: string
	public password!: string

	get encode(): string {
		return Buffer.from(
			`${encodeURIComponent(this.username)}:${encodeURIComponent(this.password)}`
		).toString("base64")
	}
	get headers(): HeadersInit {
		return {
			Authorization: `Basic ${this.encode}`
		}
	}
}