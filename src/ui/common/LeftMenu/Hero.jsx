import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),
    url('https://cdn.b12.io/client_media/h0JSDDVw/dd48847e-57b1-11ef-bf83-0242ac110002-jpg-hero_image.jpeg');
  background-size: cover;
  background-attachment: fixed;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: left;
  width:90%;
`;

const HeroContent = styled.div`
  text-align: left;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: slide-up 0.4s ease-in-out;
  @keyframes slide-up {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Subtitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  animation: slide-up 0.4s ease-in-out 0.05s forwards;
  span {
    color: #ffcc00;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  animation: slide-up 0.4s ease-in-out 0.1s forwards;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 0.75rem 2rem;
    color: #fff;
    border-color: #32aa27;
    background-color: #32aa27;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  animation: slide-up 0.4s ease-in-out 0.15s forwards;
  &:hover {
    opacity:0.2;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <Container>
        <HeroContent>
          <Title>Your vision, our code</Title>
          <Subtitle>
            Transforming <span>ideas</span> into reality
          </Subtitle>
          <Paragraph></Paragraph>
          <CTAButton href="/index#services">View services</CTAButton>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero;
