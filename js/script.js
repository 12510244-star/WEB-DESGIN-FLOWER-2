// Helper Storage Aman
function safeGetStorage(key, defaultValue) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (err) {
    return defaultValue;
  }
}

function safeSetStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn("Storage offline mode:", err);
  }
}

// Database Lengkap 32 Koleksi Bunga & Dekorasi Dreamy Bloom
const defaultCatalog = [
  {
    id: 1,
    name: "Pastel Garden Lace Bouquet",
    cat: "bouquet",
    price: 88,
    img: "img/gardenflower.jpg",
    fallback: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600&q=80",
    desc: "Buket bunga taman pastel berbalut kertas renda putih dengan paduan mawar pink, gerbera, lily putih, dan aster warna-warni."
  },
  {
    id: 3,
    name: "Midnight Crimson Red Roses",
    cat: "roses",
    price: 95,
    img: "img/red rose.jpg",
    fallback: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=600&q=80",
    desc: "Mawar merah beludru dengan aksen baby's breath dan daun eucalyptus dalam balutan kertas hitam matte mewah."
  },
  {
    id: 4,
    name: "Artisan Glass Vase Bouquet",
    cat: "decor",
    price: 110,
    img: "img/florist-about.jpg",
    fallback: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=600&q=80",
    desc: "Rangkaian mawar krem, alstroemeria pink, dan baby's breath segar langsung di dalam vas kaca bening estetis."
  },
  {
    id: 5,
    name: "Pink Lily Bouquet",
    cat: "lilies",
    price: 65,
    img: "img/pinklily.jpg",
    fallback: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
    desc: "Fresh pink oriental lilies arranged with pastel blush roses and eucalyptus."
  },
  {
    id: 6,
    name: "Velvet Rose Box",
    cat: "roses",
    price: 90,
    img: "img/rose-box.jpg",
    fallback: "https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&w=600&q=80",
    desc: "Luxury keepsake round box filled with 24 freshly cut pastel roses."
  },
  {
    id: 7,
    name: "Pink glass vase",
    cat: "decor",
    price: 365,
    img: "img/pinkvase.png",
    fallback: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
    desc: "Colorful Murano glass vase with intricate patterns and vibrant colors."
  },
  {
    id: 8,
    name: "White Roses Bouquet",
    cat: "roses",
    price: 85,
    img: "img/white rose.jpg",
    fallback: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=600&q=80",
    desc: "A beautiful bouquet of fresh white roses, perfect for any elegant occasion."
  },
  {
    id: 9,
    name: "Blue Roses Bouquet",
    cat: "roses",
    price: 95,
    img: "img/roses blue.jpg",
    fallback: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=600&q=80",
    desc: "A stunning bouquet of fresh blue roses, perfect for any romantic occasion."
  },
  {
    id: 10,
    name: "Yellow Roses Bouquet",
    cat: "roses",
    price: 85,
    img: "img/roses yellow.jpg",
    fallback: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=600&q=80",
    desc: "A cheerful bouquet of fresh yellow roses, symbolizing friendship and joy."
  },
  {
    id: 11,
    name: "Blue Lilies Bouquet",
    cat: "lilies",
    price: 60,
    img: "img/Lily biru.jpg",
    fallback: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
    desc: "A beautiful bouquet of fresh blue lilies, perfect for any elegant occasion."
  },
  {
    id: 12,
    name: "Lily Red Bouquet",
    cat: "lilies",
    price: 60,
    img: "img/Lily merah.jpg",
    fallback: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
    desc: "A beautiful bouquet of fresh red lilies, perfect for any elegant occasion."
  },
  {
    id: 13,
    name: "Lily Orange Bouquet",
    cat: "lilies",
    price: 60,
    img: "img/Lily orange.jpg",
    fallback: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
    desc: "A beautiful bouquet of fresh orange lilies, perfect for any elegant occasion."
  },
  {
    id: 14,
    name: "Lily Mix Bouquet",
    cat: "lilies",
    price: 60,
    img: "img/MIX.jpg",
    fallback: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
    desc: "A beautiful bouquet of fresh mixed lilies, perfect for any elegant occasion."
  },
  {
    id: 15,
    name: "Lily White Bouquet",
    cat: "lilies",
    price: 60,
    img: "img/lily putih.jpg",
    fallback: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
    desc: "A beautiful bouquet of fresh white lilies, perfect for any elegant occasion."
  },
  {
    id: 16,
    name: "Lily Purple Bouquet",
    cat: "lilies",
    price: 60,
    img: "img/lily ungu.jpg",
    fallback: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
    desc: "A beautiful bouquet of fresh purple lilies, perfect for any elegant occasion."
  },
  {
    id: 17,
    name: "Roses Purple Bouquet",
    cat: "roses",
    price: 77,
    img: "img/roses purple.jpg",
    fallback: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
    desc: "A beautiful bouquet of fresh purple roses, perfect for any elegant occasion."
  },
  {
    id: 18,
    name: "Roses Mix Bouquet",
    cat: "roses",
    price: 89,
    img: "img/roses mix.jpg",
    fallback: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
    desc: "A beautiful bouquet of fresh mixed roses, perfect for any elegant occasion."
  },
  {
    id: 19,
    name: "Roses Orange Bouquet",
    cat: "roses",
    price: 97,
    img: "img/roses orange.jpg",
    fallback: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
    desc: "A beautiful bouquet of fresh orange roses, perfect for any elegant occasion."
  },
  {
    id: 20,
    name: "Table Flower Vase",
    cat: "decor",
    price: 210,
    img: "img/pot.jpg",
    fallback: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
    desc: "A beautiful table flower vase, perfect for any elegant occasion."
  },
  {
    id: 21,
    name: "Minimalist Flower Vase",
    cat: "decor",
    price: 170,
    img: "img/mini.jpg",
    fallback: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
    desc: "A beautiful minimalist table flower vase, perfect for any elegant occasion."
  },
  {
    id: 22,
    name: "Modern Japanese Table Flower Vase",
    cat: "decor",
    price: 197,
    img: "img/japan.jpg",
    fallback: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
    desc: "A beautiful modern Japanese table flower vase, perfect for any elegant occasion."
  },
  {
    id: 23,
    name: "Table Flower Glass Vase",
    cat: "decor",
    price: 236,
    img: "img/mix2.jpg",
    fallback: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
    desc: "A beautiful glass table flower vase, perfect for any elegant occasion."
  },
  {
    id: 24,
    name: "Garden Flower",
    cat: "bouquet",
    price: 250,
    img: "img/garden1.jpg",
    fallback: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
    desc: "A beautiful garden flower bouquet, perfect for any elegant occasion."
  },
  {
    id: 25,
    name: "Garden Flower Vase",
    cat: "bouquet",
    price: 270,
    img: "img/garden2.jpg",
    fallback: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
    desc: "A beautiful garden flower handcrafted bouquet, perfect for any elegant occasion."
  },
  {
    id: 26,
    name: "Spring Garden Bloom Basket",
    cat: "bouquet",
    price: 300,
    img: "img/bunga keranjang.jpg",
    fallback: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
    desc: "A beautiful spring garden bloom basket, perfect for any elegant occasion."
  },
  {
    id: 27,
    name: "Megan Garden Bouquet",
    cat: "bouquet",
    price: 320,
    img: "img/garden3.jpg",
    fallback: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
    desc: "A beautiful Megan garden bouquet, perfect for any elegant occasion."
  },
  {
    id: 28,
    name: "Vase Rainbow Garden Bouquet",
    cat: "decor",
    price: 350,
    img: "img/colorful murano glass vase.jpg",
    fallback: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
    desc: "A beautiful vase rainbow garden bouquet, perfect for any elegant occasion."
  },
  {
    id: 29,
    name: "Megan Korean Bouquet",
    cat: "bouquet",
    price: 370,
    img: "img/mega korean.jpg",
    fallback: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
    desc: "A beautiful Megan korean bouquet, perfect for any elegant occasion."
  },
  {
    id: 30,
    name: "Enchanted Wildflower Meadow Bouquet",
    cat: "bouquet",
    price: 145,
    img: "img/1cantik.jpg",
    fallback: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600&q=80",
    desc: "Perpaduan gerbera oranye cerah, bellflower ungu, mawar pastel, dan rerumputan artistik bergaya taman liar dalam balutan kertas krem lembut."
  },
  {
    id: 31,
    name: "Blush Spray Rose & Sky Tweedia Bouquet",
    cat: "bouquet",
    price: 165,
    img: "img/2cantik.jpg",
    fallback: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
    desc: "Buket bergaya Korean floral boutique berisi puluhan mawar mini pink lembut, aksen bunga biru langit tweedia, serta pita satin blush menjuntai."
  },
  {
    id: 32,
    name: "Coquette Pink Ombre Rose & Ribbon Bouquet",
    cat: "bouquet",
    price: 185,
    img: "img/3cantik.jpg",
    fallback: "https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&w=600&q=80",
    desc: "Rangkaian mawar gradasi pink merona dan bunga biru pastel dengan hiasan pita-pita coquette manis di sekeliling kemasan transparan."
  },
  {
    id: 33,
    name: "Crystal Aurora Lily & Pink Peony Couture",
    cat: "bouquet",
    price: 240,
    img: "img/4cantik.jpg",
    fallback: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=600&q=80",
    desc: "Buket couture mewah berbalut renda Prancis putih dengan lily biru berhias kristal berkilau di tengah, dikelilingi peony pink mekar dan mawar pastel."
  },
  {
    id: 34,
    name: "mix colorful vase",
    cat: "vase",
    price: 120,
    img: "img/1mix.jpg",
    fallback: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
    desc: "Vase warna-warni yang menciptakan kesan cerah dan menyenangkan di mana saja."
  }
];

