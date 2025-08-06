<script lang="ts">
	import BaseSlide from './BaseSlide.svelte';

	export let text: string = 'Text Slide';
	export let subText: string = 'This is a text slide. You can add any content here.';
</script>

<BaseSlide className="flex h-full min-h-screen justify-center items-center text-[#f5f5f7]">
	<div class=" w-full text-center lg:max-w-1/2">
		<h2
			class="mb-8 text-[clamp(3rem,7vw,4.5rem)] leading-tight font-semibold tracking-tight text-white"
		>
			{text}
		</h2>
		<p class="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-[#a1a1a6]">
			{subText}
		</p>
	</div>
</BaseSlide>
