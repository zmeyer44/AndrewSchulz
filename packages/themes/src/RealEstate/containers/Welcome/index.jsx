import React from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

import { smoothLinkProps } from '@pagerland/common/src/utils';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';

import Typography from '@pagerland/common/src/components/Typography';
import Button from '@pagerland/common/src/components/Button';
import Grid from '@pagerland/common/src/components/Grid';
import Icon from '@pagerland/common/src/components/Icon';
import ParallaxBackground from '../../components/ParallaxBackground';

import data from '../../data';

import './style.css';

const Welcome = ({
  name,
  background,
  title,
  price,
  features,
  cta,
  WrapperProps,
  InnerProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  PriceProps,
  GridProps,
  CtaProps,
  FeatureProps,
  FeatureIconProps,
  FeatureTitleProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <div class="glitch__img"></div>
    <div class="glitch__img"></div>
    <div class="glitch__img"></div>
    <div class="glitch__img"></div>
    <div class="glitch__img"></div>
    <Box {...InnerProps}>
      <Container {...ContainerProps}>
        <Box {...CaptionProps}>
          <Fade bottom cascade duration={600}>
            <h2 className="content__title" {...TitleProps}>
              {title}
            </h2>
            <Typography {...PriceProps}>{price}</Typography>
            <Grid {...GridProps}>
              {features.map((feature, i) => (
                <Box {...FeatureProps} key={i}>
                  <Icon {...FeatureIconProps} {...feature.IconProps} />
                  <Typography {...FeatureTitleProps}>{feature.title}</Typography>
                </Box>
              ))}
            </Grid>
            <Button {...CtaProps} {...cta} />
          </Fade>
        </Box>
        {/* <div className="demo-2 imgloaded render">
          <div class="content">
            <div class="glitch">
              <div class="glitch__img"></div>
              <div class="glitch__img"></div>
              <div class="glitch__img"></div>
              <div class="glitch__img"></div>
              <div class="glitch__img"></div>
            </div>
          </div>
        </div> */}
      </Container>
    </Box>
  </Box>
);

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  WrapperProps: PropTypes.object,
  InnerProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  TitleProps: PropTypes.object,
  PriceProps: PropTypes.object,
  GridProps: PropTypes.object,
  CtaProps: PropTypes.object,
  FeatureProps: PropTypes.object,
  FeatureIconProps: PropTypes.object,
  FeatureTitleProps: PropTypes.object,
  title: PropTypes.node,
  price: PropTypes.node,
  background: PropTypes.object,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      IconProps: PropTypes.object,
      title: PropTypes.node,
    }),
  ),
  cta: PropTypes.object,
};

Welcome.defaultProps = {
  WrapperProps: {
    pt: {
      _: '0',
      lg: '50%',
    },
    position: 'relative',
    zIndex: 1,
    overflow: 'hidden',
  },
  InnerProps: {
    pt: {
      _: 120,
      lg: 0,
    },
    pb: {
      _: 80,
      lg: 0,
    },
    position: {
      _: 'relative',
      lg: 'absolute',
    },
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    bg: 'rgba(0, 0, 0, 0.3)',
    zIndex: 2,
    minHeight: {
      _: '80vh',
    },
  },
  ContainerProps: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  CaptionProps: {
    maxWidth: 544,
  },
  TitleProps: {
    as: 'h1',
    variant: 'h1',
    color: 'gray.6',
    fontFamily: 'bebas',
    fontSize: {
      _: '11vh',
      lg: '16vh !important',
    },
  },
  PriceProps: {
    variant: 'h1',
    color: 'brand',
    fontFamily: 'bebas',
  },
  CtaProps: {
    as: Link,
    ...smoothLinkProps,
    mt: 2,
    variant: 'brand',
    size: 'large',
    fontFamily: 'bebas',
  },
  GridProps: {
    mt: 4,
    maxWidth: 320,
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridColumnGap: '32px',
    gridRowGap: '8px',
  },
  FeatureProps: {
    flexBox: true,
    alignItems: 'center',
  },
  FeatureIconProps: {
    fontSize: 24,
    color: 'gray.6',
    mr: 2,
  },
  FeatureTitleProps: {
    variant: 'h4',
    color: 'gray.6',
  },
  ...data.welcome,
};

export default Welcome;