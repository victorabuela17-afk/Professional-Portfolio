import { personalInfo, navLinks } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="relative py-12 bg-gray-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#home" className="text-2xl font-bold gradient-text">
              ABUELA Portfolio
            </a>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              BS Industrial Technology major in Computer Technology student at NORSU Mabinay Campus. Currently on OJT at Wonders Corporation as IT Support. Passionate about technology, electronics, and creating meaningful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-500 hover:text-primary-400 text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-500">
              <p>{personalInfo.email}</p>
              <p>{personalInfo.phone}</p>
              <p>{personalInfo.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm flex items-center gap-1">
            © 2026 Abuela Portfolio. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Built with React + Tailwind CSS + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
