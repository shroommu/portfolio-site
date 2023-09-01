import styled from "styled-components";

import { colors } from "./constants";

import { Tree1, Tree2, Tree3, FoxArt } from "../assets";

const BackgroundContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  margin-top: -50px;
  position: absolute;
  overflow-x: clip;
`;

const TreesLeftContainer = styled.div`
  display: flex;
  top: 100px;
  width: 45%;
  height: 100%;
  position: relative;
`;

const TreesRightContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  top: 100px;
  width: 30%;
  height: 100%;
  position: relative;
`;

const FoxTreeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  right: 40%;
  bottom: 25%;
  width: 100%;
  height: 100%;
`;

export function Background() {
  return (
    <BackgroundContainer>
      <TreesLeftContainer>
        <FoxTreeContainer>
          <Tree2
            fillColor={colors.closestTree}
            zIndex={3}
            preserveAspectRatio="none"
          />
          <FoxArt testId="foxArt" />
        </FoxTreeContainer>
        <Tree3
          fillColor={colors.middleTree}
          zIndex={2}
          maxHeight="525px"
          rightPos="15%"
          bottomPos="30%"
          preserveAspectRatio="none"
        />
        <Tree1
          fillColor={colors.furthestTree}
          zIndex={1}
          maxHeight="500px"
          bottomPos="35%"
          rightPos="-10%"
          preserveAspectRatio="none"
        />
      </TreesLeftContainer>
      <TreesRightContainer>
        <Tree3
          fillColor={colors.closestTree}
          zIndex={3}
          flipX={true}
          bottomPos="15%"
          rightPos="-75%"
          preserveAspectRatio="none"
        />
        <Tree1
          fillColor={colors.middleTree}
          zIndex={2}
          flipX={true}
          maxHeight="575px"
          bottomPos="20%"
          rightPos="-30%"
          preserveAspectRatio="none"
        />
        <Tree2
          fillColor={colors.furthestTree}
          zIndex={1}
          flipX={true}
          maxHeight="550px"
          bottomPos="30%"
          rightPos="0%"
          preserveAspectRatio="none"
        />
      </TreesRightContainer>
    </BackgroundContainer>
  );
}
