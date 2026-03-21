import { User, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <User className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Who I Am</h3>
            <p className="text-gray-600 leading-relaxed">
             Computer Science student with a strong foundation in problem-solving and software development. Passionate about building real-world applications and continuously learning new technologies.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">What I Do</h3>
            <p className="text-gray-600 leading-relaxed">
            I develop modern and responsive web applications and enjoy applying my knowledge to practical projects. I also explore machine learning concepts to solve real-world problems.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Award className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">My Goals</h3>
            <p className="text-gray-600 leading-relaxed">
              To become a skilled software developer and contribute to impactful projects in a dynamic environment. I aim to grow continuously and build efficient, scalable solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
