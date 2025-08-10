<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let { images } = $props<{
		images: string[];
	}>();

	let currentIndex = $state(0);
	let isHovered = $state(false);
	let intervalId: number | null = null;

	// Simple background images - just use the original array
	const backgroundImages = $derived(images.slice(1)); // Exclude current center image

	// Auto-rotate through images
	onMount(() => {
		if (images.length > 1) {
			intervalId = setInterval(() => {
				if (!isHovered) {
					currentIndex = (currentIndex + 1) % images.length;
				}
			}, 2000); // Slower rotation for better UX
		}
	});

	onDestroy(() => {
		if (intervalId !== null) {
			clearInterval(intervalId);
			intervalId = null;
		}
	});
</script>

<div class="relative h-80 w-full overflow-hidden">
	<!-- Simplified background grid -->
	<div class="absolute inset-0 opacity-30 blur-sm">
		<div class="grid h-full grid-cols-4 gap-2 p-4">
			{#each backgroundImages.slice(0, 8) as src, index}
				<div class="overflow-hidden rounded-lg bg-gray-800">
					<img {src} alt="" class="h-full w-full object-cover" loading="lazy" />
				</div>
			{/each}
		</div>
	</div>

	<!-- Center image with auto-rotation -->
	{#if images.length > 0}
		<div
			class="absolute inset-0 flex items-center justify-center"
			on:mouseenter={() => (isHovered = true)}
			on:mouseleave={() => (isHovered = false)}
			role="img"
			tabindex="0"
		>
			<div class="relative">
				<img
					src={images[currentIndex]}
					alt="Featured project"
					class="max-h-72 max-w-md rounded-xl object-contain shadow-2xl transition-transform duration-300 hover:scale-105"
				/>

				<!-- Simple progress dots -->
				{#if images.length > 1}
					<div class="absolute -bottom-6 left-1/2 flex -translate-x-1/2 space-x-2">
						{#each images as _, index}
							<button
								class="h-2 w-2 rounded-full transition-all duration-200 {index === currentIndex
									? 'bg-white'
									: 'bg-white/40'}"
								on:click={() => (currentIndex = index)}
								aria-label="View project {index + 1}"
							></button>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>
