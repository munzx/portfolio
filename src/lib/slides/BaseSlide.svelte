<script lang="ts">
	import { onMount } from 'svelte';

	export let backgroundColor = '';
	export let minHeight: number = 800; // Reduced from 800px for better fit
	export let className = '';

	onMount(() => {
		if (typeof window !== 'undefined') {
			// Use viewport height instead of screen height for better sizing
			const viewportHeight = window.innerHeight;
			minHeight = Math.max(minHeight, viewportHeight * 0.9); // Use 90% of viewport
		}
	});
</script>

<section
	class="reveal relative flex h-full w-screen snap-start flex-col items-center justify-center overflow-x-clip
		   px-3 py-4
		   sm:px-6 sm:py-6
		   md:px-8 md:py-8
		   lg:m-0 lg:p-0 {className}"
>
	<slot />
</section>

<style>
	/* Print styles for A4 landscape */
	@media print {
		section {
			page-break-after: always;
			min-height: 21cm; /* A4 landscape height */
			width: 29.7cm; /* A4 landscape width */
		}
	}
</style>
