import React, { Fragment } from "react";

/*Components*/
import Fold from "../components/Fold";
import Functions from "../containers/Functions";
import CallToAction from "../containers/CallToAction";
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

			{/*CallToAction*/}
			<CallToAction />

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
