import styled from "styled-components";

import Section from "../../basic/Section";
import Card from "../../basic/Card";

import codeImg1 from "../../../assets/images/featuredCards/codeImg1.jpg";
import codeImg2 from "../../../assets/images/featuredCards/codeImg2.jpg";
import codeImg3 from "../../../assets/images/featuredCards/codeImg3.webp";
import { Heading } from "../../shared";
import { colors } from "../../constants";

const FeaturedCard = styled(Card)`
  flex-direction: column;
  align-items: center;
`;

const ContentCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ContentCard = styled(Card)`
  flex-direction: column;
  border: 2px solid ${colors.lightestBlue};
  box-shadow: 10px 10px 5px -2px ${colors.lightBlue};
  margin: 12px;
`;

const ContentImg = styled.img`
  height: 150px;
  margin-bottom: 12px;
`;

const ContentTitle = styled.div`
  text-align: center;
`;

const content = [
  { text: "A cool coding project", img: codeImg1, id: 1 },
  { text: "Another cool coding project", img: codeImg2, id: 2 },
  { text: "A cool third coding project", img: codeImg3, id: 3 },
];

export default function Featured() {
  return (
    <Section testId="featured-section" margin="0 0 24px 0">
      <FeaturedCard testId="featured-card">
        <Heading>Featured Projects</Heading>
        <ContentCardsContainer>
          {content.map((contentObj) => {
            return (
              <ContentCard
                key={contentObj.id}
                test-id={`content-card-${contentObj.id}`}
              >
                <ContentImg src={contentObj.img} />
                <ContentTitle>{contentObj.text}</ContentTitle>
              </ContentCard>
            );
          })}
        </ContentCardsContainer>
      </FeaturedCard>
    </Section>
  );
}
