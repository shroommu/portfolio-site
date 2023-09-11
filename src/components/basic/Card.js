import styled from "styled-components";

import { colors } from "../constants";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  background: ${(p) => p.background};
  border-radius: ${(p) => p.borderRadius};
  z-index: ${(p) => p.zIndex};
  padding: 24px;
`;

export default function Card({ background, borderRadius, zIndex, children }) {
  return (
    <Container
      background={background}
      borderRadius={borderRadius}
      zIndex={zIndex}
    >
      {children}
    </Container>
  );
}

Card.defaultProps = {
  background: colors.white,
  borderRadius: "30px",
  zIndex: 0,
};
