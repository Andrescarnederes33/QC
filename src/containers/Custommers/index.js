import React from "react";

/*Components*/
import Title from "../../components/Title";
import Section from "../../components/Section";
import Carousel from "../../components/Carousel";

/*Material UI*/
import Button from "@material-ui/core/Button";

const items = [
	{
		imageUrl: "img/reviews.jpg",
	},
];

const index = () => {
	return (
		<Section classNameColor="Section__Bg-three">
			<Title text="Escucha lo que dicen nuestros clientes" />
			<br />
			<Carousel items={items} perView={4} />
			<br />
			<center>
				<Button
					component="a"
					href="#"
					variant="contained"
					color="primary"
				>
					Ver mas opciones
				</Button>
			</center>
		</Section>
	);
};

export default index;