let customProducts = safeGetStorage("dreamy_custom_products", []);
let catalog = [...defaultCatalog, ...customProducts];

let cart = safeGetStorage("dreamy_cart", [
  { id: 1, name: "Pastel Garden Lace Bouquet", variant: "Silk Ribbon & Pastel Wrap", price: 88, qty: 1, img: defaultCatalog[0].img, fallback: defaultCatalog[0].fallback },
  { id: 3, name: "Midnight Crimson Red Roses", variant: "Champagne Gold Box", price: 95, qty: 1, img: defaultCatalog[1].img, fallback: defaultCatalog[1].fallback }
]);
let orders = safeGetStorage("dreamy_orders", []);
let activeCategory = "all";
let promoApplied = false;
let selectedPayment = "VISA";
let currentDetailItem = catalog[0];

document.addEventListener("DOMContentLoaded", () => {
  updateCartBadges();

  if (document.getElementById("home-featured-grid")) renderHomeFeatured();
  if (document.getElementById("shop-grid")) {
    updateCategorySpotlight("all");
    renderShopGrid(catalog);
  }
  if (document.getElementById("detail-title")) initDetailPage();
  if (document.getElementById("cart-items-container")) renderCheckoutCart();
  if (document.getElementById("orders-list-container")) renderOrdersPage();
});

