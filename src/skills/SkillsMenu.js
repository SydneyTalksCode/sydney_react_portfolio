import React, { Component } from 'react';
import classNames from 'classnames';
import "../styles/skillsMenu.css";
import skills from "./skillsData";
import frontendIcon from "../assets/eagle-emblem.png";
import backendIcon from "../assets/hawk-emblem.png";
import cybersecurityIcon from "../assets/cybersecurity_icon.png";

export default class SkillsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 1, 
    };
  }

  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItem: menuItem, 
    });
  };

  renderContent(skillSet) {
    return skillSet && skillSet.map((skill, index) => (
      <div key={index} className={`skill-sub-container-${this.state.activeMenuItem}`}>
        <h3>{skill.title}</h3>
      </div>
    ));
  }

  render() {
    const { activeMenuItem } = this.state;
    const menuItems = [
      { title: "FRONT-END", value: 1 },
      { title: "BACK-END", value: 2 },
      { title: "CYBERSECURITY", value: 3 }
    ];

    const currentIcon =
      activeMenuItem === 1 ? frontendIcon :
      activeMenuItem === 2 ? backendIcon :
      cybersecurityIcon;

    return (
      <div className='skill-menu'>
        {menuItems.map(item => (
          <div
            key={item.value}
            className={classNames("skill-item", { activeSkill: activeMenuItem === item.value })}
            onClick={() => this.handleMenuItemClick(item.value)} 
          >
            <h2 className='skill-title'>{item.title}</h2>
          </div>
        ))}
        <img className='skill-icon' src={currentIcon} alt="current-skill" />
        <div className='skill-sub-container'>
          {this.renderContent(skills[activeMenuItem])} 
        </div>
      </div>
    );
  }
};
