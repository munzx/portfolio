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
		FeaturesSlideIPad,
		FeaturesSlideMacBook,
		FeatureSlideWeb,
		ProductDevelopmentSlide,
		MasonrySlide
	} from '$lib/slides';
	import TailwindMasonrySlide from '$lib/slides/TailwindMasonrySlide.svelte';

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

	const moheeraStats: any = [
		{
			number: '50+',
			label: 'Projects Delivered',
			description: 'From MVP to full-scale platforms'
		},
		{
			number: '12+',
			label: 'Years Experience',
			description: 'Deep technical & creative expertise'
		},
		{
			number: '70%',
			label: 'Confidential Projects',
			description: 'Trusted by stealth startups & enterprises'
		},
		{
			number: '48hr',
			label: 'Response Time',
			description: 'Direct access to decision-maker'
		}
	];

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
			github: 'https://github.com/munzirsuliman'
		},
		{
			name: 'Creative Network',
			title: 'Specialized Design Partners',
			image: '/img/test2.png',
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
			image: '/img/test3.png',
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
	stats={moheeraStats}
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
		'React/Svelte/Node.js',
		'Team Leadership',
		'Technical Consultation',
		'Project Management'
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
	title="The Moheera Advantage"
	subtitle="Founder-led expertise with specialized creative network"
	{teamMembers}
	accentColor="#6366f1"
/>

<!-- 5. PROJECT TYPES & APPROACH -->
<TextSlide
	text="We Partner With Visionaries Across Industries"
	subText="From fintech startups seeking regulatory-compliant solutions, to restaurants needing custom ordering systems, to healthcare innovators building patient engagement platforms. Whether you're a Dubai-based entrepreneur with a regional expansion plan, an international company entering the MENA market, or a creative professional with a breakthrough concept - we provide the technical expertise and strategic guidance to make it happen."
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
/>

<!-- 8. SURPLUSBITE - Multi-Device Showcase (3 images) -->
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
	accentColor="#7c3aed"
	orientation="portrait"
/>

<!-- 11. SOCIALWALL - Single Image Web Showcase -->
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

<!-- 12. QUOTATIONGATE - Multi-Device B2B  -->
<HeroSlide
	title="QuotationGate"
	subtitle="Digital Construction Procurement"
	description="A next-gen platform streamlining contractor-supplier connections through intelligent project matching"
	imageUrl="/img/qg/desktop.png"
	accentColor="#10b981"
/>

<!-- 13. PROCESS INTRODUCTION -->
<TextSlide
	text="Behind Every Great Product Is a Proven Process"
	subText="Each project follows our battle-tested methodology that turns ideas into successful launches"
/>

<!-- 14. DEVELOPMENT PROCESS -->
<ProductDevelopmentSlide />

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

<!-- 17. CLOSING CALL-TO-ACTION -->
<TextSlide
	text="Ready to Turn Your Idea Into Reality?"
	subText="Based in Dubai, serving ambitious entrepreneurs globally. Let's discuss your vision and create a roadmap to bring it to life."
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
