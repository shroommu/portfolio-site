import styled from "styled-components";

const Container = styled.div``;

export default function Contact({ testId, children }) {
  return <Container testId={testId}>{children}</Container>;
}
