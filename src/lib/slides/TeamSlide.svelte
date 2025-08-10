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
	<div class="relative z-10 flex h-full w-full max-w-6xl flex-col justify-center px-8">
		<!-- Header Section -->
		<div class="mb-16 text-center">
			<h2 class="mb-6 text-[clamp(3rem,6vw,5rem)] font-semibold text-white">
				{title}
			</h2>
			<p class="mx-auto max-w-2xl text-[clamp(1.2rem,2.5vw,1.5rem)] text-[#a1a1a6]">
				{subtitle}
			</p>
		</div>

		<!-- Team Members - Centered -->
		{#if teamMembers.length > 0}
			<div class="flex justify-center">
				<div class="grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
					{#each teamMembers as member}
						<div class="group flex flex-col items-center text-center">
							<!-- Photo -->
							<div class="relative mb-6">
								<div
									class="absolute inset-0 rounded-full opacity-20 blur-xl transition-all duration-500 group-hover:opacity-30"
									style="background-color: {accentColor}"
								></div>
								<div
									class="relative rounded-full p-1 transition-transform duration-500 group-hover:scale-105"
									style="background: linear-gradient(135deg, {accentColor}, {accentColor}80)"
								>
									<img
										src={member.image}
										alt={member.name}
										class="h-32 w-32 rounded-full object-cover"
									/>
								</div>
							</div>

							<!-- Info -->
							<div class="space-y-3">
								<h3 class="text-xl font-semibold text-white">{member.name}</h3>
								<p class="text-sm text-[#a1a1a6]">{member.title}</p>

								{#if member.bio}
									<p class="max-w-sm text-sm leading-relaxed text-[#a1a1a6] opacity-80">
										{member.bio}
									</p>
								{/if}

								{#if member.skills && member.skills.length > 0}
									<div class="flex flex-wrap justify-center gap-2 pt-2">
										{#each member.skills.slice(0, 3) as skill}
											<span
												class="rounded-full px-3 py-1 text-xs text-white"
												style="background-color: {accentColor}30"
											>
												{skill}
											</span>
										{/each}
									</div>
								{/if}

								{#if member.linkedIn || member.github || member.website}
									<div class="flex justify-center space-x-3 pt-4">
										{#if member.linkedIn && member.linkedIn !== '#'}
											<a
												href={member.linkedIn}
												target="_blank"
												class="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:bg-white/10"
											>
												<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
													<path
														d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
													/>
												</svg>
											</a>
										{/if}

										{#if member.github && member.github !== '#'}
											<a
												href={member.github}
												target="_blank"
												class="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:bg-white/10"
											>
												<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
													<path
														d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
													/>
												</svg>
											</a>
										{/if}

										{#if member.website && member.website !== '#'}
											<a
												href={member.website}
												target="_blank"
												class="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:bg-white/10"
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
			</div>
		{:else}
			<div class="flex flex-col items-center justify-center text-center">
				<p class="text-lg text-[#a1a1a6]">No team members to display</p>
			</div>
		{/if}
	</div>
</BaseSlide>

<style>
	.group:hover img {
		transform: scale(1.05);
	}
</style>
