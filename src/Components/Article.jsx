import React from "react";
import useSWR from "swr";
import Loading from "./Loading";
import "./Article.css";

export default function Article() {
  const { data } = useSWR("http://localhost:1337/blogs");
  return (
    <div className="blogs-body">
      {data ? (
        <div>
          {data.map((blog) => {
            console.log(blog);
            return (
              <div className="blogs-section" key={blog.id}>
                <div className="title-section">
                  <p>{blog.Title}</p>
                  <div className="img-section">
                    <img
                      src={`http://localhost:1337${blog.Thumbnail.url}`}
                      alt="#"
                    ></img>
                  </div>
                  <p>{blog.updated_at}</p>
                </div>
                <div className="Description-section">{blog.Description}</div>
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
