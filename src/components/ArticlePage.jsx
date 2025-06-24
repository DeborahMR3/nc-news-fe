import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import ArticlesCard from "./ArticlesCard";
import CommentsList from "./CommentsList";

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
      setArticle(dataFromApi.article);
      setError(false)
    })
    .catch(() => setError("Erro ao carregar artigo"))
    .finally(() => setIsLoading(false));

  }, [article_id]);  // executa toda vez que esse valor mudar

if (isLoading) return <p>Loading Article...</p>;
if (error) return <p>{error}</p>;
if (!article) return null;


 return (
// posso usar ao inves de div ou section, só serve para o React
<>
  <ArticlesCard article={article} />
  {/* // passo o article como prop para ArticleCard */}
  <CommentsList article_id={article_id} />
  {/* //passo o article_id como prop para CommentsList */}
</>
 )
}

export default ArticlePage;
