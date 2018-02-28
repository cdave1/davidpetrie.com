import React from 'react'
import _ from 'lodash';
import moment from 'moment';

import Gallery from 'react-grid-gallery';

import projectData from '../data/projects.json';

import { Container, Header, Segment, Label, Card, Grid, Table } from 'semantic-ui-react'
import Divider from 'semantic-ui-react/dist/commonjs/elements/Divider/Divider';

var sanitize = function(s) {
    return s.replace(/[^a-z0-9]/gi, '_').toLowerCase();
}

export default class ProjectPreview extends React.Component {
    constructor () {
        super()
    }

    componentWillMount() {
        projectData.projects = _.orderBy(projectData.projects, ['startDate'], ['desc']);
    }

    onProjectClick(project) {
        window.location.href='/projects/';
    }

    renderGallery(images) {
        return (
            <div style={{
                display: "block",
                width: "100%",
                overflow: "auto"}}>
                <Gallery
                    onClickThumbnail={() => {}}
                    maxRows={1}
                    enableImageSelection={false}
                    backdropClosesModal={true}
                    images={images}
                    margin={5}
                />
            </div>
        )
    }

    render () {
        if (1) {
            return (
                <Grid>
                    {projectData.projects.slice(0, 12).map((project, index) => {
                        var cl = (index % 2) == 0 ? "style3" : "style2";
    
                        var images = project.images.map(image => {
                            return {
                                "src": "/images/" + image.file.path,
                                "thumbnail": "/images/" + image.thumbnails.croppedLarge.path,
                                "thumbnailWidth": image.thumbnails.croppedLarge.size.w,
                                "thumbnailHeight": image.thumbnails.croppedLarge.size.h,
                                "caption": image.caption,
                                "isHeaderImage": image.isHeaderImage
                            }; 
                        });

                        var headerImage = _.find(images, "isHeaderImage", true) || images[_.random(0, images.length - 1, false)];
    
                        var dateString = moment(project.startDate).year() + " - " + (project.endDate ? moment(project.endDate).year() : "");
    
                        return (
                            <Container fluid style={{backgroundImage: "url(" + headerImage.src + ")", 
                            backgroundColor: '#000',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center', 
                            backgroundSize: 'cover', borderBottom: '2px solid #000'}} href={"/project/" + sanitize(project.title)}>
                                <div className='bgImg'>
                                    <Segment basic textAlign="left" style={{padding: '200px 0px 50px 50px', color: 'white'}}>
                                        {project.tags && project.tags.map((tag) => <Label color='blue'>{tag}</Label>)}
                                        <Header style={{fontSize: '2em', fontWeight: '900', color: 'white'}} size="large">
                                            {_.toUpper(project.title)} ({dateString})
                                        </Header>
                                        {project.description && <Header size="small" style={{fontWeight: '900', color: 'white'}}>{project.description}</Header>}
                                    </Segment>
                                </div>
                            </Container>
                        )
                    })}
                </Grid>
            )
        } else {
            return (
                <Card.Group itemsPerRow={2}>
                    {projectData.projects.slice(0, 6).map((project, index) => {
                        var cl = (index % 2) == 0 ? "style3" : "style2";

                        var images = project.images.map(image => {
                            return {
                                "src": "/images/" + image.file.path,
                                "thumbnail": "/images/" + image.thumbnails.croppedLarge.path,
                                "thumbnailWidth": image.thumbnails.croppedLarge.size.w,
                                "thumbnailHeight": image.thumbnails.croppedLarge.size.h,
                                "caption": image.caption
                            };
                        });

                        images = _.shuffle(images).slice(0, 6);

                        var dateString = moment(project.startDate).year() + " - " + (project.endDate ? moment(project.endDate).year() : "");

                        return (
                            <Card raised key={index} href={"/project/" + sanitize(project.title)}>
                                <Card.Content>
                                <Container>
                                    <Header size="large">{project.title} <small>({dateString})</small></Header>
                                    {project.tags && project.tags.map((tag) => <Label color="blue">{tag}</Label>)}
                                    {project.description && <Header size="small">{project.description}</Header>}
                                    
                                    {this.renderGallery(images)}
                                </Container>
                                </Card.Content>
                            </Card>
                        )
                    })}
                </Card.Group>
            )
        }
    }
}