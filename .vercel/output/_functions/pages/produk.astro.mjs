import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DCKeI3NF.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CpCs8XBY.mjs';
import { $ as $$ProductCard } from '../chunks/ProductCard_BHuWd5Cn.mjs';
import { $ as $$CTA } from '../chunks/CTA_AsLQ_FIB.mjs';
import { e as fetchProducts, d as STATIC_PRODUCTS } from '../chunks/wordpress_vfo1_j38.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let products = await fetchProducts(20);
  if (!products || products.length === 0) {
    products = STATIC_PRODUCTS;
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Katalog Produk Partisi", "description": "Lihat katalog lengkap produk partisi ruangan dari CV Pireki Asia. Movable wall, folding gate, dan partisi lipat berkualitas." }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-[#072181] pt-32 pb-20 relative overflow-hidden"> <!-- Background --> <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 32px 32px;"></div> <div class="container mx-auto px-4 md:px-6 relative z-10"> <div class="max-w-3xl"> <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
Katalog Produk
</h1> <p class="text-lg text-blue-100/80 leading-relaxed">
Temukan solusi partisi ruangan yang tepat untuk kebutuhan
                    Anda. Dari movable wall premium hingga folding gate
                    ekonomis.
</p> </div> </div> </section>  <section class="py-16 bg-gray-50"> <div class="container mx-auto px-4 md:px-6"> <!-- Filter Tags (Static for now) --> <div class="flex flex-wrap gap-3 mb-12"> <button class="px-4 py-2 rounded-full text-sm font-medium bg-[#072181] text-white">
Semua
</button> <button class="px-4 py-2 rounded-full text-sm font-medium bg-white text-slate-700 border border-gray-200 hover:border-[#072181] hover:text-[#072181] transition-colors">
Movable Wall
</button> <button class="px-4 py-2 rounded-full text-sm font-medium bg-white text-slate-700 border border-gray-200 hover:border-[#072181] hover:text-[#072181] transition-colors">
Folding Gate
</button> <button class="px-4 py-2 rounded-full text-sm font-medium bg-white text-slate-700 border border-gray-200 hover:border-[#072181] hover:text-[#072181] transition-colors">
Partisi Lipat
</button> </div> <!-- Grid --> <div class="grid md:grid-cols-3 gap-8 items-start"> ${products.map((product) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { "title": product.title, "slug": product.slug, "tag": product.tag, "image": product.image, "focus": product.focus, "specs": product.specs })}`)} </div> </div> </section>  ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/pages/produk/index.astro", void 0);

const $$file = "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/pages/produk/index.astro";
const $$url = "/produk";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
