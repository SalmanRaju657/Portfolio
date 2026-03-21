import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Education & Certifications 🎓</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-7 h-7 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">B.Tech in Computer Science and Engineering </h3>
                <p className="text-blue-600 font-medium mb-2">DNR College of Engineering and Technology | 2021 - 2025</p>
                <p className="text-gray-600 mb-3">CGPA: 6.9</p>
                <p className="text-gray-600 leading-relaxed">
                 Studied core subjects like Data Structures, Algorithms, Web Development,
  Database Systems, and Machine Learning with a focus on practical implementation.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Full Stack Python Development </h3>
                  <p className="text-blue-600 font-medium mb-2">10000 Coders </p>
                  <p className="text-gray-600 text-sm">
                   Learned full stack development including frontend, backend, and real-world project                             building.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Additional Certifications</h3>
                  <p className="text-blue-600 font-medium mb-2">freeCodeCamp</p>
                  <p className="text-gray-600 text-sm">
                   <ul className="text-gray-600 text-sm space-y-2">
        <li>• Web Development Course – Rinex</li>
        <li>• Machine Learning with Python – Profexo Edutech</li>
        <li>• Integrative AI in Web Application Development – Mentorly</li>
        <li>• Full Stack Python Development – APSCHE Talent Shine</li>
      </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