function updateCartBadges() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const topBadge = document.getElementById("top-cart-count");
  const bottomBadge = document.getElementById("bottom-cart-badge");
  if (topBadge) topBadge.textContent = totalQty;
  if (bottomBadge) bottomBadge.textContent = totalQty;
}

// Helper Variasi Warna & Label Butik Tiap Produk
function getFlowerMeta(item) {
  const n = item.name.toLowerCase();
  let swatch = "linear-gradient(135deg, #f9a8c9, #f7d9a8)";
  let colorName = "Pastel Blend";

  if (n.includes("red") || n.includes("crimson")) {
    swatch = "#c81d4e";
    colorName = "Crimson Velvet";
  } else if (n.includes("white")) {
    swatch = "#ffffff";
    colorName = "Pure Ivory";
  } else if (n.includes("blue") || n.includes("sky") || n.includes("aurora")) {
    swatch = "#7ab8f5";
    colorName = "Celestial Blue";
  } else if (n.includes("yellow")) {
    swatch = "#f6d04d";
    colorName = "Sunlit Gold";
  } else if (n.includes("purple")) {
    swatch = "#a879e6";
    colorName = "Royal Lavender";
  } else if (n.includes("orange")) {
    swatch = "#f58c56";
    colorName = "Peach Sunset";
  } else if (n.includes("pink") || n.includes("blush") || n.includes("coquette")) {
    swatch = "#f48fb1";
    colorName = "Blush Rose";
  } else if (n.includes("mix") || n.includes("rainbow") || n.includes("meadow")) {
    swatch = "conic-gradient(#f48fb1, #f6d04d, #7ab8f5, #a879e6, #f48fb1)";
    colorName = "Multicolor";
  }

  const badgesByCat = {
    roses: ["Velvet Rose", "Romantic Pick", "Classic Couture"],
    lilies: ["Fragrant Lily", "Royal Bloom", "Pure Elegance"],
    bouquet: ["Garden Couture", "Handcrafted", "Signature"],
    decor: ["Luxury Decor", "Artisan Piece", "Gold Accent"]
  };
  const pool = badgesByCat[item.cat.toLowerCase()] || ["Boutique Pick"];
  const ribbon = item.price >= 240 ? "✦ VIP Couture" : pool[item.id % pool.length];

  return { swatch, colorName, ribbon };
}

