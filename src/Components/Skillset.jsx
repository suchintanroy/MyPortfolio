import React from 'react';
import { Code2, Database, GitBranch, Layout, Terminal } from 'lucide-react';

const Skillset = () => {
  const skills = [
    {
      category: 'Frontend',
      items: ['HTML', 'CSS', 'JavaScript', 'React'],
      icon: <Layout className="w-6 h-6 text-yellow-400" />,
      logos: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" }
      ]
    },
    {
      category: 'Backend',
      items: ['.NET'],
      icon: <Code2 className="w-6 h-6 text-yellow-400" />,
      logos: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg", alt: ".NET" }
      ]
    },
    {
      category: 'Database',
      items: ['SQL Server'],
      icon: <Database className="w-6 h-6 text-yellow-400" />,
      logos: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", alt: "SQL Server" }
      ]
    },
    {
      category: 'Version Control',
      items: ['Git', 'GitHub'],
      icon: <GitBranch className="w-6 h-6 text-yellow-400" />,
      logos: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub" }
      ]
    },
    {
      category: 'Programming Languages',
      items: ['Python', 'C#'],
      icon: <Terminal className="w-6 h-6 text-yellow-400" />,
      logos: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", alt: "C#" }
      ]
    },
    {
      category: 'Cloud',
      items: ['Azure'],
      icon: <Terminal className="w-6 h-6 text-yellow-400" />,
      logos: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", alt: "Azure" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-white font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map(({ category, logos, icon }) => (
            <div key={category} className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                {icon}
                <h3 className="text-xl text-yellow-400 font-semibold">{category}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {logos.map((logo) => (
                  <div
                    key={logo.alt}
                    className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="w-12 h-12 mb-2"
                    />
                    <span className="text-gray-300 text-sm text-center">{logo.alt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skillset;