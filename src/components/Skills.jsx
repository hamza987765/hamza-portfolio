
const skillGroups = [
  {
    number: '01',
    title: 'Programming & Frontend',
    skills: ['Python', 'JavaScript', 'React', 'HTML5', 'CSS3'],
  },
  {
    number: '02',
    title: 'Backend Development',
    skills: ['FastAPI', 'Flask', 'REST APIs', 'WebSockets'],
  },
  {
    number: '03',
    title: 'Databases & Tools',
    skills: ['SQLite', 'SQL', 'Git', 'GitHub', 'Power BI'],
  },
  {
    number: '04',
    title: 'Networking & Security',
    skills: ['Networking Fundamentals', 'Telecom Networks', 'Cybersecurity Fundamentals', 'RAN Concepts'],
  },
]

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="section-heading">
          <span className="section-label">MY EXPERTISE</span>
          <h2>Skills & <span>Technologies</span></h2>
          <p>
            Technologies and technical areas I use to build, manage,
            and understand software systems.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.number}>
              <div className="skill-card-top">
                <span className="skill-number">{group.number}</span>
                <span className="skill-line"></span>
              </div>

              <h3>{group.title}</h3>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
