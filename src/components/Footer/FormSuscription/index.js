import React from "react";

/*UI*/
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

/*Styles*/
import "./style.css";
// import useStyles from "./style";

const Suscription = () => {
	return (
		<form className="Suscription__Container">
			<Typography variant="h5">
				¡Regístrate a nuestro Newsletter!
			</Typography>
			<br />
			<TextField
				className="Suscription__Container-input"
				type="email"
				label="Escribe tu correo electrónico"
				variant="filled"
				color="secondary"
			/>
			<FormControlLabel
				value="girl"
				control={<Checkbox color="secondary" />}
				label="Mujer"
				labelPlacement="top"
			/>
			<FormControlLabel
				value="men"
				control={<Checkbox color="secondary" />}
				label="Hombre"
				labelPlacement="top"
			/>
			<Button type="submit" variant="contained" color="secondary">
				Registrar
			</Button>
		</form>
	);
};

export default Suscription;
