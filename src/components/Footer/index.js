import React, { Fragment } from "react";

/*Components*/
import FormSuscription from "./FormSuscription";

/*UI*/
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

/*Icons*/
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";

/*Styles*/
import "./style.css";

const Footer = () => {
	return (
		<Fragment>
			<FormSuscription />
			<footer className="Footer__Container">
				<div className="Footer__Container-item">
					<Typography variant="body1">
						<b>NUESTRA COMPAÑIA</b>
					</Typography>
					<br />
					<ul className="Footer__Container-list">
						<li>Acerca de Nosotros</li>
						<li>Localizador de Tiendas</li>
						<li>Facturación Electrónica</li>
						<li>Mesa de Regalos</li>
					</ul>
				</div>
				<div className="Footer__Container-item">
					<Typography variant="body1">
						<b>POLÍTICAS SEARS</b>
					</Typography>
					<br />
					<ul className="Footer__Container-list">
						<li>Aviso de Privacidad</li>
						<li>Política de Cancelación</li>
						<li>Política de Devoluciones</li>
						<li>Política de Envío</li>
						<li>Política de Compra</li>
						<li>Políticas Market Place</li>
					</ul>
				</div>
				<div className="Footer__Container-item">
					<Typography variant="body1">
						<b>POLÍTICAS SEARS</b>
					</Typography>
					<br />
					<ul className="Footer__Container-list">
						<li>Dudas y Comentarios</li>
						<li>Formas de Pago</li>
						<li>Preguntas Frecuentes</li>
						<li>AutoCENTER</li>
					</ul>
				</div>
				<div className="Footer__Container-item">
					<Typography variant="body1">
						<b>POLÍTICAS SEARS</b>
					</Typography>
					<br />
					<Typography variant="body2">Síguenos:</Typography>
					<p />
					<div className="Footer__Container-redes">
						<IconButton size="small">
							<FacebookIcon fontSize="small" />
						</IconButton>
						<IconButton size="small">
							<InstagramIcon fontSize="small" />
						</IconButton>
						<IconButton size="small">
							<PinterestIcon fontSize="small" />
						</IconButton>
						<IconButton size="small">
							<YouTubeIcon fontSize="small" />
						</IconButton>
						<IconButton size="small">
							<TwitterIcon fontSize="small" />
						</IconButton>
					</div>
					<br />
					<Button component="a" href="#" color="primary">
						Por email
					</Button>
				</div>
			</footer>
		</Fragment>
	);
};

export default Footer;
