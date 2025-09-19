// src/pages/Details.jsx
import { useLocation, useNavigate } from "react-router-dom";

function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  if (!article) {
    return (
      <div>
        <h2>Nenhuma notícia encontrada</h2>
        <button onClick={() => navigate("/")}>Voltar</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => navigate("/")}>⬅ Voltar</button>
      <h1>{article.title}</h1>
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} width="600" />
      )}
      <p><strong>Fonte:</strong> {article.source?.name}</p>
      <p><strong>Publicado em:</strong> {new Date(article.publishedAt).toLocaleString()}</p>
      <p>{article.description}</p>
      <p>{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Leia a notícia completa
      </a>
    </div>
  );
}

export default Details;
