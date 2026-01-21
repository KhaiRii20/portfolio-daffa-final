"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "AI Sentiment Analysis",
    category: "Machine Learning",
    image: "https://placehold.co/600x400/253745/FFF?text=AI+Project", // Ganti dengan gambar asli nanti
    description: "Analyzing customer feedback using Python and Natural Language Processing (NLP).",
    tech: ["Python", "Scikit-Learn", "FastAPI"],
    demoLink: "#",
    repoLink: "#"
  },
  {
    title: "Modern Portfolio V1",
    category: "Web Development",
    image: "https://placehold.co/600x400/11212D/FFF?text=Web+Project",
    description: "Responsive personal portfolio website built with Next.js 14 and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    demoLink: "#",
    repoLink: "#"
  },
  // Tambahkan project lain di sini...
];

export default function Projects() {
  return (
    <section id="projects" className="py-10 px-6 max-w-[1200px] mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center md:text-left"
      >
        <span className="text-primary font-bold tracking-wider uppercase text-sm">Portfolio</span>
        <h2 className="text-4xl font-extrabold text-deep-dark mt-2">Selected Works</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            {/* Bagian Gambar */}
            <div className="relative h-48 w-full overflow-hidden bg-gray-200">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay Icon saat Hover */}
              <div className="absolute inset-0 bg-deep-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a href={project.repoLink} className="p-3 bg-white/10 text-white hover:bg-white hover:text-deep-dark rounded-full transition-all backdrop-blur-sm">
                  <i className="ri-github-fill text-xl"></i>
                </a>
                <a href={project.demoLink} className="p-3 bg-white/10 text-white hover:bg-white hover:text-deep-dark rounded-full transition-all backdrop-blur-sm">
                  <i className="ri-external-link-line text-xl"></i>
                </a>
              </div>
            </div>

            {/* Bagian Deskripsi */}
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{project.category}</span>
              <h3 className="text-xl font-bold text-deep-dark mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-secondary text-sm line-clamp-3 mb-6 flex-grow">{project.description}</p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-[10px] font-bold bg-surface/50 border border-secondary/10 rounded-full text-secondary uppercase tracking-wide">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}