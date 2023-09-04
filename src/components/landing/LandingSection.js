import styled from "styled-components";
import Background from "./Background";
import Greeting from "./Greeting";
import Card from "../basic/Card";

const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  position: relative;
`;

const CardContainer = styled.div`
  display: flex;
  padding: 10% 15% 10% 30%;
`;

export default function LandingSection() {
  return (
    <Container test-id="landing-section-container">
      <Background />
      <CardContainer>
        <Card zIndex={4}>
          <Greeting />
        </Card>
      </CardContainer>
    </Container>
  );
}
