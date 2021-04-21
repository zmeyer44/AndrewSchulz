import React from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Typography from '@pagerland/common/src/components/Typography';
import Grid from '@pagerland/common/src/components/Grid';
import Card from '@pagerland/common/src/components/Card';
import Img from '@pagerland/common/src/components/Img';
import Icon from '@pagerland/common/src/components/Icon';
import Badge from '@pagerland/common/src/components/Badge';

import Calender from '@pagerland/icons/src/line/Calender';

import data from '../../data';
import './style.css';

const TourEvents = ({
  name,
  title,
  events,
  WrapperProps,
  ContainerProps,
  TitleProps,
  GridProps,
  CardProps,
  ImgProps,
  CaptionProps,
  PriceBadgeProps,
  PriceBadgeIconProps,
  ItemTitleProps,
  FeaturesGridProps,
  FeatureProps,
  FeatureIconProps,
  FeatureTitleProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Typography {...TitleProps}>{title}</Typography>

      <Grid {...GridProps}>
        {events.map((event, key) => (
          <Fade key={key} cascade bottom duration={600} delay={100 * key}>
            <Card {...CardProps} {...event.LinkProps} className="card">
              <Img {...ImgProps} {...event.ImgProps} className="img" />
              <Box {...CaptionProps}>
                <Badge {...PriceBadgeProps}>
                  <Icon {...PriceBadgeIconProps} />
                  {event.price}
                </Badge>
                <Typography {...ItemTitleProps}>{event.title}</Typography>
                <Grid {...FeaturesGridProps}>
                  {event.features.map((feature, i) => (
                    <Box {...FeatureProps} key={i}>
                      <Icon {...FeatureIconProps} {...feature.IconProps} />
                      <Typography {...FeatureTitleProps}>{feature.title}</Typography>
                    </Box>
                  ))}
                </Grid>
              </Box>
            </Card>
          </Fade>
        ))}
      </Grid>
    </Container>
  </Box>
);

TourEvents.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.node,
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node,
      price: PropTypes.node,
      features: PropTypes.arrayOf(
        PropTypes.shape({
          IconProps: PropTypes.object,
          title: PropTypes.node,
        }),
      ),
      LinkProps: PropTypes.object,
      ImgProps: PropTypes.object,
    }),
  ),
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  TitleProps: PropTypes.object,
  GridProps: PropTypes.object,
  CardProps: PropTypes.object,
  ImgProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  PriceBadgeProps: PropTypes.object,
  PriceBadgeIconProps: PropTypes.object,
  ItemTitleProps: PropTypes.object,
  FeaturesGridProps: PropTypes.object,
  FeatureProps: PropTypes.object,
  FeatureIconProps: PropTypes.object,
  FeatureTitleProps: PropTypes.object,
};

TourEvents.defaultProps = {
  ...data.tourEvents,
  WrapperProps: {
    pb: {
      _: 48,
      md: 64,
      lg: 160,
    },
  },
  TitleProps: {
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: 'gray.4',
    pt: 5,
    pb: {
      _: 3,
      md: 4,
      lg: 5,
    },
    as: 'h2',
    variant: 'h2',
  },
  GridProps: {
    gridTemplateColumns: {
      _: '1fr',
      lg: 'repeat(3, 1fr)',
    },
    gridGap: '32px',
  },
  CardProps: {
    p: 0,
    position: 'relative',
    display: 'block',
  },
  ImgProps: {
    width: '100%',
    display: 'block',
  },
  CaptionProps: {
    py: 24,
    px: 4,
  },
  PriceBadgeProps: {
    position: 'absolute',
    left: 0,
    top: 16,
  },
  PriceBadgeIconProps: {
    icon: Calender,
    fontSize: 24,
  },
  ItemTitleProps: {
    as: 'span',
    variant: 'h4',
    color: '#000',
    mb: 24,
  },
  FeaturesGridProps: {
    mt: 3,
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
    mr: 2,
    color: '#000',
  },
  FeatureTitleProps: {
    variant: 'small',
    color: 'gray.1',
  },
};

export default TourEvents;
