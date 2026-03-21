import { Code2, Database, Palette, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap', 'Responsive Design']
    },
    {
      icon: Database,
      title: 'Backend & Database',
      skills: ['Python', 'Django','SQL', 'REST APIs']
    },
    {
      icon: Wrench,
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'VS Code']
    },
    {
      icon: Palette,
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Team Collaboration', 'Quick Learner', 'Communication', 'Adaptability', 'Time Management']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-slate-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
