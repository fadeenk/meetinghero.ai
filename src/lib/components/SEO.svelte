<script lang="ts">
	export let title = 'MeetingHero.AI: AI-Powered Meeting Prep & Insights';
	export let description =
		'Elevate your meetings with MeetingHero.AI. Get automated, AI-powered prep, directly in your calendar or email. Try it free!';
	export let image = '/og-image.png';
	export let url = '';
	export const type = 'website';
	export const keywords =
		'AI meeting prep, Automated meeting preparation, Meeting assistant AI, Calendar meeting prep, Attendee research tool, Meeting productivity tool, AI sales meeting prep, Business development meeting tool, Meeting attendee insights, Company background for meetings, Automated Rolodex, AI research assistant';

	// Ensure URL is absolute
	$: fullUrl = url ? `https://meetinghero.ai${url}` : 'https://meetinghero.ai';
	$: fullImageUrl = `https://meetinghero.ai${image}`;
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="theme-color" content="#000000" />

	<!-- Canonical URL -->
	<link rel="canonical" href={fullUrl} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={fullUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={fullImageUrl} />
	<meta property="og:site_name" content="MeetingHero.ai" />

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
