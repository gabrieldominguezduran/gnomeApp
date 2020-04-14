import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: inline-flex;
`;

const Img = styled.img`
  width: 100%;
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  padding: 8px;
`;
const P = styled.p`
  font-size: 1rem;
  padding: 5px;
`;
const Div = styled.div`
  background-color: rgba(35, 35, 28, 0.8);
  margin: 5px;
  width: 200px;
  color: white;
  padding: 1rem;
  border-radius: 10px;
`;

const Span = styled.span`
  color: #d13c3f;
`;

const Item = (props) => {
  return (
    <Container>
      <Div>
        <Img src={props.photo} alt="Thumbnail" />
        <H2>{props.name}</H2>
        <P>
          <Span>Job:</Span> {props.job || " On sabbatical ;)"} <br />
          <Span>Age:</Span> {props.age} years old <br />
          <Span>Weight:</Span> {Math.floor(props.weight)} Kg
          <br />
          <Span>Size:</Span> {Math.floor(props.height)} Cms <br />{" "}
          <Span>Hair:</Span> {props.hair} <br /> <Span>Friends:</Span>{" "}
          {props.friends.join(", ") || " Don't have any :("}
        </P>
      </Div>
    </Container>
  );
};

export default Item;
