import projects from './projects';

export const sanitize = (s) => s.replace(/[^a-z0-9]/gi, '_').toLowerCase();

export const projectPath = (project) => '/project/' + sanitize(project.title);

export const byTitle = (title) => projects.find((p) => p.title === title);

export const imageSrc = (image) => encodeURI('/images/' + image.file.path);

export const findImage = (project, fragment) =>
    project.images.find((image) => image.file.path.includes(fragment));

export const headerImage = (project) =>
    project.images.find((image) => image.id === project.headerImageId) || project.images[0];

const year = (date) => new Date(date).getUTCFullYear();

export const yearRange = (project) => {
    const start = year(project.startDate);
    if (!project.endDate) return `${start}–now`;
    const end = year(project.endDate);
    return end === start ? `${start}` : `${start}–${end}`;
};

export const projectLinks = (project) => {
    const links = [];
    if (project.websiteURL) links.push({ label: 'Website', url: project.websiteURL });
    if (project.githubURL) {
        const url = project.githubURL.startsWith('http') ? project.githubURL : 'https://' + project.githubURL;
        links.push({ label: 'GitHub', url });
    }
    if (project.mediumURL) links.push({ label: 'Article', url: project.mediumURL });
    if (project.productHuntURL) links.push({ label: 'Product Hunt', url: project.productHuntURL });
    if (project.twitter) links.push({ label: 'Twitter', url: project.twitter });
    return links;
};

export default projects;
