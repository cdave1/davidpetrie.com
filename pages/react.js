import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
import Gallery from 'react-grid-gallery';
import { prefixLink } from 'gatsby-helpers'

export default class ReactComponent extends React.Component {
  constructor () {
    super()

    var images = [
            {
              src: prefixLink('/images/well.jpg'),
              thumbnail: prefixLink('/images/well.jpg')
            },
            {
              src: prefixLink('/images/fb.png'),
              thumbnail: prefixLink('/images/fb.png') 
            },
            {
              src: prefixLink('/images/fb.png'),
              thumbnail: prefixLink('/images/fb.png') 
            },
            {
              src: prefixLink('/images/fb.png'),
              thumbnail: prefixLink('/images/fb.png') 
            },
            { 
              src: prefixLink('/images/twitter.png'),
              thumbnail: prefixLink('/images/twitter.png') 
            },{
              src: prefixLink('/images/well.jpg'),
              thumbnail: prefixLink('/images/well.jpg') 
            },{
              src: prefixLink('/images/well.jpg'),
              thumbnail: prefixLink('/images/well.jpg') 
            }
          ];

    this.state = { images: images }

    
  }


  render () {
    return (
      <div>
        <Helmet
          title={`${config.siteTitle} | React.js components`} 
        />
        <h1>React.js components</h1>
        <h3>Counter example</h3>
       
        <Gallery 
          enableImageSelection={false}
          backdropClosesModal={true}
          images={this.state.images}
        />
      </div>
    )
  }
}