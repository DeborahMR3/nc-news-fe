function ArticlesCard(props) {
  const { title, author, topic, created_at, votes, comment_count, article_img_url } = props.article

  const publishedDate = new Date(created_at);
return (
<section>
  <h1>Title: {title}</h1>
  <p>Author: {author}</p>
  <p>Topic: {topic}</p>
  <p>Votes: {votes}</p>
  <p>Comments: {comment_count}</p>
  <p>Date published: {publishedDate.toLocaleDateString()}</p>
  <img src={article_img_url} alt={`Image for ${title} Article`}/>
</section>
)

}
export default ArticlesCard;
