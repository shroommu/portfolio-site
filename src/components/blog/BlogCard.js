import styled from "styled-components";
import { Link } from "react-router-dom";

import UnstyledCard from "../basic/Card";
import { colors } from "../constants";

const Card = styled(UnstyledCard)`
  border: 2px solid ${colors.lightestBlue};
  box-shadow: 10px 10px 5px -2px ${colors.lightBlue};
  margin: 12px;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: Delicious Handrawn;
  color: ${colors.darkestBlue};
  font-size: 32px;
  text-align: center;
  max-width: 200px;
  margin-top: 0;
`;

const Excerpt = styled.div`
  font-family: Bitter;
  text-align: justify;
  max-width: 200px;
`;

export default function BlogCard({ postMetaData }) {
  const { slug, excerpt, title } = postMetaData;

  return (
    <Link to={`/blog/post${slug}`}>
      <Card>
        <Container>
          <Title>{title}</Title>
          <Excerpt>{excerpt}</Excerpt>
        </Container>
      </Card>
    </Link>
  );
}
