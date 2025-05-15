<script lang="ts">
	// Types
	type Attendee = {
		id: string;
		name: string;
	};

	type AgendaItem = {
		id: string;
		topic: string;
		subPoints: string[];
	};

	type DiscussionPoint = {
		id: string;
		topic: string;
		points: string[];
	};

	type ActionItem = {
		id: string;
		task: string;
		owner: string;
		dueDate: string;
		notes: string;
	};

	type NextStep = {
		id: string;
		description: string;
	};

	// State
	let meetingTitle = $state('');
	let meetingDate = $state('');
	let startTime = $state('');
	let endTime = $state('');
	let location = $state('');
	let meetingGoal = $state('');
	let attendees = $state<Attendee[]>([]);
	let absentees = $state<Attendee[]>([]);
	let agendaItems = $state<AgendaItem[]>([]);
	let discussionPoints = $state<DiscussionPoint[]>([]);
	let actionItems = $state<ActionItem[]>([]);
	let nextSteps = $state<NextStep[]>([]);
	let noteTaker = $state('');
	let distributionDate = $state('');

	// Functions
	function addAttendee() {
		attendees = [...attendees, { id: crypto.randomUUID(), name: '' }];
	}

	function removeAttendee(id: string) {
		attendees = attendees.filter((a) => a.id !== id);
	}

	function addAbsentee() {
		absentees = [...absentees, { id: crypto.randomUUID(), name: '' }];
	}

	function removeAbsentee(id: string) {
		absentees = absentees.filter((a) => a.id !== id);
	}

	function addAgendaItem() {
		agendaItems = [...agendaItems, { id: crypto.randomUUID(), topic: '', subPoints: [''] }];
	}

	function removeAgendaItem(id: string) {
		agendaItems = agendaItems.filter((item) => item.id !== id);
	}

	function addSubPoint(agendaItemId: string) {
		agendaItems = agendaItems.map((item) => {
			if (item.id === agendaItemId) {
				return { ...item, subPoints: [...item.subPoints, ''] };
			}
			return item;
		});
	}

	function removeSubPoint(agendaItemId: string, index: number) {
		agendaItems = agendaItems.map((item) => {
			if (item.id === agendaItemId) {
				const newSubPoints = [...item.subPoints];
				newSubPoints.splice(index, 1);
				return { ...item, subPoints: newSubPoints };
			}
			return item;
		});
	}

	function addDiscussionPoint() {
		discussionPoints = [...discussionPoints, { id: crypto.randomUUID(), topic: '', points: [''] }];
	}

	function removeDiscussionPoint(id: string) {
		discussionPoints = discussionPoints.filter((point) => point.id !== id);
	}

	function addDiscussionSubPoint(discussionPointId: string) {
		discussionPoints = discussionPoints.map((point) => {
			if (point.id === discussionPointId) {
				return { ...point, points: [...point.points, ''] };
			}
			return point;
		});
	}

	function removeDiscussionSubPoint(discussionPointId: string, index: number) {
		discussionPoints = discussionPoints.map((point) => {
			if (point.id === discussionPointId) {
				const newPoints = [...point.points];
				newPoints.splice(index, 1);
				return { ...point, points: newPoints };
			}
			return point;
		});
	}

	function addActionItem() {
		actionItems = [
			...actionItems,
			{ id: crypto.randomUUID(), task: '', owner: '', dueDate: '', notes: '' }
		];
	}

	function removeActionItem(id: string) {
		actionItems = actionItems.filter((item) => item.id !== id);
	}

	function addNextStep() {
		nextSteps = [...nextSteps, { id: crypto.randomUUID(), description: '' }];
	}

	function removeNextStep(id: string) {
		nextSteps = nextSteps.filter((step) => step.id !== id);
	}

	function generateNotes() {
		const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meeting Notes: ${meetingTitle}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 40px auto;
            padding: 20px;
            color: #333;
        }
        h1 {
            color: #2c3e50;
            border-bottom: 2px solid #eee;
            padding-bottom: 10px;
        }
        h2 {
            color: #34495e;
            margin-top: 30px;
        }
        .metadata {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
        }
        .metadata p {
            margin: 5px 0;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f8f9fa;
        }
        ul {
            padding-left: 20px;
        }
        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            font-size: 0.9em;
            color: #666;
        }
        @media print {
            body {
                margin: 0;
                padding: 20px;
            }
            .no-print {
                display: none;
            }
        }
    </style>
