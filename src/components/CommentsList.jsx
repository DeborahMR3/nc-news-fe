// GET /api/articles/:article_id/comments
import { useEffect, useState } from "react";

function CommentsList({ article_id }) { // article_id vem como prop de ArticlesPAGE

  // preciso pegar o article_id que esta em ArticlePage
  return <p>Comentários do artigo {article_id}</p>;
}
export default CommentsList;
