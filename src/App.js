import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card_list_components";
import { SearchBox } from "./components/SearchBox/Serach_box_components";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        // {image: ./././}  image from pc directopry not internet
        // {image: ./././}
      ],
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
    const { monsters, searchField } = this.state;
    const monsterFilter = monsters.filter((e) =>
    // console.log('filter',e.name)
      e.name.toLowerCase().includes(searchField.toLowerCase())
    );
    // console.log('romel',searchField);
    
    return (
      <div style={{ width: "100%" }}>
        <h1 className="title">Monsters Roledex</h1>
        {/* {console.log(monsters)}; */}
        <SearchBox
          text="search"
          handlechange={(e) => this.setState({ searchField: e.target.value })}
                    // handlechange={(e) =>console.log(e.target.value)}

        />
        {/* <CardList item={this.state.monsters} /> */}
        <CardList item={monsterFilter} />
      </div>
    );
  }
}
