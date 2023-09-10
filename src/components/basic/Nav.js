import styled from "styled-components";
import { Link } from "react-router-dom";

import Button, { themes } from "./Button";
import { device } from "../../constants";

const NavButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  @media ${device.tablet} {
    display: none;
  }
`;

const locations = { INDEX: "/", ART: "/art/", BLOG: "/blog/", CODE: "/code/" };

export default function Nav({ location }) {
  return (
    <NavButtonContainer>
      <Link to={locations.INDEX}>
        <Button
          content="Home"
          margin="0 8px 0 0"
          fontSize="24px"
          fontFamily={"Delicious Handrawn"}
          theme={
            location.pathname === locations.INDEX
              ? themes.secondary
              : themes.default
          }
        />
      </Link>
      <Link to={locations.ART}>
        <Button
          content="Art"
          margin="0 8px 0 0"
          fontSize="24px"
          fontFamily={"Delicious Handrawn"}
          theme={
            location.pathname === locations.ART
              ? themes.secondary
              : themes.default
          }
        />
      </Link>
      <Link to={locations.CODE}>
        <Button
          content="Code"
          margin="0 8px 0 0"
          fontSize="24px"
          fontFamily={"Delicious Handrawn"}
          theme={
            location.pathname === locations.CODE
              ? themes.secondary
              : themes.default
          }
        />
      </Link>
      <Link to={locations.BLOG}>
        <Button
          content="Blog"
          margin="0 8px 0 0"
          fontSize="24px"
          fontFamily={"Delicious Handrawn"}
          theme={
            location.pathname === locations.BLOG
              ? themes.secondary
              : themes.default
          }
        />
      </Link>
    </NavButtonContainer>
  );
}
