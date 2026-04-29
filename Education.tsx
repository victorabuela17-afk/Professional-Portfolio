import { useState } from "react";
import {
  Trophy,
  Award,
  Star,
  BadgeCheck,
  Code2,
  Heart,
  Cloud,
  Users,
  GraduationCap,
  GitBranch,
  Palette,
  Filter,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { accomplishments } from "../data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  trophy: <Trophy size={24} />,
  award: <Award size={24} />,
  star: <Star size={24} />,
  "badge-check": <BadgeCheck size={24} />,
  code: <Code2 size={24} />,
  heart: <Heart size={24} />,
  cloud: <Cloud size={24} />,
  users: <Users size={24} />,
  "graduation-cap": <GraduationCap size={24} />,
  "git-branch": <GitBranch size={24} />,
  palette: <Palette size={24} />,
};

const categories = [
  "All",
  ...Array.from(new Set(accomplishments.map((a) => a.category))),
];

const categoryColors: Record<string, string> = {
  Competition: "from-yellow-500 to-orange-500",
  Academic: "from-blue-500 to-cyan-500",
  Certification: "from-green-500 to-emerald-500",
  Community: "from-pink-500 to-rose-500",
  Leadership: "from-purple-500 to-violet-500",
  Development: "from-teal-500 to-cyan-500",
  Experience: "from-indigo-500 to-blue-500",
};

export default function Accomplishments() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? accomplishments
      : accomplishments.filter((a) => a.category === activeCategory);

  return (
    <section id="accomplishments" className="relative pt-28 pb-24 bg-gray-900">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-[150px]" />
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
            My Pride & Joy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
            <span className="gradient-text">Accomplishments</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of my achievements, awards, certifications, and milestones throughout my academic journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Filter size={18} className="text-gray-500 mt-2.5 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-600/30"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accomplishments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="glass-card rounded-2xl p-6 group relative overflow-hidden"
            >
              {/* Category color accent */}
              <div
                className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${
                  categoryColors[item.category] || "from-primary-500 to-accent-400"
                }`}
              />

              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${
                    categoryColors[item.category] ||
                    "from-primary-500 to-accent-400"
                  } flex items-center justify-center text-white shadow-lg`}
                >
                  {iconMap[item.icon] || <Trophy size={24} />}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r ${
                        categoryColors[item.category] ||
                        "from-primary-500 to-accent-400"
                      } text-white`}
                    >
                      {item.category}
                    </span>
                    <span className="text-gray-500 text-xs flex-shrink-0">
                      {item.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-sm mt-2 mb-2 leading-tight group-hover:text-primary-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {Object.entries(categoryColors).map(([category, color]) => {
            const count = accomplishments.filter(
              (a) => a.category === category
            ).length;
            if (count === 0) return null;
            return (
              <div
                key={category}
                className="glass-card rounded-xl p-4 text-center"
              >
                <div
                  className={`text-2xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}
                >
                  {count}
                </div>
                <div className="text-gray-500 text-xs mt-1">{category}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
