import React, { useState } from "react";

/*Components*/
import Title from "../../components/Title";
import Section from "../../components/Section";
import MiniCard from "../../components/MiniCard";
import Modal from "../../components/Modal";

/*Material Ui*/
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

/*Styles*/
import "./style.css";

const events = [
	{
		title: "Boda",
		description:
			"Dile “sí, acepto” y celebra tu boda con los mejores productos.",
		image: "img/boda.jpg",
		link: "#",
	},
	{
		title: "Baby Shower",
		description:
			"Dile “sí, acepto” y celebra tu boda con los mejores productos.",
		image: "img/baby-shower.jpg",
		link: "#",
	},
	{
		title: "Tu cumpleaños",
		description:
			"¡Un años más! Festeja a lo grande y recibe todo lo que soñaste.",
		image: "img/cumple.jpg",
		link: "#",
	},
	{
		title: "Graduación",
		description: "Tantos años de esfuerzo merecer recompensa.",
		image: "img/graduacion.jpg",
		link: "#",
	},
	{
		title: "Despedida de soltera/o",
		description: "¡Has que los preparativos sean más divertidos!",
		image: "img/despedida.jpg",
		link: "#",
	},
	{
		title: "Tu nuevo hogar",
		description: "Decora tu nuevo hogar con los mejores productos.",
		image: "img/hogar.jpg",
		link: "#",
	},
];

const Banner = () => {
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const openModal = () => {
		setOpen(true);
	};

	return (
		<Section classNameColor="Section__Bg-two">
			<Title text="Te acompañamos en cualquier evento" />
			<br />
			<div className="Section__Grid-events">
				{events.map((item, index) => (
					<MiniCard
						key={index}
						title={item.title}
						description={item.description}
						image={item.image}
						link={item.link}
					/>
				))}
			</div>

			<br />
			<br />

			<Typography variant="h5">¿OTROS EVENTOS?</Typography>
			<Typography variant="body1">
				Festeja cualquier momento especial tu graduación, tu nuevo
				hogar, bautizos y primeras comuniones, en ﬁn… Lo que sea que
				celebres. Tenemos la mesa de regalos digital perfecta para que
				tu evento sea inolvidable.
			</Typography>
			<br />

			{/*Modal Login*/}
			<Modal open={open} handleClose={handleClose} />

			<center>
				<Button onClick={openModal} variant="contained" color="primary">
					Crea tu mesa
				</Button>
			</center>
		</Section>
	);
};

export default Banner;
