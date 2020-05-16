import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Route, Switch } from "wouter";
import {
  PageHome,
  PageIdeas,
  PageIdea,
  PageAdd,
  PageRoadmap,
  PageError
} from "./pages/index";

import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="flex-grow | container mx-auto | px-6">
        <div className="xl:mx-64">
          <Header />

          <Switch>
            <Route path="/" component={PageHome} />

            <Route path="/ideas" component={PageIdeas} />
            <Route path="/ideas/:id" component={PageIdea} />
            <Route path="/roadmap" component={PageRoadmap} />

            <Route path="/add" component={PageAdd} />

            <Route path="/:rest*" component={PageError} />
          </Switch>

          <footer className="text-center my-8">
            <p>
              👨🏻‍💻Created by{" "}
              <a
                className="font-semibold"
                href="https://brandonsueur.fr"
                target="_blank"
                rel="noopener"
              >
                Brandon Sueur
              </a>
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
