import React from "react";
import useSWR from "swr";
import Loading from "./Loading";
import "./Article.css";
import ReactMarkdown from "react-markdown";

export default function Article() {
  const { data } = useSWR("http://localhost:1337/articles");
  return (
    <div className="blogs-body">
      {data ? (
        <div>
          {data.map((articles) => {
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
                <ReactMarkdown className="content-section" skipHtml={true}>
                  {articles.content}
                </ReactMarkdown>
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
