import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

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
      <h1>John Doe</h1>
      <p>Web Developer</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skills">
      <Skill name="HTML" level="90%" />
      <Skill name="CSS" level="80%" />
      <Skill name="JavaScript" level="70%" />
      <Skill name="React" level="60%" />
    </div>
  );
}

function Skill({ name, level }) {
  return (
    <div className="skill">
      <h3>{name}</h3>
      <div className="level" style={{ width: level }}>
        {level}
      </div>
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
