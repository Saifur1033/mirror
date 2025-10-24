(function(){
  'use strict';
  const EXAMPLES=["positive","peaceful","powerful","resilient","creative","confident","mindful","intuitive","strong","appreciative","passionate","content","soulful","flowing","home","abundant","progressive"];
  const blocks={core:(t)=>({t:"Core Interpretation",b:t}),psych:(l)=>({t:"Psychology Angle",l}),phase:(l)=>({t:"What It Reflects Right Now",l}),forward:(t)=>({t:"Forward Insight",b:t})};
  const LIB={
    positive:[ blocks.core("Your mind is tuned toward hope and growth. You look for what can be built, not what’s broken."),
      blocks.psych(["Cognitive reframing — you convert setbacks into learning.","Healthy optimism bias — solutions over problems.","Internal locus of control — you believe your actions matter."]),
      blocks.phase(["You’re rebuilding or transforming something with calm leadership.","Less reactive, more intentional — quiet power."]),
      blocks.forward("Stay hopeful but honest: process the pain, then choose where your energy goes.")
    ],
    peaceful:[ blocks.core("You’re craving (or protecting) calm, healing, and emotional regulation."),
      blocks.psych(["Nervous system seeks safety; you’re minimizing noise.","Selective attention toward harmony and balance."]),
      blocks.phase(["You might be reducing commitments, pruning conflicts, and simplifying."]),
      blocks.forward("Guard your boundaries; peace is a practice, not a place.")
    ],
    powerful:[ blocks.core("A readiness to influence outcomes and take ownership is front-of-mind."),
      blocks.psych(["High agency mindset; strong self-efficacy.","Goal orientation and assertive drive are active."]),
      blocks.phase(["You’re poised to make a decisive move or claim responsibility."]),
      blocks.forward("Use power with restraint and clarity; strength lands best with humility.")
    ],
    resilient:[ blocks.core("You’ve been tested — and you’re bending, not breaking."),
      blocks.psych(["Post-traumatic growth signals are present.","Adaptive coping and persistence schemas are active."]),
      blocks.phase(["Closing old loops, integrating lessons, preparing for the next chapter."]),
      blocks.forward("Rest is part of resilience — recovery fuels your next win.")
    ],
    creative:[ blocks.core("Your mind is in divergent mode — connecting dots and generating options."),
      blocks.psych(["Default network humming; curiosity and playfulness high.","Tolerance for ambiguity is up — you’re exploring before judging."]),
      blocks.phase(["You’re ready to prototype, not perfect."]),
      blocks.forward("Ship small experiments; momentum beats perfection.")
    ],
    confident:[ blocks.core("You trust your preparation and your read of the room."),
      blocks.psych(["Healthy self-esteem; competence schemas activated.","Lower threat perception enables bolder action."]),
      blocks.phase(["You’re primed for visibility and decision-making."]),
      blocks.forward("Lead calmly; confidence is most persuasive when quiet.")
    ],
    mindful:[ blocks.core("Presence over autopilot — you’re noticing before reacting."),
      blocks.psych(["Attentional control; meta-awareness online.","Lower rumination; higher curiosity."]),
      blocks.phase(["You’re shifting from urgency to clarity."]),
      blocks.forward("Keep breathing room in your schedule; pace protects wisdom.")
    ],
    intuitive:[ blocks.core("You’re trusting pattern-sense and gut checks."),
      blocks.psych(["Fast, experience-based processing (System 1) is reliable for you here."]),
      blocks.phase(["You may not have all the data — but you have enough signal."]),
      blocks.forward("Validate instincts with a light touch of evidence.")
    ],
    strong:[ blocks.core("You feel capable of carrying weight — or ready to train for it."),
      blocks.psych(["High grit; discomfort tolerance elevated.","Identity anchored in follow-through."]),
      blocks.phase(["A season for consistency: reps, not hype."]),
      blocks.forward("Strength compounds — keep your daily non-negotiables.")
    ],
    appreciative:[ blocks.core("Gratitude lens engaged; you’re noticing what’s working."),
      blocks.psych(["Broaden-and-build effect — positive emotion expands options."]),
      blocks.phase(["Relationships and morale are your leverage right now."]),
      blocks.forward("Say the thank-yous out loud; it multiplies trust.")
    ],
    passionate:[ blocks.core("High energy toward what matters; values are activated."),
      blocks.psych(["Motivation systems lit; dopamine tracks meaning and progress."]),
      blocks.phase(["Great for momentum; watch for burnout edges."]),
      blocks.forward("Channel passion into routines so it sustains, not spikes.")
    ],
    content:[ blocks.core("Sufficiency mindset — you have ‘enough’ in this moment."),
      blocks.psych(["Lower scarcity; higher satisfaction and presence."]),
      blocks.phase(["Stability season — enjoy, maintain, and quietly refine."]),
      blocks.forward("Protect simple joys; they’re renewable fuel.")
    ],
    soulful:[ blocks.core("You’re seeking depth, meaning, and honest connection."),
      blocks.psych(["Value-congruence and authenticity needs are salient."]),
      blocks.phase(["Surface-level won’t cut it — you want the real thing."]),
      blocks.forward("Create spaces for honest conversation and reflection.")
    ],
    flowing:[ blocks.core("Ease and progress — you’re aligned, and effort feels natural."),
      blocks.psych(["Flow state proximity — clear goals, feedback, and skill-challenge match."]),
      blocks.phase(["Green lights ahead; keep gliding."]),
      blocks.forward("Don’t overthink it — ride the wave and document learnings.")
    ],
    home:[ blocks.core("You’re craving safety, roots, or belonging."),
      blocks.psych(["Attachment needs calling; stability and routine feel nourishing."]),
      blocks.phase(["Investing in family, faith, or community will pay dividends."]),
      blocks.forward("Make your spaces calmer and kinder — your mind will follow.")
    ],
    abundant:[ blocks.core("You perceive options and generosity — not limits."),
      blocks.psych(["Opportunity-spotting high; resourcefulness active."]),
      blocks.phase(["Time to share, mentor, or build bigger tables."]),
      blocks.forward("Give without draining — wise stewardship scales abundance.")
    ],
    progressive:[ blocks.core("Momentum toward improvement — version-up mindset."),
      blocks.psych(["Growth orientation, feedback-seeking, iteration loops."]),
      blocks.phase(["Small, consistent upgrades beat grand resets."]),
      blocks.forward("Keep a public changelog; celebrate tiny wins.")
    ],
  };
  function tc(s){return s.replace(/\s+/g,' ').trim().toLowerCase().replace(/(^|\s)[a-z]/g,m=>m.toUpperCase());}
  function analyze(v){
    const k=(v||'').toLowerCase().trim();
    if(!k) return null;
    const hit=LIB[k];
    if(hit) return {known:true,key:k,blocks:hit};
    return {known:false,key:k,blocks:[
      blocks.core("This test is projective: the first word you lock onto mirrors your current focus, needs, or emotional state."),
      blocks.psych(["Your attention system prioritizes patterns with personal relevance.","Subconscious concerns and desires can bias what you notice first."]),
      blocks.forward("Ask: Why did this word matter to me today? What need or value does it point to?"),
    ]};
  }
  function $(id){return document.getElementById(id);}
  const w=$('w'), b=$('b'), chips=$('chips'), title=$('title'), tag=$('tag'), cards=$('cards');
  function render(data){
    if(!data){ title.textContent='(enter a word)'; tag.textContent=''; cards.innerHTML=''; return; }
    title.textContent = data.known? tc(data.key) : tc(data.key)+' (custom)';
    tag.textContent = data.known? 'recognized' : 'not in library — generic lens';
    cards.innerHTML='';
    data.blocks.forEach(bk=>{
      const c=document.createElement('div'); c.className='card';
      const h=document.createElement('h3'); h.textContent=bk.t; c.appendChild(h);
      if(bk.b){const p=document.createElement('p'); p.textContent=bk.b; c.appendChild(p);}
      if(bk.l){const ul=document.createElement('ul'); bk.l.forEach(x=>{const li=document.createElement('li'); li.textContent=x; ul.appendChild(li);}); c.appendChild(ul);}
      cards.appendChild(c);
    });
  }
  function setWord(v){
    w.value=v;
    render(analyze(v));
    Array.from(chips.querySelectorAll('.chip')).forEach(ch=> ch.classList.toggle('active', ch.dataset.key===v.toLowerCase()));
  }
  document.addEventListener('DOMContentLoaded', function(){
    b.addEventListener('click', ()=> setWord(w.value));
    w.addEventListener('keydown', function(e){ if(e.key==='Enter') setWord(w.value); });
    EXAMPLES.forEach(function(x){
      const el=document.createElement('button');
      el.className='chip'; el.textContent=tc(x); el.dataset.key=x; el.type='button';
      el.addEventListener('click', function(){ setWord(x); });
      chips.appendChild(el);
    });
    setWord('positive');
  });
})();