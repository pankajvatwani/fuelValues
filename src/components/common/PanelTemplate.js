import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const styles = (theme) => ({
	mainPaper: {
		padding: theme.spacing(0.75),
		marginTop: theme.spacing(2),
		boxShadow: '0px 0px 8px #00000029'
	},
	paperHeader: {
		background: '#f1f1f1',
		color: '#FF7141',
		padding: theme.spacing(1),
		fontWeight: 'bold',
		display: 'flex',
		alignItems: 'flex-start',
		marginBottom: '16px',
		fontSize: '20px'
	},
	greyHeader: {
		background: '#6D6D6F',
		color: 'white'
	}
});

class PanelTemplate extends Component {
	render() {
		const { children, classes, header, grey = false } = this.props;
		const classNames = classes.mainPaper;
		return (
			<Paper square className={classNames} variant="outlined">
				<Typography component="div" className={clsx(classes.paperHeader, grey && classes.greyHeader)}>
					{header}
				</Typography>
				{children}
			</Paper>
		);
	}
}

export default withStyles(styles)(PanelTemplate);
