import styled from '@emotion/styled';

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  margin-top: 20px;
  width: 461px;
  height: 248px;
  border-radius: 14px;
  object-fit: cover;
  background: rgba(243, 243, 242, 1);
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0 10px 40px;
  gap: 14px;
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

export const AdvDescr = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-family: ManropeRegular;
  font-weight: 400;
  width: 450px;
`;

export const FuncDescr = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-family: ManropeRegular;
  font-weight: 400;
`;

export const ConditionDescr = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const DescrTitle = styled.p`
  display: flex;
  font-size: 14px;
  line-height: 1.5em;
  font-family: ManropeMedium;
  font-weight: 500;
  color: rgba(18, 20, 23, 1);
  margin-bottom: 8px;
`;

export const DescrContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ConditionalDescr = styled.div`
  display: flex;
  width: 277px;
`;

export const ConditionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 461px;
`;

export const ConditionUnit = styled.p`
  font-size: 12px;
  color: rgba(54, 53, 53, 1);
  background-color: rgba(249, 249, 249, 1);
  padding: 7px 14px;
  border-radius: 35px;
  font-family: ManropeRegular;
  font-weight: 400;
`;

export const SpanUnit = styled.span`
  font-size: 12px;
  color: rgba(52, 112, 255, 1);
  font-family: MontserratSemiBold;
  font-weight: 600;
`;

export const Descr = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  line-height: 1.5em;
  font-family: MontserratRegular;
  color: rgba(18, 20, 23, 0.5);
`;

export const DescrFunc = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  line-height: 1.5em;
  font-family: MontserratRegular;
  color: rgba(18, 20, 23, 0.5);
  margin-top: 8px;
  width: 480px;
  height: 40px;
  overflow: hidden;
`;

export const Button = styled.button`
  width: 168px;
  height: 40px;
  padding: 12px 50px;
  margin-top: 10px;
  margin-bottom: 40px;
  border-radius: 12px;
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

export const ButtonLink = styled.a`
  color: white;
`;
