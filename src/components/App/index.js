import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../Layout";

/*Pages*/
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route component={Home} exact path="/" />
					<Route path="*" component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
