import React from 'react';
import styled from 'styled-components';
import teamImg from '../../../team.jpg'

const AboutSection = styled.section`
  padding: 4rem 0;
  background-color: #f9f9f9;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: left;
`;

const Column = styled.div`
  flex: 1;
  max-width: 600px;
  padding: 1rem;
`;

const TextImageContent = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
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

const Subtitle = styled.h3`
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
  background-color: #ffcc00;
  color: #000;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  animation: slide-up 0.4s ease-in-out 0.2s forwards;
  &:hover {
    background-color: #e6b800;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  animation: fade-in 0.4s ease-in-out;
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Row>
          <Column>
            <TextImageContent>
              <Title>Who we are</Title>
              <Subtitle>
                Dedicated to <span>innovation</span>
              </Subtitle>
              <Paragraph>
              WE17 is a dynamic group of 17 skilled developers specializing in providing comprehensive end-to-end solutions for web and mobile applications. Our expertise spans the entire development lifecycle, from initial concept and design to deployment and ongoing maintenance. We are dedicated to delivering high-quality, scalable, and efficient solutions that meet the unique needs of our clients, ensuring their products are always performing at their best.
              </Paragraph>
              <CTAButton href="/index#contact">Get in touch</CTAButton>
            </TextImageContent>
          </Column>
          <Column>
            <ImageWrapper>
              <Image
                src={teamImg}
                alt="Design smartphone definition"
              />
            </ImageWrapper>
          </Column>
        </Row>
      </Container>
    </AboutSection>
  );
};

export default About;
