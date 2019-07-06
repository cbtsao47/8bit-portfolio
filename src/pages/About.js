import React from "react";
import "./About.scss";
import Introduction from "../components/Introduction/Introduction";
import Skills from "../components/Skills/Skills";
import html from "../assets/html5.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/iconfinder_React.js_logo_1174949.png";
import node from "../assets/iconfinder_nodejs-512_339733 (1).png";
import graphql from "../assets/graphql.png";
import sql from "../assets/sql.png";
import postgresql from "../assets/postgresql_32px_541006_easyicon.net.png";
import redux from "../assets/Redux.png";
import sass from "../assets/sass.png";

const About = ({ title, text, techStacks }) => {
  return (
    <main className="main main-about nes-container is-dark is-rounded">
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
    fe: [
      { JavaScript: js },
      { React: react },
      { Redux: redux },
      { HTML5: html },
      { CSS3: css },
      { Sass: sass }
    ],
    be: [
      { Node: node },
      { PostgreSQL: postgresql },
      { SQL: sql },
      { GraphQL: graphql }
    ]
  }
};
