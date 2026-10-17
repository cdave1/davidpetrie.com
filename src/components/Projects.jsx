import React from 'react';
import { marked } from 'marked';
import projects, { imageSrc, projectLinks, projectPath, yearRange } from '../data/helpers';

const excerpt = (project) => {
    if (!project.readme) return null;
    if (project.readme.length <= 700) return project.readme;
    return (
        project.readme.split(' ').slice(0, 110).join(' ') +
        ' … ([Read the rest](' + projectPath(project) + '))'
    );
};

// `only` keeps just the named projects; `exclude` drops the named ones.
export default function Projects({ only, exclude = [] }) {
    return (
        <ol className="entries">
            {projects.filter((project) => (only ? only.includes(project.title) : !exclude.includes(project.title))).map((project) => {
                const strip = project.images.slice(0, 4);
                const text = excerpt(project);
                return (
                    <li className="entry" key={project.id}>
                        <div className="entry__row" data-reveal>
                            <span className="entry__years">{yearRange(project)}</span>
                            <h2 className="entry__title">
                                <a href={projectPath(project)}>{project.title}</a>
                            </h2>
                            {project.description && <span className="entry__fact">{project.description}</span>}
                        </div>

                        <div className="grid entry__split">
                        <div className="entry__strip">
                            {strip.map((image, i) => (
                                <a key={image.id} href={projectPath(project)} tabIndex={-1} data-reveal style={{ '--i': i }}>
                                    <img
                                        src={encodeURI('/images/' + image.thumbnails.default.path)}
                                        width={Math.round(image.thumbnails.default.size.w)}
                                        height={Math.round(image.thumbnails.default.size.h)}
                                        alt={image.caption || project.title + ' picture ' + (i + 1)}
                                        loading="lazy"
                                    />
                                </a>
                            ))}
                        </div>

                        <div className="entry__body">
                            <ul className="entry__links">
                                <li><a href={projectPath(project)}>The full story</a></li>
                                {projectLinks(project).map((link) => (
                                    <li key={link.url}><a href={link.url}>{link.label}</a></li>
                                ))}
                            </ul>
                            {text && <div className="entry__text" dangerouslySetInnerHTML={{ __html: marked(text) }} />}
                            {project.tags && project.tags.length > 0 && (
                                <p className="entry__tags">{project.tags.join(', ')}</p>
                            )}
                        </div>
                        </div>
                    </li>
                );
            })}
        </ol>
    );
}
