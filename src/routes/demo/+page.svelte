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

	// Company information for the portfolio
	const portfolioCompany = {
		name: 'Digital Innovation Studio',
		tagline: 'Transforming Ideas Into Impact',
		description:
			'We create digital solutions that solve real-world problems and drive meaningful change. From sustainability platforms to fitness apps, our portfolio showcases innovation across diverse industries.',
		logo: '/img/logo.png',
		values: [
			'Innovation',
			'Impact',
			'Sustainability',
			'User-Centric Design',
			'Technical Excellence'
		],
		achievements: [
			'6 successful product launches',
			'50,000+ active users across platforms',
			'3 sustainability-focused solutions',
			'98% client satisfaction rate'
		],
		website: 'https://portfolio.com'
	};

	const portfolioStats = [
		{ label: 'Apps Launched', value: '6', color: '#10b981' },
		{ label: 'Active Users', value: '50K+', color: '#0071e3' },
		{ label: 'Industries Served', value: '8', color: '#7c3aed' },
		{ label: 'Client Satisfaction', value: '98%', color: '#f59e0b' }
	];

	// Team members
	const teamMembers = [
		{
			name: 'Alex Chen',
			title: 'Lead Product Designer',
			image: '/img/test2.png',
			bio: 'Passionate about creating user-centered designs that solve real problems and create lasting impact.',
			skills: ['Product Design', 'User Research', 'Prototyping', 'Design Systems', 'Figma'],
			linkedIn: 'https://linkedin.com/in/alexchen',
			website: 'https://alexchen.design'
		},
		{
			name: 'Jordan Martinez',
			title: 'Full Stack Engineer',
			image: '/img/test3.png',
			bio: 'Building scalable, performant applications with modern technologies and clean architecture.',
			skills: ['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker'],
			github: 'https://github.com/jordanmartinez',
			linkedIn: 'https://linkedin.com/in/jordanmartinez'
		},
		{
			name: 'Riley Thompson',
			title: 'Mobile Developer',
			image: '/img/test.png',
			bio: 'Crafting beautiful, responsive mobile experiences that users love and businesses need.',
			skills: ['React Native', 'Swift', 'Kotlin', 'Flutter', 'Mobile UX'],
			github: 'https://github.com/rileythompson',
			linkedIn: 'https://linkedin.com/in/rileythompson'
		},
		{
			name: 'Sam Williams',
			title: 'Data Engineer',
			image: '/img/me.jpg',
			bio: 'Turning data into insights and building intelligent systems that power our applications.',
			skills: ['Python', 'Machine Learning', 'PostgreSQL', 'Analytics', 'AI/ML'],
			github: 'https://github.com/samwilliams',
			linkedIn: 'https://linkedin.com/in/samwilliams'
		}
	];

	// Gallery images showcasing all apps
	let portfolioGallery = [
		'/img/surplusbite/desktop.png',
		'/img/fitbite/desktop.png',
		'/img/echoimpact/desktop.png',
		'/img/particledrive/desktop.png',
		'/img/socialwall/desktop.png',
		'/img/quotationgate/desktop.png'
	];

	// Website showcase data for masonry layout
	const websiteShowcase = [
		{
			title: 'SurplusBite Platform',
			image: '/img/surplusbite/desktop.png',
			description:
				'Connecting community surplus with those in need through intelligent donation management',
			category: 'Sustainability',
			url: 'https://surplusbite.com'
		},
		{
			title: 'FitBite Mobile App',
			image: '/img/fitbite/iphone.png',
			description: 'Intelligent meal planning tailored to fitness goals with macro tracking',
			category: 'Health & Fitness',
			url: 'https://fitbite.app'
		},
		{
			title: 'EchoImpact Dashboard',
			image: '/img/echoimpact/desktop.png',
			description: 'Turn recycling actions into measurable environmental impact',
			category: 'Environmental',
			url: 'https://echoimpact.org'
		},
		{
			title: 'ParticleDrive Marketplace',
			image: '/img/particledrive/desktop.png',
			description: 'AI-powered auto parts search with seamless buyer-seller connections',
			category: 'E-commerce',
			url: 'https://particledrive.com'
		},
		{
			title: 'SocialWall Display',
			image: '/img/socialwall/desktop.png',
			description: 'Transform social buzz into powerful visual experiences',
			category: 'Social Media',
			url: 'https://socialwall.live'
		},
		{
			title: 'QuotationGate Portal',
			image: '/img/quotationgate/desktop.png',
			description: 'Revolutionizing construction procurement through intelligent project matching',
			category: 'B2B Platform',
			url: 'https://quotationgate.com'
		}
	];

	onMount(() => {
		// Smooth scroll implementation
	});
