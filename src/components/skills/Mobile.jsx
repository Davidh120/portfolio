import React, {useState} from "react";

export const Mobile = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className="services-content">
      <div>
        <i className="uil uil-window services-icon"></i>
        <h3 className="services-title">
        Mobile <br /> developer
        </h3>
      </div>
      <span className="services-button" onClick={() => toggleTab(1)}>
        View More
        <i className="uil uil-arrow-right services-button-icon"></i>
      </span>
      <div className={toggleState === 1 ? "services-modal active-modal" : "services-modal"}>
        <div className="services-modal-content">
          <i
            className="uil uil-times services-modal-close"
            onClick={() => toggleTab(0)}
          ></i>
          <h3 className="services-modal-title">Mobile developer</h3>
          <div className="skills-box">
                <div className="skills-group">
                    <div className="skills-data">
                        <i className="uil uil-graduation-cap"></i>
                        <div>
                            <h3 className="skills-name">Flutter</h3>
                            <span className="skills-level">Basic</span>
                        </div>
                    </div>
                    <div className="skills-data">
                        <i className="uil uil-graduation-cap"></i>
                        <div>
                            <h3 className="skills-name">Dart</h3>
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
