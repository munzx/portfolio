<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import StatusBarIcons from './StatusBarIcons.svelte';

	// Component props for reusability
	export let imageUrl: string =
		'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2043&q=80';
	export const altText: string = 'iPhone Display Content';
	export let orientation: 'portrait' | 'landscape' = 'portrait';
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

	type ButtonConfig = {
		x: number;
		y: number;
		width: number;
		height: number;
	};

	// Constants for device dimensions
	const DEVICE_DIMENSIONS: Record<'portrait' | 'landscape', DeviceDimensions> = {
		portrait: { svg: { width: 300, height: 650 }, device: { width: 280, height: 610 } },
		landscape: { svg: { width: 650, height: 300 }, device: { width: 630, height: 280 } }
	} as const;

	const BORDER_RADIUS: Record<'portrait' | 'landscape', BorderRadius> = {
		portrait: { frame: 50, screen: 42, statusBar: 40 },
		landscape: { frame: 30, screen: 22, statusBar: 20 }
	} as const;

	// Time functionality
	let currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	let timeInterval: number;

	// Computed dimensions (memoized)
	$: dimensions = DEVICE_DIMENSIONS[orientation];
	$: radius = BORDER_RADIUS[orientation];
	$: isPortrait = orientation === 'portrait';
	$: statusBarHeight = isPortrait ? 50 : 38;
	$: dynamicIslandSize = isPortrait ? { width: 74, height: 10 } : { width: 10, height: 74 };

	// Helper functions
	const updateTime = () => {
		currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	};

	const getSideButtons = (): ButtonConfig[] => {
		if (isPortrait) {
			return [
				{ x: -2, y: 110, width: 4, height: 30 }, // Volume up
				{ x: -2, y: 145, width: 4, height: 30 }, // Volume down
				{ x: -2, y: 185, width: 4, height: 20 }, // Action button
				{ x: dimensions.device.width - 2, y: 130, width: 4, height: 50 } // Power button
			];
		} else {
			return [
				{ x: 110, y: -2, width: 30, height: 4 }, // Volume
				{ x: 145, y: -2, width: 30, height: 4 }, // Volume
				{ x: 185, y: -2, width: 20, height: 4 } // Action
			];
		}
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
			<mask id="iphone-bezel-mask">
				<rect x="0" y="0" width="100%" height="100%" fill="white" />
				<rect
					x="10"
					y="10"
					width={dimensions.device.width - 20}
					height={dimensions.device.height - 20}
					rx={radius.screen}
					ry={radius.screen}
					fill="black"
				/>
			</mask>

			<!-- Status bar mask - rounded top, straight bottom -->
			<mask id="iphone-status-bar-mask">
				<rect x="0" y="0" width="100%" height="100%" fill="black" />
				<!-- Main rounded rectangle -->
				<rect
					x="13"
					y="12"
					width={dimensions.device.width - 26}
					height={statusBarHeight + 30}
					rx={radius.screen}
					ry={radius.screen}
					fill="white"
				/>
				<!-- Overlay rectangle to make bottom straight -->
				<rect
					x="13"
					y={10 + radius.screen}
					width={dimensions.device.width - 26}
					height={statusBarHeight + 15 - radius.screen}
					fill="white"
				/>
			</mask>

			<!-- Frame gradient -->
			<linearGradient id="iphoneFrameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
				<stop offset="0%" style="stop-color:#2a2a2a;stop-opacity:1" />
				<stop offset="100%" style="stop-color:#1a1a1a;stop-opacity:1" />
			</linearGradient>

			<!-- Home indicator shadow filter -->
			<filter id="iphoneHomeIndicatorShadow" x="-50%" y="-50%" width="200%" height="200%">
				<feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#000000" flood-opacity="0.15" />
			</filter>

			<!-- Device shadow filter -->
			<filter id="iphoneDeviceShadow" x="-20%" y="-20%" width="140%" height="140%">
				<feDropShadow dx="1" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.15" />
			</filter>
		</defs>
		<!-- Main device group -->
		<g
			transform="translate({(dimensions.svg.width - dimensions.device.width) / 2}, {(dimensions.svg
				.height -
				dimensions.device.height) /
				2})"
			filter="url(#iphoneDeviceShadow)"
		>
			<!-- Outer frame -->
			<rect
				x="0"
				y="0"
				width={dimensions.device.width}
				height={dimensions.device.height}
				rx={radius.frame}
				ry={radius.frame}
				fill="url(#iphoneFrameGradient)"
				stroke="#0a0a0a"
				stroke-width="1"
			/>

			<!-- Side Buttons Component -->
			{#each getSideButtons() as button}
				<rect
					x={button.x}
					y={button.y}
					width={button.width}
					height={button.height}
					rx="2"
					fill="#1a1a1a"
				/>
			{/each}

			<!-- Screen bezel with cutout -->
			<rect
				x="8"
				y="8"
				width={dimensions.device.width - 16}
				height={dimensions.device.height - 16}
				rx={radius.screen}
				ry={radius.screen}
				fill="#000000"
			/>

			<!-- Screen area inside the bezel -->
			<rect
				x="10"
				y="10"
				width={dimensions.device.width - 20}
				height={dimensions.device.height - 20}
				rx={radius.screen}
				ry={radius.screen}
				fill="#000000"
			/>

			<!-- Background image inside the screen area -->
			<image
				href={imageUrl}
				x="13"
				y={10 + statusBarHeight + 5}
				width={dimensions.device.width - 26}
				height={isPortrait
					? dimensions.device.height - 23 - statusBarHeight - 5
					: dimensions.device.height - 23 - statusBarHeight - 5}
				preserveAspectRatio="xMidYMin slice"
				clip-path="inset(0 0 0 0 round 0 0 {radius.screen}px {radius.screen}px)"
			/>

			<!-- Status bar overlay with rounded top, straight bottom -->
			<rect
				x="13"
				y="10"
				width={dimensions.device.width - 26}
				height={statusBarHeight + 5}
				fill="rgba(255, 255, 255, 0.95)"
				mask="url(#iphone-status-bar-mask)"
			/>

			<!-- Dynamic Island -->
			{#if isPortrait}
				<rect
					x={dimensions.device.width / 2 - 37}
					y="25"
					width={dynamicIslandSize.width}
					height={dynamicIslandSize.height}
					rx="5"
					fill="#000000"
				/>
			{:else}
				<rect
					x="25"
					y={dimensions.device.height / 2 - 37}
					width={dynamicIslandSize.width}
					height={dynamicIslandSize.height}
					rx="5"
					fill="#000000"
				/>
			{/if}

			<!-- Status bar content -->
			{@render StatusBarContent(isPortrait, dimensions, currentTime, batteryLevel)}

			<!-- Home indicator -->
			<rect
				x={dimensions.device.width / 2 - 35}
				y={isPortrait ? dimensions.device.height - 25 : dimensions.device.height - 20}
				width="70"
				height="3"
				rx="1.5"
				fill="#ffffff"
				opacity="0.8"
				filter="url(#iphoneHomeIndicatorShadow)"
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
			x="23"
			y="40"
			font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
			font-size="10"
			font-weight="600"
			fill="#000000"
		>
			{currentTime}
		</text>

		<!-- Right status icons -->
		<g transform="translate({dimensions.device.width - 80}, 30)">
			<!-- Cellular -->
			<g transform="translate(0, 2)">
				<StatusBarIcons type="cellular" {isPortrait} />
			</g>

			<!-- WiFi -->
			<g transform="translate(17, 3)">
				<StatusBarIcons type="wifi" {isPortrait} />
			</g>

			<!-- Battery -->
			<g transform="translate(38, 3)">
				<StatusBarIcons type="battery" {isPortrait} {batteryLevel} />
			</g>
		</g>
	{:else}
		<!-- Landscape status bar -->
		<text
			x="23"
			y="36"
			font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
			font-size="12"
			font-weight="600"
			fill="#000000"
		>
			{currentTime}
		</text>

		<g transform="translate({dimensions.device.width - 98}, 26)">
			<g transform="translate(12, 3)">
				<StatusBarIcons type="cellular" {isPortrait} />
			</g>
			<g transform="translate(28, 3)">
				<StatusBarIcons type="wifi" {isPortrait} />
			</g>
			<g transform="translate(48, 3)">
				<StatusBarIcons type="battery" {isPortrait} {batteryLevel} />
			</g>
		</g>
	{/if}
{/snippet}
