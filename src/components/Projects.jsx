import React from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import Gallery from 'react-grid-gallery';


import { Container } from 'semantic-ui-react'

var galleries = [
  {
      title: "Algorithmic Design Engine",
      description: "A project that allows designers to design things using algorithms.",
      url: 'https://dreamengine.co',
      images: [
          {
            src: '/images/ae/AE00012.png',
            thumbnail: '/images/ae/thumb_AE00012.png',
            thumbnailWidth: 400,
            thumbnailHeight: 266,
            caption: "Algorithmic Design Engine"
          },
          {
            src: '/images/ae/AE00011.png',
            thumbnail: '/images/ae/thumb_AE00011.png',
            thumbnailWidth: 400,
            thumbnailHeight: 266,
            caption: "Algorithmic Design Engine"
          },
          {
            src: '/images/ae/AE00010.png',
            thumbnail: '/images/ae/thumb_AE00010.png',
            thumbnailWidth: 400,
            thumbnailHeight: 400,
            caption: "Algorithmic Design Engine"
          },
          {
            src: '/images/ae/AE00007.png',
            thumbnail: '/images/ae/thumb_AE00007.png',
            thumbnailWidth: 400,
            thumbnailHeight: 400,
          },
          {
            src: '/images/ae/AE00009.png',
            thumbnail: '/images/ae/thumb_AE00009.png',
            thumbnailWidth: 400,
            thumbnailHeight: 400,
          },
          {
            src: '/images/ae/AE00004.png',
            thumbnail: '/images/ae/thumb_AE00004.png',
            thumbnailWidth: 400,
            thumbnailHeight: 206,
          },
          {
            src: '/images/ae/AE00003.png',
            thumbnail: '/images/ae/thumb_AE00003.png',
            thumbnailWidth: 400,
            thumbnailHeight: 188,
          },
          {
            src: '/images/ae/AE00008.png',
            thumbnail: '/images/ae/thumb_AE00008.png',
            thumbnailWidth: 400,
            thumbnailHeight: 199,
          },
      ]
  },
  {
      title: "Vast",
      description: "A VR app to help people design their own VR and AR experiences.",
      images: [
          {
            src: '/images/VR/Vast00014.png',
            thumbnail: '/images/VR/thumb_Vast00014.png',
            thumbnailWidth: 400,
            thumbnailHeight: 225,
            caption: "Algorithmic Design Engine"
          },
          {
            src: '/images/VR/Vast00013.png',
            thumbnail: '/images/VR/thumb_Vast00013.png',
            thumbnailWidth: 400,
            thumbnailHeight: 225,
            caption: "Algorithmic Design Engine"
          },
          {
            src: '/images/VR/Vast00012.png',
            thumbnail: '/images/VR/thumb_Vast00012.png',
            thumbnailWidth: 400,
            thumbnailHeight: 225,
            caption: "Algorithmic Design Engine"
          },
          {
            src: '/images/VR/Vast00011.png',
            thumbnail: '/images/VR/thumb_Vast00011.png',
            thumbnailWidth: 400,
            thumbnailHeight: 225,
          },
          {
            src: '/images/VR/Vast00006.png',
            thumbnail: '/images/VR/thumb_Vast00006.png',
            thumbnailWidth: 400,
            thumbnailHeight: 225,
          },
          {
            src: '/images/VR/Vast00010.png',
            thumbnail: '/images/VR/thumb_Vast00010.png',
            thumbnailWidth: 400,
            thumbnailHeight: 225,
          },
          {
            src: '/images/VR/Vast00003.png',
            thumbnail: '/images/VR/thumb_Vast00003.png',
            thumbnailWidth: 400,
            thumbnailHeight: 224,
            caption: "Early development screenshot"
          },
          {
            src: '/images/VR/Vast00001.png',
            thumbnail: '/images/VR/thumb_Vast00001.png',
            thumbnailWidth: 400,
            thumbnailHeight: 250,
            caption: "Early development screenshot"
          }
      ]
  },
  {
      title: "Ocean",
      description: "A small handheld general purpose computer, with complete OS and remote management tools",
      url: 'https://getocean.now.sh/',
      images: [
          {
            src: '/images/Ocean/OceanHW00006.png',
            thumbnail: '/images/Ocean/thumb_OceanHW00006.png',
            thumbnailWidth: 400,
            thumbnailHeight: 266,
            caption: "Algorithmic Design Engine"
          },
          {
            src: '/images/Ocean/OceanHW00004.png',
            thumbnail: '/images/Ocean/thumb_OceanHW00004.png',
            thumbnailWidth: 400,
            thumbnailHeight: 267,
            caption: "Algorithmic Design Engine"
          },
          {
            src: '/images/Ocean/OceanHW00005.png',
            thumbnail: '/images/Ocean/thumb_OceanHW00005.png',
            thumbnailWidth: 400,
            thumbnailHeight: 267
          },
          {
            src: '/images/Ocean/OceanHW00007.png',
            thumbnail: '/images/Ocean/thumb_OceanHW00007.png',
            thumbnailWidth: 400,
            thumbnailHeight: 533
          },
          {
            src: '/images/Ocean/OceanHW00001.jpg',
            thumbnail: '/images/Ocean/thumb_OceanHW00001.png',
            thumbnailWidth: 400,
            thumbnailHeight: 238
          },
          {
            src: '/images/Ocean/OceanHW00002.jpg',
            thumbnail: '/images/Ocean/thumb_OceanHW00002.png',
            thumbnailWidth: 400,
            thumbnailHeight: 533
          },
          {
            src: '/images/Ocean/OceanHW00003.jpg',
            thumbnail: '/images/Ocean/thumb_OceanHW00003.png',
            thumbnailWidth: 400,
            thumbnailHeight: 300
          },

          {
            src: '/images/Ocean/OceanSW00001.png',
            thumbnail: '/images/Ocean/thumb_OceanSW00001.png',
            thumbnailWidth: 400,
            thumbnailHeight: 238,
            caption: "Algorithmic Design Engine"
          },
          {
            src: '/images/Ocean/OceanSW00006.png',
            thumbnail: '/images/Ocean/thumb_OceanSW00006.png',
            thumbnailWidth: 400,
            thumbnailHeight: 214,
            caption: "Algorithmic Design Engine"
          },
      ]
  },
  {
      title: "HDK",
      description: "A game engine for developing 2.5d physics games.",
      images: [
          {
            src: '/images/HDK/HDK00001.png',
            thumbnail: '/images/HDK/HDK00001.png',
            thumbnailWidth: 400,
            thumbnailHeight: 214,
            caption: "Algorithmic Design Engine"
          },
          {
            src: '/images/HDK/HDK00002.png',
            thumbnail: '/images/HDK/HDK00002.png',
            thumbnailWidth: 400,
            thumbnailHeight: 214,
            caption: "Algorithmic Design Engine"
          },
          {
            src: '/images/HDK/HDK00003.png',
            thumbnail: '/images/HDK/HDK00003.png',
            thumbnailWidth: 400,
            thumbnailHeight: 214
          },
          {
            src: '/images/HDK/HDK00004.png',
            thumbnail: '/images/HDK/HDK00004.png',
            thumbnailWidth: 400,
            thumbnailHeight: 214
          }
      ]
  }
];

export default class Projects extends React.Component {
  constructor () {
    super()
  }


  render () {
    return (
      <div>

        {galleries.map((gallery, index) => {
            var cl = (index % 2) == 0 ? "style3" : "style2";

            var images = gallery.images.map(image => {
              //image.thumbnailWidth = 150;
              //image.thumbnailHeight = 150;
              return image;
            })

            return (
              <div key={index}>
              <header className="style1"><h2>{gallery.title}</h2><p>{gallery.description}</p>
                {gallery.url && <p><a href={gallery.url}>{gallery.url}</a></p>}
              </header>
              
                <Container>
                  
                  <div style={{
                    display: "block",
                    backgroundColor: "#eee",
                    minHeight: "1px",
                    width: "100%",
                    border: "1px solid #ddd",
                    overflow: "auto"}}>
                <Gallery 
                        rowHeight={160}
                          enableImageSelection={false}
                          backdropClosesModal={true}
                          images={images}
                        />
                        </div>
                </Container>
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