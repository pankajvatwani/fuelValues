import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CalculateIcon from '@mui/icons-material/Calculate';
import BallotIcon from '@mui/icons-material/Ballot';
import FileUploadIcon from '@mui/icons-material/FileUpload';
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
					selected={pathname.includes('taxes')}
					sx={{
						display: 'flex',
						flexDirection: 'column'
					}}
					onClick={() => {
						forwardTo('/taxes');
					}}
				>
					<ListItemIcon sx={{ minWidth: '24px' }}>
						{/* <ShoppingCartIcon /> */}
						<AccountBalanceIcon />
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
					selected={pathname.includes('compute')}
					sx={{
						display: 'flex',
						flexDirection: 'column'
					}}
					onClick={() => {
						forwardTo('/compute');
					}}
				>
					<ListItemIcon sx={{ minWidth: '24px' }}>
						<CalculateIcon />
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
					selected={pathname.includes('fees')}
					sx={{
						display: 'flex',
						flexDirection: 'column'
					}}
					onClick={() => {
						forwardTo('/fees/new');
					}}
				>
					<ListItemIcon sx={{ minWidth: '24px' }}>
						<BallotIcon />
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
					selected={pathname.includes('upload')}
					sx={{
						display: 'flex',
						flexDirection: 'column'
					}}
					onClick={() => {
						forwardTo('/upload');
					}}
				>
					<ListItemIcon sx={{ minWidth: '24px' }}>
						<FileUploadIcon />
					</ListItemIcon>
					<ListItemText
						sx={{
							'& span': {
								fontWeight: 700
							}
						}}
						primary="Upload Taxes/Fees"
					/>
				</ListItem>
			</Box>
		);
	}
}

export default withRouter(MainListItems);
