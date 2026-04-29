import { Award, ExternalLink, Calendar, Building2 } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { certifications, seminars } from "../data/portfolio";
import { useState } from "react";

export default function Certifications() {
  const { ref, isVisible } = useScrollAnimation();
  const [showSeminars, setShowSeminars] = useState(false);

  return (
    <section id="certifications" className="relative pt-28 pb-24 bg-gray-950">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-accent-500/5 rounded-full blur-[150px]" />
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
            Professional Development
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
            <span className="gradient-text">Certifications</span> & Seminars
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Toggle between Certifications and Seminars */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setShowSeminars(false)}
            className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
              !showSeminars
                ? "bg-primary-600 text-white shadow-lg shadow-primary-600/30"
                : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
            }`}
          >
            📜 Certifications ({certifications.length})
          </button>
          <button
            onClick={() => setShowSeminars(true)}
            className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
              showSeminars
                ? "bg-primary-600 text-white shadow-lg shadow-primary-600/30"
                : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
            }`}
          >
            🎤 Seminars ({seminars.length})
          </button>
        </div>

        {/* Certifications Grid */}
        {!showSeminars && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {certifications.map((cert) => (
              <div
                key={cert.credentialId}
                className="glass-card rounded-2xl p-6 group relative overflow-hidden"
              >
                {/* Accent top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600/20 to-accent-500/20 flex items-center justify-center mb-4">
                  <Award className="text-primary-400" size={24} />
                </div>

                {/* Certificate Name */}
                <h3 className="text-white font-bold text-sm mb-2 leading-tight group-hover:text-primary-300 transition-colors">
                  {cert.name}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-2">
                  <Building2 size={12} />
                  <span>{cert.issuer}</span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-4">
                  <Calendar size={12} />
                  <span>{cert.date}</span>
                </div>

                {/* Credential ID */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-[10px] font-mono">
                    ID: {cert.credentialId}
                  </span>
                  {cert.link && cert.link !== "#" && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Seminars List */}
        {showSeminars && (
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {seminars.map((seminar, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-600/20 flex items-center justify-center text-primary-400 text-xs font-bold mt-0.5">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                      {seminar}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
