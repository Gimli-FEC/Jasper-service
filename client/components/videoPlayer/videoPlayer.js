import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const VideoPlayer = ({ link, id }) =>  {
  return (
    <iframe src={link} height="630" width="1120" title={id} frameborder="0" />
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
