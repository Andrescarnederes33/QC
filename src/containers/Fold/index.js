import React from "react";

/*Components*/
import TableGifts from "../../components/TableGifts";

/*Styles*/
import "./style.css";

const Fold = () => {
	return (
		<div>
			<div className="Fold__Bg"></div>
			<div className="Fold__Container">
				<div className="Fold__Container-Gifts">
					<TableGifts />
				</div>
			</div>
		</div>
	);
};

export default Fold;
