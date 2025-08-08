<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import StatusBarIcons from './StatusBarIcons.svelte';

	// Component props for reusability
	export let imageUrl: string =
		'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2043&q=80';
	export const altText: string = 'iPad Display Content';
	export let orientation: 'portrait' | 'landscape' = 'landscape';
	export let batteryLevel: number = 85; // Battery percentage

	// Types
	type DeviceDimensions = {
		svg: { width: number; height: number };
		device: { width: number; height: number };
	};

	type BorderRadius = {
		frame: number;
		screen: number;
		statusBar: number;
	};

	// Constants for device dimensions (iPad specific)
	const DEVICE_DIMENSIONS: Record<'portrait' | 'landscape', DeviceDimensions> = {
		portrait: { svg: { width: 400, height: 550 }, device: { width: 380, height: 530 } },
		landscape: { svg: { width: 550, height: 400 }, device: { width: 530, height: 380 } }
	} as const;

	const BORDER_RADIUS: Record<'portrait' | 'landscape', BorderRadius> = {
		portrait: { frame: 30, screen: 25, statusBar: 22 },
		landscape: { frame: 30, screen: 25, statusBar: 22 }
	} as const;

	// Time functionality
	let currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	let timeInterval: number;

	// Computed dimensions (memoized)
	$: dimensions = DEVICE_DIMENSIONS[orientation];
	$: radius = BORDER_RADIUS[orientation];
	$: isPortrait = orientation === 'portrait';
	$: statusBarHeight = 40; // iPad has consistent status bar height

	// Helper functions
	const updateTime = () => {
		currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	};

	onMount(() => {
		timeInterval = setInterval(updateTime, 60000);
	});

	onDestroy(() => {
		if (timeInterval) clearInterval(timeInterval);
	});
</script>

<div class="relative z-50 flex w-full justify-center">
	<svg
		width={dimensions.svg.width}
		height={dimensions.svg.height}
		viewBox="0 0 {dimensions.svg.width} {dimensions.svg.height}"
		class="relative z-10"
	>
		<defs>
			<!-- Screen cutout mask for bezel -->
			<mask id="ipad-bezel-mask">
				<rect x="0" y="0" width="100%" height="100%" fill="white" />
				<rect
					x="14"
					y="14"
					width={dimensions.device.width - 28}
					height={dimensions.device.height - 28}
					rx={radius.screen}
					ry={radius.screen}
					fill="black"
				/>
			</mask>

			<!-- Status bar mask - rounded top, straight bottom -->
			<mask id="ipad-status-bar-mask">
				<rect x="0" y="0" width="100%" height="100%" fill="black" />
				<!-- Main rounded rectangle -->
				<rect
					x={17}
					y="16"
					width={dimensions.device.width - 32 - 2}
					height={statusBarHeight + 4}
					rx={radius.screen}
					ry={radius.screen}
					fill="white"
				/>
				<!-- Overlay rectangle to make bottom straight -->
				<rect
					x={17}
					y={14 + radius.screen}
					width={dimensions.device.width - 32 - 2}
					height={statusBarHeight + 5 - radius.screen}
					fill="white"
				/>
			</mask>

			<!-- iPad frame gradient (same as iPhone) -->
			<linearGradient id="ipadFrameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
				<stop offset="0%" style="stop-color:#2a2a2a;stop-opacity:1" />
				<stop offset="100%" style="stop-color:#1a1a1a;stop-opacity:1" />
			</linearGradient>

			<!-- Home indicator shadow filter -->
			<filter id="ipadHomeIndicatorShadow" x="-50%" y="-50%" width="200%" height="200%">
				<feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#000000" flood-opacity="0.15" />
			</filter>

			<!-- Device shadow filter -->
			<filter id="ipadDeviceShadow" x="-20%" y="-20%" width="140%" height="140%">
				<feDropShadow dx="1" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.15" />
			</filter>
		</defs>

		<!-- Main device group -->
		<g
			transform="translate({(dimensions.svg.width - dimensions.device.width) / 2}, {(dimensions.svg
				.height -
				dimensions.device.height) /
				2})"
			filter="url(#ipadDeviceShadow)"
		>
			<!-- Outer frame -->
			<rect
				x="0"
				y="0"
				width={dimensions.device.width}
				height={dimensions.device.height}
				rx={radius.frame}
				ry={radius.frame}
				fill="url(#ipadFrameGradient)"
				stroke="#0a0a0a"
				stroke-width="1"
			/>

			<!-- Screen bezel with cutout -->
			<rect
				x="12"
				y="12"
				width={dimensions.device.width - 24}
				height={dimensions.device.height - 24}
				rx={radius.screen}
				ry={radius.screen}
				fill="#000000"
			/>

			<!-- Screen area inside the bezel -->
			<rect
				x="14"
				y="14"
				width={dimensions.device.width - 28}
				height={dimensions.device.height - 28}
				rx={radius.screen}
				ry={radius.screen}
				fill="#000000"
			/>

			<!-- Background image inside the screen area -->
			<image
				href={imageUrl}
				x={17}
				y={14 + statusBarHeight + 5}
				width={dimensions.device.width - 32 - 2}
				height={isPortrait
					? dimensions.device.height - 31 - statusBarHeight - 4
					: dimensions.device.height - 31 - statusBarHeight - 4}
				preserveAspectRatio={isPortrait ? 'none' : 'xMidYMin slice'}
				clip-path="inset(0 0 0 0 round 0 0 {radius.screen}px {radius.screen}px)"
			/>

			<!-- Status bar overlay with rounded top, straight bottom -->
			<rect
				x={17}
				y="14"
				width={dimensions.device.width - 32 - 2}
				height={statusBarHeight + 5}
				fill="rgba(255, 255, 255, 0.95)"
				mask="url(#ipad-status-bar-mask)"
			/>

			<!-- Status bar content -->
			{@render StatusBarContent(isPortrait, dimensions, currentTime, batteryLevel)}

			<!-- Home indicator (for newer iPad style) -->
			<rect
				x={dimensions.device.width / 2 - 40}
				y={isPortrait ? dimensions.device.height - 25 : dimensions.device.height - 22}
				width="80"
				height="3"
				rx="1.5"
				fill="#ffffff"
				opacity="0.7"
				filter="url(#ipadHomeIndicatorShadow)"
			/>
		</g>
	</svg>
