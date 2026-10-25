"use client";

import { useState } from "react";
import {
  Mail,
  ExternalLink,
  Code2,
  Terminal,
  Palette,
  Layers,
  Sparkles,
  ArrowRight,
  Menu,
  X,
  Send,
  CheckCircle2,
  Briefcase,
  GraduationCap
} from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const skills = [
    { name: "React / Next.js", category: "Core", icon: Code2 },
    { name: "TypeScript", category: "Core", icon: Terminal },
    { name: "Tailwind CSS", category: "Styling", icon: Palette },
    { name: "JavaScript (ES6+)", category: "Core", icon: Code2 },
    { name: "HTML5 & CSS3", category: "Styling", icon: Layers },
    { name: "Responsive Design", category: "UI/UX", icon: Sparkles },
    { name: "Git & GitHub", category: "Tools", icon: GithubIcon },
    { name: "REST APIs & Fetch", category: "Integration", icon: Terminal },
    { name: "UI/UX Prototyping", category: "Design", icon: Palette },
    { name: "Performance Optimization", category: "Engineering", icon: Sparkles },
  ];

  const projects = [
    {
      title: "Interactive Web Application",
      description: "A fast, modern frontend application designed with Next.js App Router, TypeScript, and fluid Tailwind CSS styling.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      demoUrl: "https://github.com/hurinbsyrii/hanadelprofile",
      githubUrl: "https://github.com/hurinbsyrii/hanadelprofile",
      featured: true,
    },
    {
      title: "E-Commerce Frontend Showcase",
      description: "Dynamic product catalog with shopping cart management, filters, and high-performance client state handling.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons"],
      demoUrl: "#",
      githubUrl: "https://github.com/hurinbsyrii",
      featured: true,
    },
    {
      title: "Design System & UI Kit",
      description: "Reusable, accessible component collection focused on high contrast, smooth transitions, and modularity.",
      tech: ["TypeScript", "Tailwind CSS", "Figma"],
      demoUrl: "#",
      githubUrl: "https://github.com/hurinbsyrii",
      featured: false,
    },
  ];

  const timeline = [
    {
      year: "2024 - Present",
      role: "Frontend Developer",
      institution: "Web & UI Development",
      type: "work",
      description: "Specializing in building clean, responsive user interfaces with modern React, Next.js, and TypeScript.",
    },
    {
      year: "2022 - 2024",
      role: "Web Design & Development Student",
      institution: "Computer Science & Software",
      type: "education",
      description: "Focused on frontend architectures, user experience design, algorithms, and web technologies.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              H
            </div>
            <span className="font-semibold text-lg tracking-tight group-hover:text-cyan-400 transition-colors">
              Hanadel<span className="text-cyan-400">.</span>dev
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/hurinbsyrii"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-medium rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors shadow-sm"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-slate-900/95 px-6 py-4 flex flex-col gap-4">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-cyan-400"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-cyan-400"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-cyan-400"
            >
              Projects
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-cyan-400"
            >
              Experience
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-cyan-400"
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-36 overflow-hidden">
        {/* Glow ambient background effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Available for new frontend opportunities
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Hanadel</span>.
              <br />
              Building purposeful web experiences.
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl">
              Frontend developer crafting fast, responsive, and aesthetically engaging web applications using
              Next.js, TypeScript, and modern CSS frameworks.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all shadow-lg shadow-cyan-500/20 group"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-medium transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                Contact Me
              </a>
            </div>

            {/* Quick stats / Highlights */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6 pt-10 border-t border-slate-800/80">
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-sm text-slate-400 mt-1">Frontend Focused</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400">Next.js</p>
                <p className="text-sm text-slate-400 mt-1">Modern App Router</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-3xl font-bold text-blue-400">Tailwind</p>
                <p className="text-sm text-slate-400 mt-1">Responsive UI Styling</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-t border-slate-900 bg-slate-950/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-2">About Me</h2>
            <h3 className="text-3xl font-bold text-white tracking-tight mb-6">
              Passionate about creating clean code & intuitive user interfaces.
            </h3>
            <div className="space-y-4 text-slate-300 leading-relaxed text-base">
              <p>
                I am a dedicated frontend developer focusing on building user-centric websites and web applications.
                My goal is to translate design concepts into seamless, pixel-perfect, and accessible digital solutions.
              </p>
              <p>
                With a strong command of modern React patterns, TypeScript type safety, and Tailwind CSS utility styling,
                I enjoy solving problems, optimizing performance, and building interfaces that users love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-left mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-2">Technical Skills</h2>
            <h3 className="text-3xl font-bold text-white tracking-tight">Tools & Technologies</h3>
            <p className="text-slate-400 mt-2">The frontend ecosystem I leverage to turn ideas into reality.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-white text-sm">{skill.name}</h4>
                  <span className="text-xs text-slate-500 mt-1 inline-block">{skill.category}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 border-t border-slate-900 bg-slate-950/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-2">Portfolio</h2>
              <h3 className="text-3xl font-bold text-white tracking-tight">Featured Work</h3>
            </div>
            <a
              href="https://github.com/hurinbsyrii"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 font-medium"
            >
              See more on GitHub <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="flex flex-col rounded-2xl bg-slate-900/60 border border-slate-800/80 overflow-hidden hover:border-slate-700 transition-all group"
              >
                <div className="h-44 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors" />
                  <Code2 className="w-12 h-12 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  {proj.featured && (
                    <span className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300">
                      Featured
                    </span>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                      {proj.title}
                    </h4>
                    <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {proj.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-sm font-medium pt-4 border-t border-slate-800/60">
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white"
                      >
                        <GithubIcon className="w-4 h-4" /> Code
                      </a>
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience / Timeline */}
      <section id="experience" className="py-20 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-2">Career & Path</h2>
            <h3 className="text-3xl font-bold text-white tracking-tight">Experience & Learning</h3>
          </div>

          <div className="max-w-3xl space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-4 sm:gap-6 relative group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500 transition-colors">
                    {item.type === "work" ? <Briefcase className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-slate-800 my-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">{item.year}</span>
                  <h4 className="text-lg font-bold text-white mt-1">{item.role}</h4>
                  <p className="text-sm text-slate-400 font-medium">{item.institution}</p>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 border-t border-slate-900 bg-slate-950/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-2">Get In Touch</h2>
              <h3 className="text-3xl font-bold text-white tracking-tight mb-4">Let&apos;s build something great.</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Whether you have an upcoming project, a freelance opportunity, or simply want to connect, feel free to reach out.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Email Me</p>
                    <a href="mailto:contact@hanadel.dev" className="text-white hover:text-cyan-400 transition-colors font-medium">
                      contact@hanadel.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">GitHub Profile</p>
                    <a
                      href="https://github.com/hurinbsyrii"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-cyan-400 transition-colors font-medium"
                    >
                      github.com/hurinbsyrii
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Frontend Contact Form */}
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-xl font-bold text-white mb-6">Send a Message</h4>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-cyan-950/50 border border-cyan-800/60 text-center flex flex-col items-center">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400 mb-2" />
                  <h5 className="font-semibold text-white">Thank you!</h5>
                  <p className="text-sm text-slate-300 mt-1">Your message has been captured. I will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-1">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-1">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Hi Hanadel, I would like to talk about..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-900 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Hanadel. Built with Next.js, TypeScript & Tailwind CSS.</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/hurinbsyrii/hanadelprofile" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">
              Source Code
            </a>
            <a href="#" className="hover:text-slate-300">
              Back to Top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
