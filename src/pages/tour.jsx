import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

import Theme, { theme } from '@pagerland/themes/src/RealEstate';
import {
  NavbarAlt,
  UtilityHeader,
  TourEvents,
  Footer,
} from '@pagerland/themes/src/RealEstate/containers';

import preview from '@pagerland/themes/src/RealEstate/assets/preview.jpg';

import SEO from '../components/SEO';

const Tour = ({ url }) => (
  <Theme>
    <Helmet>
      <link href={theme.typography.googleFont} rel="stylesheet" />
      <meta name="theme-color" content={theme.colors.primary} />
      <meta property="og:image" content={`${url}${preview}`} />
    </Helmet>
    <SEO title="Tour Dates" />

    <NavbarAlt />
    <UtilityHeader name="" />
    <TourEvents name="events" />
    <Footer name="" />
  </Theme>
);

Tour.propTypes = {
  url: PropTypes.string,
};

Tour.defaultProps = {
  url: 'https://andrewschulz.netlify.app/tour',
};

export default Tour;
