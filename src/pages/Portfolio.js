import React, { useEffect, useState } from "react";
import classes from "../components/Layout/Layout.module.scss";
import ProjectDiv from "../components/projectDiv/ProjectDiv";
import { useDispatch, useSelector } from "react-redux";
import { listProjects } from "../actions/projectAction";
import Loading from "../components/Loading/Loading.js";
import ErrorMessage from "../components/Error/Error.js";
import { useTranslation } from "react-i18next";
const Portfolio = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const projectList = useSelector((state) => state.projectList);
  const { loading, projects, error } = projectList;
  useEffect(() => {
    dispatch(listProjects());
  }, [dispatch]);
  const [search, setSearch] = useState("");
  return (
    <>
      <div className={classes.container__portfolio}>
        <div className={classes.container__portfolio__search}>
          <h1>{t("Some of my recent works")}</h1>
          <input
            type="text"
            id="search"
            name="search"
            value={search}
            placeholder={`${t("Search")}`}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {error && <ErrorMessage>{t("There was an error occurred while fetching the data")}</ErrorMessage>}
        {loading && <Loading />}
        <div className={classes.container__portfolio__content}>
          {projects
            ?.filter((filteredProject) =>
              filteredProject.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((project) => (
              <ProjectDiv project={project} key={project._id} />
            ))}
        </div>
        {(!projects?.filter((filteredProject) =>
          filteredProject.title.toLowerCase().includes(search.toLowerCase())
        ).length && !error && !loading) && <ErrorMessage>{t("There is no project with this name")}</ErrorMessage>}
      </div>
    </>
  );
};

export default Portfolio;
