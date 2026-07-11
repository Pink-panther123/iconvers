'use client';
import { useEffect } from 'react';
const WEB3FORMS_KEY = '8934ee71-1c5c-4898-89ce-d7ef181933be';
const SITE_NAME = 'iConvers8.ai';
export default function Page() {
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    const b = document.getElementById('burger'), m = document.getElementById('menu');
    if (b) b.addEventListener('click', () => m.classList.toggle('open'));
    if (m) m.querySelectorAll('a').forEach(a => a.addEventListener('click', () => m.classList.remove('open')));
    document.querySelectorAll('form[data-lead]').forEach(f => f.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = f.querySelector('button'); if (btn) { btn.disabled = true; }
      let ok = false;
      if (WEB3FORMS_KEY && !WEB3FORMS_KEY.startsWith('YOUR_')) {
        try {
          const fd = new FormData(f); fd.append('access_key', WEB3FORMS_KEY);
          fd.append('subject', 'New website lead — ' + SITE_NAME);
          const r = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
          ok = (await r.json()).success;
        } catch (err) { ok = false; }
      } else { ok = true; }
      f.innerHTML = '<p style="text-align:center;color:var(--blue);font-weight:600;padding:1rem 0">' + (ok ? '\u2713 Thank you! We received your message and will reply within one business day.' : 'Something went wrong. Please email us directly.') + '</p>';
    }));
  }, []);
  return (<>
    
    
    <header className="nav"><div className="container">
      <a href="#" className="logo"><span className="mk"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v4"/></svg></span>iConvers<span style={{color:'var(--blue)'}}>8</span>.ai</a>
      <nav className="menu" id="menu"><a href="#product">Product</a><a href="#a">Inbound</a><a href="#b">Outbound</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a></nav>
      <div className="nav-r"><a href="#book" className="login">Log in</a><a href="#book" className="btn btn-blue">Get started</a>
      <button className="burger" id="burger">☰</button></div>
    </div></header>
    
    <section className="hero"><div className="container hero-in">
      <span className="badge"><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 5.8L20 10l-5.1 2L13 18l-1.9-5.8L6 10l5.1-1.2z"/></svg><b>AI-Powered Revenue Operations</b></span>
      <h1>AI voice agents<br />that <em>take action</em></h1>
      <p className="sub">Load your leads, launch your AI, and fill your calendar. iConvers8.ai answers, qualifies, books, and follows up on every call, 24/7.</p>
      <form className="prompt" data-lead="1"><input name="query" placeholder="Describe the agent you want to build..." required /><button type="submit" aria-label="Go"><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M6 17V9a4 4 0 0 1 4-4h4"/></svg></button></form>
      <p className="trust">Trusted by real estate, healthcare, and B2B sales teams</p>
    </div></section>
    
    <section><div className="container">
      <div className="sec-head reveal"><span className="eyebrow">What we automate</span><h2>Voice agents that do real work</h2></div>
      <div className="bento"><div className="bcard wide feat reveal"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z"/></svg><h3>Answer every call</h3><p>Pick up in under two rings, day or night, with a natural human-like voice.</p></div><div className="bcard reveal"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></svg><h3>Qualify leads</h3><p>Score prospects against your criteria and route hot ones to your pipeline.</p></div><div className="bcard reveal"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg><h3>Book appointments</h3><p>Check real availability and drop meetings straight into your calendar.</p></div><div className="bcard wide reveal"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v4"/></svg><h3>Human-like voice</h3><p>Realistic tone, pacing, and empathy so callers stay comfortable and engaged.</p></div><div className="bcard reveal"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6M3 22v-6h6"/><path d="M3.5 9a9 9 0 0 1 14.9-3.4L21 8M21 15a9 9 0 0 1-14.9 3.4L3 16"/></svg><h3>Sync your CRM</h3><p>Every call, note, and outcome updates your CRM automatically.</p></div><div className="bcard reveal"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1zM15 8a4 4 0 0 1 0 8M19 5a8 8 0 0 1 0 14"/></svg><h3>Follow up</h3><p>Automated SMS and email keep leads warm without lifting a finger.</p></div><div className="bcard reveal"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M6 17V9a4 4 0 0 1 4-4h4"/></svg><h3>Smart routing</h3><p>Transfer complex calls to the right human with full context attached.</p></div><div className="bcard reveal"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/></svg><h3>Transcripts &amp; analytics</h3><p>Every conversation captured, searchable, and measured.</p></div></div>
    </div></section>
    
    <section><div className="container"><div className="split">
            <div className="col-copy reveal"><span className="eyebrow">Inbound calls</span><h2 style={{fontSize:'clamp(1.7rem,3.2vw,2.3rem)'}}>Never miss another lead</h2>
            <p style={{color:'var(--slate)',marginTop:'.8rem'}}>Your AI receptionist answers instantly, handles FAQs, and turns callers into booked meetings while your team focuses on closing.</p>
            <span className="check-lbl">Built for real operations</span><ul className="checks"><li><span className="tk"><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg></span>Answer instantly, 24/7</li><li><span className="tk"><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg></span>Qualify and route callers</li><li><span className="tk"><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg></span>Book appointments live</li><li><span className="tk"><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg></span>Capture and organize data</li><li><span className="tk"><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg></span>Escalate to a human on demand</li></ul></div>
            <div className="col-viz reveal"><div className="bubbles"><div className="bub them"><div className="who">Caller</div>Hi, do you have any 3-bed listings under 500k?</div><div className="bub us"><div className="who">Ava · AI</div>We do. I can text you three and book a viewing. What day works?</div><div className="bub tag">Meeting booked · synced to calendar</div></div></div></div></div></section>
    <section><div className="container"><div className="split rev">
            <div className="col-copy reveal"><span className="eyebrow">Outbound calls</span><h2 style={{fontSize:'clamp(1.7rem,3.2vw,2.3rem)'}}>Work your pipeline on autopilot</h2>
            <p style={{color:'var(--slate)',marginTop:'.8rem'}}>Upload a list and let your agent call every prospect with a consistent, professional pitch, handling objections and booking the interested ones.</p>
            <span className="check-lbl">Campaigns that scale</span><ul className="checks"><li><span className="tk"><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg></span>Cold outreach at scale</li><li><span className="tk"><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg></span>Lead follow-up and win-back</li><li><span className="tk"><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg></span>Appointment reminders</li><li><span className="tk"><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg></span>Objection handling</li><li><span className="tk"><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg></span>Live calendar booking</li></ul></div>
            <div className="col-viz reveal"><div className="bubbles"><div className="bub us"><div className="who">Ava · AI</div>Hi Sam, following up on your quote request. Still looking to move this quarter?</div><div className="bub them"><div className="who">Prospect</div>Yeah, but pricing was my worry.</div><div className="bub us"><div className="who">Ava · AI</div>Totally fair. Let me get you on with a specialist Thursday at 2?</div><div className="bub tag">Objection handled · meeting set</div></div></div></div></div></section>
    
    <section style={{background:'var(--bg2)'}}><div className="container">
      <div className="sec-head center reveal"><span className="eyebrow">Integrations</span><h2>Integrate with your tech stack</h2><p>iConvers8.ai plugs into the tools you already run on.</p></div>
      <div className="logos"><div className="lg reveal">Salesforce</div><div className="lg reveal">HubSpot</div><div className="lg reveal">Google Calendar</div><div className="lg reveal">Zapier</div><div className="lg reveal">Slack</div><div className="lg reveal">Twilio</div><div className="lg reveal">Calendly</div><div className="lg reveal">Zoho</div><div className="lg reveal">Pipedrive</div><div className="lg reveal">Outlook</div><div className="lg reveal">Notion</div><div className="lg reveal">Webhooks</div></div>
    </div></section>
    
    <section><div className="container">
      <div className="sec-head reveal"><span className="eyebrow">Enterprise ready</span><h2>Production ready voice AI</h2></div>
      <div className="grid3"><div className="pcell reveal"><span className="ic"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></span><h3>Sub-second latency</h3><p>Responses in under 300ms keep conversations flowing naturally.</p></div><div className="pcell reveal"><span className="ic"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span><h3>SOC 2 &amp; HIPAA-ready</h3><p>Encryption in transit and at rest with compliant call handling.</p></div><div className="pcell reveal"><span className="ic"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/></svg></span><h3>40+ languages</h3><p>Detects and switches language mid-call, accent and all.</p></div><div className="pcell reveal"><span className="ic"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/></svg></span><h3>Live analytics</h3><p>Track answered calls, bookings, and revenue in real time.</p></div><div className="pcell reveal"><span className="ic"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg></span><h3>Live human handoff</h3><p>Warm transfers with full context so nothing is lost.</p></div><div className="pcell reveal"><span className="ic"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5"/></svg></span><h3>Scales with you</h3><p>From one line to thousands of concurrent calls.</p></div></div>
    </div></section>
    
    <section style={{background:'var(--bg2)'}}><div className="container">
      <div className="sec-head center reveal"><span className="eyebrow">Pricing</span><h2>Deploy AI voice agents at scale</h2><p>Start free, upgrade when you are ready. No credit card required.</p></div>
      <div className="price-wrap"><div className="plan reveal"><h3>Start for Free</h3>
            <div className="amt">$0</div><div className="per">14-day trial, then from $199/mo</div>
            <ul><li><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>1 AI voice agent</li><li><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>Inbound call answering</li><li><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>Appointment booking</li><li><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>Call transcripts</li><li><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>Email support</li></ul><a href="#book" className="btn btn-blue">Start free</a></div><div className="plan hot reveal"><h3>Custom Build</h3>
            <div className="amt">Let&#x27;s talk</div><div className="per">For teams and enterprises</div>
            <ul><li><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>Unlimited agents</li><li><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>Inbound + outbound</li><li><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>CRM &amp; calendar integrations</li><li><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>40+ languages &amp; handoff</li><li><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>Priority support &amp; SLA</li></ul><a href="#book" className="btn btn-ghost">Book a demo</a></div></div>
    </div></section>
    
    <section><div className="container">
      <div className="sec-head center reveal"><span className="eyebrow">Loved by teams</span><h2>Trusted by modern operations teams</h2></div>
      <div className="tgrid"><div className="tcard reveal"><div className="stars">★★★★★</div><p>We were missing a third of our inbound calls. Now every one is answered and booked before I see it.</p><div className="who"><span className="av">MC</span><span><b>Marissa Cole</b><small>Broker Owner, Real Estate</small></span></div></div><div className="tcard reveal"><div className="stars">★★★★★</div><p>Our AI agent booked 47 meetings from a lead list that sat untouched for a year.</p><div className="who"><span className="av">DR</span><span><b>Devon Reyes</b><small>VP Sales, SaaS</small></span></div></div><div className="tcard reveal"><div className="stars">★★★★★</div><p>Patients love that someone always picks up. No-shows dropped thanks to auto follow-ups.</p><div className="who"><span className="av">DA</span><span><b>Dr. Amara Osei</b><small>Practice Owner</small></span></div></div><div className="tcard reveal"><div className="stars">★★★★★</div><p>Setup took a weekend. It paid for itself in the first month.</p><div className="who"><span className="av">LF</span><span><b>Luis Fernandez</b><small>Ops Lead, Home Services</small></span></div></div><div className="tcard reveal"><div className="stars">★★★★★</div><p>The transcripts alone changed how we coach our closers.</p><div className="who"><span className="av">PS</span><span><b>Priya Shah</b><small>Sales Manager</small></span></div></div><div className="tcard reveal"><div className="stars">★★★★★</div><p>It feels human. Prospects genuinely can&#x27;t tell.</p><div className="who"><span className="av">TB</span><span><b>Tom Becker</b><small>Founder, Agency</small></span></div></div></div>
    </div></section>
    
    <section id="book" style={{background:'var(--bg2)'}}><div className="container">
      <div className="sec-head center reveal"><span className="eyebrow">Get started</span><h2>Book a live demo</h2><p>Pick a time below and hear your AI agent handle a real call, live.</p></div>
      <div className="book reveal"><iframe src="https://calendly.com/ndubuisiokolieezinne/30min?hide_gdpr_banner=1" title="Book a time" loading="lazy"></iframe></div>
      <p className="book-note">Prefer email? <a href="#contact" style={{color:'var(--blue)',fontWeight:'600'}}>Send us a message</a> and we'll reply within one business day.</p>
    </div></section>
    
    <section id="contact"><div className="container">
      <div className="sec-head center reveal"><span className="eyebrow">Contact</span><h2>Talk to us</h2><p>Tell us about your call volume and we&#x27;ll map the fastest path to launch.</p></div>
      <form className="form-card reveal" data-lead="1">
        <div className="row"><input name="first_name" placeholder="First name *" required /><input name="last_name" placeholder="Last name *" required /></div>
        <input name="email" type="email" placeholder="Work email *" required />
        <input name="topic" placeholder="What do you want to automate?" />
        <textarea name="message" placeholder="How can we help?"></textarea>
        <button type="submit" className="btn btn-blue">Send message</button>
      </form>
    </div></section>
    
    <section><div className="container">
      <div className="sec-head center reveal"><span className="eyebrow">FAQ</span><h2>Your questions, answered</h2></div>
      <div className="faq reveal"><details><summary>Will callers know they&#x27;re talking to AI?</summary><div className="a">Our agents use natural voices with realistic pacing. Most callers cannot tell, and we&#x27;re always transparent when asked.</div></details><details><summary>How long does setup take?</summary><div className="a">Most businesses go live within days. Upload leads or connect your CRM, train the agent, and launch.</div></details><details><summary>Does it work with my CRM and calendar?</summary><div className="a">Yes. iConvers8.ai syncs with popular CRMs and calendars so everything updates automatically.</div></details><details><summary>What happens with complex calls?</summary><div className="a">Your agent transfers them to your team with full context so nothing is lost.</div></details><details><summary>Is my data secure?</summary><div className="a">Calls are encrypted in transit and at rest with SOC 2 and HIPAA-ready handling.</div></details><details><summary>Is there a free trial?</summary><div className="a">Yes. Start free and see qualified meetings land on your calendar before you commit.</div></details></div>
    </div></section>
    
    <section className="cta"><div className="container cta-in reveal">
      <h2>Automate your phone operations from start to finish</h2><p>Stop losing revenue to missed calls and slow follow-up. Let iConvers8.ai handle it.</p>
      <div className="acts"><a href="#book" className="btn btn-blue">Start free</a><a href="#contact" className="btn btn-ghost">Talk to us</a></div>
    </div></section>
    
    <footer><div className="container">
      <div className="foot">
        <div><a href="#" className="logo"><span className="mk"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v4"/></svg></span>iConvers<span style={{color:'var(--blue)'}}>8</span>.ai</a>
        <p className="blurb">AI voice agents that answer, qualify, book, and follow up so you never miss a lead again.</p>
        <div className="socials"><a href="#">𝕏</a><a href="#">in</a><a href="#">f</a><a href="#">▶</a></div></div>
        <div><h4>Product</h4><a href="#a">Inbound</a><a href="#b">Outbound</a><a href="#pricing">Pricing</a><a href="#">Integrations</a></div><div><h4>Company</h4><a href="#">About</a><a href="#">Careers</a><a href="#">Blog</a><a href="#contact">Contact</a></div><div><h4>Legal</h4><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Security</a><a href="#">Status</a></div>
      </div>
      <div className="foot-bottom"><div className="container" style={{width:'100%',padding:'0'}}><span>© 2026 iConvers8.ai. All rights reserved.</span><span>hello@iconvers8.ai</span></div></div>
    </div></footer>
    
  </>);
}
