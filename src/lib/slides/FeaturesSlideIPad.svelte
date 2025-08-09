<script lang="ts">
	import BaseSlide from './BaseSlide.svelte';
	import IPadMockup from '$lib/IPadMockup.svelte';

	// Types for better type safety
	interface FeatureItem {
		title: string;
		description: string;
		image: string;
		active: boolean;
	}

	// Props with clear defaults
	interface Props {
		featureItems: FeatureItem[];
		currentFeature: FeatureItem;
		onFeatureHover: (index: number) => void;
		reverse?: boolean;
		title?: string;
		description?: string;
		accentColor?: string;
	}

	let {
		featureItems,
		currentFeature,
		onFeatureHover,
		reverse = false,
		title = 'Designed for<br />Creative Collaboration',
		description = "AuraFlow brings your entire creative process into one place. It's the tool your team has been waiting for.",
		accentColor = '#fff'
	}: Props = $props();

	// Event handlers
	const handleFeatureClick = (index: number) => {
		onFeatureHover(index);
	};

	const handleKeydown = (event: KeyboardEvent, index: number) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			onFeatureHover(index);
		}
	};
</script>

<BaseSlide className="bg-black text-gray-50">
	<div class="relative container mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Floating geometric shapes -->
		<div class="pointer-events-none absolute inset-0 overflow-hidden">
			<div
				class="animate-pulse-slow absolute top-1/4 left-1/4 h-32 w-32 rounded-full opacity-50 blur-xl"
				style="background-color: {accentColor}"
			></div>
			<div
				class="animate-pulse-slow absolute right-1/4 bottom-1/3 h-24 w-24 rounded-full opacity-50 blur-lg"
				style="background-color: {accentColor}; animation-delay: 2s;"
			></div>
		</div>
		<div class="flex h-full min-h-screen items-center justify-center">
			<div
				class="grid w-full grid-cols-1 items-center gap-8 md:gap-12
				       lg:grid-cols-2 lg:gap-16
				       {reverse ? 'lg:grid-flow-col-dense' : ''}"
			>
				<!-- Features List -->
				<div
					class="flex flex-col justify-center space-y-6
					       {reverse ? 'lg:col-start-2' : 'lg:col-start-1'}
					       order-2 lg:order-none"
				>
					<!-- Header Section -->
					<header class="space-y-4">
						<h2
							class="text-4xl leading-tight font-semibold tracking-tight
							       text-white sm:text-5xl md:text-6xl lg:text-7xl"
						>
							{@html title}
						</h2>
						<p
							class="max-w-xl text-base leading-relaxed text-gray-400
							       sm:text-lg"
						>
							{description}
						</p>
					</header>

					<!-- Features List -->
					<nav class="space-y-2 pt-4 lg:pt-6" aria-label="Feature selection">
						{#each featureItems as item, index}
							<button
								type="button"
								class="group w-full cursor-pointer rounded-xl border
								       border-transparent p-3 text-left transition-all
								       duration-300 ease-in-out hover:border-white/15
								       hover:bg-gray-800/50 focus:border-white/25
								       focus:bg-gray-800/50 focus:ring-2
								       focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none sm:p-4
								       {item.active ? 'border-white/15 bg-gray-800/50' : ''}"
								onclick={() => handleFeatureClick(index)}
								onkeydown={(e) => handleKeydown(e, index)}
								aria-pressed={item.active}
								aria-describedby="feature-{index}-description"
							>
								<h3
									class="mb-2 text-base font-semibold transition-colors
									       duration-200 sm:text-lg
									       {item.active ? 'text-white' : 'text-gray-200 group-hover:text-white'}"
								>
									{item.title}
								</h3>
								<p id="feature-{index}-description" class="text-sm leading-relaxed text-gray-400">
									{item.description}
								</p>
							</button>
						{/each}
					</nav>
				</div>

				<!-- Interactive iPad Display -->
				<div
					class="flex items-center justify-center
					       {reverse ? 'lg:col-start-1' : 'lg:col-start-2'}
					       order-1 py-8
					       lg:order-none lg:py-0"
				>
					<div
						class="scale-75 transform transition-transform duration-700
						       ease-out hover:scale-90 sm:scale-85 md:scale-95
						       lg:scale-100 lg:hover:scale-95"
						role="img"
						aria-label="iPad displaying {currentFeature.title} feature"
					>
						<IPadMockup
							orientation="portrait"
							imageUrl={currentFeature.image}
							altText="AuraFlow {currentFeature.title} feature demonstration"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</BaseSlide>

<style>
	/* Enhanced focus states for better accessibility */
	button:focus-visible {
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
		.container {
			break-inside: avoid;
		}
	}
</style>
