import React, { useState, useEffect } from 'react';
import { BiPhone, BiMailSend, BiMap, BiSolidBellRing } from 'react-icons/bi';

import {
  ContactContainer,
  FooterContainer,
  FooterNav,
  ContactLink,
  EmailContact,
  GoogleMapsLink,
  SubscribeButton,
  SubscribeForm,
  SubscribeInput,
  SubscribeContainer,
  SubscribeRow,
  ErrorMessage,
  SuccessMesage,
  LogoTipe,
  NavLinkStyled,
  HeartIcon,
  Social,
  SocialContainer,
} from './Footer.styled';
import Logo from '../../images/logo.png';
import SvgSprite from '../../images/sprite.svg';

const Footer = () => {
  const [isSubscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubscribe = e => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email.');
      return;
    }
    setError('');
    setSubscribed(true);
    resetForm();
  };

  const resetForm = () => {
    setEmail('');
  };

  useEffect(() => {
    if (isSubscribed) {
      const timeoutId = setTimeout(() => {
        setSubscribed(false);
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isSubscribed]);

  return (
    <FooterContainer>
      <SubscribeRow>
        <NavLinkStyled to="/">
          <LogoTipe src={Logo} alt="logo" width="96" />
        </NavLinkStyled>
        <FooterNav>
          <ContactContainer>
            <BiPhone size={16} />
            <ContactLink href="tel:+380839998888">
              +380 83 999 88 88
            </ContactLink>
          </ContactContainer>
          <ContactContainer>
            <BiMailSend size={16} />
            <EmailContact href="mailto:info@driveukrainenow.com">
              RentalCars@drive.com
            </EmailContact>
          </ContactContainer>
          <ContactContainer>
            <BiMap size={16} />
            <GoogleMapsLink
              href="https://www.google.com/maps?q=123+Main+Street+Kiev+Ukraine"
              target="_blank"
            >
              03-151 Main Street, Kiev, Ukraine
            </GoogleMapsLink>
          </ContactContainer>
        </FooterNav>

        <SubscribeContainer>
          <SubscribeForm onSubmit={handleSubscribe}>
            <SubscribeInput
              type="email"
              name="email"
              placeholder="E-mail*"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <SubscribeButton type="submit">
              Subscribe
              <BiSolidBellRing size={16} />
            </SubscribeButton>
          </SubscribeForm>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {isSubscribed && (
            <SuccessMesage>
              Subscription successful! Thank you for being with us!
            </SuccessMesage>
          )}
        </SubscribeContainer>
      </SubscribeRow>
      <SocialContainer>
        <HeartIcon>
          <use xlinkHref={`${SvgSprite}#icon-heart-blue`} />
        </HeartIcon>
        <parent>performed by Tetiana Onyshchenko</parent>
        <Social
          to="https://github.com/Tetiana892"
          target="_blank"
          aria-label="Author github"
        >
          <svg>
            <use xlinkHref={`${SvgSprite}#icon-github`} />
          </svg>
        </Social>
        <Social
          to="https://www.linkedin.com/in/tetiana-onyshchenko-5880b9251/"
          target="_blank"
          aria-label="Author linkedin"
        >
          <svg>
            <use xlinkHref={`${SvgSprite}#icon-linkedin`} />
          </svg>
        </Social>
      </SocialContainer>
    </FooterContainer>
  );
};

export default Footer;

//  <svg viewBox="0 0 32 32">
//    <use xlinkHref={`${SvgSprite}#icon-addPhoto`} />
//  </svg>;
