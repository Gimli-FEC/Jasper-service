import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const Iframe = styled.iframe`
  animation: ${fadeIn} 2s;
`;

const VideoPlayer = ({ link, id }) =>  {
  return (
    <Iframe src={link} height="630" width="1120" title={id} frameborder="0" />
  );
}
VideoPlayer.propTypes = {
  link: PropTypes.string,
  id: PropTypes.number,
};

VideoPlayer.defaultProps = {
  link: 'https://www.youtube.com/embed/2LNOT2TYcmM',
  id: 1,
};

export default VideoPlayer;
