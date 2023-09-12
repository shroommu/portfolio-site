import { Link } from "react-router-dom";

import styled from "styled-components";
import { colors } from "../constants";
import { Icon } from "../../assets";

import LinkedInIcon from "../../assets/icons/icons8-linkedin-64.png";
import GithubIcon from "../../assets/icons/icons8-github-64.png";
import InstagramIcon from "../../assets/icons/icons8-instagram-64.png";
import Button, { themes } from "../basic/Button";
import ExternalLink from "../basic/Link";
import Nav from "../basic/Nav";
import { device, locations } from "../../constants";
import { WebsiteName } from ".";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 5;
`;

const NavigationBar = styled.nav`
  display: flex;
  height: 100px;
  background: ${colors.darkestBlue};
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;

  @media ${device.tablet} {
    justify-content: center;
    height: 50px;
    padding: 12px;
  }
`;

const SocialsContainer = styled.div`
  display: flex;
  padding: 12px;

  @media ${device.tablet} {
    display: none;
  }
`;

const Leaves = styled.div`
  margin-top: -50px;
  background-repeat: repeat-x;
  background: radial-gradient(
    ellipse at center,
    ${colors.darkestBlue} 0px,
    ${colors.darkestBlue} 50px,
    transparent 51px
  );
  background-size: 100px 100px;
  background-position: 5px center;
  width: 100%;
  height: 100px;
  z-index: 0;

  @media ${device.mobile} {
    margin-top: -25px;
    background: radial-gradient(
      ellipse at center,
      ${colors.darkestBlue} 0px,
      ${colors.darkestBlue} 25px,
      transparent 26px
    );
    background-size: 50px 50px;
    height: 50px;
  }
`;

export default function Header({ location }) {
  return (
    <Container>
      <NavigationBar>
        {/* burger menu */}
        <Link to={locations.INDEX}>
          <WebsiteName>Alexa Kruckenberg</WebsiteName>
        </Link>
        <Nav location={location} />
        <SocialsContainer>
          <Link to={locations.CONTACT}>
            <Button
              margin="0 16px 0 0"
              fontSize="24px"
              fontFamily={"Delicious Handrawn"}
              theme={themes.tertiary}
            >
              Contact
            </Button>
          </Link>
          <ExternalLink href="http://instagram.com/shroommu">
            <Icon src={InstagramIcon} height="48px" margin="0 8px 0 0" />
          </ExternalLink>
          <ExternalLink href="http://github.com/shroommu">
            <Icon src={GithubIcon} height="48px" margin="0 8px 0 0" />
          </ExternalLink>
          <ExternalLink href="http://linkedin.com/in/alexa-kruckenberg">
            <Icon src={LinkedInIcon} height="48px" margin="0" />
          </ExternalLink>
        </SocialsContainer>
      </NavigationBar>
      <Leaves />
    </Container>
  );
}
