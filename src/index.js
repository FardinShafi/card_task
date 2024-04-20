import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skills = [
  { skill: "HTML + CSS", level: "intermediate", color: "Cyan" },
  { skill: "JavaScript", level: "intermediate", color: "Yellow" },
  { skill: "React", level: "beginner", color: "Blue" },
  { skill: "Node.js", level: "beginner", color: "Lime" },
  { skill: "MongoDB", level: "beginner", color: "Green" },
  { skill: "C++", level: "intermediate", color: "Violet" },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://avatars.githubusercontent.com/u/99902301?v=4"
      alt="Avatar"
    />
  );
}
function Intro() {
  return (
    <div>
      <h1>Fardin Ahsan Shafi</h1>
      <p>
        <b>Web Developer | AI Enthusiast</b>
      </p>
      <p>
        Passionate programmer with decent knowledge is latest web stack and an
        AI enthusiast. When not coding or learning about machine learning , I
        like to play games, to draw, or to just enjoy some solo jamming with my
        guitar.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
