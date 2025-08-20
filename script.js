// Nav highlighting
(function(){
  const page = document.body.getAttribute('data-page');
  document.querySelectorAll('.nav a').forEach(a=>{
    if(a.dataset.nav === page){ a.classList.add('active'); }
  });
})();

// Shared year
(function(){
  const yEls = document.querySelectorAll('#year');
  const y = new Date().getFullYear();
  yEls.forEach(el=> el.textContent = y);
})();

// Thermometer + Impact generator (home + tools pages)
(function(){
  const bar = document.getElementById('barFill');
  const pct = document.getElementById('meterPct');
  let value = 0;
  function render(){ if(bar){ bar.style.width = value + '%'; } if(pct){ pct.textContent = value + '%'; } }
  function inc(){ value = Math.min(100, value + 11); render(); }
  function dec(){ value = Math.max(0, value - 11); render(); }
  document.querySelectorAll('[data-action="more"]').forEach(b=> b.addEventListener('click', inc));
  document.querySelectorAll('[data-action="less"]').forEach(b=> b.addEventListener('click', dec));
  render();

  const verbs = ['orchestrate','leverage','unlock','accelerate','streamline','amplify','enable','harmonise','de‑risk','supercharge'];
  const nouns = ['synergies','impact vectors','alignment pathways','value streams','operating cadences','stakeholder outcomes','north stars','roadmaps','insights','workstreams'];
  const adjs  = ['scalable','holistic','frictionless','mission‑critical','outcome‑driven','human‑centred','future‑ready','cross‑functional','AI‑adjacent','stakeholder‑aligned'];
  const clauses = ['at enterprise scale','with measurable impact','without boiling the ocean','in this space','across the stack','with low lift, high leverage','before the next quarter','for immediate quick wins','to de‑risk delivery','with strong governance'];
  function sentence(){ const r = a => a[Math.floor(Math.random()*a.length)]; return `We ${r(verbs)} ${r(adjs)} ${r(nouns)} ${r(clauses)}.`; }
  function gen(){ const out = document.getElementById('impactOut'); if(out){ out.value = sentence(); out.focus(); out.select?.(); }
  }
  document.querySelectorAll('[data-action="regen"]').forEach(b=> b.addEventListener('click', gen));
  document.querySelectorAll('[data-action="generate-impact"]').forEach(b=> b.addEventListener('click', gen));
  document.querySelectorAll('[data-action="copy"]').forEach(b=> b.addEventListener('click', ()=>{
    const out = document.getElementById('impactOut'); if(out){ out.select(); document.execCommand('copy'); }
  }));

  // Alignment Bingo
  const words = ['align on alignment','low‑hanging fruit','quick win','learnings','circle back','socialise this','single source of truth','north star','synergy','workstream','deep dive','move the needle','paradigm','stakeholder buy‑in','value add','cadence','touch base','granular','resource this','bandwidth','actionable insight','holistic view','peel the onion','core competency','boil the ocean'];
  const bingo = document.getElementById('bingo');
  if(bingo){
    const shuffled = words.sort(()=>Math.random()-0.5).slice(0,25);
    shuffled.forEach(w=>{ const d = document.createElement('div'); d.className='tile'; d.textContent = w; d.addEventListener('click', ()=> d.classList.toggle('on')); bingo.appendChild(d); });
  }
})();