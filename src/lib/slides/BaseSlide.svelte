<script lang="ts">
	export let backgroundColor = '#161617';
	export let minHeight = '800px'; // A4 landscape minimum
	export let className = '';
</script>

<section
	class="reveal snap-start {className}"
	style="background-color: {backgroundColor}; min-height: {minHeight};"
>
	<slot />
</section>

<style>
	section {
		scroll-snap-align: start;
		width: 100vw;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
	}

	/* Responsive adjustments */
	@media (max-width: 1024px) {
		section {
			padding: 2rem 1rem;
		}
	}

	@media (max-width: 768px) {
		section {
			padding: 1.5rem 1rem;
		}
	}

	/* Ensure proper snap scrolling on all devices */
	@media (max-height: 800px) {
		section {
			min-height: 100vh;
		}
	}

	/* Print styles for A4 landscape */
	@media print {
		section {
			page-break-after: always;
			min-height: 21cm; /* A4 landscape height */
			width: 29.7cm; /* A4 landscape width */
		}
	}
</style>
