<script lang="ts">
	import BaseSlide from './BaseSlide.svelte';
	import MacBookProMockup from '$lib/MacBookProMockup.svelte';
	import IPadMockup from '$lib/IPadMockup.svelte';
	import IPhoneMockup from '$lib/IPhoneMockup.svelte';

	export let assetLibraryImage: string;
	export let feedbackImage: string;
	export let liveCanvasImage: string;
</script>

<BaseSlide className="flex h-screen items-center text-[#f5f5f7]">
	<div class="container mx-auto flex h-full max-w-7xl flex-col justify-center px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-6 text-6xl leading-tight font-semibold tracking-tight text-white">
				Beautiful on every device
			</h2>
			<p class="mx-auto max-w-2xl text-lg leading-relaxed text-[#a1a1a6]">
				Experience AuraFlow's seamless interface across all your devices. From mobile sketches to
				desktop masterpieces.
			</p>
		</div>

		<!-- Multi-Device Row with Responsive Sizing -->
		<div class="flex items-center justify-center gap-4 px-4">
			<!-- MacBook Pro - Largest (takes most space) -->
			<div class="w-4/5 transform transition-all duration-700">
				<MacBookProMockup imageUrl={assetLibraryImage} altText="AuraFlow desktop interface" />
			</div>
			<!-- iPad - Medium -->
			<div class="w-3/5 transform transition-all duration-700">
				<IPadMockup imageUrl={feedbackImage} altText="AuraFlow tablet interface" />
			</div>
			<!-- iPhone - Smallest -->
			<div class="w-2/5 transform transition-all duration-700">
				<IPhoneMockup
					orientation="landscape"
					imageUrl={liveCanvasImage}
					altText="AuraFlow mobile interface"
				/>
			</div>
		</div>
	</div>
</BaseSlide>
