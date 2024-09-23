import React, { Component } from 'react';
import classNames from 'classnames';
import projects from './projectsData';
import '../styles/ProjectsMenu.css';

export default class ProjectsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: 1, // Default to project 1
    };
  }

  handleProjectClick = (projectIndex) => {
    this.setState({
      activeProject: projectIndex,
    });
  };

  renderContent = (project) => {
    if (!project) return null; // Handle undefined project
    return (
      <div className={`project-sub-container-${project.title}`}>
        <h3>{project.title}</h3>
        <img src={project.image} alt={project.title}></img>
        <div>{project.description}</div>
        <div className="link-container">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GITHUB
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            DEMO
          </a>
        </div>
      </div>
    );
  };

  render() {
    const { activeProject } = this.state;

    // Get the active project from the projects object
    const currentProject = projects[activeProject];

    // You can either hardcode the project titles or derive them from the projects object
    const projectItems = Object.keys(projects).map((key) => projects[key].title);

    return (
      <div className="project-menu">
        <div className="project-items-container">
          {Object.keys(projects).map((key, index) => (
            <div
              key={index}
              className={classNames('project-item', {
                activeProject: activeProject === parseInt(key), // Check if the current project is active
              })}
              onClick={() => this.handleProjectClick(parseInt(key))} // Set active project by its key
            >
              <h2 className="title">{projectItems[index]}</h2>
            </div>
          ))}
        </div>
        <div className="project-sub-container">
          {this.renderContent(currentProject)} {/* Render the content of the active project */}
        </div>
      </div>
    );
  }
}
