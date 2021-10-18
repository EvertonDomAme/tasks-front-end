import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Update from "./pages/Update/Update";
import CardInfo from "./pages/CardInfo/CardInfo";

function App() {
  return (
    <div className="app">
      <Header />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/update/:id" component={Update} />
          <Route path="/info/:id" component={CardInfo} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
