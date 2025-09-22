const API_KEY = "f522b6fe8a334415981877a88c069b91";
const BASE_TOP = "https://newsapi.org/v2/top-headlines";
const BASE_EVERYTHING = "https://newsapi.org/v2/everything";

const VALID_CATEGORIES = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

// Mock de notícias caso API falhe
const MOCK_NEWS = [
  {
    title: "Notícia de exemplo",
    source: { name: "Exemplo News" },
    publishedAt: new Date().toISOString(),
    url: "https://example.com",
    urlToImage: "",
    description: "Esta é uma notícia de teste.",
  },
];

export async function fetchNews(query = "", category = "", page = 1) {
  try {
    let url = "";

    if (query) {
      url = `${BASE_EVERYTHING}?q=${encodeURIComponent(
        query
      )}&pageSize=10&page=${page}&apiKey=${API_KEY}`;
    } else {
      const catParam = VALID_CATEGORIES.includes(category)
        ? `&category=${category}`
        : "";
      url = `${BASE_TOP}?country=br${catParam}&pageSize=10&page=${page}&apiKey=${API_KEY}`;
    }

    const res = await fetch(url);
    const data = await res.json();

    if (data.status !== "ok" || !data.articles) return MOCK_NEWS;
    return data.articles;
  } catch (err) {
    console.error("Erro ao buscar notícias:", err);
    return MOCK_NEWS;
  }
}
