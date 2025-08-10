<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	// Component props for reusability
	export let imageUrl: string =
		'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2043&q=80';
	export const altText: string = 'MacBook Pro Display Content';
	export let batteryLevel: number = 85; // Battery percentage
	export let isDarkMode: boolean = false; // Dark/Light menu bar mode
	export let deviceColor: 'silver' | 'space-gray' = 'space-gray'; // Device color variant
	export let shadow: string = '#ffffff'; // Shadow color

	// Types
	type DeviceDimensions = {
		svg: { width: number; height: number };
		device: { width: number; height: number };
		screen: { width: number; height: number };
	};

	type BorderRadius = {
		frame: number;
		screen: number;
	};

	// Constants for MacBook dimensions - reduced for better fit
	const DEVICE_DIMENSIONS: DeviceDimensions = {
		svg: { width: 600, height: 380 },
		device: { width: 580, height: 360 },
		screen: { width: 560, height: 340 }
	} as const;

	const BORDER_RADIUS: BorderRadius = {
		frame: 12,
		screen: 8
	} as const;

	// Time functionality
	let currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	let timeInterval: number;

	// Computed values
	$: dimensions = DEVICE_DIMENSIONS;
	$: radius = BORDER_RADIUS;
	$: menuBarHeight = 28;

	// Color schemes based on device color and mode
	$: deviceColors = {
		silver: {
			frame: ['#e5e7eb', '#d1d5db', '#9ca3af'],
			stroke: '#9ca3af'
		},
		'space-gray': {
			frame: ['#6b7280', '#4b5563', '#374151'],
			stroke: '#374151'
		}
	};

	$: menuBarColors = {
		light: {
			background: 'rgba(240, 240, 240, 0.85)',
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
	$: currentMenuBarColor = menuBarColors[isDarkMode ? 'dark' : 'light'];

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
		class="relative z-10 max-h-[50rem] w-full"
		preserveAspectRatio="xMidYMid meet"
	>
		<defs>
			<!-- Screen mask for bezel -->
			<mask id="macbook-screen-mask">
				<rect x="0" y="0" width="100%" height="100%" fill="black" />
				<rect
					x="20"
					y="20"
					width={dimensions.screen.width}
					height={dimensions.screen.height}
					rx={radius.screen}
					ry={radius.screen}
					fill="white"
				/>
			</mask>

			<!-- Menu bar mask - rounded top, straight bottom -->
			<mask id="macbook-menubar-mask">
				<rect x="0" y="0" width="100%" height="100%" fill="black" />
				<!-- Main rounded rectangle -->
				<rect
					x="10"
					y="10"
					width={dimensions.screen.width}
					height={menuBarHeight + radius.screen}
					rx={radius.screen}
					ry={radius.screen}
					fill="white"
				/>
				<!-- Overlay rectangle to make bottom straight -->
				<rect
					x="10"
					y={10 + radius.screen}
					width={dimensions.screen.width}
					height={menuBarHeight}
					fill="white"
				/>
			</mask>

			<!-- MacBook frame gradient -->
			<linearGradient id="macbookFrameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
				<stop offset="0%" style="stop-color:{currentDeviceColor.frame[0]};stop-opacity:1" />
				<stop offset="50%" style="stop-color:{currentDeviceColor.frame[1]};stop-opacity:1" />
				<stop offset="100%" style="stop-color:{currentDeviceColor.frame[2]};stop-opacity:1" />
			</linearGradient>

			<!-- Screen bezel gradient -->
			<linearGradient id="macbookBezelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
				<stop offset="0%" style="stop-color:#1f2937;stop-opacity:1" />
				<stop offset="100%" style="stop-color:#111827;stop-opacity:1" />
			</linearGradient>

			<!-- Device shadow filter -->
			<filter id="macbookDeviceShadow" x="-20%" y="-20%" width="140%" height="140%">
				<feDropShadow dx="1" dy="2" stdDeviation="6" flood-color={shadow} flood-opacity="0.20" />
			</filter>

			<!-- Screen glow filter -->
			<filter id="macbookScreenGlow" x="-10%" y="-10%" width="120%" height="120%">
				<feDropShadow dx="0" dy="0" stdDeviation="2" flood-color="#ffffff" flood-opacity="0.3" />
			</filter>

			<!-- Menu bar blur filter -->
			<filter id="macbookMenuBarBlur" x="-50%" y="-50%" width="200%" height="200%">
				<feGaussianBlur in="SourceGraphic" stdDeviation="1" />
			</filter>
		</defs>

		<!-- Main device group -->
		<g
			transform="translate({(dimensions.svg.width - dimensions.device.width) / 2}, {(dimensions.svg
				.height -
				dimensions.device.height) /
				2})"
			filter="url(#macbookDeviceShadow)"
		>
			<!-- Outer frame (laptop body) -->
			<rect
				x="0"
				y="0"
				width={dimensions.device.width}
				height={dimensions.device.height}
				rx={radius.frame}
				ry={radius.frame}
				fill="url(#macbookFrameGradient)"
				stroke={currentDeviceColor.stroke}
				stroke-width="1"
			/>

			<!-- Screen area -->
			<rect
				x="10"
				y="10"
				width={dimensions.screen.width}
				height={dimensions.screen.height}
				rx={radius.screen}
				ry={radius.screen}
				fill="#000000"
				filter="url(#macbookScreenGlow)"
			/>

			<!-- Background image inside the screen area -->
			<image
				href={imageUrl}
				x="10"
				y={10 + menuBarHeight}
				width={dimensions.screen.width}
				height={dimensions.screen.height - menuBarHeight}
				preserveAspectRatio="xMidYMin slice"
				clip-path="inset(0 0 0 0 round 0 0 {radius.screen}px {radius.screen}px)"
			/>

			<!-- Menu bar overlay -->
			<rect
				x="10"
				y="10"
				width={dimensions.screen.width}
				height={menuBarHeight}
				fill={currentMenuBarColor.background}
				mask="url(#macbook-menubar-mask)"
			/>

			<!-- Menu bar content -->
			{@render MenuBarContent(dimensions, currentTime, batteryLevel, currentMenuBarColor)}
		</g>
	</svg>
