import React from 'react'
import _ from 'lodash';
import moment from 'moment';

import Gallery from 'react-grid-gallery';
const ReactMarkdown = require('react-markdown');

import projectData from '../data/projects.json';

import HomeWrapper from '../Components/HomeWrapper.jsx';

import { Container, Header, Segment, Label, List } from 'semantic-ui-react'
import Divider from 'semantic-ui-react/dist/commonjs/elements/Divider/Divider';

export default class ProjectPage extends React.Component {
    constructor () {
        super()
    }

    componentWillMount() {
        projectData.projects = _.orderBy(projectData.projects, ['startDate'], ['desc']);
    }

    render () {
        const project = this.props.project;
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

        var links = [];

        if (project.websiteURL) {
            links.push({icon: 'home', url: project.websiteURL});
        }
        if (project.githubURL) {
            links.push({icon: 'github', url: project.githubURL});
        }
        if (project.mediumURL) {
            links.push({icon: 'medium', url: project.mediumURL});
        }
        if (project.twitter) {
            links.push({icon: 'twitter', url: project.twitter});
        }

        var headerImage = _.find(images, "isHeaderImage", 0) || images[_.random(0, images.length - 1, false)];

        var dateString = moment(project.startDate).year() + "" + (project.endDate ? ((moment(project.endDate).year() !== moment(project.startDate).year()) ? " - " + moment(project.endDate).year() : "") : " - present");
        

        return (
            <HomeWrapper title={project.title}>
                <Container fluid style={{backgroundImage: "url(" + headerImage.src + ")", 
                backgroundColor: '#000',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center', 
                backgroundSize: 'cover', 
                borderTop: '2px solid #000',
                borderBottom: '2px solid #000'}}>
                    <div className='bgImgHeader'>
                        <Segment basic textAlign="center" style={{width: '100%'}}>
                            <h1 style={{fontSize: '4em', padding: '0px', margin: '0px', fontWeight: '900', color: 'white', textShadow: '3px 3px 2px #000'}}>
                                {_.toUpper(project.title)}
                            </h1>
                            {project.description && 
                                <h2 style={{fontWeight: '700', marginTop: 0, marginBottom: '1.0em', color: 'white', textShadow: '3px 3px 2px #000'}}>
                                    {project.description}
                                </h2>
                            }
                                
                            <Label color='blue'>{dateString}</Label>
                            {project.tags && project.tags.map((tag) => <Label basic color='blue'>{tag}</Label>)}
                        </Segment>
                    </div>
                </Container>

                <Container>
                    <Segment basic>
                        <h1 style={{fontSize: '2.0em', lineHeight: '1.0em', padding: '0px', marginTop: '0.5em', marginBottom: '0.5em'}}>
                            {project.title} <small>({dateString})</small>
                        </h1>
                        {project.description && 
                            <h3 style={{fontWeight: '900', lineHeight: '1.0em', marginTop: 0, marginBottom: '1.0em'}}>
                                {project.description}
                            </h3>
                        }

                        <List relaxed>
                        {links.map((link, i) => 
                            <List.Item href={link.url}>
                                <List.Icon name={link.icon} size='large' verticalAlign='middle' />
                                <List.Content>
                                    {link.url}
                                </List.Content>
                            </List.Item>                          
                        )}
                        </List>

                        <Divider />

                        <p><ReactMarkdown source={project.readme} /></p>

                        <div className='projectGallery'>
                            <Gallery
                                enableImageSelection={false}
                                backdropClosesModal={true}
                                images={images}
                                margin={5}
                                lightboxWidth={2048}
                            />
                        </div>

                        <Divider hidden />
                        
                        {project.tags && project.tags.map((tag) => <Label color="blue">{tag}</Label>)}
                    </Segment>
                </Container>
            </HomeWrapper>
        )
    }
}