import React from "react";
import { Mail, Globe, Download } from "lucide-react";
import { FaLinkedin as Linkedin, FaGithub as Github, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiTailwindcss, SiMongodb } from "react-icons/si";
import { GiButterfly } from "react-icons/gi";
import { Chip } from "./Primitives";
import { useTypingEffect } from "../hooks/useTypingEffect";

export default function Hero({ profile }) {
  const typedRole = useTypingEffect(profile.roles, {
    typeSpeed: 70,
    deleteSpeed: 45,
    pauseAfterType: 2200,
    pauseAfterDelete: 500,
  });

  return (
    <header className="shell hero" id="hero">
      {/* Decorative floating elements */}
      <div className="hero-decorations" aria-hidden="true">
        <span className="hero-shape hero-shape--1" />
        <span className="hero-shape hero-shape--2" />
        <span className="hero-shape hero-shape--3" />
      </div>

      <div className="hero-layout" style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div className="hero-content" style={{ flex: '1 1 500px', position: 'relative', zIndex: 1 }}>
          <div className="hero-status" aria-label="Status: Open to opportunities">
            <span className="pulse" aria-hidden="true" />
            STATUS: OPEN TO OPPORTUNITIES
          </div>

          <h1>
            {profile.name}
            <br />
            <span className="accent hero-typed">
              {"// "}{typedRole}<span className="hero-cursor" aria-hidden="true">|</span>
            </span>
          </h1>

          <div className="hero-roles" role="list" aria-label="Roles">
            {profile.roles.map((r) => (
              <Chip key={r} role="listitem">{r}</Chip>
            ))}
          </div>

          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-cta">
            <a className="btn primary" href={`mailto:${profile.contact.email}`} aria-label="Send email">
              <Mail size={15} aria-hidden="true" /> Email me
            </a>
            <a className="btn" href={profile.contact.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <Linkedin size={15} aria-hidden="true" /> LinkedIn
            </a>
            <a className="btn" href={profile.contact.websiteUrl} target="_blank" rel="noreferrer" aria-label="Personal website">
              <Globe size={15} aria-hidden="true" /> Website
            </a>
            <a
              className="btn btn-outline"
              href="https://drive.google.com/file/d/1woI_ONg6TbRERBvM-Ie5rU7-TAbGH4KW/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              aria-label="Download resume"
            >
              <Download size={15} aria-hidden="true" /> Resume
            </a>
          </div>
        </div>
        
        <div className="hero-image" style={{ flex: '1 1 500px', display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
          <div className="hero-profile-anim" style={{ position: 'relative', width: '100%', maxWidth: '500px' }}>
            <div className="hero-profile-glow" aria-hidden="true" />
            <img 
              src="/profile.png" 
              alt={`${profile.name} Profile`} 
              style={{ 
                width: "100%", 
                height: "auto",
                objectFit: "cover",
                position: "relative",
                zIndex: 2
              }} 
            />
            {/* Floating Tech Icons */}
            <div className="tech-icon-float tech-icon-float--1" aria-hidden="true">
              <FaReact />
            </div>
            <div className="tech-icon-float tech-icon-float--2" aria-hidden="true">
              <FaNodeJs />
            </div>
            <div className="tech-icon-float tech-icon-float--3" aria-hidden="true">
              <SiJavascript />
            </div>
            <div className="tech-icon-float tech-icon-float--4" aria-hidden="true">
              <SiTypescript />
            </div>
            <div className="tech-icon-float tech-icon-float--5" aria-hidden="true">
              <SiTailwindcss />
            </div>
            <div className="tech-icon-float tech-icon-float--6" aria-hidden="true">
              <SiMongodb />
            </div>
            
            {/* Flying Butterfly */}
            <div className="butterfly-anim" aria-hidden="true">
              <GiButterfly />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <span className="mono">scroll_down</span>
        <span className="hero-scroll-arrow" />
      </div>
    </header>
  );
}
