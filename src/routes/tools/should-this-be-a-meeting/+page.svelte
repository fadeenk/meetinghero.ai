<script lang="ts">
	import { onMount } from 'svelte';

	// Types
	type Goal = {
		id: string;
		label: string;
		description: string;
	};

	type Question = {
		id: number;
		text: string;
		explanation: string;
		options: { value: string; label: string }[];
		showIf?: (answers: Record<string, string | string[]>) => boolean;
	};

	type Outcome = {
		type: 'async' | 'meeting' | 'hybrid' | 'reevaluate';
		title: string;
		description: string;
		templates: {
			title: string;
			content: string;
		}[];
		tips: string[];
	};

	// State
	let currentStep = $state(1);
	let answers = $state<Record<string, string | string[]>>({});
	let showOutcome = $state(false);
	let selectedTemplate = $state<string | null>(null);
	let selectedGoals = $state<string[]>([]);

	// Goals
	const goals: Goal[] = [
		{
			id: 'share_info',
			label: 'Share Information / Give Updates',
			description: 'Communicating updates or information to the team'
		},
		{
			id: 'gather_input',
			label: 'Gather Input / Feedback / Data',
			description: 'Collecting thoughts, feedback, or data from team members'
		},
		{
			id: 'make_decision',
			label: 'Make a Decision',
			description: 'Coming to a conclusion or making a choice'
		},
		{
			id: 'solve_problem',
			label: 'Solve a Problem / Troubleshoot',
			description: 'Addressing and resolving issues or challenges'
		},
		{
			id: 'brainstorm',
			label: 'Brainstorm Ideas',
			description: 'Generating and discussing new ideas'
		},
		{
			id: 'complex_topic',
			label: 'Discuss Complex / Sensitive Topic',
			description: 'Addressing nuanced or sensitive matters'
		},
		{
			id: 'build_relationships',
			label: 'Build Relationships / Team Cohesion',
			description: 'Strengthening team bonds and collaboration'
		},
		{
			id: 'align_strategy',
			label: 'Align on Strategy / Planning',
			description: 'Getting everyone on the same page about plans'
		},
		{
			id: 'other',
			label: 'Other',
			description: 'Other purpose not listed above'
		}
	];

	// Questions
	const questions: Question[] = [
		{
			id: 1,
			text: 'What are the GOALS of this interaction? (Select all that apply)',
			explanation:
				'Identify all the needs this interaction aims to address. Different goals may require different approaches.',
			options: goals.map((goal) => ({ value: goal.id, label: goal.label }))
		},
		{
			id: 2,
			text: 'Does achieving this GOAL absolutely REQUIRE immediate, real-time, synchronous discussion and interaction with participants?',
			explanation:
				"This is the core filter question. Many goals can be achieved async if real-time isn't essential.",
			options: [
				{ value: 'yes', label: 'Yes' },
				{ value: 'no', label: 'No' }
			]
		},
		{
			id: 3,
			text: 'Is the topic complex, ambiguous, or likely to involve significant debate, negotiation, or multiple viewpoints that would be difficult or inefficient to resolve asynchronously?',
			explanation: 'Filters simple back-and-forth vs. complex, multi-party dynamics.',
			options: [
				{ value: 'yes', label: 'Yes' },
				{ value: 'no', label: 'No' }
			],
			showIf: (answers) => answers['q2'] === 'yes'
		},
		{
			id: 4,
			text: 'Is a shared understanding or consensus critical and needs to be reached during the synchronous interaction?',
			explanation: 'Do you need people to leave the session on the same page immediately?',
			options: [
				{ value: 'yes', label: 'Yes' },
				{ value: 'no', label: 'No' }
			],
			showIf: (answers) =>
				answers['q2'] === 'yes' &&
				(answers['q3'] === 'yes' ||
					(answers['q1'] as string[]).includes('solve_problem') ||
					(answers['q1'] as string[]).includes('brainstorm'))
		},
		{
			id: 5,
			text: 'Can the GOAL be effectively achieved using asynchronous methods like email, shared documents, chat, or project management tools?',
			explanation: "If real-time isn't needed, confirm if a viable async alternative exists.",
			options: [
				{ value: 'yes', label: 'Yes' },
				{ value: 'no', label: 'No' }
			],
			showIf: (answers) => answers['q2'] === 'no'
		},
		{
			id: 6,
			text: 'Have you prepared (or can you easily prepare) the necessary information, context, or materials to share clearly and effectively asynchronously?',
			explanation:
				'Async communication needs preparation too. Avoid sending messy, context-less async messages.',
			options: [
				{ value: 'yes', label: 'Yes' },
				{ value: 'no', label: 'No' }
			],
			showIf: (answers) => answers['q2'] === 'no' && answers['q5'] === 'yes'
		},
		{
			id: 7,
			text: 'Have you defined a clear agenda with specific desired outcomes for the session?',
			explanation: 'Promotes good meeting hygiene if one is deemed necessary.',
			options: [
				{ value: 'yes', label: 'Yes' },
				{ value: 'no', label: 'No' }
			],
			showIf: (answers) => answers['q2'] === 'yes'
		}
	];

	// Outcomes
	const outcomes: Record<string, Outcome> = {
		async: {
			type: 'async',
			title: 'Definitely Async',
			description: 'A meeting is likely NOT necessary. We recommend using an asynchronous method.',
			templates: [
				{
					title: 'Declining a meeting invite, proposing Async',
					content: `Hi [Invitee Name],

Thanks for the invitation to discuss [Topic].

After thinking about the goal of this discussion ([Mention the goal]), I believe we might be able to achieve it effectively and perhaps more efficiently by [Suggest Async Method].

This approach would allow participants to engage on their own schedule and would free up synchronous time.

Would you be open to trying this instead? I can [Explain your async action] by [Suggest a timeframe].

If, after reviewing or discussing async, we find we still need real-time interaction, we can schedule a focused meeting then.

Let me know what you think.

Best,
[Your Name]`
				},
				{
					title: 'Initiating a discussion Async',
					content: `Hi Team,

Instead of scheduling a meeting for [Topic], I've decided to share/discuss this asynchronously to respect everyone's time and schedule flexibility.

The goal here is to [State the goal].

Here is the information / link to the document / question for discussion:
[Insert Info/Link Clearly]

Please review and share your thoughts / feedback / answer by [Suggest a deadline].

I'll consolidate feedback or we can discuss any critical points briefly during [mention existing async or sync forum].

Thanks!

Best,
[Your Name]`
				}
			],
			tips: [
				'Be clear and concise in your async communication',
				'Provide all necessary context upfront',
				'Set clear deadlines for responses',
				'Use formatting to make information easily scannable',
				'Consider using a shared document for complex topics'
			]
		},
		meeting: {
			type: 'meeting',
			title: 'Meeting Likely Needed',
			description: 'A meeting is likely the most effective way to achieve the goal.',
			templates: [
				{
					title: 'Proposing a meeting',
					content: `Hi Team,

To achieve [State the clear goal], I believe a synchronous meeting is necessary due to [Briefly explain why based on tool findings].

I'd like to propose a [Duration] meeting to discuss [Topic].

**Proposed Agenda:**
1. [Agenda Point 1 - Time estimate]
2. [Agenda Point 2 - Time estimate]
3. [Agenda Point 3 - Time estimate]

**Desired Outcome:** [Clearly state what you want to achieve by the end]

**Required Attendees:** [List key people needed for the outcome]

Please let me know your availability for a [Duration] slot on [Suggest a specific day/time or use a scheduling tool link].

Thanks,
[Your Name]`
				},
				{
					title: 'Accepting a meeting invite, asking for clarity',
					content: `Hi [Inviter Name] and Team,

Thanks for the invite to discuss [Topic].

To help me prepare and ensure we make the best use of the time, could you please share a brief agenda or clarify the specific goal and desired outcome for this meeting?

Understanding what we aim to achieve will help ensure the right people are there and that we stay focused.

Looking forward to the discussion!

Best,
[Your Name]`
				}
			],
			tips: [
				'Start and end on time',
				'Assign a note-taker',
				'Capture action items and decisions',
				'Share meeting notes promptly',
				'Follow up on action items'
			]
		},
		hybrid: {
			type: 'hybrid',
			title: 'Try Async First / Prepare More',
			description:
				'Explore async methods first, or conduct async preparation before scheduling a meeting.',
			templates: [
				{
					title: 'Suggesting Async Prep before a meeting',
					content: `Hi Team,

Regarding the meeting scheduled/proposed for [Topic], I was thinking we could potentially make our sync time more productive (or even reduce the need for the full meeting) by doing some asynchronous preparation first.

Perhaps we could [Suggest Async Prep Action] by [Suggest deadline].

This would allow everyone to come to the meeting with context and pre-submitted thoughts, letting us focus our sync time on [State what the meeting should focus on after prep].

What do you think? I'm happy to [Offer to take action].

Best,
[Your Name]`
				}
			],
			tips: [
				'Share materials in advance',
				'Gather initial thoughts asynchronously',
				'Use the meeting time for discussion and decision-making',
				'Consider if the meeting is still needed after async prep',
				'Document the async discussion for reference'
			]
		},
		reevaluate: {
			type: 'reevaluate',
			title: 'Re-evaluate Goal / Approach',
			description:
				"The proposed communication method doesn't seem appropriate for the goal, or the goal itself is unclear.",
			templates: [],
			tips: [
				'Clarify the primary goal',
				'Consider breaking down complex goals into smaller parts',
				'Think about who really needs to be involved',
				'Consider alternative communication methods',
				'Document your thought process for future reference'
			]
		}
	};

	// Functions
	function getCurrentQuestion() {
		return questions.find((q) => q.id === currentStep);
	}

	function getVisibleQuestions() {
		return questions.filter((q) => !q.showIf || q.showIf(answers));
	}

	function getProgress() {
		const visibleQuestions = getVisibleQuestions();
		const currentIndex = visibleQuestions.findIndex((q) => q.id === currentStep);
		return ((currentIndex + 1) / visibleQuestions.length) * 100;
	}

	function handleGoalSelection(value: string, checked: boolean) {
		if (checked) {
			selectedGoals = [...selectedGoals, value];
		} else {
			selectedGoals = selectedGoals.filter((g) => g !== value);
		}
	}

	function handleNext() {
		handleAnswer(selectedGoals);
	}

	function handleAnswer(value: string | string[]) {
		answers[`q${currentStep}`] = value;
		const visibleQuestions = getVisibleQuestions();
		const currentIndex = visibleQuestions.findIndex((q) => q.id === currentStep);

		if (currentIndex < visibleQuestions.length - 1) {
			currentStep = visibleQuestions[currentIndex + 1].id;
		} else {
			determineOutcome();
		}
	}

	function determineOutcome() {
		// Logic to determine the outcome based on answers
		const selectedGoals = answers['q1'] as string[];

		// Goals that typically work well async
		const asyncFriendlyGoals = ['share_info', 'gather_input'];

		// Goals that typically need sync interaction
		const syncFriendlyGoals = ['build_relationships', 'complex_topic', 'brainstorm'];

		// Goals that can go either way depending on complexity
		const flexibleGoals = ['make_decision', 'solve_problem', 'align_strategy'];

		// Count how many goals fall into each category
		const asyncCount = selectedGoals.filter((goal) => asyncFriendlyGoals.includes(goal)).length;
		const syncCount = selectedGoals.filter((goal) => syncFriendlyGoals.includes(goal)).length;
		const flexibleCount = selectedGoals.filter((goal) => flexibleGoals.includes(goal)).length;

		if (answers['q2'] === 'no' && answers['q5'] === 'yes' && answers['q6'] === 'yes') {
			// Definitely async if no real-time need and async is viable
			selectedTemplate = 'async';
		} else if (answers['q2'] === 'yes' && answers['q3'] === 'yes' && answers['q4'] === 'yes') {
			// Definitely meeting if real-time is needed, complex, and needs consensus
			selectedTemplate = 'meeting';
		} else if (
			// Hybrid approach if:
			// 1. Real-time is needed but not complex or doesn't need consensus
			// 2. No real-time need but async prep isn't ready
			// 3. Goal is flexible and complexity is moderate
			// 4. Mix of async and sync goals
			(answers['q2'] === 'yes' && (answers['q3'] === 'no' || answers['q4'] === 'no')) ||
			(answers['q2'] === 'no' && answers['q5'] === 'yes' && answers['q6'] === 'no') ||
			(flexibleCount > 0 && answers['q3'] === 'no') ||
			(asyncCount > 0 && syncCount > 0)
		) {
			selectedTemplate = 'hybrid';
		} else if (
			// Re-evaluate if:
			// 1. Goal is async-friendly but real-time is needed
			// 2. Goal is sync-friendly but no real-time need
			// 3. Async isn't viable but real-time isn't strongly needed
			(asyncCount > 0 && answers['q2'] === 'yes') ||
			(syncCount > 0 && answers['q2'] === 'no') ||
			(answers['q5'] === 'no' && answers['q2'] === 'no')
		) {
			selectedTemplate = 'reevaluate';
		} else {
			// Default to hybrid for any other combinations
			selectedTemplate = 'hybrid';
		}
		showOutcome = true;
	}

	function resetForm() {
		currentStep = 1;
		answers = {};
		showOutcome = false;
		selectedTemplate = null;
		selectedGoals = [];
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
			Should This Be A Meeting?
		</h1>
		<p class="mb-8 max-w-2xl text-center text-lg text-gray-300 md:text-xl">
			Use this tool to determine if your interaction needs a meeting or can be handled
			asynchronously
		</p>
	</section>

	<!-- Main Content -->
	<section class="mx-auto w-full max-w-3xl px-4 py-12">
		{#if !showOutcome}
			<!-- Progress Bar -->
			<div class="mb-8">
				<div class="h-2 w-full rounded-full bg-gray-700">
					<div
						class="h-2 rounded-full transition-all duration-300"
						style="width: {getProgress()}%; background: linear-gradient(to right, var(--color-primary), var(--color-secondary));"
					></div>
				</div>
			</div>

			<!-- Question Form -->
			{#if getCurrentQuestion()}
				<div class="rounded-xl bg-[var(--color-bg-dark)] p-8 shadow-lg">
					<h2 class="mb-4 text-2xl font-bold" style="color: var(--color-primary);">
						{getCurrentQuestion()?.text}
					</h2>
					<p class="mb-6 text-gray-400">{getCurrentQuestion()?.explanation}</p>
					<div class="space-y-4">
						{#if currentStep === 1}
							{#each getCurrentQuestion()?.options || [] as option}
								<label
									class="flex w-full cursor-pointer items-center rounded-lg border p-4 transition-colors hover:bg-[var(--color-primary)] hover:text-white"
									style="border-color: var(--color-primary);"
								>
									<input
										type="checkbox"
										class="mr-3 h-5 w-5"
										checked={selectedGoals.includes(option.value)}
										onchange={(e) => handleGoalSelection(option.value, e.currentTarget.checked)}
									/>
									{option.label}
								</label>
							{/each}
							<div class="mt-6 flex justify-end">
								<button
									class="rounded-full bg-[var(--color-primary)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-secondary)] disabled:opacity-50"
									onclick={handleNext}
									disabled={selectedGoals.length === 0}
								>
									Next
								</button>
							</div>
						{:else}
							{#each getCurrentQuestion()?.options || [] as option}
								<button
									class="w-full rounded-lg border p-4 text-left transition-colors hover:bg-[var(--color-primary)] hover:text-white"
									style="border-color: var(--color-primary);"
									onclick={() => handleAnswer(option.value)}
								>
									{option.label}
								</button>
							{/each}
						{/if}
					</div>
				</div>
			{/if}
		{:else}
			<!-- Outcome -->
			<div class="rounded-xl bg-[var(--color-bg-dark)] p-8 shadow-lg">
				<h2 class="mb-4 text-2xl font-bold" style="color: var(--color-primary);">
					{outcomes[selectedTemplate!].title}
				</h2>
				<p class="mb-6 text-gray-300">{outcomes[selectedTemplate!].description}</p>

				<!-- Templates -->
				{#if outcomes[selectedTemplate!].templates.length > 0}
					<div class="mb-8">
						<h3 class="mb-4 text-xl font-semibold" style="color: var(--color-secondary);">
							Email Templates
						</h3>
						{#each outcomes[selectedTemplate!].templates as template}
							<div class="mb-6">
								<h4 class="mb-2 font-semibold">{template.title}</h4>
								<div class="relative">
									<pre
										class="mb-2 rounded-lg bg-gray-800 p-4 text-sm"
										style="white-space: pre-wrap;">{template.content}</pre>
									<button
										class="absolute top-2 right-2 rounded bg-[var(--color-primary)] px-3 py-1 text-sm text-white transition-colors hover:bg-[var(--color-secondary)]"
										onclick={() => copyTemplate(template.content)}
									>
										Copy
									</button>
								</div>
							</div>
						{/each}
					</div>
				{/if}

				<!-- Tips -->
				<div class="mb-8">
					<h3 class="mb-4 text-xl font-semibold" style="color: var(--color-secondary);">Tips</h3>
					<ul class="list-inside list-disc space-y-2 text-gray-300">
						{#each outcomes[selectedTemplate!].tips as tip}
							<li>{tip}</li>
						{/each}
					</ul>
				</div>

				<!-- Reset Button -->
				<button
					class="rounded-full bg-[var(--color-primary)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-secondary)]"
					onclick={resetForm}
				>
					Start Over
				</button>
			</div>
		{/if}
	</section>
</div>
