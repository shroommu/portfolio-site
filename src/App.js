import styled from "styled-components";

import { colors } from "./components/constants";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

import "./global.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.darkBlue};
`;

export default function App() {
  return (
    <Container test-id="app-container">
      <Header />
      <Content />
      <Footer />
    </Container>
  );
}
