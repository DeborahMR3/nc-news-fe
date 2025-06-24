// GET /api/articles/:article_id/comments
import { useEffect, useState } from "react";
import CommentsCard from "./CommentsCard";


function CommentsList({ article_id }) { // article_id vem como prop de ArticlesPAGE
const [comments, setComments] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  setIsLoading(true);
  fetch(`https://deborah-nc-news.onrender.com/api/articles/${article_id}/comments`) //acesso os comments do artigo
  .then((res) => {
    if (!res.ok) throw new Error("Erro ao buscar comentários");
    return res.json();
  })
  .then((data) => {
    setComments(data.comments);
    setError(false);
  })
  .catch(() => {
    setError('Could not load comments from article')
  })
  .finally(() =>{
    setIsLoading(false);
  })

}, [article_id])

if (isLoading) return <p>Loading comments...</p>
if (error) return <p>{error}</p>
  // preciso pegar o article_id que esta em ArticlePage

return (
  // <ul>
  //   {comments.map(comment => {
  //     const publishedDate = new Date(comment.created_at);
  //     return (
  //       <li key={comment.comment_id}  className="comment-card">
  //         <p><strong>{comment.author}</strong> - {publishedDate.toLocaleDateString()}</p>
  //         <p>{comment.body}</p>
  //         <p>Votes: {comment.votes}</p>
  //       </li>
  //     );
  //   })}
  // </ul>

  <section className="comments-list">
    {comments.map((comment) => (
      <CommentsCard key={comment.comment_id} comment={comment} />
    ))}
  </section>
)
}
export default CommentsList;