</script>

<svelte:head>
	<title>Digital Innovation Portfolio | Solutions That Transform Industries</title>
	<meta
		name="description"
		content="Explore our portfolio of innovative digital solutions across sustainability, fitness, environmental impact, and more."
	/>
</svelte:head>

<!-- 1. HERO INTRODUCTION -->
<HeroSlide imageUrl="/img/screenshot.png" accentColor="#0071e3" />

<!-- 2. COMPANY OVERVIEW -->
<CompanySlide
	title="Digital Innovation Studio"
	subtitle="Where Technology Meets Purpose"
	company={portfolioCompany}
	stats={portfolioStats}
	accentColor="#0071e3"
/>

<!-- 3. VISION STATEMENT -->
<TextSlide
	text="Building Solutions That Matter"
	subText="We create digital experiences that solve real problems, drive sustainability, and empower communities across diverse industries"
/>

<!-- 4. TEAM SHOWCASE -->
<TeamSlide
	title="Meet Our Team"
	subtitle="The innovators behind our digital solutions"
	{teamMembers}
	accentColor="#6366f1"
/>

<!-- 5. SURPLUSBITE - Stop food waste, Start community impact -->
<MultiDeviceSlide
	title="SurplusBite"
	subtitle="Stop food waste. Start community impact."
	description="SurplusBite connects community surplus with those in need through intelligent donation management, making food waste reduction effortless and impactful."
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

<FeatureSlideWeb
	title="SurplusBite Features"
	subtitle="Comprehensive Food Waste Management"
	description="Every feature designed to make surplus food distribution seamless and trackable"
	imageUrl="/img/surplusbite/desktop.png"
	altText="SurplusBite Dashboard"
	accentColor="#10b981"
	features={[
		'Post surplus meals in seconds – Quick listing with smart categorization',
		'Auto-match with local food banks – AI-powered connection to nearby organizations',
		'Track community impact – Real-time metrics on meals saved and people helped',
		'Manage multiple locations – Centralized control for businesses with multiple sites',
		'Full donation lifecycle visibility – Complete tracking from posting to delivery'
	]}
	reverse={false}
/>

<!-- 6. FITBITE - Fuel your fitness, Master your meals -->
<MultiDeviceSlide
	title="FitBite"
	subtitle="Fuel your fitness. Master your meals."
	description="FitBite transforms your nutrition journey with intelligent meal planning tailored to your goals, making healthy eating effortless and effective."
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
/>

<FeaturesSlideIPad
	featureItems={[
		{
			title: 'Smart Meal Planning',
			description:
				'Plan meals in seconds with smart recommendations based on your fitness targets.',
			image: '/img/fitbite/ipad.png',
			active: true
		},
		{
			title: 'Macro Perfection',
			description: 'Track protein, carbs, and fat automatically balanced for optimal results.',
			image: '/img/fitbite/ipad.png',
			active: false
		},
		{
			title: 'Custom Calorie Goals',
			description: 'Personalized nutrition that adapts to your unique needs and goals.',
			image: '/img/fitbite/ipad.png',
			active: false
		},
		{
			title: 'Progress Visibility',
			description: 'See your nutrition wins and optimize daily performance metrics.',
			image: '/img/fitbite/ipad.png',
			active: false
		}
	]}
	currentFeature={{
		title: 'Smart Meal Planning',
		description: 'Plan meals in seconds with smart recommendations based on your fitness targets.',
		image: '/img/fitbite/ipad.png',
		active: true
	}}
	onFeatureHover={(index) => index}
	reverse={true}
	title="FitBite Intelligence"
	description="Advanced nutrition tracking that adapts to your fitness journey"
	accentColor="#f59e0b"
