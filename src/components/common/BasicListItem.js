import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CircleIcon from '@mui/icons-material/Circle';

function BasicListItem({ type, value }) {
	return (
		<ListItem>
			<ListItemButton>
				<ListItemIcon>
					<CircleIcon fontSize="small" />
				</ListItemIcon>
				<ListItemText sx={{ '& span': { fontWeight: 700 } }} primary={`${type} : ${value}`} />
			</ListItemButton>
		</ListItem>
	);
}

export default BasicListItem;
