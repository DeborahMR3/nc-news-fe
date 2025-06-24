import { Link } from "react-router-dom";
import { useState } from "react";
import { patchArticleVotes } from "../api";

function ArticlesCard(props) {
  const { title, author, topic, created_at, votes, comment_count, article_img_url, article_id  } = props.article
  const publishedDate = new Date(created_at);
  const [currentVotes, setVotes] = useState(props.article.votes)

   console.log(props.article)


  function upvote() {
      setVotes((currentVotes) => currentVotes + 1);
      patchArticleVotes(article_id, 1)
        .catch(() => setVotes((currentVotes) => currentVotes - 1)); // rollback
  }

  function downvote() {
      setVotes((currentVotes) => currentVotes - 1);
      patchArticleVotes(article_id, -1)
        .catch(() => setVotes((currentVotes) => currentVotes + 1)); //rollback caso de algum erro
  }


  return (
  <section className="article-card">
  <Link to={`/articles/${article_id}`}>
    <h2>{title}</h2>
    <p>Author: {author}</p>
    <p>Topic: {topic}</p>
    {/* <p>Comments: {comment_count}</p> */}
    <p>Date published: {publishedDate.toLocaleDateString()}</p>
    <img src={article_img_url} alt={`Image for ${title} Article`}/>
  </Link>
    <p>Votes: {currentVotes}</p>
    <button className="vote-button" onClick={upvote}>Click to Upvote +</button>
    <button className="vote-button" onClick={downvote}>Click to Downvote -</button>
  </section>
  );

}

export default ArticlesCard;
