<script lang="ts">
	import { base } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';
	import { trackNavigation, trackFeatureInteraction, trackEngagement } from '$lib/analytics';
	import foundersHeroDemo from '../sales/sales-hero-demo.jpg';

	interface PainPoint {
		icon: string;
		title: string;
		desc: string;
	}

	interface Feature {
		icon: string;
		title: string;
		subtitle: string;
		desc: string;
	}

	interface Step {
		icon: string;
		title: string;
		desc: string;
	}

	interface FAQ {
		question: string;
		answer: string;
	}

	const painPoints: PainPoint[] = [
		{
			icon: '📈',
			title: 'High-Stakes Prep Drain',
			desc: 'Hours are lost manually researching investors, board members, and key partners, pulling you away from high-level strategy and execution.'
		},
		{
			icon: '🔗',
			title: 'Missed Connection Points',
			desc: 'Failing to know a key detail—a shared alma mater, a past investment, a recent company milestone—can mean a missed opportunity to build crucial rapport.'
		},
		{
			icon: '📚',
			title: 'Information Overload',
			desc: 'Dozens of browser tabs, LinkedIn profiles, and news articles create a chaotic mess of data, making it impossible to synthesize what truly matters.'
		},
		{
			icon: '🛡️',
			title: 'Credibility on the Line',
			desc: 'Walking into a critical meeting unprepared undermines your authority and signals a lack of diligence, putting your reputation and the deal at risk.'
		}
	];

	const features: Feature[] = [
		{
			icon: '📊',
			title: 'Automated Investor & Stakeholder Dossiers',
			subtitle: 'Know Your Audience, Instantly.',
			desc: "Instantly receive comprehensive briefings on every meeting attendee. We surface their professional history, education, their company's funding rounds, latest news, and key investors, so you can tailor your pitch and conversation perfectly."
		},
		{
			icon: '🤖',
			title: 'AI-Powered Strategic Insights',
			subtitle: 'Lead with Intelligence.',
			desc: 'Go beyond raw data. Our AI generates smart, relevant discussion points that help you ask the right questions, uncover motivations, and demonstrate a deep understanding of their world, positioning you as a knowledgeable and formidable leader.'
		},
		{
			icon: '🔄',
			title: 'Seamless Integration, Zero Extra Work',
			subtitle: 'Set It and Forget It.',
			desc: 'MeetingHero.ai plugs directly into your Google or Microsoft calendar. It works silently in the background, automatically delivering prep notes to your inbox or calendar invite before every important meeting. Set it once and never think about it again.'
		}
	];

	const steps: Step[] = [
		{
			icon: '📅',
			title: 'Connect Your Calendar',
			desc: 'Securely sync your Google or Microsoft account in seconds with one click. Your privacy and security are our top priority.'
		},
		{
			icon: '🤖',
			title: 'Let AI Do the Work',
			desc: 'MeetingHero automatically identifies your upcoming external meetings and begins compiling rich, detailed intelligence on every attendee and their company.'
		},
		{
			icon: '📬',
			title: 'Receive Your Briefing',
			desc: 'Get a concise, powerful prep dossier delivered directly to your inbox or as a private calendar invite. Arrive informed, confident, and ready to lead.'
		}
	];

	const faqs: FAQ[] = [
		{
			question: 'Is my calendar data and information secure?',
			answer:
				'Absolutely. Security is foundational to MeetingHero.ai. We use industry-standard OAuth for calendar connections, meaning we never see or store your password. All data is encrypted in transit and at rest. We are committed to protecting your privacy.'
		},
		{
			question: 'Can I control which meetings it generates prep for?',
			answer:
				"Yes. In your settings, you can easily add domains (like your own company's) to an exclusion list. This ensures you only receive briefings for external meetings with prospects, investors, and partners, not your internal 1-on-1s."
		},
		{
			question: 'Where does MeetingHero.ai get its information?',
			answer:
				'Our platform aggregates and synthesizes data from a wide array of publicly available and premium data sources. This includes professional networks, news outlets, financial data providers, and company websites, giving you a comprehensive, unified view.'
		},
		{
			question: 'Can I get this for my entire executive or sales team?',
			answer:
				'Yes. We offer team plans designed to empower your entire leadership or go-to-market team. Please contact us at support@meetinghero.ai for more information on team packages and pricing.'
		}
	];
