export function getArticles() {
  return fetch("https://deborah-nc-news.onrender.com/api/articles")
    .then((res) => {
      if (!res.ok) {
        return Promise.reject({
          status: res.status,
          msg: "Failed to fetch articles list",
        });
      }
      return res.json();
    });
}

export function patchArticleVotes(article_id, inc_votes) {

  return fetch(`https://deborah-nc-news.onrender.com/api/articles/${article_id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ inc_votes }),
  })
  .then((res) => {
      if (!res.ok) {
        return Promise.reject({
          status: res.status,
          msg: "Failed to update votes",
        });
      }
      return res.json();
  })
  .then(({ article }) => {
    return article;
  });
};

export function postComment(article_id, newComment) {
  return fetch(`https://deborah-nc-news.onrender.com/api/articles/${article_id}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newComment),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to post your comment");
      }
      return res.json();
    })
    .then((data) => data.comment); // retorna o comentário criado
}

export function deleteComment(comment_id) {
  return fetch (`https://deborah-nc-news.onrender.com/api/comments/${comment_id}`, {
    method: "DELETE"})
  .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to delete your comment");
      }
    })
}
