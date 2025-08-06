<script lang="ts">
	// Component props for reusability
	export let imageUrl: string =
		'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2043&q=80';
	export let altText: string = 'MacBook Pro Display Content';

	export let imgDisplay: 'cover' | 'contain' = 'contain';

	// Time functionality
	let currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

	// Update time every minute
	setInterval(() => {
		currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	}, 60000);
</script>

<div class="relative z-50 w-full">
	<!-- MacBook Pro Screen from front perspective -->
	<div class="relative">
		<!-- Screen viewed straight on -->
		<div class="relative aspect-[8/5] w-full max-w-[1000px] rounded-lg bg-black p-2 shadow-2xl">
			<!-- Screen Bezel -->
			<div class="relative h-full w-full overflow-hidden rounded-lg bg-black">
				<!-- Display Area -->
				<div class="relative m-0 h-full w-full overflow-hidden rounded-md bg-gray-50 p-0">
					<!-- Menu Bar -->
					<div
						class="absolute top-0 right-0 left-0 z-20 flex h-6 items-center justify-between bg-black/30 px-4 text-sm font-medium text-white backdrop-blur-md"
					>
						<div class="flex items-center space-x-4">
							<!-- Apple Logo -->
							<svg class="h-4 w-4 fill-white" viewBox="0 0 24 24">
								<path
									d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
								/>
							</svg>
							<span class="text-white opacity-90">Finder</span>
							<span class="text-white opacity-90">File</span>
							<span class="text-white opacity-90">Edit</span>
							<span class="text-white opacity-90">View</span>
						</div>
						<div class="flex items-center space-x-3">
							<!-- Control Center Icons -->
							<svg class="h-3 w-3 fill-white opacity-90" viewBox="0 0 24 24">
								<path
									d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"
								/>
							</svg>
							<!-- Battery -->
							<div class="flex items-center">
								<div class="relative h-2 w-5 rounded-sm border border-white/80">
									<div class="absolute top-0.5 left-0.5 h-1 w-3.5 rounded-sm bg-green-400"></div>
								</div>
								<div class="ml-0.5 h-1 w-0.5 rounded-r-sm bg-white/80"></div>
							</div>
							<span class="text-white opacity-90">{currentTime}</span>
						</div>
					</div>

					<!-- Full Screen Image -->
					<img
						src={imageUrl}
						alt={altText}
						class="inset-0 mt-6 w-full {imgDisplay === 'cover'
							? 'h-full object-cover'
							: 'h-auto object-contain'}"
					/>
				</div>
			</div>
		</div>
	</div>

	<!-- Clean shadow -->
	<div
		class="absolute right-[10%] -bottom-[3%] left-[10%] h-[6%] rounded-full bg-gradient-to-t from-gray-400/40 to-transparent opacity-60 blur-lg"
	></div>
</div>
