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

	// SurplusBite - Food surplus management
	const surplusBiteFeatures = [
		{
			title: 'Instant Surplus Posting',
			description: 'Effortless uploads turn excess meals into actionable donations in seconds.',
			image: '/img/test.png',
			active: true
		},
		{
			title: 'Automated Local Matching',
			description:
				'Dynamically connects surplus with nearby food banks, minimizing waste and maximizing impact.',
			image: '/img/test2.png',
			active: false
		},
		{
			title: 'Real-Time Impact Analytics',
			description: 'Transparent tracking showcases tangible community contributions.',
			image: '/img/test3.png',
			active: false
		}
	];

	// FitBite - Fitness nutrition
	const fitBiteFeatures = [
		{
			title: 'Smart Meal Generation',
			description: 'Algorithmically crafted meal plans align perfectly with fitness objectives.',
			image: '/img/test2.png',
			active: true
		},
		{
			title: 'Macro-Balanced Intelligence',
			description: 'Automated nutrient optimization ensures peak performance fueling.',
			image: '/img/test3.png',
			active: false
		},
		{
			title: 'Dynamic Calorie Adaptation',
			description: 'Evolving recommendations adjust to progress and changing goals.',
			image: '/img/test.png',
			active: false
		}
	];

	// EchoImpact - Sustainability platform
	const echoImpactFeatures = [
		{
			title: 'Waste-to-Rewards Engine',
			description: 'Instant point generation for every logged recycled material.',
			image: '/img/test3.png',
			active: true
		},
		{
			title: 'Impact Visualization',
			description:
				'Real-time dashboards display recycled waste transformed into community projects.',
			image: '/img/test.png',
			active: false
		},
		{
			title: 'Competitive Eco-Engagement',
			description: 'Leaderboards and badges incentivize collective sustainability.',
			image: '/img/test2.png',
			active: false
		}
	];

	// ParticleDrive - Auto parts marketplace
	const particleDriveFeatures = [
		{
			title: 'Natural Language Search',
			description:
				'Conversational queries connect sellers and deliver exact part matches without manual filters.',
			image: '/img/test.png',
			active: true
		},
		{
			title: 'Cross-Compatibility Verification',
			description: 'Instant identification and categorization across makes, models, and years.',
			image: '/img/test2.png',
			active: false
		},
		{
			title: 'Seamless Seller Integration',
			description: 'Direct messaging and real-time inventory sync accelerate purchases.',
			image: '/img/test3.png',
			active: false
		}
	];

	// SocialWall - Social media display
	const socialWallFeatures = [
		{
			title: 'Multi-Platform Aggregation',
			description: 'Real-time feeds from 20+ social sources in a unified dashboard.',
			image: '/img/test2.png',
			active: true
		},
		{
			title: 'Realtime Moderation',
			description: 'Instant content filtering and approval for flawless curation.',
			image: '/img/test3.png',
			active: false
		},
		{
			title: 'Scalable Display Control',
			description: 'Unlimited screens with adaptive layouts for any venue or campaign.',
			image: '/img/test.png',
			active: false
		}
	];

	// QuotationGate - Construction procurement
	const quotationGateFeatures = [
		{
			title: 'Rapid Project Mobilization',
			description: 'Instant uploads broadcast project specs to pre-vetted suppliers.',
			image: '/img/test3.png',
			active: true
		},
		{
			title: 'Partner Matching',
			description: 'Precision connections based on location, specialty, and capability.',
			image: '/img/test.png',
			active: false
		},
		{
			title: 'Collaborative Quote Ecosystem',
			description: 'Live bid comparison, negotiation, and approval in a unified workspace.',
			image: '/img/test2.png',
			active: false
		}
	];

	// Gallery images showcasing all apps
	let portfolioGallery = [
		'/img/test.png', // SurplusBite
		'/img/test2.png', // FitBite
		'/img/test3.png', // EchoImpact
		'/img/test.png', // ParticleDrive
		'/img/test2.png', // SocialWall
		'/img/test3.png' // QuotationGate
	];

	// Website showcase data - examples for masonry layout
	const websiteShowcase = [
		{
			title: 'E-commerce Platform',
			image: '/img/test.png',
			description: 'Modern online store with advanced filtering and checkout flow',
			category: 'E-commerce',
			url: 'https://example.com'
		},
		{
			title: 'Healthcare Portal',
			image: '/img/test2.png',
			description: 'Patient management system with appointment scheduling',
			category: 'Healthcare',
			url: 'https://example.com'
		},
		{
			title: 'Financial Dashboard',
			image: '/img/test3.png',
			description: 'Real-time analytics and reporting for financial institutions',
			category: 'Finance'
		},
		{
			title: 'Educational Platform',
			image: '/img/test.png',
			description: 'Online learning management system with video courses',
			category: 'Education',
			url: 'https://example.com'
		},
		{
			title: 'Restaurant Website',
			image: '/img/test2.png',
			description: 'Beautiful restaurant site with online reservations',
			category: 'Hospitality'
		},
		{
			title: 'Real Estate Portal',
			image: '/img/test3.png',
			description: 'Property listings with virtual tours and mortgage calculator',
			category: 'Real Estate',
			url: 'https://example.com'
		}
	];

	// Feature interaction states
	let currentSurplusBite = surplusBiteFeatures[0];
	let currentFitBite = fitBiteFeatures[0];
	let currentEchoImpact = echoImpactFeatures[0];
	let currentParticleDrive = particleDriveFeatures[0];
	let currentSocialWall = socialWallFeatures[0];
	let currentQuotationGate = quotationGateFeatures[0];

	// Feature hover handlers
	function handleSurplusBiteHover(index: number) {
		surplusBiteFeatures.forEach((item, i) => (item.active = i === index));
		currentSurplusBite = surplusBiteFeatures[index];
	}

	function handleFitBiteHover(index: number) {
		fitBiteFeatures.forEach((item, i) => (item.active = i === index));
		currentFitBite = fitBiteFeatures[index];
	}

	function handleEchoImpactHover(index: number) {
		echoImpactFeatures.forEach((item, i) => (item.active = i === index));
		currentEchoImpact = echoImpactFeatures[index];
	}

	function handleParticleDriveHover(index: number) {
		particleDriveFeatures.forEach((item, i) => (item.active = i === index));
		currentParticleDrive = particleDriveFeatures[index];
	}

	function handleSocialWallHover(index: number) {
		socialWallFeatures.forEach((item, i) => (item.active = i === index));
		currentSocialWall = socialWallFeatures[index];
	}

	function handleQuotationGateHover(index: number) {
		quotationGateFeatures.forEach((item, i) => (item.active = i === index));
		currentQuotationGate = quotationGateFeatures[index];
	}

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

