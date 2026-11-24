
const experiences = [
  {
    period: 'Professional Experience',
    role: 'Project Coordinator',
    company: 'Nokia Networks',
    description:
      'Coordinate operational activities and support field teams by organizing project resources, tracking execution, and maintaining activity records.',
    responsibilities: [
      'Coordinate vehicle arrangements for engineers conducting field activities.',
      'Track field journeys, site visits, and activity progress.',
      'Maintain operational records and reporting through Excel.',
      'Explore workflow automation and dashboard solutions to improve visibility.',
    ],
    type: 'work',
  },
  {
    period: 'Academic Background',
    role: 'BS Software Engineering',
    company: 'Graduate · 2024',
    description:
      'Built a foundation in software engineering, programming, databases, and application development.',
    responsibilities: [
      'Studied software development principles and programming.',
      'Developed practical experience with Python and web technologies.',
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
            My professional experience and academic foundation in
            software engineering.
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
