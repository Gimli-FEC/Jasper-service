import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import VideoPlayer from '../videoPlayer/videoPlayer';
import Img from '../img/img';
import Details from '../details/details';
import TabButton from '../tabButton/tabButton';
import MediaCarousel from '../mediaCarousel/mediaCarousel';
import styled from 'styled-components';



const MediaDiv = styled.div`
  width: 1120px;
  height: 729;
  margin: 0 auto;
`;

const TabsDiv = styled.div`
  margin: 0 auto;
  width: 380px;
  height: 46.4px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`;

const Hr = styled.hr`
  margin: 0 0 1px 0;
  padding: 0;
  height: 1px;
  background-color: #cccccc;
  border: none;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: {
        screenshots: [
          {
            id: 999,
            link: "https://fecpictures.s3.us-east-2.amazonaws.com/pics/99.jpg",
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
        ],
        details: {
          id: 999,
          details: 'Escape to a deserted island and create your own paradise as you explore, create, and customize in the Animal Crossing: New Horizons game. Your island getaway has a wealth of natural resources that can be used to craft everything from tools to creature comforts. You can hunt down insects at the crack of dawn, decorate your paradise throughout the day, or enjoy sunset on the beach while fishing in the ocean. The time of day and season match real life, so each day on your island is a chance to check in and find new surprises all year round.Beloved franchise Animal Crossing gets ready for its Nintendo Switch debut! If the hustle and bustle of modern life’s got you down, Tom Nook has a new business venture up his sleeve that he knows you’ll adore: the Nook Inc. Deserted Island Getaway Package! Sure, you’ve crossed paths with colorful characters near and far. Had a grand time as one of the city folk. May’ve even turned over a new leaf and dedicated yourself to public service! But deep down, isn’t there a part of you that longs for…freedom? Then perhaps a long walk on the beach of a deserted island, where a rich wealth of untouched nature awaits, is just what the doctor ordered!Peaceful creativity and charm await as you roll up your sleeves and make your new life whatever you want it to be. Collect resources and craft everything from creature comforts to handy tools. Embrace your green thumb as you interact with flowers and trees in new ways. Set up a homestead where the rules of what goes indoors and out no longer apply. Make friends with new arrivals, enjoy the seasons, pole-vault across rivers as you explore, and more!This new addition to the Animal Crossing series launches March 20 2020, exclusively for the Nintendo Switch system.',
        },
      },
      currentlyDisplaying: 'VIDEOS',
      featuredMedia: {
        id: 999,
        link: 'https://www.youtube.com/embed/GErG9femMQk',
        thumbnail: 'https://i.ytimg.com/vi/GErG9femMQk/default.jpg',
        game_id: 999,
      }
    }
  }

  componentDidMount() {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get('id');
    if (id) {
      $.ajax(`http://localhost:3002/games/${id}`, {
        method: 'GET',
        success: (results) => {
          this.setState({
            dummyData: results,
            featuredMedia: results.videos[0],
          })
        },
        error: (err) => console.error(err),
      });
    }
  };

  handleTabButtonClick(e) {
    const text = e.target.innerText;
    if(this.state.currentlyDisplaying === text) {
      return;
    }
    this.setState({
      currentlyDisplaying: text,
    })

    if (text === 'SCREENSHOTS') {
      this.setState({
        featuredMedia: this.state.dummyData.screenshots[0],
      })
    } else {
      this.setState({
        featuredMedia: this.state.dummyData.videos[0],
      })
    }
  }

  handleImageClick(e) {
    console.log(e.target)
    const targetId = Number(e.target.attributes.id.value);
    if (this.state.currentlyDisplaying === 'SCREENSHOTS') {
      for (let i = 0; i < this.state.dummyData.screenshots.length; i++) {
        if (this.state.dummyData.screenshots[i].id === targetId) {
          this.setState({
            featuredMedia: this.state.dummyData.screenshots[i],
          })
          return;
        }
      }
      alert('something went wrong');
    } else {
      for (let i = 0; i < this.state.dummyData.videos.length; i++) {
        if (this.state.dummyData.videos[i].id === targetId) {
          this.setState({
            featuredMedia: this.state.dummyData.videos[i],
          })
          return;
        }
      }
      alert('something went wrong');
    }
  }


  render() {
    return (
      <>
        <Details text={this.state.dummyData.details.details} id={this.state.dummyData.details.id} />
        <Hr />
        <TabsDiv>
          <TabButton title='VIDEOS' handleClick={this.handleTabButtonClick.bind(this)} featured={this.state.currentlyDisplaying === 'VIDEOS'}/>
          <TabButton title='SCREENSHOTS' handleClick={this.handleTabButtonClick.bind(this)} featured={this.state.currentlyDisplaying === 'SCREENSHOTS'} />
        </TabsDiv>
        <MediaDiv>
          {
            this.state.currentlyDisplaying === 'SCREENSHOTS'
            ?
            <Img link={this.state.featuredMedia.link} id={this.state.featuredMedia.id} />
            :
            <VideoPlayer link={this.state.featuredMedia.link} id={this.state.featuredMedia.id} />
          }
          <MediaCarousel mediaList={this.state.currentlyDisplaying === 'SCREENSHOTS' ? this.state.dummyData.screenshots : this.state.dummyData.videos} imageClickHandler={this.handleImageClick.bind(this)} />
        </MediaDiv>
      </>
    );
  };
};

export default App;
