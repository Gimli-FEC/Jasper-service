import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({ url, key }) => (
  <iframe src={url} height="630" width="1120" title={key} />
);

VideoPlayer.propTypes = {
  url: PropTypes.string,
  key: PropTypes.number,
};

VideoPlayer.defaultProps = {
  url: 'https://www.youtube.com/embed/2LNOT2TYcmM',
  key: 1,
};

export default VideoPlayer;
