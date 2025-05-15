<script lang="ts">
	export let title = 'MeetingHero.ai - AI-Powered Meeting Assistant';
	export let description =
		'Transform your meetings with AI-powered transcription, summarization, and insights. Get real-time meeting assistance and automated follow-ups.';
	export let image = '/logo.png';
	export let url = '';
	export let type = 'website';

	// Ensure URL is absolute
	$: fullUrl = url ? `https://meetinghero.ai${url}` : 'https://meetinghero.ai';
	$: fullImageUrl = `https://meetinghero.ai${image}`;
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={fullUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={fullImageUrl} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={fullUrl} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={fullImageUrl} />

	<!-- Additional Meta Tags -->
	<meta name="robots" content="index, follow" />
	<meta name="language" content="English" />
	<meta name="revisit-after" content="7 days" />
	<meta name="author" content="MeetingHero.ai" />
</svelte:head>
