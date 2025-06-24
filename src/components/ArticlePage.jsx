import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

function ArticlePage() {
  const { article_id } = useParams();

  const [article, setArticle] = useState(null);      // guarda o artigo recebido article_id
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("id deste artigo é:", article_id);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://deborah-nc-news.onrender.com/api/articles/${article_id}`)
    .then((res) => {
      if (!res.ok) throw new Error("Artigo não encontrado");
      return res.json();
    })
    .then((dataFromApi) => {
      setArticle(dataFromApi);
      setError(false)
    })
    .catch(() => setError("Erro ao carregar artigo"))
    .finally(() => setIsLoading(false));

  }, [article_id]);  // executa toda vez que esse valor mudar

if (isLoading) return <p>Loading Article...</p>;
if (error) return <p>{error}</p>;
if (!article) return null;


 return (
  <section>
    <h2>Article Title: {article.title}</h2>
  </section>

 )
}
