<script lang="ts">
	import { onMount } from 'svelte';

	export let backgroundColor = '';
	export let minHeight: number = 800; // A4 landscape minimum
	export let className = '';

	onMount(() => {
		if (window) {
			let screenHeight: number = window?.screen?.height;
			minHeight = Math.max(minHeight, screenHeight);
		}
	});
</script>

<section
	class="reveal relative flex h-full w-screen snap-start flex-col items-center justify-center overflow-x-clip
		   px-3 py-4
		   sm:px-6 sm:py-6
		   md:px-8 md:py-8
		   lg:p-0 {className}"
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
