import styled from "styled-components";
import Greeting from "./Greeting";
import Card from "../basic/Card";
import { device } from "../../constants";

const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  position: relative;
`;

const CardContainer = styled.div`
  display: flex;
  padding: 64px 200px 64px 350px;
  margin-bottom: 24px;

  @media ${device.tablet} {
    padding: 5% 10%;
  }
`;

export default function LandingSection() {
  return (
    <Container test-id="landing-section-container">
      <CardContainer>
        <Card zIndex={4}>
          <Greeting />
        </Card>
      </CardContainer>
    </Container>
  );
}
