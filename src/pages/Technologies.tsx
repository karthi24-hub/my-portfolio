import React from 'react';
import { Code,
  Database,
  Cloud,
  Smartphone,
  Cpu,
  Zap,
  BrainCircuit,
  Sparkles,
  TextCursorInput,
  Workflow,
  PlugZap,
  ServerCog, LineChart,
  Activity,
  Camera,
  Rocket,
  MessageSquareCode} from 'lucide-react';

const Technologies: React.FC = () => {
  const techCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="h-8 w-8" />,
      gradient: 'from-blue-500 to-cyan-500',
      technologies: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'Solidity'],
    },
      {
  title: 'Machine Learning',
  icon: <LineChart className="h-8 w-8" />,
  gradient: 'from-green-500 to-emerald-500',
  technologies: [
    'Scikit-learn',
    'XGBoost',
    'LightGBM',
    'CatBoost',
    'SVM',
    'Random Forest',
    'KNN'
  ],
},
{
  title: 'Deep Learning',
  icon: <Activity className="h-8 w-8" />,
  gradient: 'from-red-500 to-pink-600',
  technologies: [
    'TensorFlow',
    'PyTorch',
    'Keras',
    'CNNs',
    'RNNs',
    'GANs',
    'LSTM'
  ],
},
{
  title: 'Natural Language Processing',
  icon: <MessageSquareCode className="h-8 w-8" />,
  gradient: 'from-blue-500 to-cyan-500',
  technologies: [
    'spaCy',
    'BERT',
    'NLTK',
    'TextBlob',
    'T5',
    'Sentence Transformers',
    'Transformers'
  ],
},
{
  title: 'Computer Vision',
  icon: <Camera className="h-8 w-8" />,
  gradient: 'from-purple-600 to-fuchsia-600',
  technologies: [
    'OpenCV',
    'YOLO',
    'EfficientNet',
    'ResNet',
    'ImageNet',
    'Object Detection',
    'Segmentation'
  ],
},
{
  title: 'Model Deployment',
  icon: <Rocket className="h-8 w-8" />,
  gradient: 'from-teal-500 to-indigo-600',
  technologies: [
    'Flask',
    'FastAPI',
    'Gradio',
    'Streamlit',
    'Docker',
    'Hugging Face Spaces',
    'Render'
  ],
},

    {
  title: 'Agentic AI',
  icon: <BrainCircuit className="h-8 w-8" />,
  gradient: 'from-purple-600 to-indigo-600',
  technologies: ['Autonomous Agents', 'LangGraph', 'AutoGPT', 'BabyAGI', 'CAMEL', 'ReAct'],
},
{
  title: 'Generative AI',
  icon: <Sparkles className="h-8 w-8" />,
  gradient: 'from-pink-500 to-red-500',
  technologies: ['GPT-4', 'Claude', 'Gemini', 'LLaMA', 'DALLE', 'Sora', 'OpenRouter.ai'],
},
{
  title: 'Prompt Engineering',
  icon: <TextCursorInput className="h-8 w-8" />,
  gradient: 'from-yellow-500 to-amber-500',
  technologies: ['Few-shot Prompting', 'Chain-of-Thought', 'Toolformer', 'Prompt Templates'],
},
{
  title: 'AI Workflow Orchestration',
  icon: <Workflow className="h-8 w-8" />,
  gradient: 'from-cyan-500 to-blue-500',
  technologies: ['LangChain', 'n8n', 'FlowiseAI', 'AgentOps', 'Superagent.sh'],
},
{
  title: 'API & Tool Integrations',
  icon: <PlugZap className="h-8 w-8" />,
  gradient: 'from-green-500 to-emerald-500',
  technologies: ['REST APIs', 'Zapsync', 'OpenAI Functions', 'JSON agents', 'Webhooks'],
},
{
  title: 'Cloud & Hosting',
  icon: <ServerCog className="h-8 w-8" />,
  gradient: 'from-gray-500 to-slate-700',
  technologies: ['Vercel', 'Render', 'Replicate', 'Hugging Face Spaces', 'Google Colab'],
}

  ];

  return (
    <section id="technologies" className="py-20 bg-gray-50 dark:bg-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technologies & Tools
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My expertise spans across various technologies, from AI and robotics to Automation AI-Agents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              {/* Category Header */}
              <div className={`h-2 bg-gradient-to-r ${category.gradient}`} />
              
              <div className="p-6">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6`}>
                  {category.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {category.title}
                </h3>

                {/* Technologies */}
                <div className="grid grid-cols-2 gap-3">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center space-x-2 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 group-hover:scale-105"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient}`} />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '15+', label: 'Projects Completed' },
            { number: '10+', label: 'Technologies Mastered' },
            { number: '1.5+', label: 'Years Experience' },
            { number: '100%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;