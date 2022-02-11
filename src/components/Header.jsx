import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <Logo to="/">GG</Logo>
        <HeaderNav>
          <HeaderNavItem to="/">Home</HeaderNavItem>
          <HeaderNavItem to="upcoming_games">Upcoming Games</HeaderNavItem>
          <HeaderNavItem to="/">Popular Games</HeaderNavItem>
          <HeaderNavItem to="/">About Us</HeaderNavItem>
        </HeaderNav>
      </HeaderContainer>
    </div>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  max-width: 100vw;
  height: 60px;
  background: #7480af;
`;

const Logo = styled(Link)`
  font-size: 42px;
  color: black;
  text-decoration: none;
  font-weight: bold;
`;

const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 50vw;
`;

const HeaderNavItem = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: bold;
`;
