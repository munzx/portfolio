// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

// Environment variables
declare module '$env/static/private' {
	export const SENDGRID_API_KEY: string;
	export const SENDGRID_FROM_EMAIL: string;
	export const SENDGRID_TO_EMAIL: string;
}

export { };
