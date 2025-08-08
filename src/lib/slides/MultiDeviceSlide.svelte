<script lang="ts">
	import BaseSlide from './BaseSlide.svelte';
	import MacBookProMockup from '$lib/MacBookProMockup.svelte';
	import IPadMockup from '$lib/IPadMockup.svelte';
	import IPhoneMockup from '$lib/IPhoneMockup.svelte';

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
</script>

<BaseSlide className="flex h-full min-h-screen justify-center items-center text-[#f5f5f7]">
	<div class="container mx-auto flex h-full max-w-7xl flex-col justify-center px-8">
		<div class="mb-2 text-center">
			<h2 class="mb-4 text-6xl leading-tight font-semibold tracking-tight text-white">
				{title}
			</h2>
			<p class="text-xl font-medium text-[#f5f5f7] opacity-90">
				{subtitle}
			</p>
			<p class="mx-auto max-w-2xl text-lg leading-relaxed text-[#a1a1a6]">
				{description}
			</p>
		</div>

		<!-- Multi-Device Row with Responsive Sizing -->
		<div class="flex items-center justify-center gap-4 px-4">
			{#if showDevices.macbook}
				<!-- MacBook Pro - Largest (takes most space) -->
				<div class="w-4/5 transform transition-all duration-700">
					<MacBookProMockup imageUrl={images.macbook} altText="AuraFlow desktop interface" />
				</div>
			{/if}
			{#if showDevices.ipad}
				<!-- iPad - Medium -->
				<div class="w-3/5 transform transition-all duration-700">
					<IPadMockup
						orientation={orientation.ipad}
						imageUrl={images.ipad}
						altText="AuraFlow tablet interface"
					/>
				</div>
			{/if}
			{#if showDevices.iphone}
				<!-- iPhone - Smallest -->
				<div class="w-2/5 transform transition-all duration-700">
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
