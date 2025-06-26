import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { deleteComment } from "../api";

function CommentsCard({ comment }) {
  const { author, created_at, body, votes, comment_id } = comment;
  const publishedDate = new Date(created_at);

  const { user } = useContext(UserContext);

function canDeleteComment(user, comment) {
  const loggedUser = user.username; // pega o nome do usuário logado
  const commentAuthor = comment.author;  // pega o autor do comentário
  if (loggedUser === commentAuthor) {
    return true;

  } else {
    return false;
  }
}

function handleDelete() {
  deleteComment(comment_id)
  alert("Your comment has been deleted!");
}

  return (
    <div className="comment-card">
      <p>
        <strong>{author}</strong> — {publishedDate.toLocaleDateString()}
      </p>
      <p>{body}</p>
      <p>Votes: {votes}</p>
      {canDeleteComment(user, comment) && <button onClick={handleDelete} className="delete-comment-button">Delete this comment</button>}
    </div>
  );
}
export default CommentsCard;
