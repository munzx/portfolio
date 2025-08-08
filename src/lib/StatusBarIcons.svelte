<script lang="ts">
	// Props for the status bar icons
	export let type: 'cellular' | 'wifi' | 'battery' | 'bluetooth';
	export let isPortrait: boolean = true;
	export let batteryLevel: number = 80; // 0-100
</script>

{#if type === 'cellular'}
	<!-- Cellular signal bars -->
	{#each [1, 2, 3, 4] as barHeight, i}
		<rect
			x={i * 3}
			y={8 - barHeight * 1.5}
			width="1.5"
			height={barHeight * 1.5}
			rx="0.75"
			fill="#000000"
		/>
	{/each}
{:else if type === 'wifi'}
	<!-- WiFi signal -->
	<path
		d="M2 2c2.76-2.76 7.24-2.76 10 0M4 4c1.66-1.66 4.34-1.66 6 0M6 6c0.55-0.55 1.45-1.45 2 0"
		stroke="#000000"
		stroke-width="1.2"
		fill="none"
		stroke-linecap="round"
	/>
{:else if type === 'battery'}
	<!-- Battery outline -->
	<rect
		x="0"
		y="0"
		width={isPortrait ? '16' : '20'}
		height={isPortrait ? '8' : '10'}
		rx={isPortrait ? '1.5' : '2'}
		stroke="#000000"
		stroke-width="0.8"
		fill="none"
	/>
	<!-- Battery fill based on level -->
	<rect
		x={isPortrait ? '1.2' : '1.5'}
		y={isPortrait ? '1.2' : '1.5'}
		width={isPortrait ? batteryLevel * 0.1 : batteryLevel * 0.14}
		height={isPortrait ? '5.6' : '7'}
		rx={isPortrait ? '0.8' : '1'}
		fill={batteryLevel > 20 ? '#34d399' : '#ef4444'}
	/>
	<!-- Battery tip -->
	<rect
		x={isPortrait ? '16.5' : '20.5'}
		y={isPortrait ? '2' : '2.5'}
		width="1.2"
		height={isPortrait ? '4' : '5'}
		rx={isPortrait ? '0.6' : '0.75'}
		fill="#000000"
	/>
{:else if type === 'bluetooth'}
	<!-- Bluetooth icon -->
	<path
		d="M6 2h1l4 4-3 3 3 3-4 4h-1v-6l-2 2-1-1 3-3-3-3 1-1 2 2V2zm1 2v4l2-2-2-2zm0 8v4l2-2-2-2z"
		fill="#000000"
		transform="scale(0.6)"
	/>
{/if}
