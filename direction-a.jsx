// Direction A — "Cream Press"
// Continental scholarly: cream paper, deep ink, Cormorant Garamond display +
// EB Garamond body. Asymmetric classical layout. Small caps section labels.
// Hairline rules. Subtle ornament: a single fleuron, drop caps.

const A_TOK = {
  bg: 'var(--a-bg, #f3ede1)',          // warm cream
  paper: 'var(--a-paper, #f7f1e6)',
  ink: 'var(--a-ink, #1f1a14)',         // deep brown-black
  inkSoft: 'var(--a-ink-soft, #4a3f30)',
  rule: 'var(--a-rule, #d4c8b0)',
  accent: 'var(--a-accent, #8a3a2a)',   // oxblood
  display: '"Cormorant Garamond", "EB Garamond", Georgia, serif',
  body: '"EB Garamond", Georgia, serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

const aStyles = {
  page: {
    background: A_TOK.bg,
    color: A_TOK.ink,
    fontFamily: A_TOK.body,
    fontSize: 17,
    lineHeight: 1.55,
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    fontFeatureSettings: '"liga","onum","kern"',
  },
  inner: { maxWidth: 920, margin: '0 auto', padding: '0 72px' },
  smallCaps: {
    fontFamily: A_TOK.body,
    fontSize: 11,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: A_TOK.inkSoft,
    fontWeight: 500,
  },
  rule: { height: 1, background: A_TOK.rule, border: 0, margin: '0' },
  hairline: { height: 1, background: A_TOK.rule, border: 0 },
};

// ─── Top masthead nav ────────────────────────────────────────────
function ANav({ page, onNav }) {
  const items = [
    ['home', 'Home'],
    ['research', 'Research'],
    ['publications', 'Publications'],
    ['teaching', 'Teaching'],
    ['talks', 'Talks'],
    ['cv', 'CV'],
    ['contact', 'Contact'],
  ];
  return (
    <header style={{ borderBottom: `1px solid ${A_TOK.rule}`, padding: '28px 72px 22px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 24 }}>
      <button onClick={() => onNav('home')} style={{
        all: 'unset', cursor: 'pointer',
        fontFamily: A_TOK.display, fontSize: 22, fontStyle: 'italic',
        color: A_TOK.ink, letterSpacing: 0.2,
      }}>
        Maria Gallego-Ortiz
      </button>
      <nav style={{ display: 'flex', gap: 28 }}>
        {items.map(([k, label]) => (
          <button key={k} onClick={() => onNav(k)} style={{
            all: 'unset', cursor: 'pointer',
            fontFamily: A_TOK.body,
            fontSize: 14,
            color: page === k ? A_TOK.accent : A_TOK.inkSoft,
            fontStyle: page === k ? 'italic' : 'normal',
            borderBottom: page === k ? `1px solid ${A_TOK.accent}` : '1px solid transparent',
            paddingBottom: 2,
            transition: 'color .15s',
          }}
          onMouseEnter={(e)=> e.currentTarget.style.color = A_TOK.ink}
          onMouseLeave={(e)=> e.currentTarget.style.color = page === k ? A_TOK.accent : A_TOK.inkSoft}
          >{label}</button>
        ))}
      </nav>
    </header>
  );
}

function AFleuron({ color }) {
  return (
    <div style={{ textAlign: 'center', color: color || A_TOK.rule, fontFamily: A_TOK.display, fontSize: 22, letterSpacing: '1em', margin: '8px 0 4px', userSelect: 'none' }}>
      ❦
    </div>
  );
}

function ASectionLabel({ children, num }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
      {num && (
        <span style={{ fontFamily: A_TOK.display, fontStyle: 'italic', fontSize: 16, color: A_TOK.accent }}>§ {num}</span>
      )}
      <span style={aStyles.smallCaps}>{children}</span>
      <div style={{ flex: 1, height: 1, background: A_TOK.rule }} />
    </div>
  );
}

function AFooter() {
  const D = window.SITE_DATA;
  return (
    <footer style={{ marginTop: 80, padding: '40px 72px 56px', borderTop: `1px solid ${A_TOK.rule}`, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: 13, color: A_TOK.inkSoft }}>
      <span style={{ fontFamily: A_TOK.display, fontStyle: 'italic' }}>Maria Gallego-Ortiz · Chestnut Hill, MA</span>
      <span style={aStyles.smallCaps}>MMXXVI</span>
    </footer>
  );
}

// ─── Home ────────────────────────────────────────────────────────
function AHome({ onNav }) {
  const D = window.SITE_DATA;
  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '88px 72px 56px', display: 'grid', gridTemplateColumns: '1fr 280px', gap: 64, alignItems: 'start' }}>
        <div>
          <div style={{ ...aStyles.smallCaps, marginBottom: 24, color: A_TOK.accent }}>
            Ph.D. Candidate in Philosophy · Boston College
          </div>
          <h1 style={{
            fontFamily: A_TOK.display,
            fontWeight: 400,
            fontSize: 76,
            lineHeight: 1.02,
            margin: '0 0 28px',
            letterSpacing: -1,
            color: A_TOK.ink,
          }}>
            Maria<br/>
            <span style={{ fontStyle: 'italic' }}>Gallego-Ortiz</span>
          </h1>
          <p style={{ fontFamily: A_TOK.display, fontSize: 24, lineHeight: 1.4, fontStyle: 'italic', color: A_TOK.inkSoft, maxWidth: 540, margin: 0 }}>
            {D.tagline}
          </p>
        </div>
        <div>
          <div style={{
            aspectRatio: '4/5',
            border: `1px solid ${A_TOK.rule}`,
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(40,30,20,0.08)',
          }}>
            <img src="portrait.jpeg" alt="Maria Gallego-Ortiz"
              style={{
                width: '100%', height: '100%', objectFit: 'cover',
                objectPosition: '50% 30%',
                filter: 'saturate(0.92) contrast(1.02)',
              }} />
          </div>
          <div style={{ ...aStyles.smallCaps, textAlign: 'center', marginTop: 10, fontSize: 10 }}>Stokes Hall · Boston College</div>
        </div>
      </section>

      <hr style={aStyles.rule} />

      {/* Bio */}
      <section style={{ padding: '56px 72px', display: 'grid', gridTemplateColumns: '180px 1fr', gap: 56 }}>
        <div style={{ ...aStyles.smallCaps, paddingTop: 6 }}>About</div>
        <div style={{ maxWidth: 620 }}>
          {D.bio.map((p, i) => (
            <p key={i} style={{ margin: i === 0 ? 0 : '18px 0 0', fontSize: 19, lineHeight: 1.55 }}>
              {i === 0 && (
                <span style={{
                  float: 'left', fontFamily: A_TOK.display, fontSize: 76, lineHeight: 0.9,
                  marginRight: 10, marginTop: 6, color: A_TOK.accent, fontWeight: 400,
                }}>{p[0]}</span>
              )}
              {i === 0 ? p.slice(1) : p}
            </p>
          ))}
        </div>
      </section>

      <hr style={aStyles.rule} />

      {/* Selected work */}
      <section style={{ padding: '56px 72px' }}>
        <ASectionLabel num="i">Recent & Selected Writing</ASectionLabel>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {D.publications.slice(0, 3).map((p, i) => (
            <li key={i} style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 24, padding: '20px 0', borderBottom: `1px solid ${A_TOK.rule}` }}>
              <div style={{ fontFamily: A_TOK.display, fontStyle: 'italic', color: A_TOK.accent, fontSize: 18 }}>{p.year}</div>
              <div>
                <div style={{ fontFamily: A_TOK.display, fontSize: 22, lineHeight: 1.25, color: A_TOK.ink }}>
                  “{p.title}.”
                </div>
                <div style={{ fontStyle: 'italic', color: A_TOK.inkSoft, marginTop: 4 }}>{p.venue}</div>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={() => onNav('publications')} style={{
          all: 'unset', cursor: 'pointer', marginTop: 24,
          fontFamily: A_TOK.display, fontStyle: 'italic', fontSize: 17, color: A_TOK.accent,
          borderBottom: `1px solid ${A_TOK.accent}`,
        }}>See all publications →</button>
      </section>

      <AFleuron />
      <AFooter />
    </div>
  );
}

