import React from 'react';
import Container from 'react-bootstrap/Container';
import Banner from '../BannerSlide/Banner';
import Maps from '../Maps/Maps';
import GoogleBusiness from '../GoogleBusiness/GoogleBusiness';

function BodyHome() {
  return (
    <Container className="mx-auto text-center">
      <Banner />
      <Maps />
      <GoogleBusiness />
    </Container>
  );
}

export default BodyHome;
