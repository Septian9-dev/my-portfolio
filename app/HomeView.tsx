"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import Navbar from "./components/Navbar";

// Komponen Pembungkus Animasi Scroll
function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-95 pointer-events-none"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function HomeView() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = ["All", "IT Support", "Desain Grafis", "Video Editing"];

  const projects = [
    {
      id: 1,
      category: "IT Support",
      title: "Setup, Maintenance & Troubleshooting PC/Laptop",
      role: "IT Support Specialist",
      period: "2021 - Sekarang",
      summary:
        "Perawatan hardware, perbaikan software, instalasi sistem operasi (Windows/Linux), dan manajemen partisi disk.",
      description:
        "Perawatan berkala unit komputer, perbaikan gangguan software/hardware, instalasi ulang OS Windows dan Linux, serta pembersihan komponen dan penataan kabel agar kinerja perangkat tetap optimal.",
      impact:
        "Memaksimalkan kinerja perangkat keras dan menekan angka kendala sistem harian.",
      tags: [
        "Instalasi OS",
        "Troubleshooting",
        "Maintenance PC",
        "Windows/Linux",
      ],
      icon: "💻",
    },
    {
      id: 2,
      category: "IT Support",
      title: "Konfigurasi & Maintenance Jaringan Dasar",
      role: "IT Support Specialist",
      period: "2023 - 2024",
      summary:
        "Pengaturan konektivitas LAN/Wi-Fi, pemetaan IP address, dan penanganan gangguan jaringan lokal.",
      description:
        "Penanganan konfigurasi perangkat jaringan lokal, pemetaan IP address, crimping kabel UTP, serta pemeliharaan koneksi Wi-Fi dan LAN untuk kelancaran operasional kerja.",
      impact:
        "Menjaga stabilitas koneksi jaringan lokal tanpa hambatan operasional.",
      tags: ["Jaringan Dasar", "LAN/Wi-Fi", "IP Address", "Router Config"],
      icon: "🌐",
    },
    {
      id: 3,
      category: "Desain Grafis",
      title: "Desain Visual Promosi & Social Media Feed",
      role: "Freelance Graphic Designer",
      period: "2021 - 2024",
      summary:
        "Pembuatan banner, poster, flyer, dan materi visual promosi menggunakan Canva Pro & Adobe Photoshop.",
      description:
        "Merancang aset visual kreatif untuk promosi branding dan media sosial. Meliputi pemilihan skema warna, tata letak, typography, serta pembuatan materi cetak seperti banner dan flyer.",
      impact:
        "Menghasilkan 100+ materi desain yang siap digunakan untuk pemasaran digital dan cetak.",
      tags: ["Adobe Photoshop", "Canva Pro", "Desain Promosi", "Branding"],
      icon: "🎨",
    },
    {
      id: 4,
      category: "Video Editing",
      title: "Produksi Video Promosi Short-Form (Reels/TikTok)",
      role: "Content Creator & Editor",
      period: "2022 - 2024",
      summary:
        "Editing video interaktif dengan CapCut, potongan audio presisi, transisi halus, dan bantuan ideasi AI.",
      description:
        "Memproduksi video berdurasi pendek untuk kebutuhan promosi produk dan branding bisnis. Mengombinasikan pemotongan klip, musik latar, efek transisi, teks bergerak, serta pemanfaatan AI (ChatGPT) untuk ideasi naskah.",
      impact: "Meningkatkan daya tarik konten visual di platform media sosial.",
      tags: ["CapCut", "Video Editing", "Short-form Content", "ChatGPT AI"],
      icon: "🎬",
    },
  ];

  const stats = [
    { value: "D3", label: "Sistem Informasi (2019)" },
    { value: "3+ Thn", label: "Pengalaman Kreatif & IT" },
    { value: "100+", label: "Aset Visual & Video" },
    { value: "100%", label: "Jujur, Teliti & Shift Ready" },
  ];

  const workExperience = [
    {
      title: "Front Office & Operational Staff",
      company: "Hotel Bobopods, Jakarta • 2023 - 2024",
      border: "border-sky-500/40",
      bullets: [
        "Menangani transaksi operasional, check-in/out, dan pencatatan laporan data pengguna.",
        "Memberikan pelayanan ramah, informatif, dan solutif kepada pelanggan.",
        "Memelihara kerapihan serta berkoordinasi dengan tim internal untuk sistem harian.",
      ],
    },
    {
      title: "Freelance Graphic Designer & Content Creator",
      company: "Mandiri / Projects • 2021 - 2024",
      border: "border-indigo-500/40",
      bullets: [
        "Mendesain materi visual promosi, poster, dan feed media sosial (Canva & Photoshop).",
        "Editing video promosi short-form menggunakan CapCut.",
        "Eksplorasi ideasi konten dan headline kreatif menggunakan AI (ChatGPT).",
      ],
    },
  ];

  const educationHistory = [
    {
      title: "D3 Sistem Informasi",
      institution: "Universitas BSI • Lulus 2019",
    },
    {
      title: "SMK Multimedia",
      institution: "SMKN 6 Kab. Tangerang • Lulus 2014",
    },
  ];

  const skillsList = [
    "Instalasi OS",
    "Maintenance PC",
    "Troubleshooting Jaringan",
    "Canva Pro",
    "Adobe Photoshop",
    "CapCut",
    "MS Office / Excel",
    "ChatGPT / AI Tools",
  ];

  const filteredProjects = projects.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-96 right-10 w-[400px] h-[400px] bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none" />

      <Navbar />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-16">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <ScrollReveal delay={100} className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20 mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Terbuka untuk Peluang Kerja • Full-Time / Shift
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Septian Rizki A.
            </h1>

            <p className="mt-2 text-lg sm:text-xl text-sky-400 font-medium">
              Sistem Informasi & IT Support • Content & Operational Staff
            </p>

            <p className="mt-5 text-slate-300 text-sm sm:text-base leading-relaxed">
              Lulusan <strong>D3 Sistem Informasi</strong> (Universitas BSI)
              dengan pengalaman di bidang pelayanan operasional (Front Office),
              perbaikan hardware/software PC, perawatan jaringan dasar, serta
              pembuatan materi visual dan video promosi.
            </p>

            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1">📍 Pagedangan, Tangerang</span>
              <span className="flex items-center gap-1">✉️ ra9septian@gmail.com</span>
              <span className="flex items-center gap-1">📱 +62 881-0245-26362</span>
            </div>

            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
              <a
                href="https://wa.me/62881024526362"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-sky-500/20 transition transform hover:-translate-y-0.5 text-sm"
              >
                💬 Hubungi via WhatsApp
              </a>
              <a
                href="https://drive.usercontent.google.com/download?id=1bCdfy1VpkrHWnR80ws_A1pvl4Jx-yywB&export=download&authuser=0&confirm=t&uuid=612d7ab9-5ef6-409f-9952-7a41fdc3e51d&at=AMrWOn1pQOdoTZx40yslWgGihzYj:1788888345929"
                download
                className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-medium px-6 py-3 rounded-xl transition text-sm flex items-center gap-2"
              >
                📄 Unduh CV (PDF)
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="relative group shrink-0">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-slate-800 bg-slate-900">
              <img
                src="/profile.jpg"
                alt="Septian Rizki A."
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-slate-400 p-4 text-center">
                <span className="text-4xl mb-1">👨‍💻</span>
                <span className="text-[11px] text-slate-500">
                  Simpan foto di<br />
                  <code className="text-sky-400">public/profile.jpg</code>
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Summary Panel */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center bg-slate-900/60 p-6 rounded-2xl border border-slate-800 backdrop-blur-xl shadow-xl">
          {stats.map((stat, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <span className="text-3xl font-extrabold text-sky-400 block">{stat.value}</span>
              <span className="text-xs text-slate-400 mt-1 block">
                {stat.label}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Seksi Pengalaman Kerja & Pendidikan */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span>📋</span> Pengalaman Kerja & Pendidikan
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Kolom Pengalaman Kerja */}
          <ScrollReveal delay={100} className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 space-y-6">
            <h3 className="text-sm font-bold text-sky-400 uppercase tracking-wider">
              Pengalaman Kerja
            </h3>

            {workExperience.map((exp, idx) => (
              <div key={idx} className={`border-l-2 ${exp.border} pl-4 space-y-1`}>
                <h4 className="text-base font-semibold text-white">{exp.title}</h4>
                <p className="text-xs text-sky-300">{exp.company}</p>
                <ul className="text-xs text-slate-400 list-disc list-inside mt-2 space-y-1">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </ScrollReveal>

          {/* Kolom Pendidikan & Skills */}
          <ScrollReveal delay={200} className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 space-y-6">
            <h3 className="text-sm font-bold text-sky-400 uppercase tracking-wider">
              Riwayat Pendidikan
            </h3>

            {educationHistory.map((edu, idx) => (
              <div key={idx} className="border-l-2 border-emerald-500/40 pl-4 space-y-1">
                <h4 className="text-base font-semibold text-white">{edu.title}</h4>
                <p className="text-xs text-emerald-300">{edu.institution}</p>
              </div>
            ))}

            <div className="pt-4 border-t border-slate-800">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Peta Keahlian (Skills)
              </h3>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {skillsList.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Proyek Interaktif & Filter */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Portofolio & Rekam Proyek
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Filter atau cari berdasarkan keahlian IT & Multimedia
            </p>
          </div>

          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder="🔍 Cari skill atau proyek..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-sky-500 transition"
            />
          </div>
        </ScrollReveal>

        {/* Filter Categories */}
        <ScrollReveal delay={100} className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-sky-500 text-white shadow-md shadow-sky-500/20"
                  : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </ScrollReveal>

        {/* Grid Proyek */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((item, idx) => (
              <ScrollReveal key={item.id} delay={idx * 120}>
                <div
                  onClick={() => setSelectedProject(item)}
                  className="bg-slate-900/60 hover:bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-sky-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between group shadow-lg h-full"
                >
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-bold text-sky-400 uppercase tracking-wider bg-sky-950/80 border border-sky-800/60 px-2.5 py-1 rounded-md">
                        {item.category}
                      </span>
                      <span className="text-2xl group-hover:scale-110 transition transform">
                        {item.icon}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 text-xs mt-1 mb-3">
                      {item.role} • {item.period}
                    </p>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.slice(0, 3).map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="text-xs bg-slate-950 text-slate-400 border border-slate-800 px-2 py-0.5 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-sky-400 font-semibold group-hover:translate-x-1 transition">
                      Detail →
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">
              Tidak ada proyek yang sesuai dengan kata kunci pencarian.
            </p>
          </div>
        )}
      </section>

      {/* Modal Detail Proyek */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 relative shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg w-8 h-8 flex items-center justify-center rounded-full bg-slate-800"
            >
              ✕
            </button>

            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider bg-sky-950 border border-sky-800 px-2.5 py-1 rounded">
              {selectedProject.category}
            </span>

            <h3 className="text-xl font-bold text-white mt-3">
              {selectedProject.title}
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              {selectedProject.role} • {selectedProject.period}
            </p>

            <div className="space-y-4 text-sm text-slate-300">
              <div>
                <h4 className="font-semibold text-xs uppercase tracking-wider text-slate-400">
                  Deskripsi Proyek
                </h4>
                <p className="mt-1 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-emerald-400 font-semibold text-xs block mb-1">
                  Hasil & Dampak Utama
                </span>
                <p className="text-xs text-slate-300">
                  {selectedProject.impact}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-xs uppercase tracking-wider text-slate-400 mb-2">
                  Tools & Keahlian
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag: string, idx: number) => (
                    <span
                      key={idx}
                      className="text-xs bg-sky-950/80 text-sky-300 border border-sky-800/60 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedProject(null)}
              className="mt-6 w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-2.5 rounded-xl text-sm transition"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      <footer className="border-t border-slate-900 py-10 text-center text-slate-600 text-sm">
        <p>© 2026 Septian Rizki A. Dibuat dengan Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
