import React from 'react'
import ProjectPage from '../Components/ProjectPage.jsx';

class ProjectTemplate extends React.Component {
  render() {
    const project = this.props.pageResources.json.pathContext.project

    return (
      <ProjectPage project={project} />
    )
  }
}

export default ProjectTemplate