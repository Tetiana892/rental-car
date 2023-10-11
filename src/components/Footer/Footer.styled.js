import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background: -webkit-linear-gradient(
    180deg,
    rgb(128, 208, 221) 4%,
    rgb(9, 27, 129) 100%
  );
  background: -moz-linear-gradient(
    180deg,
    rgb(128, 208, 221) 4%,
    rgb(9, 27, 129) 100%
  );
  background: linear-gradient(
    180deg,
    rgb(128, 208, 221) 4%,
    rgb(9, 27, 129) 100%
  );
  color: #fff;
  padding: 10px;
  text-align: center;
  font-family: ManropeThin;
`;

export const SubscribeRow = styled.div`
  display: flex;
  margin: auto;
  gap: 5px;
  width: auto;
  height: auto;
  @media screen and (min-width: 768px) {
    align-items: center;
    min-width: 768px;
  }
  @media screen and (min-width: 1440px) {
    margin: 20px auto;
    gap: 30px;

    width: 1187px;
    height: auto;
  }
`;

export const FooterNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const ContactLink = styled.a`
  color: rgb(255 255 255 / 60%);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;
  margin-left: 5px;

  &:hover {
    color: black;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const EmailContact = styled.a`
  font-size: 14px;
  margin-left: 5px;
  color: rgb(255 255 255 / 60%);

  &:hover {
    color: black;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const GoogleMapsLink = styled.a`
  color: rgb(255 255 255 / 60%);
  text-decoration: none;
  font-size: 14px;
  margin-left: 5px;
  transition: color 0.3s;

  &:hover {
    color: black;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const SubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  @media screen and (min-width: 768px) {
    margin-top: 20px;
    width: 450px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 20px;
    width: 650px;
  }
`;

export const SubscribeForm = styled.form`
  display: flex;
  align-items: baseline;
  margin-top: 20px;
`;

export const SubscribeInput = styled.input`
  font-size: 12px;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 100px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    min-width: 200px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    padding: 10px;
    margin-bottom: 10px;
    width: 250px;
  }
`;

export const SubscribeButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 3px;
  width: 40px;
  height: 35px;
  margin-left: auto;
  background-color: rgba(52, 112, 255, 1);
  color: #fff;
  font-size: 8px;
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: ManropeThin;

  &:hover {
    background-color: #0056b3;
  }
  @media screen and (min-width: 768px) {
    width: 120px;
    padding: 10px 20px;
    margin-left: 5px;
    font-size: 10px;
  }
  @media screen and (min-width: 1440px) {
    width: 140px;
    font-size: 16px;
    margin-left: 10px;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
`;

export const SuccessMesage = styled.div`
  color: green;
  font-size: 12px;
`;

export const LogoTipe = styled.img`
  border-radius: 50%;
  width: 24px;
  @media screen and (min-width: 768px) {
    width: 64px;
  }
  @media screen and (min-width: 1440px) {
    width: 96px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  margin: 0 auto;
  :hover,
  :focus {
    transform: scale(1.2);
  }
`;
export const HeartIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: transparent;
  opacity: 90%;
  :hover,
  :focus {
    transform: scale(1.2);
  }
`;
export const Social = styled(Link)`
  svg {
    fill: #3470ff;
    width: 20px;
    height: 20px;
    transition: scale 300ms;
    :hover,
    :focus {
      transform: scale(1.5);
      fill: #3470ff;
    }
  }
`;
export const SocialContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 auto;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    gap: 10px;
    margin-left: auto;
    margin-bottom: 20px;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    gap: 10px;
    margin-left: 540px;
    margin-bottom: 30px;
  }
`;
