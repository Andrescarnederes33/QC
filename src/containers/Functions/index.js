import React from "react";

/*Components*/
import Title from "../../components/Title";
import CardColor from "../../components/CardColor";

/*Styles*/
import "./styles.css";

const WhyFunction = () => {
	return (
		<section className="Section" style={{ backgroundColor: "#f5f2f1" }}>
			<Title text="¿Como funciona?" />
			<br />
			<div className="Flex_Cards">
				<CardColor
					className="Flex_Card_Item"
					title="1. Elige un tipo de evento"
					textButton="Ver tipos de eventos"
					image="http://mesa-sears.serverless.com.mx/assets/img/home/como3.png"
					widthImage="80%"
					color="#ddd6e8"
				/>
				<CardColor
					className="Flex_Card_Item"
					title="2. Selecciona cómo recibir tus regalos"
					textButton="Ver tipos de eventos"
					image="http://mesa-sears.serverless.com.mx/assets/img/home/como1.png"
					widthImage="80%"
					color="#eeeeed"
				/>
				<CardColor
					className="Flex_Card_Item"
					title="3. Selecciona tus regalos"
					textButton="Ver tipos de eventos"
					image="http://mesa-sears.serverless.com.mx/assets/img/home/como4.png"
					widthImage="80%"
					color="#f5f9fc"
				/>
				<CardColor
					className="Flex_Card_Item"
					title="4. Comparte tu mesa y disfruta"
					textButton="Ver tipos de eventos"
					image="http://mesa-sears.serverless.com.mx/assets/img/home/como2.png"
					widthImage="50%"
					color="#f6e5de"
				/>
			</div>
		</section>
	);
};

export default WhyFunction;