function createProductCard(item) {
  const meta = getFlowerMeta(item);
  return `
    <div class="col">
      <div class="card h-100 product-card overflow-hidden">
        <div class="product-img-frame cursor-pointer" onclick="goToDetail(${item.id})">
          <img src="${item.img}" onerror="this.onerror=null;this.src='${item.fallback}'" class="card-img-top" alt="${item.name}" />
          <span class="product-cat-pill">${item.cat}</span>
          <span class="product-ribbon-badge">${meta.ribbon}</span>
        </div>
        <div class="card-body p-3 d-flex flex-column">
          <div class="d-flex align-items-center gap-1 mb-1">
            <span class="flower-color-dot" style="background: ${meta.swatch};"></span>
            <span class="x-small text-muted">${meta.colorName}</span>
          </div>
          <h6 class="font-serif fw-bold small mb-1 cursor-pointer text-dark" onclick="goToDetail(${item.id})">${item.name}</h6>
          <p class="fw-bold text-maroon small mb-2">$${item.price.toFixed(2)}</p>
          <button type="button" class="btn btn-pink-primary btn-sm rounded-pill mt-auto w-100" onclick="addToCart(${item.id}, 'Silk Ribbon & Pastel Wrap', 1)">
            <i class="bi bi-bag-plus me-1"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
}

// Halaman Home
function renderHomeFeatured() {
  document.getElementById("home-featured-grid").innerHTML = catalog.slice(0, 4).map(createProductCard).join("");
  if (typeof window.initCardAnimations === "function") {
    window.initCardAnimations();
  }
}

// Banner Dinamis Tiap Kategori di Halaman Shop
function updateCategorySpotlight(cat) {
  const box = document.getElementById("category-spotlight");
  if (!box) return;

  const themes = {
    all: {
      cls: "theme-all",
      icon: '<i class="bi bi-flower1 fs-3 text-maroon"></i>',
      tag: "Curated Luxury Atelier",
      title: "All Signature Floral Collections",
      desc: "Jelajahi seluruh rangkaian mawar, lily segar, garden bouquet pastel, dan vas dekorasi butik pilihan."
    },
    roses: {
      cls: "theme-roses",
      icon: '<i class="bi bi-heart-fill fs-3 text-danger"></i>',
      tag: "The Velvet Rose Atelier",
      title: "Romantic Roses in Every Shade",
      desc: "Pilihan mawar merah beludru, putih gading, biru langit, ungu lavender, hingga mawar pastel romantis."
    },
    lilies: {
      cls: "theme-lilies",
      icon: '<i class="bi bi-flower2 fs-3 text-pink-accent"></i>',
      tag: "Celestial Lily Sanctuary",
      title: "Fragrant Oriental & Pastel Lilies",
      desc: "Keanggunan bunga lily putih mutiara, pink lembut, biru kristal, dan gradasi warna harum menenangkan."
    },
    bouquet: {
      cls: "theme-bouquet",
      icon: '<i class="bi bi-stars fs-3 text-gold"></i>',
      tag: "Enchanted Garden Couture",
      title: "Hand-Tied Garden & Korean Bouquets",
      desc: "Rangkaian bunga taman segar berbalut kertas renda Prancis dan pita satin mewah untuk hadiah istimewa."
    },
    decor: {
      cls: "theme-decor",
      icon: '<i class="bi bi-gem fs-3 text-gold"></i>',
      tag: "Artisan Glass & Gold Decor",
      title: "Luxury Vases & Interior Accents",
      desc: "Vas kaca kristal, keramik bergaya Jepang modern, dan dekorasi ruang bernuansa blush & champagne gold."
    }
  };

  const info = themes[cat] || themes.all;
  box.className = `category-spotlight-card ${info.cls} rounded-4 p-3 p-md-4 mb-3 position-relative overflow-hidden`;
  document.getElementById("spotlight-icon").innerHTML = info.icon;
  document.getElementById("spotlight-tag").textContent = info.tag;
  document.getElementById("spotlight-title").textContent = info.title;
  document.getElementById("spotlight-desc").textContent = info.desc;

  if (typeof gsap !== "undefined") {
    gsap.fromTo(
      box,
      { scale: 0.98, y: 8 },
      { scale: 1, y: 0, duration: 0.45, ease: "power2.out" }
    );
  }
}

// Halaman Shop
function renderShopGrid(list) {
  const grid = document.getElementById("shop-grid");
  const countEl = document.getElementById("shop-result-count");
  if (countEl) countEl.textContent = `${list.length} Koleksi`;

  grid.innerHTML = list.length
    ? list.map(createProductCard).join("")
    : `<div class="col-12 text-center py-5 text-muted small">Koleksi bunga tidak ditemukan.</div>`;

  if (typeof window.initCardAnimations === "function") {
    window.initCardAnimations();
  }
}

function setCategoryFilter(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll(".filter-btn").forEach(b => {
    b.classList.remove("btn-pink-primary", "active");
    b.classList.add("btn-soft-pink");
  });
  btn.classList.remove("btn-soft-pink");
  btn.classList.add("btn-pink-primary", "active");

  updateCategorySpotlight(cat);

  // Jalankan animasi bunga khusus kategori (Roses, Lilies, Bouquet, Decor)
  if (typeof window.playCategoryEffect === "function") {
    window.playCategoryEffect(cat);
  }

  filterShop();
}

function filterShop() {
  const keyword = document.getElementById("shop-search").value.toLowerCase();
  const sortEl = document.getElementById("shop-sort");
  const sortVal = sortEl ? sortEl.value : "featured";

  let filtered = catalog.filter(p => {
    const matchCat = activeCategory === "all" || p.cat.toLowerCase() === activeCategory.toLowerCase();
    const matchKey = p.name.toLowerCase().includes(keyword) || p.desc.toLowerCase().includes(keyword);
    return matchCat && matchKey;
  });

  if (sortVal === "price-asc") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortVal === "price-desc") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  renderShopGrid(filtered);
}

// Tambah Pilihan Bunga Baru dari Modal di Shop
function addNewFlowerProduct(e) {
  e.preventDefault();
  const name = document.getElementById("new-flower-name").value.trim();
  const cat = document.getElementById("new-flower-cat").value;
  const price = parseFloat(document.getElementById("new-flower-price").value);
  const imgInput = document.getElementById("new-flower-img").value.trim();
  const desc = document.getElementById("new-flower-desc").value.trim();

  const newProduct = {
    id: Date.now(),
    name,
    cat,
    price,
    img: imgInput || "img/gardenflower.jpg",
    fallback: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600&q=80",
    desc: desc || "Rangkaian bunga butik segar pilihan dari Dreamy Bloom."
  };

  customProducts.unshift(newProduct);
  safeSetStorage("dreamy_custom_products", customProducts);
  catalog = [...defaultCatalog, ...customProducts];

  e.target.reset();
  const modalEl = document.getElementById("addFlowerModal");
  if (modalEl && typeof bootstrap !== "undefined") {
    bootstrap.Modal.getInstance(modalEl)?.hide();
  }

  filterShop();
  notifyToast(`${name} berhasil ditambahkan ke butik!`);
}

// Halaman Detail Produk
function goToDetail(id) {
  window.location.href = `detail.html?id=${id}`;
}

function initDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"), 10) || catalog[0].id;
  const product = catalog.find(p => p.id === id) || catalog[0];
  currentDetailItem = product;

  const imgEl = document.getElementById("detail-img");
  imgEl.src = product.img;
  imgEl.onerror = () => { imgEl.onerror = null; imgEl.src = product.fallback; };

  document.getElementById("detail-cat").textContent = product.cat.toUpperCase();
  document.getElementById("detail-title").textContent = product.name;
  document.getElementById("detail-price").textContent = `$${product.price.toFixed(2)}`;
  document.getElementById("detail-desc").textContent = product.desc;

  const relatedEl = document.getElementById("detail-related-grid");
  if (relatedEl) {
    const related = catalog.filter(p => p.id !== product.id).slice(0, 4);
    relatedEl.innerHTML = related.map(createProductCard).join("");
    if (typeof window.initCardAnimations === "function") {
      window.initCardAnimations();
    }
  }
}

function changeDetailQty(delta) {
  const el = document.getElementById("detail-qty");
  el.value = Math.max(1, parseInt(el.value, 10) + delta);
}

function addCurrentDetailToCart(redirectCart) {
  const qty = parseInt(document.getElementById("detail-qty").value, 10);
  const variant = document.getElementById("detail-variant").value;
  addToCart(currentDetailItem.id, variant, qty);
  if (redirectCart) window.location.href = "cart.html";
}

// Keranjang & Checkout
function addToCart(id, variant = "Silk Ribbon & Pastel Wrap", qty = 1) {
  const product = catalog.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(c => c.id === id && c.variant === variant);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      variant,
      price: product.price,
      qty,
      img: product.img,
      fallback: product.fallback
    });
  }

  safeSetStorage("dreamy_cart", cart);
  updateCartBadges();
  notifyToast(`${qty}x ${product.name} ditambahkan ke keranjang!`);
}

function renderCheckoutCart() {
  const container = document.getElementById("cart-items-container");
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `<div class="text-center py-4 text-muted small">Keranjang masih kosong. Silakan pilih bunga mewah di halaman <a href="shop.html" class="text-maroon fw-bold">Shop</a>.</div>`;
    document.getElementById("btn-to-payment").disabled = true;
  } else {
    document.getElementById("btn-to-payment").disabled = false;
    container.innerHTML = cart.map((item, idx) => `
      <div class="d-flex align-items-center justify-content-between border-gold-subtle rounded-4 p-2 bg-cream">
        <div class="d-flex align-items-center gap-2">
          <img src="${item.img}" onerror="this.onerror=null;this.src='${item.fallback}'" class="rounded-3" style="width:56px;height:56px;object-fit:cover;" />
          <div>
            <h6 class="font-serif fw-bold small mb-0">${item.name}</h6>
            <span class="x-small text-muted d-block">${item.variant} • $${item.price}</span>
          </div>
        </div>
        <div class="d-flex align-items-center gap-1">
          <button type="button" class="btn btn-sm btn-soft-pink px-2 py-0" onclick="updateCartQty(${idx}, -1)">-</button>
          <span class="small fw-bold px-2">${item.qty}</span>
          <button type="button" class="btn btn-sm btn-soft-pink px-2 py-0" onclick="updateCartQty(${idx}, 1)">+</button>
        </div>
      </div>
    `).join("");
  }

  const { subtotal, discount, shipping, total } = getTotals();
  document.getElementById("summary-subtotal").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("summary-shipping").textContent = `$${shipping.toFixed(2)}`;
  document.getElementById("summary-total").textContent = `$${total.toFixed(2)}`;
  document.getElementById("pay-btn-total").textContent = `$${total.toFixed(2)}`;
  document.getElementById("showcase-total").textContent = `$${total.toFixed(2)}`;

  const discRow = document.getElementById("discount-row");
  if (promoApplied && subtotal > 0) {
    discRow.style.removeProperty("display");
    document.getElementById("summary-discount").textContent = `-$${discount.toFixed(2)}`;
  } else {
    discRow.style.setProperty("display", "none", "important");
  }

  if (cart.length > 0) {
    document.getElementById("showcase-title").textContent = `${cart[0].name} (${cart.length} item)`;
    const showImg = document.getElementById("showcase-img");
    showImg.src = cart[0].img;
    showImg.onerror = () => { showImg.onerror = null; showImg.src = cart[0].fallback; };
  }
}

function updateCartQty(idx, delta) {
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  safeSetStorage("dreamy_cart", cart);
  updateCartBadges();
  renderCheckoutCart();
}

function applyPromo() {
  const code = document.getElementById("promo-input").value.trim().toUpperCase();
  if (code === "BLOOM2026" || code === "DREAMY10") {
    promoApplied = true;
    notifyToast(`Kode ${code} aktif! Diskon VIP 10%`);
  } else {
    promoApplied = false;
    notifyToast("Kode promo tidak valid (Coba: BLOOM2026)");
  }
  renderCheckoutCart();
}

function getTotals() {
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const shipping = subtotal > 0 ? 25 : 0;
  const total = Math.max(0, subtotal - discount + shipping);
  return { subtotal, discount, shipping, total };
}

function goCheckoutStep(step) {
  if (step === 2 && cart.length === 0) return;
  [1, 2, 3].forEach(s => {
    document.getElementById(`checkout-step-${s}`).classList.add("d-none");
    document.getElementById(`step-badge-${s}`).classList.toggle("active", s <= step);
  });
  document.getElementById(`checkout-step-${step}`).classList.remove("d-none");
}

function pickPayment(el, method) {
  selectedPayment = method;
  document.querySelectorAll(".payment-method-card").forEach(c => c.classList.remove("active"));
  el.classList.add("active");
}

function formatCard(input) {
  input.value = input.value.replace(/\D/g, "").substring(0, 16).replace(/(.{4})/g, "$1 ").trim();
}

function formatExp(input) {
  let v = input.value.replace(/\D/g, "").substring(0, 4);
  input.value = v.length >= 3 ? `${v.slice(0, 2)}/${v.slice(2)}` : v;
}

function processPayment(e) {
  e.preventDefault();
  const { total } = getTotals();
  const orderId = `#DRM-2026-${Math.floor(1000 + Math.random() * 9000)}`;

  orders.unshift({
    id: orderId,
    date: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" }),
    method: selectedPayment,
    total,
    items: [...cart]
  });
  safeSetStorage("dreamy_orders", orders);

  document.getElementById("receipt-order-id").textContent = orderId;
  document.getElementById("receipt-method").textContent = selectedPayment;
  document.getElementById("receipt-paid").textContent = `$${total.toFixed(2)}`;

  cart = [];
  safeSetStorage("dreamy_cart", cart);
  updateCartBadges();
  goCheckoutStep(3);
}

