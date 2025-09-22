import { useEffect, useState } from "react";
import { fetchNews } from "../services/api";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const categories = [
    "", // Todas
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  // Buscar notícias sempre que mudar query, categoria ou página
  useEffect(() => {
    setLoading(true);
    fetchNews(query, query ? "" : category, page).then((data) => {
      if (page === 1) setArticles(data);
      else setArticles((prev) => [...prev, ...data]);
      setLoading(false);
    });
  }, [query, category, page]);

  function toggleFavorite(article) {
    let updated;
    if (favorites.some((fav) => fav.url === article.url)) {
      updated = favorites.filter((fav) => fav.url !== article.url);
    } else {
      updated = [...favorites, article];
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>📰 News App</h1>

      {/* Busca */}
      <input
        type="text"
        placeholder="Buscar notícias..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setPage(1); // resetar paginação ao buscar
        }}
        style={{ padding: "8px", marginBottom: "15px", width: "250px" }}
      />

      {/* Categorias */}
      <div style={{ marginBottom: "20px" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setCategory(cat);
              setPage(1); // resetar paginação ao trocar categoria
            }}
            style={{
              marginRight: "10px",
              padding: "8px 12px",
              backgroundColor: category === cat ? "#333" : "#f0f0f0",
              color: category === cat ? "#fff" : "#000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {cat === "" ? "Todas" : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Lista de notícias */}
      {loading ? (
        <p>Carregando...</p>
      ) : articles.length === 0 ? (
        <p>Nenhuma notícia encontrada...</p>
      ) : (
        articles.map((article, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <h2>{article.title}</h2>
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                style={{ width: "200px" }}
              />
            )}
            <p>
              {article.source?.name} -{" "}
              {new Date(article.publishedAt).toLocaleDateString()}
            </p>

            {/* Botão Favorito */}
            <button
              onClick={() => toggleFavorite(article)}
              style={{
                marginTop: "5px",
                backgroundColor: favorites.some(
                  (fav) => fav.url === article.url
                )
                  ? "red"
                  : "gray",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              {favorites.some((fav) => fav.url === article.url)
                ? "Remover Favorito"
                : "Favoritar"}
            </button>
          </div>
        ))
      )}

      {/* Botão Carregar mais */}
      {articles.length > 0 && !loading && (
        <button
          onClick={() => setPage((prev) => prev + 1)}
          style={{
            padding: "10px 20px",
            marginTop: "20px",
            cursor: "pointer",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#333",
            color: "#fff",
          }}
        >
          Carregar mais
        </button>
      )}

      {/* Favoritos */}
      <div style={{ marginTop: "40px" }}>
        <h2>⭐ Favoritos</h2>
        {favorites.length === 0 ? (
          <p>Nenhum favorito salvo.</p>
        ) : (
          favorites.map((fav, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <h3>{fav.title}</h3>
              <a href={fav.url} target="_blank" rel="noreferrer">
                Ler notícia
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
