import React from "react";

/*Components*/
import Title from "../../components/Title";

/*Material Ui*/
import Button from "@material-ui/core/Button";

/*Styles*/
import "./style.css";

const Banner = () => {
	return (
		<div className="Banner__Container">
			<div className="Banner_Box-left">
				<Title text="La mejor mesa para cualquier evento" />

				<ul className="Banner__Box-list">
					<li>Miles de productos en un solo lugar</li>
					<li>Súper fácil para ti y tus invitados</li>
					<li>
						Envío y devoluciones gratis, recibe dinero en un
						monedero Sears para que compres lo que quieras y más
					</li>
				</ul>

				<Button variant="contained" color="primary">
					Crea tu mesa
				</Button>
			</div>
			<div className="Banner_Box-right">
				<img
					className="Banner__Image"
					src="img/banner.png"
					alt="Image"
				/>
			</div>
		</div>
	);
};

export default Banner;