// Halaman Orders
function renderOrdersPage() {
  const container = document.getElementById("orders-list-container");
  if (!container) return;

  if (orders.length === 0) {
    container.innerHTML = `<div class="bg-cream border-gold-subtle rounded-4 p-4 text-center text-muted small shadow-xs">Belum ada riwayat pesanan di Dreamy Bloom.</div>`;
    return;
  }

  container.innerHTML = orders.map((ord, idx) => `
    <div class="bg-cream rounded-4 p-3 shadow-xs border-gold-subtle">
      <div class="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
        <div>
          <span class="fw-bold small text-maroon">${ord.id}</span>
          <span class="x-small text-muted d-block">${ord.date} • via ${ord.method}</span>
        </div>
        <span class="badge bg-success-subtle text-success rounded-pill px-3">Paid</span>
      </div>
      <p class="x-small text-muted mb-2">${ord.items.map(i => `${i.qty}x ${i.name}`).join(", ")}</p>
      <div class="d-flex justify-content-between align-items-center">
        <span class="fw-bold small text-maroon">Total: $${ord.total.toFixed(2)}</span>
        <button type="button" class="btn btn-sm btn-soft-pink rounded-pill px-3" onclick="reorder(${idx})">
          <i class="bi bi-arrow-repeat me-1"></i> Pesan Lagi
        </button>
      </div>
    </div>
  `).join("");
}

