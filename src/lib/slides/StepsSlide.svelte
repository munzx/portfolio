<script lang="ts">
	import type { StepItem } from '../types/steps';
	import BaseSlide from '../slides/BaseSlide.svelte';

	// Props
	export let steps: StepItem[] = [];
	export let title = '';
	export let subtitle = '';
	export let showFeedbackLoop = false;
	export let feedbackText = 'Feedback & Data';
	export let className = '';
	export let stepBackgroundClass = '';

	// Validate steps count (2-5 steps)
	$: if (steps.length < 2 || steps.length > 5) {
		console.warn('Steps component supports 2-5 steps only');
	}

	// Default icons for common use cases (all scaled to 512x512 viewBox)
	const defaultIcons = {
		idea: 'M409.8,220.9C403.3,149.6,341.4,79.2,254,79.2c-86.4,0-156.6,70.3-156.6,156.6c0,61.7,36.8,118,92.6,143v16h-0.2c-7.8,0-14.1,6.3-14.1,14.1S182,423,189.8,423h0.2v16.5h-0.2c-7.8,0-14.1,6.3-14.1,14.1s6.3,14.1,14.1,14.1h4.8C204,491.3,227,508,253.9,508s49.9-16.7,59.3-40.3h4.9c7.8,0,14.1-6.3,14.1-14.1c0-7.8-6.3-14.1-14.1-14.1h-0.3V423h0.3c7.8,0,14.1-6.3,14.1-14.1c0-7.8-6.3-14.1-14.1-14.1h-0.3v-16C378.6,351.6,416.1,288.1,409.8,220.9z',
		users:
			'M144 224c70.7 0 128-57.3 128-128S214.7-32 144-32 16 25.3 16 96s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C27.8 256 0 283.8 0 320v96c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32v-96c0-36.2-27.8-64-64-64zM368 224c70.7 0 128-57.3 128-128S438.7-32 368-32s-128 57.3-128 128 57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7c-36.6 0-66.4 27.8-66.4 64v96c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32v-96c0-36.2-27.8-64-64-64z',
		build:
			'M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480s-65.886-12.035-90.636-33.208l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255L149.6 396.145C140.882 377.584 136 356.864 136 335v-16H88.666c-17.436 0-32.174-13.67-32.653-31.1-.466-17.19 13.28-31.9 30.653-31.9H136v-85.13c0-75.019 60.981-136 136-136h8c75.019 0 136 60.981 136 136V256h49.334c17.373 0 31.119 14.71 30.654 31.9zM256 224c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z',
		iterate:
			'M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 40.271 187.906 0 268.606 0 379.704 0 467.985 88.901 467.985 200S379.704 400 268.606 400c-39.993 0-79.68-11.807-113.172-33.13-6.016-3.831-7.8-11.776-3.979-17.8l17.44-27.47c3.779-5.946 11.641-7.75 17.612-4.019C208.176 334.654 237.981 344 268.606 344c81.405 0 147.494-66.448 147.494-148S350.011 48 268.606 48c-65.93 0-123.718 43.404-143.221 105.307l43.714.006c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z',
		check:
			'M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'
	};

	// Helper function to get icon path
	function getIconPath(step: StepItem): string {
		if (step.icon && defaultIcons[step.icon as keyof typeof defaultIcons]) {
			return defaultIcons[step.icon as keyof typeof defaultIcons];
		}
		if (step.icon) {
			return step.icon;
		}

		// Return empty string if no icon
		return '';
	} // Helper function to format description
	function formatDescription(description: string | string[]): string[] {
		return Array.isArray(description) ? description : [description];
	}
</script>

