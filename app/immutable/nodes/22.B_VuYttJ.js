import{c as ae,a as V,b as z,l as oe,t as j,r as ie}from"../chunks/0mBi2YiU.js";import{p as le,K as x,L as B,f as de,s as r,c as i,g as t,a as ne,d as n,F as $,r as o,b as k}from"../chunks/ClbTt3Cu.js";import{d as se}from"../chunks/Bgaxg9_P.js";import{e as N,i as S}from"../chunks/JUUCawIl.js";import{r as p}from"../chunks/DrTk7-v9.js";import{b as v}from"../chunks/Dxlqf31S.js";import{v as y}from"../chunks/BSJXDGL2.js";import{S as ce}from"../chunks/BvVCQvb4.js";w[$]="src/routes/tools/meeting-notes/+page.svelte";function ve(b,l){n(l,[...t(l),{id:crypto.randomUUID(),name:""}],!0)}function ue(b,l){n(l,[...t(l),{id:crypto.randomUUID(),name:""}],!0)}function pe(b,l){n(l,[...t(l),{id:crypto.randomUUID(),topic:"",subPoints:[""]}],!0)}function be(b,l){n(l,[...t(l),{id:crypto.randomUUID(),topic:"",points:[""]}],!0)}function ge(b,l){n(l,[...t(l),{id:crypto.randomUUID(),task:"",owner:"",dueDate:"",notes:""}],!0)}function me(b,l){n(l,[...t(l),{id:crypto.randomUUID(),description:""}],!0)}function xe(b,l,c,G,F,O,K,q,I,U,_,f,E,L,Y){const Z=`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meeting Notes: ${t(l)}</title>
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
    <h1>Meeting Notes: ${t(l)}</h1>
    
    <div class="metadata">
        <p><strong>Date:</strong> ${t(c)}</p>
        <p><strong>Time:</strong> ${t(G)} - ${t(F)}</p>
        <p><strong>Location/Method:</strong> ${t(O)}</p>
        <p><strong>Meeting Goal/Purpose:</strong> ${t(K)}</p>
    </div>

    <h2>Attendees</h2>
    <ul>
        ${t(q).map(u=>`<li>${u.name}</li>`).join("")}
    </ul>

    ${t(I).length>0?`
    <h2>Absentees</h2>
    <ul>
        ${t(I).map(u=>`<li>${u.name}</li>`).join("")}
    </ul>
    `:""}

    <h2>Agenda Items</h2>
    ${t(U).map((u,J)=>`
        <h3>${J+1}. ${u.topic}</h3>
        <ul>
            ${u.subPoints.map(X=>`<li>${X}</li>`).join("")}
        </ul>
    `).join("")}

    <h2>Discussion / Key Points / Notes</h2>
    ${t(_).map(u=>`
        <h3>Regarding ${u.topic}</h3>
        <ul>
            ${u.points.map(J=>`<li>${J}</li>`).join("")}
        </ul>
    `).join("")}

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
            ${t(f).map(u=>`
                <tr>
                    <td>${u.task}</td>
                    <td>${u.owner}</td>
                    <td>${u.dueDate}</td>
                    <td>${u.notes}</td>
                </tr>
            `).join("")}
        </tbody>
    </table>

    <h2>Next Steps / Follow-up</h2>
    <ul>
        ${t(E).map(u=>`<li>${u.description}</li>`).join("")}
    </ul>

    <div class="footer">
        <p><strong>Notes prepared by:</strong> ${t(L)}</p>
        <p><strong>Date Distributed:</strong> ${t(Y)}</p>
    </div>

    <div class="no-print" style="text-align: center; margin-top: 40px;">
        <button onclick="window.print()" style="padding: 10px 20px; background: #2c3e50; color: white; border: none; border-radius: 5px; cursor: pointer;">
            Print / Save as PDF
        </button>
    </div>
</body>
</html>`,Q=new Blob([Z],{type:"text/html"}),W=window.URL.createObjectURL(Q);window.open(W,"_blank")}var he=(b,l,c)=>l(t(c).id),_e=V(j('<div class="flex items-center gap-4"><input type="text" class="flex-1 rounded-lg border border-gray-600 bg-gray-700 p-2 text-white" placeholder="Enter attendee name"> <button class="rounded-full bg-red-500 p-2 text-white transition-colors hover:bg-red-600" aria-label="Remove attendee"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg></button></div>'),w[$],[[430,6,[[431,7],[437,7,[[442,8,[[448,9]]]]]]]]),fe=(b,l,c)=>l(t(c).id),ye=V(j('<div class="flex items-center gap-4"><input type="text" class="flex-1 rounded-lg border border-gray-600 bg-gray-700 p-2 text-white" placeholder="Enter absentee name"> <button class="rounded-full bg-red-500 p-2 text-white transition-colors hover:bg-red-600" aria-label="Remove absentee"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg></button></div>'),w[$],[[473,6,[[474,7],[480,7,[[485,8,[[491,9]]]]]]]]),we=(b,l,c)=>l(t(c).id),ke=V(j('<div class="flex items-center gap-4"><input type="text" class="ml-4 flex-1 rounded-lg border border-gray-600 bg-gray-700 p-2 text-white" placeholder="Enter sub-point"> <button class="rounded-full bg-red-500 p-2 text-white transition-colors hover:bg-red-600" aria-label="Remove sub-point"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg></button></div>'),w[$],[[545,9,[[546,10],[552,10,[[557,11,[[563,12]]]]]]]]),$e=(b,l,c)=>l(t(c).id),Ae=V(j('<div class="rounded-lg border border-gray-600 p-4"><div class="mb-4 flex items-center gap-4"><input type="text" class="flex-1 rounded-lg border border-gray-600 bg-gray-700 p-2 text-white" placeholder="Enter agenda topic"> <button class="rounded-full bg-red-500 p-2 text-white transition-colors hover:bg-red-600" aria-label="Remove agenda item"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg></button></div> <div class="space-y-2"><!> <button class="rounded-full bg-[var(--color-secondary)] px-4 py-2 text-sm text-white transition-colors hover:bg-[var(--color-primary)]">Add Sub-point</button></div></div>'),w[$],[[516,6,[[517,7,[[518,8],[524,8,[[529,9,[[535,10]]]]]]],[543,7,[[572,8]]]]]]),De=(b,l,c)=>l(t(c).id),Pe=V(j('<div class="ml-4 flex items-center gap-4"><input type="text" class="flex-1 rounded-lg border border-gray-600 bg-gray-700 p-2 text-white" placeholder="Enter discussion point"> <button class="rounded-full bg-red-500 p-2 text-white transition-colors hover:bg-red-600" aria-label="Remove discussion sub-point"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg></button></div>'),w[$],[[626,9,[[627,10],[633,10,[[638,11,[[644,12]]]]]]]]),Me=(b,l,c)=>l(t(c).id),ze=V(j('<div class="rounded-lg border border-gray-600 p-4"><div class="mb-4 flex items-center gap-4"><input type="text" class="flex-1 rounded-lg border border-gray-600 bg-gray-700 p-2 text-white" placeholder="Enter discussion topic"> <button class="rounded-full bg-red-500 p-2 text-white transition-colors hover:bg-red-600" aria-label="Remove discussion point"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg></button></div> <div class="space-y-2"><!> <button class="rounded-full bg-[var(--color-secondary)] px-4 py-2 text-sm text-white transition-colors hover:bg-[var(--color-primary)]">Add Point</button></div></div>'),w[$],[[597,6,[[598,7,[[599,8],[605,8,[[610,9,[[616,10]]]]]]],[624,7,[[653,8]]]]]]),Ve=(b,l,c)=>l(t(c).id),je=V(j('<div class="space-y-2"><input type="text" class="w-full rounded-lg border border-gray-600 bg-gray-700 p-2 text-white" placeholder="Task"> <div class="grid gap-4 md:grid-cols-4"><input type="text" class="rounded-lg border border-gray-600 bg-gray-700 p-2 text-white" placeholder="Owner"> <input type="date" class="rounded-lg border border-gray-600 bg-gray-700 p-2 text-white"> <div class="flex items-center gap-4 md:col-span-2"><input type="text" class="flex-1 rounded-lg border border-gray-600 bg-gray-700 p-2 text-white" placeholder="Notes"> <button class="rounded-full bg-red-500 p-2 text-white transition-colors hover:bg-red-600" aria-label="Remove action item"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg></button></div></div></div>'),w[$],[[678,6,[[679,7],[685,7,[[686,8],[692,8],[697,8,[[698,9],[704,9,[[709,10,[[715,11]]]]]]]]]]]]),Ie=(b,l,c)=>l(t(c).id),He=V(j('<div class="flex items-center gap-4"><input type="text" class="flex-1 rounded-lg border border-gray-600 bg-gray-700 p-2 text-white" placeholder="Enter next step"> <button class="rounded-full bg-red-500 p-2 text-white transition-colors hover:bg-red-600" aria-label="Remove next step"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg></button></div>'),w[$],[[742,6,[[743,7],[749,7,[[754,8,[[760,9]]]]]]]]),Ne=V(j(`<!> <div class="flex min-h-screen flex-col font-sans text-white" style="background: var(--color-bg);"><section class="flex w-full flex-col items-center justify-center px-4 py-16" style="background: var(--color-bg-dark);"><h1 class="mb-4 text-center text-4xl font-bold md:text-5xl" style="color: var(--color-primary);">Meeting Notes Generator</h1> <p class="mb-8 max-w-2xl text-center text-lg text-gray-300 md:text-xl">Create professional meeting notes with our interactive template</p></section> <section class="mx-auto w-full max-w-4xl px-4 py-12"><div class="rounded-xl bg-[var(--color-bg-dark)] p-8 shadow-lg"><div class="mb-8"><h2 class="mb-4 text-2xl font-bold" style="color: var(--color-primary);">Basic Information</h2> <div class="mb-4"><label for="meeting-title" class="mb-2 block text-sm font-medium text-gray-300">Meeting Title</label> <input id="meeting-title" type="text" class="w-full rounded-lg border border-gray-600 bg-gray-700 p-2 text-white" placeholder="Enter meeting title"></div> <div class="grid gap-4 md:grid-cols-2"><div><label for="start-time" class="mb-2 block text-sm font-medium text-gray-300">Start Time</label> <input id="start-time" type="time" class="w-full rounded-lg border border-gray-600 bg-gray-700 p-2 text-white"></div> <div><label for="end-time" class="mb-2 block text-sm font-medium text-gray-300">End Time</label> <input id="end-time" type="time" class="w-full rounded-lg border border-gray-600 bg-gray-700 p-2 text-white"></div> <div><label for="meeting-date" class="mb-2 block text-sm font-medium text-gray-300">Meeting Date</label> <input id="meeting-date" type="date" class="w-full rounded-lg border border-gray-600 bg-gray-700 p-2 text-white"></div> <div><label for="location" class="mb-2 block text-sm font-medium text-gray-300">Location/Method</label> <input id="location" type="text" class="w-full rounded-lg border border-gray-600 bg-gray-700 p-2 text-white" placeholder="e.g., Conference Room A, Zoom"></div></div> <div class="mt-4"><label for="meeting-goal" class="mb-2 block text-sm font-medium text-gray-300">Meeting Goal/Purpose</label> <textarea id="meeting-goal" class="w-full rounded-lg border border-gray-600 bg-gray-700 p-2 text-white" placeholder="Briefly state the objective" rows="3"></textarea></div></div> <div class="mb-8"><div class="mb-4 flex items-center justify-between"><h2 class="text-2xl font-bold" style="color: var(--color-primary);">Attendees</h2> <button class="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm text-white transition-colors hover:bg-[var(--color-secondary)]">Add Attendee</button></div> <div class="space-y-4"></div></div> <div class="mb-8"><div class="mb-4 flex items-center justify-between"><h2 class="text-2xl font-bold" style="color: var(--color-primary);">Absentees</h2> <button class="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm text-white transition-colors hover:bg-[var(--color-secondary)]">Add Absentee</button></div> <div class="space-y-4"></div></div> <div class="mb-8"><div class="mb-4 flex items-center justify-between"><h2 class="text-2xl font-bold" style="color: var(--color-primary);">Agenda Items</h2> <button class="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm text-white transition-colors hover:bg-[var(--color-secondary)]">Add Agenda Item</button></div> <div class="space-y-6"></div></div> <div class="mb-8"><div class="mb-4 flex items-center justify-between"><h2 class="text-2xl font-bold" style="color: var(--color-primary);">Discussion Points</h2> <button class="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm text-white transition-colors hover:bg-[var(--color-secondary)]">Add Discussion Point</button></div> <div class="space-y-6"></div></div> <div class="mb-8"><div class="mb-4 flex items-center justify-between"><h2 class="text-2xl font-bold" style="color: var(--color-primary);">Action Items</h2> <button class="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm text-white transition-colors hover:bg-[var(--color-secondary)]">Add Action Item</button></div> <div class="space-y-4"></div></div> <div class="mb-8"><div class="mb-4 flex items-center justify-between"><h2 class="text-2xl font-bold" style="color: var(--color-primary);">Next Steps</h2> <button class="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm text-white transition-colors hover:bg-[var(--color-secondary)]">Add Next Step</button></div> <div class="space-y-4"></div></div> <div class="mb-8 grid gap-4 md:grid-cols-2"><div><label for="note-taker" class="mb-2 block text-sm font-medium text-gray-300">Note Taker</label> <input id="note-taker" type="text" class="w-full rounded-lg border border-gray-600 bg-gray-700 p-2 text-white" placeholder="Enter note taker's name"></div> <div><label for="distribution-date" class="mb-2 block text-sm font-medium text-gray-300">Distribution Date</label> <input id="distribution-date" type="date" class="w-full rounded-lg border border-gray-600 bg-gray-700 p-2 text-white"></div></div> <div class="flex justify-center"><button class="rounded-full bg-[var(--color-primary)] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[var(--color-secondary)]">Generate Meeting Notes</button></div></div></section></div>`,1),w[$],[[319,0,[[321,1,[[325,2],[331,2]]],[337,1,[[338,2,[[340,3,[[341,4],[344,4,[[345,5],[348,5]]],[356,4,[[357,5,[[358,6],[361,6]]],[368,5,[[369,6],[372,6]]],[379,5,[[380,6],[383,6]]],[390,5,[[391,6],[394,6]]]]],[403,4,[[404,5],[407,5]]]]],[418,3,[[419,4,[[420,5],[421,5]]],[428,4]]],[461,3,[[462,4,[[463,5],[464,5]]],[471,4]]],[504,3,[[505,4,[[506,5],[507,5]]],[514,4]]],[585,3,[[586,4,[[587,5],[588,5]]],[595,4]]],[666,3,[[667,4,[[668,5],[669,5]]],[676,4]]],[730,3,[[731,4,[[732,5],[733,5]]],[740,4]]],[773,3,[[774,4,[[775,5],[778,5]]],[786,4,[[787,5],[790,5]]]]],[800,3,[[801,4]]]]]]]]]]);function w(b,l){ae(new.target),le(l,!0,w);let c=x(""),G=x(""),F=x(""),O=x(""),K=x(""),q=x(""),I=x(B([])),U=x(B([])),_=x(B([])),f=x(B([])),E=x(B([])),L=x(B([])),Y=x(""),Z=x("");function Q(a){n(I,t(I).filter(e=>k(e.id,a,!1)),!0)}function W(a){n(U,t(U).filter(e=>k(e.id,a,!1)),!0)}function u(a){n(_,t(_).filter(e=>k(e.id,a,!1)),!0)}function J(a){n(_,t(_).map(e=>k(e.id,a)?{...e,subPoints:[...e.subPoints,""]}:e),!0)}function X(a,e){n(_,t(_).map(m=>{if(k(m.id,a)){const d=[...m.subPoints];return d.splice(e,1),{...m,subPoints:d}}return m}),!0)}function Ot(a){n(f,t(f).filter(e=>k(e.id,a,!1)),!0)}function Kt(a){n(f,t(f).map(e=>k(e.id,a)?{...e,points:[...e.points,""]}:e),!0)}function qt(a,e){n(f,t(f).map(m=>{if(k(m.id,a)){const d=[...m.points];return d.splice(e,1),{...m,points:d}}return m}),!0)}function Yt(a){n(E,t(E).filter(e=>k(e.id,a,!1)),!0)}function Zt(a){n(L,t(L).filter(e=>k(e.id,a,!1)),!0)}var wt=Ne(),kt=de(wt);ce(kt,{title:"Meeting Notes Generator - MeetingHero.ai",description:"Create professional meeting notes with our interactive template. Track attendees, agenda items, discussion points, and action items in a structured format.",image:"/og-image.png",url:"/tools/meeting-notes"});var $t=r(kt,2),At=r(i($t),2),Dt=i(At),tt=i(Dt),et=r(i(tt),2),Pt=r(i(et),2);p(Pt),o(et);var rt=r(et,2),at=i(rt),Mt=r(i(at),2);p(Mt),o(at);var ot=r(at,2),zt=r(i(ot),2);p(zt),o(ot);var it=r(ot,2),Vt=r(i(it),2);p(Vt),o(it);var jt=r(it,2),It=r(i(jt),2);p(It),o(jt),o(rt);var Ht=r(rt,2),Nt=r(i(Ht),2);ie(Nt),o(Ht),o(tt);var lt=r(tt,2),dt=i(lt),Jt=r(i(dt),2);Jt.__click=[ve,I],o(dt);var St=r(dt,2);N(St,21,()=>t(I),S,(a,e,m)=>{var d=_e(),s=i(d);p(s),y("bind:value={attendee.name}",()=>t(e),()=>"name",433,8);var g=r(s,2);g.__click=[he,Q,e],o(d),v(s,()=>t(e).name,h=>t(e).name=h),z(a,d)}),o(St),o(lt);var nt=r(lt,2),st=i(nt),Qt=r(i(st),2);Qt.__click=[ue,U],o(st);var Ut=r(st,2);N(Ut,21,()=>t(U),S,(a,e,m)=>{var d=ye(),s=i(d);p(s),y("bind:value={absentee.name}",()=>t(e),()=>"name",476,8);var g=r(s,2);g.__click=[fe,W,e],o(d),v(s,()=>t(e).name,h=>t(e).name=h),z(a,d)}),o(Ut),o(nt);var ct=r(nt,2),vt=i(ct),Wt=r(i(vt),2);Wt.__click=[pe,_],o(vt);var Et=r(vt,2);N(Et,21,()=>t(_),S,(a,e,m)=>{var d=Ae(),s=i(d),g=i(s);p(g),y("bind:value={item.topic}",()=>t(e),()=>"topic",520,9);var h=r(g,2);h.__click=[we,u,e],o(s);var A=r(s,2),H=i(A);N(H,17,()=>t(e).subPoints,S,(D,P,M)=>{var C=ke(),R=i(C);p(R),y("bind:value={item.subPoints[index]}",()=>t(e).subPoints,()=>M,548,11);var ft=r(R,2);ft.__click=()=>X(t(e).id,M),o(C),v(R,()=>t(e).subPoints[M],yt=>t(e).subPoints[M]=yt),z(D,C)});var T=r(H,2);T.__click=[$e,J,e],o(A),o(d),v(g,()=>t(e).topic,D=>t(e).topic=D),z(a,d)}),o(Et),o(ct);var ut=r(ct,2),pt=i(ut),Xt=r(i(pt),2);Xt.__click=[be,f],o(pt);var Lt=r(pt,2);N(Lt,21,()=>t(f),S,(a,e,m)=>{var d=ze(),s=i(d),g=i(s);p(g),y("bind:value={point.topic}",()=>t(e),()=>"topic",601,9);var h=r(g,2);h.__click=[De,Ot,e],o(s);var A=r(s,2),H=i(A);N(H,17,()=>t(e).points,S,(D,P,M)=>{var C=Pe(),R=i(C);p(R),y("bind:value={point.points[index]}",()=>t(e).points,()=>M,629,11);var ft=r(R,2);ft.__click=()=>qt(t(e).id,M),o(C),v(R,()=>t(e).points[M],yt=>t(e).points[M]=yt),z(D,C)});var T=r(H,2);T.__click=[Me,Kt,e],o(A),o(d),v(g,()=>t(e).topic,D=>t(e).topic=D),z(a,d)}),o(Lt),o(ut);var bt=r(ut,2),gt=i(bt),te=r(i(gt),2);te.__click=[ge,E],o(gt);var Tt=r(gt,2);N(Tt,21,()=>t(E),S,(a,e,m)=>{var d=je(),s=i(d);p(s),y("bind:value={item.task}",()=>t(e),()=>"task",681,8);var g=r(s,2),h=i(g);p(h),y("bind:value={item.owner}",()=>t(e),()=>"owner",688,9);var A=r(h,2);p(A),y("bind:value={item.dueDate}",()=>t(e),()=>"dueDate",694,9);var H=r(A,2),T=i(H);p(T),y("bind:value={item.notes}",()=>t(e),()=>"notes",700,10);var D=r(T,2);D.__click=[Ve,Yt,e],o(H),o(g),o(d),v(s,()=>t(e).task,P=>t(e).task=P),v(h,()=>t(e).owner,P=>t(e).owner=P),v(A,()=>t(e).dueDate,P=>t(e).dueDate=P),v(T,()=>t(e).notes,P=>t(e).notes=P),z(a,d)}),o(Tt),o(bt);var mt=r(bt,2),xt=i(mt),ee=r(i(xt),2);ee.__click=[me,L],o(xt);var Ct=r(xt,2);N(Ct,21,()=>t(L),S,(a,e,m)=>{var d=He(),s=i(d);p(s),y("bind:value={step.description}",()=>t(e),()=>"description",745,8);var g=r(s,2);g.__click=[Ie,Zt,e],o(d),v(s,()=>t(e).description,h=>t(e).description=h),z(a,d)}),o(Ct),o(mt);var ht=r(mt,2),_t=i(ht),Rt=r(i(_t),2);p(Rt),o(_t);var Bt=r(_t,2),Gt=r(i(Bt),2);p(Gt),o(Bt),o(ht);var Ft=r(ht,2),re=i(Ft);return re.__click=[xe,c,G,F,O,K,q,I,U,_,f,E,L,Y,Z],o(Ft),o(Dt),o(At),o($t),v(Pt,()=>t(c),a=>n(c,a)),v(Mt,()=>t(F),a=>n(F,a)),v(zt,()=>t(O),a=>n(O,a)),v(Vt,()=>t(G),a=>n(G,a)),v(It,()=>t(K),a=>n(K,a)),v(Nt,()=>t(q),a=>n(q,a)),v(Rt,()=>t(Y),a=>n(Y,a)),v(Gt,()=>t(Z),a=>n(Z,a)),z(b,wt),ne({...oe()})}se(["click"]);export{w as component};
