import React from 'react'

/*Material UI*/
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";

const Header = () => {
	return (
		<AppBar position="static" color="default">
			<ToolBar>
				<img src="img/logo.svg" width="150px" />
			</ToolBar>
		</AppBar>
	)
}

export default Header