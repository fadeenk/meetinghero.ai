<script lang="ts">
	import { base } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';
	import { trackNavigation, trackFeatureInteraction, trackEngagement } from '$lib/analytics';
	import ai from './features/ai.png';
	import intel from './features/intel.png';
	import company from './features/company.png';

	const benefits = [
		{
			icon: '⏳',
			title: 'Reclaim Your Schedule: Slash Prep Time by Hours',
			desc: 'Stop wasting precious hours manually digging through LinkedIn profiles, company websites, and news articles. MeetingHero.AI automates the research, delivering comprehensive briefings in minutes, so you can focus on strategy, not searching.',
			color: 'var(--color-primary)'
		},
		{
			icon: '💡',
			title: 'Never Be Caught Off Guard Again',
			desc: 'Impress attendees by seamlessly referencing their alma mater, a recent industry award they won, or a key company announcement. Our AI-powered insights ensure you’re always prepared and perceived as knowledgeable.',
			color: 'var(--color-secondary)'
		},
		{
			icon: '🤝',
			title: 'Have deeper & more meaningful conversations',
			desc: "Show you've done your homework. Reference a recent project they led or a university they attended t create personalized touchpoints that make your conversations more memorable and impactful.",
			color: 'var(--color-accent)'
		},
		{
			icon: '⚡',
			title: 'Seamless Intel Delivery: Always Prepared, Zero Effort',
			desc: 'One-time setup takes seconds. Then, like magic, MeetingHero.AI automatically identifies upcoming meetings, gathers relevant intelligence from millions of sources, and delivers a concise, actionable summary right where you need it – your email or calendar.',
			color: 'var(--color-secondary)'
		}
	];
	// Placeholder for future interactivity (e.g., modal, video, etc.)

	function handleFeatureClick(featureName: string) {
		trackFeatureInteraction(featureName, 'click');
	}

	const features = [
		{
			icon: '💬',
			image: ai,
			title: 'AI Discussion Starters',
			desc: 'Get smart, relevant talking points for every meeting.',
			color: 'var(--color-accent)',
			benefit: 'Go Beyond Small Talk.\nAlways Have an Insight Ready'
		},
		{
			icon: '🏢',
			image: company,
			title: 'Company Deep Dives',
			desc: 'Instantly understand company context and news.',
			color: 'var(--color-secondary)',
			benefit: "Demonstrate Your Commitment.\nShow You've Done Your Homework"
		},
		{
			icon: '🧑‍💼',
			image: intel,
			title: 'Attendee Intel',
			desc: 'Get rich profiles and backgrounds on everyone you meet.',
			color: 'var(--color-primary)',
			benefit: 'Know Your Audience.\nConnect Instantly'
		}
	];

	let selectedImage: string | null = null;

	function openFullScreen(image: string, featureTitle: string): void {
		selectedImage = image;
		trackEngagement('feature_image_view', featureTitle);
	}

	function closeFullScreen(): void {
		selectedImage = null;
		trackEngagement('feature_image_close', '');
	}
</script>

