import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { personalInfo } from "../data/portfolio";

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary-400" size={24} />,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <Phone className="text-primary-400" size={24} />,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: <MapPin className="text-primary-400" size={24} />,
      label: "Location",
      value: personalInfo.location,
      href: "#",
    },
    {
      icon: (
        <svg className="text-primary-400" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      label: "Facebook",
      value: "Abuela Victor",
      href: "https://www.facebook.com/abuela.victor.5",
      isExternal: true,
    },
  ];

  return (
    <section id="contact" className="relative pt-28 pb-24 bg-gray-900">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-primary-600/5 rounded-full blur-[120px]" />
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
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, and conversations. 
            Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info) => (
              <button
                key={info.label}
                onClick={() => {
                  if ((info as { isExternal?: boolean }).isExternal) {
                    window.open(info.href, '_blank', 'noopener,noreferrer');
                  } else {
                    window.location.href = info.href;
                  }
                }}
                className="glass-card rounded-2xl p-5 flex items-center gap-4 w-full text-left cursor-pointer group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary-600/10 flex items-center justify-center">
                  {info.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{info.label}</p>
                  <p className="text-white font-medium group-hover:text-primary-300 transition-colors">
                    {info.value}
                  </p>
                </div>
              </button>
            ))}

            {/* Additional CTA */}
            <div className="glass-card rounded-2xl p-6 text-center">
              <p className="text-gray-400 text-sm mb-4">
                Let's connect and build something amazing together!
              </p>
              <div className="flex justify-center gap-3">
                {personalInfo.socialLinks.github && (
                  <button
                    onClick={() => window.open(personalInfo.socialLinks.github, '_blank', 'noopener,noreferrer')}
                    className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-primary-600/20 transition-all cursor-pointer"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </button>
                )}
                {personalInfo.socialLinks.linkedin && (
                  <button
                    onClick={() => window.open(personalInfo.socialLinks.linkedin, '_blank', 'noopener,noreferrer')}
                    className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-primary-600/20 transition-all cursor-pointer"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </button>
                )}
                {personalInfo.socialLinks.facebook && (
                  <button
                    onClick={() => window.open(personalInfo.socialLinks.facebook, '_blank', 'noopener,noreferrer')}
                    className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-primary-600/20 transition-all cursor-pointer"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="text-green-400 mb-4" size={48} />
                  <h3 className="text-white text-xl font-bold mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-400 text-sm font-medium mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-400 text-sm font-medium mb-2"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-400 text-sm font-medium mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can I help you?"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-400 text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
