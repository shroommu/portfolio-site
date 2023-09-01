import styled from "styled-components";

const Container = styled.div``;

export function Link({ href, children }) {
  return (
    <Container>
      <a href={href}>{children}</a>
    </Container>
  );
}
