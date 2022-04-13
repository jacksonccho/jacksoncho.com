import React, { Component } from "react";
import Fade from "react-reveal/Fade";
let siteText = require("./data/site-text.json");

export default class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "no section selected",
      cardParity: "",
    };
  }
  createExperienceCard = (numEntry, xpInfo) => {
    this.cardParity = numEntry % 2;
    return (
      <Fade bottom>
        <div
        >
          <div
            id={xpInfo.company}
            className="card research-card card-coloring-left border-primary"
            onMouseOver={() => {
              this.setState({ selected: numEntry });
            }}
            onMouseOut={() => {
              this.setState({ selected: "no section selected" });
            }}
          >
            <div className="card-header">
              {xpInfo.company} | {xpInfo.date}
            </div>
            <div className="card-body">
              <h5>{xpInfo.title}</h5>
              <h6 className="card-subtitle mb-2" style={{ opacity: "0.5" }}>
                {xpInfo.location}
              </h6>
              <div className="research-image-wrapper-left">
                <img
                  className={
                    this.state.selected === numEntry
                      ? "research-image-active"
                      : "research-image-not-active"
                  }
                  src={"./images/" + xpInfo.file}
                  alt={xpInfo.affiliation + " image"}
                />
              </div>
              <p>{xpInfo.description}</p>
            </div>
          </div>
        </div>
      </Fade>
    );
  };
  render() {
    var numAcademicEntries = Object.keys(
      siteText["Selected Academic Projects"]
    ).length;
    var academicEntryIterator = Array.from(Array(numAcademicEntries).keys());
    var numProfessionalEntries = Object.keys(
      siteText["Professional Experience"]
    ).length;
    var professionalEntryIterator = Array.from(
      Array(numProfessionalEntries).keys()
    );
    return (
      <div
        className="base-section card card-coloring"
        data-section="experience"
        data-target="experience"
        id="experience"
      >
        <section className="section-header base-section">
          {" "}
          <span>Experience</span>
        </section>
        <p className="section-body base-section about-section">
          {siteText["Experience Description Part 1"]}
          <a href="#IBM Watson Health">IBM Watson Health</a> and{" "}
          <a href="#GE Healthcare">GE Healthcare</a>
          {siteText["Experience Description Part 2"]}
        </p>
        {/* <a
          data-bs-toggle="collapse"
          href="#multiCollapseExample2"
          role="button"
          aria-expanded="true"
          aria-controls="multiCollapseExample2"
        >
          Professional Experience
        </a> */}
        {/* <div className="collapse show" id="multiCollapseExample2"> */}
        <div>
          {professionalEntryIterator.map((numProfEntry) => {
            var entryInfo = siteText["Professional Experience"][numProfEntry];
            return this.createExperienceCard(numProfEntry, entryInfo);
          })}
        </div>
        {/* </div> */}
        {/* <a
          data-bs-toggle="collapse"
          href="#multiCollapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Selected Academic Experience
        </a> */}
        {/* <div className="collapse multi-collapse" id="multiCollapseExample1"> */}
        <div>
          {academicEntryIterator.map((numAcademicEntry) => {
            var totalEntries =
              numAcademicEntry +
              Object.keys(siteText["Professional Experience"]).length;
            var entryInfo =
              siteText["Selected Academic Projects"][numAcademicEntry];
            return this.createExperienceCard(totalEntries, entryInfo);
          })}
        </div>
        {/* </div> */}
      </div>
    );
  }
}
