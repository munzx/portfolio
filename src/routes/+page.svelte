<script lang="ts">
	import { onMount } from 'svelte';
	import {
		HeroSlide,
		FeaturesSlideIPhone,
		GallerySlide,
		MultiDeviceSlide,
		FinalSlide,
		FeaturesSlideIPad,
		FeaturesSlideMacBook,
		FeatureSlideWeb
	} from '$lib/slides';

	// Feature showcase images
	const liveCanvasImage = '/img/test.png';
	const feedbackImage = '/img/test2.png';
	const assetLibraryImage = '/img/test2.png';

	// Dynamic feature content
	let featureItems = [
		{
			title: 'Live Canvas',
			description: 'Share ideas on an infinite canvas, together.',
			image: liveCanvasImage,
			active: true
		},
		{
			title: 'Instant Feedback',
			description: 'Annotate designs and get comments in real-time.',
			image: feedbackImage,
			active: false
		},
		{
			title: 'Cloud Asset Library',
			description: 'All your components and brand assets, synced.',
			image: assetLibraryImage,
			active: false
		}
	];

	// Gallery images for the layered grid
	let galleryImages = [
		'/img/test2.png',
		'/img/test2.png',
		'/img/test3.png',
		'/img/test.png',
		'/img/test2.png',
		'/img/test3.png'
	];

	let centerIndex = 0;
	let currentFeature = featureItems[0];

	function handleFeatureHover(index: number) {
		featureItems = featureItems.map((item, i) => ({
			...item,
			active: i === index
		}));
		currentFeature = featureItems[index];
		centerIndex = index;
	}

	onMount(() => {
		// Scroll animations observer
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('animate-in');
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: '0px 0px -100px 0px'
			}
		);

		document.querySelectorAll('.reveal').forEach((el) => {
			observer.observe(el);
		});

		return () => {
			observer.disconnect();
		};
	});
</script>

<svelte:head>
	<title>Meet AuraFlow | The Future of Creative Collaboration</title>
	<meta
		name="description"
		content="Powerful. Intuitive. Creative collaboration tools for modern design teams."
	/>
</svelte:head>

<!-- Slide 1: Web App Showcase -->
<!-- badgeText="✨ Featured Experience" -->
<!-- primaryButtonText="Experience Now"
	secondaryButtonText="Learn More" -->
<!-- collaboratorCount={12}
    showLiveIndicator={true} -->
<FeatureSlideWeb
	title="Advanced Analytics"
	subtitle="Data-Driven Insights"
	description="Transform your data into actionable insights with our powerful analytics dashboard. Real-time monitoring, predictive analytics, and customizable reports all in one place."
	imageUrl={liveCanvasImage}
	altText="Analytics Dashboard"
	accentColor="#6366f1"
	features={[
		'Real-time data visualization',
		'Predictive analytics engine',
		'Customizable dashboard widgets',
		'Advanced filtering and search',
		'Export reports in multiple formats'
	]}
/>

<!-- Slide 2: Hero Section -->
<HeroSlide {galleryImages} />

<!-- Slide 2: Features Overview -->
<FeaturesSlideIPhone
	{featureItems}
	{currentFeature}
	reverse={true}
	onFeatureHover={handleFeatureHover}
/>

<!-- Default layout (iPad on right) -->
<FeaturesSlideIPad {featureItems} {currentFeature} onFeatureHover={handleFeatureHover} />

<!-- Reversed layout (MacBook on left) -->
<FeaturesSlideMacBook
	{featureItems}
	{currentFeature}
	onFeatureHover={handleFeatureHover}
	reverse={true}
/>

<!-- Slide 3: Gallery Showcase -->
<GallerySlide {galleryImages} {centerIndex} />

<!-- Slide 4: Multi-Device Showcase -->
<MultiDeviceSlide {assetLibraryImage} {feedbackImage} {liveCanvasImage} />

<!-- Slide 6: Final message -->
<FinalSlide />

<style>
	:global(html) {
		scroll-behavior: smooth;
		scroll-snap-type: y mandatory;
		font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	:global(body) {
		background-color: #161617;
		color: #f5f5f7;
		overflow-x: hidden;
	}

	/* Reveal animations */
	:global(.reveal) {
		opacity: 0;
		transform: translateY(50px);
		transition:
			opacity 0.8s ease-out,
			transform 0.8s ease-out;
	}

	:global(.reveal.animate-in) {
		opacity: 1;
		transform: translateY(0);
	}
</style>
