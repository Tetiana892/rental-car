import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from 'redux/adverts/selectors';
import { fetchCars } from 'redux/adverts/operation';
import { ToastContainer } from 'react-toastify';
import AdvertList from 'components/AdvertList/AdvertList';
import Footer from 'components/Footer/Footer';
import FilterForm from 'components/FilterForm/FilterForm';

import { CatalogContainer, ResultMessage } from './Catalog.styled';

const Catalog = () => {
  const dispatch = useDispatch();
  const allCars = useSelector(getCars);

  const [filters, setFilters] = useState({
    make: '',
    filteredPrices: [],
    minMileage: '',
    maxMileage: '',
  });
  const [filteredAdverts, setFilteredAdverts] = useState(null);
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  useEffect(() => {
    if (isFiltering) {
      if (
        filters.make ||
        filters.filteredPrices.length > 0 ||
        filters.minMileage ||
        filters.maxMileage
      ) {
        const filteredAdverts = allCars.filter(advert => {
          if (filters.make && advert.make !== filters.make.value) {
            return false;
          }
          if (
            filters.filteredPrices.length > 0 &&
            !filters.filteredPrices.some(
              priceObj => priceObj.value === advert.rentalPrice.replace('$', '')
            )
          ) {
            return false;
          }
          if (filters.minMileage && advert.mileage < filters.minMileage) {
            return false;
          }
          if (filters.maxMileage && advert.mileage > filters.maxMileage) {
            return false;
          }
          return true;
        });
        setFilteredAdverts(filteredAdverts);
      } else {
        setFilteredAdverts([]);
      }
    }
  }, [filters, allCars, isFiltering]);

  const makes = [...new Set(allCars.map(advert => advert.make))];
  const prices = [
    ...new Set(allCars.map(advert => advert.rentalPrice.replace('$', ''))),
  ];
  const mileage = [...new Set(allCars.map(advert => advert.mileage))];
  const minMileage = Math.min(...mileage);
  const maxMileage = Math.max(...mileage);

  const handleResetClick = () => {
    setFilters({
      make: '',
      filteredPrices: [],
      minMileage: '',
      maxMileage: '',
    });
    setIsFiltering(false);
  };

  return (
    <>
      <CatalogContainer>
        <FilterForm
          makes={makes}
          prices={prices}
          minMileage={minMileage}
          maxMileage={maxMileage}
          onFilterChange={newFilters => {
            setFilters(newFilters);
            setIsFiltering(true);
          }}
          filters={filters}
          onResetClick={handleResetClick}
        />
        {isFiltering ? (
          filteredAdverts !== null && filteredAdverts.length > 0 ? (
            <AdvertList filteredAdverts={filteredAdverts} />
          ) : (
            <>
              <ResultMessage>
                No results found for the selected criteria.
              </ResultMessage>
            </>
          )
        ) : (
          <AdvertList adverts={allCars} />
        )}
      </CatalogContainer>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Catalog;
