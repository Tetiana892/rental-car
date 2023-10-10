import React from 'react';
import {
  SpanUnit,
  ConditionContainer,
  ConditionUnit,
  ConditionDescr,
  DescrTitle,
  AdvDescr,
  ImgContainer,
  Descr,
  DescrContainer,
  InfoContainer,
  Img,
  Span,
  Title,
  Button,
  ButtonLink,
  FuncDescr,
  DescrFunc,
} from './ModalInfo.styled';

const ModalInfo = ({ advert }) => {
  const addressCars = advert.address.split(' ');
  const lastWords = addressCars.slice(-2).join(' ').replace(',', ' | ');

  const formatConditionAndNumber = text => {
    const fractionalNumber = number => {
      return number.toLocaleString();
    };
    if (typeof text === 'string') {
      const match = text.match(/(\d+)/);
      if (match) {
        const number = match[0];
        const restOfText = text.replace(number, '');
        return (
          <>
            {restOfText}
            <SpanUnit>{fractionalNumber(number)}</SpanUnit>
          </>
        );
      }
    }
    return text;
  };

  return (
    <div>
      <ImgContainer>
        <Img src={advert.img} alt={advert.make} width={461} />
      </ImgContainer>
      <InfoContainer>
        <Title>
          {advert.make} <Span> {advert.model}</Span>, {advert.year}
        </Title>
        <DescrContainer>
          <Descr>
            <p>
              {lastWords} | Id: {advert.id} | Year: {advert.year} | Type:{' '}
              {advert.type}
            </p>
            <p>
              Fuel Consumption: {advert.fuelConsumption} | Engine Size:{' '}
              {advert.engineSize}
            </p>
          </Descr>
        </DescrContainer>
        <AdvDescr>{advert.description}</AdvDescr>
        <FuncDescr>
          <DescrTitle>Accessories and functionalities:</DescrTitle>
          <DescrFunc>
            <p>
              {advert.accessories
                .map(accessory => {
                  const words = accessory.split(' ');
                  const firstThreeWords = words.slice(0, 3).join(' ');
                  return firstThreeWords;
                })
                .join(' | ')}
            </p>
            <p>
              {advert.functionalities
                .map(functionality => {
                  const words = functionality.split(' ');
                  const firstThreeWords = words.slice(0, 3).join(' ');
                  return firstThreeWords;
                })
                .join(' | ')}
            </p>
          </DescrFunc>
        </FuncDescr>
        <ConditionContainer>
          <DescrTitle>Rental Conditions:</DescrTitle>
          <ConditionDescr>
            {advert.rentalConditions.split('\n').map((condition, index) => (
              <ConditionUnit key={index}>
                {formatConditionAndNumber(condition)}
              </ConditionUnit>
            ))}
            <ConditionUnit>
              Mileage:{' '}
              <SpanUnit>
                {typeof advert.mileage === 'number'
                  ? advert.mileage.toLocaleString('en-US')
                  : advert.mileage}
              </SpanUnit>
            </ConditionUnit>

            <ConditionUnit>
              Price:{' '}
              <SpanUnit>{advert.rentalPrice.replace('$', '') + '$'}</SpanUnit>
            </ConditionUnit>
          </ConditionDescr>
        </ConditionContainer>

        <Button>
          <ButtonLink href="tel:+380839998888">Rental Car</ButtonLink>
        </Button>
      </InfoContainer>
    </div>
  );
};

export default ModalInfo;
