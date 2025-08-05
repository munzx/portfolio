<script lang="ts">
	let { images, centerIndex } = $props<{
		images: string[];
		centerIndex: number;
	}>();

	// Ensure we have at least 16 images by repeating the array
	const extendedImages = $derived.by(() => {
		if (images.length === 0) return [];
		const minImages = 16;
		const result = [...images];
		while (result.length < minImages) {
			result.push(...images);
		}
		return result.slice(0, Math.max(minImages, images.length));
	});

	function getMasonryPosition(index: number) {
		const heights = [120, 160, 140, 180, 100]; // Varied heights for masonry effect
		const height = heights[index % heights.length];
		return { height };
	}
</script>

<div class="relative h-80 w-full overflow-hidden">
	<!-- Masonry grid background -->
	<div class="absolute inset-0 h-full w-full p-2">
		<div class="w-full columns-5 gap-2">
			{#each extendedImages as src, index}
				{@const originalIndex = index % images.length}
				{@const isCenter = originalIndex === centerIndex}
				{#if !isCenter}
					{@const position = getMasonryPosition(index)}
					<div
						class="mb-2 break-inside-avoid opacity-50 blur-xs"
						style="height: {position.height}px;"
					>
						<img {src} alt="Gallery" class="h-full w-full rounded-lg object-cover shadow-md" />
					</div>
				{/if}
			{/each}
		</div>
	</div>

	<!-- Center image -->
	{#if centerIndex >= 0 && centerIndex < images.length}
		<div class="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm">
			<img
				src={images[centerIndex]}
				alt="Gallery"
				class="max-h-80 w-92 rounded-xl object-contain"
			/>
		</div>
	{/if}
</div>
