import React, { useEffect, useState } from "react";

function Home() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState(""); // estado para guardar o termo da busca

  // função que faz a busca
  const fetchNews = async (query = "") => {
    try {
      let url = "";
      if (query) {
        // se tiver termo de busca, usa tudo como query
        url = `https://newsapi.org/v2/everything?q=${query}&apiKey=f522b6fe8a334415981877a88c069b91`;
      } else {
        // senão, pega as principais do Brasil
        url = `https://newsapi.org/v2/top-headlines?country=br&apiKey=f522b6fe8a334415981877a88c069b91`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles || []);
    } catch (error) {
      console.error("Erro ao buscar notícias:", error);
    }
  };

  // carrega as manchetes ao abrir a página
  useEffect(() => {
    fetchNews();
  }, []);

  // função para lidar com envio da busca
  const handleSearch = (e) => {
    e.preventDefault();
    fetchNews(search);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>App de Notícias</h1>

      {/* Campo de busca */}
      <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Buscar notícias..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px", width: "250px" }}
        />
        <button type="submit" style={{ padding: "8px 12px", marginLeft: "8px" }}>
          Buscar
        </button>
      </form>

      {/* Lista de notícias */}
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                style={{ width: "100%", maxWidth: "400px" }}
              />
            )}
            <p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Leia mais
              </a>
            </p>
          </div>
        ))
      ) : (
        <p>Nenhuma notícia encontrada.</p>
      )}
    </div>
  );
}

export default Home;
