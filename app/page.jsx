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
    
    
    <header className="nav"><div className="wrap">
      <a href="#" className="logo"><span className="dot"></span>iConvers8.ai</a>
      <nav className="menu" id="menu"><a href="#product">Product</a><a href="#a">Inbound</a><a href="#b">Outbound</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a></nav>
      <div className="nav-r"><a href="#book" className="btn fill">Get Started</a><button className="burger" id="burger">☰</button></div>
    </div></header>
    
    <section className="hero"><div className="wrap">
      <span className="tag mono">● System online · answering 24/7</span>
      <h1>AI voice agents<br />that <span>take action</span></h1>
      <p className="lede">Load your leads, launch your AI, and fill your calendar. iConvers8.ai answers, qualifies, books, and follows up on every call, around the clock.</p>
      <form className="cmd" data-lead="1"><span className="pfx">agent&gt;</span><input name="query" placeholder="describe the agent you want to build" required /><button type="submit">build</button></form>
      <div className="wave"><i style={{'--h':'22px',animationDelay:'0s'}}></i><i style={{'--h':'34px',animationDelay:'.1s'}}></i><i style={{'--h':'16px',animationDelay:'.2s'}}></i><i style={{'--h':'40px',animationDelay:'.3s'}}></i><i style={{'--h':'26px',animationDelay:'.4s'}}></i><i style={{'--h':'38px',animationDelay:'.5s'}}></i><i style={{'--h':'14px',animationDelay:'.6s'}}></i><i style={{'--h':'30px',animationDelay:'.7s'}}></i><i style={{'--h':'36px',animationDelay:'.8s'}}></i><i style={{'--h':'20px',animationDelay:'.9s'}}></i><i style={{'--h':'32px',animationDelay:'1s'}}></i><i style={{'--h':'24px',animationDelay:'1.1s'}}></i></div>
      <p className="trust">// trusted by real estate · healthcare · b2b sales teams</p>
    </div></section>
    
    <div className="marq"><div className="run"><span>Answer <b>every call</b></span><span>Qualify <b>leads</b></span><span>Book <b>appointments</b></span><span>Follow up <b>automatically</b></span><span>Sync your <b>CRM</b></span><span>40+ <b>languages</b></span><span>Answer <b>every call</b></span><span>Qualify <b>leads</b></span><span>Book <b>appointments</b></span><span>Follow up <b>automatically</b></span><span>Sync your <b>CRM</b></span><span>40+ <b>languages</b></span></div></div>
    
    <section id="product"><div className="wrap">
      <div className="sh reveal"><span className="idx">[01]</span><h2>Voice agents that do real work</h2></div>
      <div className="fg reveal">
        <div className="cell"><div className="n">01</div><h3>Answer every call</h3><p>Pick up in under two rings, day or night, with a natural human-like voice.</p></div>
        <div className="cell"><div className="n">02</div><h3>Qualify leads</h3><p>Score prospects against your criteria and route hot ones to your pipeline.</p></div>
        <div className="cell"><div className="n">03</div><h3>Book appointments</h3><p>Check real availability and drop meetings straight into your calendar.</p></div>
        <div className="cell"><div className="n">04</div><h3>Human-like voice</h3><p>Realistic tone, pacing, and empathy so callers stay comfortable.</p></div>
        <div className="cell"><div className="n">05</div><h3>Sync your CRM</h3><p>Every call, note, and outcome updates your CRM automatically.</p></div>
        <div className="cell"><div className="n">06</div><h3>Follow up</h3><p>Automated SMS and email keep leads warm without lifting a finger.</p></div>
        <div className="cell"><div className="n">07</div><h3>Smart routing</h3><p>Transfer complex calls to the right human with full context attached.</p></div>
        <div className="cell"><div className="n">08</div><h3>Transcripts & analytics</h3><p>Every conversation captured, searchable, and measured.</p></div>
      </div>
    </div></section>
    
    <section id="a"><div className="wrap">
      <div className="sh reveal"><span className="idx">[02]</span><h2>Inbound & outbound</h2></div>
      <div className="duo reveal">
        <div className="side">
          <span className="mono">Inbound calls</span><h3>Never miss another lead</h3>
          <p>Your AI receptionist answers instantly, handles FAQs, and turns callers into booked meetings.</p>
          <ul><li>Answer instantly, 24/7</li><li>Qualify and route callers</li><li>Book appointments live</li><li>Escalate to a human on demand</li></ul>
          <div className="term"><div className="top"><i></i><i></i><i></i></div><div className="body"><div className="l"><span className="g">caller:</span> got any 3-bed listings under 500k?</div><div className="l"><span className="who">ava:</span> yes — texting you three, want a viewing?</div><div className="l g">// meeting booked · synced</div></div></div>
        </div>
        <div className="side" id="b">
          <span className="mono">Outbound calls</span><h3>Work your pipeline on autopilot</h3>
          <p>Upload a list and let your agent call every prospect, handle objections, and book the interested ones.</p>
          <ul><li>Cold outreach at scale</li><li>Lead follow-up and win-back</li><li>Appointment reminders</li><li>Live calendar booking</li></ul>
          <div className="term"><div className="top"><i></i><i></i><i></i></div><div className="body"><div className="l"><span className="who">ava:</span> following up on your quote — still moving this quarter?</div><div className="l"><span className="g">sam:</span> yeah, pricing was my worry.</div><div className="l"><span className="who">ava:</span> fair — specialist call thursday at 2?</div><div className="l g">// objection handled · meeting set</div></div></div>
        </div>
      </div>
    </div></section>
    
    <section><div className="wrap">
      <div className="sh reveal"><span className="idx">[03]</span><h2>Production ready</h2></div>
      <div className="stats reveal">
        <div className="s"><div className="big">&lt;300ms</div><p>Response latency keeps conversations flowing naturally.</p></div>
        <div className="s"><div className="big">40+</div><p>Languages, detected and switched mid-call.</p></div>
        <div className="s"><div className="big">SOC 2</div><p>HIPAA-ready handling, encrypted in transit and at rest.</p></div>
      </div>
    </div></section>
    
    <section id="pricing"><div className="wrap">
      <div className="sh reveal"><span className="idx">[04]</span><h2>Deploy at scale</h2></div>
      <div className="price reveal">
        <div className="p"><span className="name">Start for Free</span><div className="amt">$0</div><span className="per">14-day trial, then from $199/mo</span><ul><li>1 AI voice agent</li><li>Inbound call answering</li><li>Appointment booking</li><li>Call transcripts</li><li>Email support</li></ul><a href="#book" className="btn">Start free</a></div>
        <div className="p"><span className="name">Custom Build</span><div className="amt" style={{color:'var(--acid)'}}>Let's talk</div><span className="per">For teams and enterprises</span><ul><li>Unlimited agents</li><li>Inbound + outbound</li><li>CRM & calendar integrations</li><li>40+ languages & handoff</li><li>Priority support & SLA</li></ul><a href="#book" className="btn fill">Book a demo</a></div>
      </div>
    </div></section>
    
    <section><div className="wrap">
      <div className="sh reveal"><span className="idx">[05]</span><h2>Trusted by ops teams</h2></div>
      <div className="tg reveal">
        <div className="t"><div className="st">★★★★★</div><p>Every inbound call is answered and booked before I even see it.</p><div className="who"><b>Marissa Cole</b> · Broker Owner</div></div>
        <div className="t"><div className="st">★★★★★</div><p>Booked 47 meetings from a lead list that sat untouched for a year.</p><div className="who"><b>Devon Reyes</b> · VP Sales, SaaS</div></div>
        <div className="t"><div className="st">★★★★★</div><p>Patients love that someone always picks up. No-shows dropped.</p><div className="who"><b>Dr. Amara Osei</b> · Practice Owner</div></div>
        <div className="t"><div className="st">★★★★★</div><p>Setup took a weekend. It paid for itself in the first month.</p><div className="who"><b>Luis Fernandez</b> · Ops Lead</div></div>
        <div className="t"><div className="st">★★★★★</div><p>The transcripts alone changed how we coach our closers.</p><div className="who"><b>Priya Shah</b> · Sales Manager</div></div>
        <div className="t"><div className="st">★★★★★</div><p>It feels human. Prospects genuinely can't tell.</p><div className="who"><b>Tom Becker</b> · Founder</div></div>
      </div>
    </div></section>
    
    <section id="book"><div className="wrap">
      <div className="sh reveal"><span className="idx">[06]</span><h2>Book a live demo</h2></div>
      <div className="book reveal"><iframe src="https://calendly.com/ndubuisiokolieezinne/30min?hide_gdpr_banner=1" title="Book a time" loading="lazy"></iframe></div>
      <p className="mono" style={{marginTop:'1rem',color:'var(--dim)'}}>// prefer email? scroll down to send a message</p>
    </div></section>
    
    <section id="contact"><div className="wrap">
      <div className="sh reveal"><span className="idx">[07]</span><h2>Talk to us</h2></div>
      <form className="formx reveal" data-lead="1">
        <div className="row"><input name="first_name" placeholder="First name *" required /><input name="last_name" placeholder="Last name *" required /></div>
        <input name="email" type="email" placeholder="Work email *" required />
        <input name="topic" placeholder="What do you want to automate?" />
        <textarea name="message" placeholder="Tell us about your call volume..."></textarea>
        <button type="submit" className="btn fill">Send message</button>
      </form>
    </div></section>
    
    <section id="faq"><div className="wrap">
      <div className="sh reveal"><span className="idx">[08]</span><h2>Questions</h2></div>
      <div className="faqx reveal">
        <details><summary>Will callers know they're talking to AI?</summary><div className="a">Our agents use natural voices with realistic pacing. Most callers cannot tell, and we're always transparent when asked.</div></details>
        <details><summary>How long does setup take?</summary><div className="a">Most businesses go live within days. Upload leads or connect your CRM, train the agent, and launch.</div></details>
        <details><summary>Does it work with my CRM and calendar?</summary><div className="a">Yes. iConvers8.ai syncs with popular CRMs and calendars so everything updates automatically.</div></details>
        <details><summary>What happens with complex calls?</summary><div className="a">Your agent transfers them to your team with full context so nothing is lost.</div></details>
        <details><summary>Is my data secure?</summary><div className="a">Calls are encrypted in transit and at rest with SOC 2 and HIPAA-ready handling.</div></details>
        <details><summary>Is there a free trial?</summary><div className="a">Yes. Start free and see qualified meetings land on your calendar before you commit.</div></details>
      </div>
    </div></section>
    
    <section><div className="wrap"><div className="cta reveal">
      <h2>Automate your phone ops<br />from start to finish</h2>
      <p>Stop losing revenue to missed calls and slow follow-up. Let iConvers8.ai handle it.</p>
      <div className="acts"><a href="#book" className="btn fill">Start free</a><a href="#contact" className="btn">Talk to us</a></div>
    </div></div></section>
    
    <footer><div className="wrap">
      <div className="foot">
        <div><a href="#" className="logo"><span className="dot"></span>iConvers8.ai</a><p>AI voice agents that answer, qualify, book, and follow up so you never miss a lead again.</p><div className="soc"><a href="#">[x]</a><a href="#">[in]</a><a href="#">[gh]</a></div></div>
        <div><h4>Product</h4><a href="#a">Inbound</a><a href="#b">Outbound</a><a href="#pricing">Pricing</a><a href="#">Integrations</a></div>
        <div><h4>Company</h4><a href="#">About</a><a href="#">Careers</a><a href="#">Blog</a><a href="#contact">Contact</a></div>
        <div><h4>Legal</h4><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Security</a><a href="#">Status</a></div>
      </div>
      <div className="fbtm"><span>© 2026 iConvers8.ai // all rights reserved</span><span>hello@iconvers8.ai</span></div>
    </div></footer>
    
  </>);
}
