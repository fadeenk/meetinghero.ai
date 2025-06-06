<script>
	import SEO from '$lib/components/SEO.svelte';
	// Placeholder for future interactivity or team images
</script>

<SEO title="Ownership - MeetingHero.ai" image="/og-image.png" url="/ownership" />

<div class="flex flex-col font-sans text-white" style="background: var(--color-bg);">
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
			Ownership Information
		</h1>
		<p class="mb-8 max-w-2xl text-center text-lg text-gray-300 md:text-xl">
			MeetingHero.AI is a product of <a
				href="https://internetcandycorp.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-primary hover:underline"
				style="color: var(--color-primary);">Internet Candy Corporation</a
			>
		</p>
	</section>

	<!-- Owner Information -->
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
				Owner
			</h2>
			<p class="mb-6 text-center text-xl text-gray-300">Fadee Kannah</p>
		</div>
	</section>

	<!-- Contact Information -->
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
				Contact Information
			</h2>
			<div class="mb-6 text-center text-xl text-gray-300">
				<p class="mb-2">fadee@internetcandycorp.com</p>
				<p class="mb-4">fadee@meetinghero.ai</p>
			</div>
		</div>
	</section>

	<!-- Address -->
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
				Address
			</h2>
			<div class="mb-6 text-center text-xl text-gray-300">
				<p>304 S Jones blvd</p>
				<p>Suite 3341</p>
				<p>Las Vegas, NV 89107</p>
			</div>
		</div>
	</section>
</div>