</script>

<SEO image="/og-image.png" url="/founders" />

<div class="flex min-h-screen flex-col font-sans text-white" style="background: var(--color-bg);">
	<!-- Hero Section -->
	<section
		class="relative flex w-full flex-col items-center justify-center overflow-hidden px-4 py-16"
		style="background: linear-gradient(to bottom, var(--color-bg), var(--color-bg-dark), var(--color-bg));"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-10"
		></div>
		<h1
			class="mb-4 text-center text-4xl leading-tight font-bold drop-shadow-lg md:text-7xl"
			style="color: var(--color-primary);"
		>
			From Fundraising to Boardroom, Command Every Conversation
		</h1>
		<p class="mb-8 max-w-2xl text-center text-lg text-gray-200 md:text-2xl">
			MeetingHero.ai delivers automated, high-stakes meeting prep, so you can focus on strategy, not
			the scramble. Impress investors, align stakeholders, and lead with confidence.
		</p>
		<!-- Visual Placeholder -->
		<div
			class="group relative mb-8 w-full max-w-2xl overflow-hidden rounded-2xl border shadow-xl transition-all duration-300 hover:shadow-2xl"
			style="background: var(--color-bg-dark); border-color: var(--color-primary);"
		>
			<img src={foundersHeroDemo} alt="Founders Hero Demo" class="h-full w-full object-cover" />
		</div>
		<div class="flex flex-col gap-4 md:flex-row">
			<a
				href="https://app.meetinghero.ai/"
				class="group relative hidden overflow-hidden rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
				style="background: linear-gradient(to right, var(--color-primary), var(--color-secondary));"
				onclick={() => trackNavigation('Try Free Founders Hero', 'https://app.meetinghero.ai/')}
			>
				<span class="relative z-10">Start My 7-Day Free Trial</span>
				<div
					class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
				></div>
			</a>
			<a
				href="https://www.youtube.com/embed/IDNpZuoeIOU"
				class="group relative overflow-hidden rounded-full border px-8 py-4 text-lg font-semibold transition-all duration-300 hover:bg-[var(--color-bg-dark)]"
				style="border-color: var(--color-primary); color: var(--color-primary);"
				onclick={() => trackNavigation('See Demo Founders', `${base}/demo`)}
			>
				<span class="relative z-10">See a 1-min Demo</span>
				<div
					class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[var(--color-primary)]/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
				></div>
			</a>
		</div>
	</section>

	<!-- Problem Section -->
	<section
		class="relative flex w-full flex-col items-center px-4 py-24"
		style="background: var(--color-bg-dark);"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-secondary)_0%,_transparent_70%)] opacity-10"
		></div>
		<h2
			class="mb-12 text-center text-3xl font-semibold md:text-4xl"
			style="color: var(--color-secondary);"
		>
			Your Time is Your Most Valuable Asset. Stop Wasting It on the Pre-Meeting Scramble.
		</h2>
		<div class="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			{#each painPoints as point}
				<div
					class="group relative flex flex-col items-center rounded-2xl border p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
					style="background: var(--color-bg); border-color: var(--color-secondary);"
				>
					<span class="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110"
						>{point.icon}</span
					>
					<h3 class="mb-2 text-center text-xl font-bold">{point.title}</h3>
					<p class="text-center text-gray-300">{point.desc}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Solution Section -->
	<section
		class="relative flex w-full flex-col items-center px-4 py-24"
		style="background: var(--color-bg);"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-10"
		></div>
		<h2
			class="mb-12 text-center text-3xl font-semibold md:text-4xl"
			style="color: var(--color-primary);"
		>
			The Strategic Advantage of Effortless Intelligence
		</h2>
		<div class="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
			{#each features as feature}
				<div
					class="group relative flex flex-col items-center rounded-2xl border p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
					style="background: var(--color-bg-dark); border-color: var(--color-primary);"
				>
					<span class="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110"
						>{feature.icon}</span
					>
					<h3 class="mb-2 text-center text-xl font-bold">{feature.title}</h3>
					<h4 class="mb-4 text-center text-lg" style="color: var(--color-secondary);">
						{feature.subtitle}
					</h4>
					<p class="text-center text-gray-300">{feature.desc}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Social Proof Section -->
	<section
		class="relative flex w-full flex-col items-center px-4 py-24"
		style="background: var(--color-bg-dark);"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-secondary)_0%,_transparent_70%)] opacity-10"
		></div>
		<h2
			class="mb-12 text-center text-3xl font-semibold md:text-4xl"
			style="color: var(--color-secondary);"
		>
			Trusted by Leaders Who Value Preparation
		</h2>
		<div class="mx-auto max-w-2xl text-center">
			<blockquote class="mb-4 text-xl text-gray-300 italic">
				"MeetingHero.ai is a game-changer for our leadership team. The time saved on prep for board
				meetings and investor calls is invaluable. I walk into every high-stakes conversation
				feeling more confident and better equipped to drive the outcome we need. It's our secret
				weapon."
			</blockquote>
			<span class="text-lg font-semibold" style="color: var(--color-primary);"
				>— Luke Sophinos, CEO & Co-Founder, CourseKey</span
			>
		</div>
	</section>

	<!-- How It Works Section -->
	<section
		class="relative flex w-full flex-col items-center px-4 py-24"
		style="background: var(--color-bg);"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-10"
		></div>
		<h2
			class="mb-12 text-center text-3xl font-semibold md:text-4xl"
			style="color: var(--color-primary);"
		>
			Ready in 60 Seconds. Prepared for Everything.
		</h2>
		<div class="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
			{#each steps as step}
				<div class="group flex flex-col items-center">
					<span class="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110"
						>{step.icon}</span
					>
					<h3 class="mb-2 text-xl font-bold">{step.title}</h3>
					<p class="text-center text-gray-300">{step.desc}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Final CTA Section -->
	<section
		class="relative flex w-full flex-col items-center px-4 py-24"
		style="background: var(--color-bg-dark);"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-secondary)_0%,_transparent_70%)] opacity-10"
		></div>
		<h2
			class="mb-6 text-center text-3xl font-semibold md:text-4xl"
			style="color: var(--color-secondary);"
		>
			Be the Most Prepared Person in Every Room
		</h2>
		<p class="mb-8 max-w-2xl text-center text-xl text-gray-300">
			Your next meeting could be the one that defines your company's future. Don't leave it to
			chance. Equip yourself with the intelligence to lead confidently and secure the outcomes you
			need. Your unfair advantage is just a click away.
		</p>
		<a
			href="https://app.meetinghero.ai/"
			class="group relative hidden overflow-hidden rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
			style="background: linear-gradient(to right, var(--color-primary), var(--color-secondary));"
			onclick={() => trackNavigation('Claim Free Trial Founders', 'https://app.meetinghero.ai/')}
		>
			<span class="relative z-10">Start My 7-Day Free Trial</span>
			<div
				class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
			></div>
		</a>
	</section>

	<!-- FAQ Section -->
	<section
		class="relative flex w-full flex-col items-center px-4 py-24"
		style="background: var(--color-bg);"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-10"
		></div>
		<h2
			class="mb-12 text-center text-3xl font-semibold md:text-4xl"
			style="color: var(--color-primary);"
		>
			Frequently Asked Questions
		</h2>
		<div class="grid w-full max-w-4xl gap-8">
			{#each faqs as faq}
				<div
					class="rounded-2xl border p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
					style="background: var(--color-bg-dark); border-color: var(--color-primary);"
				>
					<h3 class="mb-4 text-xl font-bold">{faq.question}</h3>
					<p class="text-gray-300">{faq.answer}</p>
				</div>
			{/each}
		</div>
	</section>
</div>
