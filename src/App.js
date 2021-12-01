import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card_list_components";

export default class App extends Component {
  constructor() {
    
    super();

    this.state = {
      monsters: [],
    };
    

    
  }

  
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      // .then(user => console.log(user))
      .then((e) => this.setState({ monsters: e }));
  }
  



  render() {
    console.log(this.state.monsters)
    return (
     <CardList item={this.state.monsters}/>
     );
  }
}
