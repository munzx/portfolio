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
		ProductDevelopmentSlide,
		MasonrySlide
	} from '$lib/slides';

	// Company information for Moheera
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

	const moheeraStats: any = [];

	// Team members
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
		},
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

	// Gallery images showcasing all apps
	let portfolioGallery = [
		'/img/surplusbite/desktop.png', // SurplusBite
		'/img/fitbite/desktop.png', // FitBite
		'/img/echoimpact/iphone.png', // EchoImpact
		'/img/particledrive/desktop.png', // ParticleDrive
		'/img/socialwall/desktop.png', // SocialWall
		'/img/qg/desktop.png' // QuotationGate
	];

	// Website showcase data - Real app screenshots for masonry layout
	const websiteShowcase = [
		{
			title: 'SurplusBite',
			image: '/img/websites/1.png',
			description: 'Food surplus management with automated donation matching'
		},
		{
			title: 'FitBite',
			image: '/img/websites/3.png',
			description: 'Precision nutrition platform for fitness optimization'
		},
		{
			title: 'EchoImpact',
			image: '/img/websites/5.png',
			description: 'Recycling tracking with environmental impact visualization'
		},
		{
			title: 'ParticleDrive',
			image: '/img/websites/4.png',
			description: 'AI-powered auto parts discovery and marketplace'
		},
		{
			title: 'SocialWall',
			image: '/img/websites/2.png',
			description: 'Real-time social media aggregation and display platform'
		},
		{
			title: 'QuotationGate',
			image: '/img/websites/6.png',
			description: 'Construction procurement and project management platform'
		}
	];

	onMount(() => {
		// Pure CSS scroll-snap implementation
		// No JavaScript needed for scroll behavior
	});
</script>

<svelte:head>
	<title>Moheera Portfolio | Digital Solutions That Transform</title>
	<meta
		name="description"
		content="Discover our portfolio of innovative digital solutions that solve real-world problems and create lasting impact."
	/>
</svelte:head>

<!-- 1. COMPANY INTRODUCTION -->
<CompanySlide
	title="Moheera"
	subtitle="Innovation. Excellence. Impact."
	company={moheeraCompany}
	stats={moheeraStats}
	accentColor="#10b981"
/>

<!-- 2. VISION STATEMENT -->
<TextSlide
	text="Transforming Ideas Into Digital Solutions That Matter"
	subText="We build applications that solve real-world problems and create lasting impact across industries"
/>

<!-- 3. ABOUT LEADERSHIP -->
<AboutMeSlide
	name="Munzir Suliman"
	title="Software Engineer & Creative Developer"
	description="Passionate about creating beautiful, functional digital experiences that make a difference. I specialize in full-stack development, UX/UI design, and bringing innovative ideas to life through code."
	portfolioImage="/img/me.jpg"
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
	contactEmail="munzir.suliman@outlook.com"
	contactLinkedIn="https://linkedin.com/in/munzirsuliman"
	contactGitHub="https://github.com/munzirsuliman"
	experience="12+ years"
	projectsCompleted={50}
	accentColor="#0071e3"
/>

<!-- 4. TEAM SHOWCASE -->
<TeamSlide
	title="Meet the Team"
	subtitle="The creative minds who bring ideas to life"
	{teamMembers}
	accentColor="#6366f1"
/>

<!-- 5. PARTICLEDRIVE - Multi-Device Commerce (3 images) -->
<MultiDeviceSlide
	title="ParticleDrive"
	subtitle="Auto Commerce Platform"
	description="An AI-curated marketplace revolutionizing auto part discovery and conversations with precision matching."
	images={{
		macbook: '/img/particledrive/desktop3.png',
		ipad: '/img/particledrive/ipad2.png',
		iphone: '/img/particledrive/iphone.png'
	}}
	orientation={{
		ipad: 'portrait',
		iphone: 'portrait'
	}}
/>

<!-- 6. SURPLUSBITE - Multi-Device Showcase (3 images) -->
<MultiDeviceSlide
	title="SurplusBite"
	subtitle="The Intelligent Surplus Management"
	description="A seamless platform transforming food surplus into community nourishment through automated donation management."
	images={{
		macbook: '/img/surplusbite/desktop.png',
		ipad: '/img/surplusbite/ipad.png',
		iphone: '/img/surplusbite/iphone.png'
	}}
	orientation={{
		ipad: 'landscape',
		iphone: 'portrait'
	}}
