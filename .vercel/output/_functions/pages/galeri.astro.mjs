import { e as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_DCKeI3NF.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CpCs8XBY.mjs';
import { $ as $$CTA } from '../chunks/CTA_AsLQ_FIB.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Galeri = createComponent(($$result, $$props, $$slots) => {
  const galleryImages = [
    { src: "/slide1.webp", alt: "Project Ballroom Hotel", span: "row-span-2" },
    { src: "/Sorepa.webp", alt: "Sorepa Partition Detail", span: "" },
    { src: "/slide2.webp", alt: "Office Meeting Room", span: "" },
    { src: "/slide3.webp", alt: "Convention Hall Installation", span: "col-span-2" },
    { src: "/Samowa.webp", alt: "Samowa Folding Gate", span: "" },
    { src: "/slide4.webp", alt: "University Auditorium", span: "row-span-2" },
    { src: "/slide5.webp", alt: "Restaurant VIP Room", span: "" },
    { src: "/Nice Partisi.webp", alt: "Nice Partition Divider", span: "" },
    { src: "/slide6.webp", alt: "Classroom Partition", span: "" },
    { src: "/slide7.webp", alt: "Religious Building Hall", span: "col-span-2" }
  ];
  return renderTemplate(_a || (_a = __template(["", " <script>\n    function openLightbox(src, alt) {\n        const lightbox = document.getElementById('lightbox');\n        const img = document.getElementById('lightbox-img');\n        const caption = document.getElementById('lightbox-caption');\n        \n        if (lightbox && img && caption) {\n            img.src = src;\n            caption.textContent = alt;\n            lightbox.classList.remove('hidden');\n            document.body.style.overflow = 'hidden'; // Prevent scrolling\n        }\n    }\n\n    function closeLightbox() {\n        const lightbox = document.getElementById('lightbox');\n        \n        if (lightbox) {\n            lightbox.classList.add('hidden');\n            document.body.style.overflow = 'auto'; // Restore scrolling\n        }\n    }\n\n    // Close on background click\n    document.getElementById('lightbox')?.addEventListener('click', (e) => {\n        if (e.target.id === 'lightbox') {\n            closeLightbox();\n        }\n    });\n\n    // Close on Escape key\n    document.addEventListener('keydown', (e) => {\n        if (e.key === 'Escape') {\n            closeLightbox();\n        }\n    });\n<\/script>"])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Galeri Proyek", "description": "Dokumentasi pemasangan partisi ruangan geser dan folding gate di berbagai lokasi di Indonesia." }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-slate-900 pt-32 pb-20 relative overflow-hidden"> <!-- Background Elements --> <div class="absolute inset-0 z-0"> <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-[#072181]/30 rounded-full blur-[100px] opacity-40"></div> <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] opacity-30"></div> <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div> </div> <div class="container mx-auto px-4 md:px-6 relative z-10 text-center"> <span class="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
Portfolio Kami
</span> <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
Galeri Proyek
</h1> <p class="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
Koleksi dokumentasi pemasangan partisi ruangan geser di berbagai instansi dan lokasi project CV Pireki Asia.
</p> </div> </section>  <section class="py-20 bg-white"> <div class="container mx-auto px-4 md:px-6"> <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]"> ${galleryImages.map((img, idx) => renderTemplate`<div${addAttribute(`group relative rounded-2xl overflow-hidden cursor-pointer ${img.span} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`, "class")}${addAttribute(`openLightbox('${img.src}', '${img.alt}')`, "onclick")}> <img${addAttribute(img.src, "src")}${addAttribute(img.alt, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy"> <!-- Overlay --> <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"> <span class="text-[#25D366] text-xs font-bold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
Proyek
</span> <h3 class="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300"> ${img.alt} </h3> </div> </div>`)} </div> </div> </section>  ${renderComponent($$result2, "CTA", $$CTA, {})}  <div id="lightbox" class="fixed inset-0 z-[100] bg-black/95 hidden flex items-center justify-center p-4"> <button onclick="closeLightbox()" class="absolute top-6 right-6 text-white hover:text-gray-300"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> </button> <img id="lightbox-img" src="" alt="Gallery Preview" class="max-w-full max-h-[90vh] rounded-lg shadow-2xl"> <p id="lightbox-caption" class="absolute bottom-8 text-white/80 text-lg font-medium tracking-wide"></p> </div> ` }));
}, "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/pages/galeri.astro", void 0);

const $$file = "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/pages/galeri.astro";
const $$url = "/galeri";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Galeri,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
