// Direction B — "Quiet Editorial"
// Bone background, transitional serif (Spectral) for body & display, sans
// (Inter Tight) for chrome/labels. Tighter grid, modular layout. Single
// hairline accent in muted indigo. More architectural.

const B_TOK = {
  bg: 'var(--b-bg, #faf7f2)',         // bone
  paper: '#ffffff',
  ink: 'var(--b-ink, #14130f)',
  inkSoft: 'var(--b-ink-soft, #58544c)',
  inkFaint: '#8a857a',
  rule: 'var(--b-rule, #e3ddd1)',
  accent: 'var(--b-accent, #3a4a6b)',  // muted indigo / oxford
  display: '"Spectral", "Cormorant Garamond", Georgia, serif',
  body: '"Spectral", Georgia, serif',
  sans: '"Inter Tight", "Inter", system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

const bStyles = {
  page: {
    background: B_TOK.bg,
    color: B_TOK.ink,
    fontFamily: B_TOK.body,
    fontSize: 16,
    lineHeight: 1.6,
    width: '100%', height: '100%',
    overflowY: 'auto', overflowX: 'hidden',
    fontFeatureSettings: '"liga","onum","kern"',
  },
  label: {
    fontFamily: B_TOK.sans, fontSize: 11,
    letterSpacing: '0.16em', textTransform: 'uppercase',
    color: B_TOK.inkFaint, fontWeight: 500,
  },
  rule: { height: 1, background: B_TOK.rule, border: 0 },
  num: { fontFamily: B_TOK.mono, fontSize: 11, color: B_TOK.inkFaint, letterSpacing: 0.5 },
};

function BNav({ page, onNav }) {
  const items = [
    ['home', 'Index'],
    ['research', 'Research'],
    ['publications', 'Publications'],
    ['teaching', 'Teaching'],
    ['talks', 'Talks'],
    ['cv', 'CV'],
    ['contact', 'Contact'],
  ];
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 5, background: B_TOK.bg, borderBottom: `1px solid ${B_TOK.rule}`, padding: '20px 56px', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 24 }}>
      <button onClick={() => onNav('home')} style={{ all: 'unset', cursor: 'pointer', display: 'flex', alignItems: 'baseline', gap: 12 }}>
        <span style={{ fontFamily: B_TOK.display, fontSize: 19, fontWeight: 500, letterSpacing: -0.2 }}>Maria Gallego-Ortiz</span>
        <span style={{ ...bStyles.label, fontSize: 10 }}>— Philosophy, Boston College</span>
      </button>
      <nav style={{ display: 'flex', gap: 0 }}>
        {items.map(([k, label], i) => (
          <button key={k} onClick={() => onNav(k)} style={{
            all: 'unset', cursor: 'pointer',
            fontFamily: B_TOK.sans, fontSize: 12, fontWeight: 500,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: page === k ? B_TOK.ink : B_TOK.inkSoft,
            padding: '6px 14px',
            borderLeft: i === 0 ? `1px solid ${B_TOK.rule}` : 'none',
            borderRight: `1px solid ${B_TOK.rule}`,
            background: page === k ? B_TOK.paper : 'transparent',
            transition: 'all .15s',
          }}>
            {page === k && <span style={{ color: B_TOK.accent, marginRight: 6 }}>·</span>}
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}

function BPageHeader({ kicker, title, italic }) {
  return (
    <section style={{ padding: '64px 56px 40px', borderBottom: `1px solid ${B_TOK.rule}`, display: 'grid', gridTemplateColumns: '160px 1fr', gap: 32 }}>
      <div style={bStyles.label}>{kicker}</div>
      <h1 style={{ fontFamily: B_TOK.display, fontWeight: 400, fontSize: 52, lineHeight: 1.05, margin: 0, letterSpacing: -0.6, color: B_TOK.ink }}>
        {title} {italic && <span style={{ fontStyle: 'italic', color: B_TOK.accent }}>{italic}</span>}
      </h1>
    </section>
  );
}

function BFooter() {
  return (
    <footer style={{ marginTop: 64, padding: '32px 56px', borderTop: `1px solid ${B_TOK.rule}`, display: 'grid', gridTemplateColumns: '160px 1fr 1fr', gap: 32, fontSize: 13 }}>
      <div style={bStyles.label}>Colophon</div>
      <div style={{ color: B_TOK.inkSoft }}>
        Set in Spectral and Inter Tight.<br/>
        Updated April 2026.
      </div>
      <div style={{ color: B_TOK.inkSoft, textAlign: 'right' }}>
        © Maria Gallego-Ortiz · Chestnut Hill, MA
      </div>
    </footer>
  );
}

// ─── Home ────────────────────────────────────────────────────────
function BHome({ onNav }) {
  const D = window.SITE_DATA;
  return (
    <div>
      {/* Two-column hero with portrait left */}
      <section style={{ display: 'grid', gridTemplateColumns: '320px 1fr', borderBottom: `1px solid ${B_TOK.rule}` }}>
        <div style={{ borderRight: `1px solid ${B_TOK.rule}`, padding: 32, background: B_TOK.paper, position: 'relative' }}>
          <div style={{
            aspectRatio: '4/5',
            border: `1px solid ${B_TOK.rule}`,
            overflow: 'hidden',
            position: 'relative',
          }}>
            <img src="portrait.jpeg" alt="Maria Gallego-Ortiz"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 30%', filter: 'saturate(0.9) contrast(1.02)' }} />
          </div>
          <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr', gap: 6, fontSize: 12, color: B_TOK.inkSoft, fontFamily: B_TOK.sans }}>
            <div><span style={{ ...bStyles.label, fontSize: 10, marginRight: 8 }}>Field</span> Philosophy</div>
            <div><span style={{ ...bStyles.label, fontSize: 10, marginRight: 8 }}>Status</span> Ph.D. Candidate, BC</div>
            <div><span style={{ ...bStyles.label, fontSize: 10, marginRight: 8 }}>From</span> Bogotá, Colombia</div>
            <div><span style={{ ...bStyles.label, fontSize: 10, marginRight: 8 }}>Now</span> Chestnut Hill, MA</div>
          </div>
        </div>
        <div style={{ padding: '64px 56px 56px' }}>
          <div style={{ ...bStyles.label, marginBottom: 28, color: B_TOK.accent }}>№ 01 · Introduction</div>
          <h1 style={{
            fontFamily: B_TOK.display, fontWeight: 400, fontSize: 84, lineHeight: 1, letterSpacing: -1.5, margin: '0 0 32px', color: B_TOK.ink,
          }}>
            On the work<br/>
            of <span style={{ fontStyle: 'italic', color: B_TOK.accent }}>imagination.</span>
          </h1>
          <p style={{ fontSize: 21, lineHeight: 1.5, color: B_TOK.inkSoft, margin: 0, maxWidth: 560, fontStyle: 'italic' }}>
            {D.tagline}
          </p>
          <div style={{ display: 'flex', gap: 16, marginTop: 40 }}>
            <button onClick={() => onNav('research')} style={{
              all: 'unset', cursor: 'pointer', fontFamily: B_TOK.sans, fontSize: 12, fontWeight: 500,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '12px 22px', background: B_TOK.ink, color: B_TOK.bg,
            }}>Read the research →</button>
            <button onClick={() => onNav('cv')} style={{
              all: 'unset', cursor: 'pointer', fontFamily: B_TOK.sans, fontSize: 12, fontWeight: 500,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '12px 22px', border: `1px solid ${B_TOK.ink}`, color: B_TOK.ink,
            }}>Curriculum Vitae</button>
          </div>
        </div>
      </section>

      {/* Bio block */}
      <section style={{ padding: '64px 56px', display: 'grid', gridTemplateColumns: '160px 1fr', gap: 32, borderBottom: `1px solid ${B_TOK.rule}` }}>
        <div style={bStyles.label}>About</div>
        <div style={{ maxWidth: 680, columnCount: 1 }}>
          {D.bio.map((p, i) => (
            <p key={i} style={{ margin: i === 0 ? 0 : '16px 0 0', fontSize: 19, lineHeight: 1.55 }}>{p}</p>
          ))}
        </div>
      </section>

      {/* Two-column index */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: `1px solid ${B_TOK.rule}` }}>
        <div style={{ padding: '56px 56px', borderRight: `1px solid ${B_TOK.rule}` }}>
          <div style={{ ...bStyles.label, marginBottom: 24 }}>№ 02 · Recent writing</div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {D.publications.slice(0, 3).map((p, i) => (
              <li key={i} style={{ padding: '18px 0', borderBottom: i === 2 ? 'none' : `1px solid ${B_TOK.rule}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16 }}>
                  <div style={{ fontFamily: B_TOK.display, fontSize: 19, lineHeight: 1.3, color: B_TOK.ink }}>{p.title}</div>
                  <div style={bStyles.num}>{p.year}</div>
                </div>
                <div style={{ fontStyle: 'italic', color: B_TOK.inkSoft, fontSize: 14, marginTop: 4 }}>{p.venue}</div>
              </li>
            ))}
          </ul>
          <button onClick={() => onNav('publications')} style={{ all: 'unset', cursor: 'pointer', marginTop: 18, ...bStyles.label, color: B_TOK.accent, borderBottom: `1px solid ${B_TOK.accent}`, paddingBottom: 2 }}>
            All publications →
          </button>
        </div>
        <div style={{ padding: '56px 56px' }}>
          <div style={{ ...bStyles.label, marginBottom: 24 }}>№ 03 · Upcoming</div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {D.talks.slice(0, 3).map((t, i) => (
              <li key={i} style={{ padding: '18px 0', borderBottom: i === 2 ? 'none' : `1px solid ${B_TOK.rule}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16 }}>
                  <div style={{ fontFamily: B_TOK.display, fontSize: 19, lineHeight: 1.3, color: B_TOK.ink }}>{t.title}</div>
                  <div style={bStyles.num}>{t.year}</div>
                </div>
                <div style={{ fontStyle: 'italic', color: B_TOK.inkSoft, fontSize: 14, marginTop: 4 }}>{t.venue}</div>
              </li>
            ))}
          </ul>
          <button onClick={() => onNav('talks')} style={{ all: 'unset', cursor: 'pointer', marginTop: 18, ...bStyles.label, color: B_TOK.accent, borderBottom: `1px solid ${B_TOK.accent}`, paddingBottom: 2 }}>
            All talks →
          </button>
        </div>
      </section>

      {/* Pull quote */}
      <section style={{ padding: '88px 56px', textAlign: 'center', borderBottom: `1px solid ${B_TOK.rule}` }}>
        <div style={{ ...bStyles.label, marginBottom: 24, color: B_TOK.accent }}>From the dissertation</div>
        <blockquote style={{ margin: 0, fontFamily: B_TOK.display, fontStyle: 'italic', fontSize: 32, lineHeight: 1.3, maxWidth: 760, marginInline: 'auto', color: B_TOK.ink, letterSpacing: -0.3 }}>
          “Imagination is not an ornament to ethical thought but its primary medium — the faculty by which the moral world becomes visible to us as a world of particular others.”
        </blockquote>
      </section>

      <BFooter />
    </div>
  );
}

// ─── Research ────────────────────────────────────────────────────
function BResearch() {
  const D = window.SITE_DATA;
  return (
    <div>
      <BPageHeader kicker="№ 01 · Research" title="On imagination," italic="ethics, and attention." />
      <section style={{ padding: '56px 56px', display: 'grid', gridTemplateColumns: '160px 1fr', gap: 32, borderBottom: `1px solid ${B_TOK.rule}` }}>
        <div style={bStyles.label}>Statement</div>
        <p style={{ margin: 0, fontFamily: B_TOK.display, fontSize: 22, lineHeight: 1.5, fontStyle: 'italic', color: B_TOK.ink, maxWidth: 680 }}>
          {D.research.statement}
        </p>
      </section>

      <section style={{ padding: '56px 56px', display: 'grid', gridTemplateColumns: '160px 1fr', gap: 32, borderBottom: `1px solid ${B_TOK.rule}` }}>
        <div style={bStyles.label}>Areas</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 40px' }}>
          {D.research.interests.map((x, i) => (
            <div key={i} style={{ padding: '14px 0', borderBottom: `1px solid ${B_TOK.rule}`, display: 'grid', gridTemplateColumns: '32px 1fr', alignItems: 'baseline' }}>
              <span style={bStyles.num}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ fontSize: 17 }}>{x}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '56px 56px', display: 'grid', gridTemplateColumns: '160px 1fr', gap: 32 }}>
        <div style={bStyles.label}>In progress</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          {D.research.inProgress.map((p, i) => (
            <article key={i} style={{ padding: 28, background: B_TOK.paper, border: `1px solid ${B_TOK.rule}` }}>
              <div style={{ ...bStyles.label, color: B_TOK.accent, marginBottom: 10 }}>{p.subtitle}</div>
              <h3 style={{ fontFamily: B_TOK.display, fontWeight: 500, fontSize: 24, margin: 0, lineHeight: 1.2 }}>{p.title}</h3>
              <p style={{ margin: '12px 0 0', color: B_TOK.inkSoft, fontSize: 16 }}>{p.note}</p>
            </article>
          ))}
        </div>
      </section>

      <BFooter />
    </div>
  );
}

