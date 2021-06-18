import React, { createRef, useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

/*Material Ui*/
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/styles";

/*Components*/

/*Iconst*/
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

/*Styles*/
const useStyles = makeStyles({
	arrowRight: {
		position: "absolute",
		top: "50%",
		zIndex: "2",
		backgroundColor: "white",
		transform: "translateY(-50%)",
		right: "-1em",
		// padding: '20px',
		boxShadow: "-6px 6px 12px rgba(0, 0, 0, 0.08)",
		"&:hover": {
			//you want this to be the same as the backgroundColor above
			backgroundColor: "#FFF",
		},
	},
	arrowLeft: {
		position: "absolute",
		top: "50%",
		zIndex: "2",
		backgroundColor: "white",
		transform: "translateY(-50%)",
		left: "-1em",
		// padding: '20px',
		boxShadow: "6px 6px 12px rgba(0, 0, 0, 0.08)",
		"&:hover": {
			//you want this to be the same as the backgroundColor above
			backgroundColor: "#FFF",
		},
	},
	arrowIcon: {
		color: "#F7931E",
	},
});

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

	/*Styles*/
	const classes = useStyles();

	return (
			<div className="glide" ref={ref}>
				<div className="glide__arrows" data-glide-el="controls">
					<IconButton
						className={classes.arrowLeft}
						data-glide-dir="<"
					>
						<KeyboardArrowLeftIcon
							fontSize="large"
							className={classes.arrowIcon}
						/>
					</IconButton>
				</div>
				<div className="glide__track" data-glide-el="track">
					<ul className="glide__slides">
						{items.map((item, index) => (
							<li key={index} className="glide__slide px-1">
								<Box boxShadow={1}>
									<img src={item.imageUrl} alt="Carousel Item" />
								</Box>
							</li>
						))}
					</ul>
				</div>
				<div className="glide__arrows" data-glide-el="controls">
					<IconButton
						className={classes.arrowRight}
						data-glide-dir=">"
					>
						<KeyboardArrowRightIcon
							fontSize="large"
							className={classes.arrowIcon}
						/>
					</IconButton>
				</div>
			</div>
	);
}
