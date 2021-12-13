import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card_list_components";
import { SearchBox } from "./components/SearchBox/Serach_box_components";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      // .then(e => console.log(e))
      .then((e) => this.setState({ monsters: e }));
  }

  render() {
    return (
      // console.log(monsters):
      <div style={{ width: "100%" }}>
         <SearchBox text="search" 
        handlechange ={e => this.setState({searchField: e.target.value})}
        />
        <CardList item={this.state.monsters} />
       
      </div>
    );
  }
}