// ─── Publications ────────────────────────────────────────────────
function BPublications() {
  const D = window.SITE_DATA;
  return (
    <div>
      <BPageHeader kicker="№ 02 · Publications" title="Articles &" italic="chapters." />
      <section style={{ padding: '0 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '60px 100px 1fr 140px', gap: 24, padding: '20px 0', borderBottom: `1px solid ${B_TOK.rule}`, ...bStyles.label }}>
          <div>№</div><div>Year</div><div>Title</div><div style={{ textAlign: 'right' }}>DOI</div>
        </div>
        {D.publications.map((p, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '60px 100px 1fr 140px', gap: 24, padding: '24px 0', borderBottom: `1px solid ${B_TOK.rule}`, alignItems: 'baseline' }}>
            <div style={bStyles.num}>{String(i + 1).padStart(2, '0')}</div>
            <div style={{ fontFamily: B_TOK.display, fontStyle: 'italic', color: B_TOK.accent, fontSize: 18 }}>{p.year}</div>
            <div>
              <div style={{ fontSize: 14, color: B_TOK.inkSoft, marginBottom: 4, fontFamily: B_TOK.sans }}>{p.authors}</div>
              <div style={{ fontFamily: B_TOK.display, fontSize: 21, lineHeight: 1.3, color: B_TOK.ink }}>{p.title}</div>
              <div style={{ fontStyle: 'italic', color: B_TOK.inkSoft, marginTop: 4, fontSize: 15 }}>{p.venue}</div>
            </div>
            <div style={{ textAlign: 'right', fontFamily: B_TOK.mono, fontSize: 11, color: B_TOK.accent, wordBreak: 'break-all' }}>
              {p.doi || '—'}
            </div>
          </div>
        ))}
      </section>
      <BFooter />
    </div>
  );
}

