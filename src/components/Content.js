import styled from "styled-components";
import { colors, footerHeight, headerHeight } from "./constants";
import { Background } from "./Background";

const Container = styled.div`
  position: relative;
`;

const CardContainer = styled.div`
  display: flex;
  min-height: calc(100vh - ${footerHeight + headerHeight}px);
  padding: 100px 15% 100px 30%;
`;

const Card = styled.div`
  flex: 1;
  background: ${colors.white};
  border-radius: 30px;
  z-index: 4;
`;

export default function Content() {
  return (
    <Container>
      <Background />
      <CardContainer>
        <Card></Card>
      </CardContainer>
    </Container>
  );
}
