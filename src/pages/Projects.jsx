const projects = [
  {
    name: 'Testing A',
    url: 'https://github.com/yourname/project-a',
    description: 'This is just a test.'
  },
  {
    name: 'Testing B',
    url: 'https://yourdomain.com/project-b',
    description: 'This is also a test.'
  },
   {
    name: 'Testing C',
    url: 'https://yourdomain.com/project-b',
    description: 'Yet another test.'
  },
];

export function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <ul className="projects-list">
        {projects.map((proj) => (
          <li key={proj.name} className="project-item">
            <h2>
              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {proj.name}
              </a>
            </h2>
            <p>{proj.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

