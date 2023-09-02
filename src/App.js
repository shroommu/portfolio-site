import styled from "styled-components";

import { colors } from "./components/constants";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

import "./global.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: ${colors.darkBlue};
`;

export default function App() {
  return (
    <Container>
      <Header />
      <Content />
      <Footer />
    </Container>
  );
}
