import React, { useState, useEffect } from 'react';

const VideoPlayer = props => {
  return (
    <iframe src={props.url} height="630" width="1120">

    </iframe>
  )
}

export default VideoPlayer;