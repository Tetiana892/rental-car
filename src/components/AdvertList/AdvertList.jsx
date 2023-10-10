import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/adverts/operation';
import { getCars } from 'redux/adverts/selectors';
import { Container, ListItems, LoadMoreButton } from './AdvertList.styled';
import AdvertItem from '../AdvertItem/AdvertItem';
import Loader from 'components/Loader/Loader';

const AdvertList = ({ filteredAdverts }) => {
  const dispatch = useDispatch();
  const adverts = useSelector(getCars);
  const [displayedAdverts, setDisplayedAdverts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 8;

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  useEffect(() => {
    if (adverts && adverts.length > 0) {
      if (filteredAdverts && filteredAdverts.length > 0) {
        setDisplayedAdverts(
          filteredAdverts.slice(0, startIndex + itemsPerPage)
        );
      } else {
        setDisplayedAdverts(adverts.slice(0, startIndex + itemsPerPage));
      }
    }
  }, [adverts, startIndex, filteredAdverts]);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setStartIndex(startIndex + itemsPerPage);
      setLoading(false);
    }, 1000);
  };

  if (!adverts || adverts.length === 0) {
    return <Loader />;
  }

  const hasFilteredAdverts = filteredAdverts && filteredAdverts.length > 0;
  const filteredAdvertsCount = hasFilteredAdverts
    ? filteredAdverts.length
    : adverts.length;
  const shouldShowLoadMoreButton =
    !loading && startIndex + itemsPerPage < filteredAdvertsCount;

  return (
    <Container>
      <ListItems>
        {hasFilteredAdverts
          ? filteredAdverts
              .slice(0, startIndex + itemsPerPage)
              .map((advert, index) => (
                <AdvertItem key={advert.id} advert={advert} index={index} />
              ))
          : displayedAdverts.map((advert, index) => (
              <AdvertItem key={advert.id} advert={advert} index={index} />
            ))}
      </ListItems>
      {loading ? (
        <Loader />
      ) : (
        shouldShowLoadMoreButton && (
          <LoadMoreButton onClick={loadMore}>Load more</LoadMoreButton>
        )
      )}
    </Container>
  );
};

export default AdvertList;
