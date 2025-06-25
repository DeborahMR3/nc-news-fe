import { useState } from "react";

import { postComment } from "../api";

function CommentForm() {

  const [comment, setComment] = useState("");

  function handleChange(event) {
    setComment(event.target.value) // para hold o value do input
  }

  function handleSubmit(event) {
  event.preventDefault(); // impede refresh do page
  alert("Comentário enviado: " + comment);
}

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Insert your comment here:</label>
      <textarea name="comment" id="comment" value={comment} onChange={handleChange}></textarea>
      <button type="submit" disabled={comment.trim() === ""}>Click to send your comment</button>
      {/* desativa o botao se nao tiver nada escrito alem de espacos */}
    </form >
  )
}

export default CommentForm;
