import React from 'react'
import _ from 'lodash';
import moment from 'moment';

import projectData from '../data/projects.json';

var sanitize = function(s) {
    return s.replace(/[^a-z0-9]/gi, '_').toLowerCase();
}

export default class ProjectTable extends React.Component {
    componentWillMount() {
        projectData.projects = _.orderBy(projectData.projects, ['startDate'], ['desc']);
    }

    render() {
        return (
            <div className="project-grid">
                {projectData.projects.map((project, index) => {
                    var images = project.images.map(image => ({
                        src: "/images/" + image.file.path,
                        thumbnail: "/images/" + image.thumbnails.croppedLarge.path,
                        isHeaderImage: project.headerImageId === image.id
                    }));

                    var headerImage = _.find(images, "isHeaderImage") || images[_.random(0, images.length - 1, false)];

                    var dateString = moment(project.startDate).year() + "" + (project.endDate ? ((moment(project.endDate).year() !== moment(project.startDate).year()) ? " - " + moment(project.endDate).year() : "") : " - present");

                    return (
                        <div className="project-card" key={index}>
                            <a href={"/project/" + sanitize(project.title)}>
                                <img
                                    src={headerImage.src}
                                    alt={project.title}
                                    loading="lazy"
                                />
                                <div className="project-card-body">
                                    <h3>{project.title}</h3>
                                    {project.description && <p>{project.description}</p>}
                                </div>
                                <div className="project-card-meta">
                                    <div className="project-card-tags">
                                        <span className="tag">{dateString}</span>
                                        {project.tags && project.tags.map((tag, i) => <span className="tag" key={i}>{tag}</span>)}
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                })}
            </div>
        )
    }
}
