<script lang="ts">
	import { onMount } from 'svelte';
	import {
		HeroSlide,
		AboutMeSlide,
		TeamSlide,
		CompanySlide,
		FeaturesSlideIPhone,
		GallerySlide,
		MultiDeviceSlide,
		TextSlide,
		FeaturesSlideIPad,
		FeaturesSlideMacBook,
		FeatureSlideWeb,
		ProductDevelopmentSlide
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

	// Sample team members
	const teamMembers = [
		{
			name: 'Sarah Chen',
			title: 'Lead UX Designer',
			image: '/img/test2.png',
			bio: 'Passionate about creating intuitive user experiences that delight and engage users.',
			skills: ['UI/UX Design', 'Figma', 'User Research', 'Prototyping', 'Design Systems'],
			linkedIn: 'https://linkedin.com/in/sarahchen',
			website: 'https://sarahchen.design'
		},
		{
			name: 'Alex Rodriguez',
			title: 'Full Stack Developer',
			image: '/img/test3.png',
			bio: 'Building scalable web applications with modern technologies and clean architecture.',
			skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
			github: 'https://github.com/alexrodriguez',
			linkedIn: 'https://linkedin.com/in/alexrodriguez'
		}
	];

	// Custom process for product development
	const productDevSteps = [
		{
			id: 'discover',
			title: 'Discover',
			description: 'User research & market analysis',
			position: { x: 15, y: 15 },
			size: 'medium' as const
		},
		{
			id: 'define',
			title: 'Define',
			description: 'Problem statement & requirements',
			position: { x: 35, y: 25 },
			size: 'small' as const
		},
		{
			id: 'ideate',
			title: 'Ideate',
			description: 'Brainstorm & conceptualize solutions',
			position: { x: 55, y: 15 },
			size: 'large' as const
		},
		{
			id: 'prototype',
			title: 'Prototype',
			description: 'Build & test concepts',
			position: { x: 75, y: 30 },
			size: 'medium' as const
		},
		{
			id: 'validate',
			title: 'Validate',
			description: 'User testing & feedback',
			position: { x: 80, y: 55 },
			size: 'small' as const
		},
		{
			id: 'deliver',
			title: 'Deliver',
			description: 'Launch & monitor',
			position: { x: 60, y: 65 },
			size: 'medium' as const
		},
		{
			id: 'learn',
			title: 'Learn',
			description: 'Analyze & iterate',
			position: { x: 35, y: 70 },
			size: 'medium' as const
		},
		{
			id: 'scale',
			title: 'Scale',
			description: 'Grow & optimize',
			position: { x: 15, y: 50 },
			size: 'large' as const
		}
	];

	const productDevConnections = [
		{ from: 'discover', to: 'define', type: 'arrow' as const },
		{ from: 'define', to: 'ideate', type: 'arrow' as const },
		{ from: 'ideate', to: 'prototype', type: 'arrow' as const },
		{ from: 'prototype', to: 'validate', type: 'arrow' as const },
		{ from: 'validate', to: 'deliver', type: 'arrow' as const },
		{ from: 'deliver', to: 'learn', type: 'arrow' as const },
		{ from: 'learn', to: 'scale', type: 'arrow' as const },
		{ from: 'scale', to: 'discover', type: 'dashed' as const, label: 'continuous cycle' },
		{ from: 'validate', to: 'ideate', type: 'dashed' as const, label: 'iterate' }
	];

	// Company information for Moheera
	// const moheeraCompany = {
	// 	name: 'Moheera',
	// 	tagline: 'Empowering digital transformation through innovation',
	// 	description:
	// 		'Moheera is a cutting-edge technology company specializing in digital solutions that drive business growth and enhance user experiences. We combine strategic thinking with technical excellence to deliver impactful results.',
	// 	logo: '/img/test.png',
	// 	founded: '2020',
	// 	location: 'Dubai, UAE',
	// 	industry: 'Technology & Digital Solutions',
	// 	size: '25+ professionals',
	// 	values: ['Innovation', 'Excellence', 'Collaboration', 'Impact', 'Growth'],
	// 	achievements: [
	// 		'Featured in Gulf Tech Awards 2023',
	// 		'500+ successful projects delivered',
	// 		'99% client satisfaction rate',
	// 		'ISO 9001:2015 certified'
	// 	]
	// };

	const moheeraCompany = {
		name: 'Moheera',
		tagline: 'Empowering digital transformation through innovation',
		description:
			'Moheera is a cutting-edge technology company specializing in digital solutions that drive business growth and enhance user experiences. We combine strategic thinking with technical excellence to deliver impactful results.',
		logo: '/img/screenshot.png',
		values: ['Innovation', 'Excellence', 'Collaboration', 'Impact', 'Growth'],
		achievements: [],
		website: 'https://moheera.com'
	};

	// const moheeraStats = [
	// 	{ label: 'Projects Delivered', value: '500+' },
	// 	{ label: 'Client Satisfaction', value: '99%' },
	// 	{ label: 'Years of Excellence', value: '4+' },
	// 	{ label: 'Team Experts', value: '25+' }
	// ];

	const moheeraStats: any = [];

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

<!-- Slide 5: Company Showcase - Moheera -->
<CompanySlide
	title="Moheera"
	subtitle="Innovation. Excellence. Impact."
	company={moheeraCompany}
	stats={moheeraStats}
	accentColor="#10b981"
/>

<TextSlide
	text="The perfect tool for modern creative teams"
	subText="Start your free 14-day trial today. No credit card required."
/>

<!-- Slide 3: About Me -->
<AboutMeSlide
	name="Moe Lehmando"
	title="Software Engineer & Creative Developer"
	description="Passionate about creating beautiful, functional digital experiences that make a difference. I specialize in full-stack development, UX/UI design, and bringing innovative ideas to life through code."
	portfolioImage={assetLibraryImage}
	skills={[
		'TypeScript',
		'Svelte/SvelteKit',
		'React/Next.js',
		'Node.js',
		'Python',
		'UI/UX Design',
		'Product Strategy',
		'System Architecture'
	]}
	contactEmail="munzir@example.com"
	contactLinkedIn="https://linkedin.com/in/munzirsuliman"
	contactGitHub="https://github.com/munzirsuliman"
	experience="12+ years"
	projectsCompleted={50}
	accentColor="#0071e3"
/>

<!-- Slide 4: Team Showcase -->
<TeamSlide
	title="Meet the Team"
	subtitle="The creative minds who bring ideas to life"
	{teamMembers}
	accentColor="#6366f1"
/>

<ProductDevelopmentSlide />

<TextSlide
	text="The perfect tool for modern creative teams"
	subText="Start your free 14-day trial today. No credit card required."
/>

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

<!-- Slide 4: Features Overview -->
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

<!-- Slide 5: Gallery Showcase -->
<GallerySlide {galleryImages} {centerIndex} />

<!-- Slide 6: Multi-Device Showcase -->
<MultiDeviceSlide {assetLibraryImage} {feedbackImage} {liveCanvasImage} />

<!-- Slide 7: Final message -->
<TextSlide
	text="The perfect tool for modern creative teams"
	subText="Start your free 14-day trial today. No credit card required."
/>

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
