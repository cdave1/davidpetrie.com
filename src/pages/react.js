import React from 'react'
import Helmet from 'react-helmet'
import Gallery from 'react-grid-gallery';
import Wrapper from '../components/Wrapper';

export default class ReactComponent extends React.Component {
  constructor () {
    super()

    var images = [
            {
              src: '/images/well.jpg',
              thumbnail: '/images/well.jpg'
            },
            {
              src: '/images/fb.png',
              thumbnail: '/images/fb.png' 
            },
            {
              src: '/images/fb.png',
              thumbnail: '/images/fb.png' 
            },
            {
              src: '/images/fb.png',
              thumbnail: '/images/fb.png' 
            },
            { 
              src: '/images/twitter.png',
              thumbnail: '/images/twitter.png' 
            },{
              src: '/images/well.jpg',
              thumbnail: '/images/well.jpg' 
            },{
              src: '/images/well.jpg',
              thumbnail: '/images/well.jpg' 
            }
          ];

    this.state = { images: images }

    
  }


  render () {
    return (
      <Wrapper title="Title">
        <h1>React.js components</h1>
        <h3>Counter example</h3>
       
        <Gallery 
          enableImageSelection={false}
          backdropClosesModal={true}
          images={this.state.images}
        />
      </Wrapper>
    )
  }
}