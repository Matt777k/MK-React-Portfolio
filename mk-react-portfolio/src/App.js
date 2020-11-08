// import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import "./pages/custom-style.css";


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/mk-react-portfolio/aboutpage" component={AboutMe} />
          <Route exact path="/mk-react-portfolio/contactpage" component={ContactPage} />
          <Route exact path="/mk-react-portfolio/portfoliopage" component={PortfolioPage}/>
          <Route path="/" component={AboutMe}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
