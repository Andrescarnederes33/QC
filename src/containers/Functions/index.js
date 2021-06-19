import React from "react";

/*Components*/
import Title from "../../components/Title";
import Section from "../../components/Section";
import CardColor from "../../components/CardColor";

/*Styles*/
import "./style.css";

const WhyFunction = () => {
	return (
		<Section classNameColor="Bg_One">
			<Title text="¿Como funciona?" />
			<br />
			<div className="Flex_Cards">
				<CardColor
					className="Flex_Card_Item"
					title="1. Elige un tipo de evento"
					textButton="Ver tipos de eventos"
					image="img/step1.png"
					widthImage="80%"
					bgColor="#ddd6e8"
				/>
				<CardColor
					className="Flex_Card_Item"
					title="2. Selecciona cómo recibir tus regalos"
					textButton="Ver tipos de eventos"
					image="img/step2.png"
					widthImage="80%"
					bgColor="#eeeeed"
				/>
				<CardColor
					className="Flex_Card_Item"
					title="3. Selecciona tus regalos"
					textButton="Ver tipos de eventos"
					image="img/step3.png"
					widthImage="80%"
					bgColor="#f5f9fc"
				/>
				<CardColor
					className="Flex_Card_Item"
					title="4. Comparte tu mesa y disfruta"
					textButton="Ver tipos de eventos"
					image="img/step4.png"
					widthImage="50%"
					bgColor="#f6e5de"
				/>
			</div>
		</Section>
	);
};

export default WhyFunction;
