<script lang="ts">
	import BaseSlide from './BaseSlide.svelte';
	import MacBookProMockup from '$lib/components/MacBookProMockup.svelte';
	import IPadMockup from '$lib/components/IPadMockup.svelte';
	import IPhoneMockup from '$lib/components/IPhoneMockup.svelte';

	export let images = {
		macbook: 'https://demofyit-assets.s3.eu-west-1.amazonaws.com/macbook-pro-mockup.png',
		ipad: 'https://demofyit-assets.s3.eu-west-1.amazonaws.com/ipad-mockup.png',
		iphone: 'https://demofyit-assets.s3.eu-west-1.amazonaws.com/iphone-mockup.png'
	};
	export let title: string = 'Beautiful on every device';
	export let description: string =
		"Experience AuraFlow's seamless interface across all your devices. From mobile sketches to desktop masterpieces.";
	export let subtitle: string = 'Crafted for every screen, designed for every creator';
	export let orientation: { iphone?: 'landscape' | 'portrait'; ipad?: 'landscape' | 'portrait' } = {
		iphone: 'portrait',
		ipad: 'portrait'
	};

	export let showDevices: { iphone?: boolean; ipad?: boolean; macbook?: boolean } = {
		iphone: true,
		ipad: true,
		macbook: true
	};

	export let className: string = '';

	export let accentColor: string = '#0071e3'; // Default Apple blue
</script>

<BaseSlide className=" text-[#f5f5f7] {className}">
	<div class="container mx-auto flex max-w-5xl flex-col items-center justify-center px-6">
		<!-- Floating geometric shapes -->
		<div class="pointer-events-none absolute inset-0 overflow-hidden">
			<div
				class="animate-pulse-slow absolute top-1/4 left-1/4 h-32 w-32 rounded-full opacity-50 blur-xl"
				style="background-color: {accentColor}"
			></div>
			<div
				class="animate-pulse-slow absolute right-1/4 bottom-1/3 h-24 w-24 rounded-full opacity-50 blur-lg"
				style="background-color: {accentColor}; animation-delay: 2s;"
			></div>
		</div>

		<div class="mb-4 text-center sm:mb-6 lg:mb-8">
			<h2
				class="mb-2 text-4xl leading-tight font-semibold tracking-tight text-white sm:mb-3 sm:text-5xl lg:mb-4"
			>
				{title}
			</h2>
			<p class="mb-2 text-lg font-medium text-[#f5f5f7] opacity-90 sm:mb-3 sm:text-xl">
				{subtitle}
			</p>
			<p class="mx-auto max-w-2xl text-base leading-relaxed text-[#a1a1a6] sm:text-lg">
				{description}
			</p>
		</div>

		<!-- Multi-Device Row with Responsive Sizing -->
		<div class="mx-auto flex h-fit w-full max-w-4xl items-center justify-center">
			{#if showDevices.macbook}
				<!-- MacBook Pro - Largest (takes most space) -->
				<div class="w-1/2 transform transition-all duration-700">
					<MacBookProMockup imageUrl={images.macbook} altText="AuraFlow desktop interface" />
				</div>
			{/if}
			{#if showDevices.ipad}
				<!-- iPad - Medium -->
				<div class="w-1/3 transform transition-all duration-700">
					<IPadMockup
						orientation={orientation.ipad}
						imageUrl={images.ipad}
						altText="AuraFlow tablet interface"
					/>
				</div>
			{/if}
			{#if showDevices.iphone}
				<!-- iPhone - Smallest -->
				<div class="w-1/5 transform transition-all duration-700">
					<IPhoneMockup
						orientation={orientation.iphone}
						imageUrl={images.iphone}
						altText="AuraFlow mobile interface"
					/>
				</div>
			{/if}
		</div>
	</div>
</BaseSlide>
