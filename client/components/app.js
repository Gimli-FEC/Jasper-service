import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import VideoPlayer from './videoPlayer';
import Img from './img';
import Details from './details';
import TabButton from './tabButton';
import MediaCarousel from './mediaCarousel';
import styled from 'styled-components';
import BigMediaCarousel from './bigMediaCarousel';



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
      data: {data: 'none'},
      currentlyDisplaying: 'VIDEOS',
      featuredMedia: {},
    }
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleTabButtonClick = this.handleTabButtonClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get('id');
    $.ajax(`http://localhost:3002/games/${id || '1'}`, {
      method: 'GET',
      success: (results) => {
        console.log(results);
        this.setState({
          data: results,
          featuredMedia: results.videos[0],
        })
      },
      error: (err) => console.error(err),
    });
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
        featuredMedia: this.state.data.screenshots[0],
      })
    } else {
      this.setState({
        featuredMedia: this.state.data.videos[0],
      })
    }
  }


  handleButtonClick(e, left) {
    console.log(e.target)
    const targetId = Number(e.target.attributes.id.value);
    if (left) {
      if (this.state.currentlyDisplaying === 'VIDEOS') {
        console.log('videos', this.state.data.videos);
        let index;
        for (let i = 0; i < this.state.data.videos.length; i++) {
          if (this.state.data.videos[i].id === targetId) {
            index = i;
            break;
          }
        }
        if (index !== 0) {
          this.setState({
            featuredMedia: this.state.videos[index - 1],
          })
        } else {
          this.setState({
            featuredMedia: this.state.videos[this.state.videos.length - 1],
          })
        }
      } else {
        console.log('screenshots', this.state.data.screenshots);
        let index;
        for (let i = 0; i < this.state.data.screenshots.length; i++) {
          if (this.state.data.screenshots[i].id === targetId) {
            index = i;
            break;
          }
        }
        if (index !== 0) {
          this.setState({
            featuredMedia: this.state.data.screenshots[index - 1],
          })
        } else {
          this.setState({
            featuredMedia: this.state.data.screenshots[this.state.data.screenshots.length - 1],
          })
        }
      }
    } else {
      if (this.state.currentlyDisplaying === 'VIDEOS') {
        console.log('videos', this.state.data.videos);
        let index;
        for (let i = 0; i < this.state.data.videos.length; i++) {
          if (this.state.data.videos[i].id === targetId) {
            index = i;
            break;
          }
        }
        if (index !== this.state.data.videos.length) {
          this.setState({
            featuredMedia: this.state.data.videos[index + 1],
          })
        } else {
          this.setState({
            featuredMedia: this.state.data.videos[0],
          })
        }
      } else {
        console.log('screenshots', this.state.data.screenshots);
        let index;
        for (let i = 0; i < this.state.data.screenshots.length; i++) {
          if (this.state.data.screenshots[i].id === targetId) {
            index = i;
            break;
          }
        }
        if (index !== this.state.data.screenshots.length) {
          this.setState({
            featuredMedia: this.state.data.screenshots[index + 1],
          })
        } else {
          this.setState({
            featuredMedia: this.state.data.screenshots[0],
          })
        }
      }
    }
  }

  handleImageClick(e) {
    const targetId = Number(e.target.attributes.id.value);
    if (this.state.currentlyDisplaying === 'SCREENSHOTS') {
      for (let i = 0; i < this.state.data.screenshots.length; i++) {
        if (this.state.data.screenshots[i].id === targetId) {
          this.setState({
            featuredMedia: this.state.data.screenshots[i],
          })
          return;
        }
      }
      alert('something went wrong');
    } else {
      for (let i = 0; i < this.state.data.videos.length; i++) {
        if (this.state.data.videos[i].id === targetId) {
          this.setState({
            featuredMedia: this.state.data.videos[i],
          })
          return;
        }
      }
      alert('something went wrong');
    }
  }


  render() {
    console.log(this.state.data)
    if (this.state.data.data === 'none') {
      return <p>uh oh</p>
    }
    return (
      <>
        <Details text={this.state.data.details.details} id={this.state.data.details.id} />
        <Hr />
        <TabsDiv>
          <TabButton title='VIDEOS' handleClick={this.handleTabButtonClick} featured={this.state.currentlyDisplaying === 'VIDEOS'}/>
          <TabButton title='SCREENSHOTS' handleClick={this.handleTabButtonClick} featured={this.state.currentlyDisplaying === 'SCREENSHOTS'} />
        </TabsDiv>
        <MediaDiv>
          {/* {
            this.state.currentlyDisplaying === 'SCREENSHOTS'
            ?
            <Img link={this.state.featuredMedia.link} id={this.state.featuredMedia.id} />
            :
            <VideoPlayer link={this.state.featuredMedia.link} id={this.state.featuredMedia.id} />
          } */}

          <BigMediaCarousel featured={this.state.featuredMedia} handleButtonClick={this.handleButtonClick} />

          <MediaCarousel mediaList={this.state.currentlyDisplaying === 'SCREENSHOTS' ? this.state.data.screenshots : this.state.data.videos} imageClickHandler={this.handleImageClick} />
        </MediaDiv>
      </>
    );
  };
};

export default App;
