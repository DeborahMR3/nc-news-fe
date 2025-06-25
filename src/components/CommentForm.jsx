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
      <button type="submit">Send Comment</button>
    </form >
  )
}

export default CommentForm;
