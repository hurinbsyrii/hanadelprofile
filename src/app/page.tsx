"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BookOpen,
  Award,
  Users,
  Compass,
  Trophy,
  Sparkles,
  Heart,
  CheckCircle2,
  Calendar,
  MapPin,
  Mail,
  Send,
  Star,
  Download,
  ExternalLink,
  ChevronRight,
  GraduationCap,
  Medal,
  Palette,
  Laptop,
  MessageSquare,
  ShieldCheck,
  Menu,
  X
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activityFilter, setActivityFilter] = useState("all");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", relationship: "Teacher/School", message: "" });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", relationship: "Teacher/School", message: "" });
    }, 4500);
  };

  const activities = [
    {
      title: "Pandu Puteri Remaja (Girl Guides)",
      category: "uniform",
      categoryName: "Badan Beruniform",
      role: "Patrol Leader (Ketua Patrol)",
      year: "2024 - Present",
      description: "Active member in weekly marching drills (kawad kaki), camping expeditions, outdoor survival skills, and earning community service badges.",
      tags: ["Kawad Kaki", "Camping", "First Aid", "Community Service"],
      badge: "Uniform Body"
    },
    {
      title: "Kelab STEM & Inovasi (STEM & Innovation Club)",
      category: "clubs",
      categoryName: "Kelab & Persatuan",
      role: "Setiausaha (Secretary)",
      year: "2024 - Present",
      description: "Documenting meeting minutes, organizing the annual School Science Week interactive exhibits, and coordinating team participation in state robotics competitions.",
      tags: ["Science Exhibits", "Meeting Minutes", "Innovation", "Robotics"],
      badge: "Club Executive"
    },
    {
      title: "Lembaga Pengawas Sekolah (School Prefects Board)",
      category: "leadership",
      categoryName: "Kepimpinan",
      role: "School Prefect (Pengawas Sekolah)",
      year: "2024 - Present",
      description: "Assisting teachers during daily morning assemblies, upholding student discipline, guiding junior students, and serving as master of ceremonies for school events.",
      tags: ["Discipline", "Morning Assembly", "Emcee", "Mentoring"],
      badge: "Leadership"
    },
    {
      title: "Kelab Bahasa Inggeris (English Language Society)",
      category: "clubs",
      categoryName: "Kelab & Persatuan",
      role: "Active Member & Speaker",
      year: "2023 - Present",
      description: "Participating in public speaking showcases, choral speaking training, vocabulary quizzes, and contributing short stories for the school English bulletin.",
      tags: ["Public Speaking", "Choral Speaking", "Debate", "Writing"],
      badge: "Language & Arts"
    },
    {
      title: "Kelab Badminton & Rumah Sukan (Sports & House)",
      category: "sports",
      categoryName: "Sukan & Permainan",
      role: "School House Athlete (Rumah Sukan)",
      year: "2023 - Present",
      description: "Represented sports house in annual sports day track events and regular intra-school badminton sparring sessions, building physical endurance and team spirit.",
      tags: ["Badminton", "Track & Field", "Sportsmanship", "Team Player"],
      badge: "Athletics"
    },
    {
      title: "School Gotong-Royong & Eco-Garden Team",
      category: "leadership",
      categoryName: "Khidmat Komuniti",
      role: "Student Volunteer",
      year: "2024",
      description: "Collaborated with teachers and peers to plant herbal gardens, install recycling bins, and create informative biological botanical signboards.",
      tags: ["Eco-friendly", "Volunteer", "Green School", "Teamwork"],
      badge: "Community"
    }
  ];

  const filteredActivities = activityFilter === "all"
    ? activities
    : activities.filter((item) => item.category === activityFilter);

  const awards = [
    {
      title: "Anugerah Kecemerlangan Akademik (Academic Excellence)",
      issuedBy: "Sekolah Menengah Kebangsaan",
      year: "2024 & 2025",
      type: "Academic",
      icon: Trophy,
      color: "from-amber-400 to-amber-500",
      description: "Awarded for achieving top 5 ranking in Form 1 & Form 2 with straight A grades in core subjects."
    },
    {
      title: "State STEM Innovation Challenge (Silver Medal)",
      issuedBy: "Jabatan Pendidikan Negeri (JPN)",
      year: "2024",
      type: "STEM & Science",
      icon: Medal,
      color: "from-rose-400 to-rose-500",
      description: "Designed a low-cost automated plant watering prototype using recycled materials and basic sensors."
    },
    {
      title: "Inter-Class Public Speaking Competition — 1st Place",
      issuedBy: "Panitia Bahasa Inggeris",
      year: "2024",
      type: "Language & Arts",
      icon: Award,
      color: "from-fuchsia-400 to-rose-400",
      description: "Delivered a winning 5-minute speech titled 'The Youth of Tomorrow in a Digital World'."
    },
    {
      title: "Sijil Pelantikan Pengawas Sekolah (School Prefect)",
      issuedBy: "Unit Hal Ehwal Murid (HEM)",
      year: "2024 - 2026",
      type: "Leadership",
      icon: ShieldCheck,
      color: "from-pink-400 to-rose-500",
      description: "Officially commissioned as a school prefect following rigorous leadership screening and teacher recommendations."
    },
    {
      title: "Anugerah NILAM (Nadi Ilmu Amalan Membaca) — Gold Level",
      issuedBy: "Pusat Sumber Sekolah",
      year: "2023 - 2024",
      type: "Reading & Research",
      icon: BookOpen,
      color: "from-purple-400 to-pink-500",
      description: "Surpassed 200 reviewed book entries across both Bahasa Melayu and English literature genres."
    },
    {
      title: "Pertandingan Kawad Kaki Pandu Puteri (Best Squad Member)",
      issuedBy: "Unit Kokurikulum Sekolah",
      year: "2024",
      type: "Co-Curriculum",
      icon: Star,
      color: "from-rose-400 to-amber-400",
      description: "Commended for precision, posture, and discipline in the annual school uniformed bodies parade."
    }
  ];

  const highlights = [
    {
      title: "STEM Eco-Water Filtration Model",
      category: "Science Fair Project",
      summary: "Collaborative science project demonstrating how natural sedimentary layers filter household greywater for garden use.",
      skills: ["Scientific Method", "Teamwork", "Prototype Design"]
    },
    {
      title: "English Month Choral Speaking",
      category: "School Performance",
      summary: "Contributed script ideas and performed as lead voice in the inter-house choral speaking showcase during English Week.",
      skills: ["Vocal Projection", "Memorization", "Public Performance"]
    },
    {
      title: "School Prefects Leadership Camp",
      category: "Leadership Development",
      summary: "3-day intensive camp on problem solving, crowd control, conflict resolution, and peer empathy conducted by school counsellors.",
      skills: ["Leadership", "Crisis Management", "Communication"]
    },
    {
      title: "Classroom Interactive Bulletin Board",
      category: "Creative & Arts",
      summary: "Designed and updated monthly educational charts, motivational quotes, and study tips for classmates using Canva graphics.",
      skills: ["Canva", "Visual Layout", "Organization"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fff8fa] text-[#2d1822] font-sans selection:bg-[#e07a97] selection:text-white">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400 text-white text-xs font-semibold py-2 px-4 text-center tracking-wide shadow-sm flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 animate-pulse" />
        <span>Hana Delisha binti Nazri • Form 3 Secondary Student Portfolio • Tingkatan 3</span>
        <Sparkles className="w-3.5 h-3.5 animate-pulse" />
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/85 border-b border-rose-100/80 shadow-xs">
        <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-400 to-pink-500 flex items-center justify-center font-bold text-white shadow-md shadow-rose-300/30 group-hover:scale-105 transition-transform">
              <span className="font-script text-2xl pt-1">H</span>
            </div>
            <div className="flex flex-col">
              <span className="font-script text-rose-500 text-2xl leading-none font-bold">Hana</span>
              <span className="font-bold text-xs tracking-[0.2em] text-slate-700 uppercase -mt-0.5">
                DELISHA<span className="text-rose-500">.</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-wider text-slate-600 uppercase">
            <a href="#about" className="hover:text-rose-500 transition-colors">About Me</a>
            <a href="#education" className="hover:text-rose-500 transition-colors">Education</a>
            <a href="#activities" className="hover:text-rose-500 transition-colors">Activities</a>
            <a href="#achievements" className="hover:text-rose-500 transition-colors">Achievements</a>
            <a href="#highlights" className="hover:text-rose-500 transition-colors">Highlights</a>
            <a href="#skills" className="hover:text-rose-500 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-rose-500 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 text-xs font-bold rounded-full bg-rose-500 hover:bg-rose-600 text-white transition-all shadow-md shadow-rose-300/40 uppercase tracking-wider"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-rose-600 hover:bg-rose-50 transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-rose-100 bg-white/95 backdrop-blur-md px-6 py-4 flex flex-col gap-3 text-sm font-semibold text-slate-700">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-rose-500 py-1">About Me</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)} className="hover:text-rose-500 py-1">Education Background</a>
            <a href="#activities" onClick={() => setMobileMenuOpen(false)} className="hover:text-rose-500 py-1">School Activities (Kokurikulum)</a>
            <a href="#achievements" onClick={() => setMobileMenuOpen(false)} className="hover:text-rose-500 py-1">Achievements & Awards</a>
            <a href="#highlights" onClick={() => setMobileMenuOpen(false)} className="hover:text-rose-500 py-1">Project Highlights</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="hover:text-rose-500 py-1">Skills & Talents</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-rose-500 py-1">Contact</a>
          </div>
        )}
      </header>

      {/* HERO SECTION (Styled after Riley Belmont UGC slide 1) */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        {/* Soft pink ambient background shapes */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-pink-200/30 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold tracking-wider uppercase mb-5 border border-rose-200">
                <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                Secondary School Student Portfolio
              </div>

              {/* Editorial Name Title mimicking the reference slide */}
              <div className="mb-4">
                <span className="font-script text-rose-500 text-6xl sm:text-7xl md:text-8xl font-bold block drop-shadow-xs">
                  Hana
                </span>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-800 uppercase mt-[-10px] sm:mt-[-16px]">
                  DELISHA
                </h1>
                <p className="text-xs sm:text-sm font-bold tracking-[0.25em] text-rose-600 uppercase mt-2">
                  BINTI NAZRI • 15 YEARS OLD • FORM 3
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
                Welcome to my student portfolio! I am a passionate Form 3 secondary school student
                striving for academic excellence, active leadership in the Prefects Board, and enthusiastic participation in STEM innovation and co-curricular pursuits.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-10">
                <a
                  href="#activities"
                  className="px-6 py-3 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-rose-300/40 inline-flex items-center gap-2"
                >
                  School Activities <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href="#education"
                  className="px-6 py-3 rounded-full bg-white hover:bg-rose-50 text-rose-700 font-bold text-xs uppercase tracking-wider border border-rose-200 transition-colors shadow-xs inline-flex items-center gap-2"
                >
                  Education Journey
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-rose-500" /> Let&apos;s Connect
                </a>
              </div>

              {/* Quick Secondary School Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-rose-100">
                <div className="p-3.5 rounded-2xl bg-white border border-rose-100 shadow-xs">
                  <p className="text-2xl sm:text-3xl font-extrabold text-rose-500">15</p>
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Years Old</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-rose-100 shadow-xs">
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-800">Form 3</p>
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Tingkatan 3</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-rose-100 shadow-xs">
                  <p className="text-2xl sm:text-3xl font-extrabold text-rose-400">Top 5</p>
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Class Rank</p>
                </div>
              </div>
            </div>

            {/* Right Column: Photo Frame with Offset Pink Backdrop (Directly replicating reference visual) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 sm:w-80 md:w-88">
                {/* Offset Pink Backdrop Rectangle */}
                <div className="absolute top-4 -right-4 w-full h-full rounded-3xl bg-rose-300/70 -z-10 transform translate-x-2 translate-y-2" />
                <div className="absolute -top-3 -left-3 w-20 h-20 bg-pink-100 rounded-full -z-10" />

                {/* Main Card Frame */}
                <div className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-lg border border-rose-100">
                  <div className="relative w-full h-[410px] rounded-2xl overflow-hidden bg-rose-50 flex items-center justify-center">
                    {/* Stylized student avatar image */}
                    <img
                      src="/student-avatar.svg"
                      alt="Hana Delisha binti Nazri - Secondary School Student"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating Badge 1: Prefect */}
                  <div className="absolute top-7 left-6 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-rose-100 shadow-md flex items-center gap-1.5 text-xs font-bold text-slate-800">
                    <ShieldCheck className="w-4 h-4 text-amber-500" />
                    <span>School Prefect</span>
                  </div>

                  {/* Floating Badge 2: STEM Secretary */}
                  <div className="absolute bottom-8 right-6 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-rose-100 shadow-md flex items-center gap-1.5 text-xs font-bold text-slate-800">
                    <Trophy className="w-4 h-4 text-rose-500" />
                    <span>STEM Innovator</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION (Inspired by Slide 2: Pink card with rounded corners & clean text) */}
      <section id="about" className="py-20 border-t border-rose-100/80 bg-white/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-br from-[#eb8ca5] via-[#df7592] to-[#d66584] text-white p-8 sm:p-12 md:p-16 shadow-lg shadow-rose-300/30 relative overflow-hidden">
            {/* Background decorative circles */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white/10 rounded-full pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
              
              {/* Text side */}
              <div className="lg:col-span-7">
                <span className="font-script text-white/90 text-3xl sm:text-4xl block mb-1">Get to know me</span>
                <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-wider text-white mb-6">
                  ABOUT ME
                </h2>

                <div className="space-y-4 text-white/95 text-sm sm:text-base leading-relaxed font-normal">
                  <p>
                    Hello and warm greetings! I am <strong className="font-bold underline decoration-white/50 underline-offset-4">Hana Delisha binti Nazri</strong>, a 15-year-old student currently in <strong>Form 3 (Tingkatan 3)</strong> in secondary school.
                  </p>
                  <p>
                    As a secondary school student, I believe in nurturing both intellectual curiosity and character. I maintain high academic standards while serving with pride as a <strong>School Prefect (Pengawas Sekolah)</strong>, representing my school in STEM challenges, and engaging actively in uniformed bodies and clubs.
                  </p>
                  <p>
                    My favorite subjects include <strong>Science, Mathematics, and English</strong>. When not studying for assessments, I enjoy reading literature, designing digital presentations in Canva, playing badminton, and exploring science experiments.
                  </p>
                </div>

                {/* Key Student Traits */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
                  <div className="p-3 rounded-2xl bg-white/15 backdrop-blur-xs border border-white/20">
                    <Heart className="w-5 h-5 text-white mb-1" />
                    <p className="font-bold text-xs uppercase tracking-wider text-white">Dedicated</p>
                    <p className="text-[11px] text-white/80">Consistent Learner</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/15 backdrop-blur-xs border border-white/20">
                    <Users className="w-5 h-5 text-white mb-1" />
                    <p className="font-bold text-xs uppercase tracking-wider text-white">Leader</p>
                    <p className="text-[11px] text-white/80">School Prefect</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/15 backdrop-blur-xs border border-white/20 col-span-2 sm:col-span-1">
                    <Sparkles className="w-5 h-5 text-white mb-1" />
                    <p className="font-bold text-xs uppercase tracking-wider text-white">Creative</p>
                    <p className="text-[11px] text-white/80">Design & STEM</p>
                  </div>
                </div>
              </div>

              {/* Student Profile Quick Info Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-white text-slate-800 p-6 sm:p-8 shadow-md border border-rose-100">
                  <h3 className="font-black text-sm uppercase tracking-wider text-rose-600 mb-4 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-rose-500" />
                    Student Profile Card
                  </h3>

                  <div className="space-y-3.5 text-xs divide-y divide-rose-50">
                    <div className="pt-2 flex justify-between items-center">
                      <span className="font-semibold text-slate-500 uppercase tracking-wide">Full Name</span>
                      <span className="font-bold text-slate-800 text-right">Hana Delisha binti Nazri</span>
                    </div>

                    <div className="pt-2 flex justify-between items-center">
                      <span className="font-semibold text-slate-500 uppercase tracking-wide">Age</span>
                      <span className="font-bold text-slate-800">15 Years Old</span>
                    </div>

                    <div className="pt-2 flex justify-between items-center">
                      <span className="font-semibold text-slate-500 uppercase tracking-wide">Current Level</span>
                      <span className="font-bold text-rose-600">Form 3 (Tingkatan 3)</span>
                    </div>

                    <div className="pt-2 flex justify-between items-center">
                      <span className="font-semibold text-slate-500 uppercase tracking-wide">School Roles</span>
                      <span className="font-bold text-slate-800 text-right">School Prefect • Club Secretary</span>
                    </div>

                    <div className="pt-2 flex justify-between items-center">
                      <span className="font-semibold text-slate-500 uppercase tracking-wide">Uniform Body</span>
                      <span className="font-bold text-slate-800">Pandu Puteri Remaja</span>
                    </div>

                    <div className="pt-2 flex justify-between items-center">
                      <span className="font-semibold text-slate-500 uppercase tracking-wide">Languages</span>
                      <span className="font-bold text-slate-800 text-right">Bahasa Melayu & English</span>
                    </div>

                    <div className="pt-2 flex justify-between items-center">
                      <span className="font-semibold text-slate-500 uppercase tracking-wide">Future Goal</span>
                      <span className="font-bold text-slate-800 text-right">Pure Science / STEM Stream</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-rose-100 text-center">
                    <span className="inline-block text-[11px] font-semibold text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
                      🌱 &ldquo;Striving for excellence with humility and purpose.&rdquo;
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION BACKGROUND SECTION */}
      <section id="education" className="py-20 border-t border-rose-100/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-script text-rose-500 text-3xl font-bold">Academic Journey</span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-wider text-slate-800 mt-1">
              EDUCATION BACKGROUND
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              My educational foundation from primary school to ongoing secondary school achievements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Secondary School Card */}
            <div className="p-8 rounded-3xl bg-white border border-rose-100 shadow-sm hover:shadow-md transition-shadow relative">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full bg-rose-500 text-white text-[11px] font-bold tracking-wider uppercase">
                Current School
              </span>
              <h3 className="text-xl font-bold text-slate-800 mt-4">Sekolah Menengah Kebangsaan (SMK)</h3>
              <p className="text-xs font-semibold text-rose-600 uppercase tracking-wider mt-1">
                2024 - Present • Form 1, Form 2 & Form 3 (Current)
              </p>
              
              <ul className="mt-5 space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Top 5 in Form</strong> — Consistently maintaining Band 5 & 6 (TP5/TP6) in Ujian Akhir Sesi Akademik (UASA).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Anugerah Kecemerlangan Akademik</strong> recipient for overall top academic performer in Tingkatan 1 & 2.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Appointed School Prefect</strong> — Serving in student discipline, assembly leadership, and school event moderation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Preparing for upper secondary <strong>Pure Science / STEM Stream</strong> (Biology, Chemistry, Physics, Add Maths).</span>
                </li>
              </ul>
            </div>

            {/* Primary School Card */}
            <div className="p-8 rounded-3xl bg-white border border-rose-100 shadow-sm hover:shadow-md transition-shadow relative">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-[11px] font-bold tracking-wider uppercase">
                Primary Foundation
              </span>
              <h3 className="text-xl font-bold text-slate-800 mt-4">Sekolah Kebangsaan (SK)</h3>
              <p className="text-xs font-semibold text-pink-600 uppercase tracking-wider mt-1">
                2018 - 2023 • Standard 1 to Standard 6 (Tahun 1 - 6)
              </p>
              
              <ul className="mt-5 space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                  <span><strong>Pentaksiran Bilik Darjah (PBD)</strong> — Achieved Tahap Penguasaan 6 (TP6) overall grade in final year.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                  <span><strong>Ketua Darjah (Class Monitor)</strong> & Library Prefect (Pengawas Pusat Sumber).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                  <span>Represented school in district-level Choral Speaking and Public Speaking competitions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                  <span>Active player in school badminton squad and environmental green club.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Academic Subject Strengths */}
          <div className="mt-12 p-8 rounded-3xl bg-rose-50/70 border border-rose-100 max-w-4xl mx-auto">
            <h3 className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-6 text-center">
              Core Academic Focus & Subject Strengths
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 rounded-2xl bg-white border border-rose-100">
                <span className="text-2xl font-bold text-slate-800">🔬 Science</span>
                <p className="text-xs font-bold text-rose-500 mt-1">TP6 / Grade A</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Inquiry & Experiments</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-rose-100">
                <span className="text-2xl font-bold text-slate-800">📐 Maths</span>
                <p className="text-xs font-bold text-rose-500 mt-1">TP6 / Grade A</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Algebra & Problem Solving</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-rose-100">
                <span className="text-2xl font-bold text-slate-800">🗣️ English</span>
                <p className="text-xs font-bold text-rose-500 mt-1">CEFR B2 Level</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Speech & Literature</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-rose-100">
                <span className="text-2xl font-bold text-slate-800">💻 RBT / Tech</span>
                <p className="text-xs font-bold text-rose-500 mt-1">TP6 / Grade A</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Design & Technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHOOL ACTIVITIES & CO-CURRICULUM (KOKURIKULUM) */}
      <section id="activities" className="py-20 border-t border-rose-100/80 bg-white/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-script text-rose-500 text-3xl font-bold">School Life & Kokurikulum</span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-wider text-slate-800 mt-1">
                ACTIVITIES & CO-CURRICULAR
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Active involvement across Uniformed Bodies, Clubs & Societies, Sports, and Leadership.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Activities" },
                { id: "uniform", label: "Uniform Body" },
                { id: "clubs", label: "Clubs & Societies" },
                { id: "leadership", label: "Leadership" },
                { id: "sports", label: "Sports" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActivityFilter(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activityFilter === tab.id
                      ? "bg-rose-500 text-white shadow-sm"
                      : "bg-white text-slate-600 hover:bg-rose-50 border border-rose-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Activities Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredActivities.map((act, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-white border border-rose-100/80 shadow-xs hover:shadow-md hover:border-rose-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-100 uppercase tracking-wider">
                      {act.badge}
                    </span>
                    <span className="text-xs text-slate-600 font-medium">{act.year}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-rose-600 transition-colors">
                    {act.title}
                  </h3>
                  
                  <p className="text-xs font-semibold text-rose-500 uppercase tracking-wide mt-1">
                    {act.role}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mt-3">
                    {act.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-rose-50 flex flex-wrap gap-1.5">
                  {act.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-rose-50 text-rose-700">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* PAJSK Grade Highlight Box */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-rose-50 via-pink-50 to-rose-50 border border-rose-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold text-xl shadow-xs">
                A
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-800 uppercase tracking-wide">PAJSK Co-Curricular Assessment</h4>
                <p className="text-xs text-slate-600">Grade A standing with 100% attendance and high participation points.</p>
              </div>
            </div>
            <a
              href="#achievements"
              className="text-xs font-bold text-rose-600 hover:text-rose-700 uppercase tracking-wider inline-flex items-center gap-1"
            >
              View Awards & Certificates <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* AWARDS & ACHIEVEMENTS */}
      <section id="achievements" className="py-20 border-t border-rose-100/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-script text-rose-500 text-3xl font-bold">Honors & Accolades</span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-wider text-slate-800 mt-1">
              AWARDS & ACHIEVEMENTS
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Recognitions earned through academic excellence, competitions, leadership, and reading endeavors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, i) => {
              const Icon = award.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-white border border-rose-100 shadow-xs hover:shadow-md hover:border-rose-200 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${award.color} text-white flex items-center justify-center shadow-xs`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                        {award.year}
                      </span>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500 block mb-1">
                      {award.type}
                    </span>

                    <h3 className="font-bold text-sm text-slate-800 leading-snug">
                      {award.title}
                    </h3>

                    <p className="text-[11px] font-medium text-slate-500 mt-1">
                      Issued by: {award.issuedBy}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed mt-3">
                      {award.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-rose-50 flex items-center justify-between text-[11px] text-rose-600 font-semibold">
                    <span>Verified School Certificate</span>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS & SCHOOL PROJECTS (Inspired by Slide 3 "MY WORK" & Slide 7 "PREVIOUS PROJECTS") */}
      <section id="highlights" className="py-20 border-t border-rose-100/80 bg-white/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-script text-rose-500 text-3xl font-bold">Featured Experiences</span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-wider text-slate-800 mt-1">
              SCHOOL PROJECT HIGHLIGHTS
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Key hands-on projects, performances, and leadership initiatives undertaken during secondary school.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((proj, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-rose-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-600 px-3 py-1 rounded-full bg-rose-50">
                    {proj.category}
                  </span>
                  <span className="text-xs text-slate-600 font-mono">0{idx + 1}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {proj.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {proj.summary}
                </p>

                <div className="pt-4 border-t border-rose-50 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-semibold text-slate-600 mr-2">Skills Practiced:</span>
                  {proj.skills.map((s, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-rose-100/80 text-rose-800 font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS & TALENTS (Inspired by Slide 5 "SKILL & EXPERTISE") */}
      <section id="skills" className="py-20 border-t border-rose-100/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-r from-rose-50 via-pink-50 to-rose-50 border border-rose-200 p-8 sm:p-12 mb-12 text-center max-w-4xl mx-auto">
            <span className="font-script text-rose-500 text-3xl font-bold">Strengths & Abilities</span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-wider text-slate-800 mt-1">
              SKILLS & TALENTS
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-xl mx-auto">
              A balanced blend of academic curiosity, interpersonal leadership, digital literacy, and creative expression.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Column 1: Academic & Cognitive */}
            <div className="p-6 rounded-3xl bg-white border border-rose-100 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm uppercase tracking-wide text-slate-800 mb-3">Academic Mindset</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  Mathematical Reasoning
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  Scientific Inquiry & Labs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  Essay Writing & Analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  Rapid Reading & Research
                </li>
              </ul>
            </div>

            {/* Column 2: Leadership & Interpersonal */}
            <div className="p-6 rounded-3xl bg-white border border-rose-100 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm uppercase tracking-wide text-slate-800 mb-3">Leadership & Public</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                  Public Speaking & Emcee
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                  Assembly Moderation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                  Team Collaboration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                  Time Management
                </li>
              </ul>
            </div>

            {/* Column 3: Creative & Digital */}
            <div className="p-6 rounded-3xl bg-white border border-rose-100 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-fuchsia-100 text-fuchsia-600 flex items-center justify-center mb-4">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm uppercase tracking-wide text-slate-800 mb-3">Creative & Digital</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
                  Canva Presentation Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
                  Infographic & Posters
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
                  Basic Video Editing (CapCut)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
                  Introductory Coding (HTML/Scratch)
                </li>
              </ul>
            </div>

            {/* Column 4: Languages & Communication */}
            <div className="p-6 rounded-3xl bg-white border border-rose-100 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm uppercase tracking-wide text-slate-800 mb-3">Languages</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  Bahasa Melayu (Native / C2)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  English (Fluent / CEFR B2)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  Basic School Arabic
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  Choral & Stage Reading
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TEACHER & MENTOR COMMENDATIONS (Inspired by Slide 6 "ANALYTICS / REVIEWS") */}
      <section className="py-20 border-t border-rose-100/80 bg-white/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-script text-rose-500 text-3xl font-bold">Feedback & Commendations</span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-wider text-slate-800 mt-1">
              TEACHER & MENTOR NOTES
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Feedback from educators and club advisors on classroom conduct, responsibility, and team contributions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-rose-100 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  &ldquo;Hana Delisha is an exceptionally attentive and courteous student. She consistently asks thoughtful questions in science and supports her peers with patience during group work.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-rose-50">
                <p className="text-xs font-bold text-slate-800">Cikgu Rohana</p>
                <p className="text-[11px] text-rose-500">Form Teacher & Science Educator</p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-rose-100 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  &ldquo;As Secretary of the STEM Club, Hana manages meeting agendas and club documentation with great maturity. Her reliability makes every club event seamless.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-rose-50">
                <p className="text-xs font-bold text-slate-800">Ustaz / Cikgu Azman</p>
                <p className="text-[11px] text-rose-500">STEM & Innovation Club Advisor</p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-rose-100 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  &ldquo;Hana carries out her school prefect duties with quiet confidence, fairness, and exemplary discipline. She is a wonderful role model for junior students.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-rose-50">
                <p className="text-xs font-bold text-slate-800">Puan Noraini</p>
                <p className="text-[11px] text-rose-500">Prefects Disciplinary Board Head</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LET'S CONNECT / CONTACT SECTION (Inspired by Slide 8 & 9 "LET'S WORK TOGETHER") */}
      <section id="contact" className="py-20 border-t border-rose-100/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl bg-white border border-rose-200 p-8 sm:p-12 md:p-16 shadow-lg shadow-rose-100 relative overflow-hidden">
            {/* Top decorative pink bar */}
            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400" />

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Info Column */}
              <div className="lg:col-span-6">
                <span className="font-script text-rose-500 text-3xl font-bold">Reach Out</span>
                <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-wider text-slate-800 mt-1 mb-4">
                  LET&apos;S CONNECT
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-8">
                  Whether you are a teacher, school club coordinator, fellow student, or competition organizer looking to collaborate on academic or co-curricular projects, feel free to send a note!
                </p>

                <div className="space-y-4 text-xs">
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-rose-50/80 border border-rose-100 text-slate-700">
                    <div className="w-9 h-9 rounded-xl bg-rose-500 text-white flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">Student Contact Email</p>
                      <a href="mailto:hana.delisha@schoolmail.my" className="text-rose-600 hover:underline">
                        hana.delisha@schoolmail.my
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-rose-50/80 border border-rose-100 text-slate-700">
                    <div className="w-9 h-9 rounded-xl bg-pink-500 text-white flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">School & Location</p>
                      <p className="text-slate-600">Selangor / Kuala Lumpur, Malaysia</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-rose-50/80 border border-rose-100 text-slate-700">
                    <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">Supervision Notice</p>
                      <p className="text-slate-600">Communications are monitored by parents & school educators.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form Column */}
              <div className="lg:col-span-6">
                <div className="p-6 sm:p-8 rounded-3xl bg-[#fff9fa] border border-rose-100">
                  <h3 className="font-bold text-base text-slate-800 mb-1">Send a Message or Note</h3>
                  <p className="text-xs text-slate-500 mb-6">Leave an encouraging message, feedback, or project inquiry.</p>

                  {formSubmitted ? (
                    <div className="p-6 rounded-2xl bg-rose-100 border border-rose-300 text-center flex flex-col items-center">
                      <CheckCircle2 className="w-10 h-10 text-rose-600 mb-2" />
                      <h4 className="font-bold text-slate-800 text-sm">Thank you very much!</h4>
                      <p className="text-xs text-slate-600 mt-1">
                        Your message has been received. Hana will reply promptly with parent/teacher supervision.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Your Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          placeholder="e.g. Cikgu Faridah / Classmate Sarah"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-rose-200 focus:border-rose-500 focus:outline-none text-xs text-slate-800"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            required
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-white border border-rose-200 focus:border-rose-500 focus:outline-none text-xs text-slate-800"
                          />
                        </div>

                        <div>
                          <label htmlFor="relationship" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Role / Connection
                          </label>
                          <select
                            id="relationship"
                            value={formData.relationship}
                            onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-white border border-rose-200 focus:border-rose-500 focus:outline-none text-xs text-slate-800"
                          >
                            <option value="Teacher/School">Teacher / Educator</option>
                            <option value="Classmate/Peer">Classmate / Peer</option>
                            <option value="Competition Organizer">Competition Organizer</option>
                            <option value="Parent/Family">Parent / Relative</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Message / Note
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          required
                          placeholder="Hi Hana Delisha, congratulations on your achievements..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-rose-200 focus:border-rose-500 focus:outline-none text-xs text-slate-800 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-rose-300/40 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        Send Note
                      </button>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-rose-100 bg-white text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-script text-rose-500 text-xl font-bold">Hana Delisha</span>
            <span className="text-slate-300">•</span>
            <span>Secondary School Student Portfolio (15 Years Old)</span>
          </div>
          <div className="flex items-center gap-6 text-[11px] font-semibold text-slate-600">
            <a href="#about" className="hover:text-rose-500">About</a>
            <a href="#education" className="hover:text-rose-500">Education</a>
            <a href="#activities" className="hover:text-rose-500">Kokurikulum</a>
            <a href="#contact" className="hover:text-rose-500">Contact</a>
            <a href="#" className="hover:text-rose-500 text-rose-600">Back to Top ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
