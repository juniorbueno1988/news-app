// src/pages/Favorites.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NewsCard from "../components/NewsCard";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  const removeFavorite = (article) => {
    const updated = favorites.filter((fav) => fav.url !== article.url);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div>
      <h1>Favoritos</h1>

      {favorites.length > 0 ? (
        favorites.map((article, index) => (
          <NewsCard
            key={index}
            article={article}
            onClick={() =>
              navigate(`/details/${index}`, { state: { article } })
            }
            onFavorite={removeFavorite}
            isFavorite={true}
          />
        ))
      ) : (
        <p>Nenhuma notícia favoritada.</p>
      )}
    </div>
  );
}

export default Favorites;
