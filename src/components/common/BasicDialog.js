import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Compute from '../../containers/Compute';
import { Box } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="left" ref={ref} {...props} />;
});

export default function AlertDialog({ open, handleClose }) {
	return (
		<div>
			<Dialog fullWidth maxWidth="xl" TransitionComponent={Transition} open={open} onClose={handleClose}>
				<Box sx={{ backgroundColor: '#f1f1f1' }}>
					<DialogTitle sx={{ color: '#FF7141' }}>{'Define Tax'}</DialogTitle>
					<DialogContent>
						<Compute isCreate={true} />
					</DialogContent>

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
							<Button
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
							</Button>
						</Box>
						<Box>
							<Button
								sx={{
									mr: '24px',
									width: '192px',
									height: '54px',

									backgroundColor: '#4F85D7',
									borderRadius: '25px'
								}}
								variant="contained"
								onClick={handleClose}
							>
								Next
							</Button>
							<Button
								sx={{
									width: '200px',
									height: '54px',

									backgroundColor: '#3F8F22',
									borderRadius: '25px'
								}}
								variant="contained"
								onClick={handleClose}
							>
								Save and Next
							</Button>
						</Box>
					</Box>
				</Box>
			</Dialog>
		</div>
	);
}
