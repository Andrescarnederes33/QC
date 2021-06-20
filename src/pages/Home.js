import React, { Fragment } from "react";

/*Containers*/
import Fold from "../containers/Fold";
import Functions from "../containers/Functions";
import Banner from "../containers/Banner";
import Events from "../containers/Events";
import Custommers from "../containers/Custommers";
import Faq from "../containers/Faq";

/*Components*/
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<Fragment>

			<Header />

			{/*Fold Section*/}
			<Fold />

			{/*Why Section*/}
			<Functions />

			{/*Banner*/}
			<Banner />

			{/*Events*/}
			<Events />

			{/*Customers*/}
			<Custommers />

			{/*Events*/}
			<Faq />

			<Footer />
		</Fragment>
	);
};

export default Home;
