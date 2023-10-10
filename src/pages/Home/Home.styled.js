import styled from '@emotion/styled';
import image from '../../images/home.jpg';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;
  padding: 20px;
  max-width: auto;
  min-height: calc(100vh - 168px);

  background-image: url(${image});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  @media screen and (min-width: 760px) {
    min-height: calc(100vh - (95px + 84px));
  }
`;

export const LearnMoreButton = styled.button`
  padding: 14px 44px;
  margin-top: 30px;
  margin-bottom: 70px;

  font-size: 14px;
  line-height: 20px;
  font-weight: 600;

  cursor: pointer;
  border-radius: 12px;
  transition: background-color 0.3s;

  font-family: ManropeThin;
  background-color: #007bff;
  color: #fff;
  border: none;

  &:hover {
    background-color: #0056b3;
  }
`;
export const HeaderTitle = styled.h1`
  font-size: 36px;
  color: white;
  font-family: ManropeSemiBold;
`;

export const Span = styled.span`
  color: rgba(52, 112, 255, 1);
`;

export const ItemText = styled.p`
  color: #ffff;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  min-width: 260px;
  border-radius: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  color: #333;
  font-family: ManropeSemiBold;
  margin-bottom: 10px;
`;

export const SectionText = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: #666;
`;

export const FleetSection = styled.ul`
  list-style: none;
  font-size: 16px;
  color: #666;
  margin: 5px 0;
`;

export const FleetItem = styled.li`
  list-style: none;
  font-size: 16px;
  color: #666;
  margin: 5px 0;
`;

export const SectionWrapper = styled.div`
  display: flex;
  margin-top: 60px;
  margin-bottom: 40px;
  padding: 0 40px;
  gap: 40px;
`;
export const SectionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 1360px;
  height: 600px;
  border-radius: 20px;
`;
export const SectionTitleText = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  font-size: 36px;
  text-align: center;
`;
