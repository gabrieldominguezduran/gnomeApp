import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: inline-flex;
`;

const Img = styled.img`
  width: 100%;
`;

const H4 = styled.h4`
  font-size: 2rem;
`;
const P = styled.p`
  font-size: 1rem;
`;
const Div = styled.div`
  background-color: rgba(35, 35, 28, 0.8);
  margin: 5px;
  width: 200px;
  color: white;
  padding: 1rem;
  border-radius: 10px;
`;
const Item = (props) => {
  return (
    <Container>
      <Div>
        <Img src={props.photo} alt="Thumbnail" />
        <H4>{props.name}</H4>
        <P>
          Job: {props.job || " On sabbatical ;)"} <br />
          Age: {props.age} years old <br />
          Weight: {Math.floor(props.weight)} Kg
          <br />
          Size: {Math.floor(props.height)} Cms <br /> Hair: {props.hair} <br />{" "}
          Friends: {props.friends.join(", ") || " Don't have any :("}
        </P>
      </Div>
    </Container>
  );
};

export default Item;
