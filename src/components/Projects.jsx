import React from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import Gallery from 'react-grid-gallery';

import projectData from '../data/projects.json';

import { Container, Header, Segment, Label } from 'semantic-ui-react'



export default class Projects extends React.Component {
    constructor () {
        super()
    }


    render () {
        return (
            <div>
                {projectData.map((gallery, index) => {
                    var cl = (index % 2) == 0 ? "style3" : "style2";

                    var images = gallery.images.map(image => {
                        return image;
                    })

                    return (
                        <Segment key={index}>
                            <Header>{gallery.title}</Header>
                            <p>{gallery.description}</p>
                            {gallery.url && <p><a href={gallery.url}>{gallery.url}</a></p>}
                    
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
                        </Segment>
                    )
                })}
            </div>
        )
    }
}