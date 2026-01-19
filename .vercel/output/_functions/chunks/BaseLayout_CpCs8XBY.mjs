import { e as createComponent, r as renderTemplate, h as addAttribute, u as unescapeHTML, m as maybeRenderHead, f as createAstro, l as renderScript, k as renderComponent, n as renderSlot, o as renderHead } from './astro/server_DCKeI3NF.mjs';
import 'piccolore';
/* empty css                          */
import 'clsx';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const menu = [
    { title: "Beranda", url: "/" },
    {
      title: "Produk",
      url: "/produk",
      items: [
        {
          title: "SOREPA",
          description: "Partisi geser kedap suara premium (Redam Tinggi).",
          url: "/produk/sorepa",
          icon: "mic-off"
        },
        {
          title: "SAMOWA",
          description: "Partisi lipat fleksibel semi-redam.",
          url: "/produk/samowa",
          icon: "layout"
        },
        {
          title: "NICE PARTITION",
          description: "Penyekat ruangan ekonomis dan praktis.",
          url: "/produk/nice-partition",
          icon: "align-justify"
        }
      ]
    },
    {
      title: "Perusahaan",
      url: "/tentang-kami",
      items: [
        { title: "Tentang Kami", url: "/tentang-kami", icon: "users" },
        { title: "Galeri Proyek", url: "/galeri", icon: "history" }
      ]
    },
    {
      title: "Info",
      url: "/blog",
      items: [
        { title: "Blog & Artikel", url: "/blog", icon: "book" }
      ]
    },
    { title: "Kontak", url: "/kontak" }
  ];
  const iconMap = {
    "mic-off": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>`,
    "layout": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
    "align-justify": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>`,
    "users": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    "history": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v5h5"></path><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"></path><path d="M12 7v5l3 3"></path></svg>`,
    "book": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`
  };
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<header id="navbar" class="fixed w-full z-50 transition-all duration-300 bg-transparent py-4" data-astro-cid-3ef6ksr2> <div class="container mx-auto px-4" data-astro-cid-3ef6ksr2> <!-- Desktop Navbar --> <nav class="hidden lg:flex justify-between items-center" data-astro-cid-3ef6ksr2> <!-- Logo --> <div class="flex items-center gap-8" data-astro-cid-3ef6ksr2> <a href="/" class="flex items-center gap-3 group" data-astro-cid-3ef6ksr2> <img src="/logo.svg" alt="Pireki Asia Logo" class="h-10 w-auto group-hover:scale-105 transition-transform animate-coin-flip" data-astro-cid-3ef6ksr2> </a> <!-- Navigation Links --> <nav class="flex items-center ml-8 gap-1" data-astro-cid-3ef6ksr2> ', ' </nav> </div> <!-- Right Actions --> <div class="flex items-center gap-3" data-astro-cid-3ef6ksr2> <!-- CTA Buttons --> <a href="/kontak" class="hidden xl:inline-flex h-9 rounded-full px-5 text-xs font-semibold items-center justify-center border border-white/30 text-white bg-white/5 hover:bg-white hover:text-[#072181] transition-colors backdrop-blur-sm" data-astro-cid-3ef6ksr2>\nHubungi Kami\n</a> <a href="/kontak#penawaran" class="inline-flex h-9 rounded-full px-5 text-xs font-semibold items-center justify-center bg-yellow-500 text-white hover:bg-yellow-600 shadow-lg shadow-yellow-500/20 transition-colors" data-astro-cid-3ef6ksr2>\nMinta Penawaran\n</a> </div> </nav> <!-- Mobile Navbar --> <div class="flex lg:hidden items-center justify-between" data-astro-cid-3ef6ksr2> <a href="/" class="flex items-center gap-2" data-astro-cid-3ef6ksr2> <img src="/logo.svg" alt="Pireki Asia" class="h-10 w-auto brightness-0 invert animate-coin-flip" data-astro-cid-3ef6ksr2> </a> <div class="flex items-center gap-2" data-astro-cid-3ef6ksr2> <!-- Mobile Menu Button --> <button id="mobile-menu-button" class="h-10 w-10 inline-flex items-center justify-center text-white hover:bg-white/20 rounded-md" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2> <line x1="4" x2="20" y1="12" y2="12" data-astro-cid-3ef6ksr2></line> <line x1="4" x2="20" y1="6" y2="6" data-astro-cid-3ef6ksr2></line> <line x1="4" x2="20" y1="18" y2="18" data-astro-cid-3ef6ksr2></line> </svg> </button> </div> </div> </div> </header> <!-- Mobile Menu Drawer --> <div id="mobile-menu" class="fixed inset-0 z-[100] hidden" data-astro-cid-3ef6ksr2> <!-- Backdrop --> <div id="mobile-menu-backdrop" class="fixed inset-0 bg-black/80" data-astro-cid-3ef6ksr2></div> <!-- Drawer --> <div class="fixed inset-y-0 right-0 h-full w-3/4 max-w-sm bg-white p-6 shadow-lg overflow-y-auto transform translate-x-full transition-transform duration-300 z-[101]" id="mobile-drawer" data-astro-cid-3ef6ksr2> <!-- Close Button --> <button id="mobile-menu-close" class="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 cursor-pointer text-slate-500" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2> <path d="M18 6 6 18" data-astro-cid-3ef6ksr2></path> <path d="m6 6 12 12" data-astro-cid-3ef6ksr2></path> </svg> </button> <!-- Logo --> <div class="flex items-center gap-2 mb-8" data-astro-cid-3ef6ksr2> <img src="/logo.svg" alt="Pireki Asia" class="h-10 w-auto" data-astro-cid-3ef6ksr2> </div> <!-- Menu Items --> <nav class="flex flex-col gap-6 mt-6" data-astro-cid-3ef6ksr2> ', ` </nav> <!-- Extra Links --> <div class="border-t border-gray-100 pt-6 mt-8" data-astro-cid-3ef6ksr2> <div class="grid grid-cols-2 gap-3" data-astro-cid-3ef6ksr2> <a href="https://wa.me/6288231309760" class="flex items-center justify-center gap-2 rounded-lg bg-green-50 px-4 py-3 text-sm font-semibold text-green-700 hover:bg-green-100 transition-colors" data-astro-cid-3ef6ksr2>
WhatsApp
</a> <a href="/kontak" class="flex items-center justify-center gap-2 rounded-lg bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-100 transition-colors" data-astro-cid-3ef6ksr2>
Kontak
</a> </div> </div> </div> </div> <script>
  // Mobile menu toggle
  document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('mobile-menu-button');
    const menuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('mobile-menu-backdrop');
    
    function openMenu() {
      if (mobileMenu && mobileDrawer) {
        mobileMenu.classList.remove('hidden');
        setTimeout(function() {
          mobileDrawer.classList.remove('translate-x-full');
        }, 10);
      }
    }
    
    function closeMenu() {
      if (mobileMenu && mobileDrawer) {
        mobileDrawer.classList.add('translate-x-full');
        setTimeout(function() {
          mobileMenu.classList.add('hidden');
        }, 300);
      }
    }
    
    if (menuButton) menuButton.addEventListener('click', openMenu);
    if (menuClose) menuClose.addEventListener('click', closeMenu);
    if (backdrop) backdrop.addEventListener('click', closeMenu);
  });