// ─── Teaching ────────────────────────────────────────────────────
function BTeaching() {
  const D = window.SITE_DATA;
  return (
    <div>
      <BPageHeader kicker="№ 03 · Teaching" title="A practice of" italic="attention." />
      <section style={{ padding: '56px 56px', display: 'grid', gridTemplateColumns: '160px 1fr', gap: 32, borderBottom: `1px solid ${B_TOK.rule}` }}>
        <div style={bStyles.label}>Approach</div>
        <p style={{ margin: 0, fontFamily: B_TOK.display, fontSize: 22, lineHeight: 1.5, fontStyle: 'italic', maxWidth: 680 }}>
          {D.teaching.intro}
        </p>
      </section>

      <section style={{ padding: '56px 56px', display: 'grid', gridTemplateColumns: '160px 1fr', gap: 32 }}>
        <div style={bStyles.label}>Currently · Past</div>
        <div>
          {[...D.teaching.current, ...D.teaching.past].map((c, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 24, padding: '20px 0', borderTop: `1px solid ${B_TOK.rule}` }}>
              <div>
                <div style={{ ...bStyles.label, color: B_TOK.accent, fontSize: 10 }}>{c.years}</div>
                <div style={{ fontFamily: B_TOK.display, fontSize: 18, marginTop: 4 }}>{c.role}</div>
              </div>
              <div>
                <div style={{ fontStyle: 'italic', color: B_TOK.inkSoft, marginBottom: 10 }}>{c.where}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {c.courses.map((co, j) => (
                    <span key={j} style={{ fontFamily: B_TOK.sans, fontSize: 12, padding: '4px 10px', background: B_TOK.paper, border: `1px solid ${B_TOK.rule}`, color: B_TOK.ink }}>
                      {co}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <BFooter />
    </div>
  );
}

// ─── Talks ───────────────────────────────────────────────────────
function BTalks() {
  const D = window.SITE_DATA;
  const byYear = {};
  D.talks.forEach(t => { (byYear[t.year] = byYear[t.year] || []).push(t); });
  const years = Object.keys(byYear).sort((a, b) => b.localeCompare(a));
  return (
    <div>
      <BPageHeader kicker="№ 04 · Talks" title="Conferences &" italic="presentations." />
      <section style={{ padding: '0 56px' }}>
        {years.map((y, idx) => (
          <div key={y} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 32, padding: '32px 0', borderBottom: `1px solid ${B_TOK.rule}` }}>
            <div style={{ position: 'sticky', top: 84, alignSelf: 'start' }}>
              <div style={{ fontFamily: B_TOK.display, fontSize: 36, fontStyle: 'italic', color: B_TOK.accent, lineHeight: 1 }}>{y}</div>
              <div style={{ ...bStyles.label, marginTop: 6, fontSize: 10 }}>{byYear[y].length} talk{byYear[y].length > 1 ? 's' : ''}</div>
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {byYear[y].map((t, i) => (
                <li key={i} style={{ padding: '14px 0', borderTop: i === 0 ? 'none' : `1px dotted ${B_TOK.rule}` }}>
                  <div style={{ fontFamily: B_TOK.display, fontSize: 19, lineHeight: 1.3 }}>{t.title}</div>
                  <div style={{ fontStyle: 'italic', color: B_TOK.inkSoft, fontSize: 14, marginTop: 2 }}>
                    {t.venue}{t.note && <span> · {t.note}</span>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <BFooter />
    </div>
  );
}

// ─── CV ──────────────────────────────────────────────────────────
function BCv() {
  const D = window.SITE_DATA;
  return (
    <div>
      <section style={{ padding: '64px 56px 40px', borderBottom: `1px solid ${B_TOK.rule}`, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32 }}>
        <div>
          <div style={{ ...bStyles.label, marginBottom: 18, color: B_TOK.accent }}>№ 05 · Curriculum Vitae</div>
          <h1 style={{ fontFamily: B_TOK.display, fontWeight: 400, fontSize: 52, lineHeight: 1.05, margin: 0, letterSpacing: -0.6 }}>
            Curriculum <span style={{ fontStyle: 'italic', color: B_TOK.accent }}>vitae.</span>
          </h1>
        </div>
        <a href="#" style={{ ...bStyles.label, color: B_TOK.ink, padding: '10px 18px', border: `1px solid ${B_TOK.ink}`, textDecoration: 'none' }}>
          Download PDF ↓
        </a>
      </section>

      <BCvBlock label="Education" items={D.education.map(e => ({
        date: e.years, primary: e.degree, secondary: e.school, tertiary: e.thesis,
      }))} />

      <BCvBlock label="Awards" items={D.awards.map(a => ({
        date: a.year, primary: a.title, secondary: a.note,
      }))} />

      <BCvBlock label="Service" items={D.service.map(s => ({
        date: s.years, primary: s.role, secondary: s.org,
      }))} />

      <section style={{ padding: '40px 56px', display: 'grid', gridTemplateColumns: '160px 1fr 1fr', gap: 32, borderTop: `1px solid ${B_TOK.rule}` }}>
        <div style={bStyles.label}>Affiliations · Languages</div>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {D.affiliations.map((a, i) => (
            <li key={i} style={{ padding: '8px 0', borderBottom: `1px dotted ${B_TOK.rule}`, fontStyle: 'italic' }}>{a}</li>
          ))}
        </ul>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {D.languages.map((l, i) => (
            <li key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px dotted ${B_TOK.rule}` }}>
              <span>{l.lang}</span>
              <span style={{ ...bStyles.label, fontSize: 10 }}>{l.level}</span>
            </li>
          ))}
        </ul>
      </section>

      <BFooter />
    </div>
  );
}

function BCvBlock({ label, items }) {
  return (
    <section style={{ padding: '40px 56px', display: 'grid', gridTemplateColumns: '160px 1fr', gap: 32, borderTop: `1px solid ${B_TOK.rule}` }}>
      <div style={bStyles.label}>{label}</div>
      <div>
        {items.map((it, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 24, padding: '14px 0', borderTop: i === 0 ? 'none' : `1px solid ${B_TOK.rule}` }}>
            <div style={{ ...bStyles.label, color: B_TOK.accent, fontSize: 10 }}>{it.date}</div>
            <div>
              <div style={{ fontFamily: B_TOK.display, fontSize: 18 }}>{it.primary}</div>
              {it.secondary && <div style={{ fontStyle: 'italic', color: B_TOK.inkSoft, fontSize: 15, marginTop: 2 }}>{it.secondary}</div>}
              {it.tertiary && <div style={{ color: B_TOK.inkSoft, fontSize: 14, marginTop: 6 }}>{it.tertiary}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────
function BContact() {
  const D = window.SITE_DATA;
  return (
    <div>
      <BPageHeader kicker="№ 06 · Contact" title="Get" italic="in touch." />
      <section style={{ padding: '56px 56px', display: 'grid', gridTemplateColumns: '160px 1fr 1fr', gap: 32 }}>
        <div style={bStyles.label}>Correspondence</div>
        <div>
          <p style={{ margin: 0, fontFamily: B_TOK.display, fontSize: 22, lineHeight: 1.5, fontStyle: 'italic', color: B_TOK.inkSoft }}>
            I welcome correspondence on shared questions — about Murdoch, Ricœur, hospitality, or imagination — and from students considering graduate study in philosophy.
          </p>
        </div>
        <dl style={{ margin: 0 }}>
          <BContactRow label="Email" value={D.email} href={`mailto:${D.email}`} />
          <BContactRow label="Department" value={"Department of Philosophy\nBoston College"} />
          <BContactRow label="Office" value={"Stokes Hall\n140 Commonwealth Ave.\nChestnut Hill, MA 02467"} />
        </dl>
      </section>
      <BFooter />
    </div>
  );
}

function BContactRow({ label, value, href }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 16, padding: '14px 0', borderBottom: `1px solid ${B_TOK.rule}` }}>
      <dt style={bStyles.label}>{label}</dt>
      <dd style={{ margin: 0, fontFamily: B_TOK.display, fontSize: 17, whiteSpace: 'pre-line' }}>
        {href ? <a href={href} style={{ color: B_TOK.accent, textDecoration: 'none', borderBottom: `1px solid ${B_TOK.accent}` }}>{value}</a> : value}
      </dd>
    </div>
  );
}

// ─── Shell ───────────────────────────────────────────────────────
function DirectionB({ initialPage = 'home' }) {
  const [page, setPage] = React.useState(initialPage);
  const scrollRef = React.useRef(null);
  React.useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = 0; }, [page]);
  const pages = {
    home: <BHome onNav={setPage} />,
    research: <BResearch />,
    publications: <BPublications />,
    teaching: <BTeaching />,
    talks: <BTalks />,
    cv: <BCv />,
    contact: <BContact />,
  };
  return (
    <div ref={scrollRef} style={bStyles.page}>
      <BNav page={page} onNav={setPage} />
      {pages[page] || pages.home}
    </div>
  );
}

Object.assign(window, { DirectionB });
