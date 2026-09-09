import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-5 border-b border-slate-800 sticky top-0 bg-slate-900/90 backdrop-blur-md z-50">
      <Link href="/" className="text-xl font-bold text-sky-400 hover:text-sky-300 transition">
        Septian Rizki A.
      </Link>
      
      <div className="space-x-4 md:space-x-8 text-sm font-medium">
        <Link href="/" className="text-slate-300 hover:text-sky-400 transition">
          Beranda
        </Link>
        <Link href="/about" className="text-slate-300 hover:text-sky-400 transition">
          Tentang Saya
        </Link>
        <Link href="/projects" className="text-slate-300 hover:text-sky-400 transition">
          Portofolio
        </Link>
      </div>
    </nav>
  );
}