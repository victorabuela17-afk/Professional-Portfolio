import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { personalInfo } from "../data/portfolio";
import { Code2, BookOpen, Lightbulb, Rocket } from "lucide-react";
import { useState } from "react";

const aboutImages = [
  {
    src: "https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/495129044_686046861031410_516671682592609437_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeE9p1PQ80qxjQLcUIOG6yssyizlDgSalmzKLOUOBJqWbMuoiLYfW0XaLUXgEurcpGOizhXNHi5S5lY_CdhXRz02&_nc_ohc=FNLO29qzv_sQ7kNvwHVfIhr&_nc_oc=Adp8LCcAWOFjKd_XVhvQNL26LafmBSGJJA2Es-u4qYpRHAHrqvtzcRWFUcHvQ7iHZkM&_nc_zt=23&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=Phda2JWq-LD2BWa7wGKPLQ&_nc_ss=7b2a8&oh=00_Af1n9KQomWwvCHwxYoD3ro8PGsVCEBGzlNKylPgOUCZbgg&oe=69F73DF0",
    alt: "Abuela Victor - Working on electronics project",
    caption: "My Team During Thesis",
  },
  {
    src: "https://scontent.fmnl14-2.fna.fbcdn.net/v/t39.30808-6/470882528_578007471835350_4022056325437666833_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEGqj9yHDJLaMcGsCS_jZv_MX-F00W6oJAxf4XTRbqgkC_CdW4XM7ieIJay4xGji0NmR9nwqB7XdzZOi3WSEO_G&_nc_ohc=l1NARQ64It8Q7kNvwE0RKCG&_nc_oc=AdpdeZAV3xY8QokaQkE-wP0mpEgnIqKnVSy2RgMlhcpKkxJEq0Oxm0oA_FYyxeOLQ5U&_nc_zt=23&_nc_ht=scontent.fmnl14-2.fna&_nc_gid=wb3rqJIKHXlzSjzpGpTfhA&_nc_ss=7b2a8&oh=00_Af2lxXACg74oHT8_tOWgunKqeAoXB7Ncz9fke8SmkbuRIQ&oe=69F73A5B",
    alt: "Abuela Victor - Professional portrait",
    caption: "Professional",
  },
  {
    src: "https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/474521415_603811615921602_2418643317499303141_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGAhm5NQY2yTfUQNsX6hAKW-rF5vVobXXT6sXm9WhtddOKScU6xXobNTUaqwX-91modKM8sX5Oc_JAU6oaSMBHE&_nc_ohc=fUAn9SlgOXsQ7kNvwG-6E4j&_nc_oc=AdrgTUOFgbKWENM2OXICLZbgc0hDrd59QH8QgyOr32omssLFrqYWqDUImWLiPUU9DKc&_nc_zt=23&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=PVaa_d260bny731MPR9f0Q&_nc_ss=7b2a8&oh=00_Af2LA28tf8ghPXjQGSnBUmBy0vCc_2a1aX4sdAtA1HcCDQ&oe=69F73679",
    alt: "Abuela Victor - My Tropang Laya",
    caption: "My Team in Arduino Project",
  },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const highlights = [
    {
      icon: <Code2 className="text-primary-400" size={28} />,
      title: "Clean Code",
      description:
        "I write well-structured, maintainable, and efficient code following best practices.",
    },
    {
      icon: <BookOpen className="text-accent-400" size={28} />,
      title: "Continuous Learning",
      description:
        "Always staying updated with the latest technologies and industry trends.",
    },
    {
      icon: <Lightbulb className="text-yellow-400" size={28} />,
      title: "Problem Solver",
      description:
        "Passionate about finding creative solutions to complex technical challenges.",
    },
    {
      icon: <Rocket className="text-pink-400" size={28} />,
      title: "Goal Driven",
      description:
        "Focused on delivering impactful projects that make a real difference.",
    },
  ];

  return (
    <section id="about" className="relative pt-40 pb-28 bg-gray-900">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
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
            Get to Know Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Photo Gallery */}
        <div className="mb-16">
          <h3 className="text-center text-white font-semibold text-lg mb-6">
            📸 My <span className="gradient-text">Gallery</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {aboutImages.map((img, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[3/4]"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium text-sm">
                    {img.caption}
                  </span>
                </div>
                {/* Border glow on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/50 rounded-2xl transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - About Text */}
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              As a dedicated BSIT student, I've focused on mastering both front-end and back-end development.
              I believe in the power of technology to transform lives and businesses, and I'm committed to
              being part of that transformation. Whether it's building responsive web applications, designing
              databases, or working with electronics and Arduino — I'm always ready for the next challenge.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-4">
                <span className="text-gray-500 text-sm">Name</span>
                <p className="text-white font-medium">{personalInfo.name}</p>
              </div>
              <div className="glass-card rounded-xl p-4">
                <span className="text-gray-500 text-sm">Age</span>
                <p className="text-white font-medium">25 years old</p>
              </div>
              <div className="glass-card rounded-xl p-4">
                <span className="text-gray-500 text-sm">School</span>
                <p className="text-white font-medium">NORSU – Mabinay Campus</p>
              </div>
              <div className="glass-card rounded-xl p-4">
                <span className="text-gray-500 text-sm">Program</span>
                <p className="text-white font-medium">BS Industrial Technology major in Computer Technology</p>
              </div>
              <div className="glass-card rounded-xl p-4">
                <span className="text-gray-500 text-sm">OJT</span>
                <p className="text-white font-medium">IT Support – Wonders Corp.</p>
              </div>
              <div className="glass-card rounded-xl p-4">
                <span className="text-gray-500 text-sm">Email</span>
                <p className="text-white font-medium text-sm">{personalInfo.email}</p>
              </div>
            </div>
          </div>

          {/* Right - Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-6 text-center"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl font-light z-10"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          <img
            src={aboutImages[selectedImage].src}
            alt={aboutImages[selectedImage].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {aboutImages[selectedImage].caption} — Click outside to close
          </p>
        </div>
      )}
    </section>
  );
}
