import styled from "styled-components";

const Navbar = styled.nav`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  max-width: 1300px;
  padding: 0 50px;
`;

const NavbarLogo = styled.a`
  color: #000;
  font-weight: 500;
  font-size: 2rem;
  text-decoration: none;
  cursor: pointer;
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
`;

const MenuLine = styled.div`
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #000;
  transition: all 0.3s ease-out;
`;

const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLink = styled.a`
  color: #000;
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
  height: 100%;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    color: #f26a2e;
  }
`;
export {
  Navbar,
  NavbarContainer,
  NavbarLogo,
  MenuIcon,
  MenuLine,
  NavMenu,
  NavItem,
  NavLink,
};
