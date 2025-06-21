import { useState } from "react";

export const SkillsContainer = ({name, skills, skills_row}) => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="skill-content">
      <div>
        <i className="uil uil-window skill-icon"></i>
        <h3 className="skill-title">
          {name} <br /> developer
        </h3>
      </div>
      <span className="skill-button" onClick={() => toggleTab(1)}>
        View More
        <i className="uil uil-arrow-right skill-button-icon"></i>
      </span>
      <div
        className={
          toggleState === 1 ? "skill-modal active-modal" : "skill-modal"
        }
      >
        <div className="skill-modal-content">
          <i
            className="uil uil-times skill-modal-close"
            onClick={() => toggleTab(0)}
          ></i>
          <h3 className="skill-modal-title">{name} developer</h3>
          <div className="skills-box">
            {[...Array(Math.ceil(skills.length / skills_row))].map((_, groupIndex) => {
              const group = skills.slice(groupIndex * skills_row, groupIndex * skills_row + skills_row);
              return (
                <div className="skills-group" key={groupIndex}>
                  {group.map((skill) => (
                    <div className="skills-data" key={skill.name}>
                      <i className="uil uil-graduation-cap"></i>
                      <div>
                        <h3 className="skills-name">{skill.name}</h3>
                        <span className="skills-level">{skill.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
