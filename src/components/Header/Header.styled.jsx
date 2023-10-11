import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.header`
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  min-height: 64px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background: -webkit-linear-gradient(
    0deg,
    rgb(66, 159, 174),
    rgb(9, 27, 129) 100%
  );
  background: -moz-linear-gradient(
    0deg,
    rgb(66, 159, 174),
    rgb(9, 27, 129) 100%
  );
  background: linear-gradient(0deg, rgb(66, 159, 174), rgb(9, 27, 129) 100%);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Container = styled.div`
  display: flex;

  margin: 0 auto;
  gap: 60px;
  padding-left: 10px;
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 20px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1187px;
  }
`;

export const NavList = styled.ul`
  display: flex;
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 5px;
  font-size: 24px;
  font-weight: 400;
  color: white;

  :hover,
  :focus {
    transform: scale(1.1);
    color: #2196f3;
  }

  &.active {
    font-weight: bold;
    color: #2196f3;
  }
  @media screen and (min-width: 768px) {
    font-size: 28px;
    font-weight: 500;
  }
  @media screen and (min-width: 1440px) {
    font-size: 32px;
    font-weight: 500;
  }
`;
export const Image = styled.img`
  border-radius: 50%;
  margin-right: 10px;
  width: 54px;
  @media screen and (min-width: 768px) {
    margin-right: 30px;
    width: 84px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 40px;
    width: 96px;
  }
`;
export const Wraper = styled.div`
  display: flex;
  gap: 40px;
  margin-left: auto;
  @media screen and (min-width: 768px) {
    margin-left: 190px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 580px;
  }
`;
