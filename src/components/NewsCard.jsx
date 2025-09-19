// src/components/NewsCard.jsx
function NewsCard({ article, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        cursor: "pointer",
      }}
    >
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} width="200" />
      )}
      <h3>{article.title}</h3>
      <p>
        {article.source?.name} -{" "}
        {new Date(article.publishedAt).toLocaleDateString()}
      </p>
    </div>
  );
}

export default NewsCard;
