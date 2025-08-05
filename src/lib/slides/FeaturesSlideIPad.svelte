<script lang="ts">
	import BaseSlide from './BaseSlide.svelte';
	import IPadMockup from '$lib/IPadMockup.svelte';

	export let featureItems: Array<{
		title: string;
		description: string;
		image: string;
		active: boolean;
	}>;
	export let currentFeature: { title: string; description: string; image: string; active: boolean };
	export let onFeatureHover: (index: number) => void;
	export let reverse: boolean = false;
</script>

<BaseSlide className="flex h-screen items-center text-[#f5f5f7]">
	<div class="container mx-auto flex h-full max-w-7xl items-center px-8">
		<div class="grid w-full items-center gap-16 lg:grid-cols-2 lg:grid-rows-1">
			<!-- Features List -->
			<div class="flex flex-col justify-center space-y-6" class:lg:order-2={reverse}>
				<h2 class="text-7xl leading-tight font-semibold tracking-tight text-white">
					Designed for<br />Creative Collaboration
				</h2>
				<p class="max-w-xl text-lg leading-relaxed text-[#a1a1a6]">
					AuraFlow brings your entire creative process into one place. It's the tool your team has
					been waiting for.
				</p>

				<div class="space-y-2 pt-6">
					{#each featureItems as item, index}
						<div
							class="group cursor-pointer rounded-xl border border-transparent p-4 transition-all duration-300 hover:border-[rgba(255,255,255,0.15)] hover:bg-[rgba(40,40,40,0.5)]"
							class:border-[rgba(255,255,255,0.15)]={item.active}
							class:bg-[rgba(40,40,40,0.5)]={item.active}
							on:mouseenter={() => onFeatureHover(index)}
							role="button"
							tabindex="0"
							on:keydown={(e) => e.key === 'Enter' && onFeatureHover(index)}
						>
							<h3 class="mb-2 text-lg font-semibold text-[#f5f5f7]" class:text-white={item.active}>
								{item.title}
							</h3>
							<p class="text-sm text-[#a1a1a6]">
								{item.description}
							</p>
						</div>
					{/each}
				</div>
			</div>

			<!-- Interactive iPad Display -->
			<div class="flex h-full items-center justify-center" class:lg:order-1={reverse}>
				<div class="scale-90 transform transition-all duration-700 hover:scale-95">
					<IPadMockup
						orientation="portrait"
						imageUrl={currentFeature.image}
						altText="AuraFlow {currentFeature.title} feature"
					/>
				</div>
			</div>
		</div>
	</div>
</BaseSlide>

<style>
	/* Enhanced focus states for accessibility */
	[role='button']:focus-visible {
		outline: 2px solid #0071e3;
		outline-offset: 2px;
		border-radius: 1rem;
	}
</style>
