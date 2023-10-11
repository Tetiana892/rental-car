import styled from '@emotion/styled';

export const Img = styled.img`
  width: 145px;
  height: 160px;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  );
  transition: transform 0.3s ease-in-out;
  object-fit: cover;

  &:hover,
  &:focus {
    transform: scale(0.9);
  }
  @media screen and (min-width: 768px) {
    width: 320px;
    height: 240px;
  }
  @media screen and (min-width: 1440px) {
    width: 335px;
    height: 268px;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 145px;
  max-width: 145px;

  padding: 4px 8px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    padding: 20px 18px;
    min-width: 260px;
    max-width: 260px;
  }
  @media screen and (min-width: 1440px) {
    padding: 24px 20px;
    min-width: 335px;
    max-width: 335px;
  }
`;

export const Title = styled.p`
  font-family: ManropeRegular;
  font-size: 12px;
  line-height: 14px;
  display: flex;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Span = styled.span`
  color: rgba(52, 112, 255, 1);
  margin-left: 6px;
`;
export const WrapperTitle = styled.div`
  padding: 6px;
  background-color: white;
  border-radius: 6px;
`;

export const WrapperContainer = styled.div`
  width: 330px;

  @media screen and (min-width: 768px) {
    width: 610px;
  }
  @media screen and (min-width: 1440px) {
    width: 1120px;
  }
`;