<\/script> `])), maybeRenderHead(), menu.map((item) => item.items ? renderTemplate`<div class="relative group" data-astro-cid-3ef6ksr2> <button class="inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-yellow-400 focus:bg-white/10 focus:outline-none text-white/90 uppercase tracking-wide" data-astro-cid-3ef6ksr2> ${item.title} <svg class="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2> <path d="m6 9 6 6 6-6" data-astro-cid-3ef6ksr2></path> </svg> </button> <!-- Dropdown --> <div class="absolute top-full left-0 w-[400px] md:w-[500px] bg-white rounded-lg shadow-xl p-4 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top scale-95 group-hover:scale-100 z-50" data-astro-cid-3ef6ksr2> <ul class="grid w-full gap-3 p-2 md:grid-cols-2 list-none" data-astro-cid-3ef6ksr2> ${item.items.map((subItem) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(subItem.url, "href")} class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 focus:bg-slate-50 group/item" data-astro-cid-3ef6ksr2> <div class="flex items-center gap-3 font-semibold text-slate-900 group-hover/item:text-[#072181]" data-astro-cid-3ef6ksr2> ${subItem.icon && iconMap[subItem.icon] && renderTemplate`<span class="text-[#072181] group-hover/item:scale-110 transition-transform" data-astro-cid-3ef6ksr2>${unescapeHTML(iconMap[subItem.icon])}</span>`} <span data-astro-cid-3ef6ksr2>${subItem.title}</span> </div> ${"description" in subItem && subItem.description && renderTemplate`<p class="line-clamp-2 text-sm leading-snug text-slate-500 mt-1 pl-[28px]" data-astro-cid-3ef6ksr2> ${subItem.description} </p>`} </a> </li>`)} </ul> </div> </div>` : renderTemplate`<a${addAttribute(item.url, "href")} class="inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-yellow-400 focus:bg-white/10 focus:outline-none uppercase tracking-wide" data-astro-cid-3ef6ksr2> ${item.title} </a>`), menu.map((item) => item.items ? renderTemplate`<div class="space-y-3" data-astro-cid-3ef6ksr2> <div class="font-bold text-[#072181] text-sm uppercase tracking-widest border-b border-gray-100 pb-2" data-astro-cid-3ef6ksr2> ${item.title} </div> <div class="pl-4 space-y-3 border-l-2 border-gray-100" data-astro-cid-3ef6ksr2> ${item.items.map((sub) => renderTemplate`<a${addAttribute(sub.url, "href")} class="flex items-center gap-3 text-sm font-medium text-slate-600 hover:text-[#072181] hover:translate-x-1 transition-transform py-1" data-astro-cid-3ef6ksr2> ${sub.icon && iconMap[sub.icon] && renderTemplate`<span class="w-4 h-4 text-slate-400" data-astro-cid-3ef6ksr2>${unescapeHTML(iconMap[sub.icon])}</span>`} ${sub.title} </a>`)} </div> </div>` : renderTemplate`<a${addAttribute(item.url, "href")} class="font-bold text-slate-800 hover:text-[#072181] block text-base uppercase tracking-wide border-b border-gray-100 pb-2" data-astro-cid-3ef6ksr2> ${item.title} </a>`));
}, "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const companyLinks = [
    { name: "Tentang Kami", url: "/tentang-kami" },
    { name: "Galeri Proyek", url: "/galeri" },
    { name: "Sertifikasi", url: "/sertifikasi" },
    { name: "Karir", url: "/karir" },
    { name: "Hubungi Kami", url: "/kontak" }
  ];
  const productLinks = [
    { name: "Movable Wall", url: "/produk/movable-wall" },
    { name: "Folding Gate", url: "/produk/folding-gate" },
    { name: "Partisi Lipat", url: "/produk/partisi-lipat" },
    { name: "Aksesoris", url: "/produk/aksesoris" },
    { name: "Maintenance", url: "/layanan/maintenance" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-slate-900 text-slate-400 pt-24 pb-12 text-sm"> <div class="container mx-auto px-4 md:px-6 mb-16"> <div class="grid md:grid-cols-4 gap-12"> <!-- Company Info --> <div class="col-span-1 md:col-span-1"> <div class="flex items-center gap-3 mb-8"> <img src="/logo.svg" alt="Pireki Asia Logo" class="h-10 w-auto"> </div> <p class="leading-relaxed mb-8 text-slate-400">
Mitra terpercaya untuk solusi partisi ruangan kedap suara.
                    Mengutamakan kualitas, inovasi, dan kepuasan pelanggan
                    korporat.
</p> <!-- Social Links --> <div class="flex gap-4"> <a href="https://www.facebook.com/agus.penyekat.ruangan/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-md bg-slate-800 flex items-center justify-center hover:bg-[#072181] hover:text-white transition-colors" aria-label="Facebook"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path> </svg> </a> <a href="https://www.instagram.com/pintulipat_sby/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-md bg-slate-800 flex items-center justify-center hover:bg-[#072181] hover:text-white transition-colors" aria-label="Instagram"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect> <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path> <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line> </svg> </a> <a href="https://www.tiktok.com/@pintulipat_sby" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-md bg-slate-800 flex items-center justify-center hover:bg-[#072181] hover:text-white transition-colors" aria-label="TikTok"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path> </svg> </a> <a href="https://www.youtube.com/@pintulipat_sby" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-md bg-slate-800 flex items-center justify-center hover:bg-[#072181] hover:text-white transition-colors" aria-label="YouTube"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path> <path d="m10 15 5-3-5-3z"></path> </svg> </a> </div> <!-- Google Review Button --> <div class="mt-6"> <a href="https://www.google.com/maps/place/CV+Pireki+Asia+-+Pintu+Lipat+Surabaya/@-7.3062043,112.654232,17z/data=!4m8!3m7!1s0x2e7859420261263f:0x82daf16b02869dac!8m2!3d-7.3062043!4d112.654232!9m1!1b1!16s%2Fg%2F11xg3n1vn6?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors text-xs font-semibold"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="text-yellow-400"> <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon> </svg>
Beri Ulasan di Google
</a> </div> </div> <!-- Company Links --> <div> <h4 class="text-white font-bold mb-6 uppercase tracking-wider text-xs">
Perusahaan
</h4> <ul class="space-y-4"> ${companyLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.url, "href")} class="hover:text-white transition-colors"> ${link.name} </a> </li>`)} </ul> <!-- Legalities --> <div class="mt-8 pt-8 border-t border-slate-800"> <h4 class="text-white font-bold mb-4 uppercase tracking-wider text-xs">
Legalitas Perusahaan
</h4> <ul class="space-y-3"> <li class="flex items-center gap-3"> <div class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-white"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg> </div> <div> <div class="text-[10px] uppercase font-bold text-slate-500">
SIUP
</div> <div class="text-xs text-slate-300">
503/10129.A/436.6.11/2014
</div> </div> </li> <li class="flex items-center gap-3"> <div class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-white"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> </div> <div> <div class="text-[10px] uppercase font-bold text-slate-500">
TDP
</div> <div class="text-xs text-slate-300">
13.01.3.46.37751
</div> </div> </li> <li class="flex items-center gap-3"> <div class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-white"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg> </div> <div> <div class="text-[10px] uppercase font-bold text-slate-500">
NPWP
</div> <div class="text-xs text-slate-300">
71.293.989.1.604.000
</div> </div> </li> </ul> </div> </div> <!-- Product Links --> <div> <h4 class="text-white font-bold mb-6 uppercase tracking-wider text-xs">
Produk
</h4> <ul class="space-y-4"> ${productLinks.filter((l) => l.name !== "Aksesoris").map((link) => renderTemplate`<li> <a${addAttribute(link.url, "href")} class="hover:text-white transition-colors"> ${link.name} </a> </li>`)} </ul> </div> <!-- Contact Info --> <div> <h4 class="text-white font-bold mb-6 uppercase tracking-wider text-xs">
Kantor & Workshop
</h4> <ul class="space-y-6"> <li class="flex gap-4"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#072181] shrink-0 mt-1"> <rect width="20" height="14" x="2" y="3" rx="2"></rect> <line x1="8" x2="16" y1="21" y2="21"></line> <line x1="12" x2="12" y1="17" y2="21"></line> </svg> <div> <span class="block text-white font-semibold text-xs mb-1">Kantor Pusat</span> <span class="text-slate-400">Jl. Bangkingan Gadung No 168 Rt 001 Rw 002,
                                Lakarsantri – Surabaya</span> </div> </li> <li class="flex gap-4"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#072181] shrink-0 mt-1"> <path d="M3 21h18"></path> <path d="M5 21V7l8-4 8 4v14"></path> <path d="M13 10V3a1 1 0 0 0-1-1H4"></path> </svg> <div> <span class="block text-white font-semibold text-xs mb-1">Workshop 1</span> <span class="text-slate-400">Jl. Alpukat, Dusun Mojokopek, Desa Mulung Rt
                                001 Rw 001, Driyorejo – Gresik</span> </div> </li> <li class="flex gap-4"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#072181] shrink-0 mt-1"> <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon> <polyline points="2 17 12 22 22 17"></polyline> <polyline points="2 12 12 17 22 12"></polyline> </svg> <div> <span class="block text-white font-semibold text-xs mb-1">Workshop 2</span> <span class="text-slate-400">Jl. Lidah Kulon Sepat No 221 Rt 02 Rw 003,
                                Lakarsantri – Surabaya</span> </div> </li> <li class="flex gap-4 pt-4 border-t border-slate-800/50"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 shrink-0"> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path> </svg> <a href="https://wa.me/6288231309760" class="hover:text-white transition-colors">0882-3130-9760</a> </li> <li class="flex gap-4"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#072181] shrink-0"> <rect width="20" height="16" x="2" y="4" rx="2"></rect> <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path> </svg> <a href="mailto:info@cvpirekiasia.com" class="hover:text-white transition-colors">info@cvpirekiasia.com</a> </li> </ul> </div> </div> </div> <!-- Bottom Bar --> <div class="container mx-auto px-4 md:px-6 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500"> <p>&copy; ${currentYear} CV Pireki Asia. All rights reserved.</p> <div class="flex gap-8 mt-4 md:mt-0"> <a href="/privacy-policy" class="hover:text-white">Privacy Policy</a> <a href="/terms-of-service" class="hover:text-white">Terms of Service</a> <a href="/sitemap.xml" class="hover:text-white">Sitemap</a> </div> </div> </footer>`;
}, "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$WhatsAppFAB = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WhatsAppFAB;
  const {
    phone = "6288231309760",
    message = "Halo, saya tertarik dengan produk partisi Pireki Asia."
  } = Astro2.props;
  const encodedMessage = encodeURIComponent(message);
  const waLink = `https://wa.me/${phone}?text=${encodedMessage}`;
  return renderTemplate`${maybeRenderHead()}<div class="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-2 group"> <!-- Tooltip (Desktop Only or when active) --> <div class="hidden md:block bg-white text-slate-800 px-4 py-2 rounded-xl shadow-xl text-sm font-bold mb-2 mr-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300 pointer-events-none">
Butuh Bantuan? Chat Kami!
</div> <!-- Main Button --> <a${addAttribute(waLink, "href")} target="_blank" rel="noopener noreferrer" class="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all hover:-translate-y-1 hover:scale-105" aria-label="Chat on WhatsApp"> <!-- Ping Animation --> <span class="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="relative z-10 w-7 h-7 md:w-8 md:h-8"> <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path> </svg> </a> </div>`;
}, "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/components/WhatsAppFAB.astro", void 0);

