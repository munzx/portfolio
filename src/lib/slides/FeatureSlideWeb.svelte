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

	// Optional UI elements
	export let badgeText: string = ''; // Empty string means no badge
	export let showLiveIndicator: boolean = false;
	export let collaboratorCount: number = 0; // 0 means no collaborators shown
	export let primaryButtonText: string = ''; // Empty string means no primary button
	export let secondaryButtonText: string = ''; // Empty string means no secondary button
</script>

<BaseSlide className="relative text-[#f5f5f7]">
	<!-- Dynamic gradient background based on accent color -->
	<!-- <div class="absolute inset-0 opacity-5">
		<div
			class="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]"
			style="background: radial-gradient(circle at center, {accentColor}15 0%, transparent 70%)"
		></div>
	</div> -->

	<!-- Floating geometric shapes for visual interest -->
	<div class="pointer-events-none absolute inset-0 top-0 overflow-hidden">
		<div
			class="animate-pulse-slow absolute top-1/4 left-1/4 h-16 w-16 rounded-full opacity-10 blur-xl sm:h-24 sm:w-24 lg:h-32 lg:w-32"
			style="background-color: {accentColor}"
		></div>
		<div
			class="animate-pulse-slow absolute right-1/4 bottom-1/3 h-12 w-12 rounded-full opacity-5 blur-lg sm:h-18 sm:w-18 lg:h-24 lg:w-24"
			style="background-color: {accentColor}; animation-delay: 2s;"
		></div>
	</div>

	<div class="flex w-full flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:gap-12 lg:px-40">
		<!-- Content Section -->
		<div
			class="flex w-full flex-col justify-center space-y-4 sm:space-y-6 lg:w-1/2"
			class:lg:order-2={reverse}
		>
			<!-- Badge/Label (optional) -->
			{#if badgeText}
				<div class="inline-flex w-fit items-center">
					<span
						class="rounded-full px-4 py-1.5 text-sm font-medium text-white"
						style="background-color: {accentColor}20; border: 1px solid {accentColor}40;"
					>
						{badgeText}
					</span>
				</div>
			{/if}

			<!-- Main Heading -->
			<h2 class="text-[clamp(2rem,8vw,5rem)] leading-tight font-semibold tracking-tight text-white">
				{title}
			</h2>

			<!-- Subtitle -->
			<p class="text-[clamp(1.25rem,4vw,2rem)] font-medium text-[#f5f5f7] opacity-90">
				{subtitle}
			</p>

			<!-- Description -->
			<p class="max-w-xl text-base leading-relaxed text-[#a1a1a6] sm:text-lg">
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

			<!-- Call to action (optional) -->
			{#if primaryButtonText || secondaryButtonText}
				<div
					class="flex flex-col items-start gap-3 pt-4 sm:flex-row sm:items-center sm:gap-4 sm:pt-6"
				>
					{#if primaryButtonText}
						<button
							class="w-full rounded-xl px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg sm:w-auto sm:px-8"
							style="background: linear-gradient(135deg, {accentColor} 0%, {accentColor}cc 100%); box-shadow: 0 4px 20px {accentColor}40;"
						>
							{primaryButtonText}
						</button>
					{/if}
					{#if secondaryButtonText}
						<button
							class="w-full rounded-xl border border-white/20 px-6 py-3 font-medium text-[#f5f5f7] transition-all duration-300 hover:border-white/40 hover:bg-white/5 sm:w-auto sm:px-8"
						>
							{secondaryButtonText}
						</button>
					{/if}
				</div>
			{/if}
		</div>

		<!-- Visual Showcase -->
		<div
			class="flex w-full flex-col items-center justify-center lg:mt-0 lg:w-1/2 lg:flex-row"
			class:lg:order-1={reverse}
		>
			<div class="relative flex w-full max-w-lg items-center justify-center lg:max-w-none">
				<!-- Glow effect behind the mockup -->
				<div
					class="absolute inset-0 scale-110 rounded-lg opacity-20 blur-3xl"
					style="background-color: {accentColor}"
				></div>

				<!-- Main device mockup -->
				<MacBookProMockup {imageUrl} {altText} />

				<!-- Floating UI elements for extra visual appeal -->
				{#if showLiveIndicator}
					<div
						class="absolute -top-4 -right-4 opacity-80 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-8"
					>
						<div
							class="rounded-lg p-2 backdrop-blur-sm sm:p-3"
							style="background-color: {accentColor}20; border: 1px solid {accentColor}40;"
						>
							<div class="flex items-center space-x-1 sm:space-x-2">
								<div class="h-2 w-2 rounded-full bg-green-400"></div>
								<span class="text-xs font-medium text-white">Live</span>
							</div>
						</div>
					</div>
				{/if}

				{#if collaboratorCount > 0}
					<div
						class="absolute -bottom-3 -left-3 opacity-80 sm:-bottom-4 sm:-left-4 lg:-bottom-6 lg:-left-6"
					>
						<div
							class="rounded-lg p-2 backdrop-blur-sm sm:p-3 lg:p-4"
							style="background-color: {accentColor}15; border: 1px solid {accentColor}30;"
						>
							<div class="flex items-center space-x-2 sm:space-x-3">
								<div class="flex -space-x-1">
									<div
										class="h-4 w-4 rounded-full border-2 border-white bg-gradient-to-br from-purple-400 to-pink-400 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
									></div>
									<div
										class="h-4 w-4 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-cyan-400 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
									></div>
									<div
										class="h-4 w-4 rounded-full border-2 border-white bg-gradient-to-br from-green-400 to-emerald-400 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
									></div>
								</div>
								<span class="text-xs font-medium text-white"
									>+{collaboratorCount} collaborators</span
								>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</BaseSlide>
