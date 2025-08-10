<script lang="ts">
	import BaseSlide from './BaseSlide.svelte';

	export let title: string = 'Website Showcase';
	export let subtitle: string = 'Explore our web development portfolio';
	export let websites: Array<string | { image: string; label?: 'live' | 'concept' }> = [];
</script>

<BaseSlide className="flex h-full min-h-screen justify-center items-center text-[#f5f5f7]">
	<div class="relative z-10 w-full max-w-6xl px-8 py-16">
		<!-- Header Section -->
		<div class="mb-16 text-center">
			<h2 class="mb-6 text-[clamp(3rem,6vw,4.5rem)] font-semibold text-white">
				{title}
			</h2>
			<p class="mx-auto max-w-3xl text-lg text-[#a1a1a6]">
				{subtitle}
			</p>
		</div>

		<!-- Simple Masonry Grid -->
		<div class="columns-2 md:columns-3 lg:columns-4">
			{#each websites as website, index}
				{@const imageUrl = typeof website === 'string' ? website : website.image}
				{@const label = typeof website === 'object' ? website.label : undefined}

				<div class="relative mb-4">
					<img
						class="rounded-lg object-cover transition-opacity duration-300"
						src={imageUrl}
						alt={`Screenshot ${index + 1}`}
						loading="lazy"
						decoding="async"
						style="background-color: #2d2d2f; min-height: 150px;"
						on:load={(e) => {
							if (e.target && e.target instanceof HTMLImageElement) {
								e.target.style.backgroundColor = 'transparent';
							}
						}}
					/>

					{#if label}
						<div class="absolute top-2 right-2">
							{#if label === 'live'}
								<span
									class="rounded bg-green-500/90 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm"
								>
									Live
								</span>
							{:else if label === 'concept'}
								<span
									class="rounded bg-blue-500/90 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm"
								>
									Concept
								</span>
							{/if}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</BaseSlide>
