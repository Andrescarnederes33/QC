import { useState } from "react";

const useForm = (submitCallback) => {
	const [state, setState] = useState({});

	const handleChange = (event) => {
		event.persist();
		setState((state) => ({
			...state,
			[event.target.name]: event.target.value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		submitCallback();
	};

	const clearStateChange = () => {
		setState({});
	};

	return [state, handleChange, handleSubmit, clearStateChange];
};

export default useForm;
