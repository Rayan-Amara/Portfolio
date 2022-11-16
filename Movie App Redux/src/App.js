import React, { Component } from "react";
// import { tabListMovies } from "../src/data";
import ListMovies from "./ListMovies";
import AddMovie from "./AddMovie";
import Search from "./Search";
import X from "./Loading";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Description from "./Description";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: "",
      rating: 0
    };
  }

  searchRate = item => {
    this.setState({
      rating: item
    });
  };

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <div className="tab">
                <AddMovie />
                <Search />
              </div>
              <ListMovies />
            </Route>
            <Route path="/description/:id" component={Description} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default X(App);