</div>

<!-- Status Bar Component -->
{#snippet StatusBarContent(
	isPortrait: boolean,
	dimensions: DeviceDimensions,
	currentTime: string,
	batteryLevel: number
)}
	{#if isPortrait}
		<!-- Time -->
		<text
			x="22"
			y="42"
			font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
			font-size="10"
			font-weight="600"
			fill="#000000"
		>
			{currentTime}
		</text>

		<!-- Right status icons -->
		<g transform="translate({dimensions.device.width - 98}, 36)">
			<!-- Cellular -->
			<g transform="translate(8, -1)">
				<StatusBarIcons type="cellular" {isPortrait} />
			</g>

			<!-- WiFi -->
			<g transform="translate(23, 0)">
				<StatusBarIcons type="wifi" {isPortrait} />
			</g>

			<!-- Bluetooth -->
			<g transform="translate(40, -1)">
				<StatusBarIcons type="bluetooth" {isPortrait} />
			</g>

			<!-- Battery -->
			<g transform="translate(55, 0)">
				<StatusBarIcons type="battery" {isPortrait} {batteryLevel} />
			</g>
		</g>
	{:else}
		<!-- Landscape status bar -->
		<text
			x="22"
			y="42"
			font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
			font-size="10"
			font-weight="600"
			fill="#000000"
		>
			{currentTime}
		</text>

		<g transform="translate({dimensions.device.width - 98}, 36)">
			<g transform="translate(5, -1)">
				<StatusBarIcons type="cellular" {isPortrait} />
			</g>
			<g transform="translate(22, 0)">
				<StatusBarIcons type="wifi" {isPortrait} />
			</g>
			<g transform="translate(38, 0)">
				<StatusBarIcons type="bluetooth" {isPortrait} />
			</g>
			<g transform="translate(54, 0)">
				<StatusBarIcons type="battery" {isPortrait} {batteryLevel} />
			</g>
		</g>
	{/if}
{/snippet}
