import styled from "styled-components";

const Container = styled.div`
  display: flex;
  min-height: 100px;
  flex: 1;
  padding: 10% 15%;
`;

export default function Section({ testId, children }) {
  return <Container test-id={testId}>{children}</Container>;
}
