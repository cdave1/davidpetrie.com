import React from 'react'
import _ from 'lodash';
import moment from 'moment';

import Gallery from 'react-grid-gallery';
const ReactMarkdown = require('react-markdown');

import projectData from '../data/projects.json';

import { Container, Header, Segment, Label, Card, List, Divider } from 'semantic-ui-react';

var sanitize = function(s) {
    return s.replace(/[^a-z0-9]/gi, '_').toLowerCase();
}


export default class Projects extends React.Component {
    constructor () {
        super()
    }

    componentWillMount() {
        projectData.projects = _.orderBy(projectData.projects, ['startDate'], ['desc']);
    }

    onClickProject(project) {
        window.location.href='/project/' + sanitize(project.title);
    }

    render () {
        return (
            <div>
                {projectData.projects.map((project, index) => {
                    var cl = (index % 2) == 0 ? "style3" : "style2";

                    var images = project.images.slice(0, 5).map(image => {
                        return {
                            "src": "/images/" + image.thumbnails.default.path,
                            "thumbnail": "/images/" + image.thumbnails.default.path,
                            "thumbnailWidth": image.thumbnails.default.size.w,
                            "thumbnailHeight": image.thumbnails.default.size.h,
                            "caption": image.caption
                        };
                    });

                    var links = [];

                    links.push({icon: 'file text', text: "Main Article", url: "/project/" + sanitize(project.title)});

                    if (project.websiteURL) {
                        links.push({icon: 'home', url: project.websiteURL});
                    }
                    if (project.githubURL) {
                        links.push({icon: 'github', text: project.title + " on Github", url: project.githubURL});
                    }
                    if (project.mediumURL) {
                        links.push({icon: 'medium', text: "Medium", url: project.mediumURL});
                    }
                    if (project.twitter) {
                        links.push({icon: 'twitter', text: "Twitter", url: project.twitter});
                    }

                    var dateString = moment(project.startDate).year() + "" + (project.endDate ? ((moment(project.endDate).year() !== moment(project.startDate).year()) ? " - " + moment(project.endDate).year() : "") : " - present");

                    return (
                        <Container key={index}>
                            <Segment.Group  basic>
                                <Segment style={{cursor: 'pointer'}} onClick={this.onClickProject.bind(this, project)} basic padded>
                                    <h1 style={{fontSize: '2.0em', lineHeight: '1.0em', padding: '0px', margin: '0px', marginBottom: '0.5em', fontWeight: '900'}}>
                                        {project.title}
                                    </h1>
                                    {project.description && 
                                        <h3 style={{fontWeight: '900', lineHeight: '1.0em', marginTop: 0}}>
                                            {project.description}
                                        </h3>
                                    }

                                </Segment>

                                <Segment padded>
                                    <List horizontal>
                                    {links.map((link, i) => 
                                        <List.Item href={link.url}>
                                        <List.Icon name={link.icon} />
                                        <List.Content>
                                            <List.Header as='a'>{link.text || link.url}</List.Header>
                                        </List.Content>
                                        </List.Item>                          
                                    )}
                                    </List>
                                </Segment>

                                <Segment padded>
                                    {project.readme && <p>
                                        <ReactMarkdown source={project.readme} />
                                    </p>}
                                    <div style={{
                                        display: "block",
                                        width: "100%",
                                        overflow: "auto"}}>
                                        <Gallery
                                            maxRows={1}
                                            enableImageSelection={false}
                                            backdropClosesModal={true}
                                            images={images}
                                            margin={5}
                                            rowHeight={240}
                                        />
                                    </div>
                                </Segment>

                                <Segment secondary padded>
                                    <Label color='blue'>{dateString}</Label>
                                    {project.tags && project.tags.map((tag) => <Label basic color="blue">{tag}</Label>)}
                                </Segment>

                            </Segment.Group>
                            
                            <div style={{clear: 'both', display: 'block', height: '50px'}} />
                        </Container>
                    )
                })}
            </div>
        )
    }
}