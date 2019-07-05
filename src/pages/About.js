import React from "react";
import "./About.scss";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";
const About = ({ title, text }) => {
  return (
    <main className="main nes-container is-dark is-rounded">
      <div className="about-container  nes-container is-rounded is-dark">
        <Introduction title={title} text={text} />
      </div>
      {/* <div>123</div> */}
      {/* <Skills /> */}
    </main>
  );
};

export default About;
About.defaultProps = {
  title: "Ben",
  text:
    "Self-motivated software engineer with experience in web development, customer service, and teaching mathematics. Passionate and hardworking with a penchant for meeting deadlines."
};
