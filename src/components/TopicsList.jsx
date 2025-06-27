import { useEffect, useState } from "react";

import { Link } from "react-router-dom";  // have to omport to link to specific topic page

function TopicsList() {
 // vou buscar a lista de topicos
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    fetch("https://deborah-nc-news.onrender.com/api/topics")
      .then((res) => res.json())
      .then((data) => {
        setTopics(data.topics);
        setIsLoading(false);
      });
  }, []);

    if (isLoading) return <p>Loading topics...</p>;

    console.log(topics)

return (
<section>
<p>Topics:</p>
<ul>
  {topics.map((topic) => (
  <li key={topic.slug}>
    <Link to={`/topics/${topic.slug}`}>
    <strong>
      {topic.slug}
    </strong>
    </Link>
  </li>
  ))}
</ul>
</section>
)
}


export default TopicsList;