// ─── Research ────────────────────────────────────────────────────
function AResearch() {
  const D = window.SITE_DATA;
  return (
    <div>
      <section style={{ padding: '72px 72px 32px' }}>
        <div style={{ ...aStyles.smallCaps, marginBottom: 18, color: A_TOK.accent }}>Research</div>
        <h1 style={{ fontFamily: A_TOK.display, fontWeight: 400, fontSize: 56, lineHeight: 1.05, margin: 0, letterSpacing: -0.5 }}>
          On <span style={{ fontStyle: 'italic' }}>imagination</span> and<br/>the moral life
        </h1>
      </section>

      <section style={{ padding: '32px 72px 56px', display: 'grid', gridTemplateColumns: '180px 1fr', gap: 56 }}>
        <div style={{ ...aStyles.smallCaps, paddingTop: 6 }}>Statement</div>
        <p style={{ margin: 0, fontFamily: A_TOK.display, fontSize: 22, lineHeight: 1.45, fontStyle: 'italic', color: A_TOK.ink, maxWidth: 620 }}>
          {D.research.statement}
        </p>
      </section>

      <hr style={aStyles.rule} />

      <section style={{ padding: '56px 72px', display: 'grid', gridTemplateColumns: '180px 1fr', gap: 56 }}>
        <div style={{ ...aStyles.smallCaps, paddingTop: 6 }}>Areas</div>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, columnCount: 2, columnGap: 48 }}>
          {D.research.interests.map((x, i) => (
            <li key={i} style={{ breakInside: 'avoid', padding: '8px 0', borderBottom: `1px dotted ${A_TOK.rule}`, fontSize: 17 }}>
              <span style={{ color: A_TOK.accent, fontFamily: A_TOK.display, fontStyle: 'italic', marginRight: 8 }}>—</span>
              {x}
            </li>
          ))}
        </ul>
      </section>

      <hr style={aStyles.rule} />

      <section style={{ padding: '56px 72px', display: 'grid', gridTemplateColumns: '180px 1fr', gap: 56 }}>
        <div style={{ ...aStyles.smallCaps, paddingTop: 6 }}>In progress</div>
        <div>
          {D.research.inProgress.map((p, i) => (
            <article key={i} style={{ marginBottom: i === D.research.inProgress.length - 1 ? 0 : 32 }}>
              <h3 style={{ fontFamily: A_TOK.display, fontWeight: 500, fontSize: 26, margin: 0, lineHeight: 1.2 }}>{p.title}</h3>
              <div style={{ ...aStyles.smallCaps, color: A_TOK.accent, marginTop: 6 }}>{p.subtitle}</div>
              <p style={{ margin: '10px 0 0', maxWidth: 580 }}>{p.note}</p>
            </article>
          ))}
        </div>
      </section>

      <AFleuron />
      <AFooter />
    </div>
  );
}

