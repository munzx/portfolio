<script lang="ts">
	import BaseSlide from './BaseSlide.svelte';

	export let name: string = 'Munzir Suliman';
	export let title: string = 'Software Engineer & Creative Developer';
	export let description: string =
		'Passionate about creating beautiful, functional digital experiences that make a difference. I specialize in full-stack development, UX/UI design, and bringing innovative ideas to life.';
	export let portfolioImage: string = '/img/test.png';
	export let skills: string[] = [];
	export let contactEmail = '';
	export let contactLinkedIn = '';
	export let contactGitHub = '';
	export let contactWebsite = '';
	export let experience: string = '5+ years';
	export let projectsCompleted: number = 50;
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

	<div class="relative z-10 flex h-full w-full max-w-7xl items-center px-8">
		<div class="grid w-full items-center gap-16 lg:grid-cols-2 lg:grid-rows-1">
			<!-- Personal Info Section -->
			<div class="flex flex-col justify-center space-y-6">
				<!-- Name & Title -->
				<div class="space-y-3">
					<h1
						class="text-[clamp(3rem,6vw,5rem)] leading-tight font-semibold tracking-tight text-white"
					>
						{name}
					</h1>
					<p class="text-[clamp(1.5rem,3vw,2rem)] font-medium text-[#f5f5f7] opacity-90">
						{title}
					</p>
				</div>

				<!-- Description -->
				<p class="max-w-xl text-lg leading-relaxed text-[#a1a1a6]">
					{description}
				</p>

				<!-- Stats -->
				<div class="flex items-center space-x-8 pt-4">
					<div class="text-center">
						<div class="text-2xl font-bold text-white">{experience}</div>
						<div class="text-sm text-[#a1a1a6]">Experience</div>
					</div>
					<div class="text-center">
						<div class="text-2xl font-bold text-white">{projectsCompleted}+</div>
						<div class="text-sm text-[#a1a1a6]">Projects</div>
					</div>
					<div class="text-center">
						<div class="text-2xl font-bold text-white">∞</div>
						<div class="text-sm text-[#a1a1a6]">Ideas</div>
					</div>
				</div>

				<!-- Skills -->
				{#if skills.length > 0}
					<div class="space-y-3 pt-4">
						<h3 class="text-lg font-semibold text-[#f5f5f7]">Core Skills</h3>
						<div class="flex flex-wrap gap-2">
							{#each skills as skill}
								<span
									class="rounded-lg px-3 py-1.5 text-sm font-medium text-[#f5f5f7]"
									style="background-color: {accentColor}20; border: 1px solid {accentColor}30;"
								>
									{skill}
								</span>
							{/each}
						</div>
					</div>
				{/if}

				<!-- Contact Links -->
				{#if contactEmail || contactLinkedIn || contactGitHub || contactWebsite}
					<div class="flex items-center space-x-4 pt-6">
						{#if contactEmail}
							<a
								href="mailto:{contactEmail}"
								class="flex items-center space-x-2 rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-[#f5f5f7] transition-all duration-300 hover:border-white/40 hover:bg-white/5"
							>
								<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
									<path
										d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
									/>
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
								</svg>
								<span>Email</span>
							</a>
						{/if}
						{#if contactLinkedIn}
							<a
								href={contactLinkedIn}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center space-x-2 rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-[#f5f5f7] transition-all duration-300 hover:border-white/40 hover:bg-white/5"
							>
								<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
										clip-rule="evenodd"
									/>
								</svg>
								<span>LinkedIn</span>
							</a>
						{/if}
						{#if contactGitHub}
							<a
								href={contactGitHub}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center space-x-2 rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-[#f5f5f7] transition-all duration-300 hover:border-white/40 hover:bg-white/5"
							>
								<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
										clip-rule="evenodd"
									/>
								</svg>
								<span>GitHub</span>
							</a>
						{/if}
					</div>
				{/if}
			</div>

			<!-- Personal Photo Showcase -->
			<div class="flex h-full items-center justify-center">
				<div class="relative">
					<!-- Glow effect behind the photo -->
					<div
						class="absolute inset-0 scale-110 rounded-full opacity-20 blur-3xl"
						style="background-color: {accentColor}"
					></div>

					<!-- Personal Photo Frame -->
					<div class="relative transform transition-all duration-700 hover:scale-105">
						<!-- Photo container with gradient border -->
						<div
							class="relative rounded-full p-1"
							style="background: linear-gradient(135deg, {accentColor} 0%, {accentColor}80 50%, {accentColor}40 100%)"
						>
							<img
								src={portfolioImage}
								alt="Personal photo of {name}"
								class="h-96 w-96 rounded-full object-cover shadow-2xl"
							/>
						</div>

						<!-- Decorative ring -->
						<div
							class="absolute inset-0 rounded-full border-2 opacity-30"
							style="border-color: {accentColor}"
						></div>
					</div>

					<!-- Floating status indicator -->
					<!-- <div class="absolute -top-8 -right-8 opacity-80">
						<div
							class="rounded-lg p-3 backdrop-blur-sm"
							style="background-color: {accentColor}20; border: 1px solid {accentColor}40;"
						>
							<div class="flex items-center space-x-2">
								<div class="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
								<span class="text-xs font-medium text-white">Available for work</span>
							</div>
						</div>
					</div> -->

					<!-- Floating decorative elements -->
					<div class="absolute -bottom-6 -left-6 opacity-60">
						<div
							class="rounded-full p-4"
							style="background-color: {accentColor}15; border: 1px solid {accentColor}25;"
						>
							<svg class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
								/>
							</svg>
						</div>
					</div>
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
		.absolute {
			position: static;
			margin-top: 1rem;
		}

		.flex-wrap {
			justify-content: center;
		}
	}
</style>
