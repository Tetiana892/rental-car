import React from 'react';
import {
  NavContainer,
  Container,
  NavLinkStyled,
  NavList,
  Image,
  Wraper,
} from './Header.styled';
import Logo from '../../images/logo.png';

const Header = () => {
  return (
    <NavContainer>
      <Container>
        <NavList>
          <NavLinkStyled to="/">
            <Image src={Logo} alt="logo" />
            Home
          </NavLinkStyled>
        </NavList>
        <Wraper>
          <NavList>
            <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
          </NavList>
          <NavList>
            <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
          </NavList>
        </Wraper>
      </Container>
    </NavContainer>
  );
};

export default Header;
