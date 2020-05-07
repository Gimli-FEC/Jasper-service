import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({ link, id }) => (
  <iframe src={link} height="630" width="1120" title={id} />
);

VideoPlayer.propTypes = {
  link: PropTypes.string,
  id: PropTypes.number,
};

VideoPlayer.defaultProps = {
  link: 'https://www.youtube.com/embed/2LNOT2TYcmM',
  id: 1,
};

export default VideoPlayer;
