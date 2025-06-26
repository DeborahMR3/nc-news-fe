import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { deleteComment } from "../api";


function CommentsCard({ comment, removeDeletedCommentFromList}) {
  const { author, created_at, body, votes, comment_id } = comment;
  const publishedDate = new Date(created_at);

  const { user } = useContext(UserContext);

function canDeleteComment(user, comment) {
  const loggedUser = user.username; // pega o nome do usuário logado
  const commentAuthor = comment.author;  // pega o autor do comentário
  if (loggedUser === commentAuthor) {
    return true;  //se for igual pode delete
  } else {
    return false;
  }

}

function handleDelete() {
  deleteComment(comment_id)
    .then(() => {
      removeDeletedCommentFromList(comment_id);
      alert("Your comment has been deleted!");
    })
    .catch(() => {
      alert("Could not delete your comment");
    });
  // aqui o commentario so some se eu der refresh na pagina
  removeDeletedCommentFromList(comment.comment_id)
}

  return (
    <div className="comment-card">
      <p>
        <strong>{author}</strong> — {publishedDate.toLocaleDateString()}
      </p>
      <p>{body}</p>
      <p>Votes: {votes}</p>
      {canDeleteComment(user, comment) && <button onClick={handleDelete } className="delete-comment-button">Delete this comment</button>}
    </div>
  );
}
export default CommentsCard;
