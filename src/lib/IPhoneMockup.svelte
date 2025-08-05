<script lang="ts">
	// Component props for reusability
	export let imageUrl: string =
		'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2043&q=80';
	export let altText: string = 'iPhone Display Content';
	export let orientation: 'portrait' | 'landscape' = 'portrait';

	// Time functionality
	let currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

	// Update time every minute
	setInterval(() => {
		currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	}, 60000);
</script>

<div class="relative z-50 w-full">
	<!-- iPhone 15 Frame -->
	<div
		class="relative w-full rounded-[2.8rem] bg-black p-[0.375rem] shadow-2xl {orientation ===
		'portrait'
			? 'aspect-[9/19.5] max-w-72'
			: 'aspect-[19.5/9] max-w-[500px]'}"
	>
		<!-- Inner frame -->
		<div class="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-black">
			<!-- Screen -->
			<div class="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-white">
				<!-- Dynamic Island -->
				<div
					class="absolute z-10 rounded-full bg-black {orientation === 'portrait'
						? 'top-[4%] left-1/2 h-[0.6rem] w-[4rem] -translate-x-1/2'
						: 'top-1/2 left-[4%] h-[4rem] w-[0.6rem] -translate-y-1/2'}"
				></div>

				<!-- Status Bar -->
				<div
					class="absolute z-20 flex items-center justify-between text-[0.7rem] font-medium text-white drop-shadow-lg {orientation ===
					'portrait'
						? 'top-[4%] right-[4%] left-[4%]'
						: 'top-[4%] right-[4%] left-[15%]'}"
				>
					<span>{currentTime}</span>
					<div class="flex items-center space-x-[0.2rem]">
						<!-- Signal bars -->
						<div class="flex space-x-[0.1rem]">
							<div class="h-[0.4rem] w-[0.1rem] rounded-full bg-white"></div>
							<div class="h-[0.5rem] w-[0.1rem] rounded-full bg-white"></div>
							<div class="h-[0.6rem] w-[0.1rem] rounded-full bg-white"></div>
							<div class="h-[0.6rem] w-[0.1rem] rounded-full bg-white"></div>
						</div>
						<!-- WiFi icon -->
						<svg class="ml-[0.2rem] h-[0.6rem] w-[0.6rem] fill-white" viewBox="0 0 24 24">
							<path
								d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"
							/>
						</svg>
						<!-- Battery -->
						<div class="ml-[0.2rem] flex items-center">
							<div class="relative h-[0.5rem] w-[0.8rem] rounded-sm border border-white">
								<div
									class="absolute top-[0.1rem] left-[0.1rem] h-[0.25rem] w-[0.5rem] rounded-sm bg-green-400"
								></div>
							</div>
							<div class="ml-[0.1rem] h-[0.25rem] w-[0.1rem] rounded-r-sm bg-white"></div>
						</div>
					</div>
				</div>

				<!-- Full Screen Image -->
				<img src={imageUrl} alt={altText} class="h-full w-full object-cover" />

				<!-- Home Indicator -->
				<div
					class="absolute rounded-full bg-white opacity-80 {orientation === 'portrait'
						? 'bottom-[2%] left-1/2 h-[0.2rem] w-[3rem] -translate-x-1/2'
						: 'bottom-[2%] left-1/2 h-[0.2rem] w-[3rem] -translate-x-1/2'}"
				></div>
			</div>
		</div>
	</div>

	<!-- Shadow/Reflection -->
	<div
		class="absolute right-[5%] -bottom-[10%] left-[5%] h-[15%] rounded-full bg-gradient-to-t from-gray-400 to-transparent opacity-20 blur-xl"
	></div>
</div>
