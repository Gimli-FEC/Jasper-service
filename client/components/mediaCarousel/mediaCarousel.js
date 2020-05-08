import React from 'react';
import PropTypes from 'prop-types';
import CarouselButton from './carouselButtons/carouselButton';

const MediaCarousel = ({ mediaList }) => {

  const handleCarouselButtonClick = (e) => {
    console.log(e.target.innerText)
  }

  return (
    <div>
      <CarouselButton title={'<'} handleClick={handleCarouselButtonClick} />
      {mediaList.map(media => (
        <img src={media.thumbnail || media.link} key={media.id} alt='dummy data' width={140} height={79}  />
      ))}
      <CarouselButton title={'>'} handleClick={handleCarouselButtonClick} />
    </div>
  );
};

MediaCarousel.propTypes = {
  mediaList: PropTypes.array,
  linkType: PropTypes.string,
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
