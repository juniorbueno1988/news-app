const API_KEY = "f522b6fe8a334415981877a88c069b91";

export async function fetchNews(query = "") {
  try {
    let url = "";
    if (query) {
      // usa /everything para buscas
      url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
        query
      )}&language=pt&apiKey=${API_KEY}`;
    } else {
      // principais notícias do Brasil
      url = `https://newsapi.org/v2/top-headlines?country=br&language=pt&apiKey=${API_KEY}`;
    }

    const res = await fetch(url);
    const data = await res.json();

    // checa se existe articles e retorna array vazio caso não
    return data.articles || [];
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    return [];
  }
}
