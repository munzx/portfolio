<script lang="ts">
	import BaseSlide from './BaseSlide.svelte';
	import MacBookProMockup from '$lib/MacBookProMockup.svelte';

	export let title: string = 'Discover the Future';
	export let subtitle: string = 'Experience Innovation';
	export let description: string =
		'Step into tomorrow with cutting-edge technology that transforms the way you work, create, and collaborate.';
	export let imageUrl: string = '/img/test.png';
	export let altText: string = 'App showcase';
	export let reverse: boolean = false;
	export let accentColor: string = '#0071e3'; // Apple blue as default
	export let features: string[] = [];
</script>

<BaseSlide className="flex h-full min-h-screen justify-center items-center text-[#f5f5f7]">
	<!-- Dynamic gradient background based on accent color -->
	<div class="absolute inset-0 opacity-5">
		<div
			class="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]"
			style="background: radial-gradient(circle at center, {accentColor}15 0%, transparent 70%)"
		></div>
	</div>

	<!-- Floating geometric shapes for visual interest -->
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

	<div class="relative z-10 flex h-full w-full max-w-7xl items-center px-8">
		<div class="grid w-full items-center gap-16 lg:grid-cols-2 lg:grid-rows-1">
			<!-- Content Section -->
			<div class="flex flex-col justify-center space-y-6" class:lg:order-2={reverse}>
				<!-- Badge/Label -->
				<div class="inline-flex w-fit items-center">
					<span
						class="rounded-full px-4 py-1.5 text-sm font-medium text-white"
						style="background-color: {accentColor}20; border: 1px solid {accentColor}40;"
					>
						✨ Featured Experience
					</span>
				</div>

				<!-- Main Heading -->
				<h2
					class="text-[clamp(3rem,6vw,5rem)] leading-tight font-semibold tracking-tight text-white"
				>
					{title}
				</h2>

				<!-- Subtitle -->
				<p class="text-[clamp(1.5rem,3vw,2rem)] font-medium text-[#f5f5f7] opacity-90">
					{subtitle}
				</p>

				<!-- Description -->
				<p class="max-w-xl text-lg leading-relaxed text-[#a1a1a6]">
					{description}
				</p>

				<!-- Features list (if provided) -->
				{#if features.length > 0}
					<div class="space-y-3 pt-4">
						{#each features as feature}
							<div class="flex items-center space-x-3">
								<div
									class="flex h-6 w-6 items-center justify-center rounded-full"
									style="background-color: {accentColor}30;"
								>
									<svg class="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										/>
									</svg>
								</div>
								<span class="text-[#f5f5f7]">{feature}</span>
							</div>
						{/each}
					</div>
				{/if}

				<!-- Call to action -->
				<div class="flex items-center space-x-4 pt-6">
					<button
						class="rounded-xl px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
						style="background: linear-gradient(135deg, {accentColor} 0%, {accentColor}cc 100%); box-shadow: 0 4px 20px {accentColor}40;"
					>
						Experience Now
					</button>
					<button
						class="rounded-xl border border-white/20 px-8 py-3 font-medium text-[#f5f5f7] transition-all duration-300 hover:border-white/40 hover:bg-white/5"
					>
						Learn More
					</button>
				</div>
			</div>

			<!-- Visual Showcase -->
			<div class="flex h-full items-center justify-center" class:lg:order-1={reverse}>
				<div class="relative">
					<!-- Glow effect behind the mockup -->
					<div
						class="absolute inset-0 scale-110 rounded-lg opacity-20 blur-3xl"
						style="background-color: {accentColor}"
					></div>

					<!-- Main device mockup -->
					<div
						class="relative scale-90 transform transition-all duration-700 hover:scale-95 hover:rotate-1"
					>
						<MacBookProMockup {imageUrl} {altText} />
					</div>

					<!-- Floating UI elements for extra visual appeal -->
					<div class="absolute -top-8 -right-8 opacity-80">
						<div
							class="rounded-lg p-3 backdrop-blur-sm"
							style="background-color: {accentColor}20; border: 1px solid {accentColor}40;"
						>
							<div class="flex items-center space-x-2">
								<div class="h-2 w-2 rounded-full bg-green-400"></div>
								<span class="text-xs font-medium text-white">Live</span>
							</div>
						</div>
					</div>

					<div class="absolute -bottom-6 -left-6 opacity-80">
						<div
							class="rounded-lg p-4 backdrop-blur-sm"
							style="background-color: {accentColor}15; border: 1px solid {accentColor}30;"
						>
							<div class="flex items-center space-x-3">
								<div class="flex -space-x-1">
									<div
										class="h-6 w-6 rounded-full border-2 border-white bg-gradient-to-br from-purple-400 to-pink-400"
									></div>
									<div
										class="h-6 w-6 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-cyan-400"
									></div>
									<div
										class="h-6 w-6 rounded-full border-2 border-white bg-gradient-to-br from-green-400 to-emerald-400"
									></div>
								</div>
								<span class="text-xs font-medium text-white">+12 collaborators</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</BaseSlide>

<style>
	/* Custom animations */
	@keyframes float {
		0%,
		100% {
			transform: translateY(0px) rotate(0deg);
		}
		50% {
			transform: translateY(-10px) rotate(1deg);
		}
	}

	.animate-float {
		animation: float 6s ease-in-out infinite;
	}

	/* Enhanced hover effects */
	button:hover {
		transform: translateY(-1px);
	}

	/* Responsive adjustments */
	@media (max-width: 1024px) {
		.grid {
			grid-template-columns: 1fr;
			gap: 3rem;
		}
	}

	@media (max-width: 768px) {
		.absolute {
			position: static;
		}
	}
</style>
