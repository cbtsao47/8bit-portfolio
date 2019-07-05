import React from "react";
import "./About.scss";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";
const About = ({ title, text, techStacks }) => {
  return (
    <main className="main nes-container is-dark is-rounded">
      <div className="about">
        <div className="about-container">
          <Introduction title={title} text={text} />
        </div>
        <Skills techStacks={techStacks} />
      </div>
    </main>
  );
};

export default About;
About.defaultProps = {
  title: "Ben",
  text:
    "Self-motivated software engineer with experience in web development, customer service, and teaching mathematics. Passionate and hardworking with a penchant for meeting deadlines.",
  techStacks: {
    fe: ["JavaScript", "CSS3", "HTML5", "React", "SCSS", "Redux"],
    be: ["SQL", "Node", "PostgreSQL", "Git"]
  }
};
