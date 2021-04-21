import React from 'react';

import Ticket from '@pagerland/icons/src/line/Ticket';
import StoreAlt from '@pagerland/icons/src/line/StoreAlt';
import Store from '@pagerland/icons/src/line/Store';
import HomeAlt from '@pagerland/icons/src/line/HomeAlt';
import WebGrid from '@pagerland/icons/src/line/WebGrid';
import BedDouble from '@pagerland/icons/src/line/BedDouble';
import Bath from '@pagerland/icons/src/line/Bath';
import CarSideview from '@pagerland/icons/src/line/CarSideview';
import Plane from '@pagerland/icons/src/line/Plane';
import TrainTunnel from '@pagerland/icons/src/line/TrainTunnel';
import ShoppingBag from '@pagerland/icons/src/line/ShoppingBag';
import Bus from '@pagerland/icons/src/line/Bus';
import Metro from '@pagerland/icons/src/line/Metro';
import Beach from '@pagerland/icons/src/line/Beach';
import Trees from '@pagerland/icons/src/line/Trees';
import Flag from '@pagerland/icons/src/line/Flag';
import User from '@pagerland/icons/src/line/User';
import Building from '@pagerland/icons/src/line/Building';
import MapMarker from '@pagerland/icons/src/line/MapMarker';
import Phone from '@pagerland/icons/src/line/Phone';
import Envelope from '@pagerland/icons/src/line/Envelope';
import FacebookF from '@pagerland/icons/src/line/FacebookF';
import Instagram from '@pagerland/icons/src/line/Instagram';
import Twitter from '@pagerland/icons/src/line/TwitterAlt';
import Linkedin from '@pagerland/icons/src/line/LinkedinAlt';
import TagAlt from '@pagerland/icons/src/line/TagAlt';
import ThumbsUp from '@pagerland/icons/src/line/ThumbsUp';
import ShieldCheck from '@pagerland/icons/src/line/ShieldCheck';
import Award from '@pagerland/icons/src/line/Award';
import Youtube from '@pagerland/icons/src/line/Youtube';

import Icon from '@pagerland/common/src/components/Icon';

import textToMultiline from '@pagerland/common/src/utils/textToMultiline';

import * as Yup from 'yup';
import background from './assets/hero.jpg';
import background2x from './assets/hero.jpg';

import about1 from './assets/about/about-1.jpg';
import aboutLarge1 from './assets/about/about-huge-1.jpg';
import about12x from './assets/about/about-1@2x.jpg';
import about2 from './assets/about/about-2.jpg';
import aboutLarge2 from './assets/about/about-huge-2.jpg';
import about22x from './assets/about/about-2@2x.jpg';
import about3 from './assets/about/about-3.jpg';
import aboutLarge3 from './assets/about/about-huge-3.jpg';
import about32x from './assets/about/about-3@2x.jpg';

import aboutAndrew1 from './assets/aboutAndrew/about1.jpg';
import aboutAndrew2 from './assets/aboutAndrew/about2.jpg';
import exterior1 from './assets/exteriors/exterior-1.jpg';
import exterior12x from './assets/exteriors/exterior-1@2x.jpg';
import exterior2 from './assets/exteriors/exterior-2.jpg';
import exterior22x from './assets/exteriors/exterior-2@2x.jpg';

import flagrant21 from './assets/interiors/flagrant21.jpg';
import flagrant22 from './assets/interiors/flagrant22.jpg';
import flagrant23 from './assets/interiors/flagrant23.jpg';
import brilliant1 from './assets/interiors/Brilliant1.jpg';
import brilliant2 from './assets/interiors/Brilliant2.jpg';
import brilliant3 from './assets/interiors/Brilliant3.jpg';

import interior1 from './assets/interiors/interior-1.jpg';
import interior2 from './assets/interiors/interior-2.jpg';
import interior22x from './assets/interiors/interior-2@2x.jpg';

