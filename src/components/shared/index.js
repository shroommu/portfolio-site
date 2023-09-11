import styled from "styled-components";
import { colors, footerHeight } from "../constants";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh + ${footerHeight}px);
  height: calc(100% + ${footerHeight}px);
  width: 100%;
  background: ${colors.darkBlue};
  position: relative;
`;

const Heading = styled.h1`
  font-family: Delicious Handrawn;
  color: ${colors.darkestBlue};
  margin: 0 0 6px 0;
  font-size: 36px;
  text-align: center;
`;

export function ComingSoon() {
  return (
    <div>
      <Heading>Coming Soon!</Heading>
    </div>
  );
}