<!-- 5. SURPLUSBITE - Web Showcase -->
<FeatureSlideWeb
	title="SurplusBite"
	subtitle="The Intelligent Surplus Management"
	description="A seamless platform transforming food surplus into community nourishment through automated donation management."
	imageUrl="/img/test.png"
	altText="SurplusBite Dashboard"
	accentColor="#10b981"
	features={[
		'Instant Surplus Posting – Effortless uploads turn excess meals into actionable donations in seconds',
		'Automated Local Matching – Dynamically connects surplus with nearby food banks, minimizing waste and maximizing impact',
		'Real-Time Impact Analytics – Transparent tracking showcases tangible community contributions'
	]}
	badgeText="🌱 Sustainability Focus"
	primaryButtonText="View Demo"
	secondaryButtonText="Learn More"
/>

<!-- 6. FITBITE - Mobile First -->
<FeaturesSlideIPhone
	featureItems={fitBiteFeatures}
	currentFeature={currentFitBite}
	onFeatureHover={handleFitBiteHover}
	reverse={false}
	title="FitBite<br />Precision Nutrition"
	description="A powerful meal optimization platform designed to elevate fitness outcomes through hyper-personalized nutrition."
	accentColor="#f59e0b"
/>

<!-- 7. ECHOIMPACT - MacBook Professional -->
<FeaturesSlideMacBook
	featureItems={echoImpactFeatures}
	currentFeature={currentEchoImpact}
	onFeatureHover={handleEchoImpactHover}
	reverse={true}
	title="EchoImpact<br />Sustainable Action"
	description="A smart ecosystem converting recycling efforts into measurable environmental progress."
	accentColor="#059669"
/>

<!-- 8. PARTICLEDRIVE - iPad Commerce -->
<FeaturesSlideIPad
	featureItems={particleDriveFeatures}
	currentFeature={currentParticleDrive}
	onFeatureHover={handleParticleDriveHover}
	reverse={false}
	title="ParticleDrive<br />Auto Commerce"
	description="An AI-curated marketplace revolutionizing auto part discovery and conversations with precision matching."
	accentColor="#dc2626"
/>

<!-- 9. SOCIALWALL - Multi-Device Perfect -->
<MultiDeviceSlide
	assetLibraryImage="/img/test2.png"
	feedbackImage="/img/test3.png"
	liveCanvasImage="/img/test.png"
	title="SocialWall: Multi-Platform Excellence"
	description="Where engagement becomes experience. A dynamic display platform transforming social buzz into immersive visual spectacles."
	accentColor="#7c3aed"
/>

<!-- 10. QUOTATIONGATE - Professional Web App -->
<FeatureSlideWeb
	title="QuotationGate"
	subtitle="The Digital Backbone of Construction Procurement"
	description="A next-gen platform streamlining contractor-supplier connections through intelligent project matching."
	imageUrl="/img/test3.png"
	altText="QuotationGate Platform"
	accentColor="#1e40af"
	features={[
		'Rapid Project Mobilization – Instant uploads broadcast project specs to pre-vetted suppliers',
		'Partner Matching – Precision connections based on location, specialty, and capability',
		'Collaborative Quote Ecosystem – Live bid comparison, negotiation, and approval in a unified workspace'
	]}
	reverse={true}
	badgeText="🏗️ B2B Platform"
	primaryButtonText="Start Free Trial"
	secondaryButtonText="Request Demo"
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
