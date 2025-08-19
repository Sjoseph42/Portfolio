const projects = [
  {
    name: 'Garden Scheduler',
    url: 'https://wol42verine.github.io/Gardening-Scheduler/',
    description: 'This is an early project from the OSU Programming Bootcamp, demonstrating the use of API databases to display information on plants, with a gardening focus, and a weather report. The APIs are limited but showcased my early efforts to build a functional and aesthetic UI.'
  },
  {
    name: 'City Weather',
    url: 'https://wol42verine.github.io/Weather-Dashboard/',
    description: 'Another early project from the OSU Programming Bootcamp, this application showcased API databases to provide weather information based on a desired city, up to date. The project further demonstrated the team effort to build a functional, and useful, web application.'
  },
   {
    name: 'Employee Database: Github Page',
    url: 'https://github.com/wol42verine/12-Challenge',
    description: 'This application is designed for users to organize employee information, such as names and ID numbers, though a simple CLI. It is designed to be installed, and thus the link above takes one to the GitHub page, where the Readme details installation and features.'
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

