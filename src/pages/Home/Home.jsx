import { useNavigate } from 'react-router-dom';
import {
  HomePageContainer,
  LearnMoreButton,
  HeaderTitle,
  Span,
  Section,
  FleetItem,
  FleetSection,
  SectionText,
  SectionTitle,
  SectionWrapper,
  ItemText,
  SectionTitleText,
} from './Home.styled';
import SliderCars from 'components/SliderCars/SliderCars';

import Footer from 'components/Footer/Footer';

const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/catalog');
  };

  return (
    <>
      <HomePageContainer>
        <HeaderTitle>Welcome to Rental Cars!</HeaderTitle>

        <HeaderTitle>Search, Compare & Save</HeaderTitle>
        <SectionWrapper>
          <Section>
            <FleetSection>
              <SectionTitle>
                <Span>Explore Our Diverse Fleet</Span>
              </SectionTitle>
              <FleetItem>
                - We offer a selection of comfortable sedans for your travel
                needs.
              </FleetItem>
              <FleetItem>
                - If you need more space, consider our SUVs for a spacious and
                enjoyable journey.
              </FleetItem>
              <FleetItem>
                - Experience luxury with our premium collection of luxury cars.
              </FleetItem>
              <FleetItem>
                - For group travel or extra room, check out our reliable vans.
              </FleetItem>
              <FleetItem>- Discover our eco-friendly hybrid cars.</FleetItem>
            </FleetSection>
          </Section>

          <Section>
            <SectionTitle>
              <Span>About Us</Span>
            </SectionTitle>
            <SectionText>
              <Span>Rental cars</Span> is your trusted partner for car rental
              services in Ukraine. We offer a wide range of vehicles to meet
              your transportation needs while exploring the beautiful country of
              Ukraine. With a commitment to safety and quality, we strive to
              provide you with a seamless travel experience that exceeds your
              expectations. Explore Ukraine with confidence, knowing that{' '}
              <Span>Rental cars</Span> is here to make your journey memorable
              and hassle-free.
            </SectionText>
          </Section>

          <Section>
            <SectionTitle>
              <Span>Why Choose Us</Span>
            </SectionTitle>
            <FleetSection>
              <FleetItem>- Wide selection of vehicles</FleetItem>
              <FleetItem>- Competitive prices</FleetItem>
              <FleetItem>- Convenient locations</FleetItem>
              <FleetItem>- Excellent customer service</FleetItem>
              <FleetItem>- Easy booking process</FleetItem>
              <FleetItem>- Flexible rental options</FleetItem>
              <FleetItem>- 24/7 roadside assistance</FleetItem>
              <FleetItem>- Clean and well-maintained vehicles</FleetItem>
            </FleetSection>
          </Section>
        </SectionWrapper>

        <SectionTitleText>
          <ItemText> Free cancellation for most rooms</ItemText>
          <ItemText>More than 60,000 rental points</ItemText>
          <ItemText>
            The support service provides assistance in more than 40 languages
          </ItemText>
          <ItemText>
            Rental cars gives you access to the biggest brands in car rental.
          </ItemText>
        </SectionTitleText>
        <SectionText></SectionText>
        <SliderCars />
        <LearnMoreButton onClick={handleExploreClick}>
          Get rental car
        </LearnMoreButton>
      </HomePageContainer>
      <Footer />
    </>
  );
};

export default Home;
