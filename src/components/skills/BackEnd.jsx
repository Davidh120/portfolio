import React, {useState} from "react";

export const BackEnd = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className="skill-content">
      <div>
        <i className="uil uil-window skill-icon"></i>
        <h3 className="skill-title">
        BackEnd <br /> developer
        </h3>
      </div>
      <span className="skill-button" onClick={() => toggleTab(1)}>
        View More
        <i className="uil uil-arrow-right skill-button-icon"></i>
      </span>
      <div className={toggleState === 1 ? "skill-modal active-modal" : "skill-modal"}>
        <div className="skill-modal-content">
          <i
            className="uil uil-times skill-modal-close"
            onClick={() => toggleTab(0)}
          ></i>
          <h3 className="skill-modal-title">BackEnd developer</h3>
          <div className="skills-box">
                <div className="skills-group">
                    <div className="skills-data">
                        <i className="uil uil-graduation-cap"></i>
                        <div>
                            <h3 className="skills-name">Node.Js</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills-data">
                        <i className="uil uil-graduation-cap"></i>
                        <div>
                            <h3 className="skills-name">Express.Js</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills-data">
                        <i className="uil uil-graduation-cap"></i>
                        <div>
                            <h3 className="skills-name">Sails.Js</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>
                </div>
                <div className="skills-group">
                    <div className="skills-data">
                        <i className="uil uil-graduation-cap"></i>
                        <div>
                            <h3 className="skills-name">Python</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>
                    <div div className="skills-data">
                        <i className="uil uil-graduation-cap"></i>
                        <div>
                            <h3 className="skills-name">Django</h3>
                            <span className="skills-level">Basic</span>
                        </div>
                    </div>
                    <div className="skills-data">
                        <i className="uil uil-graduation-cap"></i>
                        <div>
                            <h3 className="skills-name">Odoo</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
