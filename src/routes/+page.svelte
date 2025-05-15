<script>
	import { base } from '$app/paths';
	// Placeholder for future interactivity (e.g., modal, video, etc.)
</script>

<div class="flex min-h-screen flex-col font-sans text-white" style="background: var(--color-bg);">
	<!-- Hero Section -->
	<section
		class="relative flex w-full flex-col items-center justify-center overflow-hidden px-4 py-24"
		style="background: linear-gradient(to bottom, var(--color-bg), var(--color-bg-dark), var(--color-bg));"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-10"
		></div>
		<h1
			class="mb-6 text-center text-4xl leading-tight font-bold drop-shadow-lg md:text-7xl"
			style="color: var(--color-primary);"
		>
			Stop Scrambling,<br />
			<span
				class="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent"
			>
				Start Your Meeting Prepared
			</span>
		</h1>
		<p class="mb-12 max-w-2xl text-center text-lg text-gray-200 md:text-2xl">
			Get Automated Intel on Attendees and Companies Before Every Meeting
		</p>
		<!-- Visual Placeholder -->
		<div
			class="group relative mb-12 w-full max-w-2xl overflow-hidden rounded-2xl border shadow-xl transition-all duration-300 hover:shadow-2xl"
			style="background: var(--color-bg-dark); border-color: var(--color-primary); aspect-ratio: 16/9;"
		>
			<div class="absolute inset-0 z-10">
				<iframe
					class="h-full w-full"
					src="https://www.youtube.com/embed/IDNpZuoeIOU"
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
			>
				<span class="relative z-10">Try Free for 7 Days</span>
				<div
					class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
				></div>
			</a>
			<a
				href={base + '/how-it-works'}
				class="group relative overflow-hidden rounded-full border px-8 py-4 text-lg font-semibold transition-all duration-300 hover:bg-[var(--color-bg-dark)]"
				style="border-color: var(--color-primary); color: var(--color-primary);"
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
			{#each [{ icon: '⏳', title: 'Save Time', desc: 'Save hours of prep time weekly.', color: 'var(--color-primary)' }, { icon: '💡', title: 'Be Confident & Informed', desc: 'Walk into every meeting confident and informed.', color: 'var(--color-secondary)' }, { icon: '🤝', title: 'Build Stronger Connections', desc: 'Have more personalized and productive conversations.', color: 'var(--color-accent)' }, { icon: '⚡', title: 'Effortless Automation', desc: 'Seamlessly plugs into your calendar.', color: 'var(--color-secondary)' }] as benefit}
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
			{#each [{ icon: '🧑‍💼', title: 'Attendee Intel', desc: 'Get rich profiles and backgrounds on everyone you meet.', color: 'var(--color-primary)' }, { icon: '🏢', title: 'Company Deep Dives', desc: 'Instantly understand company context and news.', color: 'var(--color-secondary)' }, { icon: '💬', title: 'AI Discussion Starters', desc: 'Get smart, relevant talking points for every meeting.', color: 'var(--color-accent)' }] as feature}
				<div
					class="group relative flex flex-col items-center rounded-2xl border p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
					style="background: var(--color-bg-dark); border-color: {feature.color};"
				>
					<span class="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110"
						>{feature.icon}</span
					>
					<h3 class="mb-2 text-xl font-bold">{feature.title}</h3>
					<p class="text-center text-gray-300">{feature.desc}</p>
					<div
						class="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-transparent to-[{feature.color}] opacity-0 transition-opacity duration-300 group-hover:opacity-10"
					></div>
				</div>
			{/each}
		</div>
		<a
			href={base + '/features'}
			class="group relative z-10 mt-8 flex cursor-pointer items-center gap-2 text-lg font-semibold transition-all duration-300"
			style="color: var(--color-primary);"
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
				"MeetingHero.AI made me feel prepared for every call. Huge time saver!"
			</blockquote>
			<span class="text-lg font-semibold" style="color: var(--color-primary);">— Luke Sophinos</span
			>
		</div>
	</section>

	<!-- Secondary CTA -->
	<section
		class="relative flex w-full flex-col items-center px-4 py-24"
		style="background: linear-gradient(to top, var(--color-bg), var(--color-bg-dark));"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-10"
		></div>
		<a
			href="https://app.meetinghero.ai/"
			class="group relative overflow-hidden rounded-full px-12 py-4 text-xl font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
			style="background: linear-gradient(to right, var(--color-primary), var(--color-secondary));"
		>
			<span class="relative z-10">Try Free for 7 Days</span>
			<div
				class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
			></div>
		</a>
	</section>
</div>
