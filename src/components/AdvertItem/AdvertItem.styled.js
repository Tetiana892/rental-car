import styled from '@emotion/styled';

export const ImageContainer = styled.div`
  position: relative;
`;

export const HeartIcon = styled.svg`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 18px;
  height: 18px;
  opacity: 90%;

  cursor: pointer;
  stroke-width: 1.5;
  stroke-opacity: 0.8;
  stroke-linecap: round;
  stroke-linejoin: round;
  color: rgba(52, 112, 255, 1);

  :hover,
  :focus {
    transform: scale(1.2);
    fill: rgba(52, 112, 255, 1);
    stroke: rgba(52, 122, 255, 1);
  }
`;

export const Title = styled.h3`
  font-family: ManropeRegular;
  font-size: 16px;
  line-height: 24px;
  display: flex;
`;

export const Span = styled.span`
  color: rgba(52, 112, 255, 1);
  margin-left: 6px;
`;

export const SpanPrice = styled.span`
  margin-left: auto;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 274px;
  height: 426px;
`;

export const Img = styled.img`
  width: 100%;
  height: 268px;
  border-radius: 10px;
  object-fit: cover;
  background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  );
`;

export const DescrContainer = styled.div`
  display: flex;
  width: 255px;
  height: 40px;
  overflow: hidden;
`;

export const Descr = styled.p`
  width: 270px;
  font-size: 12px;
  line-height: 1.5em;
  font-family: ManropeRegular;
  color: rgba(18, 20, 23, 0.5);
`;

export const Button = styled.button`
  width: 274px;
  height: 44px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  background: rgba(52, 112, 255, 1);
  color: white;
  cursor: pointer;
  border: none;

  &:hover,
  &:focus {
    background-color: rgba(11, 68, 205, 1);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
