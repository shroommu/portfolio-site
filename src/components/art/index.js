import styled from "styled-components";

import Section from "../basic/Section";
import Card from "../basic/Card";

const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  position: relative;
`;

export default function Art() {
  return (
    <Container>
      <Section testId="art-section">
        <Card zIndex={5}></Card>
      </Section>
    </Container>
  );
}
