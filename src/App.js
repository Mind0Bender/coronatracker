import NavBar from "./components/navbar";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/pageNotFound";
import { createContext, useState } from "react";

export let mobile = createContext();

function App() {
  let [mobState, setMobState] = useState(window.innerWidth < 600);

  window.onresize = () => {
    setMobState(window.innerWidth < 600);
  };

  return (
    <BrowserRouter>
      <mobile.Provider value={mobState}>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route exact path="/">
              <Home className="pages"/>
            </Route>
            <Route path="/">
              <PageNotFound className="pages"/>
            </Route>
          </Switch>
        </div>
      </mobile.Provider>
    </BrowserRouter>
  );
}

export default App;
