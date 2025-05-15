<script>
	import SEO from '$lib/components/SEO.svelte';
	// Placeholder for future interactivity or team images
</script>

<SEO
	title="About Us - MeetingHero.ai"
	description="Meet Fadee Kannah, founder of MeetingHero.ai. Learn about our mission to help professionals save time and have more successful meetings through AI-powered meeting preparation."
	image="/logo.png"
	url="/about-us"
/>

<div class="flex min-h-screen flex-col font-sans text-white" style="background: var(--color-bg);">
	<!-- Headline -->
	<section
		class="relative flex w-full flex-col items-center justify-center overflow-hidden px-4 py-24"
		style="background: var(--color-bg-dark);"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-10"
		></div>
		<h1
			class="mb-6 text-center text-4xl leading-tight font-bold md:text-6xl"
			style="color: var(--color-primary);"
		>
			My Story
		</h1>
		<p class="mb-8 max-w-2xl text-center text-lg text-gray-300 md:text-xl">
			I'm Fadee Kannah, the founder of MeetingHero.AI. Here's why I built this product and what
			drives me every day.
		</p>
	</section>

	<!-- Mission -->
	<section
		class="relative flex w-full flex-col items-center justify-center px-4 py-24"
		style="background: var(--color-bg);"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-10"
		></div>
		<div class="relative z-10 max-w-4xl">
			<h2
				class="mb-6 text-center text-3xl font-semibold md:text-4xl"
				style="color: var(--color-primary);"
			>
				My Mission
			</h2>
			<p class="mb-6 text-center text-xl text-gray-300">
				I want to help professionals save time, walk into every meeting prepared, and have more
				successful, meaningful conversations.
			</p>
		</div>
	</section>

	<!-- Vision -->
	<section
		class="relative flex w-full flex-col items-center justify-center px-4 py-24"
		style="background: var(--color-bg-dark);"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-secondary)_0%,_transparent_70%)] opacity-10"
		></div>
		<div class="relative z-10 max-w-4xl">
			<h2
				class="mb-6 text-center text-3xl font-semibold md:text-4xl"
				style="color: var(--color-secondary);"
			>
				My Vision
			</h2>
			<p class="mb-6 text-center text-xl text-gray-300">
				I envision a world where every professional is empowered with instant, actionable
				insights—making meetings more productive, personal, and impactful. My goal is to build the
				go-to platform for meeting intelligence and preparation.
			</p>
		</div>
	</section>

	<!-- Origin Story -->
	<section
		class="relative flex w-full flex-col items-center justify-center px-4 py-24"
		style="background: var(--color-bg);"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_70%)] opacity-10"
		></div>
		<div class="relative z-10 max-w-4xl">
			<h2
				class="mb-6 text-center text-3xl font-semibold md:text-4xl"
				style="color: var(--color-accent);"
			>
				Why I Started MeetingHero.AI
			</h2>
			<p class="mb-6 text-center text-xl text-gray-300">
				MeetingHero.AI was born out of my own frustration: scrambling before meetings to research
				attendees and companies because I was added to a meeting last minute. As an entrepreneur,
				tech expert, and co-founder at CourseKey, I've spent years in fast-paced business
				environments. I experienced firsthand how much time and energy is wasted on manual meeting
				prep—and how much better meetings could be with the right intel, delivered automatically.
				That's why I decided to build MeetingHero.AI.
			</p>
		</div>
	</section>

	<!-- Values -->
	<section
		class="relative flex w-full flex-col items-center justify-center px-4 py-24"
		style="background: var(--color-bg-dark);"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-10"
		></div>
		<div class="relative z-10 max-w-6xl">
			<h2
				class="mb-12 text-center text-3xl font-semibold md:text-4xl"
				style="color: var(--color-primary);"
			>
				My Values
			</h2>
			<div class="grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
				{#each [{ title: 'Efficiency', desc: 'I believe in saving you time and making every minute count.', color: 'var(--color-primary)' }, { title: 'Innovation', desc: 'I use the latest AI technology to deliver real value, not just buzzwords.', color: 'var(--color-secondary)' }, { title: 'Privacy', desc: "Your data is yours. I'm committed to transparency and security.", color: 'var(--color-accent)' }, { title: 'User Focus', desc: 'I build with your needs in mind, always listening and improving.', color: 'var(--color-positive)' }] as value}
					<div
						class="group relative flex flex-col rounded-2xl border p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
						style="background: var(--color-bg); border-color: {value.color};"
					>
						<span class="mb-2 text-xl font-bold" style="color: {value.color};">{value.title}</span>
						<p class="text-gray-300">{value.desc}</p>
						<div
							class="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-transparent to-[{value.color}] opacity-0 transition-opacity duration-300 group-hover:opacity-10"
						></div>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>