<SEO image="/og-image.png" url="/" />

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
			Ditch the Last-Minute Research<br />
			<span
				class="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent"
			>
				Never Be Unprepared for a Meeting Again
			</span>
		</h1>
		<p class="mb-8 max-w-2xl text-center text-lg text-gray-200 md:text-2xl">
			Get comprehensive attendee and company intel delivered automatically before your meetings.
		</p>
		<!-- Visual Placeholder -->
		<div
			class="group relative mb-8 w-full max-w-2xl overflow-hidden rounded-2xl border shadow-xl transition-all duration-300 hover:shadow-2xl"
			style="background: var(--color-bg-dark); border-color: var(--color-primary); aspect-ratio: 16/9;"
		>
			<div class="absolute inset-0 z-10">
				<iframe
					class="h-full w-full"
					src="https://www.youtube.com/embed/IDNpZuoeIOU?enablejsapi=1"
					title="MeetingHero.AI Demo"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
		</div>
		<div class="flex flex-col gap-4 md:flex-row">
			<a
				href="https://app.meetinghero.ai/"
				class="group relative overflow-hidden rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
				style="background: linear-gradient(to right, var(--color-primary), var(--color-secondary));"
				onclick={() => trackNavigation('Try Free Home Hero', 'https://app.meetinghero.ai/')}
			>
				<span class="relative z-10">Try It for Free for 7 Days</span>
				<div
					class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
				></div>
			</a>
			<a
				href={base + '/how-it-works'}
				class="group relative overflow-hidden rounded-full border px-8 py-4 text-lg font-semibold transition-all duration-300 hover:bg-[var(--color-bg-dark)]"
				style="border-color: var(--color-primary); color: var(--color-primary);"
				onclick={() => trackNavigation('How It Works', `${base}/how-it-works`)}
			>
				<span class="relative z-10">See How It Works</span>
				<div
					class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[var(--color-primary)]/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
				></div>
			</a>
		</div>
	</section>

	<!-- Problem/Solution Section -->
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
			Still scrambling to figure out who you're meeting?
		</h2>
		<p class="mb-4 text-center text-xl text-gray-300">Wasting time researching every attendee?</p>
		<p class="text-center text-xl font-semibold text-white">
			MeetingHero.AI automatically prepares you, delivering key insights directly to where you need
			them.
		</p>
	</section>

	<!-- Key Benefits Section -->
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
			Key Benefits
		</h2>
		<div class="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			{#each benefits as benefit}
				<div
					class="group relative flex flex-col items-center rounded-2xl border p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
					style="background: var(--color-bg-dark); border-color: {benefit.color};"
				>
					<span class="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110"
						>{benefit.icon}</span
					>
					<h3 class="mb-2 text-center text-xl font-bold">{benefit.title}</h3>
					<p class="text-center text-gray-300">{benefit.desc}</p>
					<div
						class="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-transparent to-[{benefit.color}] opacity-0 transition-opacity duration-300 group-hover:opacity-10"
					></div>
				</div>
			{/each}
		</div>
	</section>

	<!-- How It Works Snapshot -->
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
			How It Works
		</h2>
		<div class="flex w-full max-w-5xl flex-col justify-center gap-12 md:flex-row">
			{#each [{ icon: '📅', title: 'Connect Your Calendar', desc: 'Google • Outlook' }, { icon: '🤖', title: 'AI Gathers Intel', desc: 'Background, company, discussion points' }, { icon: '📬', title: 'Get Your Prep Delivered', desc: 'Email • Calendar' }] as step}
				<div class="group flex flex-col items-center">
					<span class="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110"
						>{step.icon}</span
					>
					<h3 class="mb-2 text-xl font-bold">{step.title}</h3>
					<p class="text-center text-gray-300">
						{@html step.desc.replace(/•/g, '<span style="color: var(--color-positive);">•</span>')}
					</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Feature Highlights -->
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
			Feature Highlights
		</h2>
		<div class="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
			{#each features as feature}
				<div
					class="group relative flex flex-col items-center rounded-2xl border p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
					style="background: var(--color-bg-dark); border-color: {feature.color};"
					onclick={() => handleFeatureClick(feature.title)}
					onkeydown={(e) =>
						(e.key === 'Enter' || e.key === ' ') && handleFeatureClick(feature.title)}
					role="button"
					tabindex="0"
				>
					<div
						class="group mb-4 flex h-32 cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-[var(--color-bg-dark)] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
						onclick={(e) => {
							e.stopPropagation();
							openFullScreen(feature.image, feature.title);
						}}
						onkeydown={(e) => {
							if (e.key === 'Enter') {
								e.stopPropagation();
								openFullScreen(feature.image, feature.title);
							}
						}}
						role="button"
						tabindex="0"
						aria-label="View {feature.title} in full screen"
					>
						<img
							src={feature.image}
							alt={feature.title}
							class="h-full w-full transform object-contain transition-transform duration-300 group-hover:scale-110"
						/>
					</div>
					<h3 class="mb-2 text-xl font-bold">{feature.title}</h3>
					<p class="text-center text-gray-300">{feature.desc}</p>
					<p style="color: var(--color-positive);" class="mt-4 text-center">
						{@html feature.benefit.replace(/\n/g, '<br />')}
					</p>
				</div>
			{/each}
		</div>
		<a
			href={base + '/features'}
			class="group relative z-10 mt-8 flex cursor-pointer items-center gap-2 text-lg font-semibold transition-all duration-300"
			style="color: var(--color-primary);"
			onclick={() => trackNavigation('All Features', `${base}/features`)}
		>
			See all features
			<span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
		</a>
	</section>

	<!-- Social Proof -->
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
			Trusted by Many
		</h2>
		<!-- <div class="mb-12 flex flex-wrap items-center justify-center gap-8">
			{#each [1, 2, 3] as i}
				<div
					class="group flex h-16 w-40 items-center justify-center rounded-xl border font-bold transition-all duration-300 hover:shadow-lg"
					style="background: var(--color-bg-dark); color: var(--color-primary); border-color: var(--color-primary);"
				>
					Logo {i}
				</div>
			{/each}
		</div> -->
		<div class="mx-auto max-w-2xl text-center">
			<blockquote class="mb-4 text-xl text-gray-300 italic">
				"My calendar is packed. The last thing I need is to scramble before a crucial stakeholder
				meeting. MeetingHero.AI cut my prep time by at least 75%, delivering a concise, powerful
				brief directly to my calendar. I'm always the most prepared person in the room,
				effortlessly."
			</blockquote>
			<span class="text-lg font-semibold" style="color: var(--color-primary);"
				>— Luke Sophinos, CEO, CourseKey</span
			>
		</div>
		<div class="mx-auto max-w-2xl text-center">
			<blockquote class="mb-4 text-xl text-gray-300 italic">
				"As an Account Manager, building strong client relationships is key. MeetingHero.AI uncovers
				details I'd never find on my own – like recent company news, background info and smart
				discussion points. It's incredible for sparking genuine conversations and showing I'm truly
				invested."
			</blockquote>
			<span class="text-lg font-semibold" style="color: var(--color-primary);"
				>— Beta User, Client Success Manager</span
			>

			<div class="mx-auto max-w-2xl text-center">
				<blockquote class="mb-4 text-xl text-gray-300 italic">
					"I was skeptical about another 'AI tool' but MeetingHero.AI is genuinely transformative.
					Setup took seconds, and it seamlessly integrates with my Google calendar. The automated
					briefs appear as if by magic. I can't imagine my workflow without it now."
				</blockquote>
				<span class="text-lg font-semibold" style="color: var(--color-primary);"
					>— Beta User, Sales Director</span
				>
			</div>
		</div>
	</section>

	<!-- Pricing Section -->
	<section
		class="relative flex w-full flex-col items-center px-4 py-24"
		style="background: var(--color-bg);"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-10"
		></div>
		<h2
			class="mb-6 text-center text-3xl font-semibold md:text-4xl"
			style="color: var(--color-primary);"
		>
			Choose Your Perfect Plan
		</h2>
		<div class="mb-12 max-w-5xl text-center">
			<p class="mb-8 text-xl text-gray-200">
				Start with a 7-day free trial and experience the power of automated meeting prep. <br />All
				plans include our full suite of AI insights, company news, and more
			</p>
			<div class="grid gap-6 md:grid-cols-3">
				<div
					class="rounded-xl border p-6 transition-all duration-300 hover:shadow-lg"
					style="border-color: var(--color-primary);"
				>
					<h3 class="mb-2 text-lg font-bold" style="color: var(--color-primary);">Starter Plan</h3>
					<p class="mb-2 text-2xl font-bold text-white">
						$4.99<span class="text-lg text-gray-300">/mo</span>
					</p>
					<p class="text-gray-300">60 individual lookups</p>
				</div>
				<div
					class="rounded-xl border p-6 transition-all duration-300 hover:shadow-lg"
					style="border-color: var(--color-secondary);"
				>
					<h3 class="mb-2 text-lg font-bold" style="color: var(--color-secondary);">
						Premium Plan
					</h3>
					<p class="mb-2 text-2xl font-bold text-white">
						$6.99<span class="text-lg text-gray-300">/mo</span>
					</p>
					<p class="text-gray-300">100 individual lookups</p>
				</div>
				<div
					class="rounded-xl border p-6 transition-all duration-300 hover:shadow-lg"
					style="border-color: var(--color-accent);"
				>
					<h3 class="mb-2 text-lg font-bold" style="color: var(--color-accent);">
						Professional Plan
					</h3>
					<p class="mb-2 text-2xl font-bold text-white">
						$9.99<span class="text-lg text-gray-300">/mo</span>
					</p>
					<p class="text-gray-300">200 individual lookups</p>
				</div>
			</div>
		</div>
		<p class="mb-8 text-center text-xl text-gray-300">
			For less than the cost of a daily coffee, get hours of your time back and the confidence to
			ace every meeting!
		</p>
		<div class="flex flex-col gap-4 md:flex-row">
			<a
				href="https://app.meetinghero.ai/"
				class="group relative overflow-hidden rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
				style="background: linear-gradient(to right, var(--color-primary), var(--color-secondary));"
				onclick={() => trackNavigation('Try Free Home pricing', 'https://app.meetinghero.ai/')}
			>
				<span class="relative z-10">Try It for Free for 7 Days</span>
				<div
					class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
				></div>
			</a>
			<a
				href={base + '/pricing'}
				class="group relative overflow-hidden rounded-full border px-8 py-4 text-lg font-semibold transition-all duration-300 hover:bg-[var(--color-bg-dark)]"
				style="border-color: var(--color-primary); color: var(--color-primary);"
				onclick={() => trackNavigation('Explore All Plans', `${base}/pricing`)}
			>
				<span class="relative z-10">Explore All Plans</span>
				<div
					class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[var(--color-primary)]/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
				></div>
			</a>
		</div>
	</section>

	<!-- Full Screen Modal -->
	{#if selectedImage}
		<div
			class="bg-opacity-90 fixed inset-0 z-50 flex items-center justify-center bg-black"
			onclick={closeFullScreen}
			onkeydown={(e) => e.key === 'Escape' && closeFullScreen()}
			role="button"
			tabindex="0"
		>
			<div class="relative max-h-[90vh] max-w-[90vw]">
				<img
					src={selectedImage}
					alt="Full screen view"
					class="max-h-[90vh] max-w-[90vw] object-contain"
				/>
				<button
					class="absolute -top-4 -right-4 rounded-full bg-white p-2 text-black hover:bg-gray-200"
					onclick={closeFullScreen}
					aria-label="Close full screen view"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
		</div>
	{/if}
</div>
