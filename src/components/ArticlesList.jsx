import { useEffect, useState } from "react";
import ArticlesCard from "./ArticlesCard"
import { getArticles } from "../api";

function ArticlesList() {

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Articles list useEffect called");
    setIsLoading(true);
    getArticles()
    .then((dataFromApi) => {
      setArticles(dataFromApi.articles); // salvo os articles no state
    })
    .catch((err) => {
      setError("Failed to fetch articles");
    })
    .finally(() => {
      setIsLoading(false);
    })
  }, []);

  if (isLoading) {
    return <p>Loading articles...</p>;
  }
    if (error) {
    return <p>Could not load Articles</p>;
  }
  return (
    <section className="articles-list">
      {articles.map((articleItem) => {
        return (
          <ArticlesCard key={articleItem.article_id}
           article={articleItem}/>
        )
      })}
    </section>
  );

}

export default ArticlesList;
