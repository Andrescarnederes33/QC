import React from "react";

/*Components*/
import Title from "../Title";

/*Material Ui*/
import Button from "@material-ui/core/Button";

/*Styles*/
import "./styles.css";

const Banner = () => {
	return (
		<div className="Banner">
			<div className="Box_Banner_Left">
				<Title text="La mejor mesa para cualquier evento" />

				<ul>
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
			<div className="Box_Banner_Right">
				<img
					className="Banner_Image"
					src="http://mesa-sears.serverless.com.mx/assets/img/home/banner1.png"
					alt="Image"
				/>
			</div>
		</div>
	);
};

export default Banner;
