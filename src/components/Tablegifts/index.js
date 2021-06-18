import React, { useState } from "react";

/*Hooks*/
import useForm from "../../hooks/useForm";

/*Material Ui*/
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";

/*Icons*/
import SearchIcon from "@material-ui/icons/Search";

/*Styles*/
import "./styles.css";

const CardBox = ({ title, subtitle, textButton }) => {
	return (
		<Box className="Box_Item">
			<div className="Box_Title">
				<Typography variant="h6">{title}</Typography>
				<Typography variant="body1">{subtitle}</Typography>
				<p />
				<Button
					component="a"
					href="#"
					variant="contained"
					color="primary"
				>
					{textButton}
				</Button>
			</div>
		</Box>
	);
};

const Tablegifts = () => {
	const searched = () => {
		console.log("Searched", values, select);
	};

	/*Hook Form*/
	const [values, handleChange, handleSubmit] = useForm(searched);

	const [select, setSelect] = useState("");

	const handleSelect = (e) => {
		setSelect(e.target.value);
	};

	return (
		<div>
			<Typography variant="h4" component="h3">
				Mesa de regalos
			</Typography>
			<br />
			<div className="Tablegifts_Container">
				<Box className="Box_Left">
					<form onSubmit={handleSubmit} className="Form_Container">
						<div className="Box_Title">
							<Typography variant="h6">Buscar Evento</Typography>
						</div>

						<div className="Form_Box">
							<div className="Input_Box">
								<TextField
									size="small"
									placeholder="Nombre de evento, Festejados"
									variant="outlined"
									name="email"
									value={values.email || ""}
									onChange={handleChange}
									color="secondary"
									fullWidth
								/>
							</div>
							<div className="Input_Box">
								<small>Fecha</small>
								<TextField
									type="date"
									size="small"
									name="date"
									value={values.date || ""}
									onChange={handleChange}
									placeholder="Outlined"
									color="secondary"
									variant="outlined"
									fullWidth
								/>
							</div>
							<div className="Input_Box">
								<small>Tipo</small>
								<NativeSelect
									onChange={handleSelect}
									value={select}
									style={{ width: "100%" }}
									color="secondary"
								>
									{/*<option aria-label="None" value="" />*/}
									<option value="Boda">Boda</option>
									<option value="Baby Shower">
										Baby Shower
									</option>
									<option value="Cumpleaños">
										Cumpleaños
									</option>
									<option value="Graduación">
										Graduación
									</option>
									<option value="Despedida solter@">
										Despedida solter@
									</option>
									<option value="Tu nuevo hogar">
										Tu nuevo hogar
									</option>
								</NativeSelect>
							</div>

							<div className="Input_Box">
								<Button
									type="submit"
									variant="contained"
									color="primary"
								>
									Buscar
								</Button>
							</div>
						</div>

						<div className="Box_Footer">
							<div>
								<SearchIcon color="primary" size="small" />
							</div>
							<div>
								<Typography
									component="a"
									href="#"
									variant="body2"
									color="primary"
								>
									Más formas de buscar
								</Typography>
							</div>
						</div>
					</form>

					<div className="Box_Button_Mobil">
						<Button variant="contained" fullWidth color="primary">
							Buscar un evento
						</Button>
					</div>
				</Box>

				<Box className="Box_Right">
					<CardBox
						title="Crear"
						subtitle="¿Tienes un evento?"
						textButton="Crear tu mesa"
					/>

					<CardBox
						title="Administrar"
						subtitle="¿Ya creaste tu mesa?"
						textButton="Ingresa"
					/>
				</Box>
			</div>
		</div>
	);
};

export default Tablegifts;
