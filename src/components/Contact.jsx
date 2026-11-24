
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="section-heading">
          <span className="section-label">GET IN TOUCH</span>
          <h2>Let's Build Something <span>Together</span></h2>
          <p>
            Have a project, opportunity, or technical discussion in mind?
            I'm interested in connecting.
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-main">
            <span className="contact-overline">HAVE AN IDEA?</span>
            <h3>Let's turn your ideas into reality.</h3>
            <p>
              Whether it's software development, automation, or a
              professional opportunity, feel free to reach out.
            </p>

            <a
              href="mailto:YOUR_EMAIL@example.com"
              className="contact-email-button"
            >
              <Mail size={18} />
              Get in Touch
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="contact-details">
            <div className="contact-detail">
              <span className="contact-detail-icon">
                <Mail size={19} />
              </span>
              <div>
                <span>Email</span>
                <p>Hamzakhattak9911@gmail.com</p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon">
                <MapPin size={19} />
              </span>
              <div>
                <span>Location</span>
                <p>Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        <footer className="portfolio-footer">
          <a href="#home" className="footer-logo">HAMZA<span>.</span></a>
          <p>Designed & built with purpose.</p>
          <a href="#home" className="back-to-top">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  )
}

export default Contact
