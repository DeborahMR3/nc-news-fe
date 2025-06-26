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


// funcao para remove deleted comment from list display


function removeDeletedCommentFromList(deleted_id) {
  setComments((currentComments) => {
    return currentComments.filter((eachComment) => eachComment.comment_id !== deleted_id)
  })
// vai filtrar e retornar so os comments que nao sejam o que tem comment_id_argument como comment_id
}

if (isLoading) return <p>Loading comments...</p>
if (error) return <p>{error}</p>
  // preciso pegar o article_id que esta em ArticlePage

return (
  <section className="comments-list">
    {comments.map((comment) => (
      <CommentsCard
      key={comment.comment_id}
      comment={comment}
      removeDeletedCommentFromList={removeDeletedCommentFromList}/>
    ))}
  </section>
)
}
export default CommentsList;
