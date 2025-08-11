<script lang="ts">
	import {
		TextSlide,
		AboutMeSlide,
		FeatureSlideWeb,
		ProductDevelopmentSlide,
		BaseSlide,
		CompanySlide,
		TeamSlide,
		MultiDeviceSlide,
		TailwindMasonrySlide,
		PricingSection,
		ContactForm,
		type PricingTier
	} from '$lib';

	// Real company data from portfolio
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

	// Enhanced stats with conversion focus
	const moheeraStats = [
		{
			label: 'Projects Delivered',
			value: '50+'
		},
		{
			label: 'Years Experience',
			value: '12+'
		},
		{
			label: 'Client Success Rate',
			value: '95%'
		},
		{
			label: 'Response Guarantee',
			value: '48hr'
		}
	];

	// Real team members from portfolio
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

	// Real portfolio gallery from main portfolio
	let portfolioGallery = [
		'/img/surplusbite/desktop.png', // SurplusBite
		'/img/fitbite/desktop.png', // FitBite
		'/img/echoimpact/iphone.png', // EchoImpact
		'/img/particledrive/desktop.png', // ParticleDrive
		'/img/socialwall/desktop.png', // SocialWall
		'/img/qg/desktop.png' // QuotationGate
	];

	// Real website showcase data
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

	// Process timeline data optimized for conversion
	const engagementProcess = [
		{
			step: '1',
			title: 'Discovery Call',
			duration: '30 minutes',
			description: 'Free consultation to understand your vision, goals, and technical requirements',
			deliverable: 'Project feasibility assessment'
		},
		{
			step: '2',
			title: 'Proposal & Roadmap',
			duration: '2-3 days',
			description: 'Detailed project scope, timeline, and technical architecture proposal',
			deliverable: 'Complete project roadmap with milestones'
		},
		{
			step: '3',
			title: 'Kickoff & Planning',
			duration: '1 week',
			description: 'Sprint planning, design system creation, and development environment setup',
			deliverable: 'Project kickoff with clear next steps'
		},
		{
			step: '4',
			title: 'Development Sprints',
			duration: 'Ongoing',
			description: 'Iterative development with weekly demos and continuous client feedback',
			deliverable: 'Working MVP and regular progress updates'
		}
	];

	// Pricing framework
	const pricingTiers: PricingTier[] = [
		{
			name: 'MVP Development',
			range: '$8k - $25k',
			timeline: '4-8 weeks',
			ideal: 'Startups & early-stage validation',
			includes: [
				'Core functionality development',
				'Basic UI/UX design',
				'Mobile responsive',
				'Basic testing & deployment',
				'2 weeks post-launch support'
			]
		},
		{
			name: 'Full Product Development',
			range: '$25k - $75k',
			timeline: '2-4 months',
			ideal: 'Growing businesses & scale-ready products',
			includes: [
				'Complete product development',
				'Advanced UI/UX design',
				'Admin dashboard',
				'API integrations',
				'Comprehensive testing',
				'3 months post-launch support'
			],
			popular: true
		},
		{
			name: 'Enterprise Solutions',
			range: '$75k+',
			timeline: '4+ months',
			ideal: 'Established companies & complex systems',
			includes: [
				'Enterprise-grade architecture',
				'Advanced security & compliance',
				'Multiple integrations',
				'Scalable infrastructure',
				'Ongoing maintenance & support',
				'Dedicated project management'
			]
		}
	];

	// Enhanced testimonials based on real project types
	const testimonials = [
		{
			name: 'Sarah Al-Mansouri',
			title: 'Founder, SurplusBite',
			company: 'Food Tech Startup',
			quote:
				'Munzir turned our food waste reduction idea into a full platform that connects restaurants with charities. His understanding of both the technical and social impact aspects was incredible.',
			result: 'Reduced food waste by 40% for partner restaurants',
			image: '/img/surplusbite/desktop.png'
		},
		{
			name: 'Ahmed Khalil',
			title: 'CEO, ParticleDrive',
			company: 'Auto Parts Marketplace',
			quote:
				'Working with Moheera was like having a technical co-founder. The AI-powered search and matching system he built revolutionized how our customers find parts.',
			result: '300% increase in successful part matches',
			image: '/img/particledrive/desktop.png'
		},
		{
			name: 'Dr. Maria Santos',
			title: 'Founder, FitBite',
			company: 'Health & Nutrition Platform',
			quote:
				'Munzir delivered a sophisticated nutrition platform that handles complex meal optimization algorithms. The attention to both user experience and scientific accuracy was outstanding.',
			result: 'Users achieved 65% better fitness outcomes',
			image: '/img/fitbite/desktop.png'
		}
	];

	// Real project case studies for portfolio sections
	const projectCaseStudies = [
		{
			title: 'SurplusBite',
			subtitle: 'Intelligent Food Surplus Management',
			description:
				'Transforming food waste into community nourishment through automated donation matching and logistics.',
			challenge:
				'Restaurants waste tons of food daily while communities face hunger. Need platform to connect surplus with need.',
			solution:
				'Built AI-powered matching system with real-time inventory tracking and automated donation coordination.',
			results: [
				'40% food waste reduction',
				'500+ meals redistributed daily',
				'50+ restaurant partners'
			],
			tech: ['React', 'Node.js', 'PostgreSQL', 'Maps API', 'Real-time notifications'],
			images: {
				macbook: '/img/surplusbite/desktop.png',
				ipad: '/img/surplusbite/ipad.png',
				iphone: '/img/surplusbite/iphone.png'
			}
		},
		{
			title: 'ParticleDrive',
			subtitle: 'AI-Powered Auto Parts Discovery',
			description:
				'Revolutionary marketplace using computer vision and AI to match auto parts with precision.',
			challenge:
				'Auto part discovery is time-consuming and error-prone. Customers struggle to find exact matches.',
			solution:
				'Developed AI visual recognition system with natural language search and compatibility verification.',
			results: ['300% faster part discovery', '95% match accuracy', '200K+ parts cataloged'],
			tech: ['Python', 'TensorFlow', 'React', 'MongoDB', 'Computer Vision'],
			images: {
				macbook: '/img/particledrive/desktop3.png',
				ipad: '/img/particledrive/ipad2.png',
				iphone: '/img/particledrive/iphone.png'
			}
		},
		{
			title: 'FitBite',
			subtitle: 'Precision Nutrition Platform',
			description:
				'Hyper-personalized nutrition optimization using advanced algorithms and user biometrics.',
			challenge:
				'Generic nutrition advice fails. Need personalized meal planning based on individual goals and constraints.',
			solution:
				'Created AI nutrition engine with biometric integration and real-time meal optimization algorithms.',
			results: ['65% better user outcomes', '90% meal plan adherence', '10K+ active users'],
			tech: [
				'Python',
				'React Native',
				'Machine Learning',
				'Nutritional APIs',
				'Wearable integration'
			],
			images: {
				macbook: '/img/fitbite/desktop.png',
				ipad: '/img/fitbite/ipad.png',
				iphone: '/img/fitbite/iphone.png'
			}
		}
	];

	// Urgency and scarcity elements
	const availabilityData = {
		currentCapacity: '2 new projects',
		nextAvailable: 'March 2025',
		recentInquiries: '15+ inquiries this month',
		responseTime: '48 hours guaranteed'
	};
