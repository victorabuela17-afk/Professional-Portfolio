import { ArrowDown, Mail, MapPin, Phone } from "lucide-react";
import { personalInfo, stats } from "../data/portfolio";

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-600/20 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[150px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-2 rounded-full bg-primary-600/20 border border-primary-500/30 text-primary-300 text-sm font-medium mb-6 animate-fade-in-up">
              👋 Welcome to my Portfolio • BSIT Student
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Hi, I'm{" "}
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <h2
              className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {personalInfo.title}
            </h2>

            <p
              className="text-base sm:text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed animate-fade-in-up mx-auto lg:mx-0"
              style={{ animationDelay: "0.3s" }}
            >
              {personalInfo.tagline}
            </p>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
              <span className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin size={16} className="text-primary-400" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-2 text-sm text-gray-400">
                <Mail size={16} className="text-primary-400" />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-2 text-sm text-gray-400">
                <Phone size={16} className="text-primary-400" />
                {personalInfo.phone}
              </span>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group px-8 py-3.5 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 hover:scale-105 transition-all duration-300"
              >
                View My Work
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
              <a
                href="#accomplishments"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#accomplishments")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3.5 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-primary-500/50 transition-all duration-300"
              >
                🏆 Accomplishments
              </a>
            </div>

            {/* Social Links */}
            <div
              className="flex gap-4 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              {personalInfo.socialLinks.github && (
                <button
                  onClick={() => window.open(personalInfo.socialLinks.github, '_blank', 'noopener,noreferrer')}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-primary-600/20 hover:border-primary-500/30 transition-all duration-300 cursor-pointer"
                >
                  <GithubIcon />
                </button>
              )}
              {personalInfo.socialLinks.linkedin && (
                <button
                  onClick={() => window.open(personalInfo.socialLinks.linkedin, '_blank', 'noopener,noreferrer')}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-primary-600/20 hover:border-primary-500/30 transition-all duration-300 cursor-pointer"
                >
                  <LinkedinIcon />
                </button>
              )}
              {personalInfo.socialLinks.facebook && (
                <button
                  onClick={() => window.open(personalInfo.socialLinks.facebook, '_blank', 'noopener,noreferrer')}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-primary-600/20 hover:border-primary-500/30 transition-all duration-300 cursor-pointer"
                >
                  <FacebookIcon />
                </button>
              )}
            </div>
          </div>

          {/* Right Side - Profile Card */}
          <div className="flex-shrink-0 animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Glowing ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 via-accent-400 to-primary-600 rounded-full opacity-30 blur-lg animate-pulse-glow" />

              {/* Profile Image */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-primary-600/30 to-accent-500/30 border-2 border-white/20 overflow-hidden">
                <img
                  src={personalInfo.profileImage || ""}
                  alt="Abuela Victor M."
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                <div className="absolute inset-0 items-center justify-center text-center hidden" style={{ display: personalInfo.profileImage ? 'none' : 'flex' }}>
                  <div>
                    <div className="text-6xl sm:text-8xl mb-2">🧑‍💻</div>
                    <p className="text-sm text-gray-400 font-medium">BSIT Student</p>
                    <p className="text-xs text-gray-500">Major in Computer Technology</p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 animate-float bg-primary-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                🎓 NORSU Mabinay
              </div>
              <div
                className="absolute -bottom-2 -left-2 animate-float bg-accent-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                style={{ animationDelay: "1.5s" }}
              >
                💻 BSIT Student
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto lg:mx-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-5 text-center animate-fade-in-up"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="text-3xl font-bold gradient-text mb-1">
                {stat.value}+
              </div>
              <div className="text-xs sm:text-sm text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-gray-500 hover:text-primary-400 transition-colors"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
