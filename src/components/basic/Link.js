import styled from "styled-components";

const Container = styled.div``;

export default function Link({ href, children }) {
  return (
    <Container>
      <a href={href} tabIndex={0} target="_blank">
        {children}
      </a>
    </Container>
  );
}
