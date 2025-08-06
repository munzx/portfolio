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

<BaseSlide className="flex h-full min-h-screen justify-center items-center text-[#f5f5f7]">
	<!-- Dynamic gradient background -->
	<div class="absolute inset-0 opacity-5">
		<div
			class="h-full w-full"
			style="background: radial-gradient(circle at center, {accentColor}15 0%, transparent 70%)"
		></div>
	</div>

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

	<div class="relative z-10 flex h-full w-full max-w-7xl items-center px-8">
		<div class="grid w-full items-center gap-16 lg:grid-cols-2 lg:grid-rows-1">
			<!-- Company Info Section -->
			<div class="flex flex-col justify-center space-y-6">
				<!-- Title & Subtitle -->
				<div class="space-y-3">
					<h1
						class="header text-[clamp(3rem,6vw,5rem)] leading-tight font-semibold tracking-tight text-white"
					>
						{title}
					</h1>
					<p class="text-[clamp(1.5rem,3vw,2rem)] font-medium text-[#f5f5f7] opacity-90">
						{subtitle}
					</p>
				</div>

				<!-- Company Name & Tagline -->
				<div class="space-y-2">
					<p class="text-lg font-medium text-[#a1a1a6] opacity-90">{company.tagline}</p>
				</div>

				<!-- Description -->
				<p class="max-w-xl text-lg leading-relaxed text-[#a1a1a6]">
					{company.description}
				</p>

				<!-- Company Details -->
				<div class="grid grid-cols-2 gap-4 pt-4">
					{#if company.founded}
						<div class="space-y-1">
							<div class="text-sm text-[#a1a1a6] opacity-70">Founded</div>
							<div class="text-base font-medium text-white">{company.founded}</div>
						</div>
					{/if}
					{#if company.location}
						<div class="space-y-1">
							<div class="text-sm text-[#a1a1a6] opacity-70">Location</div>
							<div class="text-base font-medium text-white">{company.location}</div>
						</div>
					{/if}
					{#if company.industry}
						<div class="space-y-1">
							<div class="text-sm text-[#a1a1a6] opacity-70">Industry</div>
							<div class="text-base font-medium text-white">{company.industry}</div>
						</div>
					{/if}
					{#if company.size}
						<div class="space-y-1">
							<div class="text-sm text-[#a1a1a6] opacity-70">Team Size</div>
							<div class="text-base font-medium text-white">{company.size}</div>
						</div>
					{/if}
				</div>

				<!-- Stats -->
				{#if stats.length > 0}
					<div class="flex items-center space-x-8 pt-6">
						{#each stats as stat}
							<div class="text-center">
								<div class="text-2xl font-bold text-white">{stat.value}</div>
								<div class="text-sm text-[#a1a1a6]">{stat.label}</div>
							</div>
						{/each}
					</div>
				{/if}

				<!-- Values -->
				{#if company.values && company.values.length > 0}
					<div class="space-y-3 pt-4">
						<h3 class="text-lg font-semibold text-[#f5f5f7]">Our Values</h3>
						<div class="flex flex-wrap gap-2">
							{#each company.values as value}
								<span
									class="rounded-lg px-3 py-1.5 text-sm font-medium text-[#f5f5f7]"
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
					<div class="pt-6">
						<a
							href={company.website}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center space-x-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-medium text-[#f5f5f7] transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/5"
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

			<!-- Logo & Achievements Section -->
			<div class="flex h-full items-center justify-center">
				<div class="relative">
					<!-- Glow effect behind the logo -->
					<div
						class="absolute inset-0 scale-110 rounded-2xl opacity-20 blur-3xl"
						style="background-color: {accentColor}"
					></div>

					<!-- Logo Container -->
					<!-- <div class="relative transform transition-all duration-700 hover:scale-105">
						<div
							class="relative rounded-2xl p-8"
							style="background: linear-gradient(135deg, {accentColor}10 0%, {accentColor}5 100%); border: 1px solid {accentColor}20;"
						>
							<img src={company.logo} alt="{company.name} logo" class="h-48 w-48 object-contain" />
						</div>

						<div
							class="absolute inset-0 rounded-2xl border-2 opacity-30"
							style="border-color: {accentColor}"
						></div>
					</div> -->

					<MacBookProMockup imageUrl={company.logo} imgDisplay="cover" />

					<!-- Achievements -->
					{#if company.achievements && company.achievements.length > 0}
						<div class="mt-8 space-y-3">
							<h4 class="text-center text-lg font-semibold text-[#f5f5f7]">Key Achievements</h4>
							<div class="space-y-2">
								{#each company.achievements as achievement}
									<div class="flex items-center justify-center space-x-2">
										<div class="h-2 w-2 rounded-full" style="background-color: {accentColor}"></div>
										<span class="text-sm text-[#a1a1a6]">{achievement}</span>
									</div>
								{/each}
							</div>
						</div>
					{/if}

					<!-- Floating badge -->
					<!-- <div class="absolute -top-6 -right-6 opacity-80">
						<div
							class="rounded-full p-4 backdrop-blur-sm"
							style="background-color: {accentColor}20; border: 1px solid {accentColor}40;"
						>
							<svg class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
								/>
							</svg>
						</div>
					</div> -->
				</div>
			</div>
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

	/* Responsive adjustments */
	@media (max-width: 1024px) {
		.grid {
			grid-template-columns: 1fr;
			gap: 3rem;
		}

		.space-x-8 > * {
			margin-right: 1.5rem;
		}
	}

	@media (max-width: 768px) {
		.grid-cols-2 {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		img {
			height: 8rem;
			width: 8rem;
		}
	}
</style>
