import React from 'react'
import _ from 'lodash';
import moment from 'moment';

const { marked } = require('marked');

import projectData from '../data/projects.json';

var sanitize = function(s) {
    return s.replace(/[^a-z0-9]/gi, '_').toLowerCase();
}

export default class Projects extends React.Component {
    componentWillMount() {
        projectData.projects = _.orderBy(projectData.projects, ['startDate'], ['desc']);
    }

    render() {
        return (
            <div>
                {projectData.projects.map((project, index) => {
                    var images = project.images.slice(0, 5).map(image => ({
                        src: "/images/" + image.file.path,
                        thumbnail: "/images/" + image.thumbnails.croppedSmall.path,
                        caption: image.caption
                    }));

                    var links = [];
                    links.push({ text: "Main Article", url: "/project/" + sanitize(project.title) });
                    if (project.websiteURL) links.push({ text: "Website", url: project.websiteURL });
                    if (project.githubURL) links.push({ text: project.title + " on GitHub", url: project.githubURL });
                    if (project.mediumURL) links.push({ text: "Medium", url: project.mediumURL });
                    if (project.productHuntURL) links.push({ text: "Product Hunt", url: project.productHuntURL });
                    if (project.twitter) links.push({ text: "Twitter", url: project.twitter });

                    var dateString = moment(project.startDate).year() + "" + (project.endDate ? ((moment(project.endDate).year() !== moment(project.startDate).year()) ? " - " + moment(project.endDate).year() : "") : " - present");

                    return (
                        <div className="project-list-item" key={index}>
                            <h2 onClick={() => { window.location.href = '/project/' + sanitize(project.title); }}>
                                {project.title}
                            </h2>
                            {project.description &&
                                <p className="project-description">{project.description}</p>
                            }

                            <ul className="project-list-links">
                                {links.map((link, i) =>
                                    <li key={i}><a href={link.url}>{link.text || link.url}</a></li>
                                )}
                            </ul>

                            {project.readme ?
                                project.readme.length > 1000 ?
                                    <div dangerouslySetInnerHTML={{ __html: marked(_.split(project.readme, " ").slice(0, 250).join(" ") + " ... ([See full article](" + "/project/" + sanitize(project.title) + "))") }} />
                                    :
                                    <div dangerouslySetInnerHTML={{ __html: marked(project.readme) }} />
                                : null
                            }

                            <div className="project-list-images">
                                {images.map((image, i) =>
                                    <img key={i} src={image.thumbnail} alt={image.caption || project.title} loading="lazy" />
                                )}
                            </div>

                            <div className="project-list-meta">
                                <span className="tag">{dateString}</span>
                                {project.tags && project.tags.map((tag, i) => <span className="tag" key={i}>{tag}</span>)}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
