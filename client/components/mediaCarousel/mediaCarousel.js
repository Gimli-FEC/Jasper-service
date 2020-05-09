import React from 'react';
import PropTypes from 'prop-types';
import CarouselButton from './carouselButtons/carouselButton';

const MediaCarousel = ({ mediaList }) => {
  console.log(mediaList);
  const handleCarouselButtonClick = (e) => {
    console.log(e.target)
  }

  return (
    <div>
      <CarouselButton title={'<'} handleClick={handleCarouselButtonClick} left={true} />
      {mediaList.map(media => {
        console.log(media)
        if (media.id === 999) {
          return;
        }
        return (<img src={media.thumbnail || media.link} key={media.id} alt='dummy data' width={140} height={79}  />)
      })}
      <CarouselButton title={'>'} handleClick={handleCarouselButtonClick} left={false} />
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
