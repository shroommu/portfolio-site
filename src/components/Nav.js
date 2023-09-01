import styled from "styled-components";
import { colors } from "./constants";
import { SocialIcon } from "../assets";

import LinkedInIcon from "../assets/icons/icons8-linkedin-64.png";
import GithubIcon from "../assets/icons/icons8-github-64.png";
import InstagramIcon from "../assets/icons/icons8-instagram-64.png";
import Button from "./basic/Button";
import { Link } from "./basic/Link";

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
`;

const WebsiteName = styled.div`
  font-family: Delicious Handrawn;
  color: ${colors.white};
  font-size: 48px;
`;

const NavButtonContainer = styled.div`
  display: flex;
`;

const SocialsContainer = styled.div`
  display: flex;
  padding: 12px;
`;

const Leaves = styled.div`
  margin-top: -50px;
  background-repeat: repeat-x;
  background: radial-gradient(
    ellipse at center,
    #0a2033 0px,
    #0a2033 50px,
    transparent 51px
  );
  background-size: 100px 100px;
  background-repeat: repeat-x;
  background-position: 5px center;
  width: 100vw;
  height: 100px;
  z-index: 0;
`;

export default function Nav() {
  return (
    <Container>
      <NavigationBar>
        <WebsiteName>Alexa Kruckenberg</WebsiteName>
        <NavButtonContainer>
          <Button
            content="Home"
            margin="0 8px 0 0"
            fontSize="24px"
            fontFamily={"Delicious Handrawn"}
          />
          <Button
            content="Art"
            margin="0 8px 0 0"
            fontSize="24px"
            fontFamily={"Delicious Handrawn"}
          />
          <Button
            content="Code"
            margin="0 8px 0 0"
            fontSize="24px"
            fontFamily={"Delicious Handrawn"}
          />
        </NavButtonContainer>
        <SocialsContainer>
          <Button
            content="Contact"
            margin="0 16px 0 0"
            fontSize="24px"
            fontFamily={"Delicious Handrawn"}
            fontColor={colors.white}
            background={colors.orange}
            hover={colors.darkerOrange}
            active={colors.darkestOrange}
          />
          <Link href="http://instagram.com/shroommu">
            <SocialIcon src={InstagramIcon} height="48px" margin="0 8px 0 0" />
          </Link>
          <Link href="http://github.com/shroommu">
            <SocialIcon src={GithubIcon} height="48px" margin="0 8px 0 0" />
          </Link>
          <Link href="http://linkedin.com/in/alexa-kruckenberg">
            <SocialIcon src={LinkedInIcon} height="48px" margin="0" />
          </Link>
        </SocialsContainer>
      </NavigationBar>
      <Leaves />
    </Container>
  );
}
