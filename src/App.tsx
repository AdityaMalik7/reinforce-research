import React from 'react';
import { Brain, Microscope, Users, BookOpen, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold tracking-tight mb-8 bg-gradient-to-r from-blue-400 to-purple-400 inline-block text-transparent bg-clip-text">
              Pioneering the Future of AI Research
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              We're pushing the boundaries of artificial intelligence through innovative research and groundbreaking discoveries.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity">
              Explore Our Research
            </button>
          </div>
        </div>
      </div>

      {/* Research Areas */}
      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-16 text-center">Core Research Areas</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <Brain className="w-10 h-10" />,
              title: "Machine Learning",
              description: "Developing next-generation ML architectures and training methodologies."
            },
            {
              icon: <Microscope className="w-10 h-10" />,
              title: "Computer Vision",
              description: "Advancing visual understanding through deep learning and neural networks."
            },
            {
              icon: <Users className="w-10 h-10" />,
              title: "Human-AI Interaction",
              description: "Creating seamless interfaces between humans and AI systems."
            }
          ].map((area, index) => (
            <div key={index} className="bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{area.title}</h3>
              <p className="text-gray-400">{area.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Research */}
      <div className="bg-gradient-to-b from-black to-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-16 text-center">Featured Research</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Advanced LLM Training Methods",
                description: "Revolutionary approaches to training efficiency and model optimization.",
                image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80"
              },
              {
                title: "Multimodal AI Systems",
                description: "Bridging vision, language, and structured data in unified AI architectures.",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
              }
            ].map((paper, index) => (
              <div key={index} className="group">
                <div className="relative h-64 mb-6 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <img 
                    src={paper.image} 
                    alt={paper.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{paper.title}</h3>
                <p className="text-gray-400 mb-4">{paper.description}</p>
                <button className="text-blue-400 font-medium flex items-center group-hover:text-purple-400 transition-colors">
                  Read Paper <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Publications */}
      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-3xl font-bold">Latest Publications</h2>
          <button className="text-blue-400 font-medium flex items-center hover:text-purple-400 transition-colors">
            View All Publications <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
        <div className="space-y-6">
          {[
            {
              title: "Efficient Training of Large Language Models: A Comprehensive Study",
              conference: "NeurIPS 2024",
              authors: "John Smith, Jane Doe, Robert Johnson"
            },
            {
              title: "Neural Architecture Search for Vision Transformers",
              conference: "ICLR 2024",
              authors: "Alice Brown, David Wilson"
            },
            {
              title: "Advancing Multimodal Learning through Cross-Domain Integration",
              conference: "ICML 2024",
              authors: "Michael Chen, Sarah Parker"
            }
          ].map((pub, index) => (
            <div key={index} className="group bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg mr-6">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">{pub.title}</h3>
                  <p className="text-gray-400">{pub.authors}</p>
                  <p className="text-gray-500 mt-2">{pub.conference}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;