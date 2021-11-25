import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

function Menus(props) {
	const [ anchorEl, setAnchorEl ] = React.useState(null);
	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<div>
			<IconButton
				sx={{
					backgroundColor: 'grey',
					'&:hover': {
						backgroundColor: 'grey'
					}
				}}
				onClick={handleMenu}
			>
				{props.icon}
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left'
				}}
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				{props.menuItems.map((item, index) => (
					<MenuItem key={index} onClick={handleClose}>
						{item}
					</MenuItem>
				))}
			</Menu>
		</div>
	);
}

export default Menus;
