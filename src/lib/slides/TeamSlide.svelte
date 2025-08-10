<script lang="ts">
	import BaseSlide from './BaseSlide.svelte';

	interface TeamMember {
		name: string;
		title: string;
		image: string;
		bio?: string;
		skills?: string[];
		linkedIn?: string;
		github?: string;
		website?: string;
	}

	export let title: string = 'Meet the Team';
	export let subtitle: string = 'The creative minds behind the magic';
	export let teamMembers: TeamMember[] = [];
	export let accentColor: string = '#0071e3';
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
			class="animate-pulse-slow absolute top-1/4 left-1/4 h-32 w-32 rounded-full opacity-10 blur-xl"
			style="background-color: {accentColor}"
		></div>
		<div
			class="animate-pulse-slow absolute right-1/4 bottom-1/3 h-24 w-24 rounded-full opacity-5 blur-lg"
			style="background-color: {accentColor}; animation-delay: 2s;"
		></div>
	</div>

	<div class="relative z-10 flex h-full w-full max-w-5xl flex-col justify-center px-8">
		<!-- Header Section -->
		<div class="mb-16 text-center">
			<h2
				class="mb-6 text-[clamp(3rem,6vw,5rem)] leading-tight font-semibold tracking-tight text-white"
			>
				{title}
			</h2>
			<p class="mx-auto max-w-2xl text-[clamp(1.2rem,2.5vw,1.5rem)] text-[#a1a1a6]">
				{subtitle}
			</p>
		</div>

		<!-- Team Members Grid -->
		{#if teamMembers.length > 0}
			<div
				class="grid gap-8 {teamMembers.length === 1
					? 'grid-cols-1 justify-items-center'
					: teamMembers.length === 2
						? 'grid-cols-1 gap-12 md:grid-cols-2'
						: 'grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}"
			>
				{#each teamMembers as member, index}
					<div class="group flex flex-col items-center text-center">
						<!-- Photo Container -->
						<div class="relative mb-6">
							<!-- Glow effect -->
							<div
								class="absolute inset-0 scale-110 rounded-full opacity-20 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-30"
								style="background-color: {accentColor}"
							></div>

							<!-- Photo Frame -->
							<div class="relative transform transition-all duration-500 group-hover:scale-105">
								<!-- Gradient border -->
								<div
									class="relative rounded-full p-1"
									style="background: linear-gradient(135deg, {accentColor} 0%, {accentColor}80 50%, {accentColor}40 100%)"
								>
									<img
										src={member.image}
										alt="Photo of {member.name}"
										class="h-32 w-32 rounded-full object-cover shadow-xl transition-all duration-500 group-hover:shadow-2xl"
									/>
								</div>

								<!-- Decorative ring -->
								<div
									class="absolute inset-0 rounded-full border-2 opacity-20 transition-opacity duration-500 group-hover:opacity-40"
									style="border-color: {accentColor}"
								></div>

								<!-- Status indicator for online/available -->
								<div class="absolute -right-1 -bottom-1">
									<div
										class="h-6 w-6 rounded-full border-2 border-[#1d1d1f]"
										style="background-color: {accentColor}"
									>
										<div class="flex h-full w-full items-center justify-center">
											<div class="h-2 w-2 rounded-full bg-white"></div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<!-- Member Info -->
						<div class="space-y-3">
							<!-- Name -->
							<h3
								class="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[{accentColor}]"
							>
								{member.name}
							</h3>

							<!-- Title -->
							<p class="text-sm font-medium text-[#a1a1a6] opacity-90">
								{member.title}
							</p>

							<!-- Bio (if provided) -->
							{#if member.bio}
								<p class="max-w-sm text-sm leading-relaxed text-[#a1a1a6] opacity-80">
									{member.bio}
								</p>
							{/if}

							<!-- Skills -->
							{#if member.skills && member.skills.length > 0}
								<div class="flex flex-wrap justify-center gap-1 pt-2">
									{#each member.skills.slice(0, 3) as skill}
										<span
											class="rounded-lg px-2 py-1 text-xs font-medium text-[#f5f5f7] transition-all duration-300 group-hover:scale-105"
											style="background-color: {accentColor}15; border: 1px solid {accentColor}25;"
										>
											{skill}
										</span>
									{/each}
									{#if member.skills.length > 3}
										<span
											class="rounded-lg px-2 py-1 text-xs font-medium text-[#a1a1a6]"
											style="background-color: {accentColor}10; border: 1px solid {accentColor}20;"
										>
											+{member.skills.length - 3}
										</span>
									{/if}
								</div>
							{/if}

							<!-- Social Links -->
							{#if member.linkedIn || member.github || member.website}
								<div class="flex justify-center space-x-3 pt-4">
									{#if member.linkedIn}
										<a
											href={member.linkedIn}
											target="_blank"
											rel="noopener noreferrer"
											class="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:scale-110 hover:border-white/40 hover:bg-white/5"
											aria-label="LinkedIn profile of {member.name}"
										>
											<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
												<path
													d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
												/>
											</svg>
										</a>
									{/if}

									{#if member.github}
										<a
											href={member.github}
											target="_blank"
											rel="noopener noreferrer"
											class="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:scale-110 hover:border-white/40 hover:bg-white/5"
											aria-label="GitHub profile of {member.name}"
										>
											<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
												<path
													d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
												/>
											</svg>
										</a>
									{/if}

									{#if member.website}
										<a
											href={member.website}
											target="_blank"
											rel="noopener noreferrer"
											class="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:scale-110 hover:border-white/40 hover:bg-white/5"
											aria-label="Website of {member.name}"
										>
											<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
												<path
													d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
												/>
											</svg>
										</a>
									{/if}
								</div>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<!-- Empty state -->
			<div class="flex flex-col items-center justify-center text-center">
				<div
					class="mb-6 flex h-24 w-24 items-center justify-center rounded-full"
					style="background-color: {accentColor}20; border: 2px solid {accentColor}30;"
				>
					<svg class="h-12 w-12 text-[#a1a1a6]" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.83 0-1.54.5-1.85 1.22l-2.28 5.78H11c-.83 0-1.54.5-1.85 1.22L7.27 20H4v2h16zM12.5 11.5c.83 0 1.5-.67 1.5-1.5S13.33 8.5 12.5 8.5 11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2.5 16v-7H6l1.8-5.4A1.5 1.5 0 0 1 9.2 8.5h.6c.83 0 1.54.5 1.85 1.22l1.2 3.78H11c-.83 0-1.54.5-1.85 1.22L8 18.5V22H8z"
						/>
					</svg>
				</div>
				<p class="text-lg text-[#a1a1a6]">No team members to display</p>
				<p class="text-sm text-[#a1a1a6] opacity-70">
					Add team members to showcase your collaborators
				</p>
			</div>
		{/if}
	</div>
</BaseSlide>

<style>
	/* Enhanced hover animations */
	.group:hover img {
		transform: scale(1.05);
	}

	/* Smooth transitions for all interactive elements */
	* {
		transition-property: transform, opacity, background-color, border-color;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.grid {
			grid-template-columns: 1fr !important;
			gap: 2rem;
		}
	}

	@media (max-width: 1024px) {
		.lg\:grid-cols-3 {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	/* Focus states for accessibility */
	a:focus-visible {
		outline: 2px solid var(--accent-color, #0071e3);
		outline-offset: 2px;
		border-radius: 50%;
	}
</style>