const $$SocialProof = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="social-proof-container" class="fixed top-24 left-4 md:top-auto md:bottom-8 md:left-8 z-[45] pointer-events-none max-w-[calc(100vw-2rem)] md:max-w-sm"> <!-- Notification Card (Hidden by default) --> <div id="notification-card" class="bg-white rounded-xl shadow-2xl p-3 md:p-4 flex items-center gap-3 md:gap-4 transform scale-90 opacity-0 transition-all duration-500 border border-slate-100"> <div class="relative shrink-0"> <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-50 text-[#072181] rounded-full flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 md:w-5 md:h-5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> </div> <span class="absolute bottom-0 right-0 w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 border-2 border-white rounded-full"></span> </div> <div> <div class="text-[10px] md:text-xs text-slate-500 font-medium mb-0.5" id="notification-time">
Baru saja
</div> <div class="text-xs md:text-sm font-bold text-slate-900 leading-tight" id="notification-text">
Budi dari Jakarta meminta survei
</div> <div class="text-[10px] md:text-xs text-blue-600 mt-1 font-medium">
Pireki Asia Verified
</div> </div> </div> </div> ${renderScript($$result, "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/components/SocialProof.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/components/SocialProof.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description = "CV Pireki Asia - Spesialis partisi ruangan kedap suara. Manufaktur movable wall dan pintu lipat terbaik di Indonesia.",
    image = "/og-image.jpg"
  } = Astro2.props;
  const siteUrl = "https://cvpirekiasia.com";
  const canonicalUrl = new URL(Astro2.url.pathname, siteUrl);
  return renderTemplate(_a || (_a = __template(['<html lang="id"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="google-site-verification" content="XczM3ee8WGnLrrlCcfZiJ4Z3ppwNma69x6J9pI4jXPY"><!-- Canonical URL --><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:site_name" content="CV Pireki Asia"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- Google Fonts - Inter --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"><title>', ' | CV Pireki Asia</title><!-- JSON-LD Structured Data for Google Search --><script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "WebSite",\n        "name": "CV Pireki Asia",\n        "alternateName": ["Pireki Asia", "Pireki"],\n        "url": "https://cvpirekiasia.com",\n        "potentialAction": {\n          "@type": "SearchAction",\n          "target": "https://cvpirekiasia.com/search?q={search_term_string}",\n          "query-input": "required name=search_term_string"\n        }\n      }\n    </script>', '</head> <body class="font-sans text-slate-900 antialiased bg-gray-50 relative"> ', " <main> ", " </main> ", " ", " ", " <!-- Scroll-based navbar script --> ", " </body> </html>"])), addAttribute(description, "content"), addAttribute(canonicalUrl, "href"), addAttribute(canonicalUrl, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(`${siteUrl}${image}`, "content"), addAttribute(canonicalUrl, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(`${siteUrl}${image}`, "content"), title, renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "WhatsAppFAB", $$WhatsAppFAB, {}), renderComponent($$result, "SocialProof", $$SocialProof, {}), renderScript($$result, "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
