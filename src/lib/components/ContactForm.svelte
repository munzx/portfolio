<script lang="ts">
	import { pricingStore } from '$lib/stores/pricing';
	import BaseSlide from '../slides/BaseSlide.svelte';

	export let title = 'Start Your Project Today';
	export let subtitle = 'Tell me about your project and get a detailed proposal within 48 hours';
	export let className = 'bg-black';

	// Contact form state
	let formData = {
		name: '',
		email: '',
		company: '',
		projectType: '',
		budget: '',
		timeline: '',
		message: '',
		priority: 'medium'
	};

	let isSubmitting = false;
	let submitted = false;
	let error = '';

	// Subscribe to pricing store to auto-fill budget
	$: if ($pricingStore.selectedRange && $pricingStore.selectedRange !== formData.budget) {
		formData.budget = $pricingStore.selectedRange;
	}

	// Handle form submission
	const handleSubmit = async () => {
		isSubmitting = true;
		error = '';

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});

			const result = await response.json();

			if (result.success) {
				submitted = true;
			} else {
				error = result.error || 'Something went wrong. Please try again.';
			}
		} catch (err) {
			console.error('Error submitting form:', err);
			error = 'Network error. Please check your connection and try again.';
		} finally {
			isSubmitting = false;
		}
	};

	// Selected tier info display
	$: selectedTier = $pricingStore.selectedTier;
</script>

