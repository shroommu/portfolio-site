import styled from "styled-components";
import { MDXProvider } from "@mdx-js/react";

import FirstPost from "../../data/posts/9-14-2023-building-site-part-1.mdx";

import { Header1, Header2, Paragraph } from "./styles";

const Container = styled.article``;

const components = {
  h1: Header1,
  h2: Header2,
  p: Paragraph,
};

export default function BlogPost({ children }) {
  return <Container>{children}</Container>;
}
