<script lang="ts">
	import { MacBookProMockup } from '$lib';
	import BaseSlide from './BaseSlide.svelte';

	interface CompanyInfo {
		name: string;
		tagline: string;
		description: string;
		logo: string;
		founded?: string;
		location?: string;
		website?: string;
		industry?: string;
		size?: string;
		achievements?: string[];
		values?: string[];
	}

	export let title: string = 'About Our Company';
	export let subtitle: string = 'Innovation. Excellence. Impact.';
	export let company: CompanyInfo = {
		name: 'Your Company',
		tagline: 'Building the future, one project at a time',
		description:
			'We are a forward-thinking company dedicated to creating innovative solutions that make a real difference in the world.',
		logo: '/img/test.png'
	};
	export let accentColor: string = '#0071e3';
	export let stats: Array<{ label: string; value: string }> = [];
</script>

<BaseSlide className="lg:flex-row text-[#f5f5f7]">
	<!-- Dynamic gradient background -->
	<!-- <div class="absolute inset-0 opacity-5">
		<div
			class="h-full w-full"
			style="background: radial-gradient(circle at center, {accentColor}15 0%, transparent 70%)"
		></div>
	</div> -->

	<!-- Floating geometric shapes -->
	<div class="pointer-events-none absolute inset-0 overflow-hidden">
		<div
			class="animate-pulse-slow absolute top-1/4 left-1/4 h-32 w-32 rounded-full opacity-5 blur-xl"
			style="background-color: {accentColor}"
		></div>
		<div
			class="animate-pulse-slow absolute right-1/4 bottom-1/3 h-24 w-24 rounded-full opacity-5 blur-lg"
			style="background-color: {accentColor}; animation-delay: 2s;"
		></div>
	</div>

	<!-- Company Info Section -->
	<div
		class="flex h-full w-full flex-col justify-center space-y-6 p-2 lg:w-fit lg:justify-end lg:px-8"
	>
		<!-- Title & Subtitle -->
		<div class="space-y-4">
			<h1
				class="header text-[clamp(3rem,6vw,7rem)] leading-tight font-semibold tracking-tight text-white"
			>
				{title}
			</h1>
			<p class="text-[clamp(1.5rem,3vw,2rem)] font-medium text-[#f5f5f7] opacity-90">
				{subtitle}
			</p>
		</div>

		<!-- Company Name & Tagline -->
		<div class="space-y-3">
			<p class="text-xl font-medium text-[#a1a1a6] opacity-90">{company.tagline}</p>
		</div>

		<!-- Description -->
		<p class="max-w-2xl text-lg leading-relaxed text-[#a1a1a6]">
			{company.description}
		</p>

		<!-- Company Details -->
		<div class="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2 lg:gap-6">
			{#if company.founded}
				<div class="space-y-1 lg:space-y-2">
					<div
						class="text-xs font-medium tracking-wide text-[#a1a1a6] uppercase opacity-70 lg:text-sm"
					>
						Founded
					</div>
					<div class="text-base font-semibold text-white lg:text-lg">{company.founded}</div>
				</div>
			{/if}
			{#if company.location}
				<div class="space-y-1 lg:space-y-2">
					<div
						class="text-xs font-medium tracking-wide text-[#a1a1a6] uppercase opacity-70 lg:text-sm"
					>
						Location
					</div>
					<div class="text-base font-semibold text-white lg:text-lg">{company.location}</div>
				</div>
			{/if}
			{#if company.industry}
				<div class="space-y-1 lg:space-y-2">
					<div
						class="text-xs font-medium tracking-wide text-[#a1a1a6] uppercase opacity-70 lg:text-sm"
					>
						Industry
					</div>
					<div class="text-base font-semibold text-white lg:text-lg">{company.industry}</div>
				</div>
			{/if}
			{#if company.size}
				<div class="space-y-1 lg:space-y-2">
					<div
						class="text-xs font-medium tracking-wide text-[#a1a1a6] uppercase opacity-70 lg:text-sm"
					>
						Team Size
					</div>
					<div class="text-base font-semibold text-white lg:text-lg">{company.size}</div>
				</div>
			{/if}
		</div>

		<!-- Stats -->
		{#if stats.length > 0}
			<div class="flex flex-wrap items-center justify-start gap-6 pt-3 lg:gap-8 lg:pt-4">
				{#each stats as stat}
					<div class="min-w-0 flex-shrink-0 text-center">
						<div class="text-2xl font-bold text-white lg:text-3xl">{stat.value}</div>
						<div class="text-xs font-medium text-[#a1a1a6] opacity-90 lg:text-sm">
							{stat.label}
						</div>
					</div>
				{/each}
			</div>
		{/if}

		<!-- Values -->
		{#if company.values && company.values.length > 0}
			<div class="space-y-3 pt-2 lg:space-y-4">
				<h3 class="text-lg font-semibold text-[#f5f5f7] lg:text-xl">Our Values</h3>
				<div class="flex flex-wrap gap-2 lg:gap-3">
					{#each company.values as value}
						<span
							class="rounded-lg px-3 py-1.5 text-xs font-medium text-[#f5f5f7] transition-all duration-200 hover:scale-105 lg:px-4 lg:py-2 lg:text-sm"
							style="background-color: {accentColor}20; border: 1px solid {accentColor}30;"
						>
							{value}
						</span>
					{/each}
				</div>
			</div>
		{/if}

		<!-- Website Link -->
		{#if company.website}
			<div class="pt-3 lg:pt-4">
				<a
					href={company.website}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center space-x-2 rounded-xl border border-white/20 px-5 py-2.5 text-xs font-medium text-[#f5f5f7] transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/5 lg:px-6 lg:py-3 lg:text-sm"
				>
					<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
						/>
					</svg>
					<span>Visit Website</span>
					<svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</a>
			</div>
		{/if}
	</div>

	<!-- Logo, Mockup, and Achievements Section -->
	<div class="flex h-full w-full flex-col items-center justify-center p-4 lg:w-1/2 lg:justify-end">
		<div class="relative w-full max-w-lg lg:w-full lg:max-w-none">
			<!-- Glow effect behind the logo -->
			<div
				class="absolute inset-0 scale-110 rounded-2xl opacity-20 blur-3xl"
				style="background-color: {accentColor}"
			></div>

			<!-- Mockup Container - Takes half screen width on desktop -->
			<div class="relative w-full">
				<MacBookProMockup imageUrl={company.logo} />

				<!-- Floating badge - Top right of mockup -->
				<!-- <div class="absolute -top-3 -right-3 z-50 opacity-30">
					<div
						class="rounded-full border border-white/10 bg-gradient-to-t from-gray-400/20 to-gray-200/20 p-2 backdrop-blur-sm md:p-3"
					>
						<svg
							class="h-5 w-5 text-yellow-400 md:h-6 md:w-6"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
							/>
						</svg>
					</div>
				</div> -->
			</div>

			<!-- Achievements -->
			{#if company.achievements && company.achievements.length > 0}
				<div class="mt-6 w-full space-y-4 lg:mt-8">
					<h4 class="text-center text-lg font-semibold text-[#f5f5f7] lg:text-xl">
						Key Achievements
					</h4>
					<div class="space-y-2 lg:space-y-3">
						{#each company.achievements as achievement}
							<div class="flex items-start space-x-3">
								<div
									class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full lg:mt-2 lg:h-2 lg:w-2"
									style="background-color: {accentColor}"
								></div>
								<span class="text-xs leading-relaxed text-[#a1a1a6] lg:text-sm">{achievement}</span>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</div>
</BaseSlide>

<style>
	/* Enhanced hover effects */
	a:hover {
		transform: translateY(-1px);
	}

	/* Smooth transitions */
	* {
		transition-property: transform, opacity, background-color, border-color;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	/* Focus states for accessibility */
	a:focus-visible {
		outline: 2px solid var(--accent-color, #0071e3);
		outline-offset: 2px;
		border-radius: 0.75rem;
	}

	.header {
		position: relative;
		display: inline-block;
		padding: 0;
		margin: 0;
		text-transform: uppercase;
		color: #fff; /* White text color */
		background:
			repeating-linear-gradient(
				90deg,
				transparent 0,
				transparent 2px,
				rgba(256, 256, 256, 0.6) 2px,
				rgba(256, 256, 256, 0.6) 3px
			),
			repeating-linear-gradient(
				0deg,
				transparent 0,
				transparent 2px,
				rgba(256, 256, 256, 0.4) 2px,
				rgba(256, 256, 256, 0.4) 3px
			);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.header::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background:
			repeating-linear-gradient(
				90deg,
				transparent 0,
				transparent 2px,
				rgba(0, 0, 0, 0.3) 2px,
				rgba(0, 0, 0, 0.3) 3px
			),
			repeating-linear-gradient(
				0deg,
				transparent 0,
				transparent 2px,
				rgba(0, 0, 0, 0.2) 2px,
				rgba(0, 0, 0, 0.2) 3px
			);
		-webkit-background-clip: text;
		background-clip: text;
		pointer-events: none;
		z-index: -1;
	}
</style>
