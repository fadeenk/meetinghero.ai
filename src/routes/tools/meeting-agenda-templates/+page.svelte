<script lang="ts">
	import { base } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';

	type AgendaItem = {
		topic: string;
		lead: string;
		time: string;
		outcome: string;
	};

	type Template = {
		title: string;
		focus: string;
		description: string;
		agenda: AgendaItem[];
	};

	const templates: Template[] = [
		{
			title: 'Weekly Team Sync / Check-in Meeting',
			focus: 'Updates, quick problem-solving, coordination, alignment',
			description: 'A structured template for regular team updates and coordination.',
			agenda: [
				{
					topic: 'Quick Check-in / Wins',
					lead: 'All',
					time: '5 min',
					outcome:
						'Share a quick success or personal win from the past week (Optional, for team morale)'
				},
				{
					topic: "Review Last Week's Action Items",
					lead: '[Facilitator]',
					time: '5 min',
					outcome: 'Confirm completion status.'
				},
				{
					topic: 'Individual Updates / Progress',
					lead: 'All',
					time: '15 min',
					outcome:
						'Each member briefly shares key progress, challenges, and immediate plans. (Keep it concise!)'
				},
				{
					topic: 'Key Blockers / Support Needed',
					lead: 'All',
					time: '10 min',
					outcome: 'Discuss significant obstacles and how the team can help.'
				},
				{
					topic: 'Cross-functional Coordination',
					lead: '[Relevant Lead]',
					time: '5 min',
					outcome: 'Discuss dependencies or coordination needed with other teams.'
				},
				{
					topic: 'Action Items & Next Steps',
					lead: '[Facilitator]',
					time: '5 min',
					outcome: 'Summarize key decisions, assign new actions, confirm deadlines.'
				},
				{
					topic: 'Wrap-up',
					lead: '[Facilitator]',
					time: '1 min',
					outcome: 'Confirm end of meeting.'
				}
			]
		},
		{
			title: 'Project Kick-off Meeting',
			focus: 'Aligning on goals, scope, roles, and initial steps',
			description: 'A comprehensive template for launching new projects successfully.',
			agenda: [
				{
					topic: 'Welcome & Introductions',
					lead: '[Facilitator]',
					time: '5 min',
					outcome: 'Break the ice, ensure everyone knows each other.'
				},
				{
					topic: 'Project Background & Context',
					lead: '[Project Sponsor]',
					time: '10 min',
					outcome: 'Explain the why - business case, problem being solved.'
				},
				{
					topic: 'Project Goals & Objectives',
					lead: '[Project Sponsor]',
					time: '10 min',
					outcome: 'Define SMART goals and desired outcomes.'
				},
				{
					topic: 'Scope & Deliverables',
					lead: '[Project Manager]',
					time: '15 min',
					outcome: "Clearly define what's IN and OUT of scope, key deliverables."
				},
				{
					topic: 'Project Team & Roles',
					lead: '[Project Manager]',
					time: '10 min',
					outcome: 'Introduce team members, clarify roles and responsibilities.'
				},
				{
					topic: 'Key Milestones & Timeline',
					lead: '[Project Manager]',
					time: '10 min',
					outcome: 'Present the high-level schedule and major milestones.'
				},
				{
					topic: 'Communication Plan & Tools',
					lead: '[Project Manager]',
					time: '5 min',
					outcome: 'How will the team communicate? What tools will be used?'
				},
				{
					topic: 'Risks & Assumptions (Initial)',
					lead: '[Project Manager/Team]',
					time: '5 min',
					outcome: 'Brainstorm initial potential risks and key assumptions.'
				},
				{
					topic: 'Q&A and Open Discussion',
					lead: 'All',
					time: '10 min',
					outcome: 'Address questions, clarify uncertainties.'
				},
				{
					topic: 'Next Steps & Immediate Actions',
					lead: '[Facilitator]',
					time: '5 min',
					outcome: 'Agree on first few tasks and who owns them.'
				},
				{
					topic: 'Wrap-up',
					lead: '[Facilitator]',
					time: '1 min',
					outcome: 'Confirm meeting success, thank attendees.'
				}
			]
		},
		{
			title: 'Decision-Making Meeting',
			focus: 'Analyzing options, discussing implications, and making a clear, agreed-upon decision',
			description: 'A structured template for effective decision-making meetings.',
			agenda: [
				{
					topic: 'Recap of Problem/Opportunity',
					lead: '[Facilitator or Presenter]',
					time: '5 min',
					outcome: 'Ensure everyone understands the context and urgency.'
				},
				{
					topic: 'Presentation of Options',
					lead: '[Presenter(s)]',
					time: '15 min',
					outcome: 'Clearly outline the proposed solutions/choices.'
				},
				{
					topic: 'Review of Analysis / Pros & Cons',
					lead: '[Presenter(s)]',
					time: '15 min',
					outcome: 'Discuss the evaluation criteria and findings for each option.'
				},
				{
					topic: 'Open Discussion & Q&A',
					lead: 'All',
					time: '20 min',
					outcome: 'Discuss implications, concerns, ask clarifying questions.'
				},
				{
					topic: 'Discussion & Debate (if needed)',
					lead: 'All',
					time: '10 min',
					outcome: 'Focused debate on the most critical points of difference.'
				},
				{
					topic: 'Decision Point',
					lead: '[Decision Maker(s)]',
					time: '5 min',
					outcome:
						'Formal process for making and stating the decision (e.g., vote, executive decides).'
				},
				{
					topic: 'Communication Plan (Decision)',
					lead: '[Facilitator]',
					time: '5 min',
					outcome: 'Agree on how the decision will be communicated and to whom.'
				},
				{
					topic: 'Action Items & Next Steps',
					lead: '[Facilitator]',
					time: '5 min',
					outcome: 'Assign tasks related to implementing the decision.'
				},
				{
					topic: 'Wrap-up',
					lead: '[Facilitator]',
					time: '1 min',
					outcome: 'Confirm decision captured, thank attendees.'
				}
			]
		},
		{
			title: 'Brainstorming Meeting',
			focus: 'Generating creative ideas without immediate judgment',
			description: 'A template for productive brainstorming sessions.',
			agenda: [
				{
					topic: 'Welcome & Set the Stage',
					lead: '[Facilitator]',
					time: '5 min',
					outcome: 'Briefly state the goal, energy level, and importance.'
				},
				{
					topic: 'Brainstorming Rules Review',
					lead: '[Facilitator]',
					time: '5 min',
					outcome:
						"Review guidelines (e.g., Defer judgment, Encourage wild ideas, Build on others' ideas, Stay focused, Go for quantity, One conversation at a time)."
				},
				{
					topic: 'Problem/Opportunity Framing',
					lead: '[Facilitator]',
					time: '10 min',
					outcome:
						'Clearly define the specific challenge or opportunity being brainstormed. Ensure shared understanding.'
				},
				{
					topic: 'Idea Generation Session(s)',
					lead: 'All',
					time: '30-45 min',
					outcome:
						'Use techniques (e.g., Round robin, Free association, Brainwriting, Mind mapping) to generate as many ideas as possible.'
				},
				{
					topic: 'Grouping & Initial Synthesis',
					lead: '[Facilitator/All]',
					time: '10 min',
					outcome: 'Group similar ideas, identify themes. No judgment yet, just organization.'
				},
				{
					topic: 'Initial Prioritization/Selection',
					lead: 'All',
					time: '10 min',
					outcome:
						'Dot voting, simple ranking, or other quick methods to identify the most promising ideas (not final decision).'
				},
				{
					topic: 'Next Steps for Promising Ideas',
					lead: '[Facilitator]',
					time: '5 min',
					outcome:
						'How will the selected ideas be evaluated, refined, or moved forward? Assign owners.'
				},
				{
					topic: 'Wrap-up',
					lead: '[Facilitator]',
					time: '1 min',
					outcome: 'Thank attendees, reiterate next steps.'
				}
			]
		},
		{
			title: 'Problem-Solving Meeting',
			focus: 'Identifying root causes, analyzing solutions, and developing an action plan',
			description: 'A structured template for effective problem-solving meetings.',
			agenda: [
				{
					topic: 'Problem Definition & Impact',
					lead: '[Facilitator/Owner]',
					time: '10 min',
					outcome:
						'Clearly define the problem (what, where, when, extent) and its impact. Agree on the problem statement.'
				},
				{
					topic: 'Root Cause Analysis',
					lead: 'All/Facilitator',
					time: '20-30 min',
					outcome:
						'Use techniques (e.g., 5 Whys, Fishbone Diagram, Process Mapping) to identify the underlying causes.'
				},
				{
					topic: 'Brainstorm Potential Solutions',
					lead: 'All',
					time: '15 min',
					outcome: 'Generate possible solutions to the root causes. (Can use brainstorming rules).'
				},
				{
					topic: 'Evaluate Solutions',
					lead: 'All',
					time: '15 min',
					outcome:
						'Discuss pros, cons, feasibility, cost, and potential impact of proposed solutions.'
				},
				{
					topic: 'Select Best Solution(s)',
					lead: '[Chair/Decision Makers]',
					time: '5 min',
					outcome: 'Agree on the most effective solution(s) to pursue.'
				},
				{
					topic: 'Develop Action Plan',
					lead: 'All',
					time: '10 min',
					outcome:
						'Outline steps, assign owners, and set deadlines for implementing the solution(s).'
				},
				{
					topic: 'Action Items & Next Steps',
					lead: '[Facilitator]',
					time: '5 min',
					outcome: 'Summarize action items, owners, deadlines.'
				},
				{
					topic: 'Wrap-up',
					lead: '[Facilitator]',
					time: '1 min',
					outcome: 'Confirm plan is clear, thank attendees.'
				}
			]
		}
	];

	const bestPractices = {
		before: [
			'Define the Clear Purpose and Desired Outcome',
			'Identify the Right Attendees',
			'Draft the Agenda with Specific, Actionable Items',
			'Include a Desired Outcome for Each Agenda Item',
			'Allocate Realistic Time Slots',
			'Assign Owners to Each Item',
			'Share the Agenda (and Prep Materials) in Advance',
			'Solicit Input on the Agenda',
			'Prioritize Items'
		],
		during: [
			'Start on Time',
			'Review the Agenda and Goals at the Start',
			'Appoint a Timekeeper (If Not the Facilitator)',
			'Stick to the Agenda and Time Slots',
			'Focus on Desired Outcomes',
			"Facilitate, Don't Dominate",
			'Capture Notes, Decisions, and Action Items',
			'Allocate Time for Action Items and Wrap-up',
			'End on Time'
		],
		after: [
			'Distribute Minutes/Summary Promptly',
			'Follow Up on Action Items',
			'Review Meeting Effectiveness (Optional but Recommended)'
		]
	};

	let selectedTemplate: Template | null = $state(null);
	let showBestPractices = $state(false);
	let copied = $state(false);

	function copyTemplate(template: Template) {
		const text = `Meeting Title: ${template.title}
Focus: ${template.focus}
Date: [Date]
Time: [Start Time] - [End Time]
Location/Platform: [Location/Platform]
Attendees (Expected): [Team Members]
Meeting Chair/Facilitator: [Name]
Meeting Purpose/Goal: [Purpose]

Agenda Items:
${template.agenda
	.map(
		(item, index) => `${index + 1}. ${item.topic}
   Lead: ${item.lead}
   Time: ${item.time}
   Desired Outcome: ${item.outcome}`
	)
	.join('\n\n')}`;

		navigator.clipboard.writeText(text);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 2000);
	}
