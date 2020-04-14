import React from "react";
import main from "../assets/img/main.jpg";
import styled from "styled-components";

const Section = styled.section`
  background-image: url(${main});
  background-repeat: no-repeat;
  background-position: center fixed;
  background-size: cover;
  width: 80vw;
  heigth: auto;
  margin: auto;
  border-radius: 10px;
`;

const Title = styled.div`
  padding: 20% 5%;
`;
const P = styled.p`
  font-size: 2rem;
  font-weight: 900;
  line-heigth: 52px;
  color: #a84c3e;
`;
const H1 = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  line-heigth: 52px;
  color: #a84c3e;
`;

const Header = () => {
  return (
    <Section>
      <Title>
        <H1>Gnomes Town</H1>
        <P>Welcome to Brastlewark</P>
      </Title>
    </Section>
  );
};

export default Header;
