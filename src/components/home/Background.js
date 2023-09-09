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
  width: 45%;
  height: calc(100% + 100px);
  position: relative;

  @media ${device.tablet} {
    display: none;
  }
`;

const TreesRightContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 30%;
  height: calc(100% + 100px);
  position: relative;

  @media ${device.tablet} {
    display: none;
  }
`;

const MobileTreeContainer = styled.div`
  display: none;

  @media ${device.tablet} {
    display: flex;
    width: 100%;
    height: calc(100% + 100px);
    position: relative;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const FoxArt = styled(fox)`
  transform: translate(
    calc(calc(${(p) => p.offsetX}px - 250px) / 5),
    calc(${(p) => p.offsetY}px - 250px)
  );
  z-index: 2;
  position: absolute;
  max-height: 150px;
`;

const MobileFoxArt = styled(fox)`
  transform: translate(
    calc(calc(${(p) => p.offsetX}px - 400px) / 5),
    calc(${(p) => p.offsetY}px - ${(p) => p.offsetY / 4.5}px)
  );
  z-index: 4;
  position: absolute;
  max-height: 150px;
`;

export default function Background() {
  const [foxOffset, setFoxOffset] = useState([0, 0]);
  const [mobileFoxOffset, setMobileFoxOffset] = useState([0, 0]);

  const foxTreeRef = useRef(null);
  const mobileFoxTreeRef = useRef(null);

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    window.addEventListener("resize", updateSizeMobile);
    updateSize();
    updateSizeMobile();
  }, []);

  const updateSize = () => {
    const { right, bottom } = foxTreeRef.current.getBoundingClientRect();
    setFoxOffset([right, bottom]);
  };

  const updateSizeMobile = () => {
    const { right, bottom } = mobileFoxTreeRef.current.getBoundingClientRect();
    setMobileFoxOffset([right, bottom]);
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
          height="90%"
          maxWidth="65%"
          testId="closest-tree-left"
        />
        <Tree3
          fillColor={colors.middleTree}
          zIndex={2}
          height="85%"
          maxWidth="65%"
          bottomPos="20%"
          preserveAspectRatio="none"
          testId="middle-tree-left"
          ref={foxTreeRef}
        />
        <FoxArt
          test-id="fox-art"
          offsetX={foxOffset[0]}
          offsetY={foxOffset[1]}
        />
        <Tree1
          fillColor={colors.furthestTree}
          zIndex={1}
          height="80%"
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
          height="90%"
          maxWidth="80%"
          preserveAspectRatio="none"
          testId="tree-closest-right"
        />
        <Tree1
          fillColor={colors.middleTree}
          zIndex={2}
          flipX={true}
          height="85%"
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
          height="80%"
          maxWidth="80%"
          bottomPos="30%"
          rightPos="10%"
          preserveAspectRatio="none"
          testId="tree-furthest-right"
        />
      </TreesRightContainer>
      <MobileTreeContainer test-id="mobile-tree-container">
        <MobileFoxArt
          test-id="mobile-fox-art"
          offsetX={mobileFoxOffset[0]}
          offsetY={mobileFoxOffset[1]}
        />
        <Tree2
          fillColor={colors.closestTree}
          zIndex={3}
          preserveAspectRatio="none"
          rightPos="65%"
          bottomPos="5%"
          height="100%"
          maxWidth="45%"
          testId="closest-tree-mobile"
          ref={mobileFoxTreeRef}
        />
        <Tree3
          fillColor={colors.middleTree}
          zIndex={2}
          height="90%"
          maxWidth="45%"
          rightPos="30%"
          bottomPos="10%"
          preserveAspectRatio="none"
          testId="middle-tree-mobile"
        />
        <Tree1
          fillColor={colors.furthestTree}
          zIndex={1}
          height="85%"
          maxWidth="45%"
          bottomPos="15%"
          rightPos="-10%"
          preserveAspectRatio="none"
          testId="furthes-tree-mobile"
        />
      </MobileTreeContainer>
    </BackgroundContainer>
  );
}
