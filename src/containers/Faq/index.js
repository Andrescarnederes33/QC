import React from "react";

/*Components*/
import Title from "../../components/Title";
import Section from "../../components/Section";

/*Material UI*/
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

/*Styles*/
import "./style.css";

const items = [
	{
		title: "¿Pregunta 1?",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare neque hendrerit vestibulum congue. Sed eleifend malesuada luctus. Vestibulum blandit libero sit amet nisl vestibulum imperdiet. Cras consequat volutpat nisl, sit amet lobortis mauris. Duis facilisis tempor imperdiet. Vivamus congue blandit magna, a vulputate velit posuere id. Aenean imperdiet a nunc sit amet dapibus.",
	},
	{
		title: "¿Pregunta 2?",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare neque hendrerit vestibulum congue. Sed eleifend malesuada luctus. Vestibulum blandit libero sit amet nisl vestibulum imperdiet. Cras consequat volutpat nisl, sit amet lobortis mauris. Duis facilisis tempor imperdiet. Vivamus congue blandit magna, a vulputate velit posuere id. Aenean imperdiet a nunc sit amet dapibus.",
	},
	{
		title: "¿Pregunta 3?",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare neque hendrerit vestibulum congue. Sed eleifend malesuada luctus. Vestibulum blandit libero sit amet nisl vestibulum imperdiet. Cras consequat volutpat nisl, sit amet lobortis mauris. Duis facilisis tempor imperdiet. Vivamus congue blandit magna, a vulputate velit posuere id. Aenean imperdiet a nunc sit amet dapibus.",
	},
	{
		title: "¿Pregunta 4?",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare neque hendrerit vestibulum congue. Sed eleifend malesuada luctus. Vestibulum blandit libero sit amet nisl vestibulum imperdiet. Cras consequat volutpat nisl, sit amet lobortis mauris. Duis facilisis tempor imperdiet. Vivamus congue blandit magna, a vulputate velit posuere id. Aenean imperdiet a nunc sit amet dapibus.",
	},
];

const Faq = () => {
	return (
		<Section classNameColor="Section__Bg-four">
			<Title text="Preguntas frecuentes" />
			<br />
			<div className="Faq__Grid">
				{items.map((item, index) => (
					<div key={index} className="Faq__Grid-item">
						<Typography variant="h5">{item.title}</Typography>
						<Typography variant="body1">
							{item.description}
						</Typography>
					</div>
				))}
			</div>
			<br />
			<br />
			<center>
				<Button variant="contained" color="primary">
					Ver más preguntas
				</Button>
			</center>
		</Section>
	);
};

export default Faq;
