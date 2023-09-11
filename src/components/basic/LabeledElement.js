import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

const BaseLabel = styled.label`
  padding: 0 0 8px 0;
  font-family: Bitter;
`;

export default function LabeledElement({ children, childId, testId, label }) {
  return (
    <Container>
      <BaseLabel for={childId} test-id={testId}>
        {label}
      </BaseLabel>
      {children}
    </Container>
  );
}
