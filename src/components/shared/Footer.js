import styled from "styled-components";
import { colors, footerHeight } from "../constants";
import { locations, device } from "../../constants";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  height: ${footerHeight}px;
  background: ${colors.darkestBlue};
  margin: 24px -50px 0 0;
  z-index: 1;
  padding: 25px 75px 25px 25px;
`;

const CopyrightContainer = styled.div`
  color: ${colors.white};
  margin-top: 8px;
`;

export const WebsiteName = styled.div`
  font-family: Delicious Handrawn;
  color: ${colors.white};
  font-size: 36px;

  @media ${device.mobile} {
    font-size: 24px;
  }
`;

export default function Footer() {
  return (
    <Container test-id="footer-container">
      <Link to={locations.INDEX}>
        <WebsiteName>Alexa Kruckenberg</WebsiteName>
      </Link>
      <CopyrightContainer>Copyright 2023</CopyrightContainer>
    </Container>
  );
}
