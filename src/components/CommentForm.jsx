import { useState } from "react";

import { postComment } from "../api";
import ArticlePage from "./ArticlePage";

function CommentForm( {article_id}) {

  const [comment, setComment] = useState("");
  const [isSubmitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false);

  function handleChange(event) {
    setComment(event.target.value) // para hold o value do input
  }

function handleSubmit(event) {
  setSuccess(false);
  event.preventDefault();
  if (comment.trim() === "") {
    return;
  }
  setSubmitting(true);

  postComment(article_id, {
    username: "jessjelly",
    body: comment
  })
    .then(() => {
      setSubmitting(false);
      setComment(""); // limpa o campo de comment
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false); // para a mensagem sumir depois
      }, 2000);

    })
    .catch(() => {
      setSuccess(false);
      setSubmitting(false);

    });
}

  return (
    <section>
    {success && <p className="success-message"> Your comment has been sent!</p>}
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Insert your comment here:</label>
      <textarea name="comment" id="comment" value={comment} onChange={handleChange}></textarea>
      <button type="submit" disabled={comment.trim() === ""}>Click to send your comment</button>
      {/* desativa o botao se nao tiver nada escrito alem de espacos */}
    </form >
    </section>
  )
}

export default CommentForm;
