import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_DCKeI3NF.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CpCs8XBY.mjs';
import { $ as $$BlogCard } from '../../chunks/BlogCard_C3610OCo.mjs';
import { f as fetchPostBySlug, S as STATIC_POSTS, a as fetchPosts, b as formatDate } from '../../chunks/wordpress_vfo1_j38.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  let post = await fetchPostBySlug(slug);
  if (!post) {
    const fallback = STATIC_POSTS.find((p) => p.slug === slug);
    if (fallback) {
      post = fallback;
    }
  }
  if (!post) {
    return Astro2.redirect("/404");
  }
  let allPosts = await fetchPosts(6);
  if (!allPosts || allPosts.length === 0) {
    allPosts = STATIC_POSTS;
  }
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": post.title, "description": post.excerpt, "image": post.image }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-[#072181] pt-32 pb-20 relative overflow-hidden"> <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 32px 32px;"></div> <div class="container mx-auto px-4 md:px-6 relative z-10"> <!-- Breadcrumb --> <nav class="mb-6"> <ol class="flex items-center gap-2 text-sm text-blue-200"> <li><a href="/" class="hover:text-white">Beranda</a></li> <li>/</li> <li><a href="/blog" class="hover:text-white">Blog</a></li> <li>/</li> <li class="text-white truncate max-w-[200px]"> ${post.title} </li> </ol> </nav> <div class="max-w-3xl"> <span class="text-yellow-400 text-sm font-bold uppercase tracking-wider mb-4 block"> ${formatDate(post.date)} </span> <h1 class="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight"> ${post.title} </h1> </div> </div> </section>  <div class="container mx-auto px-4 md:px-6 -mt-8 relative z-20"> <div class="rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto"> <img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} class="w-full h-auto object-cover"> </div> </div>  <section class="py-16 bg-white"> <div class="container mx-auto px-4 md:px-6"> <article class="max-w-3xl mx-auto"> ${post.content ? renderTemplate`<div class="prose prose-lg prose-slate max-w-none">${unescapeHTML(post.content)}</div>` : renderTemplate`<div class="prose prose-lg prose-slate max-w-none"> <p>${post.excerpt}</p> <p class="text-slate-500 italic">
Konten lengkap akan tersedia segera.
</p> </div>`} <!-- Share Buttons --> <div class="mt-12 pt-8 border-t border-gray-200"> <p class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
Bagikan Artikel
</p> <div class="flex gap-4"> <a${addAttribute(`https://wa.me/?text=${encodeURIComponent(post.title + " - " + Astro2.url)}`, "href")} target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-md bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity" aria-label="Share on WhatsApp"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path> </svg> </a> <a${addAttribute(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(Astro2.url.toString())}`, "href")} target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-md bg-slate-800 text-white flex items-center justify-center hover:opacity-90 transition-opacity" aria-label="Share on Twitter"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path> </svg> </a> <a${addAttribute(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(Astro2.url.toString())}`, "href")} target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-md bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity" aria-label="Share on Facebook"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path> </svg> </a> </div> </div> </article> </div> </section>  ${relatedPosts.length > 0 && renderTemplate`<section class="py-16 bg-gray-50"> <div class="container mx-auto px-4 md:px-6"> <h2 class="text-2xl font-bold text-slate-900 mb-8">
Artikel Terkait
</h2> <div class="grid md:grid-cols-3 gap-8"> ${relatedPosts.map((relatedPost) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "title": relatedPost.title, "slug": relatedPost.slug, "date": relatedPost.date, "image": relatedPost.image })}`)} </div> </div> </section>`}` })}`;
}, "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/Administrator/Documents/Porto/cvpireki/pirekiasia/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