</script>

<SEO
	title="Meeting Agenda Templates - MeetingHero.ai"
	description="Access professional meeting agenda templates for team syncs, project kick-offs, decision-making, brainstorming, and problem-solving meetings."
	image="/logo.png"
	url="/tools/meeting-agenda-templates"
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
			Meeting Agenda Templates
		</h1>
		<p class="mb-8 max-w-2xl text-center text-lg text-gray-300 md:text-xl">
			Professional templates for different types of meetings and best practices guide
		</p>
	</section>

	<!-- Main Content -->
	<section class="mx-auto w-full max-w-7xl px-4 py-12">
		<!-- Best Practices -->
		<div class="mb-12 rounded-xl bg-[var(--color-bg-dark)] p-8 shadow-lg">
			<div class="mb-6 flex items-center justify-between">
				<h2 class="text-2xl font-bold" style="color: var(--color-secondary);">
					Best Practices Guide
				</h2>
				<button
					class="rounded-full bg-[var(--color-secondary)] px-4 py-2 text-sm text-white transition-colors hover:bg-[var(--color-primary)]"
					onclick={() => (showBestPractices = !showBestPractices)}
				>
					{showBestPractices ? 'Hide' : 'Show'} Best Practices
				</button>
			</div>

			{#if showBestPractices}
				<div class="space-y-8">
					<div>
						<h3 class="mb-4 text-xl font-semibold" style="color: var(--color-primary);">
							Before the Meeting
						</h3>
						<ul class="list-inside list-disc space-y-2 text-gray-300">
							{#each bestPractices.before as practice}
								<li>{practice}</li>
							{/each}
						</ul>
					</div>

					<div>
						<h3 class="mb-4 text-xl font-semibold" style="color: var(--color-primary);">
							During the Meeting
						</h3>
						<ul class="list-inside list-disc space-y-2 text-gray-300">
							{#each bestPractices.during as practice}
								<li>{practice}</li>
							{/each}
						</ul>
					</div>

					<div>
						<h3 class="mb-4 text-xl font-semibold" style="color: var(--color-primary);">
							After the Meeting
						</h3>
						<ul class="list-inside list-disc space-y-2 text-gray-300">
							{#each bestPractices.after as practice}
								<li>{practice}</li>
							{/each}
						</ul>
					</div>
				</div>
			{/if}
		</div>
		<!-- Selected Template -->
		{#if selectedTemplate}
			<div class="mb-12 rounded-xl bg-[var(--color-bg-dark)] p-8 shadow-lg">
				<div class="mb-6 flex items-center justify-between">
					<h2 class="text-2xl font-bold" style="color: var(--color-secondary);">
						{selectedTemplate.title}
					</h2>
					<button
						class="rounded-full bg-[var(--color-secondary)] px-4 py-2 text-sm text-white transition-colors hover:bg-[var(--color-primary)]"
						onclick={() => selectedTemplate && copyTemplate(selectedTemplate)}
					>
						{copied ? 'Copied!' : 'Copy Template'}
					</button>
				</div>
				<p class="mb-4 text-gray-400">Focus: {selectedTemplate.focus}</p>
				<p class="mb-8 text-gray-300">{selectedTemplate.description}</p>

				<div class="overflow-x-auto">
					<table class="w-full">
						<thead>
							<tr class="border-b border-gray-700">
								<th class="px-4 py-2 text-left">#</th>
								<th class="px-4 py-2 text-left">Topic / Discussion Point</th>
								<th class="px-4 py-2 text-left">Lead</th>
								<th class="px-4 py-2 text-left">Time</th>
								<th class="px-4 py-2 text-left">Desired Outcome</th>
							</tr>
						</thead>
						<tbody>
							{#each selectedTemplate.agenda as item, index}
								<tr class="border-b border-gray-700">
									<td class="px-4 py-2">{index + 1}</td>
									<td class="px-4 py-2">{item.topic}</td>
									<td class="px-4 py-2">{item.lead}</td>
									<td class="px-4 py-2">{item.time}</td>
									<td class="px-4 py-2">{item.outcome}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		{/if}

		<!-- Template Selection -->
		<div class="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each templates as template}
				<button
					class="group relative flex flex-col rounded-2xl border bg-[var(--color-bg-dark)] p-8 text-left shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
					style="border-color: var(--color-secondary);"
					onclick={() => (selectedTemplate = template)}
				>
					<div
						class="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-transparent to-[var(--color-secondary)] opacity-0 transition-opacity duration-300 group-hover:opacity-5"
					></div>
					<h2 class="mb-4 text-2xl font-bold" style="color: var(--color-secondary);">
						{template.title}
					</h2>
					<p class="mb-2 text-sm text-gray-400">Focus: {template.focus}</p>
					<p class="text-gray-300">{template.description}</p>
				</button>
			{/each}
		</div>
	</section>
</div>
