const API_URL = "https://partisi.cvpirekiasia.com/wp-json/wp/v2";
function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").trim();
}
function formatDate(dateString) {
  if (!dateString) return "";
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  } catch (e) {
    console.error("[WordPress API] Date format error:", e);
    return dateString || "";
  }
}
async function fetchAPI(endpoint) {
  try {
    console.log(`[WordPress API] Fetching: ${API_URL}${endpoint}`);
    const res = await fetch(`${API_URL}${endpoint}`);
    if (!res.ok) {
      console.error(`[WordPress API] Error ${res.status}: ${res.statusText}`);
      console.error(`[WordPress API] URL: ${API_URL}${endpoint}`);
      const text = await res.text();
      console.error(`[WordPress API] Response: ${text.slice(0, 500)}`);
      return null;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("[WordPress API] Fetch error:", error);
    return null;
  }
}
async function fetchProducts(limit = 10) {
  let data = await fetchAPI(`/produk?per_page=${limit}&_embed`);
  if (!data) {
    data = await fetchAPI(`/posts?per_page=${limit}&_embed&categories=produk`);
  }
  if (!data) return [];
  return data.map((item) => ({
    id: item.id,
    title: stripHtml(item.title.rendered),
    slug: item.slug,
    image: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/slide1.webp",
    tag: item.acf?.tag || "Produk",
    focus: item.acf?.focus || "",
    excerpt: stripHtml(item.excerpt.rendered),
    content: item.content.rendered,
    specs: item.acf?.specs || []
  }));
}
async function fetchProductBySlug(slug) {
  let data = await fetchAPI(`/produk?slug=${slug}&_embed`);
  if (!data || data.length === 0) {
    data = await fetchAPI(`/posts?slug=${slug}&_embed`);
  }
  if (!data || data.length === 0) return null;
  const item = data[0];
  return {
    id: item.id,
    title: stripHtml(item.title.rendered),
    slug: item.slug,
    image: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/slide1.webp",
    tag: item.acf?.tag || "Produk",
    focus: item.acf?.focus || "",
    excerpt: stripHtml(item.excerpt.rendered),
    content: item.content.rendered,
    specs: item.acf?.specs || []
  };
}
async function fetchPosts(limit = 10) {
  const data = await fetchAPI(`/posts?per_page=${limit}&_embed`);
  if (!data) return [];
  return data.map((item) => {
    try {
      return {
        id: item.id,
        title: item.title?.rendered ? stripHtml(item.title.rendered) : "Untitled",
        slug: item.slug,
        date: item.date,
        excerpt: item.excerpt?.rendered ? stripHtml(item.excerpt.rendered) : "",
        content: item.content?.rendered || "",
        image: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/slide1.webp",
        categories: item.categories || []
      };
    } catch (err) {
      console.error("[WordPress API] Error mapping post:", err);
      return null;
    }
  }).filter((item) => item !== null);
}
async function fetchPostBySlug(slug) {
  const data = await fetchAPI(`/posts?slug=${slug}&_embed`);
  if (!data || data.length === 0) return null;
  const item = data[0];
  try {
    return {
      id: item.id,
      title: item.title?.rendered ? stripHtml(item.title.rendered) : "Untitled",
      slug: item.slug,
      date: item.date,
      excerpt: item.excerpt?.rendered ? stripHtml(item.excerpt.rendered) : "",
      content: item.content?.rendered || "",
      image: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/slide1.webp",
      categories: item.categories || []
    };
  } catch (err) {
    console.error("[WordPress API] Error mapping single post:", err);
    return null;
  }
}
const STATIC_PRODUCTS = [
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
        icon: "tool",
        // Using available/generic icon
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
const STATIC_POSTS = [
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

export { STATIC_POSTS as S, fetchPosts as a, formatDate as b, fetchProductBySlug as c, STATIC_PRODUCTS as d, fetchProducts as e, fetchPostBySlug as f };
