const API_KEY = "95f6c084b4c599694783f18e07402380";
const BASE_URL = "https://gnews.io/api/v4/top-headlines";

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
    let url = `${BASE_URL}?lang=pt&country=br&max=10&page=${page}&token=${API_KEY}`;

    if (query) url += `&q=${encodeURIComponent(query)}`;
    if (category) url += `&topic=${category}`;

    const res = await fetch(url);
    const data = await res.json();

    if (!data.articles || data.articles.length === 0) return MOCK_NEWS;

    // Ajuste para compatibilidade com estrutura da NewsAPI
    return data.articles.map((a) => ({
      title: a.title,
      source: { name: a.source.name },
      publishedAt: a.publishedAt,
      url: a.url,
      urlToImage: a.image,
      description: a.description,
    }));
  } catch (err) {
    console.error("Erro ao buscar notícias:", err);
    return MOCK_NEWS;
  }
}
