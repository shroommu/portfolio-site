import styled from "styled-components";
import { colors, footerHeight } from "../constants";
import { device } from "../../constants";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: ${colors.darkBlue};
  position: absolute;
  overflow: hidden;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${colors.darkBlue};
  height: calc(100% + ${footerHeight}px);
  overflow: scroll;
  margin: -50px -50px 0 0;
  padding: 50px 50px 0 0;
`;

export const Heading = styled.h1`
  font-family: Delicious Handrawn;
  color: ${colors.darkestBlue};
  margin: 0 0 6px 0;
  font-size: 42px;
`;

export const WebsiteName = styled.div`
  font-family: Delicious Handrawn;
  color: ${colors.white};
  font-size: 48px;

  @media ${device.mobile} {
    font-size: 36px;
  }
`;
