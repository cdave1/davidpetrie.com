import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import Gallery from 'react-grid-gallery';
import { config } from 'config'
import { Container } from 'react-responsive-grid'

var galleries = [
  {
      title: "2017: Algorithmic Design Engine",
      images: [
          {
            src: prefixLink('/images/ae/AE00011.png'),
            thumbnail: prefixLink('/images/ae/thumb_AE00011.png'),
            thumbnailWidth: 400,
            thumbnailHeight: 266,
            caption: "Algorithmic Design Engine"
          },
          {
            src: prefixLink('/images/ae/AE00010.png'),
            thumbnail: prefixLink('/images/ae/thumb_AE00010.png'),
            thumbnailWidth: 400,
            thumbnailHeight: 400,
            caption: "Algorithmic Design Engine"
          },
          {
            src: prefixLink('/images/ae/AE00008.png'),
            thumbnail: prefixLink('/images/ae/thumb_AE00008.png'),
            thumbnailWidth: 400,
            thumbnailHeight: 199,
          },
          {
            src: prefixLink('/images/ae/AE00005.png'),
            thumbnail: prefixLink('/images/ae/thumb_AE00005.png'),
            thumbnailWidth: 400,
            thumbnailHeight: 206,
          },
          {
            src: prefixLink('/images/ae/AE00003.png'),
            thumbnail: prefixLink('/images/ae/thumb_AE00003.png'),
            thumbnailWidth: 400,
            thumbnailHeight: 188,
          },
          {
            src: prefixLink('/images/ae/AE00007.png'),
            thumbnail: prefixLink('/images/ae/thumb_AE00007.png'),
            thumbnailWidth: 400,
            thumbnailHeight: 400,
          },
          {
            src: prefixLink('/images/ae/AE00009.png'),
            thumbnail: prefixLink('/images/ae/thumb_AE00009.png'),
            thumbnailWidth: 400,
            thumbnailHeight: 400,
          }
      ]
  },
  {
      title: "2016: Vast",
      images: [
          {
            src: prefixLink('/images/VR/Vast00014.png'),
            thumbnail: prefixLink('/images/VR/thumb_Vast00014.png'),
            thumbnailWidth: 200,
            thumbnailHeight: 113,
            caption: "Algorithmic Design Engine"
          },
          {
            src: prefixLink('/images/VR/Vast00013.png'),
            thumbnail: prefixLink('/images/VR/thumb_Vast00013.png'),
            thumbnailWidth: 200,
            thumbnailHeight: 113,
            caption: "Algorithmic Design Engine"
          },
          {
            src: prefixLink('/images/VR/Vast00012.png'),
            thumbnail: prefixLink('/images/VR/thumb_Vast00012.png'),
            thumbnailWidth: 200,
            thumbnailHeight: 113,
            caption: "Algorithmic Design Engine"
          },
          {
            src: prefixLink('/images/VR/Vast00011.png'),
            thumbnail: prefixLink('/images/VR/thumb_Vast00011.png'),
            thumbnailWidth: 200,
            thumbnailHeight: 113,
          },
          {
            src: prefixLink('/images/VR/Vast00006.png'),
            thumbnail: prefixLink('/images/VR/thumb_Vast00006.png'),
            thumbnailWidth: 200,
            thumbnailHeight: 113,
          },
          {
            src: prefixLink('/images/VR/Vast00010.png'),
            thumbnail: prefixLink('/images/VR/thumb_Vast00010.png'),
            thumbnailWidth: 200,
            thumbnailHeight: 113,
          },
          {
            src: prefixLink('/images/VR/Vast00002.png'),
            thumbnail: prefixLink('/images/VR/thumb_Vast00002.png'),
            thumbnailWidth: 200,
            thumbnailHeight: 112,
            caption: "Early development screenshot"
          },
          {
            src: prefixLink('/images/VR/Vast00003.png'),
            thumbnail: prefixLink('/images/VR/thumb_Vast00003.png'),
            thumbnailWidth: 200,
            thumbnailHeight: 112,
            caption: "Early development screenshot"
          }
      ]
  },
  {
      title: "2015: Ocean",
      images: [
          {
            src: prefixLink('/images/Ocean/OceanHW00006.png'),
            thumbnail: prefixLink('/images/Ocean/thumb_OceanHW00006.png'),
            thumbnailWidth: 400,
            thumbnailHeight: 266,
            caption: "Algorithmic Design Engine"
          },
          {
            src: prefixLink('/images/Ocean/OceanHW00004.png'),
            thumbnail: prefixLink('/images/Ocean/thumb_OceanHW00004.png'),
            thumbnailWidth: 400,
            thumbnailHeight: 267,
            caption: "Algorithmic Design Engine"
          },
          {
            src: prefixLink('/images/Ocean/OceanHW00005.png'),
            thumbnail: prefixLink('/images/Ocean/thumb_OceanHW00005.png'),
            thumbnailWidth: 400,
            thumbnailHeight: 267
          },
          {
            src: prefixLink('/images/Ocean/OceanHW00007.png'),
            thumbnail: prefixLink('/images/Ocean/thumb_OceanHW00007.png'),
            thumbnailWidth: 400,
            thumbnailHeight: 533
          },
          {
            src: prefixLink('/images/Ocean/OceanHW00001.jpg'),
            thumbnail: prefixLink('/images/Ocean/thumb_OceanHW00001.png'),
            thumbnailWidth: 400,
            thumbnailHeight: 238
          },
          {
            src: prefixLink('/images/Ocean/OceanHW00002.jpg'),
            thumbnail: prefixLink('/images/Ocean/thumb_OceanHW00002.png'),
            thumbnailWidth: 400,
            thumbnailHeight: 533
          },
          {
            src: prefixLink('/images/Ocean/OceanHW00003.jpg'),
            thumbnail: prefixLink('/images/Ocean/thumb_OceanHW00003.png'),
            thumbnailWidth: 400,
            thumbnailHeight: 300
          },

          {
            src: prefixLink('/images/Ocean/OceanSW00001.png'),
            thumbnail: prefixLink('/images/Ocean/thumb_OceanSW00001.png'),
            thumbnailWidth: 400,
            thumbnailHeight: 238,
            caption: "Algorithmic Design Engine"
          },
          {
            src: prefixLink('/images/Ocean/OceanSW00006.png'),
            thumbnail: prefixLink('/images/Ocean/thumb_OceanSW00006.png'),
            thumbnailWidth: 400,
            thumbnailHeight: 214,
            caption: "Algorithmic Design Engine"
          },
      ]
  },
  {
      title: "HDK",
      images: [
          {
            src: prefixLink('/images/HDK/HDK00001.png'),
            thumbnail: prefixLink('/images/HDK/HDK00001.png'),
            caption: "Algorithmic Design Engine"
          },
          {
            src: prefixLink('/images/HDK/HDK00002.png'),
            thumbnail: prefixLink('/images/HDK/HDK00002.png'),
            caption: "Algorithmic Design Engine"
          },
          {
            src: prefixLink('/images/HDK/HDK00003.png'),
            thumbnail: prefixLink('/images/HDK/HDK00003.png'),
          },
          {
            src: prefixLink('/images/HDK/HDK00004.png'),
            thumbnail: prefixLink('/images/HDK/HDK00004.png'),
          }
      ]
  }
];


export default class Index extends React.Component {
  constructor () {
    super()

    

    //this.state = { images: images } 
  }


  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />

        {galleries.map((gallery, index) => {
            var cl = (index % 2) == 0 ? "style3" : "style2";

            var images = gallery.images.map(image => {
              //image.thumbnailWidth = 150;
              //image.thumbnailHeight = 150;
              return image;
            })

            return (
              <div className={"wrapper " + cl}>
					      <div className="title">{gallery.title}</div>
					      <div id="highlights" className="container">
                  <div id="content">
                <Container>
                  
                  <div style={{
                    display: "block",
                    backgroundColor: "#fff",
                    minHeight: "1px",
                    width: "100%",
                    border: "1px solid #ddd",
                    overflow: "auto"}}>
                <Gallery 
                        rowHeight={150}
                          enableImageSelection={false}
                          backdropClosesModal={true}
                          images={images}
                        />
                        </div>
                </Container>
                </div> 
                </div>
                </div>

            )
        })}



      </div>
    )
  }
}

/*

<Container>
<Gallery 
          enableImageSelection={false}
          backdropClosesModal={true}
          images={this.state.images}
        />
</Container>
*/