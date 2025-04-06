"use client";
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const skills = [
  'Generative AI',
  'Pytorch',
  'Bayesian Modelling',
  'Machine Learning',
  'Statistics',
  'Finetuning'
];

const projects = [
  {
    title: 'Reconstructing Damaged Egyptian Paintings',
    description: 'Using stable diffusion models to restore ancient Egyptian art with high accuracy.',
    details: 'This project utilized advanced diffusion models to predict and restore missing sections of ancient Egyptian paintings. Leveraging high-resolution image datasets and fine-tuning diffusion models improved the reconstruction quality.',
    github: 'https://github.com/kaitsmith22/stat222-generative-ai/tree/main'
  },
  {
    title: 'Training Graph Neural Networks for hERG Classification',
    description: 'Developing GNN models to predict hERG channel blockage efficiently.',
    details: 'The project involved creating a pipeline to train Graph Neural Networks (GNNs) to classify compounds that might block hERG channels, reducing the risk of cardiotoxicity. Performance was optimized using hyperparameter tuning and feature engineering.',
    github: 'https://github.com/kaitsmith22/hERG_blockers'
  }
];

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#f1f1e6] text-[#f25c27] font-aptos p-8">
      <header className="text-left mb-12 relative">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-[#f25c27] rounded-full w-full h-8 top-4 -z-10"></div>
          <h1 className="text-5xl font-bold text-[#36454F] relative z-10">Kaitlin Smith</h1>
        </div>
        <p className="text-lg text-[#36454F] mt-4">Showcasing my expertise in AI and Data Science</p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl text-[#36454F] mb-4">About Me</h2>
        <p className="text-lg text-[#36454F] mb-4">
          🎓 MA in Statistics, UC Berkeley<br />
          🎓 BS in Computer Science, University of Denver
          \n\n Hey there! I currently spend my days developing innovative solutions in oncology and digital health at AstraZeneca. I love using my computational skills to solve real problems we face. When I'm not thinking about ways to reduce patient burden or improve biomarker identification strategies, you can find me hiking, climbing, and drinking lattes.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl text-[#36454F] mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="p-4 bg-white rounded-2xl shadow-md text-center"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl text-[#36454F] mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition"
            >
              <CardContent className="p-6">
                <h3 className="text-2xl text-[#36454F] font-semibold mb-2">{project.title}</h3>
                <p className="text-lg">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-lg w-full">
            <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
            <p className="text-lg text-[#36454F] mb-4">{selectedProject.details}</p>
            {selectedProject.github && (
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f25c27] underline block mb-2"
              >
                View on GitHub
              </a>
            )}
            <button
              onClick={() => setSelectedProject(null)}
              className="mt-4 bg-[#f25c27] text-white px-4 py-2 rounded-lg hover:bg-[#e55e3c]"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <footer className="text-center mt-12 text-sm text-[#36454F]">
        &copy; {new Date().getFullYear()} Kaitlin Smith. All rights reserved.
      </footer>
    </div>
  );
};

export default App;

