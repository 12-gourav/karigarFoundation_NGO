

export default function Home() {
  return (
    <div className="maintenance-root">
      <style>{globalCss}</style>

      {/* Background Decorative Elements */}
      <div className="bg-orbs">
        <span className="orb orb-1"/>
        <span className="orb orb-2"/>
        <span className="orb orb-3"/>
      </div>

      <main className="card" role="main" aria-labelledby="title">
        <header className="header">
          <Logo />
        </header>

        <h1 id="title" className="title">We’re polishing things — <span>Under Maintenance</span></h1>
        <p className="subtitle">
          Our website is currently a work in progress. We’re making improvements to bring you a better experience.
        </p>

        {/* Illustration */}
        <Illustration className="illustration" />

        {/* Progress */}
        <div className="progress-wrap" aria-label="Maintenance progress">
          <div className="progress">
            <div className="bar" style={{ width: "62%" }} aria-valuenow={62} aria-valuemin={0} aria-valuemax={100} role="progressbar" />
          </div>
          <span className="progress-label">62% complete</span>
        </div>

        {/* Notify form */}
        <form className="notify" onSubmit={(e)=>{e.preventDefault(); alert("Thanks! We'll notify you.");}}>
          <label htmlFor="email" className="visually-hidden">Email address</label>
          <input id="email" name="email" type="email" required placeholder="Enter your email for updates" />
          <button className="btn" type="submit" aria-label="Notify me when live">
            <span className="btn-glow"/>
            Notify me
          </button>
        </form>

        {/* Meta info */}
        <ul className="meta">
          <li><span className="dot"/> Estimated back <strong>soon</strong></li>
          <li><span className="dot"/> Status page: <a href="#" aria-disabled>coming soon</a></li>
          <li><span className="dot"/> Need help? <a href="mailto:support@example.com">support@example.com</a></li>
        </ul>

        {/* Footer */}
        <footer className="footer">
          <div className="socials" aria-label="Social links">
            <a href="#" aria-label="Twitter" className="social">𝕏</a>
            <a href="#" aria-label="GitHub" className="social">GH</a>
            <a href="#" aria-label="LinkedIn" className="social">in</a>
          </div>
          <small>© {new Date().getFullYear()} Karigar Foundation. All rights reserved.</small>
        </footer>
      </main>
    </div>
  );
}

function Logo(){
  return (
    <div className="logo" aria-label="Brand logo" title="Your Brand">
      <span className="gem"/>
      <span className="word">Your<span className="accent">Site</span></span>
    </div>
  );
}

function Illustration({ className }){
  return (
    <svg className={className} viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Under maintenance illustration">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--g1)"/>
          <stop offset="100%" stopColor="var(--g2)"/>
        </linearGradient>
        <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodOpacity="0.25" />
        </filter>
      </defs>
      {/* Desk */}
      <rect x="40" y="220" width="480" height="12" rx="6" fill="#D9D9E3" opacity="0.5" />
      {/* Cone */}
      <g filter="url(#s)">
        <polygon points="160,218 200,110 240,218" fill="url(#g)" />
        <rect x="171" y="150" width="58" height="16" fill="#fff" opacity=".9"/>
        <rect x="166" y="174" width="68" height="16" fill="#fff" opacity=".9"/>
      </g>
      {/* Gear */}
      <g transform="translate(320,130)">
        <circle r="42" fill="url(#g)"/>
        <g className="gear" transform="rotate(0)">
          {Array.from({length:8}).map((_,i)=>{
            const angle = (i*45); const rad = (angle*Math.PI)/180; const x=Math.cos(rad)*58; const y=Math.sin(rad)*58;
            return <rect key={i} x={x-6} y={y-12} width="12" height="24" rx="3" fill="#fff" opacity=".95" transform={`rotate(${angle} ${x} ${y})`} />
          })}
        </g>
        <circle r="16" fill="#fff" opacity=".95"/>
      </g>
      {/* Monitor */}
      <g filter="url(#s)" transform="translate(70,40)">
        <rect x="0" y="0" width="220" height="140" rx="14" fill="#ffffff" />
        <rect x="12" y="18" width="196" height="12" rx="6" fill="#E8E8EF" />
        <rect x="12" y="40" width="160" height="10" rx="5" fill="#F0F0F6" />
        <rect x="12" y="58" width="176" height="10" rx="5" fill="#F0F0F6" />
        <rect x="12" y="76" width="140" height="10" rx="5" fill="#F0F0F6" />
        <rect x="12" y="94" width="100" height="10" rx="5" fill="#F0F0F6" />
      </g>
    </svg>
  );
}

