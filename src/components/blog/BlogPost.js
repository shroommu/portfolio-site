import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Card from "../basic/Card";
import Section from "../basic/Section";

const Container = styled.article`
  display: flex;
  flex-direction: column;
`;

export default function BlogPost() {
  return (
    <Section testId="blog-post-section">
      <Card testId="blog-post-card">
        <Container testId="blog-post-container">
          <Outlet />
        </Container>
      </Card>
    </Section>
  );
}
