import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import { device } from "../../constants";
import { colors } from "../constants";

import { Tree1, Tree2, Tree3 } from "../../assets";
import { ReactComponent as fox } from "../../assets/svg/fox.svg";

const BackgroundContainer = styled.div`
  display: flex;
  flex: 1;
  height: calc(100% + 50px);
  width: 100%;
  justify-content: space-between;
  margin-top: -50px;
  position: absolute;
  overflow-x: clip;

  @media ${device.tablet} {
    display: none;
  }
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
  bottom: 20%;
  width: 100%;
  height: 100%;
`;

const FoxArt = styled(fox)`
  transform: translate(
    calc(calc(${(p) => p.offsetX}px - 350px) / 5),
    calc(${(p) => p.offsetY}px - 200px)
  );
  z-index: 2;
  position: relative;
  bottom: 0;
  max-height: 150px;
`;

export default function Background() {
  const [foxOffset, setFoxOffset] = useState([350 / 5, 0]);

  const foxTreeRef = useRef(null);

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
  }, []);

  const updateSize = () => {
    const { right, bottom } = foxTreeRef.current.getBoundingClientRect();
    setFoxOffset([right, bottom]);
  };

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
          rightPos="60%"
          bottomPos="15%"
          maxHeight="125%"
          maxWidth="65%"
          testId="closest-tree-left"
        />
        <FoxTreeContainer testId="fox-tree-container">
          <Tree3
            fillColor={colors.middleTree}
            zIndex={2}
            maxHeight="100%"
            maxWidth="65%"
            preserveAspectRatio="none"
            testId="middle-tree-left"
            ref={foxTreeRef}
          />
          <FoxArt
            testId="fox-art"
            offsetX={foxOffset[0]}
            offsetY={foxOffset[1]}
          />
        </FoxTreeContainer>
        <Tree1
          fillColor={colors.furthestTree}
          zIndex={1}
          maxHeight="90%"
          maxWidth="65%"
          bottomPos="30%"
          rightPos="0%"
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
          rightPos="-40%"
          maxHeight="125%"
          maxWidth="80%"
          preserveAspectRatio="none"
          testId="tree-closest-right"
        />
        <Tree1
          fillColor={colors.middleTree}
          zIndex={2}
          flipX={true}
          maxHeight="100%"
          maxWidth="80%"
          bottomPos="20%"
          rightPos="-10%"
          preserveAspectRatio="none"
          testId="tree-middle-right"
        />
        <Tree2
          fillColor={colors.furthestTree}
          zIndex={1}
          flipX={true}
          maxHeight="90%"
          maxWidth="80%"
          bottomPos="30%"
          rightPos="10%"
          preserveAspectRatio="none"
          testId="tree-furthest-right"
        />
      </TreesRightContainer>
    </BackgroundContainer>
  );
}
