import React from 'react';
import allProjects, { findImage, headerImage, imageSrc, projectPath, yearRange } from '../../data/helpers';

// Projects, newest first (all of them, or the titles given). Pointing at, focusing or scrolling a
// row to the middle of the screen makes it active: the picture beside the list changes and its
// description opens (src/client/site.js). Without the script it is a plain list of links.
export default function ProjectIndex({ titles, frames = {}, heading = 'Everything, by year', id = 'projects', children }) {
    const projects = titles ? allProjects.filter((p) => titles.includes(p.title)) : allProjects;
    const frameImage = (project) => (frames[project.title] && findImage(project, frames[project.title])) || headerImage(project);
    const first = projects[0];
    const firstImage = frameImage(first);

    return (
        <section className="grid index" id={id} aria-labelledby={id + '-title'} data-project-index="">
            <h2 className="index__title" id={id + '-title'} data-reveal>{heading}</h2>
            <figure className="index__frame">
                <img
                    className="is-on"
                    src={imageSrc(firstImage)}
                    width={firstImage.file.size.w || 800}
                    height={firstImage.file.size.h || 800}
                    alt={first.title}
                    loading="lazy"
                />
                <figcaption>{first.title}, {yearRange(first)}</figcaption>
            </figure>
            <div className="index__body">
                <ol className="index__list">
                    {projects.map((project, i) => {
                        const image = frameImage(project);
                        return (
                            <li
                                key={project.id}
                                className={'index__row' + (i === 0 ? ' is-active' : '')}
                                data-frame={imageSrc(image)}
                                data-frame-w={image.file.size.w || 800}
                                data-frame-h={image.file.size.h || 800}
                                data-title={project.title}
                                data-caption={`${project.title}, ${yearRange(project)}`}
                                data-reveal
                                style={{ '--i': i % 6 }}
                            >
                                <a href={projectPath(project)}>
                                    <span>{project.title}</span>
                                    <span className="index__years">{yearRange(project)}</span>
                                </a>
                                <div className="index__desc">
                                    <div><p>{project.description}.</p></div>
                                </div>
                            </li>
                        );
                    })}
                </ol>
                {children || (
                    <p className="index__more">
                        <a className="text-link" href="/projects/#2000-2009">Older work, 2000 to 2009</a>
                    </p>
                )}
            </div>
        </section>
    );
}
