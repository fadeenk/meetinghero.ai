import{c as pe,a as x,b as g,l as ye,t as _,d as ve}from"../chunks/CJsj_jBo.js";import{p as fe,d as Q,f as ae,b as o,a as ge,s as d,c as r,F as b,g as e,r as n,n as be,i as $,t as C,j as u}from"../chunks/Be1hiiwP.js";import{d as xe,s as T}from"../chunks/DVPItJl5.js";import{i as V}from"../chunks/VasH13GX.js";import{e as z,i as J}from"../chunks/BvslriRo.js";import{r as _e,a as we}from"../chunks/DJlppjca.js";import{s as ke}from"../chunks/B020J1_G.js";p[b]="src/routes/tools/should-this-be-a-meeting/+page.svelte";function Te(P,y,i){y(e(i))}function qe(P,y,i,a,L,m){u(y,1),u(i,{},!0),u(a,!1),u(L,null),u(m,[],!0)}var Ie=(P,y,i)=>y(e(i).value,P.currentTarget.checked),Ae=x(_('<label class="flex w-full cursor-pointer items-center rounded-lg border p-4 transition-colors hover:bg-[var(--color-primary)] hover:text-white" style="border-color: var(--color-primary);"><input type="checkbox" class="mr-3 h-5 w-5"> </label>'),p[b],[[488,8,[[492,9]]]]),Se=x(_('<!> <div class="mt-6 flex justify-end"><button class="rounded-full bg-[var(--color-primary)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-secondary)] disabled:opacity-50">Next</button></div>',1),p[b],[[501,7,[[502,8]]]]),Ce=(P,y,i)=>y(e(i).value),Pe=x(_('<button class="w-full rounded-lg border p-4 text-left transition-colors hover:bg-[var(--color-primary)] hover:text-white" style="border-color: var(--color-primary);"> </button>'),p[b],[[512,8]]),Ne=x(_('<div class="rounded-xl bg-[var(--color-bg-dark)] p-8 shadow-lg"><h2 class="mb-4 text-2xl font-bold" style="color: var(--color-primary);"> </h2> <p class="mb-6 text-gray-400"> </p> <div class="space-y-4"><!></div></div>'),p[b],[[480,4,[[481,5],[484,5],[485,5]]]]),Ge=x(_('<div class="mb-8"><div class="h-2 w-full rounded-full bg-gray-700"><div class="h-2 rounded-full transition-all duration-300"></div></div></div> <!>',1),p[b],[[469,3,[[470,4,[[471,5]]]]]]),De=(P,y,i)=>y(e(i).content),Oe=x(_('<div class="mb-6"><h4 class="mb-2 font-semibold"> </h4> <div class="relative"><pre class="mb-2 rounded-lg bg-gray-800 p-4 text-sm" style="white-space: pre-wrap;"> </pre> <button class="absolute top-2 right-2 rounded bg-[var(--color-primary)] px-3 py-1 text-sm text-white transition-colors hover:bg-[var(--color-secondary)]">Copy</button></div></div>'),p[b],[[539,7,[[540,8],[541,8,[[542,9],[545,9]]]]]]),Ye=x(_('<div class="mb-8"><h3 class="mb-4 text-xl font-semibold" style="color: var(--color-secondary);">Email Templates</h3> <!></div>'),p[b],[[534,5,[[535,6]]]]),Be=x(_("<li> </li>"),p[b],[[562,7]]),Fe=x(_('<div class="rounded-xl bg-[var(--color-bg-dark)] p-8 shadow-lg"><h2 class="mb-4 text-2xl font-bold" style="color: var(--color-primary);"> </h2> <p class="mb-6 text-gray-300"> </p> <!> <div class="mb-8"><h3 class="mb-4 text-xl font-semibold" style="color: var(--color-secondary);">Tips</h3> <ul class="list-inside list-disc space-y-2 text-gray-300"></ul></div> <button class="rounded-full bg-[var(--color-primary)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-secondary)]">Start Over</button></div>'),p[b],[[526,3,[[527,4],[530,4],[558,4,[[559,5],[560,5]]],[568,4]]]]),Le=x(_(`<div class="flex min-h-screen flex-col font-sans text-white" style="background: var(--color-bg);"><section class="flex w-full flex-col items-center justify-center px-4 py-16" style="background: var(--color-bg-dark);"><h1 class="mb-4 text-center text-4xl font-bold md:text-5xl" style="color: var(--color-primary);">Should This Be A Meeting?</h1> <p class="mb-8 max-w-2xl text-center text-lg text-gray-300 md:text-xl">Use this tool to determine if your interaction needs a meeting or can be handled
			asynchronously</p></section> <section class="mx-auto w-full max-w-3xl px-4 py-12"><!></section> <section class="flex w-full flex-col items-center px-4 py-16" style="background: var(--color-bg-dark);"><h2 class="mb-4 text-center text-2xl font-semibold md:text-3xl" style="color: var(--color-secondary);">Why Use This Tool? Save Time, Meet Smarter.</h2> <p class="max-w-2xl text-center text-lg text-white">Unnecessary meetings are a major drain on valuable time, energy, and focus. This simple tool
			helps you quickly evaluate whether a real-time meeting is truly the most effective way to
			achieve your goal, or if an asynchronous method like email, chat, or a shared document would
			be more efficient. By using this checklist before you schedule or accept an invitation, you
			can reclaim hours for focused work, reduce meeting fatigue for yourself and your team, improve
			communication clarity, and ensure that when you do meet, it's for a clear, productive purpose.</p></section></div>`),p[b],[[447,0,[[449,1,[[453,2],[459,2]]],[466,1],[579,1,[[583,2],[589,2]]]]]]);function p(P,y){pe(new.target),fe(y,!0,p);let i=Q(1),a=Q(ae({})),L=Q(!1),m=Q(null),q=Q(ae([]));const ee=[{id:1,text:"What are the GOALS of this interaction? (Select all that apply)",explanation:"Identify all the needs this interaction aims to address. Different goals may require different approaches.",options:[{id:"share_info",label:"Share Information / Give Updates",description:"Communicating updates or information to the team"},{id:"gather_input",label:"Gather Input / Feedback / Data",description:"Collecting thoughts, feedback, or data from team members"},{id:"make_decision",label:"Make a Decision",description:"Coming to a conclusion or making a choice"},{id:"solve_problem",label:"Solve a Problem / Troubleshoot",description:"Addressing and resolving issues or challenges"},{id:"brainstorm",label:"Brainstorm Ideas",description:"Generating and discussing new ideas"},{id:"complex_topic",label:"Discuss Complex / Sensitive Topic",description:"Addressing nuanced or sensitive matters"},{id:"build_relationships",label:"Build Relationships / Team Cohesion",description:"Strengthening team bonds and collaboration"},{id:"align_strategy",label:"Align on Strategy / Planning",description:"Getting everyone on the same page about plans"},{id:"other",label:"Other",description:"Other purpose not listed above"}].map(t=>({value:t.id,label:t.label}))},{id:2,text:"Does achieving this GOAL absolutely REQUIRE immediate, real-time, synchronous discussion and interaction with participants?",explanation:"This is the core filter question. Many goals can be achieved async if real-time isn't essential.",options:[{value:"yes",label:"Yes"},{value:"no",label:"No"}]},{id:3,text:"Is the topic complex, ambiguous, or likely to involve significant debate, negotiation, or multiple viewpoints that would be difficult or inefficient to resolve asynchronously?",explanation:"Filters simple back-and-forth vs. complex, multi-party dynamics.",options:[{value:"yes",label:"Yes"},{value:"no",label:"No"}],showIf:t=>o(t.q2,"yes")},{id:4,text:"Is a shared understanding or consensus critical and needs to be reached during the synchronous interaction?",explanation:"Do you need people to leave the session on the same page immediately?",options:[{value:"yes",label:"Yes"},{value:"no",label:"No"}],showIf:t=>o(t.q2,"yes")&&(o(t.q3,"yes")||t.q1.includes("solve_problem")||t.q1.includes("brainstorm"))},{id:5,text:"Can the GOAL be effectively achieved using asynchronous methods like email, shared documents, chat, or project management tools?",explanation:"If real-time isn't needed, confirm if a viable async alternative exists.",options:[{value:"yes",label:"Yes"},{value:"no",label:"No"}],showIf:t=>o(t.q2,"no")},{id:6,text:"Have you prepared (or can you easily prepare) the necessary information, context, or materials to share clearly and effectively asynchronously?",explanation:"Async communication needs preparation too. Avoid sending messy, context-less async messages.",options:[{value:"yes",label:"Yes"},{value:"no",label:"No"}],showIf:t=>o(t.q2,"no")&&o(t.q5,"yes")},{id:7,text:"Have you defined a clear agenda with specific desired outcomes for the session?",explanation:"Promotes good meeting hygiene if one is deemed necessary.",options:[{value:"yes",label:"Yes"},{value:"no",label:"No"}],showIf:t=>o(t.q2,"yes")}],M={async:{type:"async",title:"Definitely Async",description:"A meeting is likely NOT necessary. We recommend using an asynchronous method.",templates:[{title:"Declining a meeting invite, proposing Async",content:`Hi [Invitee Name],

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
[Your Name]`}],tips:["Share materials in advance","Gather initial thoughts asynchronously","Use the meeting time for discussion and decision-making","Consider if the meeting is still needed after async prep","Document the async discussion for reference"]},reevaluate:{type:"reevaluate",title:"Re-evaluate Goal / Approach",description:"The proposed communication method doesn't seem appropriate for the goal, or the goal itself is unclear.",templates:[],tips:["Clarify the primary goal","Consider breaking down complex goals into smaller parts","Think about who really needs to be involved","Consider alternative communication methods","Document your thought process for future reference"]}};function H(){return ee.find(t=>o(t.id,e(i)))}function ie(){return ee.filter(t=>!t.showIf||t.showIf(e(a)))}function se(){let t=5,s=0;return(o(e(a).q2,"no")||o(e(a).q2,"yes")&&o(e(a).q3,"no"))&&(t=4),o(e(i),1)?s=1:o(e(i),2)?s=2:o(e(i),3)?s=3:o(e(i),4)?s=4:o(e(i),5)?s=3:o(e(i),6)?s=4:o(e(i),7)&&(s=5),s/t*100}function ne(t,s){s?u(q,[...e(q),t],!0):u(q,e(q).filter(c=>o(c,t,!1)),!0)}function te(t){e(a)[`q${e(i)}`]=t;const s=ie(),c=s.findIndex(I=>o(I.id,e(i)));c<s.length-1?u(i,s[c+1].id,!0):re()}function re(){const t=e(a).q1,s=["share_info","gather_input"],c=["build_relationships","complex_topic","brainstorm"],I=["make_decision","solve_problem","align_strategy"],A=t.filter(h=>s.includes(h)).length,Y=t.filter(h=>c.includes(h)).length,B=t.filter(h=>I.includes(h)).length;o(e(a).q2,"no")&&o(e(a).q5,"yes")&&o(e(a).q6,"yes")?u(m,"async"):o(e(a).q2,"yes")&&o(e(a).q3,"yes")&&o(e(a).q4,"yes")?u(m,"meeting"):o(e(a).q2,"yes")&&(o(e(a).q3,"no")||o(e(a).q4,"no"))||o(e(a).q2,"no")&&o(e(a).q5,"yes")&&o(e(a).q6,"no")||B>0&&o(e(a).q3,"no")||A>0&&Y>0?u(m,"hybrid"):A>0&&o(e(a).q2,"yes")||Y>0&&o(e(a).q2,"no")||o(e(a).q5,"no")&&o(e(a).q2,"no")?u(m,"reevaluate"):u(m,"hybrid"),u(L,!0)}function le(t){navigator.clipboard.writeText(t)}var K=Le(),oe=d(r(K),2),ce=r(oe);{var de=t=>{var s=Ge(),c=$(s),I=r(c),A=r(I);n(I),n(c);var Y=d(c,2);{var B=h=>{var N=Ne(),F=r(N),X=r(F,!0);n(F);var w=d(F,2),G=r(w,!0);n(w);var S=d(w,2),U=r(S);{var E=l=>{var k=Se(),D=$(k);z(D,17,()=>{var f;return((f=H())==null?void 0:f.options)||[]},J,(f,j)=>{var Z=Ae(),W=r(Z);_e(W),W.__change=[Ie,ne,j];var me=d(W);n(Z),C(he=>{we(W,he),T(me,` ${e(j).label??""}`)},[()=>e(q).includes(e(j).value)]),g(f,Z)});var v=d(D,2),O=r(v);O.__click=[Te,te,q],n(v),C(()=>O.disabled=o(e(q).length,0)),g(l,k)},R=l=>{var k=ve(),D=$(k);z(D,17,()=>{var v;return((v=H())==null?void 0:v.options)||[]},J,(v,O)=>{var f=Pe();f.__click=[Ce,te,O];var j=r(f,!0);n(f),C(()=>T(j,e(O).label)),g(v,f)}),g(l,k)};V(U,l=>{o(e(i),1)?l(E):l(R,!1)})}n(S),n(N),C((l,k)=>{T(X,l),T(G,k)},[()=>{var l;return(l=H())==null?void 0:l.text},()=>{var l;return(l=H())==null?void 0:l.explanation}]),g(h,N)};V(Y,h=>{H()&&h(B)})}C(h=>ke(A,`width: ${h??""}%; background: linear-gradient(to right, var(--color-primary), var(--color-secondary));`),[se]),g(t,s)},ue=t=>{var s=Fe(),c=r(s),I=r(c,!0);n(c);var A=d(c,2),Y=r(A,!0);n(A);var B=d(A,2);{var h=w=>{var G=Ye(),S=d(r(G),2);z(S,17,()=>M[e(m)].templates,J,(U,E)=>{var R=Oe(),l=r(R),k=r(l,!0);n(l);var D=d(l,2),v=r(D),O=r(v,!0);n(v);var f=d(v,2);f.__click=[De,le,E],n(D),n(R),C(()=>{T(k,e(E).title),T(O,e(E).content)}),g(U,R)}),n(G),g(w,G)};V(B,w=>{M[e(m)].templates.length>0&&w(h)})}var N=d(B,2),F=d(r(N),2);z(F,21,()=>M[e(m)].tips,J,(w,G)=>{var S=Be(),U=r(S,!0);n(S),C(()=>T(U,e(G))),g(w,S)}),n(F),n(N);var X=d(N,2);X.__click=[qe,i,a,L,m,q],n(s),C(()=>{T(I,M[e(m)].title),T(Y,M[e(m)].description)}),g(t,s)};V(ce,t=>{e(L)?t(ue,!1):t(de)})}return n(oe),be(2),n(K),g(P,K),ge({...ye()})}xe(["change","click"]);export{p as component};
