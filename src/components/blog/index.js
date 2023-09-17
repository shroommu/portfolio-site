import Section from "../basic/Section";
import Card from "../basic/Card";
import styled from "styled-components";
import { Heading } from "../shared";

import blogMetadata from "../../data/blogMetadata.json";
import BlogCard from "./BlogCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;

export default function Blog() {
  return (
    <Section testId="blog-home-section">
      <Card testId="blog-home-card">
        <Container test-id="blog-card-content-container">
          <Heading>Blog Posts</Heading>
          <ContentContainer test-id="blog-posts-container">
            {blogMetadata.map((postMetaData) => {
              return (
                <BlogCard
                  postMetaData={postMetaData}
                  key={postMetaData.slug}
                  testId={`blog-card-${postMetaData.slug}`}
                />
              );
            })}
          </ContentContainer>
        </Container>
      </Card>
    </Section>
  );
}
