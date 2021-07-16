import React from "react";
import useSWR from "swr";
import logo from "../Resources/logo.png";
import "./Home.css";
import "./Font.css";
import Loading from "./Loading";
import Article from "./Article";

export default function Header() {
  const { data } = useSWR("http://localhost:1337/categories");
  return (
    <div className="background">
      <div className="header-section">
        <div className="header-logo">
          <div className="title">
            <img src={logo} className="app-logo" alt="logo"></img>
            <p>
              CAMBODIA <br />
              TECH TALK
            </p>
          </div>
        </div>
        <ul className="header-tab">
          <li>HOME</li>
          <li>BLOGS</li>
          <li>ABOUT US</li>
        </ul>
      </div>
      {data ? (
        <div className="body">
          <div className="body-tabs">
            <button>All</button>
            {data.map((category) => (
              <button key={category.id}>{category.name}</button>
            ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
      <Article />
    </div>
  );
}
