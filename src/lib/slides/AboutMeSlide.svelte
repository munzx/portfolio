<script lang="ts">
	import BaseSlide from './BaseSlide.svelte';

	// Types for better type safety
	interface ContactInfo {
		email?: string;
		linkedIn?: string;
		gitHub?: string;
		website?: string;
	}

	// Props with clear defaults
	interface Props {
		name?: string;
		title?: string;
		description?: string;
		portfolioImage?: string;
		skills?: string[];
		contactEmail?: string;
		contactLinkedIn?: string;
		contactGitHub?: string;
		contactWebsite?: string;
		experience?: string;
		projectsCompleted?: number;
		accentColor?: string;
	}

	let {
		name = 'Munzir Suliman',
		title = 'Software Engineer & Creative Developer',
		description = 'Passionate about creating beautiful, functional digital experiences that make a difference. I specialize in full-stack development, UX/UI design, and bringing innovative ideas to life.',
		portfolioImage = '/img/test.png',
		skills = [],
		contactEmail = '',
		contactLinkedIn = '',
		contactGitHub = '',
		contactWebsite = '',
		experience = '5+ years',
		projectsCompleted = 50,
		accentColor = '#0071e3'
	}: Props = $props();

	// Computed values
	const hasContacts = $derived(contactEmail || contactLinkedIn || contactGitHub || contactWebsite);
	const hasSkills = $derived(skills.length > 0);
</script>

<BaseSlide className="relative bg-black text-gray-50">
	<div class="relative z-10 flex h-full w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
		<!-- Floating geometric shapes -->
		<div class="pointer-events-none absolute inset-0 overflow-hidden">
			<div
				class="absolute top-1/4 left-1/4 h-24 w-24 animate-pulse rounded-full opacity-10 blur-xl sm:h-32 sm:w-32"
				style="background-color: {accentColor}"
			></div>
			<div
				class="absolute right-1/4 bottom-1/3 h-16 w-16 animate-pulse rounded-full opacity-5 blur-lg sm:h-24 sm:w-24"
				style="background-color: {accentColor}; animation-delay: 2s;"
			></div>
		</div>

		<div class="flex h-full min-h-screen w-full items-center justify-center">
			<div
				class="grid w-full grid-cols-1 items-center gap-8 md:gap-12
				       lg:grid-cols-2 lg:gap-16"
			>
				<!-- Personal Info Section -->
				<div class="order-2 flex flex-col justify-center space-y-6 lg:order-1">
					<!-- Name & Title -->
					<header class="space-y-3">
						<h1
							class="text-3xl leading-tight font-semibold tracking-tight text-white
							       sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
						>
							{name}
						</h1>
						<p
							class="text-lg font-medium text-gray-100 opacity-90
						          sm:text-xl md:text-2xl lg:text-3xl"
						>
							{title}
						</p>
					</header>

					<!-- Description -->
					<p class="max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
						{description}
					</p>

					<!-- Stats -->
					<div class="grid grid-cols-3 gap-4 pt-4 sm:gap-6 lg:gap-8">
						<div class="text-center">
							<div class="text-xl font-bold text-white sm:text-2xl">{experience}</div>
							<div class="text-xs text-gray-400 sm:text-sm">Experience</div>
						</div>
						<div class="text-center">
							<div class="text-xl font-bold text-white sm:text-2xl">{projectsCompleted}+</div>
							<div class="text-xs text-gray-400 sm:text-sm">Projects</div>
						</div>
						<div class="text-center">
							<div class="text-xl font-bold text-white sm:text-2xl">∞</div>
							<div class="text-xs text-gray-400 sm:text-sm">Ideas</div>
						</div>
					</div>

					<!-- Skills -->
					{#if hasSkills}
						<div class="space-y-3 pt-4">
							<h3 class="text-base font-semibold text-gray-100 sm:text-lg">Core Skills</h3>
							<div class="flex flex-wrap gap-2">
								{#each skills as skill}
									<span
										class="rounded-lg border px-2 py-1 text-xs font-medium text-gray-100
										       transition-colors hover:bg-white/5 sm:px-3 sm:py-1.5
										       sm:text-sm"
										style="background-color: {accentColor}20; border-color: {accentColor}30;"
									>
										{skill}
									</span>
								{/each}
							</div>
						</div>
					{/if}

					<!-- Contact Links -->
					{#if hasContacts}
						<nav class="pt-6" aria-label="Contact information">
							<div class="flex flex-wrap gap-3">
								{#if contactEmail}
									<a
										href="mailto:{contactEmail}"
										class="flex items-center space-x-2 rounded-xl border border-white/20
										       px-3 py-2 text-xs font-medium text-gray-100 transition-all duration-300
										       hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/5 sm:px-4
										       sm:text-sm"
										aria-label="Send email to {name}"
									>
										<svg
											class="h-3 w-3 sm:h-4 sm:w-4"
											fill="currentColor"
											viewBox="0 0 20 20"
											aria-hidden="true"
										>
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
										class="flex items-center space-x-2 rounded-xl border border-white/20
										       px-3 py-2 text-xs font-medium text-gray-100 transition-all duration-300
										       hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/5 sm:px-4
										       sm:text-sm"
										aria-label="View {name}'s LinkedIn profile"
									>
										<svg
											class="h-3 w-3 sm:h-4 sm:w-4"
											fill="currentColor"
											viewBox="0 0 20 20"
											aria-hidden="true"
										>
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
										class="flex items-center space-x-2 rounded-xl border border-white/20
										       px-3 py-2 text-xs font-medium text-gray-100 transition-all duration-300
										       hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/5 sm:px-4
										       sm:text-sm"
										aria-label="View {name}'s GitHub profile"
									>
										<svg
											class="h-3 w-3 sm:h-4 sm:w-4"
											fill="currentColor"
											viewBox="0 0 20 20"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
												clip-rule="evenodd"
											/>
										</svg>
										<span>GitHub</span>
									</a>
								{/if}
								{#if contactWebsite}
									<a
										href={contactWebsite}
										target="_blank"
										rel="noopener noreferrer"
										class="flex items-center space-x-2 rounded-xl border border-white/20
										       px-3 py-2 text-xs font-medium text-gray-100 transition-all duration-300
										       hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/5 sm:px-4
										       sm:text-sm"
										aria-label="Visit {name}'s website"
									>
										<svg
											class="h-3 w-3 sm:h-4 sm:w-4"
											fill="currentColor"
											viewBox="0 0 20 20"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
												clip-rule="evenodd"
											/>
										</svg>
										<span>Website</span>
									</a>
								{/if}
							</div>
						</nav>
					{/if}
				</div>

				<!-- Personal Photo Showcase -->
				<div class="order-1 flex items-center justify-center py-8 lg:order-2 lg:py-0">
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
									class="h-64 w-64 rounded-full object-cover shadow-2xl sm:h-80
									       sm:w-80 lg:h-96 lg:w-96"
									loading="lazy"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</BaseSlide>

<style>
	/* Enhanced focus states for better accessibility */
	a:focus-visible {
		outline: 2px solid #3b82f6;
		outline-offset: 2px;
	}

	/* Smooth animations for better UX */
	@media (prefers-reduced-motion: reduce) {
		* {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
		}
	}

	/* Print optimization */
	@media print {
		.animate-pulse {
			animation: none;
		}
	}

	/* Enhanced hover effects */
	a:hover {
		transform: translateY(-2px);
	}

	/* Custom animation for floating elements */
	@keyframes float {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-10px);
		}
	}
</style>
