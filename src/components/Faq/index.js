import React from "react";

/*Components*/
import Title from "../Title";

/*Material UI*/
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Faq = () => {
	return (
		<section className="Section" style={{ backgroundColor: "#f5f2f1" }}>
			<Title text="Preguntas frecuentes" />
			<br />
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<Typography variant="h6">¿Pregunta 1?</Typography>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Aenean ornare neque hendrerit vestibulum congue. Sed
					eleifend malesuada luctus. Vestibulum blandit libero sit
					amet nisl vestibulum imperdiet. Cras consequat volutpat
					nisl, sit amet lobortis mauris. Duis facilisis tempor
					imperdiet. Vivamus congue blandit magna, a vulputate velit
					posuere id. Aenean imperdiet a nunc sit amet dapibus.
				</Grid>
				<Grid item xs={12} sm={6}>
					<Typography variant="h6">¿Pregunta 2?</Typography>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Aenean ornare neque hendrerit vestibulum congue. Sed
					eleifend malesuada luctus. Vestibulum blandit libero sit
					amet nisl vestibulum imperdiet. Cras consequat volutpat
					nisl, sit amet lobortis mauris. Duis facilisis tempor
					imperdiet. Vivamus congue blandit magna, a vulputate velit
					posuere id. Aenean imperdiet a nunc sit amet dapibus.
				</Grid>
				<Grid item xs={12} sm={6}>
					<Typography variant="h6">¿Pregunta 3?</Typography>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Aenean ornare neque hendrerit vestibulum congue. Sed
					eleifend malesuada luctus. Vestibulum blandit libero sit
					amet nisl vestibulum imperdiet. Cras consequat volutpat
					nisl, sit amet lobortis mauris. Duis facilisis tempor
					imperdiet. Vivamus congue blandit magna, a vulputate velit
					posuere id. Aenean imperdiet a nunc sit amet dapibus.
				</Grid>
				<Grid item xs={12} sm={6}>
					<Typography variant="h6">¿Pregunta 4?</Typography>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Aenean ornare neque hendrerit vestibulum congue. Sed
					eleifend malesuada luctus. Vestibulum blandit libero sit
					amet nisl vestibulum imperdiet. Cras consequat volutpat
					nisl, sit amet lobortis mauris. Duis facilisis tempor
					imperdiet. Vivamus congue blandit magna, a vulputate velit
					posuere id. Aenean imperdiet a nunc sit amet dapibus.
				</Grid>
			</Grid>
		</section>
	);
};

export default Faq;