import moreInfo1 from './assets/moreInfo/moreinfo1.jpg';
import moreInfo2 from './assets/moreInfo/moreinfo2.jpg';
import moreInfo3 from './assets/moreInfo/moreinfo4.jpg';

import surrounding1 from './assets/surroundings/surroundings-1.jpg';
import surrounding12x from './assets/surroundings/surroundings-1@2x.jpg';
import surrounding2 from './assets/surroundings/surroundings-2.jpg';
import surrounding22x from './assets/surroundings/surroundings-2@2x.jpg';
import surrounding3 from './assets/surroundings/surroundings-3.jpg';
import surrounding32x from './assets/surroundings/surroundings-3@2x.jpg';

import gallery1 from './assets/gallery/gallery-1.jpg';
import gallery2 from './assets/gallery/gallery-2.jpg';
import gallery3 from './assets/gallery/gallery-3.jpg';
import gallery4 from './assets/gallery/gallery-4.jpg';
import gallery5 from './assets/gallery/gallery-5.jpg';
import gallery6 from './assets/gallery/gallery-6.jpg';
import gallery7 from './assets/gallery/gallery-7.jpg';
import gallery8 from './assets/gallery/gallery-8.jpg';
import gallery9 from './assets/gallery/gallery-9.jpg';
import gallery10 from './assets/gallery/gallery-10.jpg';
import gallery11 from './assets/gallery/gallery-11.jpg';
import gallery12 from './assets/gallery/gallery-12.jpg';
import gallery13 from './assets/gallery/gallery-13.jpg';
import gallery14 from './assets/gallery/gallery-14.jpg';
import gallery15 from './assets/gallery/gallery-15.jpg';
import gallery1Thumbnail from './assets/gallery/thumbnails/gallery-1.jpg';
import gallery12xThumbnail from './assets/gallery/thumbnails/gallery-1@2x.jpg';
import gallery2Thumbnail from './assets/gallery/thumbnails/gallery-2.jpg';
import gallery22xThumbnail from './assets/gallery/thumbnails/gallery-2@2x.jpg';
import gallery3Thumbnail from './assets/gallery/thumbnails/gallery-3.jpg';
import gallery32xThumbnail from './assets/gallery/thumbnails/gallery-3@2x.jpg';
import gallery4Thumbnail from './assets/gallery/thumbnails/gallery-4.jpg';
import gallery42xThumbnail from './assets/gallery/thumbnails/gallery-4@2x.jpg';
import gallery5Thumbnail from './assets/gallery/thumbnails/gallery-5.jpg';
import gallery52xThumbnail from './assets/gallery/thumbnails/gallery-5@2x.jpg';
import gallery6Thumbnail from './assets/gallery/thumbnails/gallery-6.jpg';
import gallery62xThumbnail from './assets/gallery/thumbnails/gallery-6@2x.jpg';
import gallery7Thumbnail from './assets/gallery/thumbnails/gallery-7.jpg';
import gallery72xThumbnail from './assets/gallery/thumbnails/gallery-7@2x.jpg';
import gallery8Thumbnail from './assets/gallery/thumbnails/gallery-8.jpg';
import gallery82xThumbnail from './assets/gallery/thumbnails/gallery-8@2x.jpg';
import gallery9Thumbnail from './assets/gallery/thumbnails/gallery-9.jpg';
import gallery92xThumbnail from './assets/gallery/thumbnails/gallery-9@2x.jpg';
import gallery10Thumbnail from './assets/gallery/thumbnails/gallery-10.jpg';
import gallery102xThumbnail from './assets/gallery/thumbnails/gallery-10@2x.jpg';
import gallery11Thumbnail from './assets/gallery/thumbnails/gallery-11.jpg';
import gallery112xThumbnail from './assets/gallery/thumbnails/gallery-11@2x.jpg';
import gallery12Thumbnail from './assets/gallery/thumbnails/gallery-12.jpg';
import gallery122xThumbnail from './assets/gallery/thumbnails/gallery-12@2x.jpg';
import gallery13Thumbnail from './assets/gallery/thumbnails/gallery-13.jpg';
import gallery132xThumbnail from './assets/gallery/thumbnails/gallery-13@2x.jpg';
import gallery14Thumbnail from './assets/gallery/thumbnails/gallery-14.jpg';
import gallery142xThumbnail from './assets/gallery/thumbnails/gallery-14@2x.jpg';
import gallery15Thumbnail from './assets/gallery/thumbnails/gallery-15.jpg';
import gallery152xThumbnail from './assets/gallery/thumbnails/gallery-15@2x.jpg';

