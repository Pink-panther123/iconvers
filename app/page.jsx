'use client';
import { useEffect } from 'react';
const WEB3FORMS_KEY = '8934ee71-1c5c-4898-89ce-d7ef181933be';
const SITE_NAME = 'iConvers8.ai';
const hideImg = (e) => { e.currentTarget.style.display = 'none'; };
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
      <nav className="menu" id="menu"><a href="#services">Services</a><a href="#how">How</a><a href="#serve">Industries</a><a href="#pricing">Pricing</a><a href="#founder">About</a><a href="#faq">FAQ</a></nav>
      <div className="nav-r"><a href="#book" className="btn fill">Get Started</a><button className="burger" id="burger">☰</button></div>
    </div></header>
    <section className="hero"><div className="wrap">
      <span className="tag mono">● System online · answering 24/7</span>
      <h1>Your AI Sales Development Team,<br /><span>Powered by AI</span></h1>
      <p className="lede">Load your leads. Launch your AI. Fill your calendar. iConvers8.ai automates outbound prospecting from first contact to booked meeting. Your custom AI voice agent cold calls prospects, qualifies leads, answers questions, handles objections, sends follow-up texts and emails, and books appointments directly into your calendar.</p>
      <span className="nodial">No dialing. No voicemail marathons. No manual follow-up. Simply upload your leads and let your AI agent work 24/7.</span>
      <form className="cmd" data-lead="1"><span className="pfx">agent&gt;</span><input name="query" placeholder="describe the agent you want to build" required /><button type="submit">build</button></form>
      <div className="wave"><i style={{'--h':'22px',animationDelay:'0s'}}></i><i style={{'--h':'34px',animationDelay:'.1s'}}></i><i style={{'--h':'16px',animationDelay:'.2s'}}></i><i style={{'--h':'40px',animationDelay:'.3s'}}></i><i style={{'--h':'26px',animationDelay:'.4s'}}></i><i style={{'--h':'38px',animationDelay:'.5s'}}></i><i style={{'--h':'14px',animationDelay:'.6s'}}></i><i style={{'--h':'30px',animationDelay:'.7s'}}></i><i style={{'--h':'36px',animationDelay:'.8s'}}></i><i style={{'--h':'20px',animationDelay:'.9s'}}></i><i style={{'--h':'32px',animationDelay:'1s'}}></i><i style={{'--h':'24px',animationDelay:'1.1s'}}></i></div>
      <p className="trust">// trusted by real estate · healthcare · b2b sales teams</p>
    </div></section>
    <div className="marq"><div className="run"><span>Answer <b>every call</b></span><span>Qualify <b>leads</b></span><span>Book <b>appointments</b></span><span>Follow up <b>automatically</b></span><span>Sync your <b>CRM</b></span><span>24/7 <b>availability</b></span><span>Answer <b>every call</b></span><span>Qualify <b>leads</b></span><span>Book <b>appointments</b></span><span>Follow up <b>automatically</b></span><span>Sync your <b>CRM</b></span><span>24/7 <b>availability</b></span></div></div>
    <section id="problem"><div className="wrap">
      <div className="sh reveal"><span className="idx">[01]</span><h2>The problem &amp; our solution</h2><p>As businesses grow, these challenges become increasingly difficult and expensive to manage. We built the fix.</p></div>
      <div className="duo reveal">
        <div className="side prob">
          <span className="mono">The Problem</span><h3>Where revenue leaks out</h3>
          <p>Many business owners face the same operational challenges:</p>
          <ul><li>Excessive incoming calls that overwhelm staff</li><li>Missed leads due to delayed responses</li><li>Administrative bottlenecks from limited personnel</li><li>Lost revenue from poor follow-up processes</li><li>Inconsistent customer experiences</li><li>Managing appointments and inquiries at once</li><li>Rising staffing costs and limited scalability</li></ul>
        </div>
        <div className="side sol">
          <span className="mono">Our Solution</span><h3>Intelligent AI that handles it</h3>
          <p>iConvers8.ai automates repetitive communication while staying professional and personal. Our AI agents can:</p>
          <ul><li>Answer incoming phone calls instantly</li><li>Engage customers in natural conversations</li><li>Qualify leads on predefined criteria</li><li>Schedule appointments automatically</li><li>Follow up with prospects and customers</li><li>Integrate seamlessly with CRM systems</li><li>Operate 24/7 without breaks or downtime</li></ul>
        </div>
      </div>
    </div></section>
    <section id="services"><div className="wrap">
      <div className="sh reveal"><span className="idx">[02]</span><h2>Core services</h2><p>Everything you need to automate customer communication and revenue operations.</p></div>
      <div className="fg three reveal">
        <div className="cell"><div className="n">01</div><h3>AI Voice Agents</h3><p>Human-like AI assistants that answer incoming calls, provide information, qualify prospects, and direct inquiries appropriately.</p></div>
        <div className="cell"><div className="n">02</div><h3>Automated Appointment Booking</h3><p>AI-driven scheduling that lets customers book appointments without requiring staff intervention.</p></div>
        <div className="cell"><div className="n">03</div><h3>Lead Qualification Systems</h3><p>Automated workflows that identify high-quality prospects and route them directly into the sales pipeline.</p></div>
        <div className="cell"><div className="n">04</div><h3>CRM Integration</h3><p>Seamless synchronization with existing CRM platforms so customer information is automatically updated and managed.</p></div>
        <div className="cell"><div className="n">05</div><h3>Automated Follow-Up Sequences</h3><p>AI-powered campaigns that maintain engagement with leads and customers through personalized communication.</p></div>
        <div className="cell"><div className="n">06</div><h3>Business Process Automation</h3><p>Custom AI workflows designed to reduce manual tasks and improve operational efficiency across departments.</p></div>
      </div>
    </div></section>
    <section id="how"><div className="wrap">
      <div className="sh reveal"><span className="idx">[03]</span><h2>How it works</h2><p>No dialing. No voicemail marathons. No manual follow-up. Four steps and your AI SDR is working your pipeline.</p></div>
      <div className="steps reveal">
        <div className="st"><div className="num">1</div><h4>Upload Leads</h4><p>Import a CSV or connect your CRM.</p></div>
        <div className="st"><div className="num">2</div><h4>Train Your AI</h4><p>Customize your agent with your products, services, FAQs, sales process, and qualification rules.</p></div>
        <div className="st"><div className="num">3</div><h4>Launch Campaigns</h4><p>Your AI begins natural voice conversations with every prospect.</p></div>
        <div className="st"><div className="num">4</div><h4>Book Meetings</h4><p>Qualified prospects are scheduled directly into your calendar.</p></div>
      </div>
    </div></section>
    <section id="features"><div className="wrap">
      <div className="sh reveal"><span className="idx">[04]</span><h2>Features</h2></div>
      <div className="fg reveal">
        <div className="cell"><div className="n">01</div><h3>AI outbound voice calls</h3><p>Natural, human-like conversations at scale, in your brand voice.</p></div>
        <div className="cell"><div className="n">02</div><h3>Intelligent lead qualification</h3><p>Score prospects against your criteria and route hot ones instantly.</p></div>
        <div className="cell"><div className="n">03</div><h3>Automated appointment scheduling</h3><p>Real availability checked and meetings booked on the spot.</p></div>
        <div className="cell"><div className="n">04</div><h3>SMS and email follow-up</h3><p>Personalized sequences that keep every lead warm.</p></div>
        <div className="cell"><div className="n">05</div><h3>Objection handling</h3><p>Trained responses that keep conversations moving forward.</p></div>
        <div className="cell"><div className="n">06</div><h3>CRM integration</h3><p>Every call and outcome synced to the tools you already use.</p></div>
        <div className="cell"><div className="n">07</div><h3>Call transcripts and analytics</h3><p>Every conversation captured, searchable, and measured.</p></div>
        <div className="cell"><div className="n">08</div><h3>24/7 availability</h3><p>Always on, no breaks, sick days, or downtime.</p></div>
      </div>
    </div></section>
    <section id="action"><div className="wrap">
      <div className="sh reveal"><span className="idx">[05]</span><h2>See it in action</h2></div>
      <div className="duo reveal">
        <div className="side plain">
          <span className="mono">Inbound calls</span><h3>Never miss another lead</h3>
          <p>Your AI receptionist answers instantly, handles FAQs, and turns callers into booked meetings.</p>
          <ul><li>Answer instantly, 24/7</li><li>Qualify and route callers</li><li>Book appointments live</li><li>Escalate to a human on demand</li></ul>
          <div className="term"><div className="top"><i></i><i></i><i></i></div><div className="body"><div className="l"><span className="g">caller:</span> got any 3-bed listings under 500k?</div><div className="l"><span className="who">ava:</span> yes, texting you three, want a viewing?</div><div className="l g">// meeting booked · synced</div></div></div>
        </div>
        <div className="side plain">
          <span className="mono">Outbound calls</span><h3>Work your pipeline on autopilot</h3>
          <p>Upload a list and let your agent call every prospect, handle objections, and book the interested ones.</p>
          <ul><li>Cold outreach at scale</li><li>Lead follow-up and win-back</li><li>Appointment reminders</li><li>Live calendar booking</li></ul>
          <div className="term"><div className="top"><i></i><i></i><i></i></div><div className="body"><div className="l"><span className="who">ava:</span> following up on your quote, still moving this quarter?</div><div className="l"><span className="g">sam:</span> yeah, pricing was my worry.</div><div className="l"><span className="who">ava:</span> fair, specialist call thursday at 2?</div><div className="l g">// objection handled · meeting set</div></div></div>
        </div>
      </div>
    </div></section>
    <section id="serve"><div className="wrap">
      <div className="sh reveal"><span className="idx">[06]</span><h2>Who we serve</h2><p>Designed for businesses that receive a high volume of customer inquiries and want to improve operational efficiency.</p></div>
      <div className="fg three reveal">
        <div className="cell"><h3>Real Estate</h3></div>
        <div className="cell"><h3>Healthcare Practices</h3></div>
        <div className="cell"><h3>Law Firms</h3></div>
        <div className="cell"><h3>Home Service Businesses</h3></div>
        <div className="cell"><h3>Financial Services</h3></div>
        <div className="cell"><h3>Insurance Agencies</h3></div>
        <div className="cell"><h3>Marketing Agencies</h3></div>
        <div className="cell"><h3>Educational Institutions</h3></div>
        <div className="cell"><h3>Automotive &amp; E-commerce</h3></div>
      </div>
      <div className="reveal"><span className="mono" style={{display:'block',marginTop:'2rem'}}>// perfect for</span>
        <div className="tags"><span>SaaS</span><span>Real Estate</span><span>Insurance</span><span>Agencies</span><span>Healthcare</span><span>Financial Services</span><span>Home Services</span><span>Automotive</span><span>B2B Sales</span><span>Professional Services</span></div>
      </div>
    </div></section>
    <section id="benefits"><div className="wrap">
      <div className="sh reveal"><span className="idx">[07]</span><h2>Key benefits</h2></div>
      <div className="fg three reveal">
        <div className="cell"><div className="n">→</div><h3>Never Miss a Lead</h3><p>Every customer inquiry is answered instantly, increasing lead capture rates and conversion opportunities.</p></div>
        <div className="cell"><div className="n">→</div><h3>Operate 24/7</h3><p>AI agents remain available around the clock, ensuring customers receive assistance anytime.</p></div>
        <div className="cell"><div className="n">→</div><h3>Reduce Operational Costs</h3><p>Automate repetitive tasks and reduce dependency on additional administrative staff.</p></div>
        <div className="cell"><div className="n">→</div><h3>Increase Conversion Rates</h3><p>Faster response times and consistent follow-up improve sales performance.</p></div>
        <div className="cell"><div className="n">→</div><h3>Scale Without Hiring</h3><p>Handle growing customer demand without proportionally increasing payroll expenses.</p></div>
        <div className="cell"><div className="n">→</div><h3>Improve Customer Experience</h3><p>Professional, responsive, and personalized interactions at every stage of the journey.</p></div>
      </div>
    </div></section>
    <section id="value"><div className="wrap">
      <div className="sh reveal"><span className="idx">[08]</span><h2>Value, vision &amp; mission</h2></div>
      <div className="vv reveal">
        <div className="lead">
          <span className="mono">Our Value Proposition</span>
          <p style={{marginTop:'.8rem'}}>iConvers8.ai transforms the way businesses communicate with customers by deploying intelligent AI systems that answer, engage, qualify, schedule, and follow up automatically.</p>
          <p>We help businesses save time, reduce costs, improve customer satisfaction, and generate more revenue through AI-powered automation.</p>
        </div>
        <div className="side">
          <div className="box"><h4>VISION</h4><p>To become the leading AI-powered business automation platform that enables organizations worldwide to scale customer engagement and revenue operations efficiently.</p></div>
          <div className="box"><h4>MISSION</h4><p>To empower businesses with intelligent AI solutions that simplify operations, enhance customer experiences, and drive sustainable growth.</p></div>
        </div>
      </div>
    </div></section>
    <section id="production"><div className="wrap">
      <div className="sh reveal"><span className="idx">[09]</span><h2>Production ready</h2></div>
      <div className="stats reveal">
        <div className="s"><div className="big">&lt;300ms</div><p>Response latency keeps conversations flowing naturally.</p></div>
        <div className="s"><div className="big">40+</div><p>Languages, detected and switched mid-call.</p></div>
        <div className="s"><div className="big">SOC 2</div><p>HIPAA-ready handling, encrypted in transit and at rest.</p></div>
      </div>
    </div></section>
    <section id="pricing"><div className="wrap">
      <div className="sh reveal"><span className="idx">[10]</span><h2>Deploy at scale</h2></div>
      <div className="price reveal">
        <div className="p"><span className="name">Start for Free</span><div className="amt">$0</div><span className="per">14-day trial, then from $199/mo</span><ul><li>1 AI voice agent</li><li>Inbound call answering</li><li>Appointment booking</li><li>Call transcripts</li><li>Email support</li></ul><a href="#book" className="btn">Start free</a></div>
        <div className="p"><span className="name">Custom Build</span><div className="amt" style={{color:'var(--acid)'}}>Let's talk</div><span className="per">For teams and enterprises</span><ul><li>Unlimited agents</li><li>Inbound + outbound</li><li>CRM &amp; calendar integrations</li><li>40+ languages &amp; handoff</li><li>Priority support &amp; SLA</li></ul><a href="#book" className="btn fill">Book a demo</a></div>
      </div>
    </div></section>
    <section id="founder"><div className="wrap">
      <div className="sh reveal"><span className="idx">[11]</span><h2>A note from the founder</h2></div>
      <div className="founder reveal">
        <div className="ph"></div>
        <div className="body">
          <div className="q">
            <p>iConvers8.ai was founded because after noticing countless business owners drowning under operational bottlenecks, constantly missing critical client calls, losing revenue to delayed lead responses, and facing limited scalability due to rising staffing costs, I knew we could build a revolutionary solution that would help alleviate those issues.</p>
            <p>Drawing on my decades of experience in scaling and leading revenue operations, it was quickly recognized that a major gap in the market for human-like, non artificial feeling conversational intelligence was our launchpad. To seamlessly and instantly answer, qualify, and execute workflows leading to explosive linear growth to the bottom line. iConvers8.ai was built to bridge this gap, ensuring organizations never miss a lead or opportunity again.</p>
            <p>From all of us here at iConvers8.ai we look forward to you trusting us to take your business to the next level and beyond. That time is now.</p>
          </div>
          <div className="sig"><b>Jeffrey Hawk</b><small>President &amp; Chief Executive Officer</small></div>
        </div>
      </div>
    </div></section>
    <section id="clients"><div className="wrap">
      <div className="sh reveal"><span className="idx">[12]</span><h2>Trusted by ops teams</h2></div>
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
      <div className="sh reveal"><span className="idx">[13]</span><h2>Book a live demo</h2></div>
      <div className="book reveal"><iframe src="https://calendly.com/ndubuisiokolieezinne/30min?hide_gdpr_banner=1" title="Book a time" loading="lazy"></iframe></div>
      <p className="mono" style={{marginTop:'1rem',color:'var(--dim)'}}>// prefer email? scroll down to send a message</p>
    </div></section>
    <section id="contact"><div className="wrap">
      <div className="sh reveal"><span className="idx">[14]</span><h2>Talk to us</h2></div>
      <form className="formx reveal" data-lead="1">
        <div className="row"><input name="first_name" placeholder="First name *" required /><input name="last_name" placeholder="Last name *" required /></div>
        <input name="email" type="email" placeholder="Work email *" required />
        <input name="topic" placeholder="What do you want to automate?" />
        <textarea name="message" placeholder="Tell us about your call volume..."></textarea>
        <button type="submit" className="btn fill">Send message</button>
      </form>
    </div></section>
    <section id="faq"><div className="wrap">
      <div className="sh reveal"><span className="idx">[15]</span><h2>Questions</h2></div>
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
      <h2>Ready to book<br />more meetings?</h2>
      <p>Stop wasting hours on cold calls and repetitive follow-up. Let iConvers8.ai handle prospecting while your sales team closes more business.</p>
      <div className="acts"><a href="#book" className="btn fill">Book a demo</a><a href="#book" className="btn">Start your free trial</a></div>
    </div></div></section>
    <footer><div className="wrap">
      <div className="foot">
        <div><a href="#" className="logo"><span className="dot"></span>iConvers8.ai</a><p>An AI-powered Revenue Operations platform. Our mission is simple: help businesses scale their sales and customer service operations using intelligent AI systems that work 24/7.</p><div className="soc"><a href="#">[x]</a><a href="#">[in]</a><a href="#">[gh]</a></div></div>
        <div><h4>Product</h4><a href="#services">Services</a><a href="#how">How It Works</a><a href="#pricing">Pricing</a><a href="#features">Features</a></div>
        <div><h4>Company</h4><a href="#founder">Founder's Note</a><a href="#value">Vision &amp; Mission</a><a href="#serve">Industries</a><a href="#contact">Contact</a></div>
        <div><h4>Legal</h4><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Security</a><a href="#">Status</a></div>
      </div>
      <div className="fbtm"><span>© 2026 iConvers8.ai // all rights reserved</span><span>hello@iconvers8.ai</span></div>
    </div></footer>
  </>);
}
