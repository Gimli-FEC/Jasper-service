import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import VideoPlayer from '../videoPlayer/videoPlayer';
import Img from '../img/img';
import Details from '../details/details';
import TabButton from '../tabButton/tabButton';
import MediaCarousel from '../mediaCarousel/mediaCarousel';


const App = () => {
  const [dummyData, setDummyData] = useState({
    screenshots: [
      {
        id: 999,
        link: "https://fecpictures.s3.us-east-2.amazonaws.com/pics/99.jpg",
        game_id: 999
      },
      {
        id: 999,
        link: "https://fecpictures.s3.us-east-2.amazonaws.com/pics/21.jpg",
        game_id: 99
      },
      {
        id: 999,
        link: "https://fecpictures.s3.us-east-2.amazonaws.com/pics/91.jpg",
        game_id: 999,
      },
      {
        id: 999,
        link: "https://fecpictures.s3.us-east-2.amazonaws.com/pics/92.jpg",
        game_id: 999,
      },
    ],
    videos: [
      {
        id: 999,
        link: 'https://www.youtube.com/embed/GErG9femMQk',
        thumbnail: 'https://i.ytimg.com/vi/GErG9femMQk/default.jpg',
        game_id: 999,
      },
      {
        id: 999,
        link: "https://www.youtube.com/embed/M8-49EaVE00",
        thumbnail: "https://i.ytimg.com/vi/M8-49EaVE00/default.jpg",
        game_id: 999,
      }
    ],
    details: {
      id: 999,
      details: 'Escape to a deserted island and create your own paradise as you explore, create, and customize in the Animal Crossing: New Horizons game. Your island getaway has a wealth of natural resources that can be used to craft everything from tools to creature comforts. You can hunt down insects at the crack of dawn, decorate your paradise throughout the day, or enjoy sunset on the beach while fishing in the ocean. The time of day and season match real life, so each day on your island is a chance to check in and find new surprises all year round.Beloved franchise Animal Crossing gets ready for its Nintendo Switch debut! If the hustle and bustle of modern life’s got you down, Tom Nook has a new business venture up his sleeve that he knows you’ll adore: the Nook Inc. Deserted Island Getaway Package! Sure, you’ve crossed paths with colorful characters near and far. Had a grand time as one of the city folk. May’ve even turned over a new leaf and dedicated yourself to public service! But deep down, isn’t there a part of you that longs for…freedom? Then perhaps a long walk on the beach of a deserted island, where a rich wealth of untouched nature awaits, is just what the doctor ordered!Peaceful creativity and charm await as you roll up your sleeves and make your new life whatever you want it to be. Collect resources and craft everything from creature comforts to handy tools. Embrace your green thumb as you interact with flowers and trees in new ways. Set up a homestead where the rules of what goes indoors and out no longer apply. Make friends with new arrivals, enjoy the seasons, pole-vault across rivers as you explore, and more!This new addition to the Animal Crossing series launches March 20 2020, exclusively for the Nintendo Switch system.',
    },
  });

  const [currentlyDisplaying, setCurrentDisplay] = useState('VIDEOS');

  const [featuredMedia, setFeaturedMedia] = useState(dummyData.videos[0]);

  useEffect(() => {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get('id');
    if (id) {
      $.ajax(`/games/${id}`, {
        method: 'GET',
        success: (results) => {
          setDummyData(results);
          setFeaturedMedia(results.videos[0]);
        },
        error: (err) => console.error(err),
      });
    }
  }, {dummyData});

  const handleTabButtonClick = (e) => {
    const text = e.target.innerText;
    if(currentlyDisplaying === text) {
      return;
    }
    setCurrentDisplay(text);
    text === 'SCREENSHOTS'
    ?
    setFeaturedMedia(dummyData.screenshots[0])
    :
    setFeaturedMedia(dummyData.videos[0])
  }

  const handleImageClick = (e) => {
    console.log(e);
  }


  return (
    <>
      <Details text={dummyData.details.details} id={dummyData.details.id} />
      <TabButton title='VIDEOS' handleClick={handleTabButtonClick} />
      <TabButton title='SCREENSHOTS' handleClick={handleTabButtonClick}/>
      {
        currentlyDisplaying === 'SCREENSHOTS'
        ?
        <Img link={featuredMedia.link} id={featuredMedia.id} />
        :
        <VideoPlayer link={featuredMedia.link} id={featuredMedia.id} />
      }
      <MediaCarousel mediaList={currentlyDisplaying === 'SCREENSHOTS' ? dummyData.screenshots : dummyData.videos} />
    </>
  );
};

export default App;
