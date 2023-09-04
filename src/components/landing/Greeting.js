import styled from "styled-components";

import { device } from "../../constants";
import { colors } from "../constants";

import pfp from "../../assets/images/pfp.jpg";

const Container = styled.div`
  display: flex;
`;

const TextContainer = styled.div`
  margin-right: 24px;
`;

const Heading = styled.h1`
  font-family: Delicious Handrawn;
  color: ${colors.darkestBlue};
  margin: 0 0 6px 0;
  font-size: 36px;
`;

const SubHeading = styled.h2`
  font-family: Delicious Handrawn;
  color: ${colors.darkBlue};
  margin: 0;
  font-size: 24px;
`;

const Paragraph = styled.p`
  font-family: Bitter;
  color: ${colors.darkestBlue};
`;

const ProfilePicture = styled.img`
  clip-path: circle(at center);
  height: 300px;

  @media ${device.mobileL} {
    display: none;
  }
`;

export default function Greeting() {
  return (
    <Container test-id="greeting-container">
      <TextContainer test-id="greeting-text-container">
        <Heading>Hi, I'm Alexa!</Heading>
        <SubHeading>Software Developer, Artist, Pokemon Enthusiast</SubHeading>
        <Paragraph>
          I'm a curious person who loves to create and learn. You'll find me
          anywhere that code and art interact, plus a few other places besides.
          Keep scrolling to see what I'm working on!
        </Paragraph>
        <Paragraph>
          I'm local to the Seattle area, where I live with one person and two
          cats. When I'm not coding, writing, or otherwise creating, I like to
          play video games (especially Pokemon Go) and try new restaurants.
        </Paragraph>
        <Paragraph>Thanks for visiting my site!</Paragraph>
      </TextContainer>
      <ProfilePicture src={pfp} test-id="profile-picture" />
    </Container>
  );
}
