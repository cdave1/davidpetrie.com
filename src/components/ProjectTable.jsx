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
        if (true) {
            var projectSplits = []; // _.clone(projectData.projects);
            
            for (var i = 0; i < projectData.projects.length - 1; i += 2) {
                projectSplits.push([
                    projectData.projects[i],
                    projectData.projects[i + 1]
                ]);
            }

            return (
                <div style={{margin: '0px', padding: '0px', border: '0'}}>
                
                {projectSplits.map((projects, projectIndex) => {
                    return (
                        <Table columns={3} basic cellPadding={0} compact="very" stackable style={{margin: '0px', padding: '0px', border: '0', borderStyle: 'hidden', borderCollapse: 'collapse', borderBottom: '1px solid #fff'}}>
                        <Table.Row style={{margin: '0px', padding: '0px'}}>
                        {projects.map((project, index) => {
                            var images = project.images.map(image => {
                                return {
                                    "src": "/images/" + image.file.path,
                                    "thumbnail": "/images/" + image.thumbnails.croppedLarge.path,
                                    "thumbnailWidth": image.thumbnails.croppedLarge.size.w,
                                    "thumbnailHeight": image.thumbnails.croppedLarge.size.h,
                                    "caption": image.caption,
                                    "isHeaderImage": project.headerImageId === image.id
                                };
                            });

                            var headerImage = _.find(images, "isHeaderImage", 0) || images[_.random(0, images.length - 1, false)];
        
                            var dateString = moment(project.startDate).year() + "" + (project.endDate ? ((moment(project.endDate).year() !== moment(project.startDate).year()) ? " - " + moment(project.endDate).year() : "") : " - present");
        
                            var width = (projectIndex % 2 == 1) ? (index == 0 ? "one" : "two") : (index == 0 ? "two" : "one");

                            return (
                                <Table.Cell id={`what${projectIndex}_${index}_label`} width={width} style={{backgroundImage: "url(" + headerImage.src + ")", 
                                backgroundColor: '#000',
                                backgroundRepeat: 'no-repeat', 
                                backgroundPosition: 'center', 
                                backgroundSize: 'cover', 
                                border: '1px solid #fff',
                                height: '400px',
                                margin: '0px', 
                                padding: '0px'}}>

                                <style>
                                    {`
                                    #what${projectIndex}_${index}_label {
                                        padding: 0px !important;
                                    }
                                    `}
                                </style>
                                <div href={"/project/" + sanitize(project.title)}>
                                    <div className='bgImg'>
                                        <Segment basic textAlign="left" style={{position: 'absolute', padding: '30px', bottom: 0, width: '100%', color: 'white'}}>
                                            <h1 style={{fontSize: '2.0em', lineHeight: '1.5em', padding: '0px', margin: '0px', fontWeight: '900', color: 'white', textShadow: '2px 2px 1px #000'}}>
                                                {_.toUpper(project.title)}
                                            </h1>
                                            {project.description && 
                                                <h3 style={{fontWeight: '700', marginTop: 0, marginBottom: '0.5em', color: 'white', textShadow: '2px 2px 1px #000'}}>
                                                    {project.description}
                                                </h3>
                                            }
                                            <Label color='blue'>{dateString}</Label>
                                            {project.tags && project.tags.map((tag) => <Label basic color='blue'>{tag}</Label>)}
                                        </Segment>
                                    </div>
                                </div>
                                </Table.Cell>
                            )
                        }
                    )}
                    </Table.Row>
                    </Table>
                )})}
                </div>
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

                        var headerImage = _.find(images, "isHeaderImage", 0) || images[_.random(0, images.length - 1, false)];

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