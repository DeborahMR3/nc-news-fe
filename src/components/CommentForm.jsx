import { useState } from "react";

function CommentForm() {

  const [comment, setComment] = useState("");

  function handleChange(event) {
    setComment(event)

  }
}