/>

<!-- 7. FITBITE - Multi-Device Platform (3 images) -->
<MultiDeviceSlide
	title="FitBite"
	subtitle="Precision Nutrition Platform"
	description="A powerful meal optimization platform designed to elevate fitness outcomes through hyper-personalized nutrition."
	images={{
		macbook: '/img/fitbite/desktop.png',
		ipad: '/img/fitbite/ipad.png',
		iphone: '/img/fitbite/iphone.png'
	}}
	showDevices={{
		macbook: true,
		ipad: true,
		iphone: true
	}}
	orientation={{
		ipad: 'landscape',
		iphone: 'portrait'
	}}
/>

<!-- 8. ECHOIMPACT - Multi-Device Sustainability (3 images) -->
<FeaturesSlideIPhone
	featureItems={[]}
	currentFeature={{
		title: 'EchoImpact',
		description:
			'A smart ecosystem converting recycling efforts into measurable environmental progress.',
		image: '/img/echoimpact/iphone.png',
		active: true
	}}
	onFeatureHover={(index) => {
		return 0; // Placeholder for hover functionality
	}}
	reverse={false}
	title="EchoImpact"
	description="A smart ecosystem converting recycling efforts into measurable environmental progress."
	accentColor="#7c3aed"
	orientation="portrait"
/>

<!-- 9. SOCIALWALL - Single Image Web Showcase -->
<FeatureSlideWeb
	title="SocialWall"
	subtitle="Where Engagement Becomes Experience"
	description="A dynamic display platform transforming social buzz into immersive, moderated visual spectacles for events and campaigns."
	imageUrl="/img/socialwall/desktop.png"
	altText="SocialWall Live Display"
	accentColor="#7c3aed"
	features={[
		'Multi-Platform Hashtag Aggregation – Real-time feeds from 20+ social sources in a unified dashboard',
		'Realtime Moderation – Instant content filtering and approval for flawless curation',
		'Scalable Display Control – Unlimited screens with adaptive layouts for any venue or campaign'
	]}
	reverse={false}
/>

<!-- 10. QUOTATIONGATE - Multi-Device B2B  -->
<HeroSlide
	title="QuotationGate"
	subtitle="Digital Construction Procurement"
	description="A next-gen platform streamlining contractor-supplier connections through intelligent project matching"
	imageUrl="/img/qg/desktop.png"
	accentColor="#10b981"
/>

<!-- 11. DEVELOPMENT PROCESS -->
<ProductDevelopmentSlide />

<!-- 12. PORTFOLIO GALLERY -->
<GallerySlide
	title="Turn Your Idea Into Reality"
	description="Develop your idea into a product and iterate rapidly to validate it"
	galleryImages={portfolioGallery}
/>

<!-- 13. WEBSITE SHOWCASE - MASONRY -->
<MasonrySlide
	title="Website Development Showcase"
	subtitle="Discover our diverse portfolio of custom websites across various industries, each designed with unique requirements and user experiences in mind"
	websites={websiteShowcase}
	accentColor="#8b5cf6"
/>

<!-- 14. CLOSING CALL-TO-ACTION -->
<TextSlide
	text="Ready to Transform Your Ideas?"
	subText="Let's build something amazing together. Get in touch to discuss your next project and see how we can bring your vision to life."
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

	/* Full-page scroll snap for slides */
	:global(section),
	:global(.slide) {
		scroll-snap-align: start;
		scroll-snap-stop: always;
		min-height: 100vh;
	}

	/* Simple reveal animations */
	:global(.reveal) {
		opacity: 1;
		transform: translateY(0);
		transition:
			opacity 0.4s ease-out,
			transform 0.4s ease-out;
	}

	/* Custom accent colors for each app section */
	:global(.surplusbite-section) {
		--accent-color: #10b981;
	}
	:global(.fitbite-section) {
		--accent-color: #f59e0b;
	}
	:global(.echoimpact-section) {
		--accent-color: #059669;
	}
	:global(.particledrive-section) {
		--accent-color: #dc2626;
	}
	:global(.socialwall-section) {
		--accent-color: #7c3aed;
	}
	:global(.quotationgate-section) {
		--accent-color: #1e40af;
	}
</style>
