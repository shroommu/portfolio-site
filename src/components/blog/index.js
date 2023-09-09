import styled from "styled-components";

const Container = styled.div``;

export default function Blog({ testId, children }) {
  //test
  return <Container testId={testId}>{children}</Container>;
}
