
const experiences = [
  
{
  period: 'Professional Experience',
  role: 'Project Coordinator',
  company: 'Nokia Networks',
  description:
    'Coordinate telecom field operations while applying software development and automation to improve the efficiency of repetitive operational workflows.',
  responsibilities: [
    'Coordinate vehicle arrangements and operational resources for engineers conducting field activities.',
    'Track field journeys, site visits, engineer movements, and deployment progress.',
    'Build dashboards, applications, and custom software tools to automate time-consuming processes through professional and personal projects.',
    'Use Python, JavaScript, and Excel-based solutions to improve data handling and operational efficiency.',
    'Identify opportunities to replace repetitive manual processes with faster digital workflows.',
  ],
  type: 'work',
},

  {
    period: 'Academic Background',
    role: 'BS Software Engineering',
    company: 'Graduate · 2024',
    description:
      'Developed an academic foundation in software engineering, programming, databases, and software development principles.',
    responsibilities: [
      'Studied software development methodologies and programming concepts.',
      'Built foundational knowledge of databases and application development.',
      'Applied software engineering concepts through academic and personal projects.',
    ],
    type: 'education',
  },
]

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <div className="section-heading">
          <span className="section-label">MY JOURNEY</span>
          <h2>Experience & <span>Education</span></h2>
          <p>
            My professional experience in telecom operations,
            workflow automation, and software engineering.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((item, index) => (
            <article className="experience-card" key={item.role}>
              <div className="timeline-marker">
                <span>{index + 1}</span>
              </div>

              <div className="experience-content">
                <div className="experience-meta">
                  <span className="experience-type">
                    {item.type === 'work' ? 'PROFESSIONAL' : 'EDUCATION'}
                  </span>
                  <span className="experience-period">{item.period}</span>
                </div>

                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <p className="experience-description">{item.description}</p>

                <ul className="experience-list">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
