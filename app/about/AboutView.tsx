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

export default function AboutView() {
  const experiences = [
    {
      period: "2023 - 2024",
      periodClass: "text-sky-400 bg-sky-950/80 border-sky-800/60",
      title: "Front Office & Operational Staff",
      company: "Hotel Bobopods, Jakarta",
      bullets: [
        "Menangani transaksi operasional, check-in/out, dan pencatatan laporan data pengguna secara teliti.",
        "Memberikan pelayanan yang ramah, informatif, dan solutif kepada pelanggan dalam penanganan kendala harian.",
        "Memelihara kebersihan, kerapihan, dan kenyamanan area operasional sesuai standar pelayanan.",
        "Berkoordinasi dengan tim internal untuk kelancaran operasional dan sistem harian.",
      ],
    },
    {
      period: "2021 - 2024",
      periodClass: "text-indigo-400 bg-indigo-950/80 border-indigo-800/60",
      title: "Freelance Graphic Designer & Content Creator",
      company: "Mandiri / Projects",
      bullets: [
        "Mendesain materi visual promosi, poster, dan feed media sosial menggunakan Canva Pro dan Adobe Photoshop.",
        "Memanfaatkan AI Tools (ChatGPT) untuk eksplorasi ideasi konten, headline, dan promosi kreatif.",
        "Editing video dan materi visual menggunakan CapCut untuk kebutuhan promosi bisnis dan branding.",
        "Mengelola alur pengerjaan, revisi, dan komunikasi intensif dengan klien agar proyek selesai tepat waktu.",
      ],
    },
  ];

  const education = [
    {
      title: "D3 Sistem Informasi",
      institution: "Universitas BSI",
      status: "Lulus 2019",
    },
    {
      title: "SMK Multimedia",
      institution: "SMKN 6 Kab. Tangerang",
      status: "Lulus 2014",
    },
  ];

  const skillMatrix = [
    {
      category: "IT & Operasional",
      color: "text-sky-400",
      skills: ["Instalasi OS", "Maintenance PC", "Troubleshooting Jaringan"],
    },
    {
      category: "Desain & Media",
      color: "text-indigo-400",
      skills: ["Canva Pro", "Adobe Photoshop", "CapCut", "Desain Promosi"],
    },
    {
      category: "Tools & Administrasi",
      color: "text-emerald-400",
      skills: ["MS Office/Excel", "Google Sheets", "ChatGPT/AI Tools", "Data Entry"],
    },
    {
      category: "Soft Skills",
      color: "text-amber-400",
      skills: ["Pelayanan Ramah", "Komunikasi Efektif", "Kerja Shift", "Jujur & Teliti"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative overflow-hidden">
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-12 relative z-10">
        {/* Ringkasan Profil Card */}
        <ScrollReveal delay={100} className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 sm:p-10 backdrop-blur-xl mb-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative group shrink-0">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 opacity-75 blur transition duration-500 group-hover:opacity-100" />
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-slate-800 bg-slate-950">
                <img
                  src="/profile.jpg"
                  alt="Septian Rizki A."
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="w-full h-full flex flex-col items-center justify-center bg-slate-950 text-slate-400 p-2 text-center">
                  <span className="text-3xl">👨‍💻</span>
                  <span className="text-[10px] text-slate-500 mt-1">Foto Profil</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-center md:text-left">
              <div>
                <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-950/80 border border-sky-800/60 px-3 py-1 rounded-full">
                  Ringkasan Profil
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                  Septian Rizki A.
                </h1>
                <p className="text-sky-400 font-medium text-sm sm:text-base">
                  Sistem Informasi & IT Support • Content & Operational Staff
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Lulusan <strong>D3 Sistem Informasi</strong> dengan pengalaman kerja di bidang pelayanan pelanggan (Front Office), administrasi operasional, serta desain grafis freelance. Terampil dalam perawatan dan instalasi sistem operasi komputer, troubleshooting perangkat keras/lunak, pengelolaan data, serta pemeliharaan jaringan dasar. Memiliki kemampuan komunikasi yang baik, ramah, teliti, dan siap bekerja secara fleksibel dengan jadwal shift.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Pengalaman & Pendidikan Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Kolom Pengalaman Kerja */}
          <div className="space-y-6">
            <ScrollReveal>
              <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <span>💼</span> Pengalaman Kerja
              </h2>
            </ScrollReveal>

            {experiences.map((exp, idx) => (
              <ScrollReveal key={idx} delay={100 + idx * 150}>
                <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 hover:border-sky-500/40 transition-all duration-300">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${exp.periodClass}`}>
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-3">{exp.title}</h3>
                  <p className="text-xs text-slate-400 font-medium mb-3">{exp.company}</p>
                  <ul className="text-xs text-slate-300 list-disc list-inside space-y-1.5 leading-relaxed">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Kolom Pendidikan & Kontak */}
          <div className="space-y-8">
            <div>
              <ScrollReveal>
                <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3 mb-6">
                  <span>🎓</span> Riwayat Pendidikan
                </h2>
              </ScrollReveal>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <ScrollReveal key={idx} delay={100 + idx * 100}>
                    <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800/80 flex justify-between items-start">
                      <div>
                        <h3 className="text-base font-bold text-white">{edu.title}</h3>
                        <p className="text-xs text-slate-400 mt-0.5">{edu.institution}</p>
                      </div>
                      <span className="text-xs font-semibold text-emerald-400 bg-emerald-950 border border-emerald-800/60 px-2.5 py-1 rounded-md">
                        {edu.status}
                      </span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Kontak Box */}
            <ScrollReveal delay={250}>
              <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3 mb-6">
                <span>📬</span> Informasi Kontak
              </h2>

              <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 space-y-4 text-xs">
                <div>
                  <span className="text-slate-500 uppercase font-bold tracking-wider block mb-1">Domisili</span>
                  <p className="text-slate-200 font-medium text-sm">
                    Perumahan Griya Sarana BSD, Pagedangan, Tangerang
                  </p>
                </div>

                <div>
                  <span className="text-slate-500 uppercase font-bold tracking-wider block mb-1">Email</span>
                  <a
                    href="mailto:ra9septian@gmail.com"
                    className="text-sky-400 hover:text-sky-300 font-medium text-sm transition"
                  >
                    raseptian@gmail.com
                  </a>
                </div>

                <div>
                  <span className="text-slate-500 uppercase font-bold tracking-wider block mb-1">WhatsApp</span>
                  <a
                    href="https://wa.me/62881024526362"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 font-medium text-sm transition"
                  >
                    +62 881-0245-26362
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Matriks Keahlian */}
        <ScrollReveal delay={150} className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 sm:p-8 mb-12">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span>⚙️</span> Matriks Keahlian (Skills)
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {skillMatrix.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <h3 className={`text-xs font-bold uppercase tracking-wider mb-3 ${item.color}`}>
                  {item.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs bg-slate-950 text-slate-300 border border-slate-800 px-2.5 py-1 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA Banner */}
        <ScrollReveal delay={200} className="text-center py-6 bg-gradient-to-r from-sky-950/40 via-slate-900 to-indigo-950/40 rounded-2xl border border-slate-800/80">
          <h3 className="text-lg font-bold text-white">Tertarik untuk Bekerja Sama?</h3>
          <p className="text-xs text-slate-400 mt-1 mb-4">
            Terbuka untuk posisi IT Support, Operasional Staff, maupun kebutuhan desain grafis.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/62881024526362"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-5 py-2.5 rounded-xl text-xs transition shadow-lg shadow-sky-500/20"
            >
              💬 Kirim Pesan via WhatsApp
            </a>
            <a
              href="https://drive.usercontent.google.com/download?id=1bCdfy1VpkrHWnR80ws_A1pvl4Jx-yywB&export=download&authuser=0&confirm=t&uuid=612d7ab9-5ef6-409f-9952-7a41fdc3e51d&at=AMrWOn1pQOdoTZx40yslWgGihzYj:1788888345929"
              download
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium px-5 py-2.5 rounded-xl text-xs transition"
            >
              📄 Unduh CV (PDF)
            </a>
          </div>
        </ScrollReveal>
      </main>

      <footer className="border-t border-slate-900 py-8 text-center text-slate-600 text-sm relative z-10">
        <p>© 2026 Septian Rizki A. Dibuat dengan Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
