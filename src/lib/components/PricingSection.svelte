<script lang="ts">
	import { selectPricingTier, type PricingTier } from '$lib/stores/pricing';
	import BaseSlide from '$lib/slides/BaseSlide.svelte';

	export let pricingTiers: PricingTier[] = [];
	export let title = 'Investment & Pricing';
	export let subtitle = 'Transparent pricing ranges to help you plan your project budget';
	export let className = 'bg-gradient-to-br from-emerald-900 via-black to-blue-900';
</script>

<BaseSlide {className}>
	<div class="flex h-full w-full max-w-6xl items-center px-8">
		<div class="w-full space-y-12">
			<!-- Header -->
			<div class="text-center">
				<h2 class="mb-6 text-4xl font-bold text-white lg:text-5xl">{title}</h2>
				<p class="mx-auto max-w-3xl text-lg text-gray-300">
					{subtitle}
				</p>
			</div>

			<!-- Pricing Tiers -->
			<div class="grid gap-6 md:grid-cols-3">
				{#each pricingTiers as tier, index}
					<div
						class="relative rounded-xl border transition-all duration-300 hover:scale-105 {tier.popular
							? 'border-emerald-500 bg-emerald-500/10'
							: 'border-white/10 bg-white/5'}"
					>
						{#if tier.popular}
							<div class="absolute -top-3 left-1/2 -translate-x-1/2 transform">
								<div class="rounded-full bg-emerald-500 px-4 py-1 text-xs font-bold text-white">
									MOST POPULAR
								</div>
							</div>
						{/if}

						<div class="p-6">
							<!-- Tier Name & Price -->
							<h3 class="mb-2 text-xl font-bold text-white">{tier.name}</h3>
							<div
								class="mb-2 text-2xl font-bold {tier.popular
									? 'text-emerald-400'
									: 'text-blue-400'}"
							>
								{tier.range}
							</div>
							<div class="mb-4 text-sm text-gray-400">{tier.timeline}</div>

							<!-- Ideal For -->
							<div class="mb-6 rounded-lg border border-gray-600/20 bg-gray-600/10 p-3">
								<div class="text-xs font-medium text-gray-400">IDEAL FOR:</div>
								<div class="text-sm text-gray-200">{tier.ideal}</div>
							</div>

							<!-- Includes -->
							<div class="space-y-2">
								<div class="text-sm font-medium text-gray-300">Includes:</div>
								<ul class="space-y-1">
									{#each tier.includes as feature}
										<li class="flex items-start text-sm text-gray-300">
											<svg
												class="mt-0.5 mr-2 h-3 w-3 flex-shrink-0 text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fill-rule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clip-rule="evenodd"
												/>
											</svg>
											{feature}
										</li>
									{/each}
								</ul>
							</div>

							<!-- CTA Button -->
							<button
								on:click={() => selectPricingTier(tier)}
								class="mt-6 w-full rounded-lg py-3 text-sm font-medium transition-all duration-300 {tier.popular
									? 'bg-emerald-500 text-white hover:bg-emerald-600'
									: 'border border-white/20 text-white hover:bg-white/10'}"
							>
								Select This Option
							</button>
						</div>
					</div>
				{/each}
			</div>

			<!-- Custom Projects -->
			<!-- <div class="text-center">
				<div class="mx-auto max-w-2xl rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-6">
					<h3 class="mb-3 text-xl font-bold text-yellow-400">Custom Projects</h3>
					<p class="text-gray-300">
						Have a unique project that doesn't fit these categories? Let's discuss your specific
						needs and create a custom proposal.
					</p>
				</div>
			</div> -->
		</div>
	</div>
</BaseSlide>
