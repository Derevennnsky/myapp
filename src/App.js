import "./App.css";
import SearchBox from "./SearchBox";
import CardList from "./CardList";
import { robots } from "./jsn";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots:robots, 
      searchfield:""
    };
  }


  onSearchChange(event){
    this.setState({searchfield:event.target.value})
  
  }
  render() {
    const filterRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    console.log(filterRobots)
    return (
      <div className="App">
        <h1>Образцы роботов</h1>
        <SearchBox searchChange={this.onSearchChange }/>
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
