<script lang="ts">
	import BaseSlide from './BaseSlide.svelte';
</script>

<BaseSlide className="flex h-full min-h-screen justify-center items-center">
	<section class="flex h-full w-full items-center justify-center">
		<div class="relative mx-auto w-full max-w-7xl">
			<!-- Main container for the process flow -->
			<div
				class="relative flex flex-col items-stretch justify-between space-y-16 lg:flex-row lg:space-y-0 lg:space-x-4"
			>
				<!-- STAGE 1: IDEATION -->
				<div class="flex flex-1 flex-col items-center text-center">
					<div
						class="flex h-full w-full flex-col items-center rounded-xl border-2 border-dashed border-white p-6"
					>
						<svg class="h-12 w-12 text-white" fill="#fff" viewBox="0 0 512 512">
							<g>
								<g>
									<path
										d="M409.8,220.9C403.3,149.6,341.4,79.2,254,79.2c-86.4,0-156.6,70.3-156.6,156.6c0,61.7,36.8,118,92.6,143v16h-0.2
			c-7.8,0-14.1,6.3-14.1,14.1S182,423,189.8,423h0.2v16.5h-0.2c-7.8,0-14.1,6.3-14.1,14.1s6.3,14.1,14.1,14.1h4.8
			C204,491.3,227,508,253.9,508s49.9-16.7,59.3-40.3h4.9c7.8,0,14.1-6.3,14.1-14.1c0-7.8-6.3-14.1-14.1-14.1h-0.3V423h0.3
			c7.8,0,14.1-6.3,14.1-14.1c0-7.8-6.3-14.1-14.1-14.1h-0.3v-16C378.6,351.6,416.1,288.1,409.8,220.9z M298.8,356.1
			c-5.5,2.1-9.2,7.3-9.2,13.2V444c0,19.7-16,35.7-35.7,35.7c-19.7,0-35.7-16-35.7-35.7v-74.7c0-5.9-3.7-11.2-9.2-13.2
			c-49.9-18.6-83.5-67-83.5-120.3c0-70.8,57.6-128.4,128.4-128.4c68.3,0,122.4,57.7,127.8,116.1
			C387.2,281.4,353.1,335.9,298.8,356.1z"
									/>
								</g>
							</g>
							<g>
								<g>
									<path
										d="M325.3,184.1c-5.5-5.6-14.4-5.6-19.9-0.1l-73.8,73.8l-29-29c-5.5-5.5-14.4-5.5-20,0c-5.5,5.5-5.5,14.4,0,20l39,39
			c2.8,2.8,6.4,4.1,10,4.1c3.6,0,7.2-1.4,10-4.1l83.7-83.7C330.8,198.6,330.8,189.7,325.3,184.1z"
									/>
								</g>
							</g>
							<g>
								<g>
									<path
										d="M61.3,221.7h-29c-7.8,0-14.1,6.3-14.1,14.1s6.3,14.1,14.1,14.1h29c7.8,0,14.1-6.3,14.1-14.1S69.1,221.7,61.3,221.7z"
									/>
								</g>
							</g>
							<g>
								<g>
									<path
										d="M475.7,221.7h-29c-7.8,0-14.1,6.3-14.1,14.1s6.3,14.1,14.1,14.1h29c7.8,0,14.1-6.3,14.1-14.1
			C489.8,228,483.5,221.7,475.7,221.7z"
									/>
								</g>
							</g>
							<g>
								<g>
									<path
										d="M254,0c-7.8,0-14.1,6.3-14.1,14.1v29c0,7.8,6.3,14.1,14.1,14.1s14.1-6.3,14.1-14.1v-29C268.1,6.3,261.8,0,254,0z"
									/>
								</g>
							</g>
							<g>
								<g>
									<path
										d="M127.7,89.5L107.2,69c-5.5-5.5-14.4-5.5-20,0c-5.5,5.5-5.5,14.4,0,20l20.5,20.5c5.6,5.5,14.5,5.5,20,0
			S133.2,95.1,127.7,89.5z"
									/>
								</g>
							</g>
							<g>
								<g>
									<path
										d="M420.7,69c-5.5-5.4-14.4-5.4-19.9,0.1l-20.5,20.5c-5.5,5.5-5.5,14.4,0,20c5.5,5.5,14.4,5.5,20,0L420.7,89
			C426.2,83.5,426.2,74.6,420.7,69z"
									/>
								</g>
							</g>
						</svg>

						<h3 class=" mt-4 text-2xl text-white">1. Ideation</h3>
						<div class=" mt-2 text-xl text-gray-200">
							<p>Developing the Idea</p>
							<p>&</p>
							<p>Business Model</p>
						</div>
					</div>
				</div>

				<!-- Desktop Connector -->
				<div class="hidden items-center text-white lg:flex">
					<svg class="h-8 w-16" fill="none" stroke="currentColor" viewBox="0 0 64 32"
						><path d="M0 16h60l-12-8m12 8l-12 8" stroke-width="2" /></svg
					>
				</div>
				<!-- Mobile Connector -->
				<div class="flex rotate-90 transform justify-center text-white lg:hidden">
					<svg class="h-8 w-16" fill="none" stroke="currentColor" viewBox="0 0 64 32"
						><path d="M0 16h60l-12-8m12 8l-12 8" stroke-width="2" /></svg
					>
				</div>

				<!-- STAGE 2: MARKET & CUSTOMER -->
				<div class="flex flex-1 flex-col items-center text-center">
					<div
						class="flex h-full w-full flex-col items-center rounded-xl border-2 border-dashed border-white p-6"
					>
						<svg class="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 50 50"
							><path
								d="M24,11.3c-0.9-0.9-2-1.3-3.3-1.3s-2.4,0.5-3.3,1.3c-1.8,1.8-1.8,4.7,0,6.5c0.9,0.9,2,1.3,3.3,1.3s2.4-0.5,3.3-1.3C25.8,16,25.8,13.1,24,11.3z M22.6,16.5c-0.5,0.5-1.1,0.7-1.9,0.7s-1.4-0.2-1.9-0.7c-1-1-1-2.8,0-3.8c0.5-0.5,1.1-0.7,1.9-0.7s1.4,0.2,1.9,0.7C23.7,13.7,23.7,15.5,22.6,16.5z M38.7,20.7c-1.8-1.8-4.7-1.8-6.5,0c-0.9,0.9-1.3,2-1.3,3.3s0.5,2.4,1.3,3.3c1.8,1.8,4.7,1.8,6.5,0C40.5,25.4,40.5,22.5,38.7,20.7z M37.3,25.9c-0.5,0.5-1.1,0.7-1.9,0.7s-1.4-0.2-1.9-0.7c-1-1-1-2.8,0-3.8c0.5-0.5,1.1-0.7,1.9-0.7c0.7,0,1.4,0.2,1.9,0.7C38.4,23.1,38.4,24.9,37.3,25.9z M12.7,20.7c-1.8-1.8-4.7-1.8-6.5,0s-1.8,4.7,0,6.5c0.9,0.9,2,1.3,3.3,1.3s2.4-0.5,3.3-1.3C14.5,25.4,14.5,22.5,12.7,20.7z M11.3,25.9c-0.5,0.5-1.1,0.7-1.9,0.7s-1.4-0.2-1.9-0.7c-1-1-1-2.8,0-3.8c0.5-0.5,1.1-0.7,1.9-0.7s1.4,0.2,1.9,0.7C12.4,23.1,12.4,24.9,11.3,25.9z M20.7,30.7c-1.8-1.8-4.7-1.8-6.5,0c-0.9,0.9-1.3,2-1.3,3.3s0.5,2.4,1.3,3.3c1.8,1.8,4.7,1.8,6.5,0C22.5,35.4,22.5,32.5,20.7,30.7z M19.3,35.9c-0.5,0.5-1.1,0.7-1.9,0.7c-0.7,0-1.4-0.2-1.9-0.7c-1-1-1-2.8,0-3.8c0.5-0.5,1.1-0.7,1.9-0.7c0.7,0,1.4,0.2,1.9,0.7C20.4,33.1,20.4,34.9,19.3,35.9z M32.7,30.7c-1.8-1.8-4.7-1.8-6.5,0c-0.9,0.9-1.3,2-1.3,3.3s0.5,2.4,1.3,3.3c1.8,1.8,4.7,1.8,6.5,0C34.5,35.4,34.5,32.5,32.7,30.7z M31.3,35.9c-0.5,0.5-1.1,0.7-1.9,0.7s-1.4-0.2-1.9-0.7c-1-1-1-2.8,0-3.8c0.5-0.5,1.1-0.7,1.9-0.7s1.4,0.2,1.9,0.7C32.4,33.1,32.4,34.9,31.3,35.9z"
							/></svg
						>
						<h3 class=" mt-4 text-2xl text-white">2. Market & Customer</h3>
						<div class=" mt-2 space-y-2 text-xl text-gray-200">
							<p>- Customer Persona</p>
							<p>- User Story</p>
							<p>- User Journey Map</p>
						</div>
					</div>
				</div>

				<!-- Desktop Connector -->
				<div class="hidden items-center text-white lg:flex">
					<svg class="h-8 w-16" fill="none" stroke="currentColor" viewBox="0 0 64 32"
						><path d="M0 16h60l-12-8m12 8l-12 8" stroke-width="2" /></svg
					>
				</div>
				<!-- Mobile Connector -->
				<div class="flex rotate-90 transform justify-center text-white lg:hidden">
					<svg class="h-8 w-16" fill="none" stroke="currentColor" viewBox="0 0 64 32"
						><path d="M0 16h60l-12-8m12 8l-12 8" stroke-width="2" /></svg
					>
				</div>

				<!-- STAGE 3: MVP -->
				<div class="flex flex-1 flex-col items-center text-center">
					<div
						class="flex h-full w-full flex-col items-center rounded-xl border-2 border-dashed border-white p-6"
					>
						<svg class="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 50 50"
							><path
								d="M41,24.3l-5.8-5.8c-0.6-0.6-1.5-0.9-2.4-0.9H11.2c-0.9,0-1.8,0.4-2.4,0.9l-5.8,5.8C2.4,25,2,25.8,2,26.8V39c0,1.7,1.3,3,3,3h34c1.7,0,3-1.3,3-3V26.8C42,25.8,41.6,25,41,24.3z M38,39H6V27.2l5.2-5.2h21.6l5.2,5.2V39z M22,28c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S25.3,28,22,28z M22,38c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S24.2,38,22,38z"
							/></svg
						>
						<h3 class=" mt-4 text-2xl text-white">3. MVP</h3>
						<div class=" mt-2 space-y-2 text-xl text-gray-200">
							<p>Minimum Viable Product</p>
							<p>- Design</p>
							<p>- Development</p>
						</div>
					</div>
				</div>

				<!-- Desktop Connector -->
				<div class="hidden items-center text-white lg:flex">
					<svg class="h-8 w-16" fill="none" stroke="currentColor" viewBox="0 0 64 32"
						><path d="M0 16h60l-12-8m12 8l-12 8" stroke-width="2" /></svg
					>
				</div>
				<!-- Mobile Connector -->
				<div class="flex rotate-90 transform justify-center text-white lg:hidden">
					<svg class="h-8 w-16" fill="none" stroke="currentColor" viewBox="0 0 64 32"
						><path d="M0 16h60l-12-8m12 8l-12 8" stroke-width="2" /></svg
					>
				</div>

				<!-- STAGE 4: MARKET & LEARN -->
				<div class="flex flex-1 flex-col items-center text-center">
					<div
						class="flex h-full w-full flex-col items-center rounded-xl border-2 border-dashed border-white p-6"
					>
						<svg class="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 50 50"
							><path
								d="M41.3,13.3c-3.4-3.4-7.9-5.3-12.8-5.3c-9.9,0-18,8.1-18,18s8.1,18,18,18c8.5,0,15.6-5.9,17.5-14h-3.2c-1.8,6.4-7.7,11-14.3,11c-8.3,0-15-6.7-15-15s6.7-15,15-15c4,0,7.6,1.6,10.3,4.2l-5.3,5.3h12V8L41.3,13.3z"
							/></svg
						>
						<h3 class=" mt-4 text-2xl text-white">4. Market & Learn</h3>
						<div class=" mt-2 text-xl text-gray-200">
							<p>- Market Testing</p>
							<p>- User Feedback</p>
							<p>- Iteration &</p>
							<p>Learning Loop</p>
						</div>
					</div>
				</div>
			</div>

			<!-- FEEDBACK LOOP -->
			<!-- Desktop Feedback Loop -->
			<div class="absolute right-0 -bottom-28 left-0 hidden h-24 text-yellow-400 lg:block">
				<svg width="100%" height="100%" viewBox="0 0 1200 100" preserveAspectRatio="none">
					<path
						d="M 1150 20 C 1300 100, 900 100, 600 100 C 300 100, -100 100, 50 20"
						stroke="currentColor"
						stroke-width="3"
						stroke-dasharray="10 5"
						fill="none"
						stroke-linecap="round"
					/>
					<path
						d="M50 20 L30 10 M50 20 L40 35"
						stroke="currentColor"
						stroke-width="3"
						fill="none"
						stroke-linecap="round"
					/>
				</svg>
				<p class=" absolute bottom-0 left-1/2 -translate-x-1/2 text-xl">Feedback & Data</p>
			</div>

			<!-- Mobile Feedback Loop -->
			<div class="absolute top-0 bottom-0 -left-16 flex w-16 items-center justify-center md:hidden">
				<div class="relative h-full w-full">
					<svg
						width="100%"
						height="100%"
						viewBox="0 0 50 800"
						preserveAspectRatio="none"
						class="text-yellow-400"
					>
						<path
							d="M 25 780 C -50 600, -50 200, 25 20"
							stroke="currentColor"
							stroke-width="3"
							stroke-dasharray="10 5"
							fill="none"
							stroke-linecap="round"
						/>
						<path
							d="M25 20 L15 10 M25 20 L35 10"
							stroke="currentColor"
							stroke-width="3"
							fill="none"
							stroke-linecap="round"
						/>
					</svg>
					<p
						class=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 transform text-xl whitespace-nowrap text-yellow-400"
					>
						Feedback & Data
					</p>
				</div>
			</div>
		</div>
	</section>
</BaseSlide>
