"use client";

import { useState } from "react";
import {
  Trophy,
  Award,
  Medal,
  Star,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  BookOpen,
  GraduationCap,
  Users,
  Send,
  Mail,
  MapPin,
  ArrowRight,
  ChevronRight,
  Menu,
  X,
  Compass,
  Palette,
  Heart
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activityFilter, setActivityFilter] = useState("all");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", role: "Teacher/School", message: "" });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", role: "Teacher/School", message: "" });
    }, 4500);
  };

  const activities = [
    {
      tabLabel: "BADAN BERUNIFORM",
      title: "Pandu Puteri Remaja (Girl Guides)",
      category: "uniform",
      role: "Patrol Leader (Ketua Patrol)",
      year: "2024 - Present",
      description: "Active leader in weekly marching drills (kawad kaki), camping expeditions, outdoor survival skills, and earning community service badges.",
      bulletPoints: [
        "Led squad of 12 members in annual march-past drill",
        "Completed first-aid and outdoor knotting certifications",
        "Participated in state-level Girl Guides community camps"
      ],
      tags: ["Kawad Kaki", "Camping", "First Aid", "Leadership"]
    },
    {
      tabLabel: "KELAB & PERSATUAN",
      title: "Kelab STEM & Inovasi (STEM & Innovation Club)",
      category: "clubs",
      role: "Setiausaha (Secretary)",
      year: "2024 - Present",
      description: "Documenting official meeting agendas and minutes, organizing School Science Week exhibitions, and coordinating robotics challenge entries.",
      bulletPoints: [
        "Prepared comprehensive monthly activity documentation",
        "Managed interactive demonstration booth during STEM Day",
        "Co-designed automated greywater filtration model"
      ],
      tags: ["Science Exhibits", "Meeting Minutes", "Innovation", "Robotics"]
    },
    {
      tabLabel: "KEPIMPINAN",
      title: "Lembaga Pengawas Sekolah (Prefects Board)",
      category: "leadership",
      role: "School Prefect (Pengawas Sekolah)",
      year: "2024 - Present",
      description: "Assisting teachers with daily morning assemblies, maintaining school discipline, welcoming guest dignitaries, and mentoring junior Form 1 students.",
      bulletPoints: [
        "Master of Ceremonies (Emcee) for weekly school assembly",
        "Monitored student compliance and punctuality records",
        "Completed 3-day Prefects Leadership & Crisis Camp"
      ],
      tags: ["Discipline", "Emcee", "Assembly", "Mentorship"]
    },
    {
      tabLabel: "KELAB & PERSATUAN",
      title: "Kelab Bahasa Inggeris (English Language Society)",
      category: "clubs",
      role: "Active Member & Orator",
      year: "2023 - Present",
      description: "Participating in public speaking competitions, choral speaking performances, vocabulary bees, and writing for the school English journal.",
      bulletPoints: [
        "1st Place in Inter-Class English Public Speaking 2024",
        "Lead voice performer for English Week Choral Speaking",
        "Organized English language scrabble & spelling bees"
      ],
      tags: ["Public Speaking", "Choral Speaking", "Debate", "Writing"]
    },
    {
      tabLabel: "SUKAN & PERMAINAN",
      title: "Kelab Badminton & Rumah Sukan (Sports House)",
      category: "sports",
      role: "School House Athlete (Rumah Sukan)",
      year: "2023 - Present",
      description: "Represented school sports house in annual sports day track events and participated in regular intra-school badminton sparring sessions.",
      bulletPoints: [
        "Represented sports house in 4x100m relay & 100m sprint",
        "Regular doubles sparring in weekly badminton training",
        "Demonstrated sportsmanship, discipline, and endurance"
      ],
      tags: ["Badminton", "Track & Field", "Sportsmanship", "Team Player"]
    },
    {
      tabLabel: "KHIDMAT KOMUNITI",
      title: "School Gotong-Royong & Eco-Garden Project",
      category: "leadership",
      role: "Student Volunteer Leader",
      year: "2024",
      description: "Collaborated with teachers and peers to plant herbal botanical gardens, maintain recycling corners, and design educational botanical signs.",
      bulletPoints: [
        "Planted and labeled 20+ species of native medicinal herbs",
        "Designed graphic informational plant tags using Canva",
        "Promoted zero-waste awareness among secondary students"
      ],
      tags: ["Eco-friendly", "Volunteer", "Green School", "Community"]
    }
  ];

  const filteredActivities = activityFilter === "all"
    ? activities
    : activities.filter((item) => item.category === activityFilter);

  const awards = [
    {
      title: "TOP 5 IN FORM — ANUGERAH KECEMERLANGAN AKADEMIK",
      subtitle: "Academic Excellence Award",
      issuedBy: "Sekolah Menengah Kebangsaan (SMK)",
      year: "2024 & 2025",
      type: "Academic",
      rating: 5,
      description: "Recognized as top 5 academic achiever across the entire Form 1 & Form 2 cohort with consistent Band 5/6 (TP5/TP6) marks in Science, Mathematics, and Languages."
    },
    {
      title: "STATE STEM INNOVATION CHALLENGE — SILVER MEDAL",
      subtitle: "State-Level STEM Competition",
      issuedBy: "Jabatan Pendidikan Negeri (JPN)",
      year: "2024",
      type: "STEM & Science",
      rating: 5,
      description: "Researched, assembled, and demonstrated an eco-friendly domestic water filtration prototype using layered activated charcoal, quartz sand, and river gravel."
    },
    {
      title: "INTER-CLASS ENGLISH PUBLIC SPEAKING — 1ST PLACE CHAMPION",
      subtitle: "Public Speaking Showcase",
      issuedBy: "Panitia Bahasa Inggeris SMK",
      year: "2024",
      type: "Language & Arts",
      rating: 5,
      description: "Awarded 1st Place for delivering a compelling 5-minute speech titled 'The Youth of Tomorrow in a Digital World', praised for articulation, stage presence, and poise."
    },
    {
      title: "WATIKAH PELANTIKAN PENGAWAS SEKOLAH — APPOINTED PREFECT",
      subtitle: "Official Disciplinary Board Credential",
      issuedBy: "Unit Hal Ehwal Murid (HEM)",
      year: "2024 - 2026",
      type: "Leadership",
      rating: 5,
      description: "Formally commissioned into the School Prefects Board following evaluation of academic standing, moral character, and teacher recommendations."
    },
    {
      title: "ANUGERAH NILAM (NADI ILMU AMALAN MEMBACA) — GOLD LEVEL",
      subtitle: "National Reading Campaign",
      issuedBy: "Pusat Sumber Sekolah",
      year: "2023 - 2024",
      type: "Reading & Research",
      rating: 5,
      description: "Surpassed 200 thoroughly reviewed book entries in both Bahasa Melayu and English literature, earning the prestigious Gold Reader Badge."
    },
    {
      title: "PERBARISAN KAWAD KAKI PANDU PUTERI — BEST SQUAD MEMBER",
      subtitle: "Annual Uniformed Parade",
      issuedBy: "Unit Kokurikulum SMK",
      year: "2024",
      type: "Co-Curriculum",
      rating: 5,
      description: "Commended by uniformed body advisors for precision timing, uniform cleanliness, drill discipline, and leadership during the inter-unit marching parade."
    }
  ];

  return (
    <div className="min-h-screen bg-[#3d121e] text-[#f5eee6] font-sans selection:bg-[#dfb0ba] selection:text-[#3d121e]">
      {/* Top Announcement Bar */}
      <div className="bg-[#2d0a15] text-[#dfb0ba] text-[11px] font-bold tracking-[0.2em] uppercase py-2 px-4 text-center border-b border-[#4d1827] flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#dfb0ba]" />
        <span>HANA DELISHA BINTI NAZRI • SECONDARY SCHOOL PORTFOLIO • TINGKATAN 3 • AGE 15</span>
        <Sparkles className="w-3.5 h-3.5 text-[#dfb0ba]" />
      </div>

      {/* Main Navigation (Deep Burgundy style) */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#3d121e]/90 border-b border-[#521c2b]">
        <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="flex flex-col">
              <span className="font-black text-lg tracking-wider text-[#f5eee6] uppercase">
                HANA DELISHA<span className="text-[#dfb0ba]">.</span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#dfb0ba] uppercase -mt-1">
                STUDENT PORTFOLIO
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-[11px] font-extrabold tracking-[0.2em] text-[#dfb0ba] uppercase">
            <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
            <a href="#education" className="hover:text-white transition-colors">EDUCATION</a>
            <a href="#activities" className="hover:text-white transition-colors">KOKURIKULUM</a>
            <a href="#achievements" className="hover:text-white transition-colors">ACHIEVEMENTS</a>
            <a href="#skills" className="hover:text-white transition-colors">SKILLS</a>
            <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="px-6 py-2.5 text-xs font-black rounded-full bg-[#dfb0ba] hover:bg-white text-[#3d121e] transition-all shadow-md uppercase tracking-wider"
            >
              GET IN TOUCH
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#dfb0ba] hover:bg-[#4d1827]"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#2d0a15] border-b border-[#521c2b] px-6 py-4 flex flex-col gap-3 text-xs font-bold tracking-widest uppercase text-[#dfb0ba]">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">ABOUT</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">EDUCATION</a>
            <a href="#activities" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">KOKURIKULUM</a>
            <a href="#achievements" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">ACHIEVEMENTS</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">SKILLS</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">CONTACT</a>
          </div>
        )}
      </header>

      {/* HERO SECTION (Directly mimicking "TURN UP the HEAT." & "OUR CLASSES") */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden bg-[#3d121e]">
        {/* Soft atmospheric gradients */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#5a1c2d] rounded-full blur-[140px] pointer-events-none opacity-50" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#2d0a15] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Big Bold Typography */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4d1827] text-[#dfb0ba] text-[11px] font-extrabold tracking-[0.25em] uppercase mb-6 border border-[#662034]">
                <span className="w-2 h-2 rounded-full bg-[#dfb0ba] animate-pulse" />
                FORM 3 SECONDARY STUDENT • AGE 15
              </div>

              {/* Giant mixed serif/sans headline */}
              <div className="mb-6">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#f5eee6] leading-[0.95]">
                  STUDENT.
                  <br />
                  LEADER.
                  <br />
                  <span className="font-serif-italic font-normal text-[#dfb0ba] lowercase text-5xl sm:text-7xl md:text-8xl tracking-normal">
                    and
                  </span>{" "}
                  ACHIEVER.
                </h1>
                <p className="text-sm font-extrabold tracking-[0.3em] text-[#dfb0ba] uppercase mt-4">
                  HANA DELISHA BINTI NAZRI
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#e5d8cf] leading-relaxed max-w-xl mb-8 font-medium">
                Welcome to my student portfolio! I am a passionate Form 3 secondary school student
                striving for academic excellence, active leadership on the School Prefects Board,
                and enthusiastic participation in STEM innovation and co-curricular programs.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <a
                  href="#activities"
                  className="px-8 py-3.5 rounded-full bg-[#dfb0ba] hover:bg-white text-[#3d121e] font-black text-xs uppercase tracking-widest transition-all shadow-md inline-flex items-center gap-2"
                >
                  EXPLORE ACTIVITIES <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#education"
                  className="px-8 py-3.5 rounded-full bg-transparent hover:bg-[#dfb0ba] hover:text-[#3d121e] text-[#dfb0ba] font-black text-xs uppercase tracking-widest border-2 border-[#dfb0ba] transition-all inline-flex items-center gap-2"
                >
                  ACADEMIC MERIT
                </a>
              </div>

              {/* Quick Secondary School Stats */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#521c2b]">
                <div className="p-4 rounded-2xl bg-[#4a1827] border border-[#5e2032]">
                  <p className="text-2xl sm:text-3xl font-black text-[#dfb0ba]">15</p>
                  <p className="text-[10px] font-extrabold text-[#e5d8cf] uppercase tracking-wider mt-0.5">Years Old</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#4a1827] border border-[#5e2032]">
                  <p className="text-2xl sm:text-3xl font-black text-white">Form 3</p>
                  <p className="text-[10px] font-extrabold text-[#e5d8cf] uppercase tracking-wider mt-0.5">Tingkatan 3</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#4a1827] border border-[#5e2032]">
                  <p className="text-2xl sm:text-3xl font-black text-[#dfb0ba]">Top 5</p>
                  <p className="text-[10px] font-extrabold text-[#e5d8cf] uppercase tracking-wider mt-0.5">Class Rank</p>
                </div>
              </div>
            </div>

            {/* Right Column: Framed Editorial Photo Box */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 sm:w-80 md:w-88">
                {/* Offset warm cream background card */}
                <div className="absolute top-4 -right-4 w-full h-full rounded-3xl bg-[#f5eee6] -z-10 transform translate-x-2 translate-y-2 opacity-95" />
                <div className="absolute -top-3 -left-3 w-16 h-16 bg-[#dfb0ba]/30 rounded-full -z-10" />

                {/* Foreground Card */}
                <div className="relative rounded-3xl overflow-hidden bg-[#4a1827] p-3 shadow-2xl border border-[#662034]">
                  <div className="relative w-full h-[410px] rounded-2xl overflow-hidden bg-[#2d0a15] flex items-center justify-center">
                    <img
                      src="/student-avatar.svg"
                      alt="Hana Delisha binti Nazri"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Top floating badge */}
                  <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-[#3d121e]/95 backdrop-blur-md border border-[#dfb0ba]/40 text-[#dfb0ba] text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#dfb0ba]" />
                    <span>SCHOOL PREFECT</span>
                  </div>

                  {/* Bottom floating badge */}
                  <div className="absolute bottom-6 right-6 px-3.5 py-1.5 rounded-full bg-[#f5eee6] text-[#3d121e] text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                    <Trophy className="w-3.5 h-3.5 text-[#3d121e]" />
                    <span>PAJSK GRADE A</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TYPOGRAPHIC MARQUEE (Matching "✦ . OUR HEAT \") */}
      <div className="bg-[#2d0a15] py-4 border-y border-[#521c2b] overflow-hidden whitespace-nowrap">
        <div className="animate-marquee text-xs sm:text-sm font-black tracking-[0.3em] uppercase text-[#dfb0ba]">
          <span className="mx-6">✦ ACADEMIC EXCELLENCE \</span>
          <span className="mx-6">✦ LEMBAGA PENGAWAS SEKOLAH \</span>
          <span className="mx-6">✦ PANDU PUTERI REMAJA \</span>
          <span className="mx-6">✦ STEM & INNOVATION CLUB \</span>
          <span className="mx-6">✦ CHORAL SPEAKING \</span>
          <span className="mx-6">✦ BADMINTON & SPORTS \</span>
          <span className="mx-6">✦ NILAM GOLD READER \</span>
          <span className="mx-6">✦ ACADEMIC EXCELLENCE \</span>
          <span className="mx-6">✦ LEMBAGA PENGAWAS SEKOLAH \</span>
          <span className="mx-6">✦ PANDU PUTERI REMAJA \</span>
          <span className="mx-6">✦ STEM & INNOVATION CLUB \</span>
        </div>
      </div>

      {/* ABOUT ME SECTION (Matching "FIND YOUR FIRE" & "BUILT for WOMEN") */}
      <section id="about" className="py-20 md:py-28 bg-[#3d121e] border-b border-[#521c2b]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Editorial Bio */}
            <div className="lg:col-span-7">
              <span className="text-xs font-black tracking-[0.25em] text-[#dfb0ba] uppercase block mb-2">
                MEET HANA DELISHA
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#f5eee6] mb-6 leading-tight">
                FIND YOUR{" "}
                <span className="font-serif-italic font-normal text-[#dfb0ba] lowercase text-4xl sm:text-6xl">
                  spark.
                </span>
                <br />
                LEAD WITH PURPOSE.
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#e5d8cf] leading-relaxed font-medium">
                <p>
                  Assalamualaikum & Hello! I am <strong className="text-white font-black">Hana Delisha binti Nazri</strong>, a 15-year-old student currently in <strong>Form 3 (Tingkatan 3)</strong> in secondary school.
                </p>
                <p>
                  As a secondary school student, I believe that true success stems from a harmonious balance between disciplined academic diligence and purposeful extracurricular leadership. Serving as a <strong>School Prefect (Pengawas Sekolah)</strong> has shaped my communication, accountability, and empathy when guiding peers.
                </p>
                <p>
                  My core interests center around <strong>STEM disciplines, Language Arts, and Creative Presentation</strong>. I love turning concepts into tangible prototypes—from science fair greywater models to engaging digital infographics.
                </p>
              </div>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-[#521c2b]">
                <div className="p-3.5 rounded-2xl bg-[#4a1827] border border-[#5e2032]">
                  <p className="font-black text-xs uppercase tracking-wider text-[#dfb0ba]">DILIGENCE</p>
                  <p className="text-[11px] text-[#e5d8cf] mt-1">Consistent Top 5 rank in Form</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#4a1827] border border-[#5e2032]">
                  <p className="font-black text-xs uppercase tracking-wider text-[#dfb0ba]">INTEGRITY</p>
                  <p className="text-[11px] text-[#e5d8cf] mt-1">Prefect assembly moderator</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#4a1827] border border-[#5e2032]">
                  <p className="font-black text-xs uppercase tracking-wider text-[#dfb0ba]">INNOVATION</p>
                  <p className="text-[11px] text-[#e5d8cf] mt-1">State STEM Challenge medalist</p>
                </div>
              </div>
            </div>

            {/* Right Column: Student Snapshot Card in Warm Cream (Matching beige cards in reference) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#f5eee6] text-[#3d121e] p-8 shadow-xl border border-[#eadfcb]">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#eadfcb]">
                  <span className="font-black text-xs uppercase tracking-widest text-[#3d121e]">
                    STUDENT DOSSIER
                  </span>
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-[#dfb0ba] text-[#3d121e] uppercase tracking-wider">
                    VERIFIED
                  </span>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-[#eadfcb]/60">
                    <span className="font-bold text-[#6e3d4c] uppercase tracking-wider">Full Name</span>
                    <span className="font-black text-[#3d121e] text-right">Hana Delisha binti Nazri</span>
                  </div>

                  <div className="flex justify-between items-center py-1 border-b border-[#eadfcb]/60">
                    <span className="font-bold text-[#6e3d4c] uppercase tracking-wider">Age</span>
                    <span className="font-black text-[#3d121e]">15 Years Old</span>
                  </div>

                  <div className="flex justify-between items-center py-1 border-b border-[#eadfcb]/60">
                    <span className="font-bold text-[#6e3d4c] uppercase tracking-wider">Current Level</span>
                    <span className="font-black text-[#3d121e]">Form 3 (Tingkatan 3)</span>
                  </div>

                  <div className="flex justify-between items-center py-1 border-b border-[#eadfcb]/60">
                    <span className="font-bold text-[#6e3d4c] uppercase tracking-wider">School Leadership</span>
                    <span className="font-black text-[#3d121e] text-right">School Prefect • STEM Secretary</span>
                  </div>

                  <div className="flex justify-between items-center py-1 border-b border-[#eadfcb]/60">
                    <span className="font-bold text-[#6e3d4c] uppercase tracking-wider">Uniform Body</span>
                    <span className="font-black text-[#3d121e]">Pandu Puteri Remaja</span>
                  </div>

                  <div className="flex justify-between items-center py-1 border-b border-[#eadfcb]/60">
                    <span className="font-bold text-[#6e3d4c] uppercase tracking-wider">Languages</span>
                    <span className="font-black text-[#3d121e]">Bahasa Melayu & English</span>
                  </div>

                  <div className="flex justify-between items-center py-1">
                    <span className="font-bold text-[#6e3d4c] uppercase tracking-wider">Aspiration</span>
                    <span className="font-black text-[#3d121e]">Pure Science / STEM Stream</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#eadfcb] text-center">
                  <p className="text-[11px] font-bold text-[#3d121e] italic">
                    &ldquo;Excellence is not an accident—it is the result of continuous effort, character, and curiosity.&rdquo;
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ACTIVITIES & KOKURIKULUM (Matching Screen 2 in Top Right with signature protruding tab labels!) */}
      <section id="activities" className="py-20 md:py-28 bg-[#f5eee6] text-[#3d121e]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-black tracking-[0.25em] text-[#872942] uppercase block mb-1">
                CO-CURRICULAR & LEADERSHIP
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#3d121e]">
                SCHOOL ACTIVITIES{" "}
                <span className="font-serif-italic font-normal text-[#872942] lowercase text-4xl sm:text-6xl">
                  &
                </span>{" "}
                ROLES
              </h2>
              <p className="text-xs sm:text-sm text-[#6e3d4c] font-medium mt-1">
                Active involvement across Uniformed Bodies, Clubs & Societies, Sports, and School Committees.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "ALL" },
                { id: "uniform", label: "UNIFORM BODY" },
                { id: "clubs", label: "CLUBS & SOCIETIES" },
                { id: "leadership", label: "LEADERSHIP" },
                { id: "sports", label: "SPORTS" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActivityFilter(tab.id)}
                  className={`px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                    activityFilter === tab.id
                      ? "bg-[#3d121e] text-[#f5eee6] shadow-sm"
                      : "bg-[#e8dacb] text-[#3d121e] hover:bg-[#dfb0ba]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards with protruding tab badge (Directly matching reference screen 2) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {filteredActivities.map((act, index) => (
              <div
                key={index}
                className="relative rounded-3xl bg-[#fbf7f2] border border-[#eadfcb] p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* Protruding tab label at top left of card */}
                <div className="absolute -top-3.5 left-6 px-3 py-1 rounded-full bg-[#dfb0ba] text-[#3d121e] text-[10px] font-black uppercase tracking-widest shadow-xs">
                  {act.tabLabel}
                </div>

                <div>
                  <div className="flex justify-between items-baseline pt-2 mb-2">
                    <span className="text-[11px] font-bold text-[#872942] uppercase tracking-wider">{act.year}</span>
                  </div>

                  <h3 className="text-lg font-black uppercase tracking-tight text-[#3d121e] leading-snug">
                    {act.title}
                  </h3>

                  <p className="text-xs font-black text-[#872942] uppercase tracking-wider mt-1 mb-3">
                    {act.role}
                  </p>

                  <p className="text-xs text-[#522a36] leading-relaxed mb-4">
                    {act.description}
                  </p>

                  <ul className="space-y-1.5 text-xs text-[#3d121e] mb-4">
                    {act.bulletPoints.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#872942] shrink-0 mt-1.5" />
                        <span className="font-medium text-[11.5px] leading-tight">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#eadfcb] flex flex-wrap gap-1.5">
                  {act.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-[#eee3d4] text-[#3d121e]">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* PAJSK Grade Highlight Box */}
          <div className="mt-14 p-6 rounded-3xl bg-[#3d121e] text-[#f5eee6] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#dfb0ba] text-[#3d121e] flex items-center justify-center font-black text-2xl shadow-sm">
                A
              </div>
              <div>
                <h4 className="font-black text-sm uppercase tracking-widest text-[#f5eee6]">PAJSK CO-CURRICULAR ASSESSMENT</h4>
                <p className="text-xs text-[#dfb0ba] font-medium mt-0.5">Grade A Standing • 100% Attendance • High Merits Across All 3 Pillars</p>
              </div>
            </div>
            <a
              href="#achievements"
              className="px-6 py-2.5 rounded-full bg-[#dfb0ba] hover:bg-white text-[#3d121e] font-black text-xs uppercase tracking-widest transition-all"
            >
              VIEW AWARDS
            </a>
          </div>
        </div>
      </section>

      {/* EDUCATION BACKGROUND (Matching "NOT SURE WHERE TO START?") */}
      <section id="education" className="py-20 md:py-28 bg-[#3d121e] border-b border-[#521c2b]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-black tracking-[0.25em] text-[#dfb0ba] uppercase block mb-1">
              ACADEMIC MERIT & FOUNDATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#f5eee6]">
              EDUCATION{" "}
              <span className="font-serif-italic font-normal text-[#dfb0ba] lowercase text-4xl sm:text-6xl">
                journey.
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-[#e5d8cf] font-medium mt-2">
              Demonstrating consistent high marks, subject strengths, and preparation for upper secondary Pure Science.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Secondary School Card */}
            <div className="p-8 rounded-3xl bg-[#f5eee6] text-[#3d121e] shadow-xl border border-[#eadfcb]">
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 rounded-full bg-[#3d121e] text-[#dfb0ba] text-[10px] font-black tracking-widest uppercase">
                  CURRENT SCHOOL
                </span>
                <span className="text-xs font-bold text-[#872942]">2024 - Present</span>
              </div>

              <h3 className="text-xl font-black uppercase tracking-tight text-[#3d121e]">
                Sekolah Menengah Kebangsaan (SMK)
              </h3>
              <p className="text-xs font-extrabold text-[#872942] uppercase tracking-wider mt-1 mb-4">
                Form 1, Form 2 & Form 3 (Current)
              </p>

              <ul className="space-y-2.5 text-xs text-[#3d121e]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#872942] shrink-0 mt-0.5" />
                  <span><strong>Top 5 in Form</strong> — Consistently maintaining Band 5 & 6 (TP5/TP6) in Ujian Akhir Sesi Akademik (UASA).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#872942] shrink-0 mt-0.5" />
                  <span><strong>Anugerah Kecemerlangan Akademik</strong> recipient for overall top academic performance in Tingkatan 1 & 2.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#872942] shrink-0 mt-0.5" />
                  <span><strong>Appointed School Prefect</strong> — Serving in student discipline, assembly leadership, and school event moderation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#872942] shrink-0 mt-0.5" />
                  <span>Preparing for upper secondary <strong>Pure Science / STEM Stream</strong> (Biology, Chemistry, Physics, Add Maths).</span>
                </li>
              </ul>
            </div>

            {/* Primary School Card */}
            <div className="p-8 rounded-3xl bg-[#f5eee6] text-[#3d121e] shadow-xl border border-[#eadfcb]">
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 rounded-full bg-[#e8dacb] text-[#3d121e] text-[10px] font-black tracking-widest uppercase">
                  PRIMARY FOUNDATION
                </span>
                <span className="text-xs font-bold text-[#872942]">2018 - 2023</span>
              </div>

              <h3 className="text-xl font-black uppercase tracking-tight text-[#3d121e]">
                Sekolah Kebangsaan (SK)
              </h3>
              <p className="text-xs font-extrabold text-[#872942] uppercase tracking-wider mt-1 mb-4">
                Standard 1 to Standard 6 (Tahun 1 - 6)
              </p>

              <ul className="space-y-2.5 text-xs text-[#3d121e]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#872942] shrink-0 mt-0.5" />
                  <span><strong>Pentaksiran Bilik Darjah (PBD)</strong> — Achieved Tahap Penguasaan 6 (TP6) overall grade in final year.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#872942] shrink-0 mt-0.5" />
                  <span><strong>Ketua Darjah (Class Monitor)</strong> & Library Prefect (Pengawas Pusat Sumber).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#872942] shrink-0 mt-0.5" />
                  <span>Represented school in district-level Choral Speaking and Public Speaking competitions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#872942] shrink-0 mt-0.5" />
                  <span>Active player in school badminton squad and environmental green club.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Core Subject Strengths */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-[#4a1827] border border-[#5e2032] text-center">
              <p className="text-xl font-black text-white">🔬 SCIENCE</p>
              <p className="text-xs font-black text-[#dfb0ba] mt-1">TP6 / Grade A</p>
              <p className="text-[10px] text-[#e5d8cf] uppercase tracking-wider mt-0.5">Labs & Inquiry</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#4a1827] border border-[#5e2032] text-center">
              <p className="text-xl font-black text-white">📐 MATHS</p>
              <p className="text-xs font-black text-[#dfb0ba] mt-1">TP6 / Grade A</p>
              <p className="text-[10px] text-[#e5d8cf] uppercase tracking-wider mt-0.5">Algebra & Logic</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#4a1827] border border-[#5e2032] text-center">
              <p className="text-xl font-black text-white">🗣️ ENGLISH</p>
              <p className="text-xs font-black text-[#dfb0ba] mt-1">CEFR B2 Level</p>
              <p className="text-[10px] text-[#e5d8cf] uppercase tracking-wider mt-0.5">Speech & Essay</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#4a1827] border border-[#5e2032] text-center">
              <p className="text-xl font-black text-white">💻 RBT / TECH</p>
              <p className="text-xs font-black text-[#dfb0ba] mt-1">TP6 / Grade A</p>
              <p className="text-[10px] text-[#e5d8cf] uppercase tracking-wider mt-0.5">Design & Tech</p>
            </div>
          </div>
        </div>
      </section>

      {/* AWARDS & REVIEWS (Directly mimicking "THE GLOW IS REAL." from bottom-left reference screen) */}
      <section id="achievements" className="py-20 md:py-28 bg-[#3d121e]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-black tracking-[0.25em] text-[#dfb0ba] uppercase block mb-1">
              VERIFIED MERITS & HONORS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#f5eee6]">
              THE MERIT{" "}
              <span className="font-serif-italic font-normal text-[#dfb0ba] lowercase text-4xl sm:text-6xl">
                is
              </span>{" "}
              REAL.
            </h2>
            <p className="text-xs sm:text-sm text-[#e5d8cf] font-medium mt-2">
              Recognitions earned through academic excellence, competitions, leadership, and reading endeavors.
            </p>
          </div>

          {/* 6-Card Review/Award Grid (Directly matching 4-box layout in reference) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-[#fbf7f2] text-[#3d121e] border border-[#eadfcb] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* 5 Stars */}
                  <div className="flex gap-1 text-[#872942] mb-3">
                    {[...Array(award.rating)].map((_, s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-[#872942]" />
                    ))}
                  </div>

                  <h3 className="text-sm font-black uppercase tracking-tight text-[#3d121e] leading-snug mb-1">
                    &ldquo;{award.title}&rdquo;
                  </h3>

                  <p className="text-[11px] font-bold text-[#872942] uppercase tracking-wider mb-3">
                    {award.subtitle} • {award.year}
                  </p>

                  <p className="text-xs text-[#522a36] leading-relaxed">
                    {award.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#eadfcb] flex items-center justify-between text-[10.5px] font-bold text-[#6e3d4c] uppercase tracking-wider">
                  <span>{award.issuedBy}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#872942]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS & TALENTS (Matching "OUR MEMBERSHIP" 3-column bento cards) */}
      <section id="skills" className="py-20 md:py-28 bg-[#f5eee6] text-[#3d121e] border-t border-[#eadfcb]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-black tracking-[0.25em] text-[#872942] uppercase block mb-1">
              CAPABILITIES & TALENTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#3d121e]">
              SKILLS{" "}
              <span className="font-serif-italic font-normal text-[#872942] lowercase text-4xl sm:text-6xl">
                for
              </span>{" "}
              THE FUTURE
            </h2>
            <p className="text-xs sm:text-sm text-[#6e3d4c] font-medium mt-2">
              A balanced blend of academic logic, interpersonal leadership, digital tools, and languages.
            </p>
          </div>

          {/* Bento Cards (Matching "4 CLASSES PER MONTH", "8 CLASSES PER MONTH", "UNLIMITED MEMBERSHIP" cards in reference) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-[#fbf7f2] border border-[#eadfcb] text-center flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#872942] px-3 py-1 rounded-full bg-[#dfb0ba] inline-block mb-4">
                  COGNITIVE
                </span>
                <h3 className="font-black text-base uppercase tracking-tight text-[#3d121e] mb-3">
                  ACADEMIC LOGIC
                </h3>
                <ul className="space-y-2 text-xs text-[#522a36] text-left">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#872942]" />
                    Mathematical Reasoning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#872942]" />
                    Scientific Experiments & Labs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#872942]" />
                    Structured Essay Writing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#872942]" />
                    Reading & Literature Analysis
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#3d121e] text-[#f5eee6] border border-[#521c2b] text-center flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#3d121e] px-3 py-1 rounded-full bg-[#dfb0ba] inline-block mb-4">
                  LEADERSHIP
                </span>
                <h3 className="font-black text-base uppercase tracking-tight text-white mb-3">
                  PUBLIC SPEAKING
                </h3>
                <ul className="space-y-2 text-xs text-[#e5d8cf] text-left">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dfb0ba]" />
                    Morning Assembly Emcee
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dfb0ba]" />
                    Public Speaking & Debate
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dfb0ba]" />
                    Prefects Meeting Facilitation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dfb0ba]" />
                    Peer Conflict Resolution
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#fbf7f2] border border-[#eadfcb] text-center flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#872942] px-3 py-1 rounded-full bg-[#dfb0ba] inline-block mb-4">
                  CREATIVE
                </span>
                <h3 className="font-black text-base uppercase tracking-tight text-[#3d121e] mb-3">
                  DIGITAL & DESIGN
                </h3>
                <ul className="space-y-2 text-xs text-[#522a36] text-left">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#872942]" />
                    Canva Slide & Poster Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#872942]" />
                    CapCut Basic Video Editing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#872942]" />
                    Intro Coding (HTML & Scratch)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#872942]" />
                    Infographic Chart Layouts
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#fbf7f2] border border-[#eadfcb] text-center flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#872942] px-3 py-1 rounded-full bg-[#dfb0ba] inline-block mb-4">
                  COMMUNICATION
                </span>
                <h3 className="font-black text-base uppercase tracking-tight text-[#3d121e] mb-3">
                  LANGUAGES
                </h3>
                <ul className="space-y-2 text-xs text-[#522a36] text-left">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#872942]" />
                    Bahasa Melayu (Native / C2)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#872942]" />
                    English (Fluent / CEFR B2)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#872942]" />
                    Introductory Arabic (School)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#872942]" />
                    Choral Speaking Expression
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEACHER COMMENDATIONS (Matching quote cards) */}
      <section className="py-20 bg-[#3d121e] border-t border-[#521c2b]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-black tracking-[0.25em] text-[#dfb0ba] uppercase block mb-1">
              EDUCATOR FEEDBACK
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#f5eee6]">
              TEACHER{" "}
              <span className="font-serif-italic font-normal text-[#dfb0ba] lowercase text-4xl sm:text-6xl">
                notes.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-[#4a1827] border border-[#5e2032] flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-[#dfb0ba] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#dfb0ba]" />
                  ))}
                </div>
                <p className="text-xs text-[#e5d8cf] leading-relaxed italic">
                  &ldquo;Hana Delisha is an exceptionally attentive and courteous student. She consistently asks thoughtful questions in science and supports her peers with patience during group work.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#5e2032]">
                <p className="text-xs font-black text-white">Cikgu Rohana</p>
                <p className="text-[11px] text-[#dfb0ba]">Form Teacher & Science Educator</p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#4a1827] border border-[#5e2032] flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-[#dfb0ba] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#dfb0ba]" />
                  ))}
                </div>
                <p className="text-xs text-[#e5d8cf] leading-relaxed italic">
                  &ldquo;As Secretary of the STEM Club, Hana manages meeting agendas and club documentation with great maturity. Her reliability makes every club event seamless.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#5e2032]">
                <p className="text-xs font-black text-white">Cikgu Azman</p>
                <p className="text-[11px] text-[#dfb0ba]">STEM & Innovation Club Advisor</p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#4a1827] border border-[#5e2032] flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-[#dfb0ba] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#dfb0ba]" />
                  ))}
                </div>
                <p className="text-xs text-[#e5d8cf] leading-relaxed italic">
                  &ldquo;Hana carries out her school prefect duties with quiet confidence, fairness, and exemplary discipline. She is a wonderful role model for junior students.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#5e2032]">
                <p className="text-xs font-black text-white">Puan Noraini</p>
                <p className="text-[11px] text-[#dfb0ba]">Prefects Disciplinary Board Head</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LET'S CONNECT (Matching "LET'S WORK TOGETHER AND CREATE SOMETHING GREAT" in bottom reference) */}
      <section id="contact" className="py-20 md:py-28 bg-[#2d0a15] border-t border-[#521c2b]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-6">
              <span className="text-xs font-black tracking-[0.25em] text-[#dfb0ba] uppercase block mb-1">
                COMMUNICATION & INQUIRIES
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#f5eee6] leading-[1.05] mb-6">
                LET&apos;S CONNECT{" "}
                <span className="font-serif-italic font-normal text-[#dfb0ba] lowercase text-4xl sm:text-6xl">
                  and
                </span>
                <br />
                CREATE SOMETHING GREAT.
              </h2>
              <p className="text-xs sm:text-sm text-[#e5d8cf] leading-relaxed mb-8">
                Whether you are a teacher, school club coordinator, fellow student, or competition organizer looking to collaborate on academic or co-curricular projects, feel free to send a note!
              </p>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#3d121e] border border-[#521c2b]">
                  <div className="w-10 h-10 rounded-xl bg-[#dfb0ba] text-[#3d121e] flex items-center justify-center font-bold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-black text-white uppercase tracking-wider">Student Contact Email</p>
                    <a href="mailto:hana.delisha@schoolmail.my" className="text-[#dfb0ba] hover:underline font-bold">
                      hana.delisha@schoolmail.my
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#3d121e] border border-[#521c2b]">
                  <div className="w-10 h-10 rounded-xl bg-[#dfb0ba] text-[#3d121e] flex items-center justify-center font-bold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-black text-white uppercase tracking-wider">Location & School</p>
                    <p className="text-[#e5d8cf]">Selangor / Kuala Lumpur, Malaysia</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#3d121e] border border-[#521c2b]">
                  <div className="w-10 h-10 rounded-xl bg-[#dfb0ba] text-[#3d121e] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-black text-white uppercase tracking-wider">Supervision Notice</p>
                    <p className="text-[#e5d8cf]">Communications are monitored by parents & educators.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column in Warm Cream (Matching reference aesthetic) */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#f5eee6] text-[#3d121e] shadow-2xl border border-[#eadfcb]">
                <h3 className="font-black text-lg uppercase tracking-tight text-[#3d121e] mb-1">
                  SEND A MESSAGE OR NOTE
                </h3>
                <p className="text-xs text-[#6e3d4c] font-medium mb-6">Leave an encouraging message, feedback, or school inquiry.</p>

                {formSubmitted ? (
                  <div className="p-6 rounded-2xl bg-[#dfb0ba]/40 border border-[#dfb0ba] text-center flex flex-col items-center">
                    <CheckCircle2 className="w-10 h-10 text-[#872942] mb-2" />
                    <h4 className="font-black text-[#3d121e] text-sm uppercase tracking-wider">THANK YOU VERY MUCH!</h4>
                    <p className="text-xs text-[#522a36] mt-1 font-medium">
                      Your note has been captured. Hana will review it with parent/teacher supervision.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-black text-[#3d121e] uppercase tracking-wider mb-1">
                        YOUR NAME
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="e.g. Cikgu Faridah / Classmate Sarah"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#fbf7f2] border border-[#eadfcb] focus:border-[#872942] focus:outline-none text-xs text-[#3d121e] font-medium"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="email" className="block text-xs font-black text-[#3d121e] uppercase tracking-wider mb-1">
                          EMAIL
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#fbf7f2] border border-[#eadfcb] focus:border-[#872942] focus:outline-none text-xs text-[#3d121e] font-medium"
                        />
                      </div>

                      <div>
                        <label htmlFor="role" className="block text-xs font-black text-[#3d121e] uppercase tracking-wider mb-1">
                          CONNECTION
                        </label>
                        <select
                          id="role"
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#fbf7f2] border border-[#eadfcb] focus:border-[#872942] focus:outline-none text-xs text-[#3d121e] font-medium"
                        >
                          <option value="Teacher/School">Teacher / Educator</option>
                          <option value="Classmate/Peer">Classmate / Peer</option>
                          <option value="Competition Organizer">Competition Organizer</option>
                          <option value="Parent/Relative">Parent / Relative</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-black text-[#3d121e] uppercase tracking-wider mb-1">
                        MESSAGE
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        placeholder="Hi Hana Delisha, congratulations on your achievements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#fbf7f2] border border-[#eadfcb] focus:border-[#872942] focus:outline-none text-xs text-[#3d121e] font-medium resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-[#3d121e] hover:bg-[#872942] text-[#f5eee6] font-black text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      SEND NOTE
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-[#240811] text-center text-xs text-[#dfb0ba]/70 border-t border-[#421422]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-black text-white uppercase tracking-wider">HANA DELISHA NAZRI</span>
            <span className="text-[#521c2b]">•</span>
            <span className="text-[11px] font-bold">Secondary School Student Portfolio (15 Years Old)</span>
          </div>
          <div className="flex items-center gap-6 text-[11px] font-extrabold uppercase tracking-widest text-[#dfb0ba]">
            <a href="#about" className="hover:text-white">ABOUT</a>
            <a href="#education" className="hover:text-white">EDUCATION</a>
            <a href="#activities" className="hover:text-white">KOKURIKULUM</a>
            <a href="#achievements" className="hover:text-white">ACHIEVEMENTS</a>
            <a href="#" className="hover:text-white text-white">TOP ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
