import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';

export const mainListItems = (
	<div>
		<ListItem
			button
			sx={{
				display: 'flex',
				flexDirection: 'column',
				'&:hover': {
					backgroundColor: '#F5874A',
					color: 'white',
					'& svg': {
						color: 'white'
					}
				}
			}}
		>
			<ListItemIcon sx={{ minWidth: '24px' }}>
				<HomeIcon />
			</ListItemIcon>
			<ListItemText primary="Dashboard" />
		</ListItem>
		<ListItem
			button
			sx={{
				display: 'flex',
				flexDirection: 'column',
				'&:hover': {
					backgroundColor: '#F5874A',
					color: 'white',
					'& svg': {
						color: 'white'
					}
				}
			}}
		>
			<ListItemIcon sx={{ minWidth: '24px' }}>
				<ShoppingCartIcon />
			</ListItemIcon>
			<ListItemText primary="Taxes" />
		</ListItem>
		<ListItem
			button
			sx={{
				display: 'flex',
				flexDirection: 'column',
				'&:hover': {
					backgroundColor: '#F5874A',
					color: 'white',
					'& svg': {
						color: 'white'
					}
				}
			}}
		>
			<ListItemIcon sx={{ minWidth: '24px' }}>
				<PeopleIcon />
			</ListItemIcon>
			<ListItemText primary="Fees" />
		</ListItem>
		<ListItem
			button
			sx={{
				display: 'flex',
				flexDirection: 'column',
				'&:hover': {
					backgroundColor: '#F5874A',
					color: 'white',
					'& svg': {
						color: 'white'
					}
				}
			}}
		>
			<ListItemIcon sx={{ minWidth: '24px' }}>
				<BarChartIcon />
			</ListItemIcon>
			<ListItemText primary="Reports" />
		</ListItem>
		<ListItem
			button
			sx={{
				display: 'flex',
				flexDirection: 'column',
				'&:hover': {
					backgroundColor: '#F5874A',
					color: 'white',
					'& svg': {
						color: 'white'
					}
				}
			}}
		>
			<ListItemIcon sx={{ minWidth: '24px' }}>
				<LayersIcon />
			</ListItemIcon>
			<ListItemText primary="Settings" />
		</ListItem>
	</div>
);
