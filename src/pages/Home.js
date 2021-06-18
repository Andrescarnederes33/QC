import React, { Fragment } from "react";

/*Components*/
import Fold from "../components/Fold";
import WhyFunction from "../components/WhyFunction";
import Banner from "../components/Banner";
import Events from "../components/Events";
import Carousel from "../components/Carousel";
import Faq from "../components/Faq";
import Title from "../components/Title";

/*Material UI*/
import Button from "@material-ui/core/Button"

const Home = () => {
	return (
		<Fragment>
			{/*Fold Section*/}
			<Fold />

			{/*Why Section*/}
			<WhyFunction />

			{/*Banner*/}
			<Banner />

			{/*Events*/}
			<Events />

			{/*Customers*/}
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

			{/*Events*/}
			<Faq />
		</Fragment>
	);
};

export default Home;
