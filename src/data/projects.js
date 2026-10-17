import data from './projects.json';

// Newest first.
const projects = [...data.projects].sort((a, b) => b.startDate.localeCompare(a.startDate));

export default projects;
