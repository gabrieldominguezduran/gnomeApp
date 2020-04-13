import React, { Component } from "react";
import Item from "./Item";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 5%;
`;

const Div = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;
const Input = styled.input`
  padding: 0.5rem 5rem;
  margin: 5rem 2rem;
  border: 0;
  outline: 0;
  border-bottom: 2px solid #000;
  font-size: 2.5rem;
  text-align: center;
  color: black;
`;

const H2 = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin: 3rem;
`;

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchGnome: "",
    };
  }

  updateSearchGnome(event) {
    this.setState({ searchGnome: event.target.value.substr(0, 20) });
  }

  render() {
    let filteredData = this.props.modules.filter((data) => {
      return (
        (data.job || data.name)
          .toLowerCase()
          .indexOf(this.state.searchGnome.toLowerCase()) !== -1
      );
    });

    const items = filteredData.map((data) => {
      return (
        <Item
          key={data.id}
          name={data.name}
          job={data.job}
          age={data.age}
          weight={data.weight}
          height={data.height}
          hair={data.hair_color}
          photo={data.photo}
          friends={data.friends}
        />
      );
    });

    return (
      <Container>
        <div>
          <H2>Search by:</H2>
          <form>
            <Div>
              <Input
                type="text"
                placeholder="Job or Name"
                className="form-control"
                value={this.state.searchGnome}
                onChange={this.updateSearchGnome.bind(this)}
              />
            </Div>
          </form>
          <H2>Gnomes</H2>
        </div>
        {items}
      </Container>
    );
  }
}

export default Listing;
