// =============================================================================
// Dose of Nails — Blog / Articles
//
// Reads from ARTICLES_DATA (js/articles-data.js).
// Language-aware: cards and article body switch with currentLanguage.
// Patches window.setLanguage to re-render blog content on language change.
// =============================================================================

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatDate(dateStr) {
	if (!dateStr) return "";
	const d = new Date(dateStr);
	if (isNaN(d.getTime())) return "";
	return d.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

function categoryLabel(cat) {
	const map = {
		"nail-art": "Nail Art",
		tips: "Tips & Tricks",
		trends: "Trends",
		care: "Care & Maintenance",
	};
	return map[cat] || cat;
}

function getLang() {
	return typeof currentLanguage !== "undefined" ? currentLanguage : "en";
}

// ── Data Access ───────────────────────────────────────────────────────────────

function getArticleList() {
	return [...ARTICLES_DATA].sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getArticle(slug) {
	return ARTICLES_DATA.find((a) => a.slug === slug) || null;
}

// ── Article Card ──────────────────────────────────────────────────────────────

function articleCardHTML(article, linkPrefix) {
	const lang = getLang();
	const title = article[`title_${lang}`] || article.title_en || "";
	const excerpt = article[`excerpt_${lang}`] || article.excerpt_en || "";
	const cover =
		article.cover_image ||
		"https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80";
	const href = linkPrefix + encodeURIComponent(article.slug);

	return `
    <div
      class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
      onclick="window.location.href='${href}'"
    >
      <div class="h-52 overflow-hidden">
        <img
          src="${cover}"
          alt="${title.replace(/"/g, "&quot;")}"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div class="p-6">
        <div class="flex items-center justify-between mb-3">
          ${
						article.category
							? `<span class="text-xs px-3 py-1 bg-gray-100 rounded-full font-medium">${categoryLabel(article.category)}</span>`
							: "<span></span>"
					}
          <span class="text-xs text-gray-400">${formatDate(article.date)}</span>
        </div>
        <h3
          class="text-xl font-bold mb-3 leading-snug"
          style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden"
        >${title}</h3>
        <p
          class="text-sm text-gray-500 leading-relaxed mb-5"
          style="display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden"
        >${excerpt}</p>
        <span class="inline-block px-4 py-2 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition-colors">
          Read More
        </span>
      </div>
    </div>`;
}

// ── State ─────────────────────────────────────────────────────────────────────

let activeListingCategory = "all";
let currentArticle = null;

// ── Listing View ──────────────────────────────────────────────────────────────

function filterArticles(category) {
	activeListingCategory = category;

	document.querySelectorAll(".article-filter-btn").forEach((btn) => {
		const active = btn.dataset.category === category;
		btn.classList.toggle("bg-black", active);
		btn.classList.toggle("text-white", active);
		btn.classList.toggle("bg-white", !active);
		btn.classList.toggle("text-gray-700", !active);
		btn.classList.toggle("hover:bg-gray-100", !active);
	});

	renderFilteredArticles();
}

function renderFilteredArticles() {
	const grid = document.getElementById("articles-grid");
	if (!grid) return;

	const articles = getArticleList();
	const filtered =
		activeListingCategory === "all"
			? articles
			: articles.filter((a) => a.category === activeListingCategory);

	grid.innerHTML =
		filtered.length === 0
			? `<p class="col-span-3 text-center text-gray-400 py-12 text-lg">No articles in this category yet.</p>`
			: filtered.map((a) => articleCardHTML(a, "?slug=")).join("");
}

function initListingView() {
	const loading = document.getElementById("listing-loading");
	const empty = document.getElementById("listing-empty");
	const grid = document.getElementById("articles-grid");

	// Data is synchronous — hide spinner immediately
	loading?.classList.add("hidden");

	const articles = getArticleList();
	if (articles.length === 0) {
		empty?.classList.remove("hidden");
		return;
	}

	grid?.classList.remove("hidden");
	renderFilteredArticles();
}

// ── Article View ──────────────────────────────────────────────────────────────

function renderArticleContent(article) {
	const lang = getLang();
	const title = article[`title_${lang}`] || article.title_en || "";
	const body = article[`body_${lang}`] || article.body_en || "";

	const heroImg = document.getElementById("article-hero-img");
	const heroTitle = document.getElementById("article-hero-title");
	const heroCat = document.getElementById("article-hero-category");
	const heroDate = document.getElementById("article-hero-date");
	const bodyEl = document.getElementById("article-body");

	if (heroImg)
		heroImg.src =
			article.cover_image ||
			"https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80";
	if (heroTitle) heroTitle.textContent = title;
	if (heroCat) {
		heroCat.textContent = article.category
			? categoryLabel(article.category)
			: "";
		heroCat.classList.toggle("hidden", !article.category);
	}
	if (heroDate) heroDate.textContent = formatDate(article.date);
	if (bodyEl) {
		bodyEl.innerHTML =
			typeof marked !== "undefined"
				? marked.parse(body)
				: body
						.split(/\n\n+/)
						.map((p) => `<p>${p.trim()}</p>`)
						.join("");
	}

	document.title = `${title} — Dose of Nails`;
}

function initArticleView(slug) {
	const loading = document.getElementById("article-loading");
	const hero = document.getElementById("article-hero");
	const content = document.getElementById("article-content");
	const error = document.getElementById("article-error");

	const article = getArticle(slug);

	loading?.classList.add("hidden");

	if (!article) {
		error?.classList.remove("hidden");
		return;
	}

	currentArticle = article;
	hero?.classList.remove("hidden");
	content?.classList.remove("hidden");
	renderArticleContent(article);
}

// ── Articles Page Router ──────────────────────────────────────────────────────

function initArticlesPage() {
	if (!document.getElementById("listing-view")) return;

	const slug = new URLSearchParams(window.location.search).get("slug");
	const listingView = document.getElementById("listing-view");
	const articleView = document.getElementById("article-view");

	if (slug) {
		listingView.classList.add("hidden");
		articleView.classList.remove("hidden");
		initArticleView(slug);
	} else {
		listingView.classList.remove("hidden");
		articleView.classList.add("hidden");
		initListingView();
	}
}

// ── Home Page Blog Preview ────────────────────────────────────────────────────

function renderBlogPreview() {
	const grid = document.getElementById("blog-preview-grid");
	const section = document.getElementById("blog-preview-section");
	if (!grid) return;

	const articles = getArticleList();
	if (articles.length === 0) {
		section?.classList.add("hidden");
		return;
	}

	grid.innerHTML = articles
		.slice(0, 3)
		.map((a) => articleCardHTML(a, "/articles/?slug="))
		.join("");
}

// ── Language Change Handler ───────────────────────────────────────────────────

function onBlogLanguageChange() {
	const listingView = document.getElementById("listing-view");
	const articleView = document.getElementById("article-view");

	if (listingView && !listingView.classList.contains("hidden")) {
		renderFilteredArticles();
	}
	if (
		articleView &&
		!articleView.classList.contains("hidden") &&
		currentArticle
	) {
		renderArticleContent(currentArticle);
	}
	if (document.getElementById("blog-preview-grid")) {
		renderBlogPreview();
	}
}

// ── Bootstrap ─────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", function () {
	// Wrap setLanguage so language switches re-render article content too
	const _origSetLanguage = window.setLanguage;
	window.setLanguage = function (lang) {
		if (_origSetLanguage) _origSetLanguage(lang);
		onBlogLanguageChange();
	};

	if (document.getElementById("listing-view")) initArticlesPage();
	if (document.getElementById("blog-preview-grid")) renderBlogPreview();
});
