import React from "react";
import { Link } from "react-router-dom";
import cookies from "js-cookie";
function projectDiv({ project }) {
  const lang = cookies.get("i18next") || "en";
  return (
    <div>
      <img src={`https://helmi-portfolio.herokuapp.com/${project.screenshots[0]}`} alt={project.screenshots[0]} />
      {/* <img src={project.screenshots[0]} alt={project.screenshots[0]} /> */}
      <Link to={`/Portfolio/${project._id}`}>
        <p>
          <span>{project.title}</span>
          <br />
          {lang === "en"? project.about:project.aboutFR}
        </p>
      </Link>
    </div>
  );
}

export default projectDiv;