import event1 from './assets/upcoming-events/upcoming1.png';
import event12x from './assets/upcoming-events/upcoming1@2x.png';
import event2 from './assets/upcoming-events/upcoming2.png';
import event22x from './assets/upcoming-events/upcoming2@2x.png';
import event3 from './assets/upcoming-events/upcoming3.png';
import event32x from './assets/upcoming-events/upcoming3@2x.png';

import contactAndrew from './assets/contactAndrew.jpg';
import contactImg from './assets/contact.jpg';
import contactImg2x from './assets/contact@2x.jpg';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default {
  title: 'Andrew Schulz',
  navbar: {
    links: [
      {
        to: '',
        'data-to': '',
        label: 'Home',
      },
      {
        to: 'events',
        'data-to': 'events',
        label: 'Events',
      },
      {
        to: 'about',
        'data-to': 'about',
        label: 'About',
      },
      {
        to: 'podcasts',
        'data-to': 'podcasts',
        label: 'Podcasts',
      },
      {
        to: 'content',
        'data-to': 'content',
        label: 'More',
      },
      {
        to: 'contact',
        'data-to': 'contact',
        label: 'Contact',
      },
    ],
    actions: [
      {
        href: '#',
        label: 'Get Tickets',
      },
    ],
  },
  welcome: {
    background: {
      src: background,
      srcSet: `${background} 1x, ${background2x} 2x`,
      alt: 'Andrew Schulz',
    },
    title: 'Andrew',
    price: 'Schulz',
    features: [
      // {
      //   IconProps: {
      //     icon: WebGrid,
      //   },
      //   title: '5 800 sq. ft.',
      // },
      // {
      //   IconProps: {
      //     icon: BedDouble,
      //   },
      //   title: '7 bedrooms',
      // },
      // {
      //   IconProps: {
      //     icon: Bath,
      //   },
      //   title: '4 bathrooms',
      // },
      // {
      //   IconProps: {
      //     icon: CarSideview,
      //   },
      //   title: '2 cars garage',
      // },
    ],
    cta: {
      to: 'about',
      children: 'View Tour',
    },
  },
  about: {
    title: 'We introduce you a beautiful and bright and sunny house designed by Leonardo Piazzo',
    text:
      'Integer vulputate turpis nisl, non auctor sapien accumsan semper. Praesent in pulvinar nisl. Nullam turpis sem, commodo vel congue accumsan, finibus ut nulla. Nunc a efficitur massa. Nulla viverra tincidunt felis, vel sodales metus maximus et. Suspendisse potenti. Donec tincidunt leo nisi, vitae rhoncus neque accumsan vitae.',
    gallery: [
      {
        source: aboutLarge1,
        ImgProps: {
          src: about1,
          srcSet: `${about1} 1x, ${about12x} 2x`,
        },
      },
      {
        source: aboutLarge2,
        ImgProps: {
          src: about2,
          srcSet: `${about2} 1x, ${about22x} 2x`,
        },
      },
      {
        source: aboutLarge3,
        ImgProps: {
          src: about3,
          srcSet: `${about3} 1x, ${about32x} 2x`,
        },
      },
    ],
  },
  location: {
    title: textToMultiline`Incredible location.\nSo close to all ammenities.`,
    text:
      'Integer vulputate turpis nisl, non auctor sapien accumsan semper. Praesent in pulvinar nisl. Nullam turpis sem, commodo vel congue accumsan, finibus ut nulla. Nunc a efficitur massa. Nulla viverra tincidunt felis, vel sodales metus maximus et. Suspendisse potenti. Donec tincidunt leo nisi, vitae rhoncus neque accumsan vitae.',
    counters: [
      {
        IconProps: {
          icon: Plane,
        },
        title: 'Airport',
        counter: {
          value: 67,
          unit: 'km',
        },
      },
      {
        IconProps: {
          icon: TrainTunnel,
        },
        title: 'Train station',
        counter: {
          value: 2,
          unit: 'km',
        },
      },
      {
        IconProps: {
          icon: ShoppingBag,
        },
        title: 'Shopping Centre',
        counter: {
          value: 12,
          unit: 'km',
        },
      },
      {
        IconProps: {
          icon: Bus,
        },
        title: 'Bus Stop',
        counter: {
          value: 2,
          unit: 'km',
        },
      },
      {
        IconProps: {
          icon: Metro,
        },
        title: 'Subway',
        counter: {
          value: 18,
          unit: 'km',
        },
      },
      {
        IconProps: {
          icon: Beach,
        },
        title: 'Beach',
        counter: {
          value: 800,
          unit: 'm',
        },
      },
      {
        IconProps: {
          icon: Trees,
        },
        title: 'Park',
        counter: {
          value: 1,
          unit: 'km',
        },
      },
      {
        IconProps: {
          icon: Flag,
        },
        title: 'Golf course',
        counter: {
          value: 3,
          unit: 'km',
        },
      },
    ],
    map: {
      cords: {
        lat: 37.550705,
        lng: -121.980674,
      },
    },
  },
  exterior: {
    sections: [
      {
        ImgProps: {
          src: aboutAndrew2,
          srcSet: `${aboutAndrew2} 1x, ${aboutAndrew2} 2x`,
        },
        title: 'The Man behind the Mic',
        text:
          'Andrew is stand-up comedian born and raised in New York City. His career began with TV appearances in Guy Code, Benders and Sneaky Pete. Now, he is a host of Flagrant 2 and The Brilliant Idiots podcast. He recently released his Netflix special "Schulz Saves America".',
      },
      {
        ImgProps: {
          src: aboutAndrew1,
          srcSet: `${aboutAndrew1} 1x, ${aboutAndrew1} 2x`,
        },
        title: 'Changing the Game in Stand Up',
        text:
          'Deciding to release clips from his act directly to YouTube instead of selling to a media company was a crazy idea at the time, but it paid off immensely. Andrew was able to curate a large internet following on his own, which then gave him the power to make his own decisions when releasing specials.',
      },
    ],
  },
  interior: {
    sections: [
      {
        slides: [
          {
            src: flagrant21,
            srcSet: `${flagrant21} 1x, ${flagrant21} 2x`,
          },
          {
            src: flagrant22,
            srcSet: `${flagrant22} 1x, ${flagrant22} 2x`,
          },
          {
            src: flagrant23,
            srcSet: `${flagrant23} 1x, ${flagrant23} 2x`,
          },
        ],
        title: 'Biggest Comedy patreon in the world',
        text:
          'Vestibulum sed elit id mauris tempus feugiat vel vitae neque. Integer eleifend est orci, quis convallis sem malesuada id. Phasellus fringilla urna vitae lobortis auctor. Vivamus sed nisi non nulla tincidunt ultricies a non ex. Praesent commodo dui enim, at volutpat lectus aliquet ut.',
      },
      {
        slides: [
          {
            src: brilliant1,
            srcSet: `${brilliant1} 1x, ${brilliant1} 2x`,
          },
          {
            src: brilliant2,
            srcSet: `${brilliant2} 1x, ${brilliant2} 2x`,
          },
          {
            src: brilliant3,
            srcSet: `${brilliant3} 1x, ${brilliant3} 2x`,
          },
        ],
        title: 'Co-host of the Brilliant Idiots Podcast',
        text:
          'Vestibulum sed elit id mauris tempus feugiat vel vitae neque. Integer eleifend est orci, quis convallis sem malesuada id. Phasellus fringilla urna vitae lobortis auctor. Vivamus sed nisi non nulla tincidunt ultricies a non ex. Praesent commodo dui enim, at volutpat lectus aliquet ut.',
      },
    ],
  },
  surroundings: {
    sections: [
      {
        ImgProps: {
          src: moreInfo1,
          srcSet: `${moreInfo1} 1x, ${moreInfo1} 2x`,
        },
        title: "Fashun is Andrew's clothing line which drops in limited quantities",
        text:
          'Curabitur porttitor ligula ut aliquam egestas. Fusce orci ipsum, gravida vel dapibus nec, interdum nec dui. Vestibulum sed porttitor est. Nullam sollicitudin, odio vel mattis bibendum, ligula nisl faucibus libero, vitae tempus dui orci in purus.',
        cta: {
          as: 'a',
          label: 'Learn more',
          href: '#',
        },
      },
      {
        ImgProps: {
          src: moreInfo3,
          srcSet: `${moreInfo3} 1x, ${moreInfo3} 2x`,
        },
        title: 'Along with Jelly Roll, Andrew recently released a music video',
        text:
          'Curabitur porttitor ligula ut aliquam egestas. Fusce orci ipsum, gravida vel dapibus nec, interdum nec dui. Vestibulum sed porttitor est. Nullam sollicitudin, odio vel mattis bibendum, ligula nisl faucibus libero, vitae tempus dui orci in purus.',
        cta: {
          as: 'a',
          label: 'Learn more',
          href: '#',
        },
      },
      {
        ImgProps: {
          src: moreInfo2,
          srcSet: `${moreInfo2} 1x, ${moreInfo2} 2x`,
        },
        title: 'Andrew has appeared as a guest on the Joe Rogan Experience',
        text:
          'Curabitur porttitor ligula ut aliquam egestas. Fusce orci ipsum, gravida vel dapibus nec, interdum nec dui. Vestibulum sed porttitor est. Nullam sollicitudin, odio vel mattis bibendum, ligula nisl faucibus libero, vitae tempus dui orci in purus.',
        cta: {
          as: 'a',
          label: 'Learn more',
          href: '#',
        },
      },
    ],
  },
  gallery: {
    photos: [
      {
        source: gallery1,
        ImgProps: {
          src: gallery1Thumbnail,
          srcSet: `${gallery1Thumbnail} 1x, ${gallery12xThumbnail} 2x`,
        },
      },
      {
        source: gallery2,
        ImgProps: {
          src: gallery2Thumbnail,
          srcSet: `${gallery2Thumbnail} 1x, ${gallery22xThumbnail} 2x`,
        },
      },
      {
        source: gallery3,
        ImgProps: {
          src: gallery3Thumbnail,
          srcSet: `${gallery3Thumbnail} 1x, ${gallery32xThumbnail} 2x`,
        },
      },
      {
        source: gallery4,
        ImgProps: {
          src: gallery4Thumbnail,
          srcSet: `${gallery4Thumbnail} 1x, ${gallery42xThumbnail} 2x`,
        },
      },
      {
        source: gallery5,
        ImgProps: {
          src: gallery5Thumbnail,
          srcSet: `${gallery5Thumbnail} 1x, ${gallery52xThumbnail} 2x`,
        },
      },
      {
        source: gallery6,
        ImgProps: {
          src: gallery6Thumbnail,
          srcSet: `${gallery6Thumbnail} 1x, ${gallery62xThumbnail} 2x`,
        },
      },
      {
        source: gallery7,
        ImgProps: {
          src: gallery7Thumbnail,
          srcSet: `${gallery7Thumbnail} 1x, ${gallery72xThumbnail} 2x`,
        },
      },
      {
        source: gallery8,
        ImgProps: {
          src: gallery8Thumbnail,
          srcSet: `${gallery8Thumbnail} 1x, ${gallery82xThumbnail} 2x`,
        },
      },
      {
        source: gallery9,
        ImgProps: {
          src: gallery9Thumbnail,
          srcSet: `${gallery9Thumbnail} 1x, ${gallery92xThumbnail} 2x`,
        },
      },
      {
        source: gallery10,
        ImgProps: {
          src: gallery10Thumbnail,
          srcSet: `${gallery10Thumbnail} 1x, ${gallery102xThumbnail} 2x`,
        },
      },
      {
        source: gallery11,
        ImgProps: {
          src: gallery11Thumbnail,
          srcSet: `${gallery11Thumbnail} 1x, ${gallery112xThumbnail} 2x`,
        },
      },
      {
        source: gallery12,
        ImgProps: {
          src: gallery12Thumbnail,
          srcSet: `${gallery12Thumbnail} 1x, ${gallery122xThumbnail} 2x`,
        },
      },
      {
        source: gallery13,
        ImgProps: {
          src: gallery13Thumbnail,
          srcSet: `${gallery13Thumbnail} 1x, ${gallery132xThumbnail} 2x`,
        },
      },
      {
        source: gallery14,
        ImgProps: {
          src: gallery14Thumbnail,
          srcSet: `${gallery14Thumbnail} 1x, ${gallery142xThumbnail} 2x`,
        },
      },
      {
        source: gallery15,
        ImgProps: {
          src: gallery15Thumbnail,
          srcSet: `${gallery15Thumbnail} 1x, ${gallery152xThumbnail} 2x`,
        },
      },
    ],
  },
  contact: {
    title: 'Contact',
    thumbnail: {
      src: contactAndrew,
      srcSet: `${contactAndrew} 1x, ${contactAndrew} 2x`,
    },
    details: {
      title: 'Contact Andrew for booking information',
      text:
        'Andrew is availible for stand-up comedy shows, book for 15, 30, 45, or hour long sets. Andrew is also availible for speaking events, please contact for all inquiries.',
      info: [
        {
          icon: User,
          text: 'Andrew Schulz',
        },
        {
          icon: MapMarker,
          text: textToMultiline`693 Woodland St.\nMiami, FL 94110`,
        },
        {
          icon: Phone,
          text: '+1 234 567 890',
        },
        {
          icon: Envelope,
          text: 'bookings@theandrewschulz.com',
        },
      ],
      socialLinks: [
        {
          icon: Twitter,
          href: 'https://twitter.com/andrewschulz',
          title: 'Twitter',
        },
        {
          icon: Instagram,
          href: 'https://www.instagram.com/andrewschulz/',
          title: 'Instagram',
        },
        {
          icon: Youtube,
          href: 'https://www.youtube.com/channel/UCLZc32yrTEMxH1ZO-6fKOzA',
          title: 'Instagram',
        },
      ],
    },
    form: {
      title: 'Send me a message and I will get back to you',
      sendButtonText: 'Send',
      validationSchema: Yup.object({
        firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
        email: Yup.string().email('Must be an email').required('Required'),
        message: Yup.string().required('Required'),
      }),
      // eslint-disable-next-line no-undef
      onSubmit: (values, { setSubmitting, resetForm }) => {
        fetch('/?no-cache=1', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'contact',
            ...values,
          }),
        })
          .then(() => {
            alert('Success!');
            setSubmitting(false);
            resetForm({});
          })
          .catch(error => {
            alert('Error: Please Try Again!');
            setSubmitting(false);
          });
      },
      fields: [
        {
          name: 'firstName',
          label: 'First name',
          placeholder: 'ie. John Doe',
          initialValue: '',
          prefix: <Icon icon={User} />,
        },
        {
          name: 'phone',
          label: 'Phone',
          placeholder: 'ie. 555-678-123',
          initialValue: '',
          prefix: <Icon icon={Phone} />,
        },
        {
          name: 'email',
          label: 'E-mail',
          placeholder: 'ie. john.doe@email.com',
          type: 'email',
          initialValue: '',
          prefix: <Icon icon={Envelope} />,
        },
        {
          name: 'message',
          label: 'Message',
          placeholder: 'Start typing here...',
          multiline: true,
          initialValue: '',
        },
      ],
    },
  },
  upcomingEvents: {
    title: 'Upcoming Events',
    events: [
      {
        ImgProps: {
          src: event1,
          srcSet: `${event1} 1x, ${event12x} 2x`,
        },
        LinkProps: {
          as: 'a',
          href: 'https://www.palmbeachimprov.com/events/42955',
        },
        title: 'West Palm Beach, FL',
        price: 'April 23 & 24',
        features: [
          {
            IconProps: {
              icon: Ticket,
            },
            title: 'Sold Out',
          },
          {
            IconProps: {
              icon: Building,
            },
            title: 'Improv',
          },
        ],
      },
      {
        ImgProps: {
          src: event2,
          srcSet: `${event2} 1x, ${event22x} 2x`,
        },
        LinkProps: {
          as: 'a',
          href: 'https://phoenix.standuplive.com/events/43028',
        },
        title: 'Phoenix, AZ',
        price: 'May 7 & 8',
        features: [
          {
            IconProps: {
              icon: Ticket,
            },
            title: 'Availible',
          },
          {
            IconProps: {
              icon: Building,
            },
            title: 'Stand Up Live',
          },
        ],
      },
      {
        ImgProps: {
          src: event3,
          srcSet: `${event3} 1x, ${event32x} 2x`,
        },
        LinkProps: {
          as: 'a',
          href:
            'https://vb.funnybone.com/ShowDetails/e1965da5-8bac-43cc-a528-9084827bfd23/eaf5e248-1faf-437c-8832-2fb72fdee936/ANDREW_SCHULZ/Virginia_Beach_Funny_Bone',
        },
        title: 'Virginia Beach, VA',
        price: 'May 28 & 29',
        features: [
          {
            IconProps: {
              icon: Ticket,
            },
            title: 'Sold Out',
          },
          {
            IconProps: {
              icon: Building,
            },
            title: 'Funny Bone',
          },
        ],
      },
    ],
  },
  footer: {
    title: 'About Andrew Schulz',
    text: textToMultiline`Cras sollicitudin erat sit amet egestas consequat. Quisque in purus sem. Integer condimentum nulla vel velit pretium, eget fringilla enim sodales. Nullam sit amet leo vitae mi laoreet varius eu vel est.`,
    cta: {
      as: 'a',
      label: 'Learn more',
      href:
        'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
    },
    features: [
      {
        IconProps: {
          icon: ThumbsUp,
        },
        title: 'Satisfaction guarantee',
        text:
          'Proin at convallis felis, sit amet varius velit. Aenean placerat turpis a libero feugiat, at iaculis elit faucibus.',
      },
      {
        IconProps: {
          icon: Award,
        },
        title: 'Award winning comedian',
        text:
          'Proin at convallis felis, sit amet varius velit. Aenean placerat turpis a libero feugiat, at iaculis elit faucibus.',
      },
    ],
    socialLinks: [
      {
        icon: Twitter,
        href: 'https://twitter.com/andrewschulz',
        title: 'Twitter',
      },
      {
        icon: Instagram,
        href: 'https://www.instagram.com/andrewschulz/',
        title: 'Instagram',
      },
      {
        icon: Youtube,
        href: 'https://www.youtube.com/channel/UCLZc32yrTEMxH1ZO-6fKOzA',
        title: 'YouTube',
      },
    ],
  },
  copyright: '© 2021 Andrew Schulz',
};
