import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_DCKeI3NF.mjs';
import 'piccolore';
import 'clsx';
import { b as formatDate } from './wordpress_B-VFfZ0-.mjs';

const $$Astro = createAstro();
const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const { title, slug, date, image, excerpt } = Astro2.props;
  const formattedDate = formatDate(date);
  return renderTemplate`${maybeRenderHead()}<article class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow group cursor-pointer"> <a${addAttribute(`/blog/${slug}`, "href")} class="block"> <!-- Image --> <div class="overflow-hidden h-52"> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" loading="lazy"> </div> <!-- Content --> <div class="p-8"> <span class="text-xs font-bold text-yellow-600 mb-3 block uppercase tracking-wider"> ${formattedDate} </span> <h4 class="text-lg font-bold text-slate-900 mb-4 leading-snug group-hover:text-[#072181] transition-colors"> ${title} </h4> <span class="text-[#072181] font-bold text-xs uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all">
Baca Selengkapnya
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M5 12h14"></path> <path d="m12 5 7 7-7 7"></path> </svg> </span> </div> </a> </article>`;
}, "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/components/BlogCard.astro", void 0);

export { $$BlogCard as $ };
