import React from "react";

/*Material Ui*/
import Typography from "@material-ui/core/Typography";

/*Styles*/
import "./styles.css";

const Title = ({ text }) => (
	<Typography variant="h4" className="Title">
		{text}
	</Typography>
);

export default Title;