const globalCss = `
:root{
  --bg: #0f1224; /* page bg */
  --card: rgba(255,255,255,0.10);
  --stroke: rgba(255,255,255,0.25);
  --text: #E8E9F1;
  --muted: #BCC1CD;
  --accent: #7C5CFF;
  --accent-2: #27C26D;
  --g1: #7C5CFF;
  --g2: #27C26D;
}
@media (prefers-color-scheme: light){
  :root{
    --bg: #f6f7fb; --card: rgba(255,255,255,0.75); --stroke: rgba(0,0,0,0.06); --text:#1B1E28; --muted:#4B5162;
  }
}
*{box-sizing:border-box}
html,body,#root{height:100%}
body{margin:0;font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji"; background: radial-gradient(1200px 800px at 10% 10%, #1c2240 0%, transparent 60%), radial-gradient(1400px 900px at 90% 10%, #13203a 0%, transparent 60%), var(--bg); color: var(--text);}

.maintenance-root{min-height:100vh; display:grid; place-items:center; padding:24px}

.bg-orbs{ position:fixed; inset:0; z-index:-1; overflow:hidden; }
.orb{ position:absolute; width:520px; height:520px; border-radius:50%; filter:blur(60px); opacity:.18; animation: drift 18s ease-in-out infinite; }
.orb-1{ background:radial-gradient(circle at 30% 30%, var(--g1), transparent 60%); left:-160px; top:-120px; }
.orb-2{ background:radial-gradient(circle at 70% 70%, var(--g2), transparent 60%); right:-220px; top:-160px; animation-delay: -6s }
.orb-3{ background:radial-gradient(circle at 50% 50%, #00d4ff, transparent 60%); left:20%; bottom:-200px; animation-delay: -12s; }
@keyframes drift{ 0%,100%{ transform:translateY(0) } 50%{ transform:translateY(-14px) } }

.card{ width:min(920px, 100%); border:1px solid var(--stroke); background:linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.05)); backdrop-filter:saturate(140%) blur(12px); border-radius:28px; padding:32px 28px; box-shadow: 0 20px 50px rgba(0,0,0,.25); position:relative; overflow:hidden }
.card:before{content:""; position:absolute; inset:-1px; border-radius:inherit; padding:1px; background:linear-gradient(135deg, rgba(124,92,255,.55), rgba(39,194,109,.35)); -webkit-mask:linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite:xor; mask-composite:exclude; pointer-events:none}

.header{ display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:10px }
.logo{ display:inline-flex; align-items:center; gap:12px; font-weight:800; letter-spacing:.2px; font-size:18px }
.logo .gem{ width:18px; height:18px; border-radius:6px; background:linear-gradient(135deg, var(--g1), var(--g2)); box-shadow:0 4px 14px rgba(124,92,255,.45), 0 2px 8px rgba(39,194,109,.25) }
.logo .word .accent{ color: var(--accent) }

.title{ font-size: clamp(26px, 3.2vw, 38px); line-height:1.15; margin:8px 0 8px; font-weight:900; letter-spacing:.2px }
.title span{ background: linear-gradient(90deg, var(--g1), var(--g2)); -webkit-background-clip:text; background-clip:text; color:transparent }
.subtitle{ margin:0 0 16px; color: var(--muted) }

.illustration{ width:100%; height:auto; display:block; margin:12px 0 18px; --g1: var(--g1); --g2: var(--g2); }
.gear{ animation: spin 14s linear infinite }
@keyframes spin{ to{ transform: rotate(360deg) } }

.progress-wrap{ display:flex; align-items:center; gap:12px; margin: 6px 0 18px; flex-wrap:wrap }
.progress{ position:relative; width: min(520px, 100%); height:12px; background:rgba(255,255,255,.1); border:1px solid var(--stroke); border-radius:999px; overflow:hidden }
.progress .bar{ height:100%; background: linear-gradient(90deg, var(--g1), var(--g2)); box-shadow: 0 8px 20px rgba(124,92,255,.35) inset; animation: pulse 2.2s ease-in-out infinite }
@keyframes pulse { 0%,100%{ filter:saturate(140%) } 50%{ filter:saturate(110%) } }
.progress-label{ font-size:14px; color:var(--muted) }

.notify{ display:flex; gap:10px; width:100%; margin: 4px 0 6px; flex-wrap:wrap }
.notify input{ flex:1 1 280px; min-width: 220px; border-radius:14px; border:1px solid var(--stroke); padding:12px 14px; background:rgba(255,255,255,.85); color:#0f1224; outline:none }
@media (prefers-color-scheme: dark){ .notify input{ background:rgba(10,12,22,.6); color:var(--text) } }
.notify input::placeholder{ color:#9aa3b4 }

.btn{ position:relative; border:none; padding:12px 16px; border-radius:14px; background: linear-gradient(135deg, var(--g1), var(--g2)); color:white; font-weight:700; cursor:pointer; transition: transform .08s ease, box-shadow .2s ease; box-shadow: 0 10px 20px rgba(124,92,255,.35), 0 6px 14px rgba(39,194,109,.25) }
.btn:hover{ transform: translateY(-1px) }
.btn:active{ transform: translateY(0) scale(.99) }
.btn .btn-glow{ position:absolute; inset:-2px; border-radius:inherit; background: radial-gradient(120px 60px at 20% 0%, rgba(255,255,255,.35), transparent 60%), radial-gradient(120px 60px at 80% 100%, rgba(255,255,255,.25), transparent 60%); pointer-events:none }

.meta{ display:flex; gap:14px; flex-wrap:wrap; margin: 12px 0 0; padding:0; list-style:none; color:var(--muted) }
.meta .dot{ display:inline-block; width:6px; height:6px; border-radius:50%; background: var(--accent); margin-right:8px }
.meta a{ color: var(--text); text-decoration: underline dotted 1px; opacity:.9 }
.meta a[aria-disabled]{ pointer-events:none; opacity:.5; text-decoration: none }

.footer{ display:flex; align-items:center; justify-content:space-between; gap:12px; margin-top: 20px; flex-wrap:wrap; color: var(--muted) }
.socials{ display:flex; gap:10px }
.social{ display:inline-flex; align-items:center; justify-content:center; width:34px; height:34px; border-radius:10px; border:1px solid var(--stroke); background: rgba(255,255,255,.08); text-decoration:none; color: var(--text); font-weight:800; font-size:12px }
.social:hover{ transform: translateY(-1px) }

.visually-hidden{ position:absolute !important; height:1px; width:1px; overflow:hidden; clip:rect(1px,1px,1px,1px); white-space:nowrap }
`;
