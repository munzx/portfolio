<script lang="ts">
	import BaseSlide from './BaseSlide.svelte';

	export let title: string = 'Website Showcase';
	export let subtitle: string = 'Explore our web development portfolio';
	export let websites: Array<{
		title: string;
		url?: string;
		image: string;
		description?: string;
		category?: string;
	}> = [];
	export let accentColor: string = '#6366f1';

	// Dynamic grid columns based on number of items
	function getGridColumns(count: number): string {
		if (count <= 2) return 'grid-cols-1 lg:grid-cols-2';
		if (count <= 4) return 'grid-cols-2 lg:grid-cols-2';
		if (count <= 6) return 'grid-cols-2 lg:grid-cols-3';
		return 'grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
	}

	// Dynamic sizing for masonry effect
	function getMasonryClass(index: number, total: number): string {
		const patterns = [
			'row-span-2', // tall
			'row-span-1', // normal
			'row-span-3', // extra tall
			'row-span-1', // normal
			'row-span-2', // tall
			'row-span-1' // normal
		];

		// Ensure we don't make too many items tall if we have few items
		if (total <= 3) return 'row-span-1';
		if (total <= 5 && index > 2) return 'row-span-1';

		return patterns[index % patterns.length];
	}
</script>

<BaseSlide className="flex h-full min-h-screen justify-center items-center text-[#f5f5f7]">
	<!-- Dynamic gradient background -->
	<div class="absolute inset-0 opacity-5">
		<div
			class="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]"
			style="background: radial-gradient(circle at center, {accentColor}15 0%, transparent 70%)"
		></div>
	</div>

	<!-- Floating geometric shapes -->
	<div class="pointer-events-none absolute inset-0 overflow-hidden">
		<div
			class="animate-pulse-slow absolute top-1/4 left-1/4 h-32 w-32 rounded-full opacity-10 blur-xl"
			style="background-color: {accentColor}"
		></div>
		<div
			class="animate-pulse-slow absolute right-1/4 bottom-1/3 h-24 w-24 rounded-full opacity-5 blur-lg"
			style="background-color: {accentColor}; animation-delay: 2s;"
		></div>
	</div>

	<div class="relative z-10 w-full max-w-7xl px-8 py-16">
		<!-- Header Section -->
		<div class="mb-16 text-center">
			<h2
				class="mb-6 text-[clamp(3rem,6vw,4.5rem)] leading-tight font-semibold tracking-tight text-white"
			>
				{title}
			</h2>
			<p class="mx-auto max-w-3xl text-lg leading-relaxed text-[#a1a1a6]">
				{subtitle}
			</p>
		</div>

		<!-- Dynamic Masonry Grid -->
		{#if websites.length > 0}
			<div class="grid {getGridColumns(websites.length)} auto-rows-[200px] gap-6">
				{#each websites as website, index}
					<div
						class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1d1d1f] to-[#2d2d2f] p-1 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl {getMasonryClass(
							index,
							websites.length
						)}"
						style="border: 1px solid {accentColor}20;"
					>
						<!-- Hover overlay with accent color -->
						<div
							class="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
							style="background-color: {accentColor};"
						></div>

						<!-- Content Container -->
						<div class="relative h-full overflow-hidden rounded-xl bg-[#161617]">
							<!-- Website Screenshot -->
							<div class="relative h-full w-full overflow-hidden">
								<img
									src={website.image}
									alt={website.title}
									class="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
									loading="lazy"
								/>

								<!-- Gradient overlay for text readability -->
								<div
									class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
								></div>
							</div>

							<!-- Website Info Overlay -->
							<div class="absolute right-0 bottom-0 left-0 p-6">
								<div
									class="translate-y-2 transform transition-transform duration-300 group-hover:translate-y-0"
								>
									{#if website.category}
										<span
											class="mb-2 inline-block rounded-full px-3 py-1 text-xs font-medium text-white"
											style="background-color: {accentColor}40; border: 1px solid {accentColor}60;"
										>
											{website.category}
										</span>
									{/if}

									<h3 class="group-hover:text-shadow mb-2 text-xl font-bold text-white">
										{website.title}
									</h3>

									{#if website.description}
										<p
											class="text-sm text-[#a1a1a6] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
										>
											{website.description}
										</p>
									{/if}

									{#if website.url}
										<div
											class="mt-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
										>
											<span
												class="inline-flex items-center text-xs font-medium"
												style="color: {accentColor};"
											>
												Visit Site
												<svg
													class="ml-1 h-3 w-3"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
													></path>
												</svg>
											</span>
										</div>
									{/if}
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<!-- Empty state -->
			<div class="py-16 text-center">
				<div
					class="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#2d2d2f]"
				>
					<svg
						class="h-12 w-12 text-[#a1a1a6]"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
						></path>
					</svg>
				</div>
				<p class="text-[#a1a1a6]">No websites to showcase yet.</p>
			</div>
		{/if}
	</div>
</BaseSlide>

<style>
	/* Custom text shadow for better readability */
	:global(.text-shadow) {
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
	}

	/* Smooth animations */
	@keyframes pulse-slow {
		0%,
		100% {
			opacity: 0.05;
		}
		50% {
			opacity: 0.15;
		}
	}

	.animate-pulse-slow {
		animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}

	/* Enhanced hover effects */
	.group:hover .group-hover\:scale-110 {
		transform: scale(1.1);
	}

	.group:hover .group-hover\:translate-y-0 {
		transform: translateY(0);
	}

	.group:hover .group-hover\:opacity-100 {
		opacity: 1;
	}
</style>
