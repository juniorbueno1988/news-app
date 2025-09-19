export default function Details({ article }) {
  if (!article) return <p>Notícia não encontrada.</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{article.title}</h1>
      <img 
        src={article.urlToImage || "https://via.placeholder.com/600x300"} 
        alt={article.title} 
        style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', borderRadius: '5px' }}
      />
      <p>{article.content || article.description || "Sem resumo disponível."}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Ler notícia completa
      </a>
    </div>
  );
}
