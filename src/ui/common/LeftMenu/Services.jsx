import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
  background: url('background-image-url.jpg') no-repeat center center/cover;
  padding: 60px 0;
  text-align: left;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Column = styled.div`
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #000;
  text-align: center;
  margin-bottom: 10px;
  animation: slide-up 0.4s ease-in-out;

  @keyframes slide-up {
    from {
      transform: translateY(100px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const SectionSubtitle = styled.h3`
  font-size: 1.5rem;
  color: #555;
  text-align: center;
  margin-bottom: 30px;
  animation: slide-up 0.4s ease-in-out 0.05s;
`;

const ServicesList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
`;

const ServiceItem = styled.li`
  flex: 1 1 30%;
  max-width: 30%;
  margin: 10px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  animation: fade-in 0.4s ease-in-out;
`;

const ServiceLink = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
`;

const ServiceImage = styled.div`
  width: 100%;
  padding-top: 56.25%;
  background: ${({ imageUrl }) => `url(${imageUrl})`} no-repeat center center/cover;
`;

const ServiceContent = styled.div`
  padding: 15px;
`;

const ServiceHeader = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #777;
`;

const ArrowIcon = styled.svg`
  width: 10px;
  height: 17px;
  fill: #000;
`;

const Services = () => {
  return (
    <ServicesSection>
      <Container>
        <Row>
          <Column>
            <SectionTitle>Our expertise</SectionTitle>
            <SectionSubtitle>
              Exceptional <span style={{ color: '#f00' }}>services</span> to elevate your business
            </SectionSubtitle>
            <ServicesList>
              <ServiceItem>
                <ServiceLink href="/web-development">
                  <ServiceImage imageUrl="https://cdn.b12.io/client_media/h0JSDDVw/de999ab6-57b1-11ef-833c-0242ac110002-jpg-regular_image.jpeg" />
                  <ServiceContent>
                    <ServiceHeader>
                      Web development
                      <ArrowIcon viewBox="0 0 10 17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.25111 16.0843c-.320261 0-.640343-.1222-.88465-.3663-.488613-.4886-.488613-1.2807 0-1.7693l5.90679-5.90664L.36646 2.13545c-.488613-.48844-.488613-1.28069 0-1.769124.488434-.488435 1.28069-.488435 1.76912 0L8.92684 7.15759c.48844.48843.48844 1.28068 0 1.7693L2.13558 15.7181c-.24412.244-.56421.3662-.88447.3662Z" />
                      </ArrowIcon>
                    </ServiceHeader>
                    <ServiceDescription>
                      Transform your online presence with our expert web development services.
                    </ServiceDescription>
                  </ServiceContent>
                </ServiceLink>
              </ServiceItem>

              <ServiceItem>
                <ServiceLink href="/mobile-development">
                  <ServiceImage imageUrl="https://cdn.b12.io/client_media/h0JSDDVw/deb0dd48-57b1-11ef-833c-0242ac110002-jpg-regular_image.jpeg" />
                  <ServiceContent>
                    <ServiceHeader>
                      Mobile development
                      <ArrowIcon viewBox="0 0 10 17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.25111 16.0843c-.320261 0-.640343-.1222-.88465-.3663-.488613-.4886-.488613-1.2807 0-1.7693l5.90679-5.90664L.36646 2.13545c-.488613-.48844-.488613-1.28069 0-1.769124.488434-.488435 1.28069-.488435 1.76912 0L8.92684 7.15759c.48844.48843.48844 1.28068 0 1.7693L2.13558 15.7181c-.24412.244-.56421.3662-.88447.3662Z" />
                      </ArrowIcon>
                    </ServiceHeader>
                    <ServiceDescription>
                      Reach your audience on-the-go with our mobile development expertise.
                    </ServiceDescription>
                  </ServiceContent>
                </ServiceLink>
              </ServiceItem>

              <ServiceItem>
                <ServiceLink href="/website-deployment">
                  <ServiceImage imageUrl="https://cdn.b12.io/client_media/h0JSDDVw/df5d406a-57b1-11ef-833c-0242ac110002-jpg-regular_image.jpeg" />
                  <ServiceContent>
                    <ServiceHeader>
                      Website deployment
                      <ArrowIcon viewBox="0 0 10 17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.25111 16.0843c-.320261 0-.640343-.1222-.88465-.3663-.488613-.4886-.488613-1.2807 0-1.7693l5.90679-5.90664L.36646 2.13545c-.488613-.48844-.488613-1.28069 0-1.769124.488434-.488435 1.28069-.488435 1.76912 0L8.92684 7.15759c.48844.48843.48844 1.28068 0 1.7693L2.13558 15.7181c-.24412.244-.56421.3662-.88447.3662Z" />
                      </ArrowIcon>
                    </ServiceHeader>
                    <ServiceDescription>
                      Launch your website with confidence through our deployment services.
                    </ServiceDescription>
                  </ServiceContent>
                </ServiceLink>
              </ServiceItem>
            </ServicesList>
          </Column>
        </Row>
      </Container>
    </ServicesSection>
  );
};

export default Services;
