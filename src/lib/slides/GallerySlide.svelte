<script lang="ts">
	import BaseSlide from './BaseSlide.svelte';
	import LayeredGrid from '$lib/LayeredGrid.svelte';

	export let galleryImages: string[];
	export let centerIndex: number;
</script>

<BaseSlide className="flex h-screen items-center text-[#f5f5f7]">
	<div class="container mx-auto flex h-full max-w-6xl flex-col justify-center px-8 text-center">
		<div class="mb-12">
			<h2 class="mb-6 text-6xl leading-tight font-semibold tracking-tight text-white">
				A canvas for your biggest ideas
			</h2>
			<p class="mx-auto max-w-2xl text-lg leading-relaxed text-[#a1a1a6]">
				From wireframes to high-fidelity prototypes, see what you can create with AuraFlow.
			</p>
		</div>

		<div class="flex max-h-[500px] flex-1 items-center justify-center">
			<LayeredGrid images={galleryImages} {centerIndex} />
		</div>
	</div>
</BaseSlide>
