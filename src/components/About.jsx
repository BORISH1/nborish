import React from "react";
import { GraduationCap, Briefcase, FlaskConical, Code2, FolderKanban, Clock, BookOpen, Award, Presentation, CheckCircle2 } from "lucide-react";
import { Frame, Chip, SectionHead } from "./Primitives";
import { useReveal } from "../hooks/useReveal";

export default function About({ profile }) {
  const [statsRef, statsVisible] = useReveal();
  const [gridRef, gridVisible] = useReveal();
  const [researchRef, researchVisible] = useReveal();

  const stats = [
    { icon: <FolderKanban size={18} />, value: profile.projects.length, label: "Projects" },
    { icon: <BookOpen size={18} />, value: profile.research ? profile.research.length : 2, label: "Publications" },
    { icon: <Briefcase size={18} />, value: profile.experience.length, label: "Internships" },
    { icon: <Code2 size={18} />, value: Object.values(profile.skills).flat().length, label: "Skills" },
    { icon: <Clock size={18} />, value: `${profile.education.expected}`, label: "Graduating" },
  ];

  const researchList = Array.isArray(profile.research)
    ? profile.research
    : profile.research ? [profile.research] : [];

  return (
    <section id="about" className="shell">
      <SectionHead index="01" title="About" sub="Summary, education, and peer-reviewed research." />

      {/* Stats bar */}
      <div ref={statsRef} className={`about-stats reveal${statsVisible ? " revealed" : ""}`}>
        {stats.map((s, i) => (
          <div className="about-stat" key={i}>
            <span className="about-stat-icon">{s.icon}</span>
            <span className="about-stat-value">{s.value}</span>
            <span className="about-stat-label mono">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Top Grid: Bio Summary (Left) & Education (Right) */}
      <div ref={gridRef} className={`about-grid reveal${gridVisible ? " revealed" : ""}`}>
        <div className="about-summary">
          <p className="about-bio-text">{profile.summary}</p>
          <div className="about-summary-focus">
            <span className="focus-label mono">CORE FOCUS:</span>
            <div className="focus-tags">
              <span className="focus-pill">Deep Learning</span>
              <span className="focus-pill">Computer Vision</span>
              <span className="focus-pill">Medical AI</span>
              <span className="focus-pill">Knowledge Distillation</span>
            </div>
          </div>
        </div>

        <Frame label="education">
          <div className="info-row">
            <GraduationCap size={16} aria-hidden="true" />
            <div>
              <span className="lbl">DEGREE</span>
              {profile.education.degree} — {profile.education.specialization}
            </div>
          </div>
          <div className="info-row">
            <Briefcase size={16} aria-hidden="true" />
            <div>
              <span className="lbl">INSTITUTION</span>
              {profile.education.institution}, {profile.education.location}
            </div>
          </div>
          <div className="info-row">
            <FlaskConical size={16} aria-hidden="true" />
            <div>
              <span className="lbl">EXPECTED</span>
              {profile.education.expected}
            </div>
          </div>
          <div className="coursework">
            {profile.education.coursework.map((c) => (
              <Chip key={c}>{c}</Chip>
            ))}
          </div>
        </Frame>
      </div>

      {/* Dedicated Research & Publications Showcase */}
      <div id="research" ref={researchRef} className={`about-research reveal${researchVisible ? " revealed" : ""}`}>
        <div className="research-section-header">
          <div className="research-header-left">
            <div className="research-header-icon-box">
              <BookOpen size={20} aria-hidden="true" />
            </div>
            <div>
              <div className="research-eyebrow mono">PEER-REVIEWED &amp; PREPRINTS</div>
              <h3 className="research-main-title">Research &amp; Publications</h3>
            </div>
          </div>
          <div className="research-header-badge mono">
            <FlaskConical size={14} aria-hidden="true" />
            <span>{researchList.length} Manuscripts · First Author</span>
          </div>
        </div>

        <div className="research-grid">
          {researchList.map((paper, index) => {
            const isAccepted = paper.status && paper.status.toLowerCase().includes("accepted");
            return (
              <Frame
                key={index}
                className="research-card"
                label={isAccepted ? "ACCEPTED" : "PEER REVIEW"}
              >
                {/* Meta header */}
                <div className="research-card-meta">
                  <span className={`status-badge ${isAccepted ? "status--accepted" : "status--review"}`}>
                    <span className="status-dot" aria-hidden="true" />
                    {paper.status}
                  </span>
                  {paper.role && (
                    <span className="role-badge mono">
                      <Award size={12} aria-hidden="true" />
                      {paper.role}
                    </span>
                  )}
                  {paper.year && <span className="year-badge mono">{paper.year}</span>}
                </div>

                {paper.area && (
                  <div className="research-area mono">
                    {paper.area}
                  </div>
                )}

                <h4 className="research-card-title">{paper.title}</h4>

                {paper.conference && (
                  <div className="research-venue">
                    <Presentation size={15} className="venue-icon" aria-hidden="true" />
                    <span className="venue-text">
                      <strong>Conference:</strong> {paper.conference}
                    </span>
                  </div>
                )}

                {!paper.conference && paper.venue && (
                  <div className="research-venue">
                    <Presentation size={15} className="venue-icon" aria-hidden="true" />
                    <span className="venue-text">
                      <strong>Target Venue:</strong> {paper.venue}
                    </span>
                  </div>
                )}

                <p className="research-card-desc">{paper.description}</p>

                {paper.highlights && paper.highlights.length > 0 && (
                  <ul className="research-highlights">
                    {paper.highlights.map((h, i) => (
                      <li key={i}>
                        <CheckCircle2 size={13} className="highlight-icon" aria-hidden="true" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {paper.tags && paper.tags.length > 0 && (
                  <div className="research-tags">
                    {paper.tags.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                )}
              </Frame>
            );
          })}
        </div>
      </div>
    </section>
  );
}
