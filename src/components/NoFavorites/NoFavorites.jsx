import React from 'react';

import ImageError from '../../images/error.jpg';
import {
  StyledContainer,
  Message,
  Image,
  LinkToCatalog,
} from './Nofavorites.styled';

const NoFavorites = () => {
  return (
    <StyledContainer>
      <Message>There is no favorite cars</Message>
      <Image src={ImageError} alt="car repairs" />
      <LinkToCatalog to="/catalog">
        Follow to catalog and choose favorite cars
      </LinkToCatalog>
    </StyledContainer>
  );
};
export default NoFavorites;
