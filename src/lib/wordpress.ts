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
  bentoFeatures?: {
    title: string;
    description: string;
    icon: string; // Lucide icon name
    image?: string;
    cols?: number; // 1 or 2
  }[];
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

export const STATIC_PRODUCTS: Product[] & { bentoFeatures?: any[] } = [
  {
    id: 1,
    title: "SOREPA",
    slug: "sorepa",
    tag: "Best Seller",
    image: "/Sorepa.webp",
    focus: "Peredaman Suara Maksimal",
    excerpt: "Partisi geser premium dengan peredaman suara terbaik di kelasnya.",
    content: "SOREPA (Sound Reduce Partition) adalah produk unggulan CV Pireki Asia yang dirancang khusus untuk memenuhi kebutuhan ruangan dengan insulasi suara tinggi. Ideal untuk Ballroom hotel, ruang meeting, auditorium, dan ruang kelas yang membutuhkan ketenangan maksimal.",
    specs: [
      { label: "Sistem", value: "Sliding per Section (Geser per panel)" },
      { label: "Tingkat Peredaman", value: "STC 45 - STC 55 (High Insulation)" },
      { label: "Rangka Konstruksi", value: "Hollow Besi 50x50 mm + Profil Aluminium Anodized" },
      { label: "Isian (Inner Material)", value: "Rockwool Density 60-100kg/m³ + Paper Honeycomb" },
      { label: "Ketebalan Panel", value: "100 mm" },
      { label: "Panel Face", value: "MDF / Multiplek 12 mm" },
      { label: "Finishing", value: "HPL, Wallpaper, Kain Cosglow / Ateja" },
      { label: "Mekanisme", value: "Jack Mechanism (Atas & Bawah)" },
      { label: "Sistem Rel", value: "Rel Gantung Aluminium (Tanpa Rel Bawah)" }
    ],
    bentoFeatures: [
      {
        title: "High Sound Insulation",
        description: "Mampu meredam suara hingga 55 dB, setara dengan studio rekaman profesional.",
        icon: "volume-x",
        image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800",
        cols: 2
      },
      {
        title: "Tanpa Rel Bawah",
        description: "Lantai tetap bersih dan rapi tanpa gangguan rel yang menonjol.",
        icon: "minus",
        cols: 1
      },
      {
        title: "Mekanisme Jack",
        description: "Sistem pengunci internal yang kuat dan presisi untuk kekedapan sempurna.",
        icon: "lock",
        cols: 1
      },
      {
        title: "Desain Elegan",
        description: "Beragam pilihan finishing seperti HPL dan Kain untuk menyesuaikan interior Anda.",
        icon: "palette",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
        cols: 2
      }
    ]
  },
  {
    id: 2,
    title: "SAMOWA",
    slug: "samowa",
    tag: "Populer",
    image: "/Samowa.webp",
    focus: "Fleksibilitas & Harga Terjangkau",
    excerpt: "Partisi lipat fleksibel dengan harga terjangkau untuk ruang kelas dan kantor.",
    content: "SAMOWA (Semi Moving Wall) adalah solusi cerdas untuk pembagian ruangan yang fleksibel dengan biaya yang lebih efisien. Sangat cocok untuk ruang kelas, kantor, tempat ibadah, dan restoran.",
    specs: [
      { label: "Sistem", value: "Lipat (Folding)" },
      { label: "Tingkat Peredaman", value: "Medium Insulation" },
      { label: "Rangka Konstruksi", value: "Hollow Besi 40x40 mm" },
      { label: "Isian (Inner Material)", value: "Glasswool Density 30kg/m³" },
      { label: "Ketebalan Panel", value: "80 mm" },
      { label: "Panel Face", value: "Multiplek 9 mm" },
      { label: "Mekanisme", value: "Engsel Kupu-kupu Heavy Duty" },
      { label: "Sistem Rel", value: "Rel Atas & Rel Bawah (Tanam/Rata Lantai)" }
    ],
    bentoFeatures: [
      {
        title: "Sangat Ekonomis",
        description: "Solusi partisi berkualitas dengan harga yang bersahabat untuk berbagai proyek.",
        icon: "dollar-sign",
        cols: 2
      },
      {
        title: "Fleksibel",
        description: "Mudah dioperasikan untuk membagi atau menggabungkan ruangan dalam sekejap.",
        icon: "minimize",
        cols: 1
      },
      {
        title: "Rel Bawah Rata",
        description: "Rel bawah ditanam rata dengan lantai sehingga aman dilalui.",
        icon: "arrow-down",
        cols: 1
      },
      {
        title: "Semi Kedap Suara",
        description: "Cukup mumpuni untuk mengurangi kebisingan antar ruangan standar.",
        icon: "mic-off",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800",
        cols: 2
      }
    ]
  },
  {
    id: 3,
    title: "NICE PARTITION",
    slug: "nice-partition",
    tag: "Ekonomis",
    image: "/Nice Partisi.webp",
    focus: "Solusi Paling Ekonomis",
    excerpt: "Partisi praktis dan ekonomis untuk penyekat ruangan sederhana.",
    content: "NICE PARTITION hadir sebagai jawaban untuk kebutuhan penyekat ruangan yang sederhana, cepat, dan murah. Pilihan tepat untuk garasi, penyekat ruang tamu, atau toko.",
    specs: [
      { label: "Sistem", value: "Lipat Dorong" },
      { label: "Rangka Besi", value: "Hollow Besi 40x40 mm" },
      { label: "Isian", value: "Tanpa Peredam Khusus (Hollow)" },
      { label: "Ketebalan Panel", value: "~60 mm" },
      { label: "Panel Face", value: "Plywood 6 mm" },
      { label: "Finishing", value: "HPL / Sheet Vinyl" },
      { label: "Sistem Rel", value: "Rel Atas & Rel Bawah" }
    ],
    bentoFeatures: [
      {
        title: "Harga Terbaik",
        description: "Opsi paling terjangkau di pasaran untuk kebutuhan partisi dasar.",
        icon: "tag",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
        cols: 2
      },
      {
        title: "Pemasangan Cepat",
        description: "Waktu produksi dan instalasi yang sangat singkat.",
        icon: "clock",
        cols: 1
      },
      {
        title: "Ringan",
        description: "Mudah digeser dan tidak membebani struktur bangunan.",
        icon: "feather",
        cols: 1
      },
      {
        title: "Desain Minimalis",
        description: "Tampilan bersih dan modern yang cocok untuk berbagai interior.",
        icon: "layout",
        cols: 1
      },
      {
        title: "Perawatan Mudah",
        description: "Material yang mudah dibersihkan dan tahan lama.",
        icon: "tool", // Using available/generic icon
        cols: 1
      },
      {
        title: "Custom Finishing",
        description: "Pilihan lapisan HPL atau Vinyl sesuai selera Anda.",
        icon: "palette",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
        cols: 2
      }
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
