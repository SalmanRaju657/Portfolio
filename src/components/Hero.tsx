import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-6">
          <div className="space-y-2">
            <p className="text-blue-600 font-medium text-lg">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              PATHIVADA SALMAN RAJU
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 font-light">
             Aspiring Full-Stack Developer
            </p>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            Computer Science graduate passionate about building modern web applications and solving real-world problems. Skilled in React, Python, and full stack development, eager to contribute to impactful projects.
          </p>
          <h3>Open to Software Developer Opportunities 🚀</h3>

          <div className="flex gap-4 pt-4">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Let's Connect
            </a>
            <a
              href="#projects"
              className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-all duration-200"
            >
              View Projects
            </a>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/SalmanRaju657"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 hover:drop-shadow-md transition transform hover:scale-110 duration-200"
              aria-label="GitHub"
            >
              <Github className="w-7 h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/salmanraju/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 hover:drop-shadow-md transition transform hover:scale-110 duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a
              href="mailto:salmanrajup167@gmail.com"
              className="text-gray-600 hover:text-blue-500 hover:drop-shadow-md transition transform hover:scale-110 duration-200"
              aria-label="Email"
            >
              <Mail className="w-7 h-7" />
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img
              src="https://i.ibb.co/qLztNsYx/IMG-20260320-145533.png"
              alt="Salman Raju"
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover object-[center_35%] shadow-2xl border-8 border-white ring-4 ring-blue-100"
            />
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-600 transition-colors duration-200 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
}