</head>
<body>
    <h1>Meeting Notes: ${meetingTitle}</h1>
    
    <div class="metadata">
        <p><strong>Date:</strong> ${meetingDate}</p>
        <p><strong>Time:</strong> ${startTime} - ${endTime}</p>
        <p><strong>Location/Method:</strong> ${location}</p>
        <p><strong>Meeting Goal/Purpose:</strong> ${meetingGoal}</p>
    </div>

    <h2>Attendees</h2>
    <ul>
        ${attendees.map((a) => `<li>${a.name}</li>`).join('')}
    </ul>

    ${
			absentees.length > 0
				? `
    <h2>Absentees</h2>
    <ul>
        ${absentees.map((a) => `<li>${a.name}</li>`).join('')}
    </ul>
    `
				: ''
		}

    <h2>Agenda Items</h2>
    ${agendaItems
			.map(
				(item, index) => `
        <h3>${index + 1}. ${item.topic}</h3>
        <ul>
            ${item.subPoints.map((subPoint) => `<li>${subPoint}</li>`).join('')}
        </ul>
    `
			)
			.join('')}

    <h2>Discussion / Key Points / Notes</h2>
    ${discussionPoints
			.map(
				(point) => `
        <h3>Regarding ${point.topic}</h3>
        <ul>
            ${point.points.map((p) => `<li>${p}</li>`).join('')}
        </ul>
    `
			)
			.join('')}

    <h2>Action Items</h2>
    <table>
        <thead>
            <tr>
                <th>Task</th>
                <th>Owner</th>
                <th>Due Date</th>
                <th>Notes/Status</th>
            </tr>
        </thead>
        <tbody>
            ${actionItems
							.map(
								(item) => `
                <tr>
                    <td>${item.task}</td>
                    <td>${item.owner}</td>
                    <td>${item.dueDate}</td>
                    <td>${item.notes}</td>
                </tr>
            `
							)
							.join('')}
        </tbody>
    </table>

    <h2>Next Steps / Follow-up</h2>
    <ul>
        ${nextSteps.map((step) => `<li>${step.description}</li>`).join('')}
    </ul>

    <div class="footer">
        <p><strong>Notes prepared by:</strong> ${noteTaker}</p>
        <p><strong>Date Distributed:</strong> ${distributionDate}</p>
    </div>

    <div class="no-print" style="text-align: center; margin-top: 40px;">
        <button onclick="window.print()" style="padding: 10px 20px; background: #2c3e50; color: white; border: none; border-radius: 5px; cursor: pointer;">
            Print / Save as PDF
        </button>
    </div>
