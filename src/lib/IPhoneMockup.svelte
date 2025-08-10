<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import StatusBarIcons from './StatusBarIcons.svelte';

	// Component props for reusability
	export let imageUrl: string =
		'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2043&q=80';
	export const altText: string = 'iPhone Display Content';
	export let orientation: 'portrait' | 'landscape' = 'portrait';
	export let batteryLevel: number = 85; // Battery percentage
	export let isDarkMode: boolean = false; // Dark/Light status bar mode
	export let deviceColor: 'silver' | 'space-gray' | 'gold' | 'deep-purple' = 'space-gray'; // Device color variant
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

	type ButtonConfig = {
		x: number;
		y: number;
		width: number;
		height: number;
	};

	// Constants for device dimensions - reduced for better fit
	const DEVICE_DIMENSIONS: Record<'portrait' | 'landscape', DeviceDimensions> = {
		portrait: { svg: { width: 200, height: 420 }, device: { width: 200, height: 400 } },
		landscape: { svg: { width: 420, height: 200 }, device: { width: 400, height: 200 } }
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
	$: statusBarHeight = isPortrait ? 28 : 38;
	$: dynamicIslandSize = isPortrait ? { width: 40, height: 10 } : { width: 10, height: 40 };

	// Color schemes based on device color and mode
	$: deviceColors = {
		silver: {
			frame: ['#e5e7eb', '#d1d5db', '#9ca3af'],
			stroke: '#9ca3af',
			buttons: '#6b7280',
			screenBorder: '#6b7280' // Matches the button color, darker than frame
		},
		'space-gray': {
			frame: ['#6b7280', '#4b5563', '#374151'],
			stroke: '#374151',
			buttons: '#1f2937',
			screenBorder: '#1f2937' // Matches the button color
		},
		gold: {
			frame: ['#f59e0b', '#d97706', '#b45309'],
			stroke: '#b45309',
			buttons: '#92400e',
			screenBorder: '#78350f' // Darker gold tone
		},
		'deep-purple': {
			frame: ['#8b5cf6', '#7c3aed', '#6d28d9'],
			stroke: '#6d28d9',
			buttons: '#581c87',
			screenBorder: '#4c1d95' // Darker purple tone
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

	const getSideButtons = (): ButtonConfig[] => {
		if (isPortrait) {
			return [
				{ x: -2, y: 70, width: 4, height: 20 }, // Volume up (adjusted for smaller size)
				{ x: -2, y: 95, width: 4, height: 20 }, // Volume down (adjusted for smaller size)
				{ x: -2, y: 120, width: 4, height: 15 }, // Action button (adjusted for smaller size)
				{ x: dimensions.device.width - 2, y: 85, width: 4, height: 35 } // Power button (adjusted for smaller size)
			];
		} else {
			return [
				{ x: 70, y: -2, width: 20, height: 4 }, // Volume (adjusted for smaller size)
				{ x: 95, y: -2, width: 20, height: 4 }, // Volume (adjusted for smaller size)
				{ x: 120, y: -2, width: 15, height: 4 } // Action (adjusted for smaller size)
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
		width="100%"
		height="100%"
		viewBox="0 0 {dimensions.svg.width} {dimensions.svg.height}"
		class="relative z-10 max-h-[40rem] w-full"
		preserveAspectRatio="xMidYMid meet"
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

			<!-- Status bar masks - separate for portrait and landscape -->
			{#if isPortrait}
				<mask id="iphone-status-bar-mask-portrait">
					<rect x="0" y="0" width="100%" height="100%" fill="black" />
					<!-- Main rounded rectangle for portrait -->
					<rect
						x="13"
						y="13"
						width={dimensions.device.width - 26}
						height={statusBarHeight + 45}
						rx={radius.screen}
						ry={radius.screen}
						fill="white"
					/>
					<!-- Overlay rectangle to make bottom straight for portrait -->
					<rect
						x="13"
						y={13 + radius.screen}
						width={dimensions.device.width - 26}
						height={statusBarHeight + 15 - radius.screen}
						fill="white"
					/>
				</mask>
			{:else}
				<mask id="iphone-status-bar-mask-landscape">
					<rect x="0" y="0" width="100%" height="100%" fill="black" />
					<!-- Main rounded rectangle for landscape -->
					<rect
						x="13"
						y="13"
						width={dimensions.device.width - 26}
						height={statusBarHeight + 20}
						rx={radius.screen}
						ry={radius.screen}
						fill="white"
					/>
					<!-- Overlay rectangle to make bottom straight for landscape -->
					<rect
						x="13"
						y={13 + radius.screen}
						width={dimensions.device.width - 26}
						height={statusBarHeight + 10 - radius.screen}
						fill="white"
					/>
				</mask>
			{/if}

			<!-- Frame gradient -->
			<linearGradient id="iphoneFrameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
				<stop offset="0%" style="stop-color:{currentDeviceColor.frame[0]};stop-opacity:1" />
				<stop offset="50%" style="stop-color:{currentDeviceColor.frame[1]};stop-opacity:1" />
				<stop offset="100%" style="stop-color:{currentDeviceColor.frame[2]};stop-opacity:1" />
			</linearGradient>

			<!-- Home indicator gradient background -->
			<linearGradient id="homeIndicatorBackground" x1="0%" y1="0%" x2="0%" y2="100%">
				<stop offset="0%" style="stop-color:#000000;stop-opacity:0.01" />
				<stop offset="50%" style="stop-color:#000000;stop-opacity:0.05" />
				<stop offset="100%" style="stop-color:#000000;stop-opacity:0.01" />
			</linearGradient>

			<!-- Home indicator shadow filter -->
			<filter id="iphoneHomeIndicatorShadow" x="-50%" y="-50%" width="200%" height="200%">
				<feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#000000" flood-opacity="0.15" />
			</filter>

			<!-- Device shadow filter -->
			<filter id="iphoneDeviceShadow" x="-20%" y="-20%" width="140%" height="140%">
				<feDropShadow dx="1" dy="2" stdDeviation="6" flood-color={shadow} flood-opacity="0.20" />
			</filter>

			<!-- Image clipping path - defines the exact usable screen area -->
			<clipPath id="iphone-image-clip-{orientation}">
				<path
					d="M 13 {10 + statusBarHeight + 1} 
					   L {13 + dimensions.device.width - 26} {10 + statusBarHeight + 1} 
					   L {13 + dimensions.device.width - 26} {10 + dimensions.device.height - 25 - radius.screen} 
					   Q {13 + dimensions.device.width - 26} {10 + dimensions.device.height - 25} {13 +
						dimensions.device.width -
						26 -
						radius.screen} {10 + dimensions.device.height - 23} 
					   L {13 + radius.screen} {10 + dimensions.device.height - 23} 
					   Q 13 {10 + dimensions.device.height - 25} 13 {10 +
						dimensions.device.height -
						23 -
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
				stroke={currentDeviceColor.stroke}
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
					fill={currentDeviceColor.buttons}
				/>
			{/each}

			<!-- Screen area inside the bezel -->
			<rect
				x="10"
				y="10"
				width={dimensions.device.width - 20}
				height={dimensions.device.height - 20}
				rx={radius.screen}
				ry={radius.screen}
				fill={currentDeviceColor.screenBorder}
			/>

			<!-- Background image inside the screen area -->
			<image
				href={imageUrl}
				x={13}
				y={10 + statusBarHeight + 8}
				width={dimensions.device.width - 26}
				preserveAspectRatio="xMidYMin slice"
				clip-path="url(#iphone-image-clip-{orientation})"
			/>

			<!-- Status bar overlay with rounded top, straight bottom -->
			<rect
				x="13"
				y="13"
				width={dimensions.device.width - 26}
				height={statusBarHeight + 5}
				fill={currentStatusBarColor.background}
				mask={isPortrait
					? 'url(#iphone-status-bar-mask-portrait)'
					: 'url(#iphone-status-bar-mask-landscape)'}
			/>

			<!-- Dynamic Island -->
			{#if isPortrait}
				<rect
					x={dimensions.device.width / 2 - 20}
					y="25"
					width={dynamicIslandSize.width}
					height={dynamicIslandSize.height}
					rx="5"
					fill="#000000"
				/>
			{:else}
				<rect
					x="25"
					y={dimensions.device.height / 2 - 20}
					width={dynamicIslandSize.width}
					height={dynamicIslandSize.height}
					rx="5"
					fill="#000000"
				/>
			{/if}

			<!-- Status bar content -->
			{@render StatusBarContent(
				isPortrait,
				dimensions,
				currentTime,
				batteryLevel,
				currentStatusBarColor
			)}

			<!-- Home indicator -->
			<!-- Background for better visibility -->
			<rect
				x={dimensions.device.width / 2 - 42}
				y={isPortrait ? dimensions.device.height - 30 : dimensions.device.height - 25}
				width="84"
				height="13"
				rx="6.5"
				fill="url(#homeIndicatorBackground)"
			/>
			<!-- Main indicator -->
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
	batteryLevel: number,
	statusBarColor: any
)}
	{#if isPortrait}
		<!-- Time -->
		<text
			x="25"
			y="34"
			font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
			font-size="6"
			font-weight="600"
			fill={statusBarColor.text}
		>
			{currentTime}
		</text>

		<!-- Right status icons -->
		<g transform="translate({dimensions.device.width - 80}, 28)">
			<!-- Cellular -->
			<g transform="translate(26, 2) scale(0.6)">
				<StatusBarIcons
					type="cellular"
					{isPortrait}
					iconColor={statusBarColor.text}
					opacity={statusBarColor.iconOpacity}
				/>
			</g>

			<!-- WiFi -->
			<g transform="translate(34, 3) scale(0.6)">
				<StatusBarIcons
					type="wifi"
					{isPortrait}
					iconColor={statusBarColor.text}
					opacity={statusBarColor.iconOpacity}
				/>
			</g>

			<!-- Battery -->
			<g transform="translate(45, 3) scale(0.6)">
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
			x="23"
			y="36"
			font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
			font-size="12"
			font-weight="600"
			fill={statusBarColor.text}
		>
			{currentTime}
		</text>

		<g transform="translate({dimensions.device.width - 98}, 26)">
			<g transform="translate(12, 3) scale(0.8)">
				<StatusBarIcons
					type="cellular"
					{isPortrait}
					iconColor={statusBarColor.text}
					opacity={statusBarColor.iconOpacity}
				/>
			</g>
			<g transform="translate(28, 3) scale(0.8)">
				<StatusBarIcons
					type="wifi"
					{isPortrait}
					iconColor={statusBarColor.text}
					opacity={statusBarColor.iconOpacity}
				/>
			</g>
			<g transform="translate(48, 3) scale(0.8)">
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
