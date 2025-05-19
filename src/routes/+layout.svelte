<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { trackPageView } from '$lib/analytics';

	onMount(() => {
		// Track initial page view
		trackPageView($page.url.pathname);

		// Track subsequent page views
		$: if ($page) {
			trackPageView($page.url.pathname);
		}
	});
	let { children } = $props();
	let mobileNavOpen = $state(false);
	const pages = ['Home', 'How It Works', 'Features', 'Tools', 'Pricing', 'FAQ', 'About Us'];
</script>

<nav
	class="sticky top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300"
	style="background: rgba(0, 0, 0, 0.3); border-color: var(--color-bg-dark);"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
		<a
			href={base + '/'}
			class="group flex items-center gap-2 text-2xl font-bold tracking-tight transition-transform hover:scale-105"
			style="color: var(--color-primary);"
		>
			<span class="relative">
				MeetingHero.AI
				<span
					class="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] transition-all duration-300 group-hover:w-full"
				></span>
			</span>
		</a>
		<div class="hidden gap-8 text-sm font-medium md:flex">
			{#each pages as item}
				<a
					href={item === 'Home' ? base + '/' : base + '/' + item.toLowerCase().replace(/ /g, '-')}
					class="relative text-white transition-all duration-300 hover:text-[var(--color-primary)]"
				>
					{item}
					<span
						class="absolute -bottom-1 left-0 h-0.5 w-0 bg-[var(--color-primary)] transition-all duration-300 hover:w-full"
					></span>
				</a>
			{/each}
		</div>
		<!-- Mobile menu button -->
		<button
			class="flex items-center justify-center rounded-lg p-2 transition-all duration-300 hover:bg-[var(--color-bg-dark)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none md:hidden"
			aria-label="Open navigation"
			onclick={() => (mobileNavOpen = !mobileNavOpen)}
		>
			<div class="relative h-7 w-7">
				<!-- Hamburger Icon -->
				<svg
					class="absolute h-7 w-7 text-white transition-all duration-300"
					class:opacity-0={mobileNavOpen}
					class:rotate-90={mobileNavOpen}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					stroke-width="2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
				<!-- X Icon -->
				<svg
					class="absolute h-7 w-7 text-white transition-all duration-300"
					class:opacity-0={!mobileNavOpen}
					class:rotate-90={!mobileNavOpen}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					stroke-width="2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</div>
		</button>
	</div>
	<!-- Mobile Nav Links -->
	{#if mobileNavOpen}
		<div
			class="animate-fade-in-down fixed inset-x-0 top-[72px] z-40 flex flex-col gap-2 border-b border-[var(--color-bg-dark)] bg-[var(--color-bg)] px-4 py-4 shadow-lg backdrop-blur-md md:hidden"
			style="background: rgba(0, 0, 0, 0.95);"
		>
			{#each pages as item}
				<a
					href={item === 'Home' ? base + '/' : base + '/' + item.toLowerCase().replace(/ /g, '-')}
					class="group relative flex items-center rounded-lg px-4 py-3 text-white transition-all duration-300 hover:bg-[var(--color-bg-dark)] hover:text-[var(--color-primary)]"
					onclick={() => (mobileNavOpen = false)}
				>
					<span class="relative flex items-center gap-3">
						<!-- Navigation Icons -->
						{#if item === 'Home'}
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
								/>
							</svg>
						{:else if item === 'How It Works'}
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 10V3L4 14h7v7l9-11h-7z"
								/>
							</svg>
						{:else if item === 'Features'}
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
								/>
							</svg>
						{:else if item === 'Tools'}
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
								/>
							</svg>
						{:else if item === 'Pricing'}
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						{:else if item === 'FAQ'}
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						{:else if item === 'About Us'}
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						{/if}
						{item}
					</span>
					<span
						class="absolute -bottom-1 left-0 h-0.5 w-0 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"
					></span>
				</a>
			{/each}
		</div>
	{/if}
</nav>

{@render children()}

<!-- Footer -->
<footer
	class="flex w-full flex-col items-center justify-between border-t px-4 py-8 text-sm text-gray-400 md:flex-row"
	style="background: var(--color-bg); border-color: var(--color-bg-dark);"
>
	<div class="flex items-center gap-2">
		<a href={base + '/'} class="text-lg font-bold" style="color: var(--color-primary);"
			>MeetingHero.AI</a
		>
		<span>© {new Date().getFullYear()}. All rights reserved.</span>
	</div>
	<div class="mt-4 flex gap-6 md:mt-0">
		<a
			href={base + '/privacypolicy'}
			class="group relative text-gray-400 transition-all duration-300 hover:text-[var(--color-primary)]"
		>
			Privacy Policy
			<span
				class="absolute -bottom-1 left-0 h-0.5 w-0 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"
			></span>
		</a>
		<a
			href={base + '/termsofservice'}
			class="group relative text-gray-400 transition-all duration-300 hover:text-[var(--color-primary)]"
		>
			Terms of Service
			<span
				class="absolute -bottom-1 left-0 h-0.5 w-0 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"
			></span>
		</a>
	</div>
</footer>
