import React from 'react';
import PageWrapper from './Wrapper.jsx';
import projects, { headerImage, imageSrc, projectLinks, projectPath, yearRange } from '../data/helpers';
import credits from '../data/credits';
import { marked } from 'marked';

export default function ProjectPage({ project }) {
    const header = headerImage(project);
    const small = header.file.size.w < 1400;
    const links = projectLinks(project);
    const gallery = project.images.filter((image) => image.id !== header.id);

    const index = projects.findIndex((p) => p.id === project.id);
    const next = projects[(index + 1) % projects.length];

    return (
        <PageWrapper credits={project.title === 'Bigscreen' ? [credits.bigscreen] : undefined}>
            <div className="row-line">
                <span className="row-line__years">{yearRange(project)}</span>
                <h1 className="row-line__title">{project.title}</h1>
                {project.description && <span className="row-line__fact">{project.description}</span>}
            </div>

            <figure className={'project-plate' + (small ? ' project-plate--small' : '')}>
                <img
                    src={imageSrc(header)}
                    width={header.file.size.w}
                    height={header.file.size.h}
                    alt={header.caption || project.title}
                    fetchpriority="high"
                />
            </figure>

            <div className="grid project-facts">
                <ul className="project-facts__meta">
                    {links.map((link) => (
                        <li key={link.url}><a href={link.url}>{link.label}</a></li>
                    ))}
                    {project.tags && project.tags.length > 0 && <li>{project.tags.join(', ')}</li>}
                </ul>
                {project.readme && (
                    <div
                        className="prose project-facts__readme"
                        dangerouslySetInnerHTML={{ __html: marked(project.readme) }}
                    />
                )}
            </div>

            {gallery.length > 0 && (
                <div className="gallery" aria-label={'Pictures of ' + project.title}>
                    {gallery.map((image, i) => (
                        <figure key={image.id} data-reveal style={{ '--i': i % 2 }}>
                            <img
                                src={imageSrc(image)}
                                width={image.file.size.w}
                                height={image.file.size.h}
                                alt={image.caption || project.title}
                                loading="lazy"
                            />
                            {image.caption && <figcaption>{image.caption}</figcaption>}
                        </figure>
                    ))}
                </div>
            )}

            <a className="next-project" href={projectPath(next)}>
                <span className="next-project__years">{yearRange(next)}</span>
                <strong>{next.title}</strong>
                <span className="next-project__label">Next project</span>
            </a>
        </PageWrapper>
    );
}
