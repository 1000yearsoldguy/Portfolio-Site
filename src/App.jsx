import React, { useState, useEffect, useMemo } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Rocket,
  Trophy,
  UserCheck,
  Copy,
  Check,
  ChevronRight,
  Smartphone,
  BookOpen,
  Zap,
  Code2,
  BarChart3,
  Search,
  Settings,
  ExternalLink,
  Languages,
  Sun,
  Moon,
  FileText,
  Terminal,
  MessageCircle
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [theme, setTheme] = useState('dark');
  const [imageError, setImageError] = useState(false);
  const [isHighlighting, setIsHighlighting] = useState(false);

  const personalInfo = {
    name: "Md. Golam Mahmud",
    nickname: "(Nafiz)",
    title: "CSE Graduate | Data Science Major | Operations Leader",
    email: "golammahmudnafiz@gmail.com",
    phone: "+8801636067844",
    city: "Dhaka, Bangladesh",
    location: "142/7, West Matuail, Mridhabari, Jatrabari, Dhaka-1352, Bangladesh",
    linkedin: "https://www.linkedin.com/in/gmnafiz/",
    github: "https://github.com/1000yearsoldguy",
    // REPLACE '#' WITH YOUR ACTUAL PDF URL (e.g., "https://yourdomain.com/resume.pdf" or a Google Drive direct link)
    resumeLink: "https://drive.google.com/file/d/10VpPrsaLKS3bS3SIasDaHF8PR4w70Xjn/view?usp=sharing.pdf",
    profilePicture: "https://i.ibb.co.com/9kMsTjZL/nafiz.jpg",
    objective: "A Computer Science & Engineering graduate and Data Science major with 3+ years of experience bridging technical engineering and operational leadership. Expert in Python, SQL, and BI tools, specializing in predictive modeling and revenue protection. A proactive, high-energy problem solver committed to continuous learning and delivering scalable, data-driven solutions through technical rigor and dynamic, innovative leadership."
  };

  const handleCopyText = (text, type) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleOpenMap = () => {
    const encodedLocation = encodeURIComponent(personalInfo.location);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedLocation}`, '_blank');
  };

  const handleContactMeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsHighlighting(true);
    setTimeout(() => {
      setIsHighlighting(false);
    }, 60000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sectionIds = ['home', 'experience', 'skills', 'research', 'achievements', 'references'];
      const scrollPosition = window.scrollY + 120;
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
          }
        }
      }
    };

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'research', label: 'Research' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'references', label: 'References' }
  ];

  const themeClasses = useMemo(() => ({
    bg: theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900',
    nav: theme === 'dark' ? 'bg-slate-950/30 border-white/5' : 'bg-white/30 border-slate-200/50',
    card: theme === 'dark' ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200 shadow-sm',
    cardAlt: theme === 'dark' ? 'bg-slate-950/50' : 'bg-slate-50',
    textMuted: theme === 'dark' ? 'text-slate-400' : 'text-slate-500',
    border: theme === 'dark' ? 'border-slate-800' : 'border-slate-200',
    glow: theme === 'dark' ? 'rgba(37, 99, 235, 0.15)' : 'rgba(37, 99, 235, 0.08)'
  }), [theme]);

  const experiences = [
    {
      company: "Urmi Group",
      role: "Executive, MD's Secretariat",
      period: "December 2025 - Present",
      points: [
        { title: "Advisory Reporting", desc: "Synthesize high-level data into strategic reports for the Departmental Adviser." },
        { title: "Business Intelligence", desc: "Convert fragmented data into actionable business analytics." },
        { title: "Revenue Protection", desc: "Mitigate financial risks through proactive trend analysis." },
        { title: "AI Communication", desc: "Use AI and market research for polished executive presentations." },
        { title: "Operational Innovation", desc: "Simplify procedures through creative, unorthodox problem-solving." },
        { title: "Project Management", desc: "Lead industrial lifecycles with visionary-analytical precision." },
        { title: "Syncing Stakeholders", desc: "Bridge software, mechanical, and maintenance teams to digitize operations." },
        { title: "Agile Integration", desc: "Apply Scrum and Agile methodologies to manufacturing workflows." }
      ]
    },
    {
      company: "foodpanda, Bangladesh",
      role: "Shift Lead, Operations",
      period: "August 2022 - November 2025",
      points: [
        { title: "Digital Decision-Making", desc: "Model analytical factors to predict outcomes and identify growth opportunities." },
        { title: "Analytics to Action", desc: "Execute growth and incident strategies using the insights of Metabase and Tableau." },
        { title: "Ambiguity Handling", desc: "Lead high-level escalations through supervision and strategic task delegation." },
        { title: "Business Impact", desc: "Detect fraud patterns and monitor performance metrics to secure revenue." },
        { title: "Stakeholder Collaboration", desc: "Resolve systemic problems by aligning cross-functional teams including IT, Product, and Sales." }
      ]
    }
  ];

  const research = {
    rover: {
      team: "UIU Mars Rover Team (UMRT)",
      center: "Centre for Artificial Intelligence and Robotics (CAIR)",
      role: "Senior Member",
      period: "July 2022 - December 2024",
      details: [
        { text: "Autonomous Navigation: Developed image processing, machine learning, and navigation algorithms for rover autonomy.", link: null },
        { text: "Cross-Functional Integration: Collaborated with mechanical and electrical units to synchronize software with hardware systems.", link: null },
        { text: "Logistics Management: Handled operational logistics for the software and autonomous units.", link: null },
        {
          text: "International Competitions: Represented the team for University Rover Challenge (URC) and Anatolian Rover Challenge (ARC) from 2022 to 2024.",
          links: [
            { label: "URC", url: "https://urc.marssociety.org/" },
            { label: "ARC", url: "https://anatolianrover.space/" }
          ]
        }
      ]
    },
    publications: [
      {
        title: "Development of Underwater Vehicle for Survey, Search and Rescue",
        status: "Published",
        link: "https://doi.org/10.1109/ECCE64574.2025.11013853"
      },
      {
        title: "Support Vectors in Support Vector Machine: A comparative study",
        status: "Ongoing",
        link: null
      }
    ]
  };

  const skills = {
    coding: [
      "C", "C++", "C#", "Java", "JavaScript", "PHP", "SQL", "MySQL",
      "Python (Anaconda, Miniconda, Pyenv, CPython)",
      "HTML", "CSS", "Laravel"
    ],
    softwareCategories: [
      {
        name: "Enterprise & BI",
        items: ["Salesforce (Various Extensions)", "Metabase", "Tableau", "Microsoft Power BI", "Figma", "Jira", "Pencil Project"]
      },
      {
        name: "Development & Version Control",
        items: ["JetBrains Suite (Various IDEs)", "VS Code", "Eclipse", "GitHub", "GitLab", "Postman"]
      },
      {
        name: "Google Workspace",
        items: ["Docs", "Sheets", "Slides", "Meet", "Forms", "Drive", "Colab"]
      },
      {
        name: "Microsoft Office Suite",
        items: ["Word", "Excel", "PowerPoint", "Outlook", "Teams", "OneDrive"]
      },
      {
        name: "Adobe Creative Cloud",
        items: ["Illustrator", "Lightroom", "Photoshop", "Photoshop Express", "Photoshop Fix", "Premiere Pro", "Premiere Rush", "Fill & Sign", "Behance", "Spark", "Portfolio"]
      }
    ],
    operational: ["Operations Management", "Agile & Scrum", "Stakeholder Management", "Project Lifecycle", "Incident Response", "Revenue Protection", "Data-driven Decision Making", "Business Intelligence", "Industrial Lifecycle Management", "Growth Strategy Execution"],
    specialized: ["Algorithm Design", "Machine Learning", "Image Segmentation", "Hard Coding", "Predictive Modeling", "Trend Analysis", "Autonomous Navigation", "Database Management (DBMS)"],
    interpersonal: ["Teamwork", "Leadership", "Quick Learning", "Time Management", "Problem Solving & Coding", "Analytical & Critical Thinking"],
    languages: [
      { name: "English", level: "Professional Working Proficiency" },
      { name: "Bengali", level: "Native / Bilingual Proficiency" },
      { name: "Hindi", level: "Conversational" }
    ]
  };

  const honors = [
    { title: "University Rover Challenge (URC) - 2024", desc: "Lead software representative for autonomous traversal at MDRS, USA.", link: "https://urc.marssociety.org/" },
    { title: "foodpanda Service Operations Leaderboard Winner", desc: "Consecutive months winner from High-Level Escalation and Service Recovery teams.", link: null },
    { title: "4th Runner Up - UIU CSE Project Show", desc: "Database Management System Lab: Web platform for campus management.", link: null },
    { title: "Competitive Programming at UIU CP Season 11", desc: "United International University (2021-2022).", link: null },
    { title: "Coders Combat 3.0", desc: "United International University (August 2022).", link: null }
  ];

  const leadership = [
    { role: "Former President", org: "Dhaka Imperial College Science Club (DICSC)", period: "2019", desc: "Worked on administration, outreach, fundraising, awareness, and research." },
    { role: "Senior Executive", org: "Dhaka Imperial College Science Club (DICSC)", period: "2017-2018", desc: "Worked on research-based science projects along with design and implementation." },
    { role: "Head of Network Administration", org: "Dhaka Imperial College Business Club (DICBC) & Humanities Club (DICHC)", period: "2018-2019", desc: "Worked on proposals, sponsorships and goals for targeted outcomes." },
    { role: "Head Administrative Officer", org: "Bangladesh Association of Science (BAS) Science Olympiad", period: "2018", desc: "Administrative operations leadership." },
    { role: "Chief Project Recruiter", org: "Viqarunnisa Noon Science Festival", period: "2018", desc: "Project recruitment leadership." }
  ];

  const references = [
    {
      name: "Md Tanzil Shahrin",
      role: "Assistant Manager, Central Process Calibration",
      company: "foodpanda, Bangladesh",
      email: "tanzil.shahrin95@gmail.com",
      phone: "+8801840439136"
    },
    {
      name: "Md Abid Hossain",
      role: "Lecturer, Dept. of CSE",
      company: "United International University (UIU)",
      email: "abid@cse.uiu.ac.bd",
      phone: "+880196992356"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-700 font-sans selection:bg-blue-500/30 overflow-x-hidden ${themeClasses.bg}`}>
      {/* Manrope Font Import & Animation CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap');

        .heading-manrope {
          font-family: 'Manrope', sans-serif;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink {
          50% { border-color: transparent }
        }
        .animate-typing {
          overflow: hidden;
          white-space: nowrap;
          border-right: 4px solid currentColor;
          animation: typing 3s steps(20, end) infinite, blink 0.7s step-end infinite;
        }
        .float-element {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-red {
          0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); border-color: rgba(239, 68, 68, 1); }
          70% { box-shadow: 0 0 0 15px rgba(239, 68, 68, 0); border-color: rgba(239, 68, 68, 1); }
          100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); border-color: rgba(239, 68, 68, 1); }
        }
        
        .contact-highlight {
          animation: pulse-red 1.5s infinite !important;
          border-width: 2px !important;
          transform: scale(1.05);
        }

        .shimmer-text {
          background: linear-gradient(90deg, #fff, #3b82f6, #fff);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }

        @keyframes shimmer {
          to { background-position: 200% center; }
        }

        /* Enhanced Animated Contact Button */
        .btn-contact-animated {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 15px -5px rgba(16, 185, 129, 0.4);
        }
        
        .btn-contact-animated:hover {
          transform: translateY(-5px) scale(1.02);
          background-color: #059669;
          box-shadow: 0 10px 25px -10px rgba(16, 185, 129, 0.6);
        }

        .btn-contact-animated:active {
          transform: translateY(2px) scale(0.98);
        }

        .btn-contact-animated::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -60%;
          width: 20%;
          height: 200%;
          background: rgba(255, 255, 255, 0.15);
          transform: rotate(30deg);
          transition: all 0.6s ease;
        }

        .btn-contact-animated:hover::after {
          left: 130%;
        }

        @keyframes subtle-pulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }

        .icon-pulse {
          animation: subtle-pulse 2s infinite ease-in-out;
        }
      `}</style>

      {/* Interactive Cursor Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 opacity-60 hidden md:block"
        style={{
          background: `radial-gradient(800px at ${mousePos.x}px ${mousePos.y}px, ${themeClasses.glow}, transparent 80%)`
        }}
      />

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? themeClasses.nav + ' backdrop-blur-md border-b py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex-1 lg:flex-none"></div>
          <div className="hidden lg:flex items-center space-x-2 bg-slate-500/5 p-1 rounded-full border border-white/5">
            {sections.map(s => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className={`px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all rounded-full ${activeSection === s.id ? 'bg-blue-600 text-white shadow-lg' : themeClasses.textMuted + ' hover:text-blue-500 hover:bg-blue-500/10'}`}
              >
                {s.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-2xl border transition-all hover:scale-110 active:scale-95 ${themeClasses.card} shadow-xl hover:shadow-blue-500/20`}
            >
              {theme === 'dark' ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-blue-600" />}
            </button>
            <button className="lg:hidden p-3 text-slate-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className={`lg:hidden border-b p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300 ${themeClasses.nav} backdrop-blur-xl`}>
            {sections.map(s => (
              <button key={s.id} onClick={() => scrollToSection(s.id)} className={`text-left py-2 text-sm font-black uppercase tracking-widest ${themeClasses.textMuted}`}>
                {s.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="home" className="pt-32 pb-24 px-6 border-b border-white/5 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent min-h-[90vh] flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
            <div className="relative group shrink-0 animate-in fade-in zoom-in duration-1000">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 via-emerald-500 to-purple-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:rotate-180"></div>
              <div className={`relative w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center overflow-hidden transition-all duration-700 group-hover:scale-105 border-4 ${themeClasses.border} shadow-2xl ${themeClasses.cardAlt}`}>
                {!imageError && personalInfo.profilePicture ? (
                  <img
                    src={personalInfo.profilePicture}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <span className={`text-8xl font-black select-none ${theme === 'dark' ? 'text-slate-800' : 'text-slate-200'}`}>MN</span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none"></div>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left animate-in slide-in-from-right duration-1000">
              <div className="mb-4 flex flex-col md:flex-row md:items-center gap-4">
                <div className={`float-element inline-flex items-center gap-2 border px-4 py-2 rounded-xl transition-colors duration-500 shadow-md ${theme === 'dark'
                  ? 'bg-cyan-950 border-cyan-400/50 text-cyan-400'
                  : 'bg-cyan-50 border-cyan-500 text-cyan-700'
                  }`}>
                  <Terminal size={18} className={theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'} />
                  <span className="font-mono font-bold text-sm tracking-widest animate-typing inline-block">
                    Hello, World!
                  </span>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tighter text-balance leading-[0.85] heading-manrope">
                <span className="text-blue-600">{personalInfo.name}</span> <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>{personalInfo.nickname}</span>
              </h1>
              <p className="text-lg md:text-xl text-emerald-500 font-black mb-6 uppercase tracking-[0.25em]">{personalInfo.title}</p>
              <p className={`text-base md:text-lg leading-relaxed mb-8 font-medium max-w-2xl ${themeClasses.textMuted}`}>{personalInfo.objective}</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 items-center">
                <button
                  onClick={handleOpenMap}
                  className={`group relative flex items-center gap-3 border px-5 py-3 rounded-2xl font-mono text-xs transition-all active:scale-95 shadow-lg ${themeClasses.card} hover:border-blue-500/50 hover:bg-blue-500/5 hover:-translate-y-1 group`}
                >
                  <MapPin size={16} className="text-blue-600 shrink-0 group-hover:animate-bounce" />
                  <span className={`font-black uppercase tracking-tight ${theme === 'dark' ? 'text-slate-200' : 'text-slate-700'}`}>
                    {personalInfo.city}
                  </span>
                  <ExternalLink size={12} className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
                </button>

                <button
                  onClick={() => handleCopyText(personalInfo.email, 'email')}
                  className={`group relative flex items-center gap-3 border px-5 py-3 rounded-2xl font-mono text-xs transition-all active:scale-95 shadow-lg ${themeClasses.card} hover:border-blue-500/50 min-w-[240px] hover:bg-blue-500/5 hover:-translate-y-1 ${isHighlighting ? 'contact-highlight' : ''}`}
                >
                  <Mail size={16} className={`${isHighlighting ? 'text-red-500' : 'text-blue-600'} shrink-0 group-hover:scale-110 transition-transform`} />
                  <span className={theme === 'dark' ? 'text-slate-200' : 'text-slate-700'}>{personalInfo.email}</span>
                  {copiedEmail ? <Check size={16} className="text-emerald-500" /> : <Copy size={14} className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />}
                </button>

                <button
                  onClick={() => handleCopyText(personalInfo.phone, 'phone')}
                  className={`group relative flex items-center gap-3 border px-5 py-3 rounded-2xl font-mono text-xs transition-all active:scale-95 shadow-lg ${themeClasses.card} hover:border-emerald-500/50 hover:bg-emerald-500/5 min-w-[180px] hover:-translate-y-1 ${isHighlighting ? 'contact-highlight' : ''}`}
                >
                  <Phone size={16} className={`${isHighlighting ? 'text-red-500' : 'text-emerald-500'} shrink-0 group-hover:animate-pulse`} />
                  <span className={theme === 'dark' ? 'text-slate-200' : 'text-slate-700'}>{personalInfo.phone}</span>
                  {copiedPhone ? <Check size={16} className="text-emerald-500" /> : <Copy size={14} className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />}
                </button>

                <a
                  href={personalInfo.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={personalInfo.resumeLink.endsWith('.pdf') ? "Md_Golam_Mahmud_Resume.pdf" : undefined}
                  className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-500/25"
                >
                  <FileText size={16} />
                  Resume
                </a>

                <div className="flex gap-2">
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={`p-3.5 border rounded-2xl transition-all hover:-translate-y-1 shadow-lg hover:bg-blue-600 hover:text-white ${themeClasses.card}`}><Linkedin size={18} /></a>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={`p-3.5 border rounded-2xl transition-all hover:-translate-y-1 shadow-lg hover:bg-slate-900 hover:text-white ${themeClasses.card}`}><Github size={18} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-32">
        {/* Experience Section */}
        <section id="experience" className="mb-40 scroll-mt-28">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-5xl font-black tracking-tighter uppercase italic heading-manrope">Experience</h2>
            <div className={`h-px flex-1 ${theme === 'dark' ? 'bg-gradient-to-r from-slate-800 to-transparent' : 'bg-slate-200'}`}></div>
          </div>
          <div className="space-y-24">
            {experiences.map((exp, i) => (
              <div key={i} className="group relative">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                  <div className="transform transition-transform group-hover:translate-x-2">
                    <h3 className="text-3xl font-black text-blue-600">{exp.company}</h3>
                    <p className={`text-2xl font-bold mt-1 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>{exp.role}</p>
                  </div>
                  <div className={`px-6 py-2.5 border rounded-2xl text-sm font-black tracking-widest text-emerald-500 ${themeClasses.card}`}>{exp.period}</div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {exp.points.map((p, j) => (
                    <div key={j} className={`relative p-8 border rounded-[2rem] border-l-[10px] border-l-blue-600 transition-all hover:scale-[1.02] shadow-sm hover:shadow-xl group/item ${themeClasses.card}`}>
                      <p className={`font-black mb-3 text-base uppercase tracking-tight flex items-center gap-2 ${theme === 'dark' ? 'text-slate-100' : 'text-slate-800'}`}>
                        <ChevronRight size={18} className="text-blue-600 group-hover/item:translate-x-1 transition-transform" />
                        {p.title}
                      </p>
                      <p className={`text-base leading-relaxed font-medium ${themeClasses.textMuted}`}>{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="skills" className="mb-40 scroll-mt-28">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-4xl font-black tracking-tighter uppercase italic heading-manrope">Tech Stack & Expertise</h2>
            <div className={`h-px flex-1 ${themeClasses.border}`}></div>
          </div>
          <div className={`rounded-[4rem] border p-8 md:p-12 transition-all hover:shadow-2xl ${themeClasses.card}`}>
            <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
              <div className="space-y-16">
                <div>
                  <h4 className="flex items-center gap-3 font-black text-blue-600 uppercase tracking-[0.3em] text-[11px] mb-8">
                    <Code2 size={20} /> Programming & Scripting
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {skills.coding.map(s => (
                      <div key={s} className={`px-3 py-4 border rounded-2xl text-[10px] font-bold transition-all hover:scale-105 hover:border-blue-500 flex items-center justify-center text-center shadow-sm ${themeClasses.cardAlt} ${themeClasses.textMuted} hover:text-blue-600`}>
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="flex items-center gap-3 font-black text-purple-600 uppercase tracking-[0.3em] text-[11px] mb-8">
                    <Search size={20} /> Specialized Engineering
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skills.specialized.map(s => (
                      <div key={s} className={`flex items-center gap-4 p-4 border rounded-2xl group transition-all hover:bg-purple-500/5 ${themeClasses.cardAlt} ${themeClasses.border}`}>
                        <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></div>
                        <span className="text-[11px] font-black uppercase tracking-tight">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-16">
                <div>
                  <h4 className="flex items-center gap-3 font-black text-emerald-600 uppercase tracking-[0.3em] text-[11px] mb-8">
                    <Settings size={20} /> Operational Leadership
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {skills.operational.map(s => (
                      <div key={s} className={`px-5 py-4 border-l-4 border-l-emerald-500 border-y border-r rounded-r-2xl text-[11px] font-black uppercase leading-tight tracking-tighter transition-all hover:translate-x-2 ${themeClasses.cardAlt} ${themeClasses.border}`}>
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="flex items-center gap-3 font-black text-pink-600 uppercase tracking-[0.3em] text-[11px] mb-8">
                    <BarChart3 size={20} /> Software & BI Platforms
                  </h4>
                  <div className="space-y-8">
                    {skills.softwareCategories.map((cat) => (
                      <div key={cat.name} className="group/cat">
                        <p className={`text-[9px] font-black uppercase tracking-[0.3em] mb-3 transition-colors group-hover/cat:text-pink-600 ${themeClasses.textMuted}`}>
                          {cat.name}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {cat.items.map(s => (
                            <div key={s} className={`px-3 py-2 border rounded-xl text-[9px] font-black uppercase transition-all hover:scale-105 flex items-center justify-center text-center shadow-sm ${themeClasses.cardAlt} ${themeClasses.border} hover:border-pink-500 hover:text-pink-500`}>
                              {s}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="mb-40 scroll-mt-28">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-4xl font-black tracking-tighter uppercase italic heading-manrope">Research</h2>
            <div className={`h-px flex-1 ${themeClasses.border}`}></div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className={`lg:col-span-2 border p-10 rounded-[3.5rem] transition-all hover:shadow-2xl ${themeClasses.card}`}>
              <div className="flex items-center gap-4 mb-6"><Rocket className="text-blue-600" size={32} /><h3 className="text-2xl font-black">{research.rover.team}</h3></div>
              <p className="text-blue-600 font-black text-xs mb-8 uppercase tracking-[0.3em]">{research.rover.role} • {research.rover.period}</p>
              <ul className="grid md:grid-cols-2 gap-4">
                {research.rover.details.map((d, i) => (
                  <li key={i} className={`flex flex-col gap-4 text-sm leading-relaxed p-6 rounded-3xl border transition-all hover:bg-blue-600/5 ${themeClasses.cardAlt} ${themeClasses.border}`}>
                    <div className="flex gap-4">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 shrink-0"></div>
                      <span className="font-semibold">{d.text}</span>
                    </div>
                    {d.links && (
                      <div className="flex gap-3 ml-6">
                        {d.links.map(link => (
                          <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-110 active:scale-95 transition-all shadow-md shadow-blue-500/20"
                          >
                            {link.label} <ExternalLink size={12} />
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="flex items-center gap-2 font-black text-slate-500 uppercase text-xs tracking-widest ml-4"><BookOpen size={18} /> Publications</h4>
              {research.publications.map((pub, i) => (
                <div key={i} className={`flex flex-col gap-4 p-8 border rounded-[2.5rem] transition-all hover:translate-y-[-4px] hover:shadow-xl ${themeClasses.card}`}>
                  <div className="group/pub text-base font-black hover:text-blue-600 transition-colors flex items-start justify-between">
                    {pub.link ? (
                      <a href={pub.link} target="_blank" rel="noopener noreferrer" className="flex items-start justify-between w-full">
                        <span className="leading-tight">{pub.title}</span>
                        <ExternalLink size={16} className="mt-1 opacity-40 group-hover/pub:opacity-100 shrink-0 ml-2" />
                      </a>
                    ) : (
                      <span className="leading-tight">{pub.title}</span>
                    )}
                  </div>
                  <span className={`text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest w-fit ${pub.status === 'Published' ? 'bg-blue-600 text-white shadow-lg' : themeClasses.cardAlt + ' border ' + themeClasses.border + ' text-slate-500'}`}>{pub.status}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Group */}
        <section id="achievements" className="scroll-mt-28 mb-40">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-4xl font-black tracking-tighter uppercase italic heading-manrope">Achievements</h2>
            <div className={`h-px flex-1 ${themeClasses.border}`}></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-black text-blue-600 uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                <Trophy size={26} /> Honors & Awards
              </h3>
              <div className="space-y-4">
                {honors.map((h, i) => (
                  <div key={i} className={`flex gap-6 p-7 border rounded-[2.5rem] group transition-all hover:shadow-xl hover:scale-[1.01] ${themeClasses.card}`}>
                    <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10 shrink-0 h-fit transition-all group-hover:bg-blue-600 group-hover:text-white">
                      <Trophy size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-black text-lg leading-tight">{h.title}</h4>
                        {h.link && (
                          <a href={h.link} target="_blank" rel="noopener noreferrer" className={`p-2 border rounded-xl transition-all hover:bg-blue-600 hover:text-white ${themeClasses.cardAlt} ${themeClasses.border}`}><ExternalLink size={14} /></a>
                        )}
                      </div>
                      <p className={`text-sm font-medium leading-relaxed ${themeClasses.textMuted}`}>{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-black text-emerald-600 uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                <UserCheck size={26} /> Leadership
              </h3>
              <div className="space-y-4">
                {leadership.map((l, i) => (
                  <div key={i} className={`p-8 border rounded-[2.5rem] flex flex-col group transition-all hover:shadow-xl hover:translate-x-2 ${themeClasses.card}`}>
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-black text-lg leading-tight">{l.role}</h4>
                      <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">{l.period}</span>
                    </div>
                    <p className="text-[11px] font-black text-emerald-600 mb-3 uppercase tracking-widest">{l.org}</p>
                    <p className={`text-sm leading-relaxed font-medium ${themeClasses.textMuted}`}>{l.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* References Section */}
        <section id="references" className={`rounded-[2.5rem] md:rounded-[4.5rem] p-6 md:p-12 border scroll-mt-28 transition-all hover:shadow-2xl ${themeClasses.card}`}>
          <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase italic heading-manrope">References</h2>
            <div className={`h-px flex-1 opacity-30 ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-300'}`}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {references.map((r, i) => (
              <div key={i} className={`p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border transition-all hover:scale-[1.01] shadow-sm ${themeClasses.cardAlt} ${themeClasses.border}`}>
                <div className="flex items-start gap-4 md:gap-5 text-blue-600 mb-6 md:mb-8">
                  <div className="p-3 md:p-4 bg-blue-600 text-white rounded-xl md:rounded-2xl shadow-lg shadow-blue-500/20 shrink-0">
                    <UserCheck size={28} className="md:w-8 md:h-8" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-lg md:text-2xl font-black tracking-tight truncate sm:whitespace-normal">{r.name}</h4>
                    <p className={`text-xs md:text-sm font-bold leading-tight ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>{r.role}</p>
                    <p className="text-[11px] text-blue-600 font-black uppercase tracking-[0.2em] mt-1">{r.company}</p>
                  </div>
                </div>
                <div className="space-y-2 md:space-y-3">
                  <div className={`flex items-center gap-3 text-xs md:text-sm font-mono p-3 rounded-xl border border-transparent hover:border-blue-500/20 hover:bg-blue-500/5 transition-all ${themeClasses.textMuted} overflow-hidden`}>
                    <Mail size={16} className="text-blue-600 shrink-0" />
                    <span className="truncate">{r.email}</span>
                  </div>
                  <div className={`flex items-center gap-3 text-xs md:text-sm font-mono p-3 rounded-xl border border-transparent hover:border-emerald-500/20 hover:bg-emerald-500/5 transition-all ${themeClasses.textMuted}`}>
                    <Smartphone size={16} className="text-emerald-600 shrink-0" />
                    <span>{r.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Compact Footer */}
        <footer className="mt-20 text-center pb-6 flex flex-col items-center">
          <button
            onClick={handleContactMeClick}
            className="btn-contact-animated group flex items-center gap-4 bg-emerald-600 text-white px-6 py-3.5 rounded-2xl active:scale-95 shadow-lg"
          >
            <div className="bg-white/20 p-2 rounded-xl icon-pulse group-hover:rotate-12 transition-transform">
              <MessageCircle size={20} className="text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-[13px] font-black uppercase tracking-widest leading-none">Contact Me</h3>
            </div>
          </button>
          <p className="mt-8 text-slate-400 text-[8px] font-black uppercase tracking-[0.5em] opacity-50">
            {personalInfo.name} • 2026
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
