import styled from "styled-components";

import LandingSection from "./landing/LandingSection";
import Section from "./basic/Section";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export default function Content() {
  return (
    <Container>
      <LandingSection />
      <Section testId="section-1" />
    </Container>
  );
}
