import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import VideoPlayer from './components/videoPlayer.jsx';


const App = props => {
  const [ dummyData, setDummyData ] = useState({
    screenshots: [
      'https://fecpictures.s3.us-east-2.amazonaws.com/pics/100.jpg'
    ],
    videos: [
      'https://www.youtube.com/embed/2BBINlk3vv0 '
    ]
  });
  useEffect(() => {
    $.ajax('/games/20', {
      method: 'GET',
      success: results => {
        setDummyData(results);
      },
      error: err => console.error(err)
    })
  }, { dummyData })

  return (
    <React.Fragment>
      {dummyData.details}
      {dummyData.screenshots.map(url => <img src={url}/>)}
      {dummyData.videos.map((url, key) => (
        <VideoPlayer url={url} key={key}/>
        )
      )}
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));