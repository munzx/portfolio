<script lang="ts">
	import BaseSlide from './BaseSlide.svelte';
	import LayeredGrid from '$lib/components/LayeredGrid.svelte';

	export let title: string = 'A canvas for your biggest ideas';
	export let description: string =
		'From wireframes to high-fidelity prototypes, see what you can create with AuraFlow.';
	export let galleryImages: string[];
</script>

<BaseSlide className="flex h-full min-h-screen justify-center items-center text-[#f5f5f7]">
	<div class="container mx-auto flex h-full max-w-5xl flex-col justify-center px-8 text-center">
		<div class="mb-12">
			<h2 class="mb-6 text-6xl leading-tight font-semibold tracking-tight text-white">
				{title}
			</h2>
			<p class="mx-auto max-w-2xl text-lg leading-relaxed text-[#a1a1a6]">
				{description}
			</p>
		</div>

		<div class="flex max-h-[500px] flex-1 items-center justify-center">
			<LayeredGrid images={galleryImages} />
		</div>
	</div>
</BaseSlide>
