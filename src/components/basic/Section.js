import styled from "styled-components";

const Container = styled.div`
  min-height: 100px;
  flex: 1;
`;

export default function Section({ testId, children }) {
  return <Container test-id={testId}>{children}</Container>;
}
