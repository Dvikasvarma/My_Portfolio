import { GithubLogo, ArrowUpRight } from 'phosphor-react';

const projects = [
  {
    id: 1,
    emoji: '🏢',
    title: 'HR Genie — AI-Powered HRMS',
    description:
      'A modern, full-featured Human Resource Management System with AI-driven chatbot assistance powered by Google Gemini 1.5 Flash. Features role-based login for Employees & HR Managers, leave & attendance management, finance module, campus module, policy access, and a premium glassmorphic UI. Backend powered by Microsoft Power Automate cloud flows as REST endpoints.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Google Gemini 1.5', 'Power Automate', 'Vercel', 'Node.js'],
    color: 'rgba(139,92,246,0.15)',
    border: 'rgba(139,92,246,0.4)',
    glow: '0 0 50px rgba(139,92,246,0.18)',
    tagColor: '#c4b5fd',
    tagBg: 'rgba(139,92,246,0.1)',
    tagBorder: 'rgba(139,92,246,0.25)',
    iconGradient: 'linear-gradient(135deg, #7c3aed, #6366f1)',
    githubUrl: 'https://github.com/Dvikasvarma/HR_GENIE-AI',
  },
  {
    id: 2,
    emoji: '📊',
    title: 'Opportunity Nexus — Data Analytics',
    description:
      'A comprehensive data analytics platform designed to identify, track, and visualize opportunities across datasets. Built to process and surface insights from complex data sources with interactive dashboards, trend analysis, and smart filtering. Empowers data-driven decision making with clean visualizations and an intuitive user interface.',
    tech: ['Python', 'Data Analysis', 'SQL', 'Pandas', 'Visualization', 'Dashboard'],
    color: 'rgba(20,184,166,0.12)',
    border: 'rgba(20,184,166,0.4)',
    glow: '0 0 50px rgba(20,184,166,0.18)',
    tagColor: '#5eead4',
    tagBg: 'rgba(20,184,166,0.1)',
    tagBorder: 'rgba(20,184,166,0.25)',
    iconGradient: 'linear-gradient(135deg, #0d9488, #06b6d4)',
    githubUrl: 'https://github.com/Dvikasvarma/Opportunity-Nexus',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      style={{
        padding: '5rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorations */}
      <div style={{ position: 'absolute', top: '20%', left: '-10%', width: 400, height: 400, background: 'rgba(139,92,246,0.05)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '20%', right: '-10%', width: 400, height: 400, background: 'rgba(20,184,166,0.05)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── Heading ── */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 300,
            color: 'hsl(210 40% 98%)',
            margin: '0 0 0.75rem 0',
          }}>
            My{' '}
            <span style={{
              background: 'linear-gradient(135deg, hsl(260 100% 75%), hsl(300 100% 80%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Projects
            </span>
          </h2>
          <div style={{
            width: 80, height: 4, borderRadius: 9999,
            background: 'linear-gradient(135deg, hsl(260 100% 65%), hsl(300 100% 70%))',
            margin: '0 auto',
          }} />
        </div>

        {/* ── Project Cards ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {projects.map((p) => (
            <div
              key={p.id}
              style={{
                background: p.color,
                border: `1px solid ${p.border}`,
                borderRadius: '1.25rem',
                padding: '2rem',
                backdropFilter: 'blur(16px)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-5px)';
                el.style.boxShadow = p.glow;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
              }}
            >
              {/* Top row: icon + title + github button */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                {/* Icon */}
                <div style={{
                  width: 54, height: 54, borderRadius: '0.875rem',
                  background: p.iconGradient,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.6rem', flexShrink: 0,
                  boxShadow: p.glow,
                }}>
                  {p.emoji}
                </div>

                {/* Title + GitHub */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{
                    color: 'white', fontWeight: 700,
                    fontSize: '1.15rem', margin: '0 0 0.5rem 0',
                    lineHeight: 1.3,
                  }}>
                    {p.title}
                  </h3>
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 5,
                      fontSize: '0.78rem', textDecoration: 'none',
                      color: p.tagColor,
                      background: p.tagBg,
                      border: `1px solid ${p.tagBorder}`,
                      padding: '3px 10px', borderRadius: 20,
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.8'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                  >
                    <GithubLogo size={13} weight="fill" />
                    View on GitHub
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p style={{
                color: 'hsl(215 20% 70%)',
                fontSize: '0.9rem',
                lineHeight: 1.75,
                margin: '0 0 1.25rem 0',
              }}>
                {p.description}
              </p>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {p.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: '3px 11px',
                      borderRadius: 20,
                      fontSize: '0.73rem',
                      fontWeight: 500,
                      color: p.tagColor,
                      background: p.tagBg,
                      border: `1px solid ${p.tagBorder}`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;