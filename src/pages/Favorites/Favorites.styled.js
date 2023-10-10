import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 65vh;
  grid-gap: 29px;
  padding-bottom: 20px;
  max-width: 1184px;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const FilteredContainer = styled.div`
  margin: 0 auto;
`;

export const EmptyFavorites = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const EmptyFavoritesMessage = styled.p`
  font-size: 24px;
  font-family: ManropeRegular;
  color: rgba(138, 138, 137, 1);
`;
