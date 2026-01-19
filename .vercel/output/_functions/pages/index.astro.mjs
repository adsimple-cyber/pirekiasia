import { e as createComponent, m as maybeRenderHead, r as renderTemplate, l as renderScript, h as addAttribute, f as createAstro, k as renderComponent } from '../chunks/astro/server_DCKeI3NF.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CpCs8XBY.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$ProductCard } from '../chunks/ProductCard_BHuWd5Cn.mjs';
import { $ as $$BlogCard } from '../chunks/BlogCard_C3610OCo.mjs';
import { $ as $$CTA } from '../chunks/CTA_AsLQ_FIB.mjs';
import { e as fetchProducts, a as fetchPosts, d as STATIC_PRODUCTS, S as STATIC_POSTS } from '../chunks/wordpress_vfo1_j38.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative pt-32 md:pt-40 pb-20 overflow-hidden min-h-screen flex flex-col justify-center bg-[#072181]" data-astro-cid-bbe6dxrz> <!-- Animated Background --> <div class="absolute inset-0 overflow-hidden pointer-events-none" data-astro-cid-bbe6dxrz> <!-- Animated Grid --> <div class="absolute inset-0 z-0 op-10" data-astro-cid-bbe6dxrz> <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] animate-grid-fade" data-astro-cid-bbe6dxrz></div> </div> <!-- Animated Blob 1 --> <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-blob" data-astro-cid-bbe6dxrz></div> <!-- Animated Blob 2 --> <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 animate-blob animation-delay-2000" data-astro-cid-bbe6dxrz></div> <!-- Noise Texture --> <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 mix-blend-overlay" data-astro-cid-bbe6dxrz></div> </div> <div class="container mx-auto px-4 md:px-6 relative z-10 flex-1 flex flex-col justify-center" data-astro-cid-bbe6dxrz> <div class="grid lg:grid-cols-2 gap-12 items-center" data-astro-cid-bbe6dxrz> <!-- Left Column: Text Content --> <div class="text-left" data-astro-cid-bbe6dxrz> <!-- Badge --> <div class="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm" data-astro-cid-bbe6dxrz> <div class="flex items-center gap-2" data-astro-cid-bbe6dxrz> <span class="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" data-astro-cid-bbe6dxrz></span> <span class="text-blue-200 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase" data-astro-cid-bbe6dxrz>
Solusi Partisi No. 1 di Indonesia
</span> </div> </div> <!-- Headline --> <h1 class="text-4xl md:text-6xl font-extrabold text-white leading-[1.15] mb-6 tracking-tight" data-astro-cid-bbe6dxrz>
Ruang Lebih Fleksibel, <br data-astro-cid-bbe6dxrz> <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500" data-astro-cid-bbe6dxrz>
Privasi Terjaga.
</span> </h1> <!-- Description --> <p class="text-base text-blue-100/80 leading-normal mb-8 max-w-lg font-light" data-astro-cid-bbe6dxrz>
Spesialis manufaktur partisi geser (movable wall) dan pintu
                    lipat kedap suara. Solusi terbaik untuk ballroom, kantor,
                    dan ruang kelas Anda.
</p> <!-- CTA Buttons --> <div class="flex flex-wrap gap-4 mb-12" data-astro-cid-bbe6dxrz> <a href="/kontak" class="inline-flex h-12 rounded-full px-8 text-sm font-semibold items-center justify-center bg-yellow-500 text-white hover:bg-yellow-600 shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transition-all" data-astro-cid-bbe6dxrz>
KONSULTASI GRATIS
</a> <a href="/galeri" class="inline-flex h-12 rounded-full px-8 text-sm font-semibold items-center justify-center bg-white/5 border border-white/20 text-white hover:bg-white hover:text-[#072181] backdrop-blur-sm transition-all" data-astro-cid-bbe6dxrz>
LIHAT PORTOFOLIO
</a> </div> <!-- Mini Stats --> <div class="flex gap-4 md:gap-12 justify-between md:justify-start" data-astro-cid-bbe6dxrz> <div class="text-center" data-astro-cid-bbe6dxrz> <div class="text-3xl md:text-4xl font-extrabold text-white" data-astro-cid-bbe6dxrz>
10+
</div> <div class="text-blue-300/70 text-xs font-medium uppercase tracking-wider mt-1" data-astro-cid-bbe6dxrz>
Tahun
</div> </div> <div class="w-px bg-white/20" data-astro-cid-bbe6dxrz></div> <div class="text-center" data-astro-cid-bbe6dxrz> <div class="text-3xl md:text-4xl font-extrabold text-white" data-astro-cid-bbe6dxrz>
500+
</div> <div class="text-blue-300/70 text-xs font-medium uppercase tracking-wider mt-1" data-astro-cid-bbe6dxrz>
Proyek
</div> </div> <div class="w-px bg-white/20" data-astro-cid-bbe6dxrz></div> <div class="text-center" data-astro-cid-bbe6dxrz> <div class="text-3xl md:text-4xl font-extrabold text-white" data-astro-cid-bbe6dxrz>
100+
</div> <div class="text-blue-300/70 text-xs font-medium uppercase tracking-wider mt-1" data-astro-cid-bbe6dxrz>
Klien
</div> </div> </div> </div> <!-- Right Column: Chat Animation Illustration --> <div class="relative flex justify-center lg:justify-end mt-10 lg:mt-0 scale-90 md:scale-100 origin-center lg:origin-right" data-astro-cid-bbe6dxrz> <div class="relative w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto" data-astro-cid-bbe6dxrz> <!-- Glass Phone Container --> <div class="bg-white/5 backdrop-blur-xl rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 h-[450px] md:h-[500px] lg:h-[550px] relative z-10 flex flex-col ring-1 ring-white/10" data-astro-cid-bbe6dxrz> <!-- Chat Header --> <div class="p-5 flex items-center gap-4 border-b border-white/10 bg-white/5 backdrop-blur-md" data-astro-cid-bbe6dxrz> <div class="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-600 p-[2px] shadow-lg" data-astro-cid-bbe6dxrz> <div class="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden" data-astro-cid-bbe6dxrz> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white" data-astro-cid-bbe6dxrz> <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" data-astro-cid-bbe6dxrz></path> <circle cx="9" cy="7" r="4" data-astro-cid-bbe6dxrz></circle> <path d="M22 21v-2a4 4 0 0 0-3-3.87" data-astro-cid-bbe6dxrz></path> <path d="M16 3.13a4 4 0 0 1 0 7.75" data-astro-cid-bbe6dxrz></path> </svg> </div> </div> <div data-astro-cid-bbe6dxrz> <h4 class="font-bold text-white text-base tracking-wide" data-astro-cid-bbe6dxrz>
Pak Budi - Hotel Manager
</h4> <div class="flex items-center gap-2 mt-0.5" data-astro-cid-bbe6dxrz> <span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]" data-astro-cid-bbe6dxrz></span> <span class="text-[10px] text-white/60 font-medium uppercase tracking-widest" data-astro-cid-bbe6dxrz>Online</span> </div> </div> </div> <!-- Messages Area --> <div class="flex-1 p-6 overflow-hidden flex flex-col justify-end space-y-4" data-astro-cid-bbe6dxrz> <!-- Message 1 --> <div class="flex w-full justify-start" data-astro-cid-bbe6dxrz> <div class="max-w-[85%] p-4 text-sm relative backdrop-blur-md border shadow-lg bg-white/10 border-white/10 text-white rounded-2xl rounded-tl-none" data-astro-cid-bbe6dxrz> <p class="leading-relaxed font-light tracking-wide" data-astro-cid-bbe6dxrz>
Selamat pagi, partisi ballroom hotel
                                        kami sudah terpasang?
