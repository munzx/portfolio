<script lang="ts">
	import BaseSlide from './BaseSlide.svelte';
	import MacBookProMockup from '$lib/MacBookProMockup.svelte';

	export let imageUrl: string;
	export let accentColor: string = '#fffffff'; // Apple blue as default
</script>

<BaseSlide className=" text-[#f5f5f7]">
	<!-- Dynamic gradient background based on accent color -->
	<!-- <div class="absolute inset-0 opacity-5">
		<div
			class="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]"
			style="background: radial-gradient(circle at center, {accentColor}15 0%, transparent 70%)"
		></div>
	</div> -->

	<!-- Floating geometric shapes -->
	<div class="pointer-events-none absolute inset-0 overflow-hidden">
		<div
			class="animate-pulse-slow absolute top-1/4 left-1/4 h-32 w-32 rounded-full opacity-5 blur-xl"
			style="background-color: {accentColor}"
		></div>
		<div
			class="animate-pulse-slow absolute right-1/4 bottom-1/3 h-24 w-24 rounded-full opacity-5 blur-lg"
			style="background-color: {accentColor}; animation-delay: 2s;"
		></div>
	</div>

	<div class="relative z-10 flex h-full w-full max-w-7xl items-center px-8">
		<!-- Left Content -->
		<div class="flex-1 text-left">
			<h1
				class="mb-6 text-[clamp(3.5rem,8vw,6rem)] leading-none font-semibold tracking-tight text-white"
			>
				Meet AuraFlow
			</h1>
			<p class="mb-6 text-[clamp(1.8rem,4vw,2.5rem)] font-medium text-[#f5f5f7]">
				Powerful. Intuitive. Creative.
			</p>
			<p class="mb-8 max-w-xl text-lg leading-relaxed text-[#a1a1a6]">
				The future of creative collaboration is here. AuraFlow transforms how design teams work
				together, bringing seamless collaboration, real-time feedback, and powerful tools into one
				beautiful platform.
			</p>
		</div>

		<!-- Right Visual -->
		<div class="flex flex-1 items-center justify-center">
			<div class="w-full max-w-2xl scale-90 transform">
				<MacBookProMockup {imageUrl} altText="AuraFlow creative collaboration platform" />
			</div>
		</div>
	</div>
</BaseSlide>