/>

<!-- 7. ECHOIMPACT - Recycle smart, Earn rewards, Change the planet -->
<MultiDeviceSlide
	title="EchoImpact"
	subtitle="Recycle smart. Earn rewards. Change the planet."
	description="Turn every recycling action into measurable environmental impact through intelligent tracking and community rewards that motivate lasting change."
	images={{
		macbook: '/img/echoimpact/desktop.png',
		ipad: '/img/echoimpact/ipad.png',
		iphone: '/img/echoimpact/iphone.png'
	}}
/>

<FeatureSlideWeb
	title="EchoImpact System"
	subtitle="Gamified Environmental Action"
	description="Making recycling rewarding and environmental impact visible to everyone"
	imageUrl="/img/echoimpact/desktop.png"
	altText="EchoImpact Dashboard"
	accentColor="#059669"
	features={[
		'Log materials instantly – Earn points for every recycled item with smart recognition',
		'See real impact – Watch waste transform into construction projects and community benefits',
		'Find drop-off points – Interactive map of nearby recycling locations and centers',
		'Compete locally – Climb community leaderboards and challenge neighbors',
		'Unlock badges – Reward consistent eco-action with achievements and recognition'
	]}
	reverse={true}
/>

<!-- 8. PARTICLEDRIVE - Find parts fast, Buy smart, Drive confident -->
<MultiDeviceSlide
	title="ParticleDrive"
	subtitle="Find parts fast. Buy smart. Drive confident."
	description="ParticleDrive revolutionizes auto parts shopping with AI-powered search and seamless buyer-seller connections for the modern automotive marketplace."
	images={{
		macbook: '/img/particledrive/desktop.png',
		ipad: '/img/particledrive/ipad.png',
		iphone: '/img/particledrive/iphone.png'
	}}
	orientation={{
		ipad: 'portrait',
		iphone: 'landscape'
	}}
/>

<FeaturesSlideIPhone
	featureItems={[
		{
			title: 'AI-Guided Search',
			description: 'Describe your needs in plain English, get perfect part matches instantly.',
			image: '/img/particledrive/iphone.png',
			active: true
		},
		{
			title: 'Smart Compatibility',
			description: 'Instant vehicle matching across makes, models, and years for perfect fit.',
			image: '/img/particledrive/iphone.png',
			active: false
		},
		{
			title: 'Direct Seller Chat',
			description: 'Message sellers instantly about specific parts and negotiate deals.',
			image: '/img/particledrive/iphone.png',
			active: false
		},
		{
			title: 'Complete Marketplace',
			description: 'New, used, refurbished parts from verified sellers in one platform.',
			image: '/img/particledrive/iphone.png',
			active: false
		}
	]}
	currentFeature={{
		title: 'AI-Guided Search',
		description: 'Describe your needs in plain English, get perfect part matches instantly.',
		image: '/img/particledrive/iphone.png',
		active: true
	}}
	onFeatureHover={(index) => index}
	reverse={false}
	title="ParticleDrive Intelligence"
	description="Revolutionary auto parts discovery powered by AI"
	accentColor="#dc2626"
/>

<!-- 9. SOCIALWALL - Amplify engagement, Display impact -->
<MultiDeviceSlide
	title="SocialWall"
	subtitle="Amplify engagement. Display impact."
	description="SocialWall creates social buzz and turns it into powerful visual experiences with intelligent moderation and seamless multi-screen control."
	images={{
		macbook: '/img/socialwall/desktop.png',
		ipad: '/img/socialwall/ipad.png',
		iphone: '/img/socialwall/iphone.png'
	}}
/>

