import React from "react";

/*Components*/
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const WhyFunction = () => {
	
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container>
				<Grid xs={12} sm={3}>1</Grid>
				<Grid xs={12} sm={3}>1</Grid>
				<Grid xs={12} sm={3}>1</Grid>
				<Grid xs={12} sm={3}>1</Grid>
			</Grid>
		</div>
	);
};

export default WhyFunction;
