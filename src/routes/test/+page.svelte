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
		}
	];

	// Gallery images showcasing all apps
	let portfolioGallery = [
		'/img/surplusbite/desktop.png', // SurplusBite
		'/img/fitbite/desktop.png', // FitBite
		'/img/echoimpact/desktop.png', // EchoImpact
		'/img/particledrive/desktop.png', // ParticleDrive
		'/img/socialwall/desktop.png', // SocialWall
		'/img/quotationgate/desktop.png' // QuotationGate
	];

	// Website showcase data - Real app screenshots for masonry layout
	const websiteShowcase = [
		{
			title: 'SurplusBite Platform',
			image: '/img/surplusbite/desktop.png',
			description: 'Food surplus management with automated donation matching',
			category: 'Sustainability',
			url: 'https://surplusbite.com'
		},
		{
			title: 'FitBite Mobile App',
			image: '/img/fitbite/iphone.png',
			description: 'Precision nutrition platform for fitness optimization',
			category: 'Health & Fitness',
			url: 'https://fitbite.app'
		},
		{
			title: 'EchoImpact Dashboard',
			image: '/img/echoimpact/desktop.png',
			description: 'Recycling tracking with environmental impact visualization',
			category: 'Environmental',
			url: 'https://echoimpact.org'
		},
		{
			title: 'ParticleDrive Marketplace',
			image: '/img/particledrive/desktop.png',
			description: 'AI-powered auto parts discovery and marketplace',
			category: 'E-commerce',
			url: 'https://particledrive.com'
		},
		{
			title: 'SocialWall Display',
			image: '/img/socialwall/desktop.png',
			description: 'Real-time social media aggregation and display platform',
			category: 'Social Media',
			url: 'https://socialwall.live'
		},
		{
			title: 'QuotationGate Portal',
			image: '/img/quotationgate/desktop.png',
			description: 'Construction procurement and project management platform',
			category: 'B2B Platform',
			url: 'https://quotationgate.com'
		},
		{
			title: 'FitBite Tablet View',
			image: '/img/fitbite/ipad.png',
			description: 'Nutrition dashboard optimized for tablets',
			category: 'Health & Fitness'
		},
		{
			title: 'EchoImpact Mobile',
			image: '/img/echoimpact/iphone.png',
			description: 'Mobile recycling tracker with rewards system',
			category: 'Environmental'
		},
		{
			title: 'ParticleDrive Catalog',
			image: '/img/particledrive/ipad.png',
			description: 'Parts catalog with advanced filtering and search',
			category: 'E-commerce'
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
	name="Moe Lehmando"
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

<!-- 5. SURPLUSBITE - Multi-Device Showcase (3 images) -->
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
		ipad: 'portrait',
		iphone: 'portrait'
	}}
/>

<!-- 6. FITBITE - Multi-Device Platform (3 images) -->
<MultiDeviceSlide
	title="FitBite"
	subtitle="Precision Nutrition Platform"
	description="A powerful meal optimization platform designed to elevate fitness outcomes through hyper-personalized nutrition."
	images={{
		macbook: '/img/surplusbite/desktop.png',
		ipad: '/img/surplusbite/ipad.png',
		iphone: '/img/surplusbite/iphone.png'
	}}
	showDevices={{
		macbook: true,
		ipad: true,
		iphone: false
	}}
/>

<!-- 7. ECHOIMPACT - Multi-Device Sustainability (3 images) -->
<MultiDeviceSlide
	title="EchoImpact"
	subtitle="Sustainable Action Platform"
	description="A smart ecosystem converting recycling efforts into measurable environmental progress."
	images={{
		macbook: '/img/echoimpact/desktop.png',
		ipad: '/img/echoimpact/ipad.png',
		iphone: '/img/echoimpact/iphone.png'
	}}
/>

<!-- 8. PARTICLEDRIVE - Multi-Device Commerce (3 images) -->
<MultiDeviceSlide
	title="ParticleDrive"
	subtitle="Auto Commerce Platform"
	description="An AI-curated marketplace revolutionizing auto part discovery and conversations with precision matching."
	images={{
		macbook: '/img/particledrive/desktop.png',
		ipad: '/img/particledrive/ipad.png',
		iphone: '/img/particledrive/iphone.png'
	}}
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
	badgeText="🎯 Event Technology"
	primaryButtonText="See Demo"
	secondaryButtonText="Learn More"
/>

<!-- 10. QUOTATIONGATE - Multi-Device B2B (3 images) -->
<MultiDeviceSlide
	title="QuotationGate"
	subtitle="Digital Construction Procurement"
	description="A next-gen platform streamlining contractor-supplier connections through intelligent project matching."
	images={{
		macbook: '/img/quotationgate/desktop.png',
		ipad: '/img/quotationgate/ipad.png',
		iphone: '/img/quotationgate/iphone.png'
	}}
/>

<!-- 11. DEVELOPMENT PROCESS -->
<ProductDevelopmentSlide />

<!-- 12. PORTFOLIO GALLERY -->
<GallerySlide galleryImages={portfolioGallery} centerIndex={0} />

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
			opacity 0.8s ease-out,
			transform 0.8s ease-out;
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
