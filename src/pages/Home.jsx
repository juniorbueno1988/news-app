// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchNews } from "../services/api";
import NewsCard from "../components/NewsCard";

function Home() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const navigate = useNavigate();

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async (query = "") => {
    const data = await fetchNews(query);
    setArticles(data);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    loadNews(search);
  };

  const toggleFavorite = (article) => {
    let updated = [];
    if (favorites.some((fav) => fav.url === article.url)) {
      updated = favorites.filter((fav) => fav.url !== article.url);
    } else {
      updated = [...favorites, article];
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div>
      <h1>App de Notícias</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar notícias..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      {articles && articles.length > 0 ? (
        articles.map((article, index) => (
          <NewsCard
            key={index}
            article={article}
            onClick={() =>
              navigate(`/details/${index}`, { state: { article } })
            }
            onFavorite={toggleFavorite}
            isFavorite={favorites.some((fav) => fav.url === article.url)}
          />
        ))
      ) : (
        <p>Carregando ou nenhuma notícia encontrada...</p>
      )}
    </div>
  );
}

export default Home;
