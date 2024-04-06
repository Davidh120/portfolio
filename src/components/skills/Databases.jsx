import React, {useState} from "react";

export const Databases = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className="skill-content">
      <div>
        <i className="uil uil-window skill-icon"></i>
        <h3 className="skill-title">
        Databases
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
          <h3 className="skill-modal-title">Databases</h3>
          <div className="skills-box">
                <div className="skills-group">
                    <div className="skills-data">
                        <i className="uil uil-graduation-cap"></i>
                        <div>
                            <h3 className="skills-name">MySQL</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills-data">
                        <i className="uil uil-graduation-cap"></i>
                        <div>
                            <h3 className="skills-name">PostgreSQL</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills-data">
                        <i className="uil uil-graduation-cap"></i>
                        <div>
                            <h3 className="skills-name">MongoDB</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>
                </div>
                <div className="skills-group">
                    <div className="skills-data">
                        <i className="uil uil-graduation-cap"></i>
                        <div>
                            <h3 className="skills-name">FireStore</h3>
                            <span className="skills-level">Basic</span>
                        </div>
                    </div>
                    <div className="skills-data">
                        <i className="uil uil-graduation-cap"></i>
                        <div>
                            <h3 className="skills-name">CouchDb</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills-data">
                        <i className="uil uil-graduation-cap"></i>
                        <div>
                            <h3 className="skills-name">Redis</h3>
                            <span className="skills-level">Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
