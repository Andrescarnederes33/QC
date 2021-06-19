import React, { Fragment } from "react";

/*Containers*/
import Fold from "../containers/Fold";
import Functions from "../containers/Functions";
import Banner from "../containers/Banner";
import Events from "../containers/Events";
import Custommers from "../containers/Custommers";
import Faq from "../containers/Faq";

const Home = () => {
	return (
		<Fragment>
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
		</Fragment>
	);
};

export default Home;
