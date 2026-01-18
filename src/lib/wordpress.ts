/**
 * WordPress REST API Helper Library
 * For CV Pireki Asia - Headless CMS Integration
 */

// API Base URL from environment variable
const API_URL = import.meta.env.WORDPRESS_API_URL || 'https://partisi.cvpirekiasia.com/wp-json/wp/v2';

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: number;
  title: string;
  slug: string;
  image: string;
  tag: string;
  focus: string;
  excerpt: string;
  content: string;
  specs: ProductSpec[];
}

export interface Post {
  id: number;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  categories: number[];
}

export interface Page {
  id: number;
  title: string;
  slug: string;
  content: string;
}

export interface MediaItem {
  id: number;
  url: string;
  alt: string;
  width: number;
  height: number;
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Strip HTML tags from string
 */
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

/**
 * Format date to Indonesian locale
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

/**
 * Generic fetch wrapper with error handling
 */
async function fetchAPI<T>(endpoint: string): Promise<T | null> {
  try {
    const response = await fetch(`${API_URL}${endpoint}`);

    if (!response.ok) {
      console.error(`API Error: ${response.status} ${response.statusText}`);
      return null;
    }

    return await response.json() as T;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}

// ============================================
// PRODUCTS API
// ============================================

interface WPProduct {
  id: number;
  title: { rendered: string };
  slug: string;
  excerpt: { rendered: string };
  content: { rendered: string };
  featured_media: number;
  acf?: {
    tag?: string;
    focus?: string;
    specs?: ProductSpec[];
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>;
  };
}

/**
 * Fetch all products from WordPress
 * Expects a custom post type 'produk' or uses 'posts' with category filter
 */
export async function fetchProducts(limit: number = 10): Promise<Product[]> {
  // Try custom post type first, fallback to posts
  let data = await fetchAPI<WPProduct[]>(`/produk?per_page=${limit}&_embed`);

  if (!data) {
    // Fallback to posts with product category
    data = await fetchAPI<WPProduct[]>(`/posts?per_page=${limit}&_embed&categories=produk`);
  }

  if (!data) return [];

  return data.map(item => ({
    id: item.id,
    title: stripHtml(item.title.rendered),
    slug: item.slug,
    image: item._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg',
    tag: item.acf?.tag || 'Produk',
    focus: item.acf?.focus || '',
    excerpt: stripHtml(item.excerpt.rendered),
    content: item.content.rendered,
    specs: item.acf?.specs || []
  }));
}

/**
 * Fetch single product by slug
 */
export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  let data = await fetchAPI<WPProduct[]>(`/produk?slug=${slug}&_embed`);

  if (!data || data.length === 0) {
    data = await fetchAPI<WPProduct[]>(`/posts?slug=${slug}&_embed`);
  }

  if (!data || data.length === 0) return null;

  const item = data[0];
  return {
    id: item.id,
    title: stripHtml(item.title.rendered),
    slug: item.slug,
    image: item._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg',
    tag: item.acf?.tag || 'Produk',
    focus: item.acf?.focus || '',
    excerpt: stripHtml(item.excerpt.rendered),
    content: item.content.rendered,
    specs: item.acf?.specs || []
  };
}

// ============================================
// BLOG POSTS API
// ============================================

interface WPPost {
  id: number;
  title: { rendered: string };
  slug: string;
  date: string;
  excerpt: { rendered: string };
  content: { rendered: string };
  categories: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>;
  };
}

/**
 * Fetch blog posts
 */
export async function fetchPosts(limit: number = 10): Promise<Post[]> {
  const data = await fetchAPI<WPPost[]>(`/posts?per_page=${limit}&_embed`);

  if (!data) return [];

  return data.map(item => ({
    id: item.id,
    title: stripHtml(item.title.rendered),
    slug: item.slug,
    date: item.date,
    excerpt: stripHtml(item.excerpt.rendered),
    content: item.content.rendered,
    image: item._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg',
    categories: item.categories
  }));
}

/**
 * Fetch single post by slug
 */
export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  const data = await fetchAPI<WPPost[]>(`/posts?slug=${slug}&_embed`);

  if (!data || data.length === 0) return null;

  const item = data[0];
  return {
    id: item.id,
    title: stripHtml(item.title.rendered),
    slug: item.slug,
    date: item.date,
    excerpt: stripHtml(item.excerpt.rendered),
    content: item.content.rendered,
    image: item._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg',
    categories: item.categories
  };
}

/**
 * Fetch all post slugs for static generation
 */