</body>
</html>`;

		// Create a blob and open in new window
		const blob = new Blob([html], { type: 'text/html' });
		const url = window.URL.createObjectURL(blob);
		window.open(url, '_blank');
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
			Meeting Notes Generator
		</h1>
		<p class="mb-8 max-w-2xl text-center text-lg text-gray-300 md:text-xl">
			Create professional meeting notes with our interactive template
		</p>
	</section>

	<!-- Main Content -->
	<section class="mx-auto w-full max-w-4xl px-4 py-12">
		<div class="rounded-xl bg-[var(--color-bg-dark)] p-8 shadow-lg">
			<!-- Basic Information -->
			<div class="mb-8">
				<h2 class="mb-4 text-2xl font-bold" style="color: var(--color-primary);">
					Basic Information
				</h2>
				<div class="mb-4">
					<label for="meeting-title" class="mb-2 block text-sm font-medium text-gray-300"
						>Meeting Title</label
					>
					<input
						id="meeting-title"
						type="text"
						bind:value={meetingTitle}
						class="w-full rounded-lg border border-gray-600 bg-gray-700 p-2 text-white"
						placeholder="Enter meeting title"
					/>
				</div>
				<div class="grid gap-4 md:grid-cols-2">
					<div>
						<label for="start-time" class="mb-2 block text-sm font-medium text-gray-300"
							>Start Time</label
						>
						<input
							id="start-time"
							type="time"
							bind:value={startTime}
							class="w-full rounded-lg border border-gray-600 bg-gray-700 p-2 text-white"
						/>
					</div>
					<div>
						<label for="end-time" class="mb-2 block text-sm font-medium text-gray-300"
							>End Time</label
						>
						<input
							id="end-time"
							type="time"
							bind:value={endTime}
							class="w-full rounded-lg border border-gray-600 bg-gray-700 p-2 text-white"
						/>
					</div>
					<div>
						<label for="meeting-date" class="mb-2 block text-sm font-medium text-gray-300"
							>Meeting Date</label
						>
						<input
							id="meeting-date"
							type="date"
							bind:value={meetingDate}
							class="w-full rounded-lg border border-gray-600 bg-gray-700 p-2 text-white"
						/>
					</div>
					<div>
						<label for="location" class="mb-2 block text-sm font-medium text-gray-300"
							>Location/Method</label
						>
						<input
							id="location"
							type="text"
							bind:value={location}
							class="w-full rounded-lg border border-gray-600 bg-gray-700 p-2 text-white"
							placeholder="e.g., Conference Room A, Zoom"
						/>
					</div>
				</div>
				<div class="mt-4">
					<label for="meeting-goal" class="mb-2 block text-sm font-medium text-gray-300"
						>Meeting Goal/Purpose</label
					>
					<textarea
						id="meeting-goal"
						bind:value={meetingGoal}
						class="w-full rounded-lg border border-gray-600 bg-gray-700 p-2 text-white"
						placeholder="Briefly state the objective"
						rows="3"
					></textarea>
				</div>
			</div>

			<!-- Attendees -->
			<div class="mb-8">
				<div class="mb-4 flex items-center justify-between">
					<h2 class="text-2xl font-bold" style="color: var(--color-primary);">Attendees</h2>
					<button
						class="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm text-white transition-colors hover:bg-[var(--color-secondary)]"
						onclick={addAttendee}
					>
						Add Attendee
					</button>
				</div>
				<div class="space-y-4">
					{#each attendees as attendee}
						<div class="flex items-center gap-4">
							<input
								type="text"
								bind:value={attendee.name}
								class="flex-1 rounded-lg border border-gray-600 bg-gray-700 p-2 text-white"
								placeholder="Enter attendee name"
							/>
							<button
								class="rounded-full bg-red-500 p-2 text-white transition-colors hover:bg-red-600"
								onclick={() => removeAttendee(attendee.id)}
								aria-label="Remove attendee"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
						</div>
					{/each}
				</div>
			</div>

			<!-- Absentees -->
			<div class="mb-8">
				<div class="mb-4 flex items-center justify-between">
					<h2 class="text-2xl font-bold" style="color: var(--color-primary);">Absentees</h2>
					<button
						class="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm text-white transition-colors hover:bg-[var(--color-secondary)]"
						onclick={addAbsentee}
					>
						Add Absentee
					</button>
				</div>
				<div class="space-y-4">
					{#each absentees as absentee}
						<div class="flex items-center gap-4">
							<input
								type="text"
								bind:value={absentee.name}
								class="flex-1 rounded-lg border border-gray-600 bg-gray-700 p-2 text-white"
								placeholder="Enter absentee name"
							/>
							<button
								class="rounded-full bg-red-500 p-2 text-white transition-colors hover:bg-red-600"
								onclick={() => removeAbsentee(absentee.id)}
								aria-label="Remove absentee"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
						</div>
					{/each}
				</div>
			</div>

			<!-- Agenda Items -->
			<div class="mb-8">
				<div class="mb-4 flex items-center justify-between">
					<h2 class="text-2xl font-bold" style="color: var(--color-primary);">Agenda Items</h2>
					<button
						class="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm text-white transition-colors hover:bg-[var(--color-secondary)]"
						onclick={addAgendaItem}
					>
						Add Agenda Item
					</button>
				</div>
				<div class="space-y-6">
					{#each agendaItems as item}
						<div class="rounded-lg border border-gray-600 p-4">
							<div class="mb-4 flex items-center gap-4">
								<input
									type="text"
									bind:value={item.topic}
									class="flex-1 rounded-lg border border-gray-600 bg-gray-700 p-2 text-white"
									placeholder="Enter agenda topic"
								/>
								<button
									class="rounded-full bg-red-500 p-2 text-white transition-colors hover:bg-red-600"
									onclick={() => removeAgendaItem(item.id)}
									aria-label="Remove agenda item"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
											clip-rule="evenodd"
										/>
									</svg>
								</button>
							</div>
							<div class="space-y-2">
								{#each item.subPoints as subPoint, index}
									<div class="flex items-center gap-4">
										<input
											type="text"
											bind:value={item.subPoints[index]}
											class="ml-4 flex-1 rounded-lg border border-gray-600 bg-gray-700 p-2 text-white"
											placeholder="Enter sub-point"
										/>
										<button
											class="rounded-full bg-red-500 p-2 text-white transition-colors hover:bg-red-600"
											onclick={() => removeSubPoint(item.id, index)}
											aria-label="Remove sub-point"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="h-5 w-5"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fill-rule="evenodd"
													d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
													clip-rule="evenodd"
												/>
											</svg>
										</button>
									</div>
								{/each}
								<button
									class="rounded-full bg-[var(--color-secondary)] px-4 py-2 text-sm text-white transition-colors hover:bg-[var(--color-primary)]"
									onclick={() => addSubPoint(item.id)}
								>
									Add Sub-point
								</button>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Discussion Points -->
			<div class="mb-8">
				<div class="mb-4 flex items-center justify-between">
					<h2 class="text-2xl font-bold" style="color: var(--color-primary);">Discussion Points</h2>
					<button
						class="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm text-white transition-colors hover:bg-[var(--color-secondary)]"
						onclick={addDiscussionPoint}
					>
						Add Discussion Point
					</button>
				</div>
				<div class="space-y-6">
					{#each discussionPoints as point}
						<div class="rounded-lg border border-gray-600 p-4">
							<div class="mb-4 flex items-center gap-4">
								<input
									type="text"
									bind:value={point.topic}
									class="flex-1 rounded-lg border border-gray-600 bg-gray-700 p-2 text-white"
									placeholder="Enter discussion topic"
								/>
								<button
									class="rounded-full bg-red-500 p-2 text-white transition-colors hover:bg-red-600"
									onclick={() => removeDiscussionPoint(point.id)}
									aria-label="Remove discussion point"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
											clip-rule="evenodd"
										/>
									</svg>
								</button>
							</div>
							<div class="space-y-2">
								{#each point.points as subPoint, index}
									<div class="ml-4 flex items-center gap-4">
										<input
											type="text"
											bind:value={point.points[index]}
											class="flex-1 rounded-lg border border-gray-600 bg-gray-700 p-2 text-white"
											placeholder="Enter discussion point"
										/>
										<button
											class="rounded-full bg-red-500 p-2 text-white transition-colors hover:bg-red-600"
											onclick={() => removeDiscussionSubPoint(point.id, index)}
											aria-label="Remove discussion sub-point"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="h-5 w-5"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fill-rule="evenodd"
													d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
													clip-rule="evenodd"
												/>
											</svg>
										</button>
									</div>
								{/each}
								<button
									class="rounded-full bg-[var(--color-secondary)] px-4 py-2 text-sm text-white transition-colors hover:bg-[var(--color-primary)]"
									onclick={() => addDiscussionSubPoint(point.id)}
								>
									Add Point
								</button>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Action Items -->
			<div class="mb-8">
				<div class="mb-4 flex items-center justify-between">
					<h2 class="text-2xl font-bold" style="color: var(--color-primary);">Action Items</h2>
					<button
						class="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm text-white transition-colors hover:bg-[var(--color-secondary)]"
						onclick={addActionItem}
					>
						Add Action Item
					</button>
				</div>
				<div class="space-y-4">
					{#each actionItems as item}
						<div class="space-y-2">
							<input
								type="text"
								bind:value={item.task}
								class="w-full rounded-lg border border-gray-600 bg-gray-700 p-2 text-white"
								placeholder="Task"
							/>
							<div class="grid gap-4 md:grid-cols-4">
								<input
									type="text"
									bind:value={item.owner}
									class="rounded-lg border border-gray-600 bg-gray-700 p-2 text-white"
									placeholder="Owner"
								/>
								<input
									type="date"
									bind:value={item.dueDate}
									class="rounded-lg border border-gray-600 bg-gray-700 p-2 text-white"
								/>
								<div class="flex items-center gap-4 md:col-span-2">
									<input
										type="text"
										bind:value={item.notes}
										class="flex-1 rounded-lg border border-gray-600 bg-gray-700 p-2 text-white"
										placeholder="Notes"
									/>
									<button
										class="rounded-full bg-red-500 p-2 text-white transition-colors hover:bg-red-600"
										onclick={() => removeActionItem(item.id)}
										aria-label="Remove action item"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-5 w-5"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fill-rule="evenodd"
												d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
												clip-rule="evenodd"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Next Steps -->
			<div class="mb-8">
				<div class="mb-4 flex items-center justify-between">
					<h2 class="text-2xl font-bold" style="color: var(--color-primary);">Next Steps</h2>
					<button
						class="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm text-white transition-colors hover:bg-[var(--color-secondary)]"
						onclick={addNextStep}
					>
						Add Next Step
					</button>
				</div>
				<div class="space-y-4">
					{#each nextSteps as step}
						<div class="flex items-center gap-4">
							<input
								type="text"
								bind:value={step.description}
								class="flex-1 rounded-lg border border-gray-600 bg-gray-700 p-2 text-white"
								placeholder="Enter next step"
							/>
							<button
								class="rounded-full bg-red-500 p-2 text-white transition-colors hover:bg-red-600"
								onclick={() => removeNextStep(step.id)}
								aria-label="Remove next step"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
						</div>
					{/each}
				</div>
			</div>

			<!-- Note Taker and Distribution Date -->
			<div class="mb-8 grid gap-4 md:grid-cols-2">
				<div>
					<label for="note-taker" class="mb-2 block text-sm font-medium text-gray-300"
						>Note Taker</label
					>
					<input
						id="note-taker"
						type="text"
						bind:value={noteTaker}
						class="w-full rounded-lg border border-gray-600 bg-gray-700 p-2 text-white"
						placeholder="Enter note taker's name"
					/>
				</div>
				<div>
					<label for="distribution-date" class="mb-2 block text-sm font-medium text-gray-300"
						>Distribution Date</label
					>
					<input
						id="distribution-date"
						type="date"
						bind:value={distributionDate}
						class="w-full rounded-lg border border-gray-600 bg-gray-700 p-2 text-white"
					/>
				</div>
			</div>

			<!-- Generate Button -->
			<div class="flex justify-center">
				<button
					class="rounded-full bg-[var(--color-primary)] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[var(--color-secondary)]"
					onclick={generateNotes}
				>
					Generate Meeting Notes
				</button>
			</div>
		</div>
	</section>
</div>
