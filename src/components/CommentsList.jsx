// GET /api/articles/:article_id/comments
import { useEffect, useState } from "react";

function CommentsList(props) {
  const { article_id } = props.article_id
  // preciso pegar o article_id que esta em ArticlePage
  return <p>Comentários do artigo {article_id}</p>;
}
export default CommentsList;
