import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ link1, content }) => {
  return (
    <Fragment>
      <Link to={`${link1}`}>{content}</Link>
    </Fragment>
  );
};

export default Breadcrumbs;
