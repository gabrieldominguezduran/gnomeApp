import React, { Component } from "react";
import Header from "./components/Header";
import Listing from "./components/Listing";
import "./index.css";


class App extends Component {
  constructor() {
    super();

    this.state = {
      modules: [],
    };
  }

  componentDidMount() {
    const url =
      "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";

      fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        let values = [];

        responseJson.Brastlewark.map(data => {
          
          return(
          values.push({
            id: data.id,
            photo: data.thumbnail,
            name: data.name,
            job: data.professions[0],
            age: data.age,
            weight: data.weight,
            height: data.height,
            friends: data.friends,
            hair_color: data.hair_color,
          }))
        });

        this.setState({
          modules: values,
        });
      })
      
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <Listing modules={this.state.modules} />
      </div>
    );
  }
}

export default App;
