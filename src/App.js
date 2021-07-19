import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Componants/Header";
import AboutMe from "./Componants/AboutMe";
import Article from "./Componants/Article";
import Home from "./Componants/Home";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
      <Route path="/articles" component={Article} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/home" component={Home} />
    </BrowserRouter>
  );
}

export default App;
