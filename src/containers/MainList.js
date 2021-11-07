import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { forwardTo } from './utils';
import { withRouter } from 'react-router-dom';
import { Box } from '@mui/system';
class MainListItems extends React.Component {
	render() {
		const { pathname } = this.props.location;
		return (
			<Box
				sx={{
					'& .Mui-selected': {
						backgroundColor: '#F5874A !important',
						color: 'white',
						'& svg': {
							color: 'white'
						}
					}
				}}
			>
				<ListItem
					button
					sx={{
						display: 'flex',
						flexDirection: 'column'
					}}
				>
					<ListItemIcon sx={{ minWidth: '24px' }}>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText
						sx={{
							'& span': {
								fontWeight: 700
							}
						}}
						primary="Dashboard"
					/>
				</ListItem>
				<ListItem
					button
					selected={pathname === '/taxes'}
					sx={{
						display: 'flex',
						flexDirection: 'column'
					}}
					onClick={() => {
						forwardTo('/taxes');
					}}
				>
					<ListItemIcon sx={{ minWidth: '24px' }}>
						<ShoppingCartIcon />
					</ListItemIcon>
					<ListItemText
						sx={{
							'& span': {
								fontWeight: 700
							}
						}}
						primary="Taxes"
					/>
				</ListItem>
				<ListItem
					button
					selected={pathname === '/compute'}
					sx={{
						display: 'flex',
						flexDirection: 'column'
					}}
					onClick={() => {
						forwardTo('/compute');
					}}
				>
					<ListItemIcon sx={{ minWidth: '24px' }}>
						<AssignmentIcon />
					</ListItemIcon>
					<ListItemText
						sx={{
							'& span': {
								fontWeight: 700
							}
						}}
						primary="Compute"
					/>
				</ListItem>

				<ListItem
					button
					sx={{
						display: 'flex',
						flexDirection: 'column'
					}}
				>
					<ListItemIcon sx={{ minWidth: '24px' }}>
						<PeopleIcon />
					</ListItemIcon>
					<ListItemText
						sx={{
							'& span': {
								fontWeight: 700
							}
						}}
						primary="Fees"
					/>
				</ListItem>
				<ListItem
					button
					sx={{
						display: 'flex',
						flexDirection: 'column'
					}}
				>
					<ListItemIcon sx={{ minWidth: '24px' }}>
						<BarChartIcon />
					</ListItemIcon>
					<ListItemText
						sx={{
							'& span': {
								fontWeight: 700
							}
						}}
						primary="Reports"
					/>
				</ListItem>
				<ListItem
					button
					sx={{
						display: 'flex',
						flexDirection: 'column'
					}}
				>
					<ListItemIcon sx={{ minWidth: '24px' }}>
						<LayersIcon />
					</ListItemIcon>
					<ListItemText
						sx={{
							'& span': {
								fontWeight: 700
							}
						}}
						primary="Settings"
					/>
				</ListItem>
			</Box>
		);
	}
}

export default withRouter(MainListItems);
