import styled from "styled-components";
import { Link } from "react-router-dom";
import { locationsWithLabels } from "../../../constants";
import { colors } from "../../constants";

const Container = styled.div`
  z-index: 199;
  display: flex;
  flex-direction: column;
  background: ${colors.white};
  position: absolute;
  margin-top: 75px;
  width: 100%;
  padding-top: 25px;
`;

const NavItemList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  font-family: Bitter;
  padding: 6px 0;
  text-align: center;
  list-style-type: none;
  border-bottom: 2px solid ${colors.darkestBlue};
`;

const navItems = [
  locationsWithLabels.INDEX,
  locationsWithLabels.BLOG,
  locationsWithLabels.CONTACT,
];

export default function Menu({ onNavigate }) {
  return (
    <Container>
      <NavItemList>
        {navItems.map((navItem) => {
          return (
            <Link to={navItem.path} onClick={onNavigate} key={navItem.label}>
              <NavItem>{navItem.label}</NavItem>
            </Link>
          );
        })}
      </NavItemList>
    </Container>
  );
}
