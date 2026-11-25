

const skillGroups = [
  {
    number: '01',
    title: 'Programming & Frontend',
    skills: ['Python', 'JavaScript', 'React', 'HTML5', 'CSS3', 'Flutter', 'Dart'],
  },
  {
    number: '02',
    title: 'Backend Development',
    skills: ['FastAPI', 'Flask', 'REST APIs', 'WebSockets'],
  },
  {
    number: '03',
    title: 'Automation & Productivity',
    skills: [
      'Workflow Automation',
      'Dashboard Development',
      'Advanced Excel',
      'Application Development',
    ],
  },
  {
    number: '04',
    title: 'Databases & Development Tools',
    skills: ['SQL', 'SQLite', 'Git', 'GitHub'],
  },
  {
    number: '05',
    title: 'UI/UX & Telecom',
    skills: [
      'Figma (Basic)',
      'Networking Fundamentals',
      'Telecom Networks',
      'RAN Concepts',
    ],
  },
  {
    number: '06',
    title: 'Currently Learning',
    skills: [
      'Power BI',
      'Cybersecurity Fundamentals',
    ],
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
            Technologies and tools I use to develop applications,
            automate workflows, build dashboards, and support
            operational processes.
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