// ─── Publications ────────────────────────────────────────────────
function APublications() {
  const D = window.SITE_DATA;
  return (
    <div>
      <section style={{ padding: '72px 72px 40px' }}>
        <div style={{ ...aStyles.smallCaps, marginBottom: 18, color: A_TOK.accent }}>Publications</div>
        <h1 style={{ fontFamily: A_TOK.display, fontWeight: 400, fontSize: 56, lineHeight: 1.05, margin: 0, letterSpacing: -0.5 }}>
          <span style={{ fontStyle: 'italic' }}>Articles</span> & chapters
        </h1>
      </section>

      <section style={{ padding: '0 72px 40px' }}>
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, counterReset: 'pub' }}>
          {D.publications.map((p, i) => (
            <li key={i} style={{
              display: 'grid', gridTemplateColumns: '36px 100px 1fr', gap: 16,
              padding: '24px 0', borderBottom: `1px solid ${A_TOK.rule}`, alignItems: 'baseline',
            }}>
              <div style={{ fontFamily: A_TOK.display, fontStyle: 'italic', color: A_TOK.inkSoft, fontSize: 14 }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div style={{ fontFamily: A_TOK.display, fontStyle: 'italic', color: A_TOK.accent, fontSize: 18 }}>{p.year}</div>
              <div>
                <div style={{ fontSize: 16, color: A_TOK.inkSoft, marginBottom: 4 }}>{p.authors}</div>
                <div style={{ fontFamily: A_TOK.display, fontSize: 22, lineHeight: 1.25, color: A_TOK.ink }}>
                  “{p.title}.”
                </div>
                <div style={{ fontStyle: 'italic', color: A_TOK.inkSoft, marginTop: 4, fontSize: 16 }}>
                  {p.venue}
                  {p.doi && <span style={{ marginLeft: 12, fontFamily: A_TOK.mono, fontStyle: 'normal', fontSize: 12, color: A_TOK.accent }}>doi: {p.doi}</span>}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <AFleuron />
      <AFooter />
    </div>
  );
}

// ─── Teaching ────────────────────────────────────────────────────
function ATeaching() {
  const D = window.SITE_DATA;
  return (
    <div>
      <section style={{ padding: '72px 72px 32px' }}>
        <div style={{ ...aStyles.smallCaps, marginBottom: 18, color: A_TOK.accent }}>Teaching</div>
        <h1 style={{ fontFamily: A_TOK.display, fontWeight: 400, fontSize: 56, lineHeight: 1.05, margin: 0, letterSpacing: -0.5 }}>
          A practice of <span style={{ fontStyle: 'italic' }}>attention</span>
        </h1>
      </section>

      <section style={{ padding: '0 72px 56px', display: 'grid', gridTemplateColumns: '180px 1fr', gap: 56 }}>
        <div style={{ ...aStyles.smallCaps, paddingTop: 6 }}>Approach</div>
        <p style={{ margin: 0, fontFamily: A_TOK.display, fontSize: 22, lineHeight: 1.5, fontStyle: 'italic', color: A_TOK.ink, maxWidth: 620 }}>
          {D.teaching.intro}
        </p>
      </section>

      <hr style={aStyles.rule} />

      <section style={{ padding: '56px 72px' }}>
        <ASectionLabel num="i">Currently</ASectionLabel>
        {D.teaching.current.map((c, i) => (
          <CourseBlock key={i} c={c} />
        ))}
      </section>

      <hr style={aStyles.rule} />

      <section style={{ padding: '56px 72px' }}>
        <ASectionLabel num="ii">Previously</ASectionLabel>
        {D.teaching.past.map((c, i) => (
          <CourseBlock key={i} c={c} />
        ))}
      </section>

      <AFleuron />
      <AFooter />
    </div>
  );
}

function CourseBlock({ c }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 32, padding: '20px 0', borderBottom: `1px solid ${A_TOK.rule}` }}>
      <div style={{ fontFamily: A_TOK.display, fontStyle: 'italic', color: A_TOK.accent, fontSize: 17 }}>{c.years}</div>
      <div>
        <div style={{ fontFamily: A_TOK.display, fontSize: 24, fontWeight: 500 }}>{c.role}</div>
        <div style={{ fontStyle: 'italic', color: A_TOK.inkSoft, marginTop: 2 }}>{c.where}</div>
        <ul style={{ margin: '12px 0 0', paddingLeft: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '4px 16px' }}>
          {c.courses.map((co, i) => (
            <li key={i} style={{ fontSize: 16, color: A_TOK.ink }}>
              <span style={{ color: A_TOK.accent, marginRight: 6 }}>·</span>{co}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── Talks ───────────────────────────────────────────────────────
function ATalks() {
  const D = window.SITE_DATA;
  // Group by year
  const byYear = {};
  D.talks.forEach(t => { (byYear[t.year] = byYear[t.year] || []).push(t); });
  const years = Object.keys(byYear).sort((a, b) => b.localeCompare(a));
  return (
    <div>
      <section style={{ padding: '72px 72px 40px' }}>
        <div style={{ ...aStyles.smallCaps, marginBottom: 18, color: A_TOK.accent }}>Talks</div>
        <h1 style={{ fontFamily: A_TOK.display, fontWeight: 400, fontSize: 56, lineHeight: 1.05, margin: 0, letterSpacing: -0.5 }}>
          Conferences & <span style={{ fontStyle: 'italic' }}>presentations</span>
        </h1>
      </section>

      <section style={{ padding: '0 72px 40px' }}>
        {years.map((y) => (
          <div key={y} style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: 32, padding: '24px 0', borderTop: `1px solid ${A_TOK.rule}` }}>
            <div style={{ fontFamily: A_TOK.display, fontSize: 32, fontStyle: 'italic', color: A_TOK.accent, lineHeight: 1 }}>{y}</div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {byYear[y].map((t, i) => (
                <li key={i} style={{ marginBottom: i === byYear[y].length - 1 ? 0 : 18 }}>
                  <div style={{ fontFamily: A_TOK.display, fontSize: 20, lineHeight: 1.3 }}>“{t.title}.”</div>
                  <div style={{ fontStyle: 'italic', color: A_TOK.inkSoft, fontSize: 15, marginTop: 2 }}>
                    {t.venue}{t.note && <span> · {t.note}</span>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <AFleuron />
      <AFooter />
    </div>
  );
}

// ─── CV ──────────────────────────────────────────────────────────
function ACv() {
  const D = window.SITE_DATA;
  return (
    <div>
      <section style={{ padding: '72px 72px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <div style={{ ...aStyles.smallCaps, marginBottom: 18, color: A_TOK.accent }}>Curriculum Vitae</div>
          <h1 style={{ fontFamily: A_TOK.display, fontWeight: 400, fontSize: 56, lineHeight: 1.05, margin: 0, letterSpacing: -0.5 }}>
            Curriculum <span style={{ fontStyle: 'italic' }}>vitae</span>
          </h1>
        </div>
        <a href="#" style={{ ...aStyles.smallCaps, color: A_TOK.accent, borderBottom: `1px solid ${A_TOK.accent}`, paddingBottom: 2, textDecoration: 'none' }}>
          Download PDF ↓
        </a>
      </section>

      <section style={{ padding: '32px 72px' }}>
        <ASectionLabel num="i">Education</ASectionLabel>
        {D.education.map((e, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 32, padding: '14px 0', borderBottom: `1px solid ${A_TOK.rule}` }}>
            <div style={{ fontFamily: A_TOK.display, fontStyle: 'italic', color: A_TOK.accent, fontSize: 16 }}>{e.years}</div>
            <div>
              <div style={{ fontFamily: A_TOK.display, fontSize: 20 }}>{e.degree}</div>
              <div style={{ fontStyle: 'italic', color: A_TOK.inkSoft, fontSize: 15 }}>{e.school}</div>
              {e.thesis && <div style={{ fontSize: 14, color: A_TOK.inkSoft, marginTop: 6 }}>{e.thesis}</div>}
            </div>
          </div>
        ))}
      </section>

      <section style={{ padding: '32px 72px' }}>
        <ASectionLabel num="ii">Fellowships, grants & awards</ASectionLabel>
        {D.awards.map((a, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 32, padding: '12px 0', borderBottom: `1px solid ${A_TOK.rule}` }}>
            <div style={{ fontFamily: A_TOK.display, fontStyle: 'italic', color: A_TOK.accent, fontSize: 16 }}>{a.year}</div>
            <div>
              <div style={{ fontSize: 17 }}>{a.title}</div>
              {a.note && <div style={{ fontStyle: 'italic', color: A_TOK.inkSoft, fontSize: 14 }}>{a.note}</div>}
            </div>
          </div>
        ))}
      </section>

      <section style={{ padding: '32px 72px' }}>
        <ASectionLabel num="iii">Service</ASectionLabel>
        {D.service.map((s, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 32, padding: '12px 0', borderBottom: `1px solid ${A_TOK.rule}` }}>
            <div style={{ fontFamily: A_TOK.display, fontStyle: 'italic', color: A_TOK.accent, fontSize: 16 }}>{s.years}</div>
            <div>
              <div style={{ fontSize: 17 }}>{s.role}</div>
              <div style={{ fontStyle: 'italic', color: A_TOK.inkSoft, fontSize: 14 }}>{s.org}</div>
            </div>
          </div>
        ))}
      </section>

      <section style={{ padding: '32px 72px 8px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
        <div>
          <ASectionLabel num="iv">Affiliations</ASectionLabel>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {D.affiliations.map((a, i) => (
              <li key={i} style={{ padding: '8px 0', borderBottom: `1px dotted ${A_TOK.rule}`, fontStyle: 'italic' }}>{a}</li>
            ))}
          </ul>
        </div>
        <div>
          <ASectionLabel num="v">Languages</ASectionLabel>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {D.languages.map((l, i) => (
              <li key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px dotted ${A_TOK.rule}` }}>
                <span>{l.lang}</span>
                <span style={{ fontStyle: 'italic', color: A_TOK.inkSoft }}>{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <AFleuron />
      <AFooter />
    </div>
  );
}

// ─── Contact ─────────────────────────────────────────────────────
function AContact() {
  const D = window.SITE_DATA;
  return (
    <div>
      <section style={{ padding: '88px 72px 56px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
        <div>
          <div style={{ ...aStyles.smallCaps, marginBottom: 18, color: A_TOK.accent }}>Contact</div>
          <h1 style={{ fontFamily: A_TOK.display, fontWeight: 400, fontSize: 64, lineHeight: 1.02, margin: '0 0 24px', letterSpacing: -0.5 }}>
            Write <span style={{ fontStyle: 'italic' }}>to me</span>
          </h1>
          <p style={{ fontFamily: A_TOK.display, fontSize: 22, lineHeight: 1.45, fontStyle: 'italic', color: A_TOK.inkSoft, maxWidth: 480 }}>
            I welcome correspondence on shared questions — about Murdoch, Ricœur, hospitality, or imagination — and from students considering graduate study in philosophy.
          </p>
        </div>
        <dl style={{ margin: 0, alignSelf: 'end' }}>
          <ContactRow label="Email" value={D.email} href={`mailto:${D.email}`} />
          <ContactRow label="Affiliation" value={"Department of Philosophy\nBoston College"} />
          <ContactRow label="Office" value={"Stokes Hall\n140 Commonwealth Ave.\nChestnut Hill, MA 02467"} />
          <ContactRow label="By appointment" value={"Office hours by request"} />
        </dl>
      </section>

      <AFleuron />
      <AFooter />
    </div>
  );
}

function ContactRow({ label, value, href }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 24, padding: '14px 0', borderBottom: `1px solid ${A_TOK.rule}`, alignItems: 'baseline' }}>
      <dt style={aStyles.smallCaps}>{label}</dt>
      <dd style={{ margin: 0, fontFamily: A_TOK.display, fontSize: 19, whiteSpace: 'pre-line' }}>
        {href ? <a href={href} style={{ color: A_TOK.accent, textDecoration: 'none', borderBottom: `1px solid ${A_TOK.accent}` }}>{value}</a> : value}
      </dd>
    </div>
  );
}

// ─── Site shell ──────────────────────────────────────────────────
function DirectionA({ initialPage = 'home' }) {
  const [page, setPage] = React.useState(initialPage);
  const scrollRef = React.useRef(null);
  React.useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = 0; }, [page]);

  const pages = {
    home: <AHome onNav={setPage} />,
    research: <AResearch />,
    publications: <APublications />,
    teaching: <ATeaching />,
    talks: <ATalks />,
    cv: <ACv />,
    contact: <AContact />,
  };
  return (
    <div ref={scrollRef} style={aStyles.page}>
      <ANav page={page} onNav={setPage} />
      {pages[page] || pages.home}
    </div>
  );
}

Object.assign(window, { DirectionA });
