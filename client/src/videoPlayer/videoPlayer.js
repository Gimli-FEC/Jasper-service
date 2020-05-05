import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({ url, id }) => (
  <iframe src={url} height="630" width="1120" title={id} />
);

VideoPlayer.propTypes = {
  url: PropTypes.string,
  id: PropTypes.number,
};

VideoPlayer.defaultProps = {
  url: 'https://www.youtube.com/embed/2LNOT2TYcmM',
  id: 1,
};

export default VideoPlayer;