function reorder(idx) {
  const past = orders[idx];
  if (!past) return;
  past.items.forEach(item => addToCart(item.id, item.variant, item.qty));
  window.location.href = "cart.html";
}

function clearOrders() {
  orders = [];
  safeSetStorage("dreamy_orders", orders);
  renderOrdersPage();
}

// Halaman Info
function toggleAboutInfo(tab) {
  const btnStory = document.getElementById("btn-story");
  const btnTeam = document.getElementById("btn-team");
  const box = document.getElementById("about-gallery-container");

  if (tab === "story") {
    btnStory.className = "btn btn-pink-primary rounded-pill px-4 py-2 x-small fw-semibold";
    btnTeam.className = "btn btn-gold-outline rounded-pill px-4 py-2 x-small fw-semibold";
    box.innerHTML = `
      <div class="col-4"><img src="img/florist-about.jpg" onerror="this.src='https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=400&q=80'" class="img-fluid rounded-4 about-thumb"></div>
      <div class="col-4"><img src="img/gardenflower.jpg" onerror="this.src='https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80'" class="img-fluid rounded-4 about-thumb"></div>
      <div class="col-4"><img src="img/white rose.jpg" onerror="this.src='https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&w=400&q=80'" class="img-fluid rounded-4 about-thumb"></div>
    `;
  } else {
    btnTeam.className = "btn btn-pink-primary rounded-pill px-4 py-2 x-small fw-semibold";
    btnStory.className = "btn btn-gold-outline rounded-pill px-4 py-2 x-small fw-semibold";
    box.innerHTML = `
      <div class="col-4"><div class="p-3 bg-soft-pink border-gold-subtle rounded-4"><h6 class="font-serif fw-bold text-maroon small mb-0">Clara Laurent</h6><span class="x-small text-muted">Creative Florist</span></div></div>
      <div class="col-4"><div class="p-3 bg-soft-pink border-gold-subtle rounded-4"><h6 class="font-serif fw-bold text-maroon small mb-0">Emilia Vance</h6><span class="x-small text-muted">Boutique Curator</span></div></div>
      <div class="col-4"><div class="p-3 bg-soft-pink border-gold-subtle rounded-4"><h6 class="font-serif fw-bold text-maroon small mb-0">Sophia Chen</h6><span class="x-small text-muted">Floral Stylist</span></div></div>
    `;
  }
}

function sendContactMsg(e) {
  e.preventDefault();
  e.target.reset();
  notifyToast("Pesan Anda telah terkirim ke Dreamy Bloom Concierge!");
}

function notifyToast(msg) {
  const toastEl = document.getElementById("appToast");
  if (!toastEl || typeof bootstrap === "undefined") return;
  document.getElementById("appToastText").textContent = msg;
  new bootstrap.Toast(toastEl).show();
}