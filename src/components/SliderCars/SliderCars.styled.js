import styled from '@emotion/styled';

export const Img = styled.img`
  width: 335px;
  height: 268px;
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
`;

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 335px;
  max-width: 335px;

  padding: 24px 20px;
  margin-bottom: 8px;
`;

export const Title = styled.p`
  font-family: ManropeRegular;
  font-size: 16px;
  line-height: 24px;
  display: flex;
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
