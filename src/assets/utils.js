import { css } from "styled-components";

export const treeStyles = ({
  fillColor,
  zIndex,
  rightPos,
  leftPos,
  bottomPos,
  flipX,
  maxHeight,
}) => {
  return css`
    max-height: ${maxHeight || "600px"};
    max-width: 600px;
    position: absolute;
    flex: 1;
    z-index: ${zIndex};

    right: ${rightPos};
    left: ${leftPos};
    bottom: ${bottomPos};

    ${flipX && "transform: scaleX(-1)"};

    & path {
      fill: ${fillColor};
    }
  `;
};

export const iconStyles = ({ height, margin }) => {
  return css`
    height: ${height};
    margin: ${margin};
  `;
};
