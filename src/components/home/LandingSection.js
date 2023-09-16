import styled from "styled-components";
import Greeting from "./Greeting";
import Card from "../basic/Card";
import Section from "../basic/Section";

const CardContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

export default function LandingSection() {
  return (
    <Section testId="landing-section" padding="64px 200px 64px 350px">
      <CardContainer>
        <Card zIndex={4}>
          <Greeting />
        </Card>
      </CardContainer>
    </Section>
  );
}
