import React from "react";

/*Material Ui*/
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

/*Styles*/
import "./style.css";

const CardColor = ({
	title,
	textButton,
	link,
	image,
	widthImage,
	classNameColor,
}) => (
	<Box boxShadow={1} className={`CardColor__Container ${classNameColor}`}>
		<div className="CardColor__Title">
			<Typography variant="h6">{title}</Typography>
		</div>

		<div className="CardColor__Link">
			{textButton && <a href={link || "#"}>{textButton}</a>}
		</div>

		<div className="CardColor__Image">
			<img src={image} alt="image" width={widthImage || "80%"} />
		</div>
	</Box>
);

export default CardColor;
