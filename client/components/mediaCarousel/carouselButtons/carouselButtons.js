import React from 'react';
import PropTypes from 'prop-types';

const CarouselButton = ({ title, clickHandler }) => {
  return (
    <button onClick={clickHandler}>{title}</button>
  );
};

MediaCarousel.propTypes = {
  title: '<',
  clickHandler: (e) => console.log(e),
};

MediaCarousel.defaultProps = {
  mediaList: [
    {
      id: 1000,
      link: 'https://www.youtube.com/embed/2BBINlk3vv0',
      thumbnail: 'https://i.ytimg.com/vi/0uFDfQu7D5k/default.jpg',
      game_id: 100,
    },
    {
      id: 1000,
      link: 'https://www.youtube.com/embed/2BBINlk3vv0',
      thumbnail: 'https://i.ytimg.com/vi/0uFDfQu7D5k/default.jpg',
      game_id: 100,
    },
  ],
};

export default MediaCarousel;
