import React,{ useState } from "react";

/*Components*/
import Title from "../Title";
import MiniCard from "../MiniCard";
import Modal from "../Modal";

/*Material Ui*/
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

/*Styles*/
import "./styles.css";

const Banner = () => {

	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<div className="Section" style={{ backgroundColor: "#f5f2f1" }}>
			<Title text="Te acompañamos en cualquier evento" />
			<br />
			<div className="Flex_Events">
				<MiniCard
					title="Boda"
					description="Dile “sí, acepto” y celebra tu boda con los mejores productos."
					image="http://mesa-sears.serverless.com.mx/assets/img/home/boda.jpg"
					link="#"
				/>
				<MiniCard
					title="Baby Shower"
					description="Dile “sí, acepto” y celebra tu boda con los mejores productos."
					image="http://mesa-sears.serverless.com.mx/assets/img/home/baby.jpg"
					link="#"
				/>
				<MiniCard
					title="Tu cumpleaños"
					description="¡Un años más! Festeja a lo grande y recibe todo lo que soñaste."
					image="http://mesa-sears.serverless.com.mx/assets/img/home/baby.jpg"
					link="#"
				/>
			</div>
			<br />

			<div className="Flex_Events">
				<MiniCard
					title="Graduación"
					description="Dile “sí, acepto” y celebra tu boda con los mejores productos."
					image="http://mesa-sears.serverless.com.mx/assets/img/home/graduacion.jpg"
					link="#"
				/>
				<MiniCard
					title="Despedida de soltera/o"
					description="Dile “sí, acepto” y celebra tu boda con los mejores productos."
					image="http://mesa-sears.serverless.com.mx/assets/img/home/despedida.jpg"
					link="#"
				/>
				<MiniCard
					title="Tu nuevo hogar"
					description="¡Un años más! Festeja a lo grande y recibe todo lo que soñaste."
					image="http://mesa-sears.serverless.com.mx/assets/img/home/hogar.jpg"
					link="#"
				/>
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

			<Button onClick={() => setOpen(true)} variant="contained" color="primary">
				Crea tu mesa
			</Button>
		</div>
	);
};

export default Banner;
