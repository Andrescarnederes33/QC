import React from "react";

/*Material UI*/
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

/*Styles*/
import "./styles.css";

const MiniCard = ({ title, description, image, textButton, link }) => (
  <Card className="MiniCard_Container">
    <img className="MiniCard_Image" src={image} />
    <CardContent>
      <Typography variant="h6">{title || ""}</Typography>
      <Typography variant="body2">{description}</Typography>
      <div align="right">
        <Button component="a" href={link || ""} size="small" color="primary">
          {textButton || "Crea tu mesa"}
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default MiniCard;