</div>

<!-- Menu Bar Component -->
{#snippet MenuBarContent(
	dimensions: DeviceDimensions,
	currentTime: string,
	batteryLevel: number,
	menuBarColor: any
)}
	<!-- Left side - Apple logo and menu items -->
	<g transform="translate(25, 22)">
		<!-- Apple Logo -->
		<g transform="translate(0, 0)">
			<path
				d="M12.71 15.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C-1.75 13 -3.06 8.45 -1.3 5.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M7 -.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
				fill={menuBarColor.text}
				opacity={menuBarColor.iconOpacity}
				transform="scale(0.7)"
			/>
		</g>

		<!-- Menu items -->
		<text
			x="22"
			y="10"
			font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
			font-size="13"
			font-weight="500"
			fill={menuBarColor.text}
			opacity={menuBarColor.iconOpacity}
		>
			Finder
		</text>

		<text
			x="67"
			y="10"
			font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
			font-size="13"
			font-weight="400"
			fill={menuBarColor.text}
			opacity={menuBarColor.iconOpacity * 0.9}
		>
			File
		</text>

		<text
			x="97"
			y="10"
			font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
			font-size="13"
			font-weight="400"
			fill={menuBarColor.text}
			opacity={menuBarColor.iconOpacity * 0.9}
		>
			Edit
		</text>

		<text
			x="132"
			y="10"
			font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
			font-size="13"
			font-weight="400"
			fill={menuBarColor.text}
			opacity={menuBarColor.iconOpacity * 0.9}
		>
			View
		</text>
	</g>

	<!-- Right side - Control Center and time -->
	<g transform="translate({dimensions.screen.width - 110}, 22)">
		<!-- WiFi Icon -->
		<g transform="translate(0, 0)">
			<path
				d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"
				fill={menuBarColor.text}
				opacity={menuBarColor.iconOpacity}
				transform="scale(0.5)"
			/>
		</g>

		<!-- Battery -->
		<g transform="translate(25, 2)">
			<!-- Battery body -->
			<rect
				x="0"
				y="0"
				width="20"
				height="8"
				rx="2"
				fill="none"
				stroke={menuBarColor.text}
				stroke-width="1"
				opacity={menuBarColor.iconOpacity * 0.9}
			/>
			<!-- Battery charge -->
			<rect
				x="1"
				y="1"
				width={18 * (batteryLevel / 100)}
				height="6"
				rx="1"
				fill={menuBarColor.text}
				opacity={menuBarColor.iconOpacity}
			/>
			<!-- Battery tip -->
			<rect
				x="21"
				y="2"
				width="2"
				height="4"
				rx="1"
				fill={menuBarColor.text}
				opacity={menuBarColor.iconOpacity * 0.9}
			/>
		</g>

		<!-- Time -->
		<text
			x="55"
			y="10"
			font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
			font-size="13"
			font-weight="500"
			fill={menuBarColor.text}
			opacity={menuBarColor.iconOpacity}
		>
			{currentTime}
		</text>
	</g>
{/snippet}
