# 📰 News App

Aplicação Front-end desenvolvida em **React (JavaScript)** com **Vite**, que consome a **GNews API** para exibir notícias em tempo real.  
O app permite pesquisar notícias, filtrar por categorias, salvar favoritas e carregar mais resultados com paginação.

---

## 🚀 Funcionalidades

- 🔍 **Busca de notícias** por palavra-chave.  
- 📂 **Filtros por categorias** (business, entertainment, sports, etc).  
- ⭐ **Favoritos salvos em localStorage**.  
- ➕ **Paginação** com botão *Carregar mais*.  
- 🖼️ Exibição de título, imagem, fonte e data da notícia.  

---

## 🛠️ Tecnologias utilizadas

- [React](https://react.dev/) (com [Vite](https://vitejs.dev/))  
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)  
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)  
- [GNews API](https://gnews.io/)  

---

## 📦 Instalação e execução

Clone o repositório:

```bash
git clone https://github.com/juniorbueno1988/news-app.git
cd news-app
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto e adicione sua **API Key da GNews**:

```env
VITE_GNEWS_API_KEY=coloque_sua_chave_aqui
```

Execute o projeto:

```bash
npm run dev
```

Abra no navegador: **http://localhost:5173**

---

## 📂 Estrutura de pastas

```
news-app/
│── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/          # Páginas (Home, Favoritos, etc)
│   ├── services/       # Integração com API
│   ├── App.jsx         # Roteamento principal
│   └── main.jsx        # Ponto de entrada
│
│── public/             # Arquivos estáticos
│── .env                # Variáveis de ambiente (API Key)
│── package.json
│── vite.config.js
```

---

## 🔑 Como obter a chave da API

1. Acesse [GNews.io](https://gnews.io/).  
2. Faça login (Google ou GitHub).  
3. Copie sua **API Key**.  
4. Adicione ao arquivo `.env` conforme mostrado acima.  

---

## 🖼️ Demonstração

- Tela inicial com busca, filtros e lista de notícias.  
- Opção de **favoritar notícias** e acessar depois.  
- Botão *Carregar mais* para paginação infinita.  

---

## 📌 Próximos passos (possíveis melhorias)

- Adicionar **dark mode**.  
- Melhorar a responsividade e estilização.  
- Implementar testes automatizados.  
- Adicionar página de detalhes de notícia.

---

## 👨‍💻 Autor

Desenvolvido por **Edilson José Bueno Júnior**  
🔗 [GitHub](https://github.com/juniorbueno1988)
