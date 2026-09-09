"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import Navbar from "../components/Navbar";

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

interface ProjectItem {
  id: number;
  category: "Desain Grafis" | "Video Editing" | "IT Support";
  title: string;
  role: string;
  period: string;
  mediaType: "image" | "video" | "tech";
  thumbnailUrl: string;
  videoUrl?: string;
  galleryImages?: string[];
  description: string;
  impact: string;
  tags: string[];
}

export default function ProjectsView() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedMedia, setSelectedMedia] = useState<ProjectItem | null>(null);

  const categories = ["All", "Desain Grafis", "Video Editing", "IT Support"];

  const projects: ProjectItem[] = [
    {
      id: 1,
      category: "Desain Grafis",
      title: "Desain Feed & Visual Banner Promosi",
      role: "Freelance Graphic Designer",
      period: "2021 - 2024",
      mediaType: "image",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&auto=format&fit=crop&q=80",
      ],
      description:
        "Pembuatan materi visual promosi, banner vertikal, poster cetak, dan feed media sosial menggunakan Adobe Photoshop dan Canva Pro.",
      impact:
        "Menghasilkan 100+ aset visual siap tayang dan siap cetak untuk branding usaha.",
      tags: ["Adobe Photoshop", "Canva Pro", "Visual Banner", "Feed Instagram"],
    },
    {
      id: 2,
      category: "Video Editing",
      title: "Editing Video Promosi Short-Form (Reels & TikTok)",
      role: "Content Creator & Video Editor",
      period: "2022 - 2024",
      mediaType: "video",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop&q=80",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      description:
        "Produksi video pendek dengan pemotongan audio presisi, transisi dinamis, efek teks bergerak, dan bantuan ideasi konten AI.",
      impact:
        "Meningkatkan daya tarik visual dan engagement rate konten promosi media sosial.",
      tags: ["CapCut", "Video Short-Form", "Content Creator", "ChatGPT AI"],
    },
    {
      id: 3,
      category: "IT Support",
      title: "Setup, Maintenance PC & Troubleshooting OS",
      role: "IT Support Specialist",
      period: "2021 - Sekarang",
      mediaType: "tech",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=800&auto=format&fit=crop&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=1200&auto=format&fit=crop&q=80",
      ],
      description:
        "Perawatan berkala hardware PC, instalasi ulang sistem operasi Windows & Linux, pembersihan komponen, dan manajemen partisi drive.",
      impact:
        "Meningkatkan kecepatan boot sistem hingga 40% dan menekan kendala eror harian.",
      tags: [
        "Instalasi OS",
        "Maintenance PC",
        "Troubleshooting",
        "Windows/Linux",
      ],
    },
    {
      id: 4,
      category: "IT Support",
      title: "Konfigurasi Jaringan Lokal (LAN / Wi-Fi)",
      role: "IT Support Specialist",
      period: "2023 - 2024",
      mediaType: "tech",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80",
      description:
        "Pengaturan router, pemetaan IP address lokal, crimping kabel UTP, dan perbaikan konektivitas jaringan kantor.",
      impact:
        "Koneksi jaringan menjadi lebih stabil dan meminimalkan downtime operasional.",
      tags: ["Jaringan Dasar", "LAN/Wi-Fi", "IP Addressing", "Router Config"],
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative overflow-hidden">
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />

      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        {/* Header Title */}
        <ScrollReveal delay={100} className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sky-400 text-xs font-bold uppercase tracking-widest bg-sky-950/80 border border-sky-800/60 px-3 py-1 rounded-full">
            Showcase Karya & Proyek
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-sky-400">
            Portofolio Multimedia & IT
          </h1>
          <p className="text-slate-400 mt-4 text-base sm:text-lg leading-relaxed">
            Eksplorasi karya visual desain grafis, sampel video promosi, serta rekam jejak pekerjaan IT Support.
          </p>
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal delay={150} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25 scale-105"
                  : "bg-slate-900/80 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </ScrollReveal>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 150}>
              <div
                onClick={() => setSelectedMedia(item)}
                className="group cursor-pointer bg-slate-900/60 border border-slate-800/80 rounded-2xl overflow-hidden backdrop-blur-xl hover:border-sky-500/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full"
              >
                {/* Card Preview Area */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                  <img
                    src={item.thumbnailUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-90 group-hover:opacity-100"
                  />

                  <div className="absolute top-3 right-3">
                    {item.mediaType === "video" && (
                      <span className="bg-red-600/90 text-white text-xs font-bold px-2.5 py-1 rounded-lg backdrop-blur-md flex items-center gap-1 shadow-lg">
                        ▶ Play Video
                      </span>
                    )}
                    {item.mediaType === "image" && (
                      <span className="bg-sky-600/90 text-white text-xs font-bold px-2.5 py-1 rounded-lg backdrop-blur-md flex items-center gap-1 shadow-lg">
                        🖼 Galeri Desain
                      </span>
                    )}
                    {item.mediaType === "tech" && (
                      <span className="bg-emerald-600/90 text-white text-xs font-bold px-2.5 py-1 rounded-lg backdrop-blur-md flex items-center gap-1 shadow-lg">
                        💻 Technical
                      </span>
                    )}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 mb-3">
                      {item.role} • {item.period}
                    </p>
                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.slice(0, 3).map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="text-[11px] bg-slate-950 text-slate-400 border border-slate-800 px-2.5 py-1 rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-sky-400 group-hover:translate-x-1 transition-transform">
                      Lihat Karya →
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </main>

      {/* Lightbox / Video Player Modal Interactive */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 z-20 text-white bg-slate-800/80 hover:bg-slate-700 w-10 h-10 rounded-full flex items-center justify-center transition backdrop-blur-md"
            >
              ✕
            </button>

            <div className="bg-black relative flex items-center justify-center min-h-[260px] max-h-[420px] overflow-hidden">
              {selectedMedia.mediaType === "video" && selectedMedia.videoUrl ? (
                <video
                  src={selectedMedia.videoUrl}
                  controls
                  autoPlay
                  className="w-full max-h-[420px] object-contain"
                />
              ) : (
                <img
                  src={
                    selectedMedia.galleryImages?.[0] ||
                    selectedMedia.thumbnailUrl
                  }
                  alt={selectedMedia.title}
                  className="w-full max-h-[420px] object-contain"
                />
              )}
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-sky-400 bg-sky-950 border border-sky-800 px-2.5 py-1 rounded-md uppercase">
                  {selectedMedia.category}
                </span>
                <span className="text-xs text-slate-400">
                  {selectedMedia.period}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white">
                {selectedMedia.title}
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedMedia.description}
              </p>

              <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800">
                <span className="text-emerald-400 font-semibold text-xs block mb-1">
                  Hasil & Dampak Utama
                </span>
                <p className="text-xs text-slate-300">{selectedMedia.impact}</p>
              </div>

              <div className="pt-2">
                <span className="text-xs text-slate-500 font-semibold block mb-2">
                  Tools & Software:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedMedia.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs bg-sky-950/60 text-sky-300 border border-sky-800/50 px-3 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="border-t border-slate-900 py-8 text-center text-slate-600 text-sm relative z-10">
        <p>© 2026 Septian Rizki A. Dibuat dengan Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}