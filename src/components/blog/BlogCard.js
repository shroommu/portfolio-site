import styled from "styled-components";
import { Link } from "react-router-dom";

import UnstyledCard from "../basic/Card";
import { colors } from "../constants";
import { device } from "../../constants";

const Card = styled(UnstyledCard)`
  border: 2px solid ${colors.lightestBlue};
  box-shadow: 10px 10px 5px -2px ${colors.lightBlue};
  margin: 0 0 12px 0;
  padding: 24px;
  max-width: 25%;

  &:hover {
    transform: translate(0, -10px) rotate(2deg);
  }
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const ImageContainer = styled.div`
  max-height: 50%;
  display: flex;
  max-width: 100%;
  margin-bottom: 12px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: auto;
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  all: unset;
  font-weight: bold;
  font-family: Delicious Handrawn;
  color: ${colors.darkestBlue};
  font-size: 32px;
  text-align: center;
  margin-bottom: 12px;
`;

const Excerpt = styled.p`
  text-align: justify;
  margin-bottom: 12px;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media ${device.tablet} {
    //flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Tag = styled.div`
  margin: 0 0 12px 12px;
  padding: 8px 16px;
  border-radius: 20px;
  background-color: ${colors.orange};
  color: ${colors.white};
  width: fit-content;

  @media ${device.tablet} {
    font-size: 12px;
  }
`;

const ReadMoreLink = styled.div`
  margin: 0 0 0 auto;
  text-decoration: underline;
`;

export default function BlogCard({ postMetaData }) {
  const { slug, excerpt, title, image, tags } = postMetaData;

  return (
    <Card>
      <Link to={`/blog/post${slug}`}>
        <Container>
          <ImageContainer>
            <Image src={image} />
          </ImageContainer>
          <TextContainer>
            <Title>{title}</Title>
            <Excerpt>{excerpt}</Excerpt>
            <TagContainer>
              {tags.map((tag) => {
                return <Tag>{tag}</Tag>;
              })}
            </TagContainer>
            <ReadMoreLink>Read More →</ReadMoreLink>
          </TextContainer>
        </Container>
      </Link>
    </Card>
  );
}
