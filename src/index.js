import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skills = [
  { skill: "HTML + CSS", level: "intermediate", color: "Cyan" },
  { skill: "JavaScript", level: "intermediate", color: "Yellow" },
  { skill: "React", level: "beginner", color: "Blue" },
  { skill: "Node.js", level: "beginner", color: "Green" },
  { skill: "MongoDB", level: "beginner", color: "Green" },
  { skill: "C++", level: "intermediate", color: "Purple" },
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
      <p>Web Developer | AI Enthusiast</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skills">
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
      <span>{level === "beginner" "}</span>
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
