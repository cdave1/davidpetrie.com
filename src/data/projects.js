import _ from 'lodash';
import data from './projects.json';

const projects = _.orderBy(data.projects, ['startDate'], ['desc']);

export default projects;
