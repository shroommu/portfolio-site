import styled from "styled-components";

const Container = styled.div`
  display: flex;
  min-height: 100px;
  flex: 1;
  padding: ${(p) => p.padding};
  margin: ${(p) => p.margin};

  & :last-child {
    margin-bottom: 24px;
  }
`;

export default function Section({ testId, children, margin, padding }) {
  console.log(padding);
  return (
    <Container test-id={testId} margin={margin} padding={padding}>
      {children}
    </Container>
  );
}

Section.defaultProps = { padding: "10% 15% 0%" };
