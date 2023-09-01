import styled from "styled-components";
import { colors, footerHeight } from "./constants";

const Container = styled.div`
  display: flex;
  min-height: ${footerHeight}px;
  background: ${colors.darkestBlue};
`;

export default function Footer() {
  return <Container></Container>;
}