export async function fetchAllPostSlugs(): Promise<string[]> {
  const data = await fetchAPI<WPPost[]>(`/posts?per_page=100&_fields=slug`);
  return data ? data.map(item => item.slug) : [];
}

// ============================================
// PAGES API
// ============================================

interface WPPage {
  id: number;
  title: { rendered: string };
  slug: string;
  content: { rendered: string };
}

/**
 * Fetch page by slug
 */
export async function fetchPageBySlug(slug: string): Promise<Page | null> {
  const data = await fetchAPI<WPPage[]>(`/pages?slug=${slug}`);

  if (!data || data.length === 0) return null;

  const item = data[0];
  return {
    id: item.id,
    title: stripHtml(item.title.rendered),
    slug: item.slug,
    content: item.content.rendered
  };
}

// ============================================
// STATIC DATA (Fallback when API is unavailable)
// ============================================

export const STATIC_PRODUCTS: Product[] = [
  {
    id: 1,
    title: "SOREPA",
    slug: "sorepa",
    tag: "Best Seller",
    image: "/Sorepa.webp",
    focus: "Peredaman Suara Maksimal",
    excerpt: "Partisi geser premium dengan peredaman suara terbaik di kelasnya.",
    content: "",
    specs: [
      { label: "Sistem", value: "Sliding per Section (Geser)" },
      { label: "Rangka Besi", value: "Hollow 5 x 5" },
      { label: "Material Peredam", value: "Rockwool 60kg/m³" },
      { label: "Ketebalan Panel", value: "~8 cm" },
      { label: "Material Panel", value: "Multiplek / MDF 9-12 mm" },
      { label: "Sistem Rel", value: "Rel Atas" },
      { label: "Ideal Untuk", value: "Ballroom Hotel, Ruang Rapat Direksi, Studio Musik" }
    ]
  },
  {
    id: 2,
    title: "SAMOWA",
    slug: "samowa",
    tag: "Populer",
    image: "/Samowa.webp",
    focus: "Fleksibilitas & Harga Terjangkau",
    excerpt: "Partisi lipat fleksibel dengan harga terjangkau.",
    content: "",
    specs: [
      { label: "Sistem", value: "Lipat Dorong" },
      { label: "Rangka Besi", value: "Hollow 4 x 4" },
      { label: "Material Peredam", value: "Glasswool 30kg/m³" },
      { label: "Ketebalan Panel", value: "~6 cm" },
      { label: "Material Panel", value: "Multiplek 9 mm" },
      { label: "Sistem Rel", value: "Rel Atas & Bawah" },
      { label: "Ideal Untuk", value: "Ruang Kelas, Kantor, Restoran" }
    ]
  },
  {
    id: 3,
    title: "NICE PARTITION",
    slug: "nice-partition",
    tag: "Ekonomis",
    image: "/Nice Partisi.webp",
    focus: "Solusi Paling Ekonomis",
    excerpt: "Partisi ekonomis untuk kebutuhan sekat ruangan sederhana.",
    content: "",
    specs: [
      { label: "Sistem", value: "Lipat Dorong" },
      { label: "Rangka Besi", value: "Hollow 4 x 4" },
      { label: "Material Peredam", value: "Tanpa Peredam Khusus" },
      { label: "Ketebalan Panel", value: "~6 cm" },
      { label: "Material Panel", value: "Multiplek 6 mm" },
      { label: "Sistem Rel", value: "Rel Atas & Bawah" },
      { label: "Ideal Untuk", value: "Sekat Ruang Tamu, Ruang Ibadah" }
    ]
  }
];

export const STATIC_POSTS: Post[] = [
  {
    id: 1,
    title: "Tips Memilih Partisi Ruangan yang Tepat",
    slug: "tips-memilih-partisi-ruangan",
    date: "2024-01-15",
    excerpt: "Panduan lengkap memilih partisi ruangan sesuai kebutuhan dan budget Anda.",
    content: "",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
    categories: []
  },
  {
    id: 2,
    title: "Perbedaan Movable Wall & Folding Gate",
    slug: "perbedaan-movable-wall-folding-gate",
    date: "2024-01-10",
    excerpt: "Memahami perbedaan sistem partisi geser dan partisi lipat untuk kebutuhan Anda.",
    content: "",
    image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80&w=800",
    categories: []
  },
  {
    id: 3,
    title: "Cara Merawat Partisi Geser",
    slug: "cara-merawat-partisi-geser",
    date: "2024-01-05",
    excerpt: "Tips perawatan partisi agar tetap awet dan berfungsi optimal.",
    content: "",
    image: "https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80&w=800",
    categories: []
  }
];
