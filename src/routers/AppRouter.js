import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Footer } from "../components/footer/Footer";
import { NavBar } from "../components/navbar/NavBar";
import { Campaña } from "../components/pages/Campaña";
import { Eshop } from "../components/pages/Eshop";
import { Locales } from "../components/pages/Locales";
import { Lookbook } from "../components/pages/Lookbook";
import { Sale } from "../components/pages/Sale";

import "../components/pages/pages.css";

export const AppRouter = () => {
  return (
    <>
      <div>
        <Router>
          <NavBar />
          <div className="page-positions">
            <Switch>
              <Route exact path="/" component={Sale} />
              <Route path="/e-shop" component={Eshop} />
              <Route path="/lookbook" component={Lookbook} />
              <Route path="/campaña" component={Campaña} />
              <Route path="/locales" component={Locales} />
              <Route path="/sale" component={Sale} />
            </Switch>
          </div>
        </Router>
      </div>
      <Footer />
    </>
  );
};
