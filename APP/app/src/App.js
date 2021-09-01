import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home"
import Header from "./components/Header";
import { CssBaseline } from "@material-ui/core";
import Audyt from "./components/Audyt";
import History from "./components/History";
import MachinsPage from "./components/MachinsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/audyt" component={Audyt} />
          <Route path="/machins" component={MachinsPage} />
          <Route path="/history" component={History} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
