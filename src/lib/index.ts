// place files you want to import through the `$lib` alias in this folder.
export { default as IPhoneMockup } from './components/IPhoneMockup.svelte';
export { default as IPadMockup } from './components/IPadMockup.svelte';
export { default as MacBookProMockup } from './components/MacBookProMockup.svelte';
export { default as LayeredGrid } from './components/LayeredGrid.svelte';
export { default as StatusBarIcons } from './components/StatusBarIcons.svelte';

// Slide components
export * from './slides';

// Reusable components
export { default as PricingSection } from './components/PricingSection.svelte';
export { default as ContactForm } from './components/ContactForm.svelte';

// Stores
export * from './stores/pricing';

// Types
export type { StepItem } from './types/steps';
