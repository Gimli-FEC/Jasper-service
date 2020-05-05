import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import VideoPlayer from '../videoPlayer/videoPlayer';


const App = () => {
  const [dummyData, setDummyData] = useState({
    screenshots: [
      {
        id: 1,
        link: 'https://fecpictures.s3.us-east-2.amazonaws.com/pics/100.jpg',
        game_id: 1,
      },
    ],
    videos: [
      {
        id: 1,
        link: 'https://www.youtube.com/embed/2BBINlk3vv0',
        game_id: 1,
      },
    ],
    details: {
      id: 1,
      details: 'Praesentium dicta et ut quisquam. Dolor mollitia omnis accusamus minus distinctio accusamus. Velit consequatur quos. Sed ab magnam amet. Dolorem omnis illo. Praesentium dolore dolores molestiae eos architecto rerum consequatur maiores qui. Dicta similique ab dignissimos veritatis eos distinctio iusto itaque. Aliquid natus hic. Fugiat nisi nam eligendi molestiae quasi cumque. Soluta esse in non aut quia.',
    },
  });
  useEffect(() => {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get('id');
    $.ajax(`/games/${id}`, {
      method: 'GET',
      success: (results) => {
        setDummyData(results);
        console.log(results);
      },
      error: (err) => console.error(err),
    });
  }, [dummyData]);

  return (
    <>
      {dummyData.details.details}
      {dummyData.screenshots.map(({ link, id }) => <img alt="dummy data" src={link} key={id} />)}
      {dummyData.videos.map(({ link, id }) => (
        <VideoPlayer url={link} id={id} key={id} />
      ))}
    </>
  );
};

export default App;
