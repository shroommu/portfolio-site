import styled from "styled-components";

import { ReactComponent as tree1 } from "./svg/tree1.svg";
import { ReactComponent as tree2 } from "./svg/tree2.svg";
import { ReactComponent as tree3 } from "./svg/tree3.svg";
import { ReactComponent as fox } from "./svg/fox.svg";
import { treeStyles, iconStyles } from "./utils";

export const Tree1 = styled(tree1)`
  ${(props) => treeStyles(props)}
`;
export const Tree2 = styled(tree2)`
  ${(props) => treeStyles(props)}
`;
export const Tree3 = styled(tree3)`
  ${(props) => treeStyles(props)}
`;

export const SocialIcon = styled.img`
  ${(props) => iconStyles(props)};
`;

export const FoxArt = styled(fox)`
  z-index: 4;
  position: absolute;
  left: 30%;
  position: absolute;
  bottom: -10%;
  max-height: 150px;
`;
