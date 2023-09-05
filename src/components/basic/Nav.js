import styled from "styled-components";
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
      <Button
        content="Home"
        margin="0 8px 0 0"
        fontSize="24px"
        fontFamily={"Delicious Handrawn"}
      />
      <Button
        content="Art"
        margin="0 8px 0 0"
        fontSize="24px"
        fontFamily={"Delicious Handrawn"}
      />
      <Button
        content="Code"
        margin="0 8px 0 0"
        fontSize="24px"
        fontFamily={"Delicious Handrawn"}
      />
    </NavButtonContainer>
  );
}
