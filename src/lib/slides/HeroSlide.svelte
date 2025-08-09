<script lang="ts">
	import BaseSlide from './BaseSlide.svelte';
	import MacBookProMockup from '$lib/MacBookProMockup.svelte';

	// Required props
	export let imageUrl: string;

	// Customizable content props
	export let title: string = 'Meet AuraFlow';
	export let subtitle: string = 'Powerful. Intuitive. Creative.';
	export let description: string =
		'The future of creative collaboration is here. AuraFlow transforms how design teams work together, bringing seamless collaboration, real-time feedback, and powerful tools into one beautiful platform.';
	export let altText: string = 'Product showcase';

	// Visual customization props
	export let accentColor: string = '#007AFF'; // Apple blue as default
	export let showFloatingShapes: boolean = true;
	export let backgroundColor: string = '#1d1d1f';
	export let textColor: string = '#f5f5f7';
	export let subtitleColor: string = '#f5f5f7';
	export let descriptionColor: string = '#a1a1a6';

	// Layout props
	export let reverseLayout: boolean = false;
	export let centerContent: boolean = false;
</script>

<BaseSlide className="text-[#f5f5f7]" {backgroundColor}>
	<!-- Dynamic gradient background based on accent color -->
	<!-- <div class="absolute inset-0 opacity-5">
		<div
			class="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]"
			style="background: radial-gradient(circle at center, {accentColor}15 0%, transparent 70%)"
		></div>
	</div> -->

	<!-- Floating geometric shapes -->
	{#if showFloatingShapes}
		<div class="pointer-events-none absolute inset-0 overflow-hidden">
			<div
				class="animate-pulse-slow absolute top-1/4 left-1/4 h-16 w-16 rounded-full opacity-5 blur-xl sm:h-24 sm:w-24 lg:h-32 lg:w-32"
				style="background-color: {accentColor}"
			></div>
			<div
				class="animate-pulse-slow absolute right-1/4 bottom-1/3 h-12 w-12 rounded-full opacity-5 blur-lg sm:h-18 sm:w-18 lg:h-24 lg:w-24"
				style="background-color: {accentColor}; animation-delay: 2s;"
			></div>
		</div>
	{/if}

	<div class="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
		<!-- Content Container with responsive layout -->
		<div
			class="flex w-full {centerContent ? 'justify-center text-center' : ''} {reverseLayout
				? 'flex-col-reverse lg:flex-row-reverse'
				: 'flex-col lg:flex-row'} items-center gap-8 lg:gap-12"
		>
			<!-- Left Content -->
			<div
				class="flex-1 {centerContent
					? 'text-center'
					: 'text-center lg:text-left'} space-y-4 sm:space-y-6"
			>
				<h1
					class="text-[clamp(2.5rem,6vw,4rem)] leading-none font-semibold tracking-tight sm:text-[clamp(3rem,7vw,5rem)] lg:text-[clamp(3.5rem,8vw,6rem)]"
					style="color: {textColor}"
				>
					{title}
				</h1>
				<p
					class="text-[clamp(1.2rem,3vw,1.8rem)] font-medium sm:text-[clamp(1.4rem,3.5vw,2rem)] lg:text-[clamp(1.8rem,4vw,2.5rem)]"
					style="color: {subtitleColor}"
				>
					{subtitle}
				</p>
				<p
					class="max-w-none text-base leading-relaxed sm:max-w-lg sm:text-lg lg:max-w-xl"
					style="color: {descriptionColor}"
				>
					{description}
				</p>
			</div>

			<!-- Right Visual -->
			<div class="flex w-full flex-1 items-center justify-center">
				<div
					class="w-full max-w-sm scale-75 transform sm:max-w-lg sm:scale-85 lg:max-w-2xl lg:scale-90"
				>
					<MacBookProMockup {imageUrl} {altText} />
				</div>
			</div>
		</div>
	</div>
</BaseSlide>
