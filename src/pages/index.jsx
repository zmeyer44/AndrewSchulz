import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

import Theme, { theme } from '@pagerland/themes/src/RealEstate';
import {
  Navbar,
  Welcome,
  About,
  Location,
  Exterior,
  Interior,
  Surroundings,
  Gallery,
  Contact,
  UpcomingEvents,
  Footer,
} from '@pagerland/themes/src/RealEstate/containers';

import preview from '@pagerland/themes/src/RealEstate/assets/preview.jpg';

import SEO from '../components/SEO';

const RealEstate = ({ url }) => (
  <Theme>
    <Helmet>
      <link href={theme.typography.googleFont} rel="stylesheet" />
      <meta name="theme-color" content={theme.colors.primary} />
      <meta property="og:image" content={`${url}${preview}`} />
    </Helmet>
    <SEO title="Andrew Schulz" />

    <Navbar />
    <Welcome name="" />
    <UpcomingEvents name="events" />
    <Exterior name="about" />
    <Interior name="podcasts" />
    <Surroundings name="content" />
    <Contact name="contact" />
    {/* <Gallery name="gallery" /> */}
    <Footer name="" />
  </Theme>
);

RealEstate.propTypes = {
  url: PropTypes.string,
};

RealEstate.defaultProps = {
  url: 'https://pager.land/gatsby/',
};

export default RealEstate;
