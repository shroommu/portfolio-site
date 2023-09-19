import styled from "styled-components";

import { colors } from "../constants";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  background: ${(p) => p.background};
  border-radius: ${(p) => p.borderRadius};
  z-index: ${(p) => p.zIndex};
  padding: ${(p) => p.padding};
`;

export default function Card({
  background,
  borderRadius,
  zIndex,
  padding,
  testId,
  children,
  className,
}) {
  return (
    <Container
      background={background}
      borderRadius={borderRadius}
      padding={padding}
      test-id={testId}
      zIndex={zIndex}
      className={className}
    >
      {children}
    </Container>
  );
}

Card.defaultProps = {
  background: colors.white,
  borderRadius: "30px",
  zIndex: 30,
  padding: "36px",
};
