import { GraduationCap, Calendar } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { education } from "../data/portfolio";

export default function Education() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="relative pt-28 pb-24 bg-gray-950">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary-600/5 rounded-full blur-[150px]" />
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
            My Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-400 to-primary-600 md:-translate-x-px" />

          {education.map((edu, index) => (
            <div
              key={index}
              className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-gray-950 -translate-x-1/2 z-10 shadow-lg shadow-primary-500/50" />

              {/* Content Card */}
              <div
                className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div className="glass-card rounded-2xl p-6 group">
                  {/* Period Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar
                      size={14}
                      className="text-primary-400"
                    />
                    <span className="text-primary-400 text-sm font-medium">
                      {edu.period}
                    </span>
                  </div>

                  {/* School Icon & Name */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-600/20 flex items-center justify-center">
                      <GraduationCap
                        size={20}
                        className="text-primary-400"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-accent-400 font-medium">
                        {edu.school}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 rounded-full bg-primary-600/10 border border-primary-500/20 text-primary-300 text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for the other side */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
