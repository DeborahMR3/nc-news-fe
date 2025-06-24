// User Stories
// As a user, I can see a list of comments below or beside the article content.
// As a user, I can see who wrote each comment and when it was posted.
// As a user, I can see the content of each comment.
// As a user, I can see how many votes each comment has.
function CommentsCard({ comment }) {
  const { author, created_at, body, votes } = comment;
  const publishedDate = new Date(created_at);

  return (
    <div className="comment-card">
      <p>
        <strong>{author}</strong> — {publishedDate.toLocaleDateString()}
      </p>
      <p>{body}</p>
      <p>Votes: {votes}</p>
    </div>
  );
}
export default CommentsCard;
