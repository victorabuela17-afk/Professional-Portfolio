import { ExternalLink, Star } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { projects } from "../data/portfolio";
import { useState } from "react";

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.filter((p) => p.featured);
  const hasMore = projects.length > projects.filter((p) => p.featured).length;

  return (
    <section id="projects" className="relative pt-28 pb-24 bg-gray-950">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-[150px]" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">
            What I've Built
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my notable projects that demonstrate my skills in web development,
            software engineering, and problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Project Image / Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary-600/20 to-accent-500/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-gray-900/50" />
                <div className="relative text-center">
                  <div className="text-4xl mb-2">💻</div>
                  <p className="text-gray-400 text-sm">{project.title}</p>
                </div>
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full">
                    <Star size={12} className="text-yellow-400" fill="currentColor" />
                    <span className="text-yellow-300 text-xs font-medium">Featured</span>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary-600/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-primary-600/10 text-primary-300 text-xs font-medium border border-primary-500/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-primary-500/50 transition-all duration-300"
            >
              {showAll ? "Show Featured Only" : `View All Projects (${projects.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
