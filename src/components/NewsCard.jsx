export default function NewsCard({ article, onClick }) {
  return (
    <div 
      onClick={onClick} 
      style={{
        border: '1px solid #ccc',
        margin: '10px',
        padding: '10px',
        cursor: 'pointer',
        borderRadius: '5px'
      }}
    >
      <img 
        src={article.urlToImage || "https://via.placeholder.com/400x200"} 
        alt={article.title} 
        style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '5px' }}
      />
      <h3>{article.title}</h3>
      <p>{article.source.name} - {new Date(article.publishedAt).toLocaleDateString()}</p>
    </div>
  );
}
