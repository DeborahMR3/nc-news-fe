import TopicsList from "./TopicsList";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function TopicsPage() {
const [articles, setArticles] = useState([]);
const [isLoading, setIsLoading] = useState(true);

  const { specific_topic } = useParams();

 useEffect(() => {
    setIsLoading(true);
    fetch(`https://deborah-nc-news.onrender.com/api/articles?topic=${specific_topic}`)
      .then(res => res.json())
      .then(data => {
        setArticles(data.articles);
        setIsLoading(false);
      });
  }, [specific_topic]);    //atualiza toda vez q o topic mudar

  if (isLoading) return <p>Loading ...</p>

  return (
    <>
      <h1>Articles about {specific_topic}</h1>
      {/* <TopicsList /> */}
      {/* tenho q colocar os artigos aqui */}
      <ul>
        {articles.map((article) => (
          <li key={article.article_id}>
          <Link to={`/articles/${article.article_id}`}>
            <p>{article.title}</p>
          </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default TopicsPage;
