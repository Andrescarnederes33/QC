import React from "react";

/*Material Ui*/
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

/*Styles*/
import "./style.css";

const CardColor = ({ title, textButton, link, image, widthImage, bgColor }) => (
	<Card className="CardColor__Container" style={{ backgroundColor: bgColor }}>
		<CardContent className="CardColor__Box">
			<div className="CardColor__Text">
				<div className="CardColor__Title">
					<Typography variant="h6">{title}</Typography>
				</div>
				<div className="CardColor__Link">
					<a href={link}>{textButton}</a>
				</div>
			</div>
			<div className="CardColor__Image">
				<img src={image} alt="image" width={widthImage} />
			</div>
		</CardContent>
	</Card>
);

export default CardColor;
