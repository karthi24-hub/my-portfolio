import React from 'react';
import { Calendar, MapPin, Award, Users } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Freelance AI Trainer',
      company: 'Self-Employed',
      location: 'Tamil Nadu, India',
      period: 'Sep 2024 – Present',
      type: 'Freelancer',
      description: 'Conducted hands-on AI/ML training sessions and workshops for students from various engineering colleges.',
      achievements: [
        'Trained 500+ students on Python, ML, and Computer Vision fundamentals',
        'Designed and delivered a 1-week AI bootcamp with real-world projects',
        'Mentored students on building their first ML and CV applications',
      ],
      technologies: ['Python', 'Scikit-learn', 'OpenCV', 'Streamlit'],
      gradient: 'from-violet-600 to-purple-700',
    },
    {
      title: 'Automation Intern (AMR)',
      company: 'Robonetics Automation Solutions',
      location: 'Trichy, India',
      period: 'Jan 2024 – Mar 2024',
      type: 'Internship',
      description: 'Worked on building an Autonomous Mobile Robot (AMR) for warehouse line-following applications. Gained hands-on skills in IoT and robotics.',
      achievements: [
        'Implemented IR sensor-based line-following logic using Arduino',
        'Assembled and tested robotic chassis, motors, and controllers',
        'Learned real-world constraints in embedded systems and automation hardware',
      ],
      technologies: ['Arduino', 'IR Sensor', 'Motor Driver', 'Embedded C'],
      gradient: 'from-blue-600 to-slate-800',
    },
    {
      title: 'AI Project Associate – Kadhir Agro Project',
      company: 'EDC Cell, K. Ramakrishnan College of Technology',
      location: 'Trichy, Tamil Nadu, India',
      period: 'Feb 2023 – Oct 2023',
      type: 'Startup Collaboration / Incubation',
      description: 'Worked as part of an AI-focused student team on an industry-connected automation project in agriculture. Supported investor pitching, AI solution design, and incubation coordination.',
      achievements: [
        'Built and pitched the Kadhir Agro AI-based project to multiple startup investors',
        'Finalist at Olimayam 2.0 – a leading entrepreneurship event in Tamil Nadu',
        'Signed MoU for incubation support with Anna University – GUVI/KRCE',
      ],
      technologies: ['AI Strategy', 'Pitch Decks', 'Automation Design', 'Startup Tools'],
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Machine Learning Engineer',
      company: 'TCR Innovation',
      location: 'Remote',
      period: 'Dec 2022 – Mar 2023',
      type: 'Internship',
      description: 'Delivered machine learning solutions for predictive analytics and real-world applications in automation.',
      achievements: [
        'Built ML models improving prediction accuracy by 95%',
        'Developed and deployed data pipelines using Python and Pandas',
        'Visualized analytics to support strategic automation decisions',
      ],
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My journey through AI, robotics, and software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white dark:bg-gray-900 border-4 border-blue-500 rounded-full z-10 shadow" />

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-5/12 pl-8 md:pl-0 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200 dark:border-gray-700 group">
                    <div className={`h-2 bg-gradient-to-r ${exp.gradient}`} />

                    <div className="p-6">
                      {/* Period and Type */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.gradient} text-white`}
                        >
                          {exp.type}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {exp.company}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 mb-4">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600 dark:text-gray-400">
                          {exp.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                          <Award className="h-4 w-4 mr-1" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                            >
                              <span className="text-blue-500 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Period badge for larger screens */}
              <div
  className={`hidden md:block md:w-2/12 ${index % 2 === 0 ? 'text-right' : 'text-left'} flex justify-center`}
>
  <div
    className={`inline-block px-35 py-2 mt-12 bg-gradient-to-r ${exp.gradient} text-white rounded-full text-xs font-semibold shadow-md whitespace-nowrap`}
    style={{ minWidth: '180px', textAlign: 'center' }}
  >
    {exp.period}
  </div>
</div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
