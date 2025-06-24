import { Link } from "react-router-dom";

function ArticlesCard(props) {
  const { title, author, topic, created_at, votes, comment_count, article_img_url, article_id  } = props.article

  const publishedDate = new Date(created_at);

   console.log(props.article)

  return (
  <section className="article-card">
  <Link to={`/articles/${article_id}`}>
    <h2>{title}</h2>
    <p>Author: {author}</p>
    <p>Topic: {topic}</p>
    {/* <p>Votes: {votes}</p> */}
    {/* <p>Comments: {comment_count}</p> */}
    <p>Date published: {publishedDate.toLocaleDateString()}</p>
    <img src={article_img_url} alt={`Image for ${title} Article`}/>
  </Link>
  </section>
  );
}
export default ArticlesCard;
