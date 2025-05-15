<script lang="ts">
	// Share function using Web Share API
	async function sharePage() {
		const shareData = {
			title: 'Contact Management Guide | MeetingHero.AI',
			text: 'I just found this helpful Contact Management Guide on MeetingHero.AI! Check it out:',
			url: window.location.href
		};

		try {
			if (navigator.share) {
				await navigator.share(shareData);
			} else {
				// Fallback for browsers that don't support Web Share API
				await navigator.clipboard.writeText(window.location.href);
				alert('Link copied to clipboard!');
			}
		} catch (err) {
			console.error('Error sharing:', err);
		}
	}

	function copyTemplate(content: string) {
		navigator.clipboard.writeText(content);
	}
</script>

<div class="flex min-h-screen flex-col font-sans text-white" style="background: var(--color-bg);">
	<!-- Headline -->
	<section
		class="flex w-full flex-col items-center justify-center px-4 py-16"
		style="background: var(--color-bg-dark);"
	>
		<h1
			class="mb-4 text-center text-4xl font-bold md:text-5xl"
			style="color: var(--color-primary);"
		>
			Contact Management Guide
		</h1>
		<p class="mb-8 max-w-2xl text-center text-lg text-gray-300 md:text-xl">
			Turn connections made in meetings into valuable relationships with our comprehensive guide
		</p>
	</section>

	<!-- Main Content -->
	<section class="mx-auto w-full max-w-4xl px-4 py-12">
		<div class="space-y-12">
			<!-- Introduction -->
			<div class="rounded-xl bg-[var(--color-bg-dark)] p-8 shadow-lg">
				<h2 class="mb-4 text-2xl font-bold" style="color: var(--color-primary);">The Goal</h2>
				<p class="mb-6 text-gray-300">
					To effectively capture information about people you meet, remember key details, follow up
					appropriately, and build a valuable network.
				</p>
				<h3 class="mb-4 text-xl font-semibold" style="color: var(--color-secondary);">
					Why Bother?
				</h3>
				<p class="text-gray-300">
					Your network is a key asset. Remembering who people are, what you discussed, and following
					up builds trust, opens opportunities, and strengthens professional relationships.
				</p>
			</div>

			<!-- Phase 1: Before the Meeting -->
			<div class="rounded-xl bg-[var(--color-bg-dark)] p-8 shadow-lg">
				<h2 class="mb-4 text-2xl font-bold" style="color: var(--color-primary);">
					Phase 1: Before the Meeting
				</h2>
				<p class="mb-4 text-gray-300">Preparation is Key</p>
				<ul class="list-inside list-disc space-y-4 text-gray-300">
					<li>
						<strong>Set Your Goal:</strong> Know why you are attending and who you hope to meet or connect
						with.
					</li>
					<li>
						<strong>Research (If Possible):</strong> Look at the attendee list, company list, or LinkedIn
						profiles beforehand. This helps you identify key people and potential conversation starters.
					</li>
					<li>
						<strong>Prepare Your Tools:</strong>
						<ul class="mt-2 ml-6 list-inside list-disc">
							<li>Business cards (yours)</li>
							<li>
								A method for capturing their information and notes:
								<ul class="mt-2 ml-6 list-inside list-disc">
									<li>Your phone (notes app, contact app, or a scanning app)</li>
									<li>A small notebook and pen</li>
									<li>
										A system for marking or adding notes to physical business cards you receive.
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</div>

			<!-- Phase 2: During the Meeting -->
			<div class="rounded-xl bg-[var(--color-bg-dark)] p-8 shadow-lg">
				<h2 class="mb-4 text-2xl font-bold" style="color: var(--color-primary);">
					Phase 2: During the Meeting
				</h2>
				<p class="mb-4 text-gray-300">Connect & Capture</p>
				<ul class="list-inside list-disc space-y-4 text-gray-300">
					<li>
						<strong>Focus on Connecting:</strong> Have genuine conversations. Ask questions and listen
						actively.
					</li>
					<li>
						<strong>Exchange Information:</strong> Swap business cards or connect via LinkedIn/phone
						contact exchange.
					</li>
					<li>
						<strong>TAKE NOTES (Crucial Step!):</strong> Immediately after (or even during,
						discreetly) jot down:
						<ul class="mt-2 ml-6 list-inside list-disc">
							<li>
								<strong>Context:</strong> Where/when did you meet? (e.g., "Marketing Conference, Day
								2")
							</li>
							<li>
								<strong>Key Discussion Points:</strong> What did you talk about? (e.g., "Discussed challenges
								with SEO," "Mentioned his dog, Max," "Needed intro to [Person X]")
							</li>
							<li>
								<strong>Next Steps:</strong> What did you agree to do? (e.g., "Send him that article,"
								"Schedule a follow-up call," "Connect him with [Person Y]")
							</li>
							<li>
								<strong>Personal Details:</strong> Anything memorable or personal that can help you remember
								them and personalize future interactions. (e.g., "Fan of hiking," "Based in Seattle,"
								"Has 2 kids")
							</li>
						</ul>
					</li>
				</ul>
			</div>

			<!-- Phase 3: After the Meeting -->
			<div class="rounded-xl bg-[var(--color-bg-dark)] p-8 shadow-lg">
				<h2 class="mb-4 text-2xl font-bold" style="color: var(--color-primary);">
					Phase 3: Immediately After the Meeting
				</h2>
				<p class="mb-4 text-gray-300">Process & Organize</p>
				<p class="mb-4 text-gray-300">
					Do this as soon as possible, ideally within a few hours or by the end of the day.
				</p>
				<ul class="list-inside list-disc space-y-4 text-gray-300">
					<li>
						<strong>Gather Everything:</strong> Collect all the business cards and notes you took.
					</li>
					<li>
						<strong>Input the Information:</strong>
						<ul class="mt-2 ml-6 list-inside list-disc">
							<li>
								<strong>Choose Your System:</strong> Where will you store this?
								<ul class="mt-2 ml-6 list-inside list-disc">
									<li>
										Simple: A spreadsheet (like Excel or Google Sheets), a notes app (Evernote,
										OneNote, Apple Notes), or just your phone's contacts with detailed notes.
									</li>
									<li>
										More Advanced: A dedicated CRM (Customer Relationship Management) tool (like
										HubSpot, Zoho CRM, etc. - many have free versions).
									</li>
								</ul>
							</li>
							<li>
								<strong>Enter Data:</strong> For each contact:
								<ul class="mt-2 ml-6 list-inside list-disc">
									<li>Enter their basic info (Name, Company, Title, Contact details).</li>
									<li>
										Transfer or expand on the notes you took during the meeting (Context, Discussion
										Points, Next Steps, Personal Details).
									</li>
									<li>Record the date and location/event where you met.</li>
								</ul>
							</li>
							<li>
								<strong>Schedule Follow-Up:</strong> Based on your notes, schedule the agreed-upon next
								steps in your calendar or task list.
							</li>
						</ul>
					</li>
				</ul>
			</div>

			<!-- Phase 4: Follow-Up & Nurturing -->
			<div class="rounded-xl bg-[var(--color-bg-dark)] p-8 shadow-lg">
				<h2 class="mb-4 text-2xl font-bold" style="color: var(--color-primary);">
					Phase 4: Follow-Up & Nurturing
				</h2>
				<p class="mb-4 text-gray-300">Build the Relationship</p>
				<ul class="list-inside list-disc space-y-4 text-gray-300">
					<li>
						<strong>Follow Up Promptly:</strong> Send initial follow-up messages within 24-48 hours of
						meeting.
					</li>
					<li>
						<strong>Personalize:</strong> Refer to your conversation, the event, and the specific things
						you discussed. Mentioning a personal detail from your notes helps a lot!
					</li>
					<li>
						<strong>State the Purpose:</strong> Remind them of the agreed-upon next steps or your reason
						for reaching out.
					</li>
					<li>
						<strong>Be Clear:</strong> What do you want the outcome of this message to be? (e.g., "Happy
						to send you that article," "Wanted to connect on LinkedIn," "Would you be available for a
						brief call next week?")
					</li>
					<li>
						<strong>Execute Next Steps:</strong> Do what you promised (send info, make an intro, schedule
						the call).
					</li>
					<li>
						<strong>Stay in Touch (Periodically):</strong> Building a relationship is ongoing.
						<ul class="mt-2 ml-6 list-inside list-disc">
							<li>Connect on LinkedIn.</li>
							<li>Occasionally share relevant articles or resources.</li>
							<li>Reach out when you see something that reminds you of them or their work.</li>
							<li>Look for opportunities to add value to them.</li>
						</ul>
					</li>
				</ul>
			</div>

			<!-- Templates Section -->
			<div class="rounded-xl bg-[var(--color-bg-dark)] p-8 shadow-lg">
				<h2 class="mb-6 text-2xl font-bold" style="color: var(--color-primary);">
					Simple Templates
				</h2>

				<!-- Meeting Contact Log -->
				<div class="mb-8">
					<h3 class="mb-4 text-xl font-semibold" style="color: var(--color-secondary);">
						1. Meeting Contact Log
					</h3>
					<p class="mb-4 text-gray-300">
						Create columns in a spreadsheet or use this structure for each contact in a notes app:
					</p>
					<div class="relative">
						<pre
							class="mb-2 rounded-lg bg-gray-800 p-4 text-sm"
							style="white-space: pre-wrap;">Name:
Company/Organization:
Title:
Contact Info: (Email, Phone, LinkedIn Profile URL - whatever you exchanged)
Date Met:
Meeting/Event: (e.g., "Tech Conference 2023," "Team Meeting," "Networking Lunch")
Location: (e.g., "Booth #3," "Conf Room B," "Via Zoom")
Key Discussion Points & Notes: (THIS IS THE MOST IMPORTANT FIELD!)
What did we talk about?
Any personal details?
Initial impressions?
Agreed Next Steps: (e.g., "I send report X," "They intro me to Y," "Schedule call")
Follow-up Action: (e.g., "Send thank-you email," "Send article," "Schedule call")
Follow-up Date Sent/Scheduled:
Status/Relationship Stage: (e.g., "New Contact," "Followed Up," "Call Scheduled," "Ongoing Relationship," "Connect on LinkedIn")
Date of Last Interaction: (Helpful for long-term nurturing)</pre>
						<button
							class="absolute top-2 right-2 rounded bg-[var(--color-primary)] px-3 py-1 text-sm text-white transition-colors hover:bg-[var(--color-secondary)]"
							onclick={() =>
								copyTemplate(`Name:
Company/Organization:
Title:
Contact Info: (Email, Phone, LinkedIn Profile URL - whatever you exchanged)
Date Met:
Meeting/Event: (e.g., "Tech Conference 2023," "Team Meeting," "Networking Lunch")
Location: (e.g., "Booth #3," "Conf Room B," "Via Zoom")
Key Discussion Points & Notes: (THIS IS THE MOST IMPORTANT FIELD!)
What did we talk about?
Any personal details?
Initial impressions?
Agreed Next Steps: (e.g., "I send report X," "They intro me to Y," "Schedule call")
Follow-up Action: (e.g., "Send thank-you email," "Send article," "Schedule call")
Follow-up Date Sent/Scheduled:
Status/Relationship Stage: (e.g., "New Contact," "Followed Up," "Call Scheduled," "Ongoing Relationship," "Connect on LinkedIn")
Date of Last Interaction: (Helpful for long-term nurturing)`)}
						>
							Copy
						</button>
					</div>
				</div>

				<!-- Follow-Up Email Template -->
				<div class="mb-8">
					<h3 class="mb-4 text-xl font-semibold" style="color: var(--color-secondary);">
						2. Follow-Up Email Template
					</h3>
					<p class="mb-4 text-gray-300">(Within 24-48 hours)</p>
					<div class="relative">
						<pre
							class="mb-2 rounded-lg bg-gray-800 p-4 text-sm"
							style="white-space: pre-wrap;">Subject: Great meeting you at [Meeting/Event Name] - [Your Name]

Hi [Contact Name],

It was great meeting you at [Meeting/Event Name] on [Day of the week/date].

I really enjoyed our conversation about [Specific topic you discussed - e.g., the challenges of remote work, your insights on the panel discussion, your company's new project].

[Optional: Add a specific detail or refer to a next step]
Option A (Agreed next step): As promised, I'm following up to [action, e.g., send you that article on X, schedule that call]. [Add the article/link or propose times for the call].
Option B (Continuing the conversation): Your point about [specific thing they said] really resonated with me.
Option C (Simple connection): I wanted to connect and stay in touch.

[Optional: Call to Action]
If you need something: Let me know if you have any questions about [what you discussed or offered].
If you want another interaction: Would you be open to a brief [call/virtual coffee] sometime next week to discuss [specific topic] further?
If just connecting: I've sent you a connection request on LinkedIn.

Looking forward to staying in touch.

Best regards,
[Your Name]
[Your Title/Company]
[Your Contact Info/LinkedIn URL]</pre>
						<button
							class="absolute top-2 right-2 rounded bg-[var(--color-primary)] px-3 py-1 text-sm text-white transition-colors hover:bg-[var(--color-secondary)]"
							onclick={() =>
								copyTemplate(`Subject: Great meeting you at [Meeting/Event Name] - [Your Name]

Hi [Contact Name],

It was great meeting you at [Meeting/Event Name] on [Day of the week/date].

I really enjoyed our conversation about [Specific topic you discussed - e.g., the challenges of remote work, your insights on the panel discussion, your company's new project].

[Optional: Add a specific detail or refer to a next step]
Option A (Agreed next step): As promised, I'm following up to [action, e.g., send you that article on X, schedule that call]. [Add the article/link or propose times for the call].
Option B (Continuing the conversation): Your point about [specific thing they said] really resonated with me.
Option C (Simple connection): I wanted to connect and stay in touch.

[Optional: Call to Action]
If you need something: Let me know if you have any questions about [what you discussed or offered].
If you want another interaction: Would you be open to a brief [call/virtual coffee] sometime next week to discuss [specific topic] further?
If just connecting: I've sent you a connection request on LinkedIn.

Looking forward to staying in touch.

Best regards,
[Your Name]
[Your Title/Company]
[Your Contact Info/LinkedIn URL]`)}
						>
							Copy
						</button>
					</div>
				</div>

				<!-- LinkedIn Connection Request Template -->
				<div class="mb-8">
					<h3 class="mb-4 text-xl font-semibold" style="color: var(--color-secondary);">
						3. LinkedIn Connection Request Template
					</h3>
					<p class="mb-4 text-gray-300">
						(When connecting after meeting them - always add a note!)
					</p>
					<div class="relative">
						<pre
							class="mb-2 rounded-lg bg-gray-800 p-4 text-sm"
							style="white-space: pre-wrap;">Hi [Contact Name],

It was great meeting you at [Meeting/Event Name] [optional: on Day/Date].

I really enjoyed our conversation about [Specific topic, e.g., the keynote speaker, the future of AI, your work in X].

[Optional: Add a small personal detail or refer to a next step]
e.g., I found your perspective on Y very insightful.
e.g., Looking forward to sending you that resource we discussed.

Would love to connect here on LinkedIn.

Best,
[Your Name]</pre>
						<button
							class="absolute top-2 right-2 rounded bg-[var(--color-primary)] px-3 py-1 text-sm text-white transition-colors hover:bg-[var(--color-secondary)]"
							onclick={() =>
								copyTemplate(`Hi [Contact Name],

It was great meeting you at [Meeting/Event Name] [optional: on Day/Date].

I really enjoyed our conversation about [Specific topic, e.g., the keynote speaker, the future of AI, your work in X].

[Optional: Add a small personal detail or refer to a next step]
e.g., I found your perspective on Y very insightful.
e.g., Looking forward to sending you that resource we discussed.

Would love to connect here on LinkedIn.

Best,
[Your Name]`)}
						>
							Copy
						</button>
					</div>
				</div>
			</div>

			<!-- Key Principles Section -->
			<div class="rounded-xl bg-[var(--color-bg-dark)] p-8 shadow-lg">
				<h2 class="mb-6 text-2xl font-bold" style="color: var(--color-primary);">
					Key Principles for Success
				</h2>
				<ul class="list-inside list-disc space-y-4 text-gray-300">
					<li>
						<strong>Consistency:</strong> Choose a system (spreadsheet, app, CRM) and use it consistently
						for all meeting contacts.
					</li>
					<li>
						<strong>Speed:</strong> Capture notes during or immediately after the meeting. Input data
						and schedule follow-ups ASAP.
					</li>
					<li>
						<strong>Detail:</strong> The more specific your notes, the easier it is to remember the person
						and personalize future interactions.
					</li>
					<li>
						<strong>Personalization:</strong> Generic follow-ups are easily ignored. Show you paid attention.
					</li>
					<li>
						<strong>Value:</strong> Look for ways to provide value to your contacts over time, not just
						take from them.
					</li>
					<li>
						<strong>Review:</strong> Periodically review your contact list. Remind yourself of who they
						are and consider reaching out if it's been a while (find a relevant reason!).
					</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- Share Section -->
	<section
		class="flex w-full flex-col items-center px-4 py-16"
		style="background: var(--color-bg-dark);"
	>
		<div class="text-center">
			<h2
				class="mb-4 text-center text-2xl font-semibold md:text-3xl"
				style="color: var(--color-secondary);"
			>
				Found this guide helpful?
			</h2>
			<p class="mb-8 max-w-2xl text-center text-lg text-white">
				Share it with your team and help them build better professional relationships!
			</p>
			<div class="flex justify-center">
				<button
					class="flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-white transition-colors hover:bg-[var(--color-secondary)]"
					onclick={sharePage}
				>
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
						/>
					</svg>
					Share This Guide
				</button>
			</div>
		</div>
	</section>
</div>