<FeaturesSlideMacBook
	featureItems={[
		{
			title: 'Multi-Platform Monitoring',
			description: 'Monitor 20+ hashtags across Twitter and Instagram feeds in real-time.',
			image: '/img/socialwall/desktop.png',
			active: true
		},
		{
			title: 'One-Click Moderation',
			description: 'Approve, feature, or block content instantly with intelligent filtering.',
			image: '/img/socialwall/desktop.png',
			active: false
		},
		{
			title: 'Unlimited Displays',
			description: 'Custom screens with smart orientation control for any venue.',
			image: '/img/socialwall/desktop.png',
			active: false
		},
		{
			title: 'Live Analytics',
			description: 'Track reach, engagement, and social momentum in real-time.',
			image: '/img/socialwall/desktop.png',
			active: false
		}
	]}
	currentFeature={{
		title: 'Multi-Platform Monitoring',
		description: 'Monitor 20+ hashtags across Twitter and Instagram feeds in real-time.',
		image: '/img/socialwall/desktop.png',
		active: true
	}}
	onFeatureHover={(index) => index}
	reverse={true}
	title="SocialWall Control Center"
	description="Professional social media display management"
	accentColor="#7c3aed"
/>

<!-- 10. QUOTATIONGATE - Connect projects, Get quotes, Build faster -->
<MultiDeviceSlide
	title="QuotationGate"
	subtitle="Connect projects. Get quotes. Build faster."
	description="QuotationGate revolutionizes construction procurement by connecting contractors, suppliers, and service providers through intelligent project matching."
	images={{
		macbook: '/img/quotationgate/desktop.png',
		ipad: '/img/quotationgate/ipad.png',
		iphone: '/img/quotationgate/iphone.png'
	}}
/>

<FeatureSlideWeb
	title="QuotationGate Platform"
	subtitle="Complete Construction Procurement"
	description="Streamlining the entire construction supply chain from project posting to completion"
	imageUrl="/img/quotationgate/desktop.png"
	altText="QuotationGate Platform"
	accentColor="#1e40af"
	features={[
		'Post projects instantly – Upload specs, reach verified suppliers in seconds',
		'Smart contractor matching – Intelligent connections by location and expertise',
		'Real-time quotations – Submit, compare, approve quotes with live collaboration',
		'Complete marketplace – Materials, services, contractors all in one platform',
		'Project tracking – Full lifecycle visibility from inquiry to completion',
		'Integrated payments – Secure transactions with built-in gateway system'
	]}
	reverse={false}
/>

<!-- 11. DEVELOPMENT PROCESS -->
<ProductDevelopmentSlide />

<!-- 12. PORTFOLIO GALLERY -->
<GallerySlide galleryImages={portfolioGallery} centerIndex={0} />

<!-- 13. WEBSITE SHOWCASE - MASONRY -->
<MasonrySlide
	title="Portfolio Showcase"
	subtitle="Diverse digital solutions across industries, each crafted with purpose and precision to solve real-world challenges"
	websites={websiteShowcase}
	accentColor="#8b5cf6"
/>

<!-- 14. ABOUT THE CREATOR -->
<AboutMeSlide
	name="Your Name"
	title="Digital Solution Architect"
	description="Passionate about creating meaningful digital experiences that solve real problems and drive positive change across industries."
	portfolioImage="/img/me.jpg"
	skills={[
		'Full-Stack Development',
		'Product Strategy',
		'UI/UX Design',
		'System Architecture',
		'AI Integration',
		'Sustainability Tech'
	]}
	contactEmail="your.email@example.com"
	contactLinkedIn="https://linkedin.com/in/yourprofile"
	contactGitHub="https://github.com/yourprofile"
	experience="8+ years"
	projectsCompleted={25}
	accentColor="#0071e3"
/>

<!-- 15. CLOSING CALL-TO-ACTION -->
<TextSlide
	text="Ready to Build Something Amazing?"
	subText="Let's collaborate to create digital solutions that make a real difference. Reach out to discuss your next innovative project."
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
