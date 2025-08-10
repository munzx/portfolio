<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import StatusBarIcons from './StatusBarIcons.svelte';

	// Component props for reusability
	export let imageUrl: string =
		'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2043&q=80';
	export const altText: string = 'iPad Display Content';
	export let orientation: 'portrait' | 'landscape' = 'landscape';
	export let batteryLevel: number = 85; // Battery percentage
	export let isDarkMode: boolean = false; // Dark/Light status bar mode
	export let deviceColor: 'silver' | 'space-gray' | 'gold' | 'rose-gold' = 'silver'; // Device color variant
	export let shadow: string = '#ffffff'; // Shadow color

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

	// Constants for device dimensions (iPad specific) - reduced for better fit
	const DEVICE_DIMENSIONS: Record<'portrait' | 'landscape', DeviceDimensions> = {
		portrait: { svg: { width: 300, height: 400 }, device: { width: 280, height: 380 } },
		landscape: { svg: { width: 400, height: 300 }, device: { width: 380, height: 280 } }
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

	// Color schemes based on device color and mode
	$: deviceColors = {
		silver: {
			frame: ['#e5e7eb', '#d1d5db', '#9ca3af'],
			stroke: '#9ca3af',
			screenBorder: '#9ca3af' // Matches the stroke color
		},
		'space-gray': {
			frame: ['#6b7280', '#4b5563', '#374151'],
			stroke: '#374151',
			screenBorder: '#374151' // Matches the stroke color
		},
		gold: {
			frame: ['#f59e0b', '#d97706', '#b45309'],
			stroke: '#b45309',
			screenBorder: '#92400e' // Darker gold tone
		},
		'rose-gold': {
			frame: ['#f472b6', '#ec4899', '#db2777'],
			stroke: '#db2777',
			screenBorder: '#be185d' // Darker rose gold tone
		}
	};

	$: statusBarColors = {
		light: {
			background: 'rgba(255, 255, 255, 0.95)',
			text: '#000000',
			iconOpacity: 0.8
		},
		dark: {
			background: 'rgba(0, 0, 0, 0.85)',
			text: '#ffffff',
			iconOpacity: 0.9
		}
	};

	$: currentDeviceColor = deviceColors[deviceColor];
	$: currentStatusBarColor = statusBarColors[isDarkMode ? 'dark' : 'light'];

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
		width="100%"
		height="100%"
		viewBox="0 0 {dimensions.svg.width} {dimensions.svg.height}"
		class="relative z-10 max-h-[250px] w-full"
		preserveAspectRatio="xMidYMid meet"
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
			<mask id="ipad-status-bar-mask-{orientation}">
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
				<stop offset="0%" style="stop-color:{currentDeviceColor.frame[0]};stop-opacity:1" />
				<stop offset="50%" style="stop-color:{currentDeviceColor.frame[1]};stop-opacity:1" />
				<stop offset="100%" style="stop-color:{currentDeviceColor.frame[2]};stop-opacity:1" />
			</linearGradient>

			<!-- Home indicator gradient background -->
			<linearGradient id="ipadHomeIndicatorBackground" x1="0%" y1="0%" x2="0%" y2="100%">
				<stop offset="0%" style="stop-color:#000000;stop-opacity:0.01" />
				<stop offset="50%" style="stop-color:#000000;stop-opacity:0.05" />
				<stop offset="100%" style="stop-color:#000000;stop-opacity:0.01" />
			</linearGradient>

			<!-- Home indicator shadow filter -->
			<filter id="ipadHomeIndicatorShadow" x="-50%" y="-50%" width="200%" height="200%">
				<feDropShadow dx="0" dy="8" stdDeviation="1" flood-color="#000000" flood-opacity="0.15" />
			</filter>

			<!-- Device shadow filter -->
			<filter id="ipadDeviceShadow" x="-20%" y="-20%" width="140%" height="140%">
				<feDropShadow dx="1" dy="2" stdDeviation="6" flood-color={shadow} flood-opacity="0.20" />
			</filter>

			<!-- Image clipping path - defines the exact usable screen area -->
			<clipPath id="ipad-image-clip-{orientation}">
				<path
					d="M 17 {14 + statusBarHeight + 5} 
					   L {17 + dimensions.device.width - 34} {14 + statusBarHeight + 5} 
					   L {17 + dimensions.device.width - 34} {14 + dimensions.device.height - 30 - radius.screen} 
					   Q {17 + dimensions.device.width - 34} {14 + dimensions.device.height - 30} {17 +
						dimensions.device.width -
						34 -
						radius.screen} {14 + dimensions.device.height - 30} 
					   L {17 + radius.screen} {14 + dimensions.device.height - 30} 
					   Q 17 {14 + dimensions.device.height - 30} 17 {14 +
						dimensions.device.height -
						30 -
						radius.screen} 
					   Z"
				/>
			</clipPath>
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
				stroke={currentDeviceColor.stroke}
				stroke-width="1"
			/>

			<!-- Screen area inside the bezel -->
			<rect
				x="14"
				y="14"
				width={dimensions.device.width - 28}
				height={dimensions.device.height - 28}
				rx={radius.screen}
				ry={radius.screen}
				fill={currentDeviceColor.screenBorder}
			/>

			<!-- Background image inside the screen area -->
			<image
				href={imageUrl}
				x={17}
				y={14 + statusBarHeight + 5}
				width={dimensions.device.width - 32 - 2}
				preserveAspectRatio="xMidYMin slice"
				clip-path="url(#ipad-image-clip-{orientation})"
			/>

			<!-- Status bar overlay with rounded top, straight bottom -->
			<rect
				x={17}
				y="14"
				width={dimensions.device.width - 32 - 2}
				height={statusBarHeight + 5}
				fill={currentStatusBarColor.background}
				mask="url(#ipad-status-bar-mask-{orientation})"
			/>

			<!-- Status bar content -->
			{@render StatusBarContent(
				isPortrait,
				dimensions,
				currentTime,
				batteryLevel,
				currentStatusBarColor
			)}

			<!-- Home indicator (for newer iPad style) -->
			<!-- Background for better visibility -->
			<rect
				x={dimensions.device.width / 2 - 47}
				y={isPortrait ? dimensions.device.height - 30 : dimensions.device.height - 27}
				width="94"
				height="13"
				rx="6.5"
				fill="url(#ipadHomeIndicatorBackground)"
			/>
			<!-- Main indicator -->
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
	batteryLevel: number,
	statusBarColor: any
)}
	{#if isPortrait}
		<!-- Time -->
		<text
			x="22"
			y="42"
			font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
			font-size="10"
			font-weight="600"
			fill={statusBarColor.text}
		>
			{currentTime}
		</text>

		<!-- Right status icons -->
		<g transform="translate({dimensions.device.width - 98}, 36)">
			<!-- Cellular -->
			<g transform="translate(8, -1)">
				<StatusBarIcons
					type="cellular"
					{isPortrait}
					iconColor={statusBarColor.text}
					opacity={statusBarColor.iconOpacity}
				/>
			</g>

			<!-- WiFi -->
			<g transform="translate(23, 0)">
				<StatusBarIcons
					type="wifi"
					{isPortrait}
					iconColor={statusBarColor.text}
					opacity={statusBarColor.iconOpacity}
				/>
			</g>

			<!-- Bluetooth -->
			<g transform="translate(40, -1)">
				<StatusBarIcons
					type="bluetooth"
					{isPortrait}
					iconColor={statusBarColor.text}
					opacity={statusBarColor.iconOpacity}
				/>
			</g>

			<!-- Battery -->
			<g transform="translate(55, 0)">
				<StatusBarIcons
					type="battery"
					{isPortrait}
					{batteryLevel}
					iconColor={statusBarColor.text}
					opacity={statusBarColor.iconOpacity}
				/>
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
			fill={statusBarColor.text}
		>
			{currentTime}
		</text>

		<g transform="translate({dimensions.device.width - 98}, 36)">
			<g transform="translate(5, -1)">
				<StatusBarIcons
					type="cellular"
					{isPortrait}
					iconColor={statusBarColor.text}
					opacity={statusBarColor.iconOpacity}
				/>
			</g>
			<g transform="translate(22, 0)">
				<StatusBarIcons
					type="wifi"
					{isPortrait}
					iconColor={statusBarColor.text}
					opacity={statusBarColor.iconOpacity}
				/>
			</g>
			<g transform="translate(38, 0)">
				<StatusBarIcons
					type="bluetooth"
					{isPortrait}
					iconColor={statusBarColor.text}
					opacity={statusBarColor.iconOpacity}
				/>
			</g>
			<g transform="translate(54, 0)">
				<StatusBarIcons
					type="battery"
					{isPortrait}
					{batteryLevel}
					iconColor={statusBarColor.text}
					opacity={statusBarColor.iconOpacity}
				/>
			</g>
		</g>
	{/if}
{/snippet}
