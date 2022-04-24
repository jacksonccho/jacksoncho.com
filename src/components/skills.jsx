import React, { Component } from "react";
import Fade from "react-reveal/Fade";

/*Reactifying the css!*/
let technicals = require("./data/site-text.json");

export default class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "no section selected",
    };
  }
  constructSkillsList = (technicalSkillName, technicalSkills) => {
    return (
      <Fade bottom duration={1500}>
        <div>
          <h3 className="technical-skill-name-titling">{technicalSkillName}</h3>
          <div className="skill-container">
            {technicalSkills.map((technicalSkill) => {
              return (
                <div>
                  <div
                    className="technicals-list"
                    onMouseOver={() => {
                      this.setState({ selected: technicalSkill.file });
                    }}
                    onMouseOut={() => {
                      this.setState({ selected: "no section selected" });
                    }}
                  >
                    <img
                      style={{ height: "2.5em" }}
                      src={"./images/skills/" + technicalSkill.file}
                      className={
                        this.state.selected === technicalSkill.file
                          ? "skill-image-active"
                          : "skill-image-notactive"
                      }
                      alt={technicalSkill.name + " image"}
                    />{" "}
                  </div>
                  <span
                    id="skill-name"
                    className={
                      this.state.selected === technicalSkill.file
                        ? "skill-title-active"
                        : "skill-title-notactive"
                    }
                  >
                    {technicalSkill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Fade>
    );
  };

  /*Time to Return the Element*/
  render() {
    var technicalSkillGroupNames = [
      "Languages",
      "Libraries",
      "Web Development",
      "Other",
    ];
    return (
      <div
        className="base-section card card-coloring"
        id="skills"
        data-section="skills"
      >
        <div className="section-header">
          <span>Technical Skills</span>
        </div>
        <div>
          {technicalSkillGroupNames.map((skillGroupName) => {
            var technicalSkills = technicals[skillGroupName];
            return this.constructSkillsList(skillGroupName, technicalSkills);
          })}
        </div>
      </div>
    );
  }
}
