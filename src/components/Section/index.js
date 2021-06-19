import React from "react";

/*Styles*/
import "./style.css";

const Section = ({ children, classNameColor }) => (
	<section className={`Section ${classNameColor}`}>{children}</section>
);

export default Section;