<BaseSlide {className}>
	<div class="relative mx-auto w-full max-w-7xl">
		<!-- Header -->
		{#if title || subtitle}
			<div class="mb-10 text-center">
				{#if title}
					<h2 class="mb-4 text-4xl font-bold text-white lg:text-5xl">{title}</h2>
				{/if}
				{#if subtitle}
					<p class="mx-auto max-w-3xl text-lg text-gray-300">{subtitle}</p>
				{/if}
			</div>
		{/if}

		<!-- Steps Container -->
		<div
			class="relative flex flex-col items-stretch justify-between space-y-16 lg:flex-row lg:space-y-0 lg:space-x-4"
		>
			{#each steps as step, index}
				<!-- Step Item -->
				<div class="flex flex-1 flex-col items-center text-center">
					<div
						class="flex h-full w-full flex-col items-center rounded-xl border-2 border-dashed border-white p-6 {stepBackgroundClass}"
					>
						<!-- Icon (only show if provided) -->
						{#if step.icon && getIconPath(step)}
							<svg class="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 512 512">
								<path d={getIconPath(step)} />
							</svg>
						{/if}

						<!-- Step Number and Title -->
						<h3 class="mt-4 text-2xl font-bold text-white">
							{index + 1}. {step.title}
						</h3>

						<!-- Subtitle -->
						{#if step.subtitle}
							<div class="mt-2 text-xl text-gray-200">
								{step.subtitle}
							</div>
						{/if}

						<!-- Description -->
						<div class="mt-2 space-y-1 text-lg text-gray-200">
							{#each formatDescription(step.description) as line}
								<p>{line}</p>
							{/each}
						</div>
					</div>
				</div>

				<!-- Connector Arrow (not shown after last step) -->
				{#if index < steps.length - 1}
					<!-- Desktop Connector -->
					<div class="hidden items-center text-white lg:flex">
						<svg class="h-8 w-16" fill="none" stroke="currentColor" viewBox="0 0 64 32">
							<path d="M0 16h60l-12-8m12 8l-12 8" stroke-width="2" />
						</svg>
					</div>

					<!-- Mobile Connector -->
					<div class="flex rotate-90 transform justify-center text-white lg:hidden">
						<svg class="h-8 w-16" fill="none" stroke="currentColor" viewBox="0 0 64 32">
							<path d="M0 16h60l-12-8m12 8l-12 8" stroke-width="2" />
						</svg>
					</div>
				{/if}
			{/each}
		</div>

		<!-- Feedback Loop (optional) -->
		{#if showFeedbackLoop && steps.length >= 3}
			<!-- Desktop Feedback Loop -->
			<div class="absolute right-0 -bottom-28 left-0 hidden h-24 text-yellow-400 lg:block">
				<svg width="100%" height="100%" viewBox="0 0 1200 100" preserveAspectRatio="none">
					<path
						d="M 1150 20 C 1300 100, 900 100, 600 100 C 300 100, -100 100, 50 20"
						stroke="currentColor"
						stroke-width="3"
						stroke-dasharray="10 5"
						fill="none"
						stroke-linecap="round"
					/>
					<path
						d="M50 20 L30 10 M50 20 L40 35"
						stroke="currentColor"
						stroke-width="3"
						fill="none"
						stroke-linecap="round"
					/>
				</svg>
				<p class="absolute bottom-0 left-1/2 -translate-x-1/2 text-xl">{feedbackText}</p>
			</div>

			<!-- Mobile Feedback Loop -->
			<div class="absolute top-0 bottom-0 -left-16 flex w-16 items-center justify-center md:hidden">
				<div class="relative h-full w-full">
					<svg
						width="100%"
						height="100%"
						viewBox="0 0 50 800"
						preserveAspectRatio="none"
						class="text-yellow-400"
					>
						<path
							d="M 25 780 C -50 600, -50 200, 25 20"
							stroke="currentColor"
							stroke-width="3"
							stroke-dasharray="10 5"
							fill="none"
							stroke-linecap="round"
						/>
						<path
							d="M25 20 L15 10 M25 20 L35 10"
							stroke="currentColor"
							stroke-width="3"
							fill="none"
							stroke-linecap="round"
						/>
					</svg>
					<p
						class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 transform text-xl whitespace-nowrap text-yellow-400"
					>
						{feedbackText}
					</p>
				</div>
			</div>
		{/if}
	</div>
</BaseSlide>
