import React from "react";
import { UseStyles } from "../CSS/BodyStyles";

export default function Header() {
  const classes = UseStyles();
  return <div className={classes.header}>Hello</div>;
}
