import "../Styles/Post.css";
import useSWR from "swr";
import ReactMarkdown from "react-markdown";
import Loading from "./Loading";

export default function Post(props) {
  const { data: article } = useSWR(
    `http://localhost:1337/articles${props.location.search}`
  );
  return (
    <div>
      {article ? (
        <div>
          {article.map((articles) => {
            const date = new Date(articles.updated_at);

            return (
              <div className="blogs-section" key={articles.id}>
                <div className="title-section">
                  <img
                    src={`http://localhost:1337${articles.image.formats.thumbnail.url}`}
                    alt="#"
                  ></img>
                  <p className="article-title">{articles.title}</p>
                  <p className="upload-date">
                    {articles.author.name} | {date.toUTCString()}
                  </p>
                </div>
                <ReactMarkdown
                  children={articles.content}
                  className="content-section"
                  renderers={articles.content}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
