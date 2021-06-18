import React from "react";

/*Material Ui*/
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

/*Styles*/
import "./styles.css";

const CardColor = ({ title, textButton, link, image, widthImage, color }) => (
	<Card
		className="CardColor_Container"
		style={{ backgroundColor: color || "#FFF" }}
	>
		<CardContent className="CardColor_Box">
			<div className="CardColor_Text">
				<div className="CardColor_Title">
					<Typography variant="h6">{title || ""}</Typography>
				</div>
				<div className="CardColor_Link">
					<a href={link || "#"}>{textButton || ""}</a>
				</div>
			</div>
			<div className="CardColor_Image">
				<img
					src={image || ""}
					alt="image"
					width={widthImage || "100%"}
				/>
			</div>
		</CardContent>
	</Card>
);

export default CardColor;
