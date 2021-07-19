import React from "react";
import useSWR from "swr";
import Loading from "./Loading";
import "./Article.css";
import { Link, Route, BrowserRouter } from "react-router-dom";
import Post from "./Post";

export default function Article() {
  const { data: categories } = useSWR("http://localhost:1337/categories");
  return (
    <BrowserRouter>
      <div className="blogs-body">
        {categories ? (
          <div className="body">
            <div className="body-tabs">
              <Link to="/articles">All</Link>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/articles?category=${category.id}`}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Loading />
        )}
        <Route path="/articles" component={Post} />
      </div>
    </BrowserRouter>
  );
}
