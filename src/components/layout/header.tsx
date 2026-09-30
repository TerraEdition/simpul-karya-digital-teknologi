"use client";

import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const publicPrefix = process.env.NODE_ENV === "production" ? "/simpul-karya-digital-teknologi" : "";
const links = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Produk", href: "#produk-niagapadu" },
  { label: "Kontak", href: "#kontak" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-white/90 backdrop-blur-xl">
    <div className="container flex h-[72px] items-center justify-between gap-6">
      <a href="#beranda" className="flex min-w-0 items-center gap-2.5"><Image src={`${publicPrefix}/images/skd-mark.png`} width={42} height={28} className="h-8 w-11 object-contain" alt="" /><span className="truncate text-[15px] font-semibold tracking-tight sm:text-base">Simpul Karya Digital</span></a>
      <nav className="hidden items-center gap-8 md:flex">{links.map((link, index) => <a key={link.href} href={link.href} className={index === 0 ? "text-primary font-semibold" : "text-sm text-muted transition-colors hover:text-navy"}>{link.label}</a>)}</nav>
      <div className="flex items-center gap-3"><a href="http://niagapadu.com" target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-navy sm:inline-flex">Lihat NiagaPadu <ArrowUpRight size={14} /></a><button aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="rounded-lg p-2 text-navy md:hidden">{open ? <X /> : <Menu />}</button></div>
    </div>
    {open && <nav className="border-t border-border bg-white px-4 py-3 md:hidden">{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-sm font-medium hover:bg-soft">{link.label}</a>)}<a href="http://niagapadu.com" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="mt-2 block rounded-lg bg-primary px-3 py-3 text-center text-sm font-semibold text-white">Lihat NiagaPadu</a></nav>}
  </header>;
}
