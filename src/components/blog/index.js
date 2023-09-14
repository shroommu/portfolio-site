import Section from "../basic/Section";
import Card from "../basic/Card";
import styled from "styled-components";
import { Heading } from "../shared";
import BlogPost from "./BlogPost";

import FirstPost from "../../data/posts/9-14-2023-building-site-part-1.mdx";

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
