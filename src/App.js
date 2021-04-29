import "./App.css";
import Navigation from "./components/navigation";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./components/login";
import AllPosts from "./components/posts/allPosts";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Route path="/posts" component={AllPosts} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
