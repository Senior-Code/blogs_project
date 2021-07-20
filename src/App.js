import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Pages/Header";
import AboutMe from "./Pages/AboutMe";
import Article from "./Pages/Article";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route path="/articles" component={Article} exact />
        <Route path="/aboutme" component={AboutMe} exact />
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
}
export default App;
