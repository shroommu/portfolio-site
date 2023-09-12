import styled from "styled-components";

const Container = styled.div`
  display: flex;
  min-height: 500px;
  flex: 1;
  padding: ${(p) => p.padding};
  margin: ${(p) => p.margin};
`;

export default function Section({ testId, children, margin, padding }) {
  return (
    <Container test-id={testId} margin={margin} padding={padding}>
      {children}
    </Container>
  );
}

Section.defaultProps = { padding: "5% 15% 0%", margin: "0 0 24px 0" };
