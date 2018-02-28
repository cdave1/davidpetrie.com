import React from 'react'
import ProjectPage from '../Components/ProjectPage.jsx';

class ProjectTemplate extends React.Component {
    render() {
        if (this.props.pageResources) {
            const project = this.props.pageResources.json.pathContext.project

            return (
                <ProjectPage project={project} />
            )
        } else if (this.props.pathContext) {
            // Bug fix: this path is different under 'gatbsy build'
            const project = this.props.pathContext.project

            return (
                <ProjectPage project={project} />
            )
        } else {
            console.log("THIS IS THE PROPS", this.props);
            return (<div />)
        }
    }
}

export default ProjectTemplate