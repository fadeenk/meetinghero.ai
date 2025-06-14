<script lang="ts">
	import { base } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';
	import { trackNavigation, trackFeatureInteraction, trackEngagement } from '$lib/analytics';
	import partnershipsHeroDemo from '../sales/sales-hero-demo.jpg';

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
			icon: '⏰',
			title: 'Hours Lost to Research',
			desc: 'Manually digging through LinkedIn, company websites, and news articles for every single attendee is a massive time-drain that kills your productivity.'
		},
		{
			icon: '🔀',
			title: 'Scattered, Unactionable Intel',
			desc: 'Juggling 10 different browser tabs and messy notes makes it easy to miss the one crucial detail that could build rapport or unlock an opportunity.'
		},
		{
			icon: '💬',
			title: 'Surface-Level Conversations',
			desc: 'Without deep insight, conversations stay generic. You miss the chance to ask strategic questions that demonstrate true understanding and uncover synergies.'
		},
		{
			icon: '🛡️',
			title: 'Risk of Damaged Credibility',
			desc: 'Nothing torpedoes a potential partnership faster than looking unprepared. Asking a question you should already know the answer to instantly erodes trust.'
		}
	];

	const features: Feature[] = [
		{
			icon: '🔍',
			title: 'Automated Partner & Company Deep-Dives',
			subtitle: 'Stop searching, start knowing.',
			desc: "We instantly provide a 360-degree view of your partner's company, including their business overview, recent news, funding history, and key investors, giving you the strategic context you need."
		},
		{
			icon: '🤖',
			title: 'AI-Generated Strategic Talking Points',
			subtitle: 'Move beyond data and into dialogue.',
			desc: 'Our AI analyzes the intel to generate smart, relevant discussion points tailored to your attendees, helping you spark meaningful conversations about potential synergies, shared interests, and market opportunities.'
		},
		{
			icon: '📬',
			title: 'Effortless Delivery, Perfect Timing',
			subtitle: 'No more last-minute panic.',
			desc: 'All this powerful intel is consolidated into a single, easy-to-read briefing and delivered exactly where you need it—your email inbox or a private calendar invite—hours before your meeting.'
		}
	];

	const steps: Step[] = [
		{
			icon: '📅',
			title: 'Connect Your Calendar',
			desc: 'Securely sync your Google or Outlook calendar with a few clicks. We only need read-only access to see your upcoming meetings.'
		},
		{
			icon: '🤖',
			title: 'AI Gathers the Intel',
			desc: 'Our AI instantly gets to work, identifying external attendees and pulling comprehensive, publicly-available data on them and their companies.'
		},
		{
			icon: '📬',
			title: 'Get Your Prep Delivered',
			desc: 'Receive a consolidated, easy-to-read briefing directly in your email or as a private calendar invite before your meeting. You arrive prepared, every time.'
		}
	];

	const faqs: FAQ[] = [
		{
			question: 'How is this different from just Googling someone?',
			answer:
				"MeetingHero.ai saves you hours by automating the entire process. Instead of you spending 30-60 minutes digging through scattered sources, our AI does it in seconds. More importantly, it synthesizes the data into actionable insights and strategic talking points, and delivers it conveniently before every meeting. It's the difference between raw data and true intelligence."
		},
		{
			question: 'Where does the information come from?',
			answer:
				'We aggregate data from millions of publicly available sources, including news outlets, financial data providers, company websites, and professional social profiles. All information is publicly accessible; we just find it, organize it, and make it useful for you.'
		},
		{
			question: 'Is my calendar data secure?',
			answer:
				'Absolutely. Security is our top priority. We use enterprise-grade encryption and security protocols. We only require read-only access to your calendar to identify meeting attendees and do not store event details beyond what is necessary to generate your briefing.'
		},
		{
			question: 'Will I get briefings for my internal team meetings?',
			answer:
				'No. You can easily configure MeetingHero.ai to exclude internal domains (e.g., *@yourcompany.com), ensuring you only receive prep for external meetings with potential partners, clients, and prospects.'
		}
	];
</script>

<SEO image="/og-image.png" url="/partnerships" />

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
			Forge Game-Changing Partnerships, Faster.
		</h1>
		<p class="mb-8 max-w-2xl text-center text-lg text-gray-200 md:text-2xl">
			MeetingHero.ai automatically delivers deep-dive intelligence on potential partners and their
			key people, directly to your calendar. Stop researching and start building strategic
			alliances.
		</p>
		<!-- Visual Placeholder -->
		<div
			class="group relative mb-8 w-full max-w-2xl overflow-hidden rounded-2xl border shadow-xl transition-all duration-300 hover:shadow-2xl"
			style="background: var(--color-bg-dark); border-color: var(--color-primary);"
		>
			<img
				src={partnershipsHeroDemo}
				alt="Partnerships Hero Demo"
				class="h-full w-full object-cover"
			/>
		</div>
		<div class="flex flex-col gap-4 md:flex-row">
			<a
				href="https://app.meetinghero.ai/"
				class="group relative overflow-hidden rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
				style="background: linear-gradient(to right, var(--color-primary), var(--color-secondary));"
				onclick={() => trackNavigation('Try Free Partnerships Hero', 'https://app.meetinghero.ai/')}
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
				onclick={() => trackNavigation('See Demo Partnerships', `${base}/demo`)}
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
			The Pre-Meeting Scramble is Costing You Deals.
		</h2>
		<p class="mb-12 max-w-2xl text-center text-lg text-gray-300">
			You know the routine. A critical partnership meeting is on the calendar, and you're left
			scrambling to connect the dots, wasting valuable time you should be using to strategize.
		</p>
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
			Walk Into Every Meeting Informed, Confident, and Ready to Build.
		</h2>
		<p class="mb-12 max-w-2xl text-center text-lg text-gray-300">
			MeetingHero.ai transforms your preparation from a chore into an automated advantage.
		</p>
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
			Why Partnership Leaders Trust MeetingHero.ai
		</h2>
		<div class="mx-auto max-w-2xl text-center">
			<blockquote class="mb-4 text-xl text-gray-300 italic">
				"As a partnership manager, my calendar is my battleground. Before MeetingHero.ai, I was
				losing hours every week to pre-call research. Now, it's my secret weapon. I walk into every
				conversation knowing their company's latest press release, the background of their VP, and
				even the local weather to break the ice. It's been a game-changer for building instant
				rapport and has directly contributed to closing two strategic deals this quarter."
			</blockquote>
			<span class="text-lg font-semibold" style="color: var(--color-primary);"
				>— James R., Director of Strategic Partnerships</span
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
			From Calendar Invite to Fully Prepped in 3 Simple Steps
		</h2>
		<p class="mb-12 max-w-2xl text-center text-lg text-gray-300">
			Setup takes less than 60 seconds. Seriously.
		</p>
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
			Ready to Build Your Next Great Partnership?
		</h2>
		<p class="mb-8 max-w-2xl text-center text-xl text-gray-300">
			Stop leaving opportunities on the table. Start every conversation with the confidence and
			insight that comes from being the most prepared person in the room. Your competitors are doing
			their homework; let us do it for you, automatically.
		</p>
		<a
			href="https://app.meetinghero.ai/"
			class="group relative overflow-hidden rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
			style="background: linear-gradient(to right, var(--color-primary), var(--color-secondary));"
			onclick={() =>
				trackNavigation('Claim Free Trial Partnerships', 'https://app.meetinghero.ai/')}
		>
			<span class="relative z-10">Start My 7-Day Free Trial - No Credit Card Required</span>
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
