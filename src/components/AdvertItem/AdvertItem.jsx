import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addToFavorites, removeFavorites } from 'redux/favorites/slice';
import { getSelectorFavorites } from 'redux/favorites/selector';
import Modal from '../Modal/Modal';
import {
  HeartIcon,
  Button,
  Descr,
  DescrContainer,
  Img,
  Item,
  Span,
  Title,
  SpanPrice,
  ImageContainer,
} from './AdvertItem.styled';
import ImageWithFallback from '../../images/logo.png';

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

  const toggleFavoite = () => {
    if (isFavorite) {
      dispatch(removeFavorites(advert.id));
      toast.warning('The ad has been removed from favorites.');
    } else {
      dispatch(addToFavorites(advert));
      toast.success('Ad has been added to favorites.');
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <Item>
      <ImageContainer>
        {!advert.img ? (
          <Img src={ImageWithFallback} width={274} />
        ) : (
          <Img src={advert.img} alt={`${advert.make}`} width={274} />
        )}
        <HeartIcon
          onClick={toggleFavoite}
          fill={isFavorite ? 'rgba(52, 112, 255, 1)' : 'transparent'}
          stroke={isFavorite ? 'rgba(52, 112, 255, 1)' : 'white'}
        ></HeartIcon>
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
