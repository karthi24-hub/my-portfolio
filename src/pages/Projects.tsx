import React from 'react';
import { ExternalLink, Github, Brain,  Code, Cpu , LineChart,
  Activity,
  Camera,
  Settings,
  Zap,
  Workflow} from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'AI-Powered Chatbot',
      description: 'Intelligent conversational AI built with natural language processing and machine learning algorithms.',
      technologies: ['Python', 'TensorFlow', 'NLTK', 'Flask', 'React'],
      icon: <Brain className="h-8 w-8" />,
      gradient: 'from-blue-500 to-cyan-500',
      github: '#',
      demo: '#',
    },
   
    {
  title: '📈 Credit Card Approval Predictor',
  description: 'A machine learning model that predicts credit card approval decisions based on applicant data and financial history.',
  technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Streamlit'],
  icon: <LineChart className="h-8 w-8" />,
  gradient: 'from-green-500 to-emerald-500',
  github: '#',
  demo: '#',
},
{
  title: '🧠 Brain Tumor Classification',
  description: 'A deep learning project using CNNs to classify brain MRI scans into tumor types.',
  technologies: ['Keras', 'TensorFlow', 'OpenCV', 'CNN', 'Flask'],
  icon: <Activity className="h-8 w-8" />,
  gradient: 'from-red-500 to-pink-500',
  github: '#',
  demo: '#',
},
{
  title: '🧐 Real-Time Object Detection',
  description: 'Computer vision app using YOLOv5 to detect and classify multiple objects in real-time using a webcam.',
  technologies: ['YOLOv5', 'OpenCV', 'PyTorch', 'Streamlit', 'Python'],
  icon: <Camera className="h-8 w-8" />,
  gradient: 'from-indigo-500 to-purple-600',
  github: '#',
  demo: '#',
},
    {
  title: '🧠 AI Workflow Assistant',
  description: 'An agent-based AI workflow assistant that schedules tasks, handles reminders, and connects apps using n8n.',
  technologies: ['n8n', 'LangChain', 'OpenAI', 'Python', 'Webhooks'],
  icon: <Workflow className="h-8 w-8" />,
  gradient: 'from-blue-500 to-cyan-500',
  github: '#',
  demo: '#',
},
    
    {
      title: '🌿 Leaf Disease Detector',
      description: 'An AI-powered web application built with Streamlit to detect and classify plant leaf diseases.',
      technologies: ['React', 'Node.js', 'TensorFlow', 'Stripe', 'Streamlit','Python',],
      icon: <Code className="h-8 w-8" />,
      gradient: 'from-pink-500 to-rose-500',
      github: 'https://github.com/karthi24-hub/leaf-disease-detector',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of my latest work in AI, machine learning, and full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-6">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200 flex-1 justify-center"
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white hover:opacity-90 rounded-lg transition-opacity duration-200 flex-1 justify-center`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;