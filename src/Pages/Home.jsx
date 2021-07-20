import React from "react";
import "../Styles/Home.css";

export default function Home() {
  return (
    <div className="home-body">
      <div className="login-section">
        <form className="login-form">
          <p>Login</p>
          <input type="Text" />
          <input type="Password" />
          <button onClick={console.log("Clicked")}>login</button>
        </form>
      </div>
    </div>
  );
}
