import { useState } from 'react';
import { FilePdf, Image, X, ArrowSquareOut, Medal } from 'phosphor-react';

const skills = [
  {
    name: 'AWS',
    emoji: '☁️',
    level: 82,
    color: 'from-orange-500 to-yellow-400',
    border: 'rgba(249,115,22,0.5)',
    glow: '0 0 30px rgba(249,115,22,0.3)',
    files: [
      { name: 'AWS Certified AI Practitioner', path: '/skills-files/AWS/AWS Certified AI Practitioner (1).pdf', type: 'pdf' },
      { name: 'AWS Certificate', path: '/skills-files/AWS/AWS.pdf', type: 'pdf' },
      { name: 'AWS AI Practitioner Badge', path: '/skills-files/AWS/aws-ai-practitioner-badge.png', type: 'image' },
    ],
  },
  {
    name: 'Python',
    emoji: '🐍',
    level: 88,
    color: 'from-blue-500 to-cyan-400',
    border: 'rgba(59,130,246,0.5)',
    glow: '0 0 30px rgba(59,130,246,0.3)',
    files: [
      { name: 'Python Essentials 1 – Cisco', path: '/skills-files/py-cisco/PythonEssentials1Update20250621-26-36m6dn.pdf', type: 'pdf' },
      { name: 'Python Essentials 1 Badge', path: '/skills-files/py-cisco/python-essentials-1.1.png', type: 'image' },
      { name: 'Python Essentials Badge (Cisco)', path: '/skills-files/Python_Essentials_1_Badge20241025-7-y8hu2k.pdf', type: 'pdf' },
      { name: 'RedHat Python Certificate', path: '/skills-files/redhat-python.pdf', type: 'pdf' },
    ],
  },
  {
    name: 'SQL',
    emoji: '🗄️',
    level: 85,
    color: 'from-green-500 to-emerald-400',
    border: 'rgba(34,197,94,0.5)',
    glow: '0 0 30px rgba(34,197,94,0.3)',
    files: [
      { name: 'Basic SQL Certificate', path: '/skills-files/Baic SQL.pdf', type: 'pdf' },
      { name: 'SQL Intermediate Certificate', path: '/skills-files/sql_intermediate certificate (1).pdf', type: 'pdf' },
    ],
  },
  {
    name: 'Java',
    emoji: '☕',
    level: 80,
    color: 'from-red-500 to-orange-400',
    border: 'rgba(239,68,68,0.5)',
    glow: '0 0 30px rgba(239,68,68,0.3)',
    files: [
      { name: 'Java 8 Oracle Badge', path: '/skills-files/JAVA8OJA.jpg', type: 'image' },
      { name: 'Java Main Certificate', path: '/skills-files/java_Main.pdf', type: 'pdf' },
      { name: 'Java Oracle Certificate', path: '/skills-files/java_oracle.pdf', type: 'pdf' },
    ],
  },
  {
    name: 'C Programming',
    emoji: '⚙️',
    level: 78,
    color: 'from-purple-500 to-violet-400',
    border: 'rgba(168,85,247,0.5)',
    glow: '0 0 30px rgba(168,85,247,0.3)',
    files: [
      { name: 'C Programming Essentials – Cisco', path: '/skills-files/Partner-_CLA_-_Programming_Essentials_in_C_certificate_23p31a4216-acet-ac-in_e63c3334-fe0d-4858-80c8-f002b3702909.pdf', type: 'pdf' },
    ],
  },
  {
    name: 'Snowflake',
    emoji: '❄️',
    level: 75,
    color: 'from-sky-400 to-blue-300',
    border: 'rgba(56,189,248,0.5)',
    glow: '0 0 30px rgba(56,189,248,0.3)',
    files: [
      { name: 'SnowPro Associate Certification', path: '/skills-files/SnowPro_Associate_Certification_Questions.pdf', type: 'pdf' },
      { name: 'Snowflake Badge', path: '/skills-files/Snowflake badge.png', type: 'image' },
    ],
  },
  {
    name: 'Google Gen AI',
    emoji: '🤖',
    level: 80,
    color: 'from-teal-500 to-green-400',
    border: 'rgba(20,184,166,0.5)',
    glow: '0 0 30px rgba(20,184,166,0.3)',
    files: [
      { name: 'Google Generative AI Certificate', path: '/skills-files/Google_Gen_Ai.pdf', type: 'pdf' },
    ],
  },
  {
    name: 'Microsoft',
    emoji: '🪟',
    level: 77,
    color: 'from-indigo-500 to-purple-400',
    border: 'rgba(99,102,241,0.5)',
    glow: '0 0 30px rgba(99,102,241,0.3)',
    files: [
      { name: 'PL-400 Power Platform Developer', path: '/skills-files/PL-400.pdf', type: 'pdf' },
      { name: 'PL-600 Power Platform Solution Architect', path: '/skills-files/PL-600.pdf', type: 'pdf' },
    ],
  },
];

