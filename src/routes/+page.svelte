<script lang="ts">
	import {
		HeroSlide,
		AboutMeSlide,
		TeamSlide,
		CompanySlide,
		FeaturesSlideIPhone,
		GallerySlide,
		MultiDeviceSlide,
		TextSlide,
		FeatureSlideWeb,
		ProductDevelopmentSlide,
		StepsSlide
	} from '$lib/slides';
	import TailwindMasonrySlide from '$lib/slides/TailwindMasonrySlide.svelte';
	import PricingSection from '$lib/components/PricingSection.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import type { PricingTier } from '$lib/stores/pricing';
	import type { StepItem } from '$lib/types/steps';

	// Company information for Moheera
	const moheeraCompany = {
		name: 'Moheera',
		tagline: 'From Creative Vision to Digital Reality',
		description:
			'Moheera is a founder-led technology consultancy in Dubai, specializing in transforming passionate ideas into market-ready digital products. We provide end-to-end guidance from initial concept validation to technical execution, serving entrepreneurs and companies across the MENA region and beyond.',
		logo: '/img/screenshot.png',
		values: [
			'Founder-Led Excellence',
			'Creative Partnership',
			'Technical Mastery',
			'Regional Expertise',
			'Trusted Execution'
		],
		achievements: [
			'50+ Projects Delivered',
			'12+ Years Experience',
			'Cross-Industry Expertise',
			'Dubai-Based, Globally Connected'
		],
		website: 'https://moheera.com'
	};

	// Team members and trusted network
	const teamMembers = [
		{
			name: 'Munzir Suliman',
			title: 'Founder & Lead Developer',
			image: '/img/me.jpg',
			bio: 'Full-stack developer and creative strategist with 12+ years turning ambitious ideas into successful digital products.',
			skills: [
				'Technical Leadership',
				'Product Strategy',
				'Full-Stack Development',
				'UX/UI Design',
				'Project Management'
			],
			linkedIn: 'https://linkedin.com/in/munzirsuliman',
			github: 'https://github.com/munzx'
		},
		{
			name: 'Creative Network',
			title: 'Specialized Design Partners',
			image: '/team-creative.jpg',
			bio: 'Curated network of UI/UX designers, brand specialists, and creative professionals for complex design challenges.',
			skills: [
				'UI/UX Design',
				'Brand Identity',
				'Motion Graphics',
				'User Research',
				'Creative Direction'
			]
		},
		{
			name: 'Technical Collective',
			title: 'Development Specialists',
			image: '/team-technical.jpg',
			bio: 'Trusted development partners for large-scale projects requiring specialized expertise or accelerated timelines.',
			skills: [
				'Mobile Development',
				'DevOps',
				'AI/ML Integration',
				'Blockchain',
				'Enterprise Solutions'
			]
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
	const websiteShowcase: { image: string; label?: 'live' | 'concept' }[] = [
		{ image: '/img/websites/4.png', label: 'live' },
		{ image: '/img/websites/9.png', label: 'live' },
		{ image: '/img/websites/5.png', label: 'live' },
		{ image: '/img/websites/10.png', label: 'concept' },
		{ image: '/img/websites/1.png', label: 'live' },
		{ image: '/img/websites/2.png', label: 'concept' },
		{ image: '/img/websites/3.png', label: 'concept' },
		{ image: '/img/websites/7.png', label: 'concept' },
		{ image: '/img/websites/6.png', label: 'live' },
		{ image: '/img/websites/11.png', label: 'live' }
	];

	// Pricing tiers configuration
	const pricingTiers: PricingTier[] = [
		{
			name: 'MVP Builder',
			range: '$8k - $25k',
			timeline: '4-8 weeks',
			ideal: 'Startups & entrepreneurs testing their first product idea',
			includes: [
				'MVP Development & Launch',
				'Core Features Implementation',
				'Mobile-Responsive Design',
				'Basic User Authentication',
				'Database Setup & Hosting',
				'1 Month Post-Launch Support'
			]
		},
		{
			name: 'Full Product',
			range: '$25k - $75k',
			timeline: '8-16 weeks',
			ideal: 'Established businesses ready to build a comprehensive solution',
			popular: true,
			includes: [
				'Complete Product Development',
				'Advanced Features & Integrations',
				'Custom UI/UX Design',
				'Admin Panel & Analytics',
				'Payment Processing',
				'API Development',
				'3 Months Post-Launch Support',
				'Performance Optimization'
			]
		},
		{
			name: 'Enterprise Solution',
			range: '$75k+',
			timeline: '16+ weeks',
			ideal: 'Large organizations needing complex, scalable systems',
			includes: [
				'Enterprise-Grade Architecture',
				'Advanced Security & Compliance',
				'Multi-Platform Development',
				'Third-Party Integrations',
				'Custom Workflows & Automation',
				'Dedicated Project Manager',
				'6 Months Post-Launch Support',
				'Staff Training & Documentation'
			]
		}
	];

	// How to work with us steps
	const workWithUsSteps: StepItem[] = [
		{
			title: 'Discovery Call',
			subtitle: "Validate Your Idea's Potential",
			description: [
				'Free 30-min strategy session ($500 value)',
				'Market viability & ROI assessment',
				'Walk away with actionable insights'
			]
		},
		{
			title: 'Proposal & Planning',
			subtitle: 'Fixed-Price Roadmap',
			description: [
				'Detailed proposal in 48 hours',
				'Milestone guarantees & timelines',
				'No surprises, transparent pricing'
			]
		},
		{
			title: 'Development & Delivery',
			subtitle: 'Founder-Led Execution',
			description: [
				'Weekly demos & progress updates',
				'Direct access to technical founder',
				'Code ownership from day one'
			]
		},
		{
			title: 'Launch & Support',
			subtitle: 'Success-Driven Launch',
			description: [
				'White-glove deployment & monitoring',
				'90-day performance tracking',
				'24hr response for critical issues'
			]
		}
	];
</script>

<svelte:head>
	<title>Moheera | Dubai-Based Digital Product Development</title>
	<meta
		name="description"
		content="Turn your creative idea into reality. Dubai-based founder-led consultancy specializing in full-stack development, product strategy, and digital transformation for passionate entrepreneurs."
	/>
</svelte:head>

<!-- 1. COMPANY INTRODUCTION -->
<CompanySlide
	title="Moheera"
	subtitle="Innovation. Excellence. Impact."
	company={moheeraCompany}
	accentColor="#10b981"
/>

<!-- 2. VISION STATEMENT -->
<TextSlide
	text="Have a Great Idea? Let's Build It Together"
	subText="We partner with passionate entrepreneurs and companies in Dubai and beyond to transform creative concepts into market-ready digital products"
/>

<!-- 3. ABOUT LEADERSHIP -->
<AboutMeSlide
	name="Munzir Suliman"
	title="Founder & Creative Technologist"
	description="I help passionate entrepreneurs turn their best ideas into reality. Based in Dubai with 12+ years of experience, I provide hands-on technical leadership and creative guidance from concept to launch. When you work with Moheera, you're working directly with me - no layers, no miscommunication, just focused execution."
	portfolioImage="/img/me.jpg"
	skills={[
		'Product Strategy & Validation',
		'Full-Stack Development',
		'UI/UX Design',
		'TypeScript/JavaScript',
		'Svelte/Node.js',
		'Python',
		'Machine Learning',
		'Agentic AI',
		'Team Leadership',
		'Technical Consultation',
		'Project Management'
	]}
	contactEmail="munzir.suliman@outlook.com"
	contactLinkedIn="https://linkedin.com/in/munzirsuliman"
	contactGitHub="https://github.com/munzirsuliman"
	experience="12+ years"
	projectsCompleted={50}
	accentColor="#10b981"
/>

<!-- 4. TEAM SHOWCASE -->
<TeamSlide
	title="The Moheera Advantage"
	subtitle="Founder-led expertise with specialized creative network"
	{teamMembers}
	accentColor="#ffffff"
/>

<!-- 5. PROJECT TYPES & APPROACH -->
<TextSlide
	text="We Partner With Visionaries Across Industries"
	subText="From social startups driving real-world change, to restaurants seeking bespoke ordering systems, to cutting-edge projects in Agentic LLMs, machine learning, and fintech innovation—we bring ideas to life. Whether you’re a Dubai entrepreneur ready to scale across the region, a global brand entering the MENA market, or a creative visionary with a breakthrough concept, we deliver the technical expertise and strategic insight to turn your vision into reality."
/>

<!-- 6. PORTFOLIO INTRODUCTION -->
<TextSlide
	text="Here's How We Turn Ideas Into Impact"
	subText="Each project starts with a passionate entrepreneur and a compelling vision. Here are some of the digital products we've brought to life - from concept to launch."
/>

<!-- 7. PARTICLEDRIVE - Multi-Device Commerce (3 images) -->
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
	accentColor="#ffffff"
	className="bg-gradient-to-br from-blue-900/40 via-black to-purple-900/40"
/>

<!-- 8. SURPLUSBITE - Multi-Device Showcase (3 images) -->
<MultiDeviceSlide
	title="SurplusBite"
	subtitle="The Intelligent Surplus Management"
	description="Smart surplus management connecting restaurants with charities to turn excess food into community nourishment—powered by automated logistics."
	images={{
		macbook: '/img/surplusbite/desktop.png',
		ipad: '/img/surplusbite/ipad.png',
		iphone: '/img/surplusbite/iphone.png'
	}}
	orientation={{
		ipad: 'landscape',
		iphone: 'portrait'
	}}
	accentColor="#ffffff"
	className="bg-gradient-to-br from-yellow-700/40 via-black to-yellow-900/40"
/>

<!-- 9. FITBITE - Multi-Device Platform (3 images) -->
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
	accentColor="#ffffff"
	className="bg-gradient-to-br from-orange-900/40 via-black to-red-900/40"
/>

<!-- 10. ECHOIMPACT - Multi-Device Sustainability (3 images) -->
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
	accentColor="#ffffff"
	orientation="portrait"
	className="bg-gradient-to-br from-green-900/40 via-black to-emerald-900/40"
/>

<!-- 11. SOCIALWALL - Single Image Web Showcase -->
<FeatureSlideWeb
	title="SocialWall"
	subtitle="Where Engagement Becomes Experience"
	description="A dynamic display platform transforming social buzz into immersive, moderated visual spectacles for events and campaigns."
	imageUrl="/img/socialwall/desktop.png"
	altText="SocialWall Live Display"
	features={[
		'Multi-Platform Hashtag Aggregation - Real-time feeds from 20+ social sources in a unified dashboard',
		'Realtime Moderation - Instant content filtering and approval for flawless curation',
		'Scalable Display Control - Unlimited screens with adaptive layouts for any venue or campaign'
	]}
	reverse={false}
	accentColor="#ffffff"
	className="bg-gradient-to-br from-yellow-900/40 via-black to-orange-900/40"
/>

<!-- 12. QUOTATIONGATE - Multi-Device B2B  -->
<HeroSlide
	title="QuotationGate"
	subtitle="Digital Construction Procurement"
	description="A next-gen platform streamlining contractor-supplier connections through intelligent project matching"
	imageUrl="/img/qg/desktop.png"
	accentColor="#ffffff"
	className="bg-gradient-to-br from-yellow-900/40 via-black to-white/40"
/>

<!-- 13. PROCESS INTRODUCTION -->
<TextSlide
	text="Behind Every Great Product Is a Proven Process"
	subText="Each project follows our battle-tested methodology that turns ideas into successful launches"
/>

<!-- 14. DEVELOPMENT PROCESS -->
<ProductDevelopmentSlide
	title="From Idea to Launch"
	subtitle="A Comprehensive Guide to Product Development"
	className="bg-black"
/>

<!-- 15. PORTFOLIO GALLERY -->
<GallerySlide
	title="Turn Your Idea Into Reality"
	description="Develop your idea into a product and iterate rapidly to validate it"
	galleryImages={portfolioGallery}
/>

<!-- 16. WEBSITE SHOWCASE - MASONRY -->
<TailwindMasonrySlide
	title="Recent Work"
	subtitle="Websites and landing pages spanning diverse industries, from live production sites to innovative design concepts"
	websites={websiteShowcase}
/>

<!-- 17. HOW TO WORK WITH US -->
<StepsSlide
	steps={workWithUsSteps}
	title="How to Work With Us"
	subtitle="A simple, transparent process from idea to launch"
	showFeedbackLoop={true}
	feedbackText="Continuous Communication"
	className="bg-black"
/>

<!-- 18. CLOSING CALL-TO-ACTION -->
<TextSlide
	text="Ready to Turn Your Idea Into Reality?"
	subText="Based in Dubai, serving ambitious entrepreneurs globally. Let's discuss your vision and create a roadmap to bring it to life."
	remarks="✓ Free consultation • ✓ 48-hour response guarantee • ✓ No obligations"
/>

<!-- 19. PRICING SECTION -->
<PricingSection
	{pricingTiers}
	title="Investment & Pricing"
	subtitle="Transparent pricing ranges to help you plan your project budget"
	className="bg-gradient-to-br from-emerald-900/50 via-black to-emerald-900/50"
/>

<!-- 20. CONTACT FORM -->
<ContactForm
	title="Start Your Project Today"
	subtitle="Tell me about your project and get a detailed proposal within 48 hours"
	className="bg-black"
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
