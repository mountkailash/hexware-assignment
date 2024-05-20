import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png'; 
import trackIcon from '../assets/images/track-icon.png'; 

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  
`;

const TrackOrderContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 44px;
`;

const TrackText = styled.span`
  margin-right: 10px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: rgba(41, 35, 85, 1);
`;

const TrackIcon = styled.img`
  width: 46.02px; 
  height: 38.33px;
`;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  height: 50px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  flex: 1;
  justify-content: flex-end;
  
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${props => props.selected ? 'rgba(82, 116, 66, 1)' : 'rgba(129, 129, 129, 1)'};
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 17.49px;
  margin-right: 20px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <TrackOrderContainer>
        <TrackText>Track your order</TrackText>
        <TrackIcon src={trackIcon} alt="Track Icon" />
      </TrackOrderContainer>
      <LogoContainer>
        <Logo src={logo} alt="UAPL Logo" />
      </LogoContainer>
      <Nav selected >
        <NavLink selected href="#">Home</NavLink>
        <NavLink href="#">Service</NavLink>
        <NavLink href="#">About Us</NavLink>
        <NavLink href="#">Login</NavLink>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
