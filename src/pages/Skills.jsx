// src/pages/Skills.jsx

import React from 'react';

const skillCategories = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'HTML5', 'Python']
  },
  {
    title: 'Frameworks & Libraries',
    items: ['React', 'Redux', 'Next.js', 'Express']
  },
  {
    title: 'Tools & Workflow',
    items: ['Git', 'GitHub', 'VS Code', 'Webpack', 'ESLint']
  },
  {
    title: 'Soft Skills',
    items: [
      'Modular Troubleshooting',
      'Agile Collaboration',
      'Clear Documentation'
    ]
  }
];

export function Skills() {
  return (
    <section className="page-center">
      <h1>Skills</h1>
      
      {skillCategories.map((category) => (
        <div key={category.title} className="skill-category">
          <h2>{category.title}</h2>
          <ul>
            {category.items.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