<BaseSlide {className}>
	<div id="contact-form" class="flex h-full w-full max-w-4xl items-center px-8">
		<div class="w-full space-y-8">
			{#if !submitted}
				<!-- Header -->
				<div class="text-center">
					<h2 class="mb-6 text-4xl font-bold text-white lg:text-5xl">{title}</h2>
					<p class="mx-auto max-w-2xl text-lg text-gray-300">
						{subtitle}
					</p>

					<!-- Selected Package Display -->
					{#if selectedTier}
						<div
							class="mx-auto mt-6 max-w-md rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-4"
						>
							<div class="text-sm font-medium text-emerald-400">SELECTED PACKAGE:</div>
							<div class="text-lg font-bold text-white">{selectedTier.name}</div>
							<div class="text-emerald-300">{selectedTier.range} • {selectedTier.timeline}</div>
						</div>
					{/if}
				</div>

				<!-- Form -->
				<form on:submit|preventDefault={handleSubmit} class="space-y-6">
					<!-- Error Display -->
					{#if error}
						<div class="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
							<div class="flex items-center space-x-2">
								<svg
									class="h-5 w-5 text-red-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
										clip-rule="evenodd"
									/>
								</svg>
								<span class="text-sm text-red-300">{error}</span>
							</div>
						</div>
					{/if}
					<div class="grid gap-6 md:grid-cols-2">
						<!-- Name -->
						<div>
							<label for="name" class="mb-2 block text-sm font-medium text-gray-300">Name *</label>
							<input
								type="text"
								id="name"
								bind:value={formData.name}
								required
								class="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
								placeholder="Your full name"
							/>
						</div>

						<!-- Email -->
						<div>
							<label for="email" class="mb-2 block text-sm font-medium text-gray-300">Email *</label
							>
							<input
								type="email"
								id="email"
								bind:value={formData.email}
								required
								class="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
								placeholder="your@email.com"
							/>
						</div>
					</div>

					<div class="grid gap-6 md:grid-cols-2">
						<!-- Company -->
						<div>
							<label for="company" class="mb-2 block text-sm font-medium text-gray-300"
								>Company</label
							>
							<input
								type="text"
								id="company"
								bind:value={formData.company}
								class="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
								placeholder="Your company name"
							/>
						</div>

						<!-- Project Type -->
						<div>
							<label for="projectType" class="mb-2 block text-sm font-medium text-gray-300"
								>Project Type</label
							>
							<select
								id="projectType"
								bind:value={formData.projectType}
								class="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
							>
								<option value="">Select project type</option>
								<option value="mvp">MVP Development</option>
								<option value="web-app">Web Application</option>
								<option value="mobile-app">Mobile App</option>
								<option value="ecommerce">E-commerce Platform</option>
								<option value="saas">SaaS Platform</option>
								<option value="custom">Custom Software</option>
								<option value="other">Other</option>
							</select>
						</div>
					</div>

					<div class="grid gap-6 md:grid-cols-2">
						<!-- Budget -->
						<div>
							<label for="budget" class="mb-2 block text-sm font-medium text-gray-300"
								>Budget Range</label
							>
							<select
								id="budget"
								bind:value={formData.budget}
								class="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
							>
								<option value="">Select budget range</option>
								<option value="$5k - $25k">$5k - $25k (MVP)</option>
								<option value="$25k - $75k">$25k - $75k (Full Product)</option>
								<option value="$75k+">$75k+ (Enterprise)</option>
								<option value="not-sure">Not sure yet</option>
							</select>
						</div>

						<!-- Timeline -->
						<div>
							<label for="timeline" class="mb-2 block text-sm font-medium text-gray-300"
								>Desired Timeline</label
							>
							<select
								id="timeline"
								bind:value={formData.timeline}
								class="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
							>
								<option value="">Select timeline</option>
								<option value="asap">ASAP (Rush project)</option>
								<option value="1-2-months">1-2 months</option>
								<option value="2-4-months">2-4 months</option>
								<option value="4-6-months">4-6 months</option>
								<option value="flexible">Flexible</option>
							</select>
						</div>
					</div>

					<!-- Project Description -->
					<div>
						<label for="message" class="mb-2 block text-sm font-medium text-gray-300"
							>Project Description *</label
						>
						<textarea
							id="message"
							bind:value={formData.message}
							required
							rows="4"
							class="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
							placeholder="Tell me about your project idea, goals, and any specific requirements you have in mind..."
						></textarea>
					</div>

					<!-- Priority -->
					<fieldset>
						<legend class="mb-3 block text-sm font-medium text-gray-300">Project Priority</legend>
						<div class="flex space-x-4">
							{#each [{ value: 'low', label: 'Exploring ideas', color: 'gray' }, { value: 'medium', label: 'Planning to start soon', color: 'blue' }, { value: 'high', label: 'Ready to start now', color: 'green' }] as priority}
								<label class="flex items-center">
									<input
										type="radio"
										bind:group={formData.priority}
										value={priority.value}
										class="sr-only"
									/>
									<div class="flex cursor-pointer items-center space-x-2">
										<div
											class="h-4 w-4 rounded-full border-2 {formData.priority === priority.value
												? `bg-${priority.color}-500 border-${priority.color}-500`
												: 'border-white/20'}"
										></div>
										<span class="text-sm text-gray-300">{priority.label}</span>
									</div>
								</label>
							{/each}
						</div>
					</fieldset>

					<!-- Submit Button -->
					<div class="text-center">
						<button
							type="submit"
							disabled={isSubmitting}
							class="w-full rounded-lg bg-gradient-to-r from-blue-500 to-emerald-600 px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
						>
							{#if isSubmitting}
								<div class="flex items-center justify-center space-x-2">
									<div
										class="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
									></div>
									<span>Sending...</span>
								</div>
							{:else}
								Get My Free Project Assessment
							{/if}
						</button>
					</div>
				</form>
			{:else}
				<!-- Success State -->
				<div class="text-center">
					<div
						class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500"
					>
						<svg class="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<h3 class="mb-4 text-2xl font-bold text-white">Thank You!</h3>
					<p class="mb-6 text-gray-300">
						Your project inquiry has been received. I'll review your details and get back to you
						within 48 hours with a detailed assessment.
					</p>
					{#if selectedTier}
						<div
							class="mx-auto mb-6 max-w-md rounded-lg border border-green-500/20 bg-green-500/10 p-4"
						>
							<div class="text-sm font-medium text-green-400">SELECTED PACKAGE:</div>
							<div class="text-lg font-bold text-white">{selectedTier.name}</div>
							<div class="text-green-300">{selectedTier.range}</div>
						</div>
					{/if}
					<div class="rounded-lg border border-blue-500/20 bg-blue-500/10 p-4">
						<p class="text-sm text-blue-300">
							<strong>Next Steps:</strong> I'll send you a calendar link to schedule a free 30-minute
							discovery call to discuss your project in detail.
						</p>
					</div>
				</div>
			{/if}
		</div>
	</div>
</BaseSlide>
