
import './App.css'
import Navbar from './components/Navbar'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}

      <section className="hero" id="home">

        <div className="hero-glow"></div>
        <div className="hero-grid"></div>

        <div className="hero-container">

          <div className="hero-content">

            <div className="availability">
              <span className="availability-dot"></span>
              Available for opportunities
            </div>

            <p className="hero-eyebrow">
              SOFTWARE DEVELOPMENT & WORKFLOW AUTOMATION
            </p>

            <h1>
              Hi, I'm <span>Hamza</span>.
              <br />
              I build things
              <br />
              <span className="gradient-text">that matter.</span>
            </h1>

            <p className="hero-description">
              Software Engineering graduate focused on building practical
              applications, automating repetitive workflows, and developing
              technology solutions that improve operational efficiency.
            </p>

            <div className="hero-buttons">

              <a href="#projects" className="primary-button">
                View My Work
                <ArrowUpRight size={18} />
              </a>

              <a
                href="mailto:Hamzakhattak9911@gmail.com"
                className="secondary-button"
              >
                Contact Me
              </a>

            </div>

            <div className="hero-socials">

              <a
                href="https://github.com/hamza987765"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="social-text">GH</span>
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/hamza-rahman-5733a82b0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="social-text">in</span>
                LinkedIn
              </a>

            </div>

          </div>

          <div className="hero-visual">

            <div className="visual-circle circle-one"></div>
            <div className="visual-circle circle-two"></div>

            <div className="hero-card">

              <div className="card-top">
                <span className="card-status">
                  <span className="availability-dot"></span>
                  Developer Profile
                </span>

                <span className="card-dots">•••</span>
              </div>

              <img
                src="/profile.jpg"
                alt="Profile"
                className="profile-photo"
              />

              <h2>Hamza Khattak</h2>

              <p className="profile-role">
                Software Developer | Project Coordinator
              </p>

              <div className="profile-divider"></div>

              <div className="profile-details">

                <div>
                  <span>Focus</span>
                  <strong>Software & Workflow Automation</strong>
                </div>

                <div>
                  <span>Specialization</span>
                  <strong>Python & Web Development</strong>
                </div>

                <div>
                  <span>Industry</span>
                  <strong>Software / Telecommunications</strong>
                </div>

              </div>

              <div className="card-footer">
                <span>PORTFOLIO · 2026</span>
                <ArrowUpRight size={18} />
              </div>

            </div>

            <div className="floating-tech tech-one">
              <span>⚡</span>
              Python
            </div>

            <div className="floating-tech tech-two">
              <span>◈</span>
              React
            </div>

            <div className="floating-tech tech-three">
              <span>⌘</span>
              FastAPI
            </div>

          </div>

        </div>

        <a href="#about" className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={16} />
        </a>

      </section>


      {/* ================= ABOUT SECTION ================= */}

      <section className="about-section" id="about">

        <div className="about-container">

          <div className="section-heading">
            <span className="section-label">GET TO KNOW ME</span>
            <h2>About <span>Me.</span></h2>
            <p>A little about my background and what drives me.</p>
          </div>

          <div className="about-grid">

            <div className="about-text">

              <h3>
                Turning ideas into
                <span> practical technology solutions.</span>
              </h3>

              <p>
                I'm Hamza Khattak, a Software Engineering graduate
                with an interest in application development, workflow
                automation, and solving practical problems through code.
              </p>

              <p>
                I currently work as a Project Coordinator at Nokia Networks,
                where I coordinate telecom field operations and track
                site activities performed by field engineers.
              </p>

              <p>
                Alongside my professional responsibilities, I develop
                dashboards, applications, and websites to simplify
                repetitive tasks, reduce manual effort, and improve
                operational efficiency through automation.
              </p>

              <p>
                My development work involves Python, JavaScript, React,
                Flask, FastAPI, SQL, and SQLite. I also have basic
                experience with UI/UX design using Figma.
              </p>

              <p>
                I'm currently expanding my knowledge in Power BI,
                cybersecurity, and modern software development practices.
              </p>

              <a href="#contact" className="about-button">
                Let's Connect <span>↗</span>
              </a>

            </div>

            <div className="about-cards">

              <div className="about-info-card">
                <span className="info-icon">🎓</span>
                <div>
                  <span className="info-label">EDUCATION</span>
                  <h4>BS Software Engineering</h4>
                  <p>Graduate · 2024</p>
                </div>
              </div>

              <div className="about-info-card">
                <span className="info-icon">💼</span>
                <div>
                  <span className="info-label">PROFESSIONAL EXPERIENCE</span>
                  <h4>Project Coordinator</h4>
                  <p>Nokia Networks</p>
                </div>
              </div>

              <div className="about-info-card">
                <span className="info-icon">💻</span>
                <div>
                  <span className="info-label">TECHNICAL FOCUS</span>
                  <h4>Software & Automation</h4>
                  <p>Python · React · APIs · Dashboards</p>
                </div>
              </div>

              <div className="about-info-card">
                <span className="info-icon">🎯</span>
                <div>
                  <span className="info-label">CURRENT LEARNING</span>
                  <h4>Cybersecurity & Data Analytics</h4>
                  <p>Cybersecurity · Power BI</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ================= PROJECTS SECTION ================= */}

      <section className="projects-section" id="projects">

        <div className="projects-container">

          <div className="section-heading">
            <span className="section-label">MY WORK</span>
            <h2>Featured <span>Projects.</span></h2>
            <p>
              A selection of projects I've worked on using modern technologies.
            </p>
          </div>

          <div className="projects-grid">

            {/* PROJECT 1 */}

            <article className="project-card">

              <div className="project-preview noc-preview">

                <div className="preview-topbar">
                  <span>● LIVE SYSTEM</span>
                  <span>NETWORK OPERATIONS CENTER</span>
                </div>

                <div className="preview-content">

                  <div className="preview-stat">
                    <span>TOTAL ACTIVITIES</span>
                    <strong>24</strong>
                  </div>

                  <div className="preview-stat">
                    <span>COMPLETED</span>
                    <strong>18</strong>
                  </div>

                  <div className="preview-chart">NOC</div>

                </div>

              </div>

              <div className="project-info">

                <span className="project-category">
                  WEB APPLICATION · REAL-TIME
                </span>

                <h3>Enterprise NOC Dashboard</h3>

                <p>
                  A real-time activity monitoring dashboard designed
                  to track network deployment activities, progress,
                  and operational status.
                </p>

                <div className="project-tech">
                  <span>Python</span>
                  <span>FastAPI</span>
                  <span>WebSockets</span>
                  <span>SQLite</span>
                </div>

              </div>

            </article>


            {/* PROJECT 2 */}

            <article className="project-card">

              <div className="project-preview audio-preview">

                <div className="audio-icon">♫</div>

                <div className="audio-wave">
                  {Array.from({ length: 35 }, (_, i) => (
                    <span
                      key={i}
                      style={{
                        height: `${20 + ((i * 17) % 65)}%`
                      }}
                    />
                  ))}
                </div>

                <span className="audio-caption">
                  AI AUDIO PROCESSING
                </span>

              </div>

              <div className="project-info">

                <span className="project-category">
                  PYTHON · AI · MEDIA PROCESSING
                </span>

                <h3>AI Audio Cleaner</h3>

                <p>
                  A Python application focused on extracting audio
                  from video, processing sound, and producing a
                  cleaned audio-video output.
                </p>

                <div className="project-tech">
                  <span>Python</span>
                  <span>FastAPI</span>
                  <span>Librosa</span>
                  <span>FFmpeg</span>
                </div>
              </div>

            </article>


            {/* PROJECT 3 */}

            <article className="project-card">

              <div className="project-preview interior-preview">

                <div className="interior-window">
                  <span>PAK-QATAR</span>
                  <strong>INTERIORS</strong>
                  <small>DESIGN YOUR SPACE</small>
                </div>

              </div>

              <div className="project-info">

                <span className="project-category">
                  WEB DEVELOPMENT · SHOWCASE
                </span>

                <h3>PAK-QATAR INTERIORS</h3>

                <p>
                  A furniture and interior design showcase website
                  with an administration area for managing displayed content.
                </p>

                <div className="project-tech">
                  <span>Python</span>
                  <span>Flask</span>
                  <span>SQLite</span>
                  <span>HTML</span>
                  <span>CSS</span>
                </div>
              </div>

            </article>


            {/* PROJECT 4 */}

            <article className="project-card">

              <div className="project-preview carpro-preview">

                <div className="carpro-icon">🚗</div>

                <div className="carpro-content">
                  <span>ROADSIDE ASSISTANCE</span>
                  <strong>CarProSolution</strong>
                  <small>MECHANIC FINDER & SERVICE BOOKING</small>
                </div>

                <div className="carpro-pin">📍</div>

              </div>

              <div className="project-info">

                <span className="project-category">
                  MOBILE APPLICATION · LOCATION-BASED
                </span>

                <h3>CarProSolution</h3>

                <p>
                  A mobile application that helps drivers find nearby
                  mechanics and vehicle repair workshops during breakdowns.
                  Users can locate service providers through Google Maps,
                  contact mechanics directly, and schedule repair services.
                </p>

                <div className="project-tech">
                  <span>Flutter</span>
                  <span>Dart</span>
                  <span>Firebase</span>
                  <span>Google Maps</span>
                </div>
              </div>

            </article>

          </div>

        </div>

      </section>


      {/* ================= SKILLS SECTION ================= */}

      <Skills />


      {/* ================= EXPERIENCE SECTION ================= */}

      <Experience />


      {/* ================= CONTACT SECTION ================= */}

      <Contact />

    </>
  )
}

export default App