</script>

<svelte:head>
	<title>Turn Your Idea Into Reality | Moheera Dubai</title>
	<meta
		name="description"
		content="Ready to build your dream product? Work directly with Munzir Suliman, Dubai's leading product developer. 50+ successful launches, 48hr response guarantee. Book your free consultation today."
	/>
</svelte:head>

<!-- 1. HERO WITH URGENCY & CLEAR VALUE PROP -->
<BaseSlide className="bg-gradient-to-br from-blue-900 via-black to-purple-900 text-[#f5f5f7]">
	<div class="flex h-full w-full max-w-6xl items-center px-8">
		<div class="grid w-full items-center gap-12 lg:grid-cols-2">
			<!-- Left: Compelling headline and CTA -->
			<div class="space-y-8">
				<!-- Urgency/Scarcity Badge -->
				<div
					class="inline-flex items-center rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2"
				>
					<div class="mr-2 h-2 w-2 animate-pulse rounded-full bg-yellow-400"></div>
					<span class="text-sm text-yellow-300"
						>Only {availabilityData.currentCapacity} spots available for {availabilityData.nextAvailable}</span
					>
				</div>

				<div>
					<h1 class="mb-6 text-5xl leading-tight font-bold text-white lg:text-6xl">
						Turn Your<br />
						<span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
							>Brilliant Idea</span
						><br />
						Into Reality
					</h1>
					<p class="mb-8 text-xl text-gray-300 lg:text-2xl">
						Work directly with Dubai's leading product developer. 50+ successful launches, 12+ years
						experience, and a 48-hour response guarantee.
					</p>
				</div>

				<!-- Social Proof Bullets -->
				<div class="space-y-3">
					<div class="flex items-center text-gray-300">
						<svg class="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
						<span>50+ products launched successfully</span>
					</div>
					<div class="flex items-center text-gray-300">
						<svg class="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
						<span>$50M+ raised by our clients</span>
					</div>
					<div class="flex items-center text-gray-300">
						<svg class="mr-3 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
						<span>95% client satisfaction rate</span>
					</div>
				</div>

				<!-- Primary CTA -->
				<div class="flex flex-col gap-4 sm:flex-row">
					<button
						on:click={() =>
							document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
						class="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
					>
						Get Free Consultation
					</button>
					<button
						on:click={() =>
							document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
						class="rounded-lg border border-white/20 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/10"
					>
						View Pricing
					</button>
				</div>

				<!-- Trust Signals -->
				<div class="text-sm text-gray-400">
					✓ Free consultation • ✓ 48-hour response • ✓ No obligations
				</div>
			</div>

			<!-- Right: Portfolio showcase with rotating images -->
			<div class="relative">
				<div
					class="absolute inset-0 scale-110 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl"
				></div>
				<div class="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
					<img
						src="/img/me.jpg"
						alt="Munzir Suliman - Dubai Product Developer"
						class="w-full rounded-lg object-cover"
					/>
					<div class="mt-4 text-center">
						<div class="text-lg font-semibold text-white">Munzir Suliman</div>
						<div class="text-blue-400">Founder & Lead Developer</div>
						<div class="mt-2 text-sm text-gray-300">Based in Dubai • Serving Globally</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</BaseSlide>

<!-- 2. COMPANY CREDIBILITY -->
<CompanySlide
	title="Moheera"
	subtitle="Innovation. Excellence. Impact."
	company={moheeraCompany}
	stats={moheeraStats}
	accentColor="#10b981"
/>

<!-- 3. SOCIAL PROOF - CLIENT SUCCESS STORIES -->
<BaseSlide className="bg-gray-900 text-[#f5f5f7]">
	<div class="flex h-full w-full max-w-6xl items-center px-8">
		<div class="w-full space-y-12">
			<!-- Header -->
			<div class="text-center">
				<h2 class="mb-6 text-4xl font-bold text-white lg:text-5xl">Client Success Stories</h2>
				<p class="mx-auto max-w-3xl text-lg text-gray-300">
					Real results from real clients who trusted Moheera with their vision
				</p>
			</div>

			<!-- Enhanced Testimonials with Project Images -->
			<div class="grid gap-8 md:grid-cols-3">
				{#each testimonials as testimonial, index}
					<div
						class="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
					>
						<!-- Project Preview -->
						<div class="mb-6 overflow-hidden rounded-lg">
							<img
								src={testimonial.image}
								alt="{testimonial.company} project"
								class="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-105"
							/>
						</div>

						<!-- Quote -->
						<div class="mb-6">
							<svg class="mb-3 h-8 w-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
								<path d="M6 10l2-2v8l-2-2V10zM14 10l2-2v8l-2-2V10z" />
							</svg>
							<p class="text-gray-300 italic">"{testimonial.quote}"</p>
						</div>

						<!-- Client Info -->
						<div class="border-t border-white/10 pt-4">
							<div class="font-semibold text-white">{testimonial.name}</div>
							<div class="text-sm text-gray-400">{testimonial.title}</div>
							<div class="text-sm text-blue-400">{testimonial.company}</div>
						</div>

						<!-- Result -->
						<div class="mt-4 rounded-lg border border-green-500/20 bg-green-500/10 p-3">
							<div class="text-xs font-medium text-green-400">RESULT:</div>
							<div class="text-sm text-gray-200">{testimonial.result}</div>
						</div>
					</div>
				{/each}
			</div>

			<!-- Stats -->
			<div class="grid grid-cols-2 gap-6 md:grid-cols-4">
				<div class="text-center">
					<div class="text-3xl font-bold text-blue-400">50+</div>
					<div class="text-sm text-gray-400">Projects Delivered</div>
				</div>
				<div class="text-center">
					<div class="text-3xl font-bold text-green-400">95%</div>
					<div class="text-sm text-gray-400">Client Satisfaction</div>
				</div>
				<div class="text-center">
					<div class="text-3xl font-bold text-purple-400">$50M+</div>
					<div class="text-sm text-gray-400">Client Funding Raised</div>
				</div>
				<div class="text-center">
					<div class="text-3xl font-bold text-yellow-400">12+</div>
					<div class="text-sm text-gray-400">Years Experience</div>
				</div>
			</div>
		</div>
	</div>
</BaseSlide>

<!-- 4. PORTFOLIO SHOWCASE WITH REAL PROJECTS -->
<TextSlide
	text="Proven Track Record"
	subText="See how we've transformed ambitious ideas into successful digital products across industries"
/>

<!-- 5. SURPLUSBITE CASE STUDY -->
<MultiDeviceSlide
	title="SurplusBite"
	subtitle="40% Food Waste Reduction • 500+ Daily Meals Redistributed"
	description="Intelligent food surplus management platform connecting restaurants with charities through AI-powered matching and automated logistics coordination."
	images={projectCaseStudies[0].images}
	orientation={{
		ipad: 'landscape',
		iphone: 'portrait'
	}}
/>

<!-- 6. PARTICLEDRIVE CASE STUDY -->
<MultiDeviceSlide
	title="ParticleDrive"
	subtitle="300% Faster Part Discovery • 95% Match Accuracy"
	description="Revolutionary AI-powered auto parts marketplace using computer vision and natural language processing for precision part matching."
	images={projectCaseStudies[1].images}
	orientation={{
		ipad: 'portrait',
		iphone: 'portrait'
	}}
/>

<!-- 7. FITBITE CASE STUDY -->
<MultiDeviceSlide
	title="FitBite"
	subtitle="65% Better User Outcomes • 10K+ Active Users"
	description="Hyper-personalized nutrition platform using advanced algorithms and biometric integration for optimal meal planning."
	images={projectCaseStudies[2].images}
	orientation={{
		ipad: 'landscape',
		iphone: 'portrait'
	}}
/>

<!-- 8. PROCESS TRANSPARENCY -->
<TextSlide
	text="Transparent Process, Guaranteed Results"
	subText="Know exactly what to expect at every step of your project journey"
/>

<!-- 2. PROJECT CASE STUDIES -->
<!-- SurplusBite Case Study -->
<MultiDeviceSlide
	title="SurplusBite: Food Waste Solution"
	subtitle="Complete meal planning platform with smart inventory management"
	images={{
		macbook: '/img/surplusbite/desktop.png',
		ipad: '/img/surplusbite/ipad.png',
		iphone: '/img/surplusbite/iphone.png'
	}}
	className="bg-gradient-to-br from-green-900 via-black to-emerald-900"
/>

<!-- SurplusBite Results -->
<BaseSlide className="bg-gradient-to-br from-green-900 via-black to-emerald-900 text-[#f5f5f7]">
	<div class="flex h-full w-full max-w-6xl items-center px-8">
		<div class="w-full space-y-12">
			<div class="text-center">
				<h2 class="mb-6 text-4xl font-bold text-white lg:text-5xl">SurplusBite Success Story</h2>
				<p class="mx-auto max-w-3xl text-lg text-gray-300">
					How we helped reduce food waste while building a scalable meal planning platform
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2">
				<!-- Challenge -->
				<div class="rounded-xl border border-white/10 bg-white/5 p-8">
					<h3 class="mb-4 text-2xl font-bold text-green-400">The Challenge</h3>
					<ul class="space-y-3 text-gray-300">
						<li class="flex items-start">
							<div class="mt-1 mr-3 h-2 w-2 rounded-full bg-green-400"></div>
							<span>Combat household food waste through smart planning</span>
						</li>
						<li class="flex items-start">
							<div class="mt-1 mr-3 h-2 w-2 rounded-full bg-green-400"></div>
							<span>Create intuitive meal planning across all devices</span>
						</li>
						<li class="flex items-start">
							<div class="mt-1 mr-3 h-2 w-2 rounded-full bg-green-400"></div>
							<span>Build smart inventory tracking system</span>
						</li>
						<li class="flex items-start">
							<div class="mt-1 mr-3 h-2 w-2 rounded-full bg-green-400"></div>
							<span>Scale to support thousands of households</span>
						</li>
					</ul>
				</div>

				<!-- Results -->
				<div class="rounded-xl border border-green-500/20 bg-green-500/10 p-8">
					<h3 class="mb-4 text-2xl font-bold text-green-400">The Results</h3>
					<div class="space-y-4">
						<div class="flex items-center justify-between">
							<span class="text-gray-300">User Engagement</span>
							<span class="font-bold text-green-400">85% Weekly Active</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-gray-300">Food Waste Reduction</span>
							<span class="font-bold text-green-400">40% Average</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-gray-300">Mobile Usage</span>
							<span class="font-bold text-green-400">78% Primary Device</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-gray-300">User Satisfaction</span>
							<span class="font-bold text-green-400">4.7/5 Rating</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Technologies Used -->
			<div class="text-center">
				<h3 class="mb-6 text-xl font-bold text-white">Technologies & Features</h3>
				<div class="flex flex-wrap justify-center gap-3">
					{#each ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PWA', 'Real-time Sync', 'Smart Notifications', 'Offline Support'] as tech}
						<span
							class="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-300"
						>
							{tech}
						</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
</BaseSlide>

<!-- ParticleDrive Case Study -->
<MultiDeviceSlide
	title="ParticleDrive: Cloud Storage Platform"
	subtitle="Secure file management with advanced sharing and collaboration features"
	images={{
		macbook: '/img/particledrive/desktop.png',
		ipad: '/img/particledrive/ipad.png',
		iphone: '/img/particledrive/iphone.png'
	}}
	className="bg-gradient-to-br from-blue-900 via-black to-purple-900"
/>

<!-- ParticleDrive Results -->
<BaseSlide className="bg-gradient-to-br from-blue-900 via-black to-purple-900 text-[#f5f5f7]">
	<div class="flex h-full w-full max-w-6xl items-center px-8">
		<div class="w-full space-y-12">
			<div class="text-center">
				<h2 class="mb-6 text-4xl font-bold text-white lg:text-5xl">ParticleDrive Success Story</h2>
				<p class="mx-auto max-w-3xl text-lg text-gray-300">
					Building a secure cloud platform that rivals industry leaders
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2">
				<!-- Challenge -->
				<div class="rounded-xl border border-white/10 bg-white/5 p-8">
					<h3 class="mb-4 text-2xl font-bold text-blue-400">The Challenge</h3>
					<ul class="space-y-3 text-gray-300">
						<li class="flex items-start">
							<div class="mt-1 mr-3 h-2 w-2 rounded-full bg-blue-400"></div>
							<span>Compete with Google Drive and Dropbox</span>
						</li>
						<li class="flex items-start">
							<div class="mt-1 mr-3 h-2 w-2 rounded-full bg-blue-400"></div>
							<span>Handle large file uploads efficiently</span>
						</li>
						<li class="flex items-start">
							<div class="mt-1 mr-3 h-2 w-2 rounded-full bg-blue-400"></div>
							<span>Implement real-time collaboration</span>
						</li>
						<li class="flex items-start">
							<div class="mt-1 mr-3 h-2 w-2 rounded-full bg-blue-400"></div>
							<span>Ensure enterprise-grade security</span>
						</li>
					</ul>
				</div>

				<!-- Results -->
				<div class="rounded-xl border border-blue-500/20 bg-blue-500/10 p-8">
					<h3 class="mb-4 text-2xl font-bold text-blue-400">The Results</h3>
					<div class="space-y-4">
						<div class="flex items-center justify-between">
							<span class="text-gray-300">Upload Speed</span>
							<span class="font-bold text-blue-400">300% Faster</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-gray-300">Storage Efficiency</span>
							<span class="font-bold text-blue-400">60% Better</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-gray-300">User Adoption</span>
							<span class="font-bold text-blue-400">2,500+ Users</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-gray-300">Security Rating</span>
							<span class="font-bold text-blue-400">SOC 2 Compliant</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Technologies Used -->
			<div class="text-center">
				<h3 class="mb-6 text-xl font-bold text-white">Technologies & Features</h3>
				<div class="flex flex-wrap justify-center gap-3">
					{#each ['React', 'Node.js', 'PostgreSQL', 'AWS S3', 'WebRTC', 'Chunked Upload', 'End-to-End Encryption', 'Real-time Sync'] as tech}
						<span
							class="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
						>
							{tech}
						</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
</BaseSlide>

<!-- FitBite Case Study -->
<MultiDeviceSlide
	title="FitBite: Nutrition Tracking App"
	subtitle="AI-powered meal tracking with personalized nutrition insights"
	images={{
		macbook: '/img/fitbite/desktop.png',
		ipad: '/img/fitbite/ipad.png',
		iphone: '/img/fitbite/iphone.png'
	}}
	className="bg-gradient-to-br from-orange-900 via-black to-red-900"
/>

<!-- FitBite Results -->
<BaseSlide className="bg-gradient-to-br from-orange-900 via-black to-red-900 text-[#f5f5f7]">
	<div class="flex h-full w-full max-w-6xl items-center px-8">
		<div class="w-full space-y-12">
			<div class="text-center">
				<h2 class="mb-6 text-4xl font-bold text-white lg:text-5xl">FitBite Success Story</h2>
				<p class="mx-auto max-w-3xl text-lg text-gray-300">
					Revolutionizing nutrition tracking with AI-powered insights
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2">
				<!-- Challenge -->
				<div class="rounded-xl border border-white/10 bg-white/5 p-8">
					<h3 class="mb-4 text-2xl font-bold text-orange-400">The Challenge</h3>
					<ul class="space-y-3 text-gray-300">
						<li class="flex items-start">
							<div class="mt-1 mr-3 h-2 w-2 rounded-full bg-orange-400"></div>
							<span>Make nutrition tracking effortless</span>
						</li>
						<li class="flex items-start">
							<div class="mt-1 mr-3 h-2 w-2 rounded-full bg-orange-400"></div>
							<span>Provide accurate food recognition</span>
						</li>
						<li class="flex items-start">
							<div class="mt-1 mr-3 h-2 w-2 rounded-full bg-orange-400"></div>
							<span>Generate personalized recommendations</span>
						</li>
						<li class="flex items-start">
							<div class="mt-1 mr-3 h-2 w-2 rounded-full bg-orange-400"></div>
							<span>Build habit-forming user experience</span>
						</li>
					</ul>
				</div>

				<!-- Results -->
				<div class="rounded-xl border border-orange-500/20 bg-orange-500/10 p-8">
					<h3 class="mb-4 text-2xl font-bold text-orange-400">The Results</h3>
					<div class="space-y-4">
						<div class="flex items-center justify-between">
							<span class="text-gray-300">Daily Active Users</span>
							<span class="font-bold text-orange-400">92% Retention</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-gray-300">Food Recognition</span>
							<span class="font-bold text-orange-400">94% Accuracy</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-gray-300">User Goals Achieved</span>
							<span class="font-bold text-orange-400">76% Success Rate</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-gray-300">App Store Rating</span>
							<span class="font-bold text-orange-400">4.8/5 Stars</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Technologies Used -->
			<div class="text-center">
				<h3 class="mb-6 text-xl font-bold text-white">Technologies & Features</h3>
				<div class="flex flex-wrap justify-center gap-3">
					{#each ['React Native', 'TensorFlow', 'Python', 'Computer Vision', 'Machine Learning', 'Health APIs', 'Push Notifications', 'Offline Mode'] as tech}
						<span
							class="rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-300"
						>
							{tech}
						</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
</BaseSlide>

<!-- 3. WORK PROCESS SECTION -->
<TextSlide
	text="Our Proven Development Process"
	subText="Transparent methodology that delivers results every time"
/>

<!-- 4. WORK PROCESS DEMONSTRATION -->
<BaseSlide className="bg-black text-[#f5f5f7]">
	<div class="flex h-full w-full max-w-6xl items-center px-8">
		<div class="w-full space-y-12">
			<!-- Header -->
			<div class="text-center">
				<h2 class="mb-6 text-4xl font-bold text-white lg:text-5xl">How We Work Together</h2>
				<p class="mx-auto max-w-3xl text-lg text-gray-300">
					A transparent, proven process that takes your idea from concept to successful launch
				</p>
			</div>

			<!-- Process Steps -->
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
				{#each engagementProcess as process, index}
					<div class="relative">
						<!-- Connection Line (except for last item) -->
						{#if index < engagementProcess.length - 1}
							<div
								class="absolute top-16 left-1/2 hidden h-6 w-px -translate-x-1/2 transform bg-gradient-to-b from-blue-500 to-purple-500 lg:block"
							></div>
						{/if}

						<div
							class="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
						>
							<!-- Step Number -->
							<div
								class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-lg font-bold text-white"
							>
								{process.step}
							</div>

							<!-- Title & Duration -->
							<h3 class="mb-2 text-lg font-semibold text-white">{process.title}</h3>
							<div class="mb-3 text-sm font-medium text-blue-400">{process.duration}</div>

							<!-- Description -->
							<p class="mb-4 text-sm text-gray-300">{process.description}</p>

							<!-- Deliverable -->
							<div class="rounded-lg border border-green-500/20 bg-green-500/10 p-3">
								<div class="text-xs font-medium text-green-400">You Get:</div>
								<div class="text-sm text-gray-200">{process.deliverable}</div>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<!-- Guarantee -->
			<div class="mx-auto max-w-3xl text-center">
				<div class="rounded-xl border border-green-500/20 bg-green-500/10 p-6">
					<h3 class="mb-3 text-xl font-bold text-green-400">✓ 48-Hour Response Guarantee</h3>
					<p class="text-gray-300">
						You'll hear back from me within 48 hours with either a detailed project assessment or
						clear next steps. No ghosting, no delays.
					</p>
				</div>
			</div>
		</div>
	</div>
</BaseSlide>

<!-- 5. PRICING TRANSPARENCY -->
<PricingSection {pricingTiers} />

<!-- 6. SOCIAL PROOF -->
<BaseSlide className="bg-gray-900 text-[#f5f5f7]">
	<div class="flex h-full w-full max-w-6xl items-center px-8">
		<div class="w-full space-y-12">
			<!-- Header -->
			<div class="text-center">
				<h2 class="mb-6 text-4xl font-bold text-white lg:text-5xl">Client Success Stories</h2>
				<p class="mx-auto max-w-3xl text-lg text-gray-300">
					Real results from real clients who trusted Moheera with their vision
				</p>
			</div>

			<!-- Testimonials -->
			<div class="grid gap-8 md:grid-cols-3">
				{#each testimonials as testimonial, index}
					<div class="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
						<!-- Quote -->
						<div class="mb-6">
							<svg class="mb-3 h-8 w-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm3 0h8v10H6V5z"
								/>
							</svg>
							<p class="text-gray-300 italic">"{testimonial.quote}"</p>
						</div>

						<!-- Client Info -->
						<div class="border-t border-white/10 pt-4">
							<div class="font-semibold text-white">{testimonial.name}</div>
							<div class="text-sm text-gray-400">{testimonial.title}</div>
							<div class="text-sm text-blue-400">{testimonial.company}</div>
						</div>

						<!-- Result -->
						<div class="mt-4 rounded-lg border border-green-500/20 bg-green-500/10 p-3">
							<div class="text-xs font-medium text-green-400">RESULT:</div>
							<div class="text-sm text-gray-200">{testimonial.result}</div>
						</div>
					</div>
				{/each}
			</div>

			<!-- Stats -->
			<div class="grid grid-cols-2 gap-6 md:grid-cols-4">
				<div class="text-center">
					<div class="text-3xl font-bold text-blue-400">50+</div>
					<div class="text-sm text-gray-400">Projects Delivered</div>
				</div>
				<div class="text-center">
					<div class="text-3xl font-bold text-green-400">95%</div>
					<div class="text-sm text-gray-400">Client Satisfaction</div>
				</div>
				<div class="text-center">
					<div class="text-3xl font-bold text-purple-400">$50M+</div>
					<div class="text-sm text-gray-400">Client Funding Raised</div>
				</div>
				<div class="text-center">
					<div class="text-3xl font-bold text-yellow-400">12+</div>
					<div class="text-sm text-gray-400">Years Experience</div>
				</div>
			</div>
		</div>
	</div>
</BaseSlide>

<!-- 7. CONTACT FORM -->
<ContactForm />

<!-- 8. FINAL RECOMMENDATIONS -->
<TextSlide
	text="Implementation Roadmap"
	subText="Step-by-step guide to transform your portfolio into a client-generating machine"
/>

<!-- 9. ACTION PLAN -->
<BaseSlide className="bg-gradient-to-br from-green-900 via-black to-blue-900 text-[#f5f5f7]">
	<div class="flex h-full w-full max-w-6xl items-center px-8">
		<div class="w-full space-y-12">
			<!-- Header -->
			<div class="text-center">
				<h2 class="mb-6 text-4xl font-bold text-white lg:text-5xl">Your 30-Day Action Plan</h2>
				<p class="mx-auto max-w-3xl text-lg text-gray-300">
					Prioritized implementation checklist to maximize conversion impact
				</p>
			</div>

			<!-- Action Items -->
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				<!-- Week 1: Critical Fixes -->
				<div class="rounded-xl border border-red-500/20 bg-red-500/10 p-6">
					<h3 class="mb-4 text-xl font-bold text-red-400">Week 1: Critical Fixes</h3>
					<ul class="space-y-3">
						<li class="flex items-start">
							<div class="mt-1 mr-3 h-2 w-2 rounded-full bg-red-400"></div>
							<div>
								<div class="font-medium text-white">Add Contact Form</div>
								<div class="text-sm text-gray-300">
									Replace final CTA with structured inquiry form
								</div>
							</div>
						</li>
						<li class="flex items-start">
							<div class="mt-1 mr-3 h-2 w-2 rounded-full bg-red-400"></div>
							<div>
								<div class="font-medium text-white">Create Process Page</div>
								<div class="text-sm text-gray-300">Explain how clients work with you</div>
							</div>
						</li>
						<li class="flex items-start">
							<div class="mt-1 mr-3 h-2 w-2 rounded-full bg-red-400"></div>
							<div>
								<div class="font-medium text-white">Add Pricing Ranges</div>
								<div class="text-sm text-gray-300">Show investment levels for transparency</div>
							</div>
						</li>
					</ul>
				</div>

				<!-- Week 2: Social Proof -->
				<div class="rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-6">
					<h3 class="mb-4 text-xl font-bold text-yellow-400">Week 2: Social Proof</h3>
					<ul class="space-y-3">
						<li class="flex items-start">
							<div class="mt-1 mr-3 h-2 w-2 rounded-full bg-yellow-400"></div>
							<div>
								<div class="font-medium text-white">Collect Testimonials</div>
								<div class="text-sm text-gray-300">Reach out to past clients for quotes</div>
							</div>
						</li>
						<li class="flex items-start">
							<div class="mt-1 mr-3 h-2 w-2 rounded-full bg-yellow-400"></div>
							<div>
								<div class="font-medium text-white">Add Case Study Results</div>
								<div class="text-sm text-gray-300">Include specific metrics and outcomes</div>
							</div>
						</li>
						<li class="flex items-start">
							<div class="mt-1 mr-3 h-2 w-2 rounded-full bg-yellow-400"></div>
							<div>
								<div class="font-medium text-white">Show Client Logos</div>
								<div class="text-sm text-gray-300">
									Display recognizable brands you've worked with
								</div>
							</div>
						</li>
					</ul>
				</div>

				<!-- Week 3: Optimization -->
				<div class="rounded-xl border border-green-500/20 bg-green-500/10 p-6">
					<h3 class="mb-4 text-xl font-bold text-green-400">Week 3: Optimization</h3>
					<ul class="space-y-3">
						<li class="flex items-start">
							<div class="mt-1 mr-3 h-2 w-2 rounded-full bg-green-400"></div>
							<div>
								<div class="font-medium text-white">A/B Test CTAs</div>
								<div class="text-sm text-gray-300">Test different call-to-action messaging</div>
							</div>
						</li>
						<li class="flex items-start">
							<div class="mt-1 mr-3 h-2 w-2 rounded-full bg-green-400"></div>
							<div>
								<div class="font-medium text-white">Add Urgency Elements</div>
								<div class="text-sm text-gray-300">Limited availability, booking calendars</div>
							</div>
						</li>
						<li class="flex items-start">
							<div class="mt-1 mr-3 h-2 w-2 rounded-full bg-green-400"></div>
							<div>
								<div class="font-medium text-white">Analytics Setup</div>
								<div class="text-sm text-gray-300">Track conversion rates and form completions</div>
							</div>
						</li>
					</ul>
				</div>
			</div>

			<!-- Expected Results -->
			<div class="text-center">
				<div class="mx-auto max-w-4xl rounded-xl border border-purple-500/20 bg-purple-500/10 p-8">
					<h3 class="mb-6 text-2xl font-bold text-purple-400">Expected Results After 30 Days</h3>
					<div class="grid gap-6 md:grid-cols-3">
						<div class="text-center">
							<div class="text-3xl font-bold text-green-400">3-5x</div>
							<div class="text-sm text-gray-300">More qualified inquiries</div>
						</div>
						<div class="text-center">
							<div class="text-3xl font-bold text-blue-400">50%</div>
							<div class="text-sm text-gray-300">Higher quality leads</div>
						</div>
						<div class="text-center">
							<div class="text-3xl font-bold text-yellow-400">2x</div>
							<div class="text-sm text-gray-300">Faster project closing</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</BaseSlide>

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

	:global(section),
	:global(.slide) {
		scroll-snap-align: start;
		scroll-snap-stop: always;
		min-height: 100vh;
	}

	:global(.reveal) {
		opacity: 1;
		transform: translateY(0);
		transition:
			opacity 0.4s ease-out,
			transform 0.4s ease-out;
	}
</style>
