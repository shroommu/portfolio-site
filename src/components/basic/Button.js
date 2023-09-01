import styled from "styled-components";
import { colors } from "../constants";

const Container = styled.div`
  display: flex;
  padding: 8px;
  margin: ${(p) => p.margin};
  background: ${(p) => p.background};
  height: fit-content;
  border-radius: 10px;
  font-family: ${(p) => p.fontFamily};
  font-size: ${(p) => p.fontSize};
  color: ${(p) => p.fontColor};

  &:hover {
    background: ${(p) => p.hover};
  }

  &:active {
    background: ${(p) => p.active};
  }
`;

export default function Button({
  content,
  onClick,
  background,
  hover,
  active,
  margin,
  fontSize,
  fontFamily,
  fontColor,
}) {
  return (
    <Container
      onClick={onClick}
      background={background}
      margin={margin}
      fontSize={fontSize}
      hover={hover}
      active={active}
      fontFamily={fontFamily}
      fontColor={fontColor}
    >
      {content}
    </Container>
  );
}

Button.defaultProps = {
  background: colors.white,
  hover: colors.defaultButtonHover,
  active: colors.defaultButtonActive,
};
