const API_KEY = "f522b6fe8a334415981877a88c069b91"; // pega no NewsAPI
const BASE_URL = "https://newsapi.org/v2/top-headlines?country=br";

export async function fetchNews(query = "") {
  try {
    const url = query
      ? `${BASE_URL}&q=${query}&apiKey=${API_KEY}`
      : `${BASE_URL}&apiKey=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.articles;
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    return [];
  }
}
