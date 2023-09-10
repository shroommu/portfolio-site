import styled from "styled-components";
import { colors, footerHeight } from "../constants";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh + ${footerHeight}px);
  width: 100%;
  background: ${colors.darkBlue};
  position: relative;
`;
