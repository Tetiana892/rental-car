import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addToFavorites, removeFavorites } from 'redux/favorites/slice';
import { getSelectorFavorites } from 'redux/favorites/selector';
import Modal from '../Modal/Modal';
import {
  Button,
  Descr,
  DescrContainer,
  Img,
  Item,
  Span,
  Title,
  SpanPrice,
  ImageContainer,
  ButtonHeart,
} from './AdvertItem.styled';
import ImageWithFallback from '../../images/logo.png';
import Icons from '../../images/sprite.svg';

const AdvertList = ({ advert, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();
  const favorites = useSelector(getSelectorFavorites);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const displaySpan = advert.make.lenght <= 9 && index < 3;
  const addressCars = advert.address.split(' ');
  const lastWords = addressCars.slice(-2).join(' ').replace(',', ' | ');
  const firstFunctional = advert.functionalities[0];

  useEffect(() => {
    const isFavoriteCar = favorites.some(favorite => favorite.id === advert.id);
    setIsFavorite(isFavoriteCar);
  }, [favorites, advert]);

  const addHeart = () => {
    dispatch(addToFavorites(advert));
    toast.success('Add has been added to favorites.');
  };

  const removeHeart = () => {
    dispatch(removeFavorites(advert.id));
    toast.warning('The add has been removed from favorites.');
  };

  return (
    <Item>
      <ImageContainer>
        {!advert.img ? (
          <Img src={ImageWithFallback} width={274} />
        ) : (
          <Img src={advert.img} alt={`${advert.make}`} width={274} />
        )}
        {isFavorite ? (
          <ButtonHeart type="button" onClick={removeHeart}>
            <svg width={18} height={18}>
              <use href={Icons + '#icon-heart-blue'} />
            </svg>
          </ButtonHeart>
        ) : (
          <ButtonHeart type="button" onClick={addHeart}>
            <svg width={18} height={18}>
              <use href={Icons + '#icon-heart-hidden'} />
            </svg>
          </ButtonHeart>
        )}
      </ImageContainer>
      <Title>
        {advert.make}
        {displaySpan && <Span>{advert.model}</Span>}, {advert.year}{' '}
        <SpanPrice>{advert.rentalPrice}</SpanPrice>
      </Title>
      <DescrContainer>
        <Descr>
          {lastWords} | {advert.rentalCompany} | {advert.type} | {advert.make} |{' '}
          {advert.mileage} | {firstFunctional}
        </Descr>
      </DescrContainer>
      <Button onClick={() => openModal(advert.id)}>Learn More</Button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        id={advert.id}
        advert={advert}
      ></Modal>
    </Item>
  );
};

export default AdvertList;
