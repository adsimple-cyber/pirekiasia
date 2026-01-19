import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DCKeI3NF.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CpCs8XBY.mjs';
import { $ as $$BlogCard } from '../chunks/BlogCard_C3U5WfI-.mjs';
import { a as fetchPosts, S as STATIC_POSTS } from '../chunks/wordpress_Jj2B-W0L.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let posts = await fetchPosts(20);
  if (!posts || posts.length === 0) {
    posts = STATIC_POSTS;
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog & Artikel", "description": "Baca artikel terbaru seputar partisi ruangan, tips perawatan, dan edukasi produk dari CV Pireki Asia." }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-[#072181] pt-32 pb-20 relative overflow-hidden"> <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 32px 32px;"></div> <div class="container mx-auto px-4 md:px-6 relative z-10"> <div class="max-w-3xl"> <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
Blog & Artikel
</h1> <p class="text-lg text-blue-100/80 leading-relaxed">
Tips, panduan, dan wawasan seputar partisi ruangan untuk
                    membantu Anda membuat keputusan terbaik.
</p> </div> </div> </section>  <section class="py-16 bg-gray-50"> <div class="container mx-auto px-4 md:px-6"> <div class="grid md:grid-cols-3 gap-8"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "title": post.title, "slug": post.slug, "date": post.date, "image": post.image, "excerpt": post.excerpt })}`)} </div> <!-- Pagination Placeholder --> ${posts.length > 9 && renderTemplate`<div class="mt-12 flex justify-center gap-2"> <button class="w-10 h-10 rounded-md bg-[#072181] text-white font-medium">
1
</button> <button class="w-10 h-10 rounded-md bg-white border border-gray-200 text-slate-700 hover:border-[#072181] transition-colors">
2
</button> <button class="w-10 h-10 rounded-md bg-white border border-gray-200 text-slate-700 hover:border-[#072181] transition-colors">
3
</button> </div>`} </div> </section> ` })}`;
}, "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
