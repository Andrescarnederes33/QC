import React, { createRef, useEffect } from "react";

/*Components*/
import Glide from "@glidejs/glide";
import Comment from "../Comment";

/*Material Ui*/
import IconButton from "@material-ui/core/IconButton";

/*Icons*/
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

/*Styles*/
import "./style.css";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

const defaultBreakPoints = {
	1000: {
		perView: 2,
	},
	400: {
		perView: 1,
	},
};

export default function productsSlider(props) {
	const { items, breakpoints, perView } = props;

	/*Deafult breakpoints*/
	const breakpointOptions = breakpoints ? breakpoints : defaultBreakPoints;

	const ref = createRef();

	//component did mount
	useEffect(() => {
		new Glide(ref.current, {
			perView: perView,
			type: "carousel",
			breakpoints: breakpointOptions,
		}).mount();
	}, []);

	return (
		<div className="glide" ref={ref}>
			<div className="glide__arrows" data-glide-el="controls">
				<IconButton
					className="Carousel__Button-left"
					data-glide-dir="<"
				>
					<KeyboardArrowLeftIcon
						fontSize="large"
						className="Carousel__Button-icon"
					/>
				</IconButton>
			</div>
			<div className="glide__track" data-glide-el="track">
				<ul className="glide__slides">
					{items.map((item, index) => (
						<li key={index} className="glide__slide px-1">
							<Comment
								suscriptorName="Suscriptor Name"
								title="La mejor mesa de regalos"
								rating={5}
								description="Some default text to fill some space, and something more"
							/>
						</li>
					))}
				</ul>
			</div>
			<div className="glide__arrows" data-glide-el="controls">
				<IconButton
					className="Carousel__Button-right"
					data-glide-dir=">"
				>
					<KeyboardArrowRightIcon
						fontSize="large"
						className="Carousel__Button-icon"
					/>
				</IconButton>
			</div>
		</div>
	);
}
