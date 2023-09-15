import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Card from "../basic/Card";
import Section from "../basic/Section";

const Container = styled.article`
  display: flex;
  flex-direction: column;
`;

export default function BlogPost({ children }) {
  return (
    <Section>
      <Card zIndex={5}>
        <Container>
          <Outlet />
        </Container>
      </Card>
    </Section>
  );
}
