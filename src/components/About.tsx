import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        x: -80,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const stats = [
    { value: 'Fresher', label: 'Status' },
    { value: '2', label: 'Projects Built' },
    { value: '300+', label: 'Problems Solved' },
    { value: '7.7', label: 'CGPA' },
  ];

  const highlights = [
    { icon: '🎓', text: 'B.Tech CSE (AI/ML) — Aditya College of Engineering & Technology (2023–2027)' },
    { icon: '💼', text: 'Data Specialist Intern — Technical Hub Pvt. Ltd. (May–June 2025)' },
    { icon: '🏆', text: 'HackerRank 5★ SQL · CodeChef 300+ Problems · LeetCode 100+ Problems' },
    { icon: '☁️', text: 'AWS AI Practitioner · SnowPro Associate · Cisco Python & C Certified' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ padding: '5rem 1.5rem', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background blobs */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: 384, height: 384, background: 'hsl(260 100% 65% / 0.05)', borderRadius: '50%', filter: 'blur(80px)', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: 384, height: 384, background: 'hsl(300 100% 70% / 0.05)', borderRadius: '50%', filter: 'blur(80px)', transform: 'translate(50%,50%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>

          {/* ── Profile Image ── */}
          <div ref={imageRef} style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: 300, height: 300 }}>
              {/* Glow ring */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, hsl(260 100% 65%), hsl(300 100% 70%))', borderRadius: '50%', filter: 'blur(24px)', opacity: 0.3 }} />
              {/* Image */}
              <div style={{
                position: 'relative', width: '100%', height: '100%',
                borderRadius: '50%', padding: 6,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(10px)',
              }}>
                <img
                  src="/Images/profileLogo.jpg"
                  alt="Vikas Varma"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                />
              </div>
              {/* Floating dots */}
              <div style={{ position: 'absolute', top: -12, right: -12, width: 28, height: 28, background: 'hsl(260 100% 65% / 0.4)', borderRadius: '50%', animation: 'float 4s ease-in-out infinite' }} />
              <div style={{ position: 'absolute', bottom: -16, left: -16, width: 40, height: 40, background: 'hsl(300 100% 70% / 0.25)', borderRadius: '50%', animation: 'float 5s ease-in-out infinite 1s' }} />
            </div>
          </div>

          {/* ── Content ── */}
          <div>
            {/* Heading */}
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 300, color: 'hsl(210 40% 98%)', margin: '0 0 0.5rem 0' }}>
              About <span style={{ background: 'linear-gradient(135deg, hsl(260 100% 75%), hsl(300 100% 80%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Me</span>
            </h2>
            <div style={{ width: 72, height: 3, borderRadius: 9999, background: 'linear-gradient(135deg, hsl(260 100% 65%), hsl(300 100% 70%))', marginBottom: '1.5rem' }} />

            {/* Bio */}
            <p style={{ color: 'hsl(215 20% 68%)', fontSize: '0.97rem', lineHeight: 1.8, marginBottom: '1rem' }}>
              I'm a <strong style={{ color: 'hsl(210 40% 92%)' }}>Computer Science Engineering (AI/ML)</strong> student at Aditya College of Engineering & Technology, graduating in 2027. As a fresher, I bring strong foundations in Data Structures, Algorithms, and cloud technologies — with <strong style={{ color: 'hsl(210 40% 92%)' }}>300+ coding problems solved</strong> across platforms.
            </p>
            <p style={{ color: 'hsl(215 20% 68%)', fontSize: '0.97rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              I gained hands-on industry experience as a <strong style={{ color: 'hsl(210 40% 92%)' }}>Data Specialist Intern at Technical Hub Pvt. Ltd.</strong>, where I worked with Excel, Power Automate, and SharePoint to streamline workflows. I'm passionate about AI/ML and building scalable, cloud-powered applications.
            </p>

            {/* Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
              {highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: 2 }}>{h.icon}</span>
                  <span style={{ color: 'hsl(215 20% 72%)', fontSize: '0.85rem', lineHeight: 1.6 }}>{h.text}</span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {stats.map((s) => (
                <div key={s.label} style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '0.6rem',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(8px)',
                  textAlign: 'center',
                }}>
                  <div style={{ fontWeight: 700, fontSize: '1rem', background: 'linear-gradient(135deg, hsl(260 100% 75%), hsl(300 100% 80%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.value}</div>
                  <div style={{ color: 'hsl(215 20% 60%)', fontSize: '0.72rem', marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;