import React from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes} from 'styled-components'

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const MediaImg = styled.iframe`
  animation: ${fadeIn} 2s;
`;

const Img = ({ link, id }) => (
  <MediaImg src={link} key={id} alt='dummy data'  width='1120' height='630' />
);

Img.propTypes = {
  link: PropTypes.string,
  id: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

Img.defaultProps = {
  link: 'https://fecpictures.s3.us-east-2.amazonaws.com/pics/100.jpg',
  id: 1,
  width: 1120,
  height: 630,
};

export default Img;
