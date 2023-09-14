import Section from "../basic/Section";
import Card from "../basic/Card";
import styled from "styled-components";
import { Heading } from "../shared";
import BlogPost from "./BlogPost";

import FirstPost from "./posts/firstPost.mdx";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Blog() {
  return (
    <Section testId="blog-section">
      <Card zIndex={5}>
        <ContentContainer>
          <Heading>Blog</Heading>
          <BlogPost>
            <FirstPost />
          </BlogPost>
        </ContentContainer>
      </Card>
    </Section>
  );
}
