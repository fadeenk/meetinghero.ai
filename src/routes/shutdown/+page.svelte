<script lang="ts">
	import { base } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';
	import { trackNavigation, trackEngagement } from '$lib/analytics';

	const demos = [
		{
			title: 'Relaunch Demo',
			videoId: '6ZWbnt96Who',
			description: 'Final iteration with lessons learned and improvements'
		}
	];

	function handleVideoClick(title: string) {
		trackEngagement('shutdown_video_click', title);
	}
</script>

<SEO
	title="MeetingHero.AI Shutdown - Thank You for the Journey"
	description="MeetingHero.AI has shut down. Learn about our journey, the reasons behind the decision, and see the app in action through our demo videos."
	image="/og-image.png"
	url="/shutdown"
/>

<div class="flex min-h-screen flex-col font-sans text-white" style="background: var(--color-bg);">
	<!-- Hero Section -->
	<section
		class="relative flex w-full flex-col items-center justify-center overflow-hidden px-4 py-16"
		style="background: linear-gradient(to bottom, var(--color-bg), var(--color-bg-dark), var(--color-bg));"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-10"
		></div>
		<div class="relative z-10 text-center">
			<h1
				class="mb-6 text-4xl leading-tight font-bold md:text-6xl"
				style="color: var(--color-primary);"
			>
				MeetingHero.AI Has Shut Down
			</h1>
			<p class="mb-8 max-w-3xl text-lg text-gray-200 md:text-xl">
				After an incredible journey building AI-powered meeting preparation tools, I've made the
				difficult decision to shut down MeetingHero.AI. I'm grateful for every user who trusted me
				with their meeting preparation needs.
			</p>
			<div class="flex flex-col gap-4 md:flex-row md:justify-center">
				<a
					href="#why-we-shut-down"
					class="group relative overflow-hidden rounded-full border px-8 py-4 text-lg font-semibold transition-all duration-300 hover:bg-[var(--color-bg-dark)]"
					style="border-color: var(--color-primary); color: var(--color-primary);"
					onclick={() => trackNavigation('Why We Shut Down', '#why-we-shut-down')}
				>
					<span class="relative z-10">Why Shut Down</span>
					<div
						class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[var(--color-primary)]/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
					></div>
				</a>
				<a
					href="#see-app-in-action"
					class="group relative overflow-hidden rounded-full border px-8 py-4 text-lg font-semibold transition-all duration-300 hover:bg-[var(--color-bg-dark)]"
					style="border-color: var(--color-secondary); color: var(--color-secondary);"
					onclick={() => trackNavigation('See App in Action', '#see-app-in-action')}
				>
					<span class="relative z-10">See the App in Action</span>
					<div
						class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[var(--color-secondary)]/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
					></div>
				</a>
			</div>
		</div>
	</section>

	<!-- Why We Shut Down Section -->
	<section
		id="why-we-shut-down"
		class="relative flex w-full flex-col items-center px-4 py-24"
		style="background: var(--color-bg-dark);"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-secondary)_0%,_transparent_70%)] opacity-10"
		></div>
		<div class="relative z-10 w-full max-w-4xl">
			<h2
				class="mb-12 text-center text-3xl font-semibold md:text-4xl"
				style="color: var(--color-secondary);"
			>
				Why We Shut Down
			</h2>
			<div class="grid gap-8 md:grid-cols-2">
				<div
					class="rounded-2xl border p-8 shadow-lg"
					style="background: var(--color-bg); border-color: var(--color-primary);"
				>
					<h3 class="mb-4 text-xl font-bold" style="color: var(--color-primary);">
						📈 Demand Shift & AI Fatigue
					</h3>
					<p class="text-gray-300">
						When I started, there was tremendous appetite for AI tools. However, the market has
						shifted significantly. Users now experience "AI fatigue" and are more selective about
						which AI tools they adopt and pay for.
					</p>
				</div>
				<div
					class="rounded-2xl border p-8 shadow-lg"
					style="background: var(--color-bg); border-color: var(--color-secondary);"
				>
					<h3 class="mb-4 text-xl font-bold" style="color: var(--color-secondary);">
						🎯 Market Fit & Value Proposition
					</h3>
					<p class="text-gray-300">
						While I had passionate users, I struggled to clearly communicate my unique value
						proposition. Many potential users didn't immediately understand how MeetingHero.AI
						differed from general AI tools.
					</p>
				</div>
				<div
					class="rounded-2xl border p-8 shadow-lg"
					style="background: var(--color-bg); border-color: var(--color-accent);"
				>
					<h3 class="mb-4 text-xl font-bold" style="color: var(--color-accent);">
						🤖 Competition from General AI Tools
					</h3>
					<p class="text-gray-300">
						Users increasingly turned to ChatGPT and other general AI tools to achieve similar
						results without the integration. While my specialized approach was more efficient, the
						convenience of all-in-one solutions won out.
					</p>
				</div>
				<div
					class="rounded-2xl border p-8 shadow-lg"
					style="background: var(--color-bg); border-color: var(--color-primary);"
				>
					<h3 class="mb-4 text-xl font-bold" style="color: var(--color-primary);">💰 AI Costs</h3>
					<p class="text-gray-300">
						I assumed AI costs would decrease faster than they did. While costs have come down, the
						rate of reduction wasn't sufficient to make my economics work at the scale I needed.
					</p>
				</div>
				<div
					class="rounded-2xl border p-8 shadow-lg"
					style="background: var(--color-bg); border-color: var(--color-secondary);"
				>
					<h3 class="mb-4 text-xl font-bold" style="color: var(--color-secondary);">
						⚖️ Economics of Scale
					</h3>
					<p class="text-gray-300">
						I had many power users who significantly increased my costs, but not enough users with
						low to medium usage to subsidize those extra costs. This created an unsustainable unit
						economics model.
					</p>
				</div>
				<div
					class="rounded-2xl border p-8 shadow-lg"
					style="background: var(--color-bg); border-color: var(--color-accent);"
				>
					<h3 class="mb-4 text-xl font-bold" style="color: var(--color-accent);">
						📢 User Acquisition Challenges
					</h3>
					<p class="text-gray-300">
						People are tired of paying for subscriptions, word-of-mouth and referrals didn't scale
						as expected, and my marketing and cold outreach efforts weren't successful enough to
						sustain the business.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Business & Product Insights Section -->
	<section
		class="relative flex w-full flex-col items-center px-4 py-24"
		style="background: var(--color-bg);"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_70%)] opacity-10"
		></div>
		<div class="relative z-10 w-full max-w-6xl">
			<h2
				class="mb-12 text-center text-3xl font-semibold md:text-4xl"
				style="color: var(--color-accent);"
			>
				Business & Product Insights
			</h2>

			<!-- Timeline/Journey -->
			<div class="mb-16">
				<h3 class="mb-8 text-center text-2xl font-bold" style="color: var(--color-primary);">
					📅 Timeline & Journey
				</h3>
				<div class="relative">
					<div
						class="absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)]"
					></div>
					<div class="space-y-8">
						<div class="relative flex items-center">
							<div
								class="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-[var(--color-accent)]"
							></div>
							<div class="w-1/2 pr-8 text-right">
								<h4 class="text-lg font-bold text-white">Development started</h4>
								<p class="text-sm text-gray-400">December 2024 - Initial development</p>
								<p class="text-gray-300">
									Started building the core infrastructure and AI integration
								</p>
							</div>
							<div class="w-1/2 pl-8"></div>
						</div>
						<div class="relative flex items-center">
							<div
								class="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-[var(--color-primary)]"
							></div>
							<div class="w-1/2 pr-8"></div>
							<div class="w-1/2 pl-8">
								<h4 class="text-lg font-bold text-white">Alpha Launch</h4>
								<p class="text-sm text-gray-400">March 2025 - Initial concept validation</p>
								<p class="text-gray-300">
									Built the first working prototype to test core functionality, and get approvals
									for integrating with Google Calendar and Microsoft Outlook
								</p>
							</div>
						</div>
						<div class="relative flex items-center">
							<div
								class="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-[var(--color-secondary)]"
							></div>
							<div class="w-1/2 pr-8 text-right">
								<h4 class="text-lg font-bold text-white">Beta Release</h4>
								<p class="text-sm text-gray-400">April 2025 - User feedback integration</p>
								<p class="text-gray-300">Refined UI/UX based on early user feedback</p>
							</div>
							<div class="w-1/2 pl-8"></div>
						</div>
						<div class="relative flex items-center">
							<div
								class="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-[var(--color-primary)]"
							></div>
							<div class="w-1/2 pr-8"></div>
							<div class="w-1/2 pl-8">
								<h4 class="text-lg font-bold text-white">Official Launch</h4>
								<p class="text-sm text-gray-400">May 17, 2025 - Full basic feature set release</p>
								<p class="text-gray-300">Launched with complete feature set and marketing push</p>
							</div>
						</div>
						<div class="relative flex items-center">
							<div
								class="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-[var(--color-secondary)]"
							></div>
							<div class="w-1/2 pr-8 text-right">
								<h4 class="text-lg font-bold text-white">Relaunch</h4>
								<p class="text-sm text-gray-400">July 2025 - Final iteration</p>
								<p class="text-gray-300">
									Attempted relaunch with lessons learned, improvements, and new features
								</p>
							</div>
							<div class="w-1/2 pl-8"></div>
						</div>
						<div class="relative flex items-center">
							<div class="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-red-500"></div>
							<div class="w-1/2 pr-8"></div>
							<div class="w-1/2 pl-8">
								<h4 class="text-lg font-bold text-white">Shutdown</h4>
								<p class="text-sm text-gray-400">October 2025 - End of journey</p>
								<p class="text-gray-300">Made the difficult decision to shut down the service</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- What I Learned -->
			<div class="mb-16">
				<h3 class="mb-8 text-center text-2xl font-bold" style="color: var(--color-secondary);">
					💡 What I Learned
				</h3>
				<div class="grid gap-6 md:grid-cols-2">
					<div
						class="rounded-xl border p-6"
						style="background: var(--color-bg-dark); border-color: var(--color-primary);"
					>
						<h4 class="mb-3 text-lg font-bold" style="color: var(--color-primary);">
							Market Timing Matters
						</h4>
						<p class="text-gray-300">
							The AI tool market shifted faster than I anticipated. Early adopters became fatigued,
							and new users were more selective.
						</p>
					</div>
					<div
						class="rounded-xl border p-6"
						style="background: var(--color-bg-dark); border-color: var(--color-secondary);"
					>
						<h4 class="mb-3 text-lg font-bold" style="color: var(--color-secondary);">
							Value Proposition Clarity
						</h4>
						<p class="text-gray-300">
							I struggled to clearly communicate why MeetingHero.AI was better than using ChatGPT
							directly for meeting prep.
						</p>
					</div>
					<div
						class="rounded-xl border p-6"
						style="background: var(--color-bg-dark); border-color: var(--color-accent);"
					>
						<h4 class="mb-3 text-lg font-bold" style="color: var(--color-accent);">
							Unit Economics Are Critical
						</h4>
						<p class="text-gray-300">
							Power users consumed resources disproportionately, making it hard to build sustainable
							unit economics.
						</p>
					</div>
					<div
						class="rounded-xl border p-6"
						style="background: var(--color-bg-dark); border-color: var(--color-primary);"
					>
						<h4 class="mb-3 text-lg font-bold" style="color: var(--color-primary);">
							User Acquisition Reality
						</h4>
						<p class="text-gray-300">
							Organic growth and referrals weren't enough. Paid acquisition was expensive and didn't
							scale as expected.
						</p>
					</div>
				</div>
			</div>

			<!-- By the Numbers -->
			<div class="mb-16">
				<h3 class="mb-8 text-center text-2xl font-bold" style="color: var(--color-accent);">
					📊 By the Numbers
				</h3>
				<div class="grid gap-6 md:grid-cols-5">
					<div class="text-center">
						<div class="mb-2 text-4xl font-bold" style="color: var(--color-primary);">39</div>
						<div class="text-gray-300">Users Served</div>
					</div>
					<div class="text-center">
						<div class="mb-2 text-4xl font-bold" style="color: var(--color-secondary);">7402</div>
						<div class="text-gray-300">Meetings Analyzed</div>
					</div>
					<div class="text-center">
						<div class="mb-2 text-4xl font-bold" style="color: var(--color-accent);">1674</div>
						<div class="text-gray-300">Preps completed</div>
					</div>
					<div class="text-center">
						<div class="mb-2 text-4xl font-bold" style="color: var(--color-secondary);">11.6</div>
						<div class="text-gray-300">Days Saved</div>
					</div>
					<div class="text-center">
						<div class="mb-2 text-4xl font-bold" style="color: var(--color-primary);">12</div>
						<div class="text-gray-300">Months Active</div>
					</div>
				</div>
			</div>

			<!-- Feature Evolution -->
			<div>
				<h3 class="mb-8 text-center text-2xl font-bold" style="color: var(--color-secondary);">
					🚀 Feature Evolution
				</h3>
				<div class="space-y-6">
					<div
						class="rounded-xl border p-6"
						style="background: var(--color-bg-dark); border-color: var(--color-primary);"
					>
						<div class="flex items-center gap-4">
							<div class="text-2xl">🎯</div>
							<div>
								<h4 class="text-lg font-bold text-white">AI Discussion Starters</h4>
								<p class="text-gray-300">
									Evolved from basic talking points to contextual, personalized conversation
									starters based on attendee backgrounds and company news.
								</p>
							</div>
						</div>
					</div>
					<div
						class="rounded-xl border p-6"
						style="background: var(--color-bg-dark); border-color: var(--color-secondary);"
					>
						<div class="flex items-center gap-4">
							<div class="text-2xl">🏢</div>
							<div>
								<h4 class="text-lg font-bold text-white">Company Intelligence</h4>
								<p class="text-gray-300">
									Started with basic company info, then added real-time news monitoring, funding
									updates, and competitive analysis.
								</p>
							</div>
						</div>
					</div>
					<div
						class="rounded-xl border p-6"
						style="background: var(--color-bg-dark); border-color: var(--color-accent);"
					>
						<div class="flex items-center gap-4">
							<div class="text-2xl">👥</div>
							<div>
								<h4 class="text-lg font-bold text-white">Attendee Profiles</h4>
								<p class="text-gray-300">
									Grew from LinkedIn scraping to comprehensive background research including
									education, career history, and recent achievements.
								</p>
							</div>
						</div>
					</div>
					<div
						class="rounded-xl border p-6"
						style="background: var(--color-bg-dark); border-color: var(--color-primary);"
					>
						<div class="flex items-center gap-4">
							<div class="text-2xl">📋</div>
							<div>
								<h4 class="text-lg font-bold text-white">Complete Changelog</h4>
								<p class="mb-4 text-gray-300">
									Explore the full journey of MeetingHero.AI with detailed updates, feature
									releases, and improvements.
								</p>
								<a
									href={base + '/changelog'}
									class="group relative inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-[var(--color-bg)]"
									style="border-color: var(--color-primary); color: var(--color-primary);"
									onclick={() => trackNavigation('View Changelog', `${base}/changelog`)}
								>
									<span class="relative z-10">View Full Changelog</span>
									<span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- See the App in Action Section -->
	<section
		id="see-app-in-action"
		class="relative flex w-full flex-col items-center px-4 py-24"
		style="background: var(--color-bg);"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-10"
		></div>
		<div class="relative z-10 w-full max-w-6xl">
			<h2
				class="mb-12 text-center text-3xl font-semibold md:text-4xl"
				style="color: var(--color-primary);"
			>
				See the App in Action
			</h2>
			<p class="mb-12 text-center text-lg text-gray-300">
				Take a look at the final version of MeetingHero.AI
			</p>
			<div class="flex justify-center">
				<div class="w-full max-w-5xl">
					{#each demos as demo}
						<div
							class="group relative flex flex-col items-center rounded-2xl border p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
							style="background: var(--color-bg-dark); border-color: var(--color-primary);"
						>
							<h3 class="mb-6 text-2xl font-bold" style="color: var(--color-primary);">
								{demo.title}
							</h3>
							<div
								class="group mb-6 w-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
								style="aspect-ratio: 16/9;"
							>
								<iframe
									class="h-full w-full"
									src="https://www.youtube.com/embed/{demo.videoId}?enablejsapi=1"
									title="{demo.title} - MeetingHero.AI"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
								></iframe>
							</div>
							<p class="text-center text-lg text-gray-300">{demo.description}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Thank You Section -->
	<section
		class="relative flex w-full flex-col items-center px-4 py-24"
		style="background: var(--color-bg-dark);"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-secondary)_0%,_transparent_70%)] opacity-10"
		></div>
		<div class="relative z-10 w-full max-w-4xl text-center">
			<h2 class="mb-8 text-3xl font-semibold md:text-4xl" style="color: var(--color-secondary);">
				Thank You
			</h2>
			<p class="mb-8 text-lg text-gray-300">
				To every user who trusted MeetingHero.AI with their meeting preparation needs, thank you.
				Your feedback, support, and success stories made this journey worthwhile. I learned
				invaluable lessons about building AI products, understanding market dynamics, and the
				importance of sustainable business models.
			</p>
			<p class="text-lg text-gray-300">
				While MeetingHero.AI may be gone, the experience and insights I gained will continue to
				shape my future endeavors in the AI and productivity space.
			</p>
		</div>
	</section>
</div>
