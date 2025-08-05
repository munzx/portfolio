<script lang="ts">
	import BaseSlide from './BaseSlide.svelte';
	import MacBookProMockup from '$lib/MacBookProMockup.svelte';

	export let galleryImages: string[];
</script>

<BaseSlide className="flex h-screen items-center justify-center overflow-hidden text-[#f5f5f7]">
	<!-- Subtle grid background -->
	<div class="absolute inset-0 opacity-5">
		<div
			class="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"
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
				<MacBookProMockup
					imageUrl={galleryImages[1]}
					altText="AuraFlow creative collaboration platform"
				/>
			</div>
		</div>
	</div>
</BaseSlide>
