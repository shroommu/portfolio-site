import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "./Button";
import { device } from "../../constants";

const NavButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  @media ${device.tablet} {
    display: none;
  }
`;

export default function Nav() {
  return (
    <NavButtonContainer>
      <Link to="/">
        <Button
          content="Home"
          margin="0 8px 0 0"
          fontSize="24px"
          fontFamily={"Delicious Handrawn"}
        />
      </Link>
      <Link to={`art/`}>
        <Button
          content="Art"
          margin="0 8px 0 0"
          fontSize="24px"
          fontFamily={"Delicious Handrawn"}
          //onClick={artRoute}
        />
      </Link>
      <Link to={`code/`}>
        <Button
          content="Code"
          margin="0 8px 0 0"
          fontSize="24px"
          fontFamily={"Delicious Handrawn"}
        />
      </Link>
      <Link to={`blog/`}>
        <Button
          content="Blog"
          margin="0 8px 0 0"
          fontSize="24px"
          fontFamily={"Delicious Handrawn"}
        />
      </Link>
    </NavButtonContainer>
  );
}
