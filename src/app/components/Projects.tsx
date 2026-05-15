import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, Bot, Cpu, ExternalLink, Github, LayoutDashboard, Map } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export function Projects() {
   const projects = [
  {
    title: "Flood Prediction & Early Warning Dashboard",
    description: "ML system classifying flood risk levels across Pakistan using historical disaster records, geospatial coordinates, and population impact data with an interactive live map.",
    icon: AlertTriangle,
    tech: ["Python", "Scikit-learn", "Folium", "Plotly", "Pandas"],
    gradient: "from-blue-400 to-cyan-500",
    demo: "#",
    github: "https://github.com/waqaskhan0/ndma-flood-ai.git"
  },
  {
    title: "GIS Disaster Risk Dashboard",
    description: "Integrated NASA POWER, USGS earthquake data, and Pakistan tehsil boundaries into a unified GIS pipeline with drill-down risk overlays and preparedness recommendations.",
    icon: Map,
    tech: ["Python", "GIS", "Leaflet.js", "NASA API", "USGS"],
    gradient: "from-green-400 to-teal-500",
    demo: "#",
    github: "https://github.com/waqaskhan0/gis-dashboard.git"
  },
  {
    title: "LLM-Powered AI Assistant",
    description: "Intelligent assistant on n8n connecting large language models to external APIs and productivity services via event-driven automation pipelines.",
    icon: Bot,
    tech: ["n8n", "LLM APIs", "AI Agents", "Automation"],
    gradient: "from-violet-400 to-purple-500",
    demo: "#",
    github: "https://github.com/waqaskhan0/n8n.git"
  },
  {
    title: "Smart Irrigation System",
    description: "ML-based crop water prediction combined with IoT sensor integration and a mobile app for real-time field monitoring and automated irrigation control.",
    icon: Cpu,
    tech: ["Machine Learning", "IoT", "Mobile App", "Scikit-learn"],
    gradient: "from-emerald-400 to-green-500",
    demo: "#",
    github: "https://github.com/waqaskhan0/irrigo.git"
  },
  {
    title: "Assessment Forms & Admin Dashboard",
    description: "End-to-end digital assessment system with backend database integration and a real-time filterable admin dashboard with export functionality for stakeholders.",
    icon: LayoutDashboard,
    tech: ["HTML/CSS/JS", "Database Design", "Dashboard UI", "REST API"],
    gradient: "from-orange-400 to-red-500",
    demo: "#",
    github: "https://github.com/waniaazam67-coder/Assessment-Forms.git"
  }
];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Interactive gallery showcasing AI/ML projects that push the boundaries of what's possible
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex space-x-2">
                      {project.demo !== "#" && (
                        <Button asChild size="sm" variant="ghost" className="text-gray-400 hover:text-blue-400">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} demo`}>
                            <ExternalLink size={16} />
                          </a>
                        </Button>
                      )}
                      <Button asChild size="sm" variant="ghost" className="text-gray-400 hover:text-blue-400">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} GitHub repository`}>
                          <Github size={16} />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
