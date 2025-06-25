import React from 'react';
import TypewriterEffect from '../components/TypewriterEffect';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Home: React.FC = () => {
  const typewriterTexts = [
    'I_build_AI_agents()',
    'Deploy_ideas.fast()',
    '0_to_1_in_code()',
    'ML_Engineer.exe',
    'Gen-AI',
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Profile Picture */}
          <div className="flex justify-center mb-8">
            <img
              src="/pikey.jpg"
              alt="Profile"
              className="w-40 h-40 object-cover rounded-full shadow-lg"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Karthikeyan
            </span>
          </h1>

          {/* Typewriter Effect */}
          <div className="text-2xl md:text-4xl font-mono text-gray-700 dark:text-gray-300 mb-8">
            <TypewriterEffect texts={typewriterTexts} />
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-8 leading-relaxed">
            AI & Robotics Enthusiast • Machine Learning Engineer • Agentic AI Developer • RAG
            <br />
            <span className="text-lg">
              Building the future with code and No code, one algorithm at a time
            </span>
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/karthi24-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 hover:scale-110 transform"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/kar-a369l/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:karthikeyan@gmail.com"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 hover:scale-110 transform"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
            <a
              href="/Karthikeyan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Resume
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
