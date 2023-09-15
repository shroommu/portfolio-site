import Section from "../basic/Section";
import Card from "../basic/Card";
import styled from "styled-components";
import { Heading } from "../shared";
import { Link } from "react-router-dom";

import blogMetadata from "../../data/blogMetadata.json";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Blog() {
  return (
    <Section testId="blog-section">
      <Card zIndex={5}>
        <ContentContainer>
          <Heading>Blog Posts</Heading>
          {blogMetadata.map((postmetadata) => {
            return (
              <Link
                to={`/blog/post${postmetadata.slug}`}
                key={postmetadata.slug}
              >
                {postmetadata.title}
              </Link>
            );
          })}
        </ContentContainer>
      </Card>
    </Section>
  );
}