// ── Modal ──────────────────────────────────────────────────────────────────────
const SkillModal = ({
  skill,
  onClose,
}: {
  skill: (typeof skills)[0];
  onClose: () => void;
}) => {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem',
        background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(12px)',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: '440px', borderRadius: '1.25rem', padding: '1.5rem',
          background: 'rgba(8,8,22,0.99)',
          border: `1.5px solid ${skill.border}`,
          boxShadow: `${skill.glow}, 0 30px 60px rgba(0,0,0,0.8)`,
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: 48, height: 48, borderRadius: '0.75rem', fontSize: 26,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(255,255,255,0.08)', border: `1px solid ${skill.border}`,
            }}>
              {skill.emoji}
            </div>
            <div>
              <p style={{ color: 'white', fontWeight: 700, fontSize: '1.1rem', margin: 0 }}>{skill.name}</p>
              <p style={{ color: '#a78bfa', fontSize: '0.72rem', margin: 0, marginTop: 2 }}>Click a file to open it</p>
            </div>
          </div>
          <button onClick={onClose} style={{
            background: 'rgba(255,255,255,0.08)', border: 'none', borderRadius: '50%',
            width: 32, height: 32, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#9ca3af',
          }}>
            <X size={16} color="white" />
          </button>
        </div>

        {/* Files */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: 260, overflowY: 'auto' }}>
          {skill.files.map((file) => (
            <a
              key={file.path}
              href={file.path}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem',
                borderRadius: '0.75rem', textDecoration: 'none',
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(139,92,246,0.15)';
                el.style.borderColor = skill.border;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(255,255,255,0.05)';
                el.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              {file.type === 'image'
                ? <Image size={18} color="#c084fc" />
                : <FilePdf size={18} color="#f87171" />
              }
              <span style={{ flex: 1, color: '#d1d5db', fontSize: '0.82rem' }}>{file.name}</span>
              <ArrowSquareOut size={14} color="#6b7280" />
            </a>
          ))}
        </div>

        <p style={{ textAlign: 'center', fontSize: '0.72rem', color: '#4b5563', marginTop: '1rem', marginBottom: 0 }}>
          Press Esc or click outside to close
        </p>
      </div>
    </div>
  );
};

// ── Skills Section ─────────────────────────────────────────────────────────────
const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<(typeof skills)[0] | null>(null);

  return (
    <>
      <section id="skills" style={{ padding: '5rem 1.5rem', position: 'relative' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 300, color: 'hsl(210 40% 98%)', marginBottom: '0.75rem' }}>
            My{' '}
            <span style={{
              background: 'linear-gradient(135deg, hsl(260 100% 75%), hsl(300 100% 80%))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Skills
            </span>
          </h2>
          <div style={{
            width: 80, height: 4, borderRadius: 9999, margin: '0 auto 1rem',
            background: 'linear-gradient(135deg, hsl(260 100% 65%), hsl(300 100% 70%))',
          }} />
          <p style={{ color: 'hsl(215 20% 65%)', fontSize: '0.875rem' }}>
            Click any card to view certificates &amp; files
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '1.25rem',
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          {skills.map((skill) => (
            <button
              key={skill.name}
              onClick={() => setActiveSkill(skill)}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '1rem',
                padding: '1.5rem 1rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.6rem',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = skill.glow;
                el.style.borderColor = skill.border;
                el.style.transform = 'translateY(-4px) scale(1.03)';
                el.style.background = 'rgba(255,255,255,0.09)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = '';
                el.style.borderColor = 'rgba(255,255,255,0.12)';
                el.style.transform = '';
                el.style.background = 'rgba(255,255,255,0.05)';
              }}
            >
              {/* Emoji */}
              <span style={{ fontSize: '2.5rem', lineHeight: 1 }}>{skill.emoji}</span>

              {/* Name */}
              <span style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem', textAlign: 'center' }}>
                {skill.name}
              </span>

              {/* Progress bar */}
              <div style={{ width: '100%', background: 'rgba(255,255,255,0.1)', borderRadius: 9999, height: 6 }}>
                <div style={{
                  width: `${skill.level}%`, height: 6, borderRadius: 9999,
                  background: `linear-gradient(to right, ${skill.color.replace('from-', '').replace('to-', '')})`,
                  backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                }} className={`bg-gradient-to-r ${skill.color}`} />
              </div>

              {/* Level */}
              <span style={{
                fontSize: '0.8rem', fontWeight: 700,
                background: 'linear-gradient(135deg, hsl(260 100% 75%), hsl(300 100% 80%))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                {skill.level}%
              </span>

              {/* Cert count */}
              <span style={{ color: 'hsl(215 20% 55%)', fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: 4 }}>
                <Medal size={11} color="hsl(215 20% 55%)" />
                {skill.files.length} cert{skill.files.length > 1 ? 's' : ''}
              </span>
            </button>
          ))}
        </div>
      </section>

      {activeSkill && (
        <SkillModal skill={activeSkill} onClose={() => setActiveSkill(null)} />
      )}
    </>
  );
};

export default Skills;