</p> <div class="text-[10px] text-white/60 text-right mt-2" data-astro-cid-bbe6dxrz>
09:15
</div> </div> </div> <!-- Message 2 --> <div class="flex w-full justify-end" data-astro-cid-bbe6dxrz> <div class="max-w-[85%] p-4 text-sm relative backdrop-blur-md border shadow-lg bg-gradient-to-br from-[#072181]/80 to-blue-600/80 border-white/20 text-white rounded-2xl rounded-tr-none" data-astro-cid-bbe6dxrz> <p class="leading-relaxed font-light tracking-wide" data-astro-cid-bbe6dxrz>
Pagi Pak Budi! Sudah selesai 100%.
                                        Berikut foto hasilnya Pak.
</p> <div class="text-[10px] text-white/60 text-right mt-2 flex items-center justify-end gap-1" data-astro-cid-bbe6dxrz>
09:16
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-300" data-astro-cid-bbe6dxrz> <path d="M20 6 9 17l-5-5" data-astro-cid-bbe6dxrz></path> </svg> </div> </div> </div> <!-- Message 3 with Image --> <div class="flex w-full justify-end" data-astro-cid-bbe6dxrz> <div class="max-w-[85%] p-4 text-sm relative backdrop-blur-md border shadow-lg bg-gradient-to-br from-[#072181]/80 to-blue-600/80 border-white/20 text-white rounded-2xl rounded-tr-none" data-astro-cid-bbe6dxrz> <div class="mb-3 rounded-xl overflow-hidden border border-white/20 shadow-md" data-astro-cid-bbe6dxrz> <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=400" alt="Project Result" class="w-full h-auto object-cover opacity-90" loading="lazy" data-astro-cid-bbe6dxrz> </div> <p class="leading-relaxed font-light tracking-wide" data-astro-cid-bbe6dxrz>
Movable Wall Type 100 dengan finishing
                                        HPL. Kedap suara sudah dites.
</p> <div class="text-[10px] text-white/60 text-right mt-2 flex items-center justify-end gap-1" data-astro-cid-bbe6dxrz>
09:16
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-300" data-astro-cid-bbe6dxrz> <path d="M20 6 9 17l-5-5" data-astro-cid-bbe6dxrz></path> </svg> </div> </div> </div> <!-- Message 4 --> <div class="flex w-full justify-start" data-astro-cid-bbe6dxrz> <div class="max-w-[85%] p-4 text-sm relative backdrop-blur-md border shadow-lg bg-white/10 border-white/10 text-white rounded-2xl rounded-tl-none" data-astro-cid-bbe6dxrz> <p class="leading-relaxed font-light tracking-wide" data-astro-cid-bbe6dxrz>
Wah mantap! Rapi sekali pengerjaannya.
                                        Suara benar-benar tidak bocor. Terima
                                        kasih tim Pireki! 👍
</p> <div class="text-[10px] text-white/60 text-right mt-2" data-astro-cid-bbe6dxrz>
09:18
</div> </div> </div> </div> <!-- Input Area --> <div class="p-5 bg-white/5 border-t border-white/10 backdrop-blur-md" data-astro-cid-bbe6dxrz> <div class="bg-black/20 rounded-full h-12 flex items-center px-4 gap-3 border border-white/5" data-astro-cid-bbe6dxrz> <div class="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/50" data-astro-cid-bbe6dxrz> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bbe6dxrz> <path d="M5 12h14" data-astro-cid-bbe6dxrz></path> <path d="M12 5v14" data-astro-cid-bbe6dxrz></path> </svg> </div> <div class="flex-1 text-sm text-white/40 italic font-light tracking-wide" data-astro-cid-bbe6dxrz>
Type a message...
</div> <div class="w-8 h-8 rounded-full bg-blue-600/80 flex items-center justify-center text-white shadow-lg" data-astro-cid-bbe6dxrz> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bbe6dxrz> <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" data-astro-cid-bbe6dxrz></path> <path d="m21.854 2.147-10.94 10.939" data-astro-cid-bbe6dxrz></path> </svg> </div> </div> </div> </div> <!-- Floating Badge: Project Complete --> <div class="absolute -right-4 md:-right-8 top-28 md:top-32 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl z-20 max-w-[200px] animate-float" data-astro-cid-bbe6dxrz> <div class="flex items-center gap-3 mb-2" data-astro-cid-bbe6dxrz> <div class="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center shadow-lg" data-astro-cid-bbe6dxrz> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bbe6dxrz> <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" data-astro-cid-bbe6dxrz></path> <path d="m9 11 3 3L22 4" data-astro-cid-bbe6dxrz></path> </svg> </div> <div data-astro-cid-bbe6dxrz> <div class="font-bold text-sm text-white" data-astro-cid-bbe6dxrz>
Proyek Selesai
</div> <div class="text-[10px] text-white/70" data-astro-cid-bbe6dxrz>
Tepat Waktu
</div> </div> </div> <div class="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mt-1" data-astro-cid-bbe6dxrz> <div class="h-full bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)] w-full" data-astro-cid-bbe6dxrz></div> </div> </div> </div> </div> </div> </div>  </section>`;
}, "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/components/Hero.astro", void 0);

const $$FlowGallery = createComponent(($$result, $$props, $$slots) => {
  const images = [
    "/slide1.webp",
    "/slide2.webp",
    "/slide3.webp",
    "/slide4.webp",
    "/slide5.webp",
    "/slide6.webp",
    "/slide7.webp"
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-slate-50 overflow-hidden" data-astro-cid-cyrafnhe> <div class="container mx-auto px-4 text-center mb-12" data-astro-cid-cyrafnhe> <h2 class="text-[#072181] font-bold text-sm uppercase tracking-widest mb-3" data-astro-cid-cyrafnhe>
Galeri Proyek
</h2> <h3 class="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight" data-astro-cid-cyrafnhe>
Dokumentasi Pemasangan
</h3> </div> <div class="gallery-container relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px] perspective-1000" data-astro-cid-cyrafnhe> <div class="gallery-track relative w-full h-full flex items-center justify-center transform-style-3d" data-astro-cid-cyrafnhe> ${images.map((img, idx) => renderTemplate`<div class="gallery-item absolute w-[260px] md:w-[400px] aspect-[4/5] md:aspect-video bg-white shadow-2xl rounded-2xl overflow-hidden transition-all duration-500 ease-out cursor-pointer"${addAttribute(idx, "data-index")} data-astro-cid-cyrafnhe> <img${addAttribute(img, "src")}${addAttribute(`Gallery ${idx + 1}`, "alt")} class="w-full h-full object-cover" data-astro-cid-cyrafnhe> <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" data-astro-cid-cyrafnhe></div> </div>`)} </div> </div> </section>  ${renderScript($$result, "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/components/FlowGallery.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/components/FlowGallery.astro", void 0);

const $$Benefits = createComponent(($$result, $$props, $$slots) => {
  const benefits = [
    {
      title: "Redam Suara",
      desc: "Privasi total dengan Rockwool 100kg/m\xB3. Suara tidak bocor antar ruangan.",
      icon: "volume",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Material Premium",
      desc: "Rangka Hollow Galvanis & Multiplek Meranti. Anti-rayap, kokoh puluhan tahun.",
      icon: "layers",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Desain Custom",
      desc: "Finishing HPL/Wallpaper Custom. Estetika yang menyatu dengan interior.",
      icon: "palette",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Pemasangan Profesional",
      desc: "Teknisi ISO & Garansi Resmi. Pengerjaan cepat, rapi, dan presisi.",
      icon: "hammer",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-24 bg-gray-50 overflow-hidden" data-astro-cid-aafkaq3q> <div class="container mx-auto px-4 md:px-6" data-astro-cid-aafkaq3q> <!-- Section Header --> <div class="text-center max-w-2xl mx-auto mb-16" data-astro-cid-aafkaq3q> <h2 class="text-[#072181] font-bold text-sm uppercase tracking-widest mb-3" data-astro-cid-aafkaq3q>Keunggulan Kami</h2> <h3 class="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight" data-astro-cid-aafkaq3q>Standar Kualitas Terbaik</h3> <div class="w-16 h-1 bg-[#072181] mx-auto mt-6" data-astro-cid-aafkaq3q></div> </div> <!-- Stacked Cards --> <div class="max-w-5xl mx-auto space-y-4" data-astro-cid-aafkaq3q> ${benefits.map((benefit, idx) => renderTemplate`<div class="benefit-card sticky bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-500 overflow-hidden group"${addAttribute(`top: calc(6rem + ${idx * 2}rem); z-index: ${idx + 10};`, "style")} data-astro-cid-aafkaq3q> <div class="flex items-center justify-between p-6 md:p-8" data-astro-cid-aafkaq3q> <!-- Left: Number + Title + Description --> <div class="flex items-center gap-6 flex-1" data-astro-cid-aafkaq3q> <span class="text-slate-300 font-bold text-2xl md:text-3xl" data-astro-cid-aafkaq3q>0${idx + 1}.</span> <div data-astro-cid-aafkaq3q> <h4 class="text-xl md:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-[#072181] transition-colors" data-astro-cid-aafkaq3q>${benefit.title}</h4> <p class="text-slate-500 text-sm md:text-base mt-1 max-w-md" data-astro-cid-aafkaq3q>${benefit.desc}</p> </div> </div> <!-- Right: Arrow --> <a href="/tentang-kami" class="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#072181] group-hover:border-[#072181] transition-all relative z-30" data-astro-cid-aafkaq3q> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-400 group-hover:text-white group-hover:rotate-45 transition-all" data-astro-cid-aafkaq3q> <path d="M7 17L17 7" data-astro-cid-aafkaq3q></path> <path d="M7 7h10v10" data-astro-cid-aafkaq3q></path> </svg> </a> </div> <!-- Hover Image --> <div class="absolute right-20 top-1/2 -translate-y-1/2 w-64 h-40 rounded-xl overflow-hidden shadow-2xl opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 rotate-3 group-hover:rotate-6 transition-all duration-500 pointer-events-none z-20 hidden md:block" data-astro-cid-aafkaq3q> <img${addAttribute(benefit.image, "src")}${addAttribute(benefit.title, "alt")} class="w-full h-full object-cover" data-astro-cid-aafkaq3q> </div> </div>`)} <!-- Extra space at bottom --> <div class="h-32" data-astro-cid-aafkaq3q></div> </div> </div> </section> `;
}, "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/components/Benefits.astro", void 0);

const $$TrustedLogos = createComponent(($$result, $$props, $$slots) => {
  const logos = [
    // New Client Logos
    { name: "Client 1", src: "/client-1.svg" },
    { name: "Client 2", src: "/client-2.svg" },
    { name: "Client 3", src: "/client-3.svg" },
    { name: "Client 4", src: "/client-4.svg" },
    { name: "Client 5", src: "/client-5.svg" },
    // Existing Logos
    { name: "Antam", src: "/antam-1.webp" },
    { name: "BNI", src: "/bni-1.webp" },
    { name: "Pertamina", src: "/pertamina-1.webp" },
    { name: "Menara Syariah Tower", src: "/menara_syariah_tower-1.webp" },
    { name: "Universitas Airlangga", src: "/univ_airlangga-1.webp" }
  ];
  const allLogos = [...logos, ...logos, ...logos];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-white border-b border-gray-50 relative overflow-hidden" data-astro-cid-y5razrjc> <!-- Animated Background Elements --> <div class="absolute inset-0 pointer-events-none" data-astro-cid-y5razrjc> <div class="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-100/40 blur-2xl animate-float-slow" data-astro-cid-y5razrjc></div> <div class="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-yellow-100/30 blur-3xl animate-float-delay" data-astro-cid-y5razrjc></div> </div> <div class="container mx-auto px-4 md:px-6 relative z-10" data-astro-cid-y5razrjc> <div class="flex flex-col items-center" data-astro-cid-y5razrjc> <!-- Company Introduction --> <div class="text-center max-w-3xl mb-6" data-astro-cid-y5razrjc> <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-4" data-astro-cid-y5razrjc>
CV Pireki Asia
</h2> <p class="text-slate-600 leading-relaxed" data-astro-cid-y5razrjc>
Produsen dan spesialis pemasangan partisi geser (movable
                    wall) serta pintu lipat kedap suara sejak 2008. Kami
                    melayani kebutuhan partisi untuk ballroom hotel, ruang
                    rapat, ruang kelas, dan berbagai kebutuhan komersial lainnya
                    di seluruh Indonesia.
</p> </div> <p class="text-slate-500 text-sm md:text-base font-bold uppercase tracking-[0.15em] mb-12 text-center" data-astro-cid-y5razrjc>
Dipercaya Oleh Instansi Ternama
</p> <!-- Marquee Slider Container --> <div class="relative w-full overflow-hidden group" data-astro-cid-y5razrjc> <!-- Fade Gradients --> <div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" data-astro-cid-y5razrjc></div> <div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" data-astro-cid-y5razrjc></div> <!-- Scrolling Track --> <div class="flex items-center gap-16 animate-scroll w-max hover:pause" data-astro-cid-y5razrjc> ${allLogos.map((logo) => renderTemplate`<div class="flex-shrink-0 relative group/logo" data-astro-cid-y5razrjc> <img${addAttribute(logo.src, "src")}${addAttribute(logo.name, "alt")} class="h-12 md:h-16 w-auto object-contain grayscale opacity-70 transition-all duration-300 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 group-hover/logo:scale-110" loading="lazy" data-astro-cid-y5razrjc> </div>`)} </div> </div> </div> </div> </section> `;
}, "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/components/TrustedLogos.astro", void 0);

const $$Astro$1 = createAstro();
const $$ProductGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductGrid;
  const { products, showHeader = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-24 bg-white" data-astro-cid-poyn3awd> <div class="container mx-auto px-4 md:px-6" data-astro-cid-poyn3awd> ${showHeader && renderTemplate`<div class="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-100 pb-6" data-astro-cid-poyn3awd> <div class="max-w-2xl" data-astro-cid-poyn3awd> <h2 class="text-[#072181] font-bold text-sm uppercase tracking-widest mb-3" data-astro-cid-poyn3awd>
Katalog Produk
</h2> <h3 class="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight" data-astro-cid-poyn3awd>
Solusi Penyekat Ruangan
</h3> </div> <a href="/produk" class="hidden md:flex items-center gap-2 text-[#072181] font-bold hover:text-blue-900 transition-colors mt-4 md:mt-0 text-sm tracking-wide" data-astro-cid-poyn3awd>
LIHAT SEMUA
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-poyn3awd> <path d="m9 18 6-6-6-6" data-astro-cid-poyn3awd></path> </svg> </a> </div>`} <!-- Product Grid/Carousel --> <div class="-mx-4 px-4 md:mx-0 md:px-0 overflow-x-auto snap-x snap-mandatory flex gap-4 pb-6 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible no-scrollbar" data-astro-cid-poyn3awd> ${products.map((product) => renderTemplate`<div class="flex-shrink-0 w-[280px] md:w-auto snap-center first:pl-2 last:pr-2 md:first:pl-0 md:last:pr-0" data-astro-cid-poyn3awd> ${renderComponent($$result, "ProductCard", $$ProductCard, { "title": product.title, "slug": product.slug, "tag": product.tag, "image": product.image, "focus": product.focus, "specs": product.specs, "data-astro-cid-poyn3awd": true })} </div>`)} </div> </div> </section> `;
}, "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/components/ProductGrid.astro", void 0);

const $$BentoGrid = createComponent(($$result, $$props, $$slots) => {
  const applications = [
    {
      title: "Hotel & Ballroom",
      desc: "Estetika mewah dengan peredaman suara maksimal (Soundproof) untuk acara privat.",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800",
      size: "lg",
      animationType: "sound"
    },
    {
      title: "Perkantoran",
      desc: "Ubah ruang kerja open-plan menjadi ruang meeting privat dalam hitungan menit.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      size: "md",
      animationType: "move"
    },
    {
      title: "Pendidikan",
      desc: "Fokus belajar terjaga.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
      size: "sm",
      animationType: null
    },
    {
      title: "Tempat Ibadah",
      desc: "Kekhusyukan tanpa gangguan.",
      image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=800",
      size: "sm",
      animationType: "lock"
    }
  ];
  function getSizeClasses(size) {
    switch (size) {
      case "lg":
        return "md:col-span-2 md:row-span-2 h-full min-h-[300px]";
      case "md":
        return "md:col-span-2 md:row-span-1 h-full min-h-[200px]";
      default:
        return "md:col-span-1 md:row-span-1 h-full min-h-[200px]";
    }
  }
  return renderTemplate`${maybeRenderHead()}<section class="py-24 bg-[#072181] text-white relative overflow-hidden" data-astro-cid-f44o672t> <!-- Background Pattern --> <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 32px 32px;" data-astro-cid-f44o672t></div> <div class="container mx-auto px-4 md:px-6 relative z-10" data-astro-cid-f44o672t> <!-- Section Header --> <div class="text-center max-w-2xl mx-auto mb-16" data-astro-cid-f44o672t> <h2 class="text-yellow-400 font-bold text-sm uppercase tracking-widest mb-3" data-astro-cid-f44o672t>Sektor Aplikasi</h2> <h3 class="text-3xl md:text-4xl font-bold text-white tracking-tight" data-astro-cid-f44o672t>Solusi untuk Berbagai Ruangan</h3> <p class="text-slate-300 mt-4" data-astro-cid-f44o672t>Partisi kami dirancang untuk fleksibilitas dan kenyamanan akustik di berbagai industri.</p> </div> <!-- Bento Grid --> <div class="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[500px]" data-astro-cid-f44o672t> ${applications.map((app) => renderTemplate`<div${addAttribute(`relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer ${getSizeClasses(app.size)}`, "class")} data-astro-cid-f44o672t> <!-- Background Image --> <img${addAttribute(app.image, "src")}${addAttribute(app.title, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" data-astro-cid-f44o672t> <!-- Gradient Overlay --> <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 flex flex-col justify-end" data-astro-cid-f44o672t> <!-- Icon --> <div class="mb-2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30" data-astro-cid-f44o672t> ${app.animationType === "sound" && renderTemplate`<div class="flex gap-0.5 items-end h-4" data-astro-cid-f44o672t> <div class="w-1 bg-yellow-400 rounded-full animate-sound-bar" style="animation-delay: 0ms;" data-astro-cid-f44o672t></div> <div class="w-1 bg-yellow-400 rounded-full animate-sound-bar" style="animation-delay: 100ms;" data-astro-cid-f44o672t></div> <div class="w-1 bg-yellow-400 rounded-full animate-sound-bar" style="animation-delay: 200ms;" data-astro-cid-f44o672t></div> <div class="w-1 bg-yellow-400 rounded-full animate-sound-bar" style="animation-delay: 300ms;" data-astro-cid-f44o672t></div> </div>`} ${app.animationType === "move" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-move-horizontal" data-astro-cid-f44o672t> <path d="M18 8L22 12L18 16" data-astro-cid-f44o672t></path> <path d="M6 8L2 12L6 16" data-astro-cid-f44o672t></path> <line x1="2" x2="22" y1="12" y2="12" data-astro-cid-f44o672t></line> </svg>`} ${app.animationType === "lock" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-f44o672t> <rect width="18" height="11" x="3" y="11" rx="2" ry="2" data-astro-cid-f44o672t></rect> <path d="M7 11V7a5 5 0 0 1 10 0v4" data-astro-cid-f44o672t></path> </svg>`} ${!app.animationType && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-f44o672t> <path d="M22 10v6M2 10l10-5 10 5-10 5z" data-astro-cid-f44o672t></path> <path d="M6 12v5c3 3 9 3 12 0v-5" data-astro-cid-f44o672t></path> </svg>`} </div> <h4 class="text-xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors" data-astro-cid-f44o672t>${app.title}</h4> <p class="text-slate-300 text-xs line-clamp-2 group-hover:text-white transition-colors" data-astro-cid-f44o672t>${app.desc}</p> </div> </div>`)} </div> </div> </section> `;
}, "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/components/BentoGrid.astro", void 0);

const $$StackedCards = createComponent(($$result, $$props, $$slots) => {
  const cards = [
    {
      title: "Berpengalaman Sejak 2008",
      description: "Lebih dari satu dekade menghadirkan inovasi dalam sistem partisi dan movable wall. Sebagai produsen langsung sejak 2011, kami memahami detail teknis hingga estetika terbaik untuk setiap ruang.",
      link: "/tentang-kami",
      linkText: "Tentang Pireki",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "1000+ Proyek di Seluruh Indonesia",
      description: "Dari ballroom hotel, ruang rapat perusahaan, hingga ruang belajar kampus \u2014 lebih dari seribu proyek telah kami selesaikan dengan standar profesionalisme dan ketepatan waktu.",
      link: "/galeri",
      linkText: "Proyek Pemasangan",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Dipercaya oleh Klien Besar",
      description: "Komitmen kami teruji melalui kepercayaan banyak nama besar: PT. Takenaka Indonesia, Universitas Warmadewa, serta berbagai lembaga pemerintahan dan swasta di seluruh Indonesia. Karena bagi kami, setiap proyek adalah cermin dari reputasi Pireki.",
      link: "/kontak",
      linkText: "Hubungi Kami",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-slate-950 py-24 relative" data-astro-cid-v3ldfyul> <div class="container mx-auto px-4 md:px-6" data-astro-cid-v3ldfyul> <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start" data-astro-cid-v3ldfyul> <!-- Left Column: Sticky Image --> <div class="lg:sticky lg:top-32 h-fit" data-astro-cid-v3ldfyul> <div class="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]" data-astro-cid-v3ldfyul> <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" alt="Pireki Projects" class="w-full h-full object-cover" id="stacked-image" data-astro-cid-v3ldfyul> <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" data-astro-cid-v3ldfyul></div> </div> </div> <!-- Right Column: Stacked Cards --> <div class="space-y-8" data-astro-cid-v3ldfyul> ${cards.map((card, idx) => renderTemplate`<div class="stacked-card sticky bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-10 shadow-xl transition-all duration-300"${addAttribute(`top: calc(8rem + ${idx * 2}rem);`, "style")}${addAttribute(card.image, "data-image")} data-astro-cid-v3ldfyul> <h3 class="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-tight" data-astro-cid-v3ldfyul> ${card.title} </h3> <p class="text-slate-400 text-base leading-relaxed mb-6" data-astro-cid-v3ldfyul> ${card.description} </p> <a${addAttribute(card.link, "href")} class="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors group" data-astro-cid-v3ldfyul> ${card.linkText} <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform" data-astro-cid-v3ldfyul> <path d="M5 12h14" data-astro-cid-v3ldfyul></path> <path d="m12 5 7 7-7 7" data-astro-cid-v3ldfyul></path> </svg> </a> </div>`)} <!-- Extra space for stacking effect --> <div class="h-48" data-astro-cid-v3ldfyul></div> </div> </div> </div> </section> ${renderScript($$result, "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/components/StackedCards.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/components/StackedCards.astro", void 0);

const $$Astro = createAstro();
const $$BlogSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogSection;
  const { posts, showHeader = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-24 bg-gray-50"> <div class="container mx-auto px-4 md:px-6"> ${showHeader && renderTemplate`<div class="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 text-center md:text-left"> <div> <h2 class="text-[#072181] font-bold text-sm uppercase tracking-widest mb-3">
Wawasan
</h2> <h3 class="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
Artikel & Edukasi
</h3> </div> <a href="/blog" class="text-[#072181] font-bold text-sm uppercase tracking-wide hover:underline mt-4 md:mt-0">
Lihat Semua Artikel
</a> </div>`} <!-- Blog Grid --> <div class="grid md:grid-cols-3 gap-8"> ${posts.map((post) => renderTemplate`${renderComponent($$result, "BlogCard", $$BlogCard, { "title": post.title, "slug": post.slug, "date": post.date, "image": post.image, "excerpt": post.excerpt })}`)} </div> </div> </section>`;
}, "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/components/BlogSection.astro", void 0);

const $$TestimonialCarousel = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      name: "Pak Budi Santoso",
      role: "General Manager, Hotel Santika",
      content: "Partisi ballroom dari Pireki sangat berkualitas. Suara benar-benar tidak bocor dan pemasangannya sangat profesional.",
      avatar: "https://i.pravatar.cc/100?img=11"
    },
    {
      name: "Ibu Dewi Lestari",
      role: "Kepala Bagian Umum, Universitas Airlangga",
      content: "Kami sangat puas dengan movable wall untuk ruang kuliah. Fleksibilitas ruang meningkat drastis.",
      avatar: "https://i.pravatar.cc/100?img=5"
    },
    {
      name: "Pak Andi Wijaya",
      role: "Facility Manager, PT Pertamina",
      content: "Pengerjaan cepat dan hasil sangat memuaskan. Tim Pireki sangat profesional dan responsif.",
      avatar: "https://i.pravatar.cc/100?img=12"
    },
    {
      name: "Ibu Siti Rahayu",
      role: "Owner, Convention Hall Surabaya",
      content: "Sudah 5 tahun menggunakan partisi Pireki, kualitasnya tetap prima. Sangat recommended!",
      avatar: "https://i.pravatar.cc/100?img=9"
    },
    {
      name: "Pak Herman Tanjung",
      role: "Direktur, PT Takenaka Indonesia",
      content: "Kerjasama dengan Pireki selalu lancar. Produknya sesuai spesifikasi dan tepat waktu.",
      avatar: "https://i.pravatar.cc/100?img=15"
    },
    {
      name: "Ibu Maya Anggraini",
      role: "Arsitek Interior, Studio Design",
      content: "Finishing HPL custom-nya sangat bagus dan presisi. Klien saya selalu puas dengan hasilnya.",
      avatar: "https://i.pravatar.cc/100?img=20"
    }
  ];
  const allTestimonials = [...testimonials, ...testimonials];
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-slate-50 overflow-hidden" data-astro-cid-e7lonx73> <div class="container mx-auto px-4 md:px-6 mb-12" data-astro-cid-e7lonx73> <div class="text-center max-w-2xl mx-auto" data-astro-cid-e7lonx73> <h2 class="text-[#072181] font-bold text-sm uppercase tracking-widest mb-3" data-astro-cid-e7lonx73>Testimoni</h2> <h3 class="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight" data-astro-cid-e7lonx73>Apa Kata Klien Kami</h3> </div> </div> <!-- Carousel Container --> <div class="relative" data-astro-cid-e7lonx73> <div class="flex gap-6 animate-scroll-left" data-astro-cid-e7lonx73> ${allTestimonials.map((testimonial) => renderTemplate`<div class="flex-shrink-0 w-[260px] md:w-[350px] bg-white rounded-xl p-6 shadow-lg border border-gray-100" data-astro-cid-e7lonx73> <!-- Stars --> <div class="flex gap-1 text-yellow-400 mb-4" data-astro-cid-e7lonx73> ${[1, 2, 3, 4, 5].map(() => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-e7lonx73> <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" data-astro-cid-e7lonx73></polygon> </svg>`)} </div> <!-- Content --> <p class="text-slate-600 leading-relaxed mb-6 text-sm" data-astro-cid-e7lonx73>"${testimonial.content}"</p> <!-- Author --> <div data-astro-cid-e7lonx73> <div class="font-bold text-slate-900 text-sm" data-astro-cid-e7lonx73>${testimonial.name}</div> <div class="text-slate-500 text-xs" data-astro-cid-e7lonx73>${testimonial.role}</div> </div> </div>`)} </div> </div> </section> `;
}, "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/components/TestimonialCarousel.astro", void 0);

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      question: "Berapa lama proses pemesanan hingga pemasangan?",
      answer: "Proses dari pemesanan hingga pemasangan biasanya memakan waktu 2-4 minggu, tergantung pada kompleksitas proyek dan ketersediaan material."
    },
    {
      question: "Apakah tersedia garansi untuk produk partisi?",
      answer: "Ya, kami memberikan garansi resmi 1-3 tahun untuk semua produk partisi kami, mencakup material dan mekanisme geser."
    },
    {
      question: "Bisakah partisi disesuaikan dengan desain interior?",
      answer: "Tentu! Kami menyediakan berbagai pilihan finishing HPL, wallpaper, dan cat custom yang dapat disesuaikan dengan estetika ruangan Anda."
    },
    {
      question: "Apakah partisi Pireki benar-benar kedap suara?",
      answer: "Produk kami menggunakan Rockwool 100kg/m\xB3 yang dapat meredam suara hingga 45-52 dB, memberikan privasi optimal antar ruangan."
    },
    {
      question: "Bagaimana cara pemeliharaan partisi geser?",
      answer: "Partisi kami dirancang low-maintenance. Cukup bersihkan permukaan dengan kain lembab dan lakukan pelumasan rel setiap 6 bulan."
    },
    {
      question: "Apakah bisa melakukan survey lokasi sebelum pemesanan?",
      answer: "Ya, tim kami menyediakan layanan survey dan konsultasi gratis untuk pengukuran dan rekomendasi produk yang tepat."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-white relative overflow-hidden" data-astro-cid-al2ca2vr> <!-- Animated Background Elements --> <div class="absolute inset-0 pointer-events-none" data-astro-cid-al2ca2vr> <!-- Floating Circles --> <div class="absolute top-20 right-10 w-40 h-40 rounded-full bg-blue-100/30 blur-3xl animate-float-slow" data-astro-cid-al2ca2vr></div> <div class="absolute bottom-20 left-10 w-56 h-56 rounded-full bg-yellow-100/20 blur-3xl animate-float-delay" data-astro-cid-al2ca2vr></div> <div class="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-indigo-100/25 blur-2xl animate-float-reverse" data-astro-cid-al2ca2vr></div> <!-- Grid Pattern --> <div class="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:60px_60px]" data-astro-cid-al2ca2vr></div> <!-- Connecting Lines SVG --> <svg class="absolute inset-0 w-full h-full opacity-10" data-astro-cid-al2ca2vr> <defs data-astro-cid-al2ca2vr> <linearGradient id="faqLineGrad" x1="0%" y1="0%" x2="0%" y2="100%" data-astro-cid-al2ca2vr> <stop offset="0%" style="stop-color:#072181;stop-opacity:0" data-astro-cid-al2ca2vr></stop> <stop offset="50%" style="stop-color:#072181;stop-opacity:0.6" data-astro-cid-al2ca2vr></stop> <stop offset="100%" style="stop-color:#072181;stop-opacity:0" data-astro-cid-al2ca2vr></stop> </linearGradient> </defs> <line x1="50%" y1="0" x2="50%" y2="100%" stroke="url(#faqLineGrad)" stroke-width="1" class="animate-line-vertical" data-astro-cid-al2ca2vr></line> </svg> <!-- Dots --> <div class="absolute top-40 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse" data-astro-cid-al2ca2vr></div> <div class="absolute bottom-40 right-1/4 w-1.5 h-1.5 bg-yellow-400/40 rounded-full animate-pulse-delay" data-astro-cid-al2ca2vr></div> </div> <div class="container mx-auto px-4 md:px-6 relative z-10" data-astro-cid-al2ca2vr> <!-- Header --> <div class="text-center max-w-2xl mx-auto mb-12" data-astro-cid-al2ca2vr> <span class="inline-flex items-center gap-2 text-slate-500 text-sm font-medium mb-4" data-astro-cid-al2ca2vr> <span class="w-2 h-2 rounded-full bg-[#072181]" data-astro-cid-al2ca2vr></span>
FAQ
</span> <h2 class="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4" data-astro-cid-al2ca2vr>
Frequently Asked Questions
</h2> <p class="text-slate-500" data-astro-cid-al2ca2vr>
Kami siap membantu menjawab pertanyaan Anda.
</p> </div> <!-- FAQ Grid with Connecting Lines --> <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-4 relative" data-astro-cid-al2ca2vr> <!-- Vertical connecting line --> <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-200 to-transparent -translate-x-1/2 animate-line-flow" data-astro-cid-al2ca2vr></div> ${faqs.map((faq, idx) => renderTemplate`<details class="group bg-gray-50 rounded-xl border border-gray-100 overflow-hidden hover:border-[#072181]/30 transition-colors relative" data-astro-cid-al2ca2vr> <!-- Horizontal connecting line to center --> <div${addAttribute(`hidden md:block absolute top-1/2 w-4 h-px bg-blue-200/50 ${idx % 2 === 0 ? "right-0 translate-x-full" : "left-0 -translate-x-full"}`, "class")} data-astro-cid-al2ca2vr></div> <summary class="flex items-center justify-between p-5 cursor-pointer list-none" data-astro-cid-al2ca2vr> <span class="font-semibold text-slate-800 text-sm md:text-base pr-4" data-astro-cid-al2ca2vr> ${faq.question} </span> <div class="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center shrink-0 group-open:bg-[#072181] group-open:border-[#072181] transition-all" data-astro-cid-al2ca2vr> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-400 group-open:text-white group-open:rotate-45 transition-all" data-astro-cid-al2ca2vr> <path d="M7 17L17 7" data-astro-cid-al2ca2vr></path> <path d="M7 7h10v10" data-astro-cid-al2ca2vr></path> </svg> </div> </summary> <div class="px-5 pb-5 text-slate-600 text-sm leading-relaxed" data-astro-cid-al2ca2vr> ${faq.answer} </div> </details>`)} </div> <!-- Contact CTA --> <div class="text-center mt-10" data-astro-cid-al2ca2vr> <a href="/kontak" class="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-full text-slate-700 font-medium hover:border-[#072181] hover:text-[#072181] transition-colors" data-astro-cid-al2ca2vr>
Hubungi Kami
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-al2ca2vr> <path d="M7 17L17 7" data-astro-cid-al2ca2vr></path> <path d="M7 7h10v10" data-astro-cid-al2ca2vr></path> </svg> </a> </div> </div> </section> `;
}, "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/components/FAQ.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let products = await fetchProducts(3);
  let posts = await fetchPosts(3);
  if (!products || products.length === 0) {
    products = STATIC_PRODUCTS;
  }
  if (!posts || posts.length === 0) {
    posts = STATIC_POSTS;
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Spesialis Partisi Ruangan Kedap Suara" }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, {})}  ${renderComponent($$result2, "TrustedLogos", $$TrustedLogos, {})}  ${renderComponent($$result2, "Benefits", $$Benefits, {})}  ${renderComponent($$result2, "ProductGrid", $$ProductGrid, { "products": products })}  ${renderComponent($$result2, "FlowGallery", $$FlowGallery, {})}  ${renderComponent($$result2, "BentoGrid", $$BentoGrid, {})}  ${renderComponent($$result2, "StackedCards", $$StackedCards, {})}  ${renderComponent($$result2, "BlogSection", $$BlogSection, { "posts": posts })}  ${renderComponent($$result2, "TestimonialCarousel", $$TestimonialCarousel, {})}  ${renderComponent($$result2, "FAQ", $$FAQ, {})}  ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/pages/index.astro", void 0);

const $$file = "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
