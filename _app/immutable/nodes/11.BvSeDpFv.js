import{t as f,a as v,c as de}from"../chunks/h7ZbE31x.js";import{p as ue,a as F,b as $,d as me,s as c,c as n,g as e,r as s,n as he,f as J,t as q,i as d}from"../chunks/C-ztjBy8.js";import{d as pe,s as x}from"../chunks/B7dketh8.js";import{i as E}from"../chunks/CZKTVnJQ.js";import{e as Q,i as W}from"../chunks/W00g6Voa.js";import{r as ye,a as ve}from"../chunks/Ck1NUsxL.js";import{s as fe}from"../chunks/BoDjfKfo.js";function ge(I,h,i){h(e(i))}function be(I,h,i,o,O,u){d(h,1),d(i,{},!0),d(o,!1),d(O,null),d(u,[],!0)}var xe=(I,h,i)=>h(e(i).value,I.currentTarget.checked),_e=f('<label class="flex w-full cursor-pointer items-center rounded-lg border p-4 transition-colors hover:bg-[var(--color-primary)] hover:text-white" style="border-color: var(--color-primary);"><input type="checkbox" class="mr-3 h-5 w-5"> </label>'),we=f('<!> <div class="mt-6 flex justify-end"><button class="rounded-full bg-[var(--color-primary)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-secondary)] disabled:opacity-50">Next</button></div>',1),ke=(I,h,i)=>h(e(i).value),Te=f('<button class="w-full rounded-lg border p-4 text-left transition-colors hover:bg-[var(--color-primary)] hover:text-white" style="border-color: var(--color-primary);"> </button>'),qe=f('<div class="rounded-xl bg-[var(--color-bg-dark)] p-8 shadow-lg"><h2 class="mb-4 text-2xl font-bold" style="color: var(--color-primary);"> </h2> <p class="mb-6 text-gray-400"> </p> <div class="space-y-4"><!></div></div>'),Ie=f('<div class="mb-8"><div class="h-2 w-full rounded-full bg-gray-700"><div class="h-2 rounded-full transition-all duration-300"></div></div></div> <!>',1),Ae=(I,h,i)=>h(e(i).content),Se=f('<div class="mb-6"><h4 class="mb-2 font-semibold"> </h4> <div class="relative"><pre class="mb-2 rounded-lg bg-gray-800 p-4 text-sm" style="white-space: pre-wrap;"> </pre> <button class="absolute top-2 right-2 rounded bg-[var(--color-primary)] px-3 py-1 text-sm text-white transition-colors hover:bg-[var(--color-secondary)]">Copy</button></div></div>'),Ce=f('<div class="mb-8"><h3 class="mb-4 text-xl font-semibold" style="color: var(--color-secondary);">Email Templates</h3> <!></div>'),Pe=f("<li> </li>"),Ne=f('<div class="rounded-xl bg-[var(--color-bg-dark)] p-8 shadow-lg"><h2 class="mb-4 text-2xl font-bold" style="color: var(--color-primary);"> </h2> <p class="mb-6 text-gray-300"> </p> <!> <div class="mb-8"><h3 class="mb-4 text-xl font-semibold" style="color: var(--color-secondary);">Tips</h3> <ul class="list-inside list-disc space-y-2 text-gray-300"></ul></div> <button class="rounded-full bg-[var(--color-primary)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-secondary)]">Start Over</button></div>'),Ge=f(`<div class="flex min-h-screen flex-col font-sans text-white" style="background: var(--color-bg);"><section class="flex w-full flex-col items-center justify-center px-4 py-16" style="background: var(--color-bg-dark);"><h1 class="mb-4 text-center text-4xl font-bold md:text-5xl" style="color: var(--color-primary);">Should This Be A Meeting?</h1> <p class="mb-8 max-w-2xl text-center text-lg text-gray-300 md:text-xl">Use this tool to determine if your interaction needs a meeting or can be handled
			asynchronously</p></section> <section class="mx-auto w-full max-w-3xl px-4 py-12"><!></section> <section class="flex w-full flex-col items-center px-4 py-16" style="background: var(--color-bg-dark);"><h2 class="mb-4 text-center text-2xl font-semibold md:text-3xl" style="color: var(--color-secondary);">Why Use This Tool? Save Time, Meet Smarter.</h2> <p class="max-w-2xl text-center text-lg text-white">Unnecessary meetings are a major drain on valuable time, energy, and focus. This simple tool
			helps you quickly evaluate whether a real-time meeting is truly the most effective way to
			achieve your goal, or if an asynchronous method like email, chat, or a shared document would
			be more efficient. By using this checklist before you schedule or accept an invitation, you
			can reclaim hours for focused work, reduce meeting fatigue for yourself and your team, improve
			communication clarity, and ensure that when you do meet, it's for a clear, productive purpose.</p></section></div>`);function Fe(I,h){ue(h,!0);let i=F(1),o=F($({})),O=F(!1),u=F(null),_=F($([]));const K=[{id:1,text:"What are the GOALS of this interaction? (Select all that apply)",explanation:"Identify all the needs this interaction aims to address. Different goals may require different approaches.",options:[{id:"share_info",label:"Share Information / Give Updates",description:"Communicating updates or information to the team"},{id:"gather_input",label:"Gather Input / Feedback / Data",description:"Collecting thoughts, feedback, or data from team members"},{id:"make_decision",label:"Make a Decision",description:"Coming to a conclusion or making a choice"},{id:"solve_problem",label:"Solve a Problem / Troubleshoot",description:"Addressing and resolving issues or challenges"},{id:"brainstorm",label:"Brainstorm Ideas",description:"Generating and discussing new ideas"},{id:"complex_topic",label:"Discuss Complex / Sensitive Topic",description:"Addressing nuanced or sensitive matters"},{id:"build_relationships",label:"Build Relationships / Team Cohesion",description:"Strengthening team bonds and collaboration"},{id:"align_strategy",label:"Align on Strategy / Planning",description:"Getting everyone on the same page about plans"},{id:"other",label:"Other",description:"Other purpose not listed above"}].map(t=>({value:t.id,label:t.label}))},{id:2,text:"Does achieving this GOAL absolutely REQUIRE immediate, real-time, synchronous discussion and interaction with participants?",explanation:"This is the core filter question. Many goals can be achieved async if real-time isn't essential.",options:[{value:"yes",label:"Yes"},{value:"no",label:"No"}]},{id:3,text:"Is the topic complex, ambiguous, or likely to involve significant debate, negotiation, or multiple viewpoints that would be difficult or inefficient to resolve asynchronously?",explanation:"Filters simple back-and-forth vs. complex, multi-party dynamics.",options:[{value:"yes",label:"Yes"},{value:"no",label:"No"}],showIf:t=>t.q2==="yes"},{id:4,text:"Is a shared understanding or consensus critical and needs to be reached during the synchronous interaction?",explanation:"Do you need people to leave the session on the same page immediately?",options:[{value:"yes",label:"Yes"},{value:"no",label:"No"}],showIf:t=>t.q2==="yes"&&(t.q3==="yes"||t.q1.includes("solve_problem")||t.q1.includes("brainstorm"))},{id:5,text:"Can the GOAL be effectively achieved using asynchronous methods like email, shared documents, chat, or project management tools?",explanation:"If real-time isn't needed, confirm if a viable async alternative exists.",options:[{value:"yes",label:"Yes"},{value:"no",label:"No"}],showIf:t=>t.q2==="no"},{id:6,text:"Have you prepared (or can you easily prepare) the necessary information, context, or materials to share clearly and effectively asynchronously?",explanation:"Async communication needs preparation too. Avoid sending messy, context-less async messages.",options:[{value:"yes",label:"Yes"},{value:"no",label:"No"}],showIf:t=>t.q2==="no"&&t.q5==="yes"},{id:7,text:"Have you defined a clear agenda with specific desired outcomes for the session?",explanation:"Promotes good meeting hygiene if one is deemed necessary.",options:[{value:"yes",label:"Yes"},{value:"no",label:"No"}],showIf:t=>t.q2==="yes"}],Y={async:{type:"async",title:"Definitely Async",description:"A meeting is likely NOT necessary. We recommend using an asynchronous method.",templates:[{title:"Declining a meeting invite, proposing Async",content:`Hi [Invitee Name],

Thanks for the invitation to discuss [Topic].

After thinking about the goal of this discussion ([Mention the goal]), I believe we might be able to achieve it effectively and perhaps more efficiently by [Suggest Async Method].

This approach would allow participants to engage on their own schedule and would free up synchronous time.

Would you be open to trying this instead? I can [Explain your async action] by [Suggest a timeframe].

If, after reviewing or discussing async, we find we still need real-time interaction, we can schedule a focused meeting then.

Let me know what you think.

Best,
[Your Name]`},{title:"Initiating a discussion Async",content:`Hi Team,

Instead of scheduling a meeting for [Topic], I've decided to share/discuss this asynchronously to respect everyone's time and schedule flexibility.

The goal here is to [State the goal].

Here is the information / link to the document / question for discussion:
[Insert Info/Link Clearly]

Please review and share your thoughts / feedback / answer by [Suggest a deadline].

I'll consolidate feedback or we can discuss any critical points briefly during [mention existing async or sync forum].

Thanks!

Best,
[Your Name]`}],tips:["Be clear and concise in your async communication","Provide all necessary context upfront","Set clear deadlines for responses","Use formatting to make information easily scannable","Consider using a shared document for complex topics"]},meeting:{type:"meeting",title:"Meeting Likely Needed",description:"A meeting is likely the most effective way to achieve the goal.",templates:[{title:"Proposing a meeting",content:`Hi Team,

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
[Your Name]`},{title:"Accepting a meeting invite, asking for clarity",content:`Hi [Inviter Name] and Team,

Thanks for the invite to discuss [Topic].

To help me prepare and ensure we make the best use of the time, could you please share a brief agenda or clarify the specific goal and desired outcome for this meeting?

Understanding what we aim to achieve will help ensure the right people are there and that we stay focused.

Looking forward to the discussion!

Best,
[Your Name]`}],tips:["Start and end on time","Assign a note-taker","Capture action items and decisions","Share meeting notes promptly","Follow up on action items"]},hybrid:{type:"hybrid",title:"Try Async First / Prepare More",description:"Explore async methods first, or conduct async preparation before scheduling a meeting.",templates:[{title:"Suggesting Async Prep before a meeting",content:`Hi Team,

Regarding the meeting scheduled/proposed for [Topic], I was thinking we could potentially make our sync time more productive (or even reduce the need for the full meeting) by doing some asynchronous preparation first.

Perhaps we could [Suggest Async Prep Action] by [Suggest deadline].

This would allow everyone to come to the meeting with context and pre-submitted thoughts, letting us focus our sync time on [State what the meeting should focus on after prep].

What do you think? I'm happy to [Offer to take action].

Best,
[Your Name]`}],tips:["Share materials in advance","Gather initial thoughts asynchronously","Use the meeting time for discussion and decision-making","Consider if the meeting is still needed after async prep","Document the async discussion for reference"]},reevaluate:{type:"reevaluate",title:"Re-evaluate Goal / Approach",description:"The proposed communication method doesn't seem appropriate for the goal, or the goal itself is unclear.",templates:[],tips:["Clarify the primary goal","Consider breaking down complex goals into smaller parts","Think about who really needs to be involved","Consider alternative communication methods","Document your thought process for future reference"]}};function B(){return K.find(t=>t.id===e(i))}function ee(){return K.filter(t=>!t.showIf||t.showIf(e(o)))}function te(){let t=5,a=0;return(e(o).q2==="no"||e(o).q2==="yes"&&e(o).q3==="no")&&(t=4),e(i)===1?a=1:e(i)===2?a=2:e(i)===3?a=3:e(i)===4?a=4:e(i)===5?a=3:e(i)===6?a=4:e(i)===7&&(a=5),a/t*100}function oe(t,a){a?d(_,[...e(_),t],!0):d(_,e(_).filter(l=>l!==t),!0)}function X(t){e(o)[`q${e(i)}`]=t;const a=ee(),l=a.findIndex(w=>w.id===e(i));l<a.length-1?d(i,a[l+1].id,!0):ie()}function ie(){const t=e(o).q1,a=["share_info","gather_input"],l=["build_relationships","complex_topic","brainstorm"],w=["make_decision","solve_problem","align_strategy"],k=t.filter(m=>a.includes(m)).length,N=t.filter(m=>l.includes(m)).length,G=t.filter(m=>w.includes(m)).length;e(o).q2==="no"&&e(o).q5==="yes"&&e(o).q6==="yes"?d(u,"async"):e(o).q2==="yes"&&e(o).q3==="yes"&&e(o).q4==="yes"?d(u,"meeting"):e(o).q2==="yes"&&(e(o).q3==="no"||e(o).q4==="no")||e(o).q2==="no"&&e(o).q5==="yes"&&e(o).q6==="no"||G>0&&e(o).q3==="no"||k>0&&N>0?d(u,"hybrid"):k>0&&e(o).q2==="yes"||N>0&&e(o).q2==="no"||e(o).q5==="no"&&e(o).q2==="no"?d(u,"reevaluate"):d(u,"hybrid"),d(O,!0)}function ae(t){navigator.clipboard.writeText(t)}var j=Ge(),Z=c(n(j),2),se=n(Z);{var ne=t=>{var a=Ie(),l=J(a),w=n(l),k=n(w);s(w),s(l);var N=c(l,2);{var G=m=>{var A=qe(),D=n(A),V=n(D,!0);s(D);var g=c(D,2),S=n(g,!0);s(g);var T=c(g,2),H=n(T);{var L=r=>{var b=we(),C=J(b);Q(C,17,()=>{var y;return((y=B())==null?void 0:y.options)||[]},W,(y,U)=>{var z=_e(),R=n(z);ye(R),R.__change=[xe,oe,U];var le=c(R);s(z),q(ce=>{ve(R,ce),x(le,` ${e(U).label??""}`)},[()=>e(_).includes(e(U).value)]),v(y,z)});var p=c(C,2),P=n(p);P.__click=[ge,X,_],s(p),q(()=>P.disabled=e(_).length===0),v(r,b)},M=r=>{var b=de(),C=J(b);Q(C,17,()=>{var p;return((p=B())==null?void 0:p.options)||[]},W,(p,P)=>{var y=Te();y.__click=[ke,X,P];var U=n(y,!0);s(y),q(()=>x(U,e(P).label)),v(p,y)}),v(r,b)};E(H,r=>{e(i)===1?r(L):r(M,!1)})}s(T),s(A),q((r,b)=>{x(V,r),x(S,b)},[()=>{var r;return(r=B())==null?void 0:r.text},()=>{var r;return(r=B())==null?void 0:r.explanation}]),v(m,A)};E(N,m=>{B()&&m(G)})}q(m=>fe(k,`width: ${m??""}%; background: linear-gradient(to right, var(--color-primary), var(--color-secondary));`),[te]),v(t,a)},re=t=>{var a=Ne(),l=n(a),w=n(l,!0);s(l);var k=c(l,2),N=n(k,!0);s(k);var G=c(k,2);{var m=g=>{var S=Ce(),T=c(n(S),2);Q(T,17,()=>Y[e(u)].templates,W,(H,L)=>{var M=Se(),r=n(M),b=n(r,!0);s(r);var C=c(r,2),p=n(C),P=n(p,!0);s(p);var y=c(p,2);y.__click=[Ae,ae,L],s(C),s(M),q(()=>{x(b,e(L).title),x(P,e(L).content)}),v(H,M)}),s(S),v(g,S)};E(G,g=>{Y[e(u)].templates.length>0&&g(m)})}var A=c(G,2),D=c(n(A),2);Q(D,21,()=>Y[e(u)].tips,W,(g,S)=>{var T=Pe(),H=n(T,!0);s(T),q(()=>x(H,e(S))),v(g,T)}),s(D),s(A);var V=c(A,2);V.__click=[be,i,o,O,u,_],s(a),q(()=>{x(w,Y[e(u)].title),x(N,Y[e(u)].description)}),v(t,a)};E(se,t=>{e(O)?t(re,!1):t(ne)})}s(Z),he(2),s(j),v(I,j),me()}pe(["change","click"]);export{Fe as component};
