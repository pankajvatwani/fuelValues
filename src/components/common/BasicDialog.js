import * as React from 'react';
// import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Compute from '../../containers/Compute';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="left" ref={ref} {...props} />;
});

export default function AlertDialog({ open, handleClose }) {
	return (
		<div>
			<Dialog fullWidth maxWidth="lg" TransitionComponent={Transition} open={open} onClose={handleClose}>
				<DialogTitle>{'Create New Tax'}</DialogTitle>
				<DialogContent>
					<Compute isCreate={true} />
				</DialogContent>
				<DialogActions>
					{/* <Button onClick={handleClose}>Disagree</Button>
					<Button onClick={handleClose} autoFocus>
						Agree
					</Button> */}
				</DialogActions>
			</Dialog>
		</div>
	);
}
