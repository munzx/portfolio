<script lang="ts">
	export let backgroundColor = '#161617';
	export let minHeight = '800px'; // A4 landscape minimum
	export let className = '';
</script>

<section
	class="reveal relative flex min-h-auto w-screen snap-start flex-col justify-center
		   px-3 py-4
		   sm:px-6 sm:py-6
		   md:px-8 md:py-8
		   lg:min-h-screen lg:p-0 {className}"
	style="background-color: {backgroundColor}; min-height: {minHeight};"
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
