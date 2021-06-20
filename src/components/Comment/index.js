import React from "react";

/*Material UI*/
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";

/*Icons*/
import PersonIcon from "@material-ui/icons/Person";

/*Styles*/
import "./style.css";

const Comment = ({ suscriptorName, title, rating, description }) => (
	<Box className="Comment__Container">
		<Box className="Comment__Container-box">
			<div className="Comment_Container-header">
				<div className="Comment_Container-icon">
					<PersonIcon fontSize="large" />
				</div>
				<div className="Comment_Container-subtitle">
					<Typography variant="h6">{suscriptorName}</Typography>
					<div className="Comment_Container-rating">
						<Rating name="read-only" value={rating} readOnly />
					</div>
				</div>
			</div>
			<Typography variant="h6">{title}</Typography>
			<Typography variant="body1">{description}</Typography>
		</Box>
	</Box>
);

export default Comment;
