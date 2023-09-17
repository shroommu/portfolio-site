import styled from "styled-components";

import { colors } from "../constants";

export const Header1 = styled.h1`
  font-family: Delicious Handrawn;
  color: ${colors.darkestBlue};
  margin: 0 0 6px 0;
  font-size: 36px;
  text-align: center;
`;

export const Header2 = styled.h2`
  font-family: Delicious Handrawn;
  color: ${colors.darkestBlue};
  margin: 0 0 6px 0;
  font-size: 24px;
  text-align: center;
`;

export const Paragraph = styled.p`
  font-family: Bitter;
  text-align: justify;
`;

export const Image = styled.img`
  margin: 12px auto;
  max-width: 100%;
`;

export const Pre = styled.pre`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  white-space: pre-wrap;
  word-break: break-word;
  background-color: ${colors.codeBlock};
  color: ${colors.white};
  padding: 6px;
`;

export const Code = styled.code`
  background-color: ${colors.codeBlock};
  color: ${colors.white};
`;

export const Link = styled.a`
  color: ${colors.darkBlue};
  text-decoration: underline;
`;
