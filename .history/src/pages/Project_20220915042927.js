import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import classes from "../components/Layout/Layout.module.scss";
import axios from "axios";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import cookies from "js-cookie";

export default function Project() {
  const lang = cookies.get("i18next") || "en";
  const { t } = useTranslation();
  let { id } = useParams();
  const [projects, setProjects] = useState([]);
  const getProjectByID = async () => {
    const { data } = await axios.get(`/api/projects/${id}`);
    setProjects(data);
  };
  useEffect(() => {
    getProjectByID();
  });
  let images = [];
  projects.screenshots?.map((screenshot) => images.push(screenshot));
  return (
    <>
      <div className={classes.container__project}>
        <h1>{projects?.title}</h1>
        <p>{lang === "en" ? projects?.subtitle : projects?.subtitleFR} </p>
        <hr />
        <h2>{t("About the project")}</h2>
        <p>{lang === "en" ? projects?.about : projects?.aboutFR} </p>
        <br />
        <h2>{t("Technologies")}</h2>
        <ul>
          {projects.technologies?.map((technologie) => (
            <li key={technologie}>{technologie}</li>
          ))}
        </ul>
        <br />
        <h2>{t("Screenshots")}</h2>
        <ImageSlider slides={images} />
        <br />
        <h2>{t("Showcase")}</h2>
        <div className={classes.container__project__buttons}>
          {projects?.showcase?.[0] === "" ? (
            <button className={classes.container__project__buttons__button1}>
              DEMO
            </button>
          ) : (
            <a href={projects?.showcase?.[0]}>
              <button className={classes.container__project__buttons__button1}>
                DEMO
              </button>
            </a>
          )}
          {projects?.showcase?.[1]===""?}
          <a href={projects?.showcase?.[1]}>
            <button className={classes.container__project__buttons__button2}>
              SOURCE CODE
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
