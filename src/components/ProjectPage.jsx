import React from 'react'
import _ from 'lodash';
import moment from 'moment';

const ReactMarkdown = require('react-markdown');

import projectData from '../data/projects.json';
import HomeWrapper from '../components/HomeWrapper.jsx';

export default class ProjectPage extends React.Component {
    componentWillMount() {
        projectData.projects = _.orderBy(projectData.projects, ['startDate'], ['desc']);
    }

    render() {
        const project = this.props.project;
        var images = project.images.map(image => ({
            src: "/images/" + image.file.path,
            thumbnail: "/images/" + image.thumbnails.croppedLarge.path,
            caption: image.caption,
            isHeaderImage: project.headerImageId === image.id
        }));

        var links = [];
        if (project.websiteURL) links.push({ label: 'Website', url: project.websiteURL });
        if (project.githubURL) links.push({ label: 'GitHub', url: project.githubURL });
        if (project.mediumURL) links.push({ label: 'Medium', url: project.mediumURL });
        if (project.twitter) links.push({ label: 'Twitter', url: project.twitter });

        var headerImage = _.find(images, "isHeaderImage") || images[_.random(0, images.length - 1, false)];

        var dateString = moment(project.startDate).year() + "" + (project.endDate ? ((moment(project.endDate).year() !== moment(project.startDate).year()) ? " - " + moment(project.endDate).year() : "") : " - present");

        return (
            <HomeWrapper title={project.title}>
                <img
                    className="project-hero"
                    src={headerImage.src}
                    alt={project.title}
                    loading="lazy"
                />

                <div className="site-container page-content">
                    <div className="project-header">
                        <h1>{project.title}</h1>
                        {project.description &&
                            <p className="project-description">{project.description}</p>
                        }
                        <span className="project-meta-date">{dateString}</span>
                    </div>

                    {project.tags &&
                        <ul className="project-tags">
                            {project.tags.map((tag, i) => <li key={i} className="tag">{tag}</li>)}
                        </ul>
                    }

                    {links.length > 0 &&
                        <ul className="project-links">
                            {links.map((link, i) =>
                                <li key={i}><a href={link.url}>{link.label}: {link.url}</a></li>
                            )}
                        </ul>
                    }

                    <hr />

                    <ReactMarkdown escapeHtml={false} source={project.readme} />

                    <div className="project-images">
                        {images.map((image, i) =>
                            <figure key={i}>
                                <img src={image.src} alt={image.caption || project.title} loading="lazy" />
                                {image.caption && <figcaption>{image.caption}</figcaption>}
                            </figure>
                        )}
                    </div>
                </div>
            </HomeWrapper>
        )
    }
}
