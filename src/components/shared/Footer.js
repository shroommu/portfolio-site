import styled from "styled-components";
import { colors, footerHeight } from "../constants";
import { locations } from "../../constants";
import Link from "../basic/Link";
import { WebsiteName } from ".";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  min-height: ${footerHeight}px;
  background: ${colors.darkestBlue};
  z-index: 1;
`;

const CopyrightContainer = styled.div`
  font-family: Bitter;
  color: ${colors.white};
  margin-top: 8px;
`;

export default function Footer() {
  return (
    <Container>
      <Link to={locations.INDEX}>
        <WebsiteName>Alexa Kruckenberg</WebsiteName>
      </Link>
      <CopyrightContainer>Copyright Alexa Kruckenberg, 2023</CopyrightContainer>
    </Container>
  );
}
