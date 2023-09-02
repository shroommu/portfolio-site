import styled from "styled-components";

import { colors } from "./constants";

import { Tree1, Tree2, Tree3 } from "../assets";
import { ReactComponent as fox } from "../assets/svg/fox.svg";

const BackgroundContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  margin-top: -50px;
  position: absolute;
  overflow-x: clip;
`;

const GroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: clip;
  position: absolute;
`;

const GroundEllipse = styled.div`
  width: 300%;
  height: 100%;
  flex: 1;
  background: radial-gradient(
    ellipse at center,
    ${colors.darkBlue} 0%,
    ${colors.darkBlue} 55%,
    transparent 55.1%
  );
  position: absolute;
  left: -100%;
  bottom: -50%;
`;

const SkyFill = styled.div`
  width: 100%;
  flex: 1;
  background: ${colors.mediumBlue};
  position
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
  right: 15%;
  bottom: 20%;
  width: 100%;
  height: 100%;
`;

const FoxArt = styled(fox)`
  z-index: 2;
  position: absolute;
  left: 20%;
  bottom: 0;
  max-height: 150px;
`;

export function Background() {
  return (
    <BackgroundContainer testId="background-container">
      <GroundContainer testId="ground-container">
        <GroundEllipse testId="ground-elipse" />
        <SkyFill testId="ground-rectangle-fill" />
      </GroundContainer>
      <TreesLeftContainer testId="trees-left-container">
        <Tree2
          fillColor={colors.closestTree}
          zIndex={3}
          preserveAspectRatio="none"
          rightPos="40%"
          bottomPos="15%"
          testId="closest-tree-left"
        />
        <FoxTreeContainer testId="fox-tree-container">
          <Tree3
            fillColor={colors.middleTree}
            zIndex={2}
            maxHeight="525px"
            preserveAspectRatio="none"
            testId="middle-tree-left"
          />
          <FoxArt testId="fox-art" />
        </FoxTreeContainer>
        <Tree1
          fillColor={colors.furthestTree}
          zIndex={1}
          maxHeight="500px"
          bottomPos="30%"
          rightPos="-10%"
          preserveAspectRatio="none"
          testId="furthest-tree-left"
        />
      </TreesLeftContainer>
      <TreesRightContainer testId="trees-right-container">
        <Tree3
          fillColor={colors.closestTree}
          zIndex={3}
          flipX={true}
          bottomPos="15%"
          rightPos="-75%"
          preserveAspectRatio="none"
          testId="tree-closest-right"
        />
        <Tree1
          fillColor={colors.middleTree}
          zIndex={2}
          flipX={true}
          maxHeight="575px"
          bottomPos="20%"
          rightPos="-30%"
          preserveAspectRatio="none"
          testId="tree-middle-right"
        />
        <Tree2
          fillColor={colors.furthestTree}
          zIndex={1}
          flipX={true}
          maxHeight="550px"
          bottomPos="30%"
          rightPos="0%"
          preserveAspectRatio="none"
          testId="tree-furthest-right"
        />
      </TreesRightContainer>
    </BackgroundContainer>
  );
}
