import React from "react";

/*Styles*/
import "./style.css";

const Section = ({ children, classNameColor }) => (
	<section className={`Section_Container ${classNameColor}`}>{children}</section>
);

export default Section;
