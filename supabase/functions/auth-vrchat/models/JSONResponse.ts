export default interface JSONResponse {
	// deno-lint-ignore no-explicit-any
	data: any | null,
	error: true | false,
	message: string
}