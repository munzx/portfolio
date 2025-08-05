<script lang="ts">
	// Component props for reusability
	export let imageUrl: string =
		'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2043&q=80';
	export let altText: string = 'iPad Display Content';
	export let orientation: 'portrait' | 'landscape' = 'landscape';

	// Time functionality
	let currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

	// Update time every minute
	setInterval(() => {
		currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	}, 60000);
</script>

<div class="relative z-50 w-full">
	<!-- iPad Frame -->
	<div
		class="relative w-full rounded-[25px] bg-black p-2 shadow-2xl {orientation === 'landscape'
			? 'aspect-[4/3] max-w-[800px]'
			: 'aspect-[3/4] max-w-[600px]'}"
	>
		<!-- Inner frame -->
		<div class="relative h-full w-full overflow-hidden rounded-[20px] bg-black">
			<!-- Screen -->
			<div class="relative h-full w-full overflow-hidden rounded-[18px] bg-white">
				<!-- Status Bar -->
				<div
					class="absolute top-2 right-4 left-4 z-20 flex items-center justify-between text-xs font-medium text-white drop-shadow-lg"
				>
					<span>{currentTime}</span>
					<div class="flex items-center space-x-1.5">
						<!-- Signal bars -->
						<div class="flex space-x-0.5">
							<div class="h-2 w-0.5 rounded-full bg-white"></div>
							<div class="h-2.5 w-0.5 rounded-full bg-white"></div>
							<div class="h-3 w-0.5 rounded-full bg-white"></div>
							<div class="h-3.5 w-0.5 rounded-full bg-white"></div>
						</div>
						<!-- WiFi icon -->
						<svg class="ml-1 h-3 w-3 fill-white" viewBox="0 0 24 24">
							<path
								d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"
							/>
						</svg>
						<!-- Battery -->
						<div class="ml-1.5 flex items-center">
							<div class="relative h-2.5 w-5 rounded-sm border border-white">
								<div class="absolute top-0.5 left-0.5 h-1.5 w-3.5 rounded-sm bg-green-400"></div>
							</div>
							<div class="ml-0.5 h-1.5 w-0.5 rounded-r-sm bg-white"></div>
						</div>
						<!-- Bluetooth icon -->
						<svg class="ml-1 h-3 w-3 fill-white" viewBox="0 0 24 24">
							<path
								d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71L13.41 12l4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm0 12.34v-3.76l1.88 1.88L13 18.17z"
							/>
						</svg>
					</div>
				</div>

				<!-- Full Screen Image -->
				<img src={imageUrl} alt={altText} class="inset-0 h-auto w-full object-cover" />

				<!-- Home Indicator (for newer iPads) -->
				<div
					class="absolute rounded-full bg-white opacity-70 {orientation === 'landscape'
						? 'bottom-2 left-1/2 h-1.5 w-28 -translate-x-1/2'
						: 'bottom-2 left-1/2 h-1.5 w-28 -translate-x-1/2'}"
				></div>
			</div>
		</div>
	</div>

	<!-- Shadow/Reflection -->
	<div
		class="absolute right-[5%] -bottom-[8%] left-[5%] h-[12%] rounded-full bg-gradient-to-t from-gray-400 to-transparent opacity-20 blur-xl"
	></div>
</div>
