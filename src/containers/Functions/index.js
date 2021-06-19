import React from "react";

/*Components*/
import Title from "../../components/Title";
import Section from "../../components/Section";
import CardColor from "../../components/CardColor";

/*Styles*/
import "./style.css";

/*List Functions*/
const functions = [
	{
		classNameColor: "Card__Bg-one",
		title: "1. Elige un tipo de evento",
		image: "img/step1.png",
		textButton: "Ver tipos de eventos",
		link: "#",
	},
	{
		classNameColor: "Card__Bg-two",
		title: "2. Selecciona cómo recibir tus regalos",
		image: "img/step2.png",
		textButton: "Ver nuestros planes",
		link: "#",
	},
	{
		classNameColor: "Card__Bg-three",
		title: "3. Selecciona tus regalos",
		image: "img/step3.png",
		textButton: "Ver catálogo",
		link: "#",
	},
	{
		classNameColor: "Card__Bg-four",
		title: "4. Comparte tu mesa y disfruta",
		image: "img/step4.png",
		widthImage: "50%",
	},
];

const WhyFunction = () => {
	return (
		<Section classNameColor="Section_Bg-one">
			<Title text="¿Como funciona?" />
			<br />
			<div className="Flex_Cards">
				{functions.map((item, index) => (
					<CardColor
						key={index}
						classNameColor={item.classNameColor}
						title={item.title}
						image={item.image}
						widthImage={item.widthImage}
						textButton={item.textButton}
					/>
				))}
			</div>
		</Section>
	);
};

export default WhyFunction;
