import React from "react";

/*Components*/
import Tablegifts from "../Tablegifts";

/*Styles*/
import "./Fold.css";

const Fold = () => {
	return (
		<div>
			<div className="Fold"></div>
			<div className="Fold_Container">
				<div className="Fold_Sub">
					<Tablegifts />
				</div>
			</div>
		</div>
	);
};

export default Fold;
