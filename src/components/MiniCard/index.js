import React from "react";

/*Material UI*/
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

/*Styles*/
import "./style.css";

const MiniCard = ({ title, description, image, textButton, link }) => (
  <Card className="MiniCard__Container">
    <img className="MiniCard__Image" src={image} />
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
      <br />
      <Button component="a" href={link} size="small" color="primary">
        {textButton || "Crea tu mesa"}
      </Button>
    </CardContent>
  </Card>
);

export default MiniCard;
