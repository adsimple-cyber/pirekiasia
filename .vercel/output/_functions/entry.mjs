import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_dVfoxo1g.mjs';
import { manifest } from './manifest_CQHP0m8f.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/blog/_slug_.astro.mjs');
const _page2 = () => import('./pages/blog.astro.mjs');
const _page3 = () => import('./pages/galeri.astro.mjs');
const _page4 = () => import('./pages/kontak.astro.mjs');
const _page5 = () => import('./pages/produk/_slug_.astro.mjs');
const _page6 = () => import('./pages/produk.astro.mjs');
const _page7 = () => import('./pages/tentang-kami.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/blog/[slug].astro", _page1],
    ["src/pages/blog/index.astro", _page2],
    ["src/pages/galeri.astro", _page3],
    ["src/pages/kontak.astro", _page4],
    ["src/pages/produk/[slug].astro", _page5],
    ["src/pages/produk/index.astro", _page6],
    ["src/pages/tentang-kami.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d027603d-e8e5-4e13-b15a-142966b78b93",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
