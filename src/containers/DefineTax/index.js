import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import { forwardTo } from '../utils';
import Compute from '../Compute';
import { useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';

function DefineTax(props) {
	const location = useLocation();
	const { pathname } = location;
	const isEdit = pathname.includes('edit');
	return (
		<Box
			component="main"
			sx={{
				backgroundColor: '#f1f1f1',
				flexGrow: 1,
				height: '100vh',
				overflow: 'auto',
				pt: '90px',
				pr: '32px'
			}}
		>
			<Breadcrumbs sx={{ pl: '32px', cursor: 'pointer' }}>
				<Link underline="hover" color="inherit">
					Home
				</Link>
				<Link
					underline="hover"
					color="inherit"
					onClick={() => {
						forwardTo('/taxes');
					}}
				>
					Taxes
				</Link>
				<Link underline="hover" color="text.primary">
					{isEdit ? 'Edit Tax' : 'Define Tax'}
				</Link>
			</Breadcrumbs>

			{isEdit && (
				<Box sx={{ pl: '32px', pt: '24px' }}>
					<Typography>Your Code - 838982384444</Typography>
					<Typography>FV Code - FV653-838982384444</Typography>
				</Box>
			)}

			<Compute isCreate={true} />

			<Box
				sx={{
					pr: '48px',
					pl: '48px',
					mb: '24px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between'
				}}
			>
				<Box>
					{/* <Button
								variant="contained"
								onClick={handleClose}
								sx={{
									backgroundColor: '#4F85D7',
									borderRadius: '25px',
									width: '192px',
									height: '54px'
								}}
							>
								Previous
							</Button> */}
				</Box>
				<Box>
					<Button
						sx={{
							width: '200px',
							height: '54px',

							backgroundColor: '#3F8F22',
							borderRadius: '25px'
						}}
						variant="contained"
						onClick={() => {
							forwardTo('/taxes');
						}}
						disableFocusRipple
					>
						Save
					</Button>
				</Box>
			</Box>
		</Box>
	);
}

export default DefineTax;
