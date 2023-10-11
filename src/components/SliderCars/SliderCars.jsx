import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/adverts/operation';
import { getCars } from 'redux/adverts/selectors';
import {
  SliderWrapper,
  Img,
  Title,
  Span,
  WrapperTitle,
  WrapperContainer,
} from './SliderCars.styled';

import ImageWithFallback from '../../images/logo.png';

const SliderCars = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(getCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const sliderSettings = {
    speed: 500,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true,
    variableWidth: true,
    arrows: true,
  };

  return (
    <WrapperContainer>
      <Slider {...sliderSettings}>
        {adverts.map(advert => (
          <SliderWrapper key={advert.id}>
            {!advert.img ? (
              <Img src={ImageWithFallback} />
            ) : (
              <Img src={advert.img} alt={`${advert.make}`} />
            )}
            <WrapperTitle>
              <Title>
                {advert.make} <Span> {advert.model}</Span>, {advert.year}
              </Title>
            </WrapperTitle>
          </SliderWrapper>
        ))}
      </Slider>
    </WrapperContainer>
  );
};

export default SliderCars;
