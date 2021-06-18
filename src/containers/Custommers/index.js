import React from "react";

/*Components*/
import Title from "../../components/Title";
import Carousel from "../../components/Carousel";

/*Material UI*/
import Button from "@material-ui/core/Button"

const index = () => {
	return (
		<section className="Section" style={{ backgroundColor: "#e3eaf6" }}>
			<Title text="Escucha lo que dicen nuestros clientes" />
			<br />
			<Carousel
				items={[
					{
						imageUrl:
							"http://mesa-sears.serverless.com.mx/assets/img/home/reviews.jpg",
					},
				]}
				perView={4}
			/>
			<center>
				<Button variant="contained" color="primary">
					Ver mas opciones
				</Button>
			</center>
		</section>
	);
};

export default index;
