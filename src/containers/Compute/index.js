import React from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { cloneDeep } from 'lodash';

function Compute() {
	const [ expanded, setExpanded ] = React.useState([]);

	const handleChange = (panel) => (event, isExpanded) => {
		if (isExpanded) {
			let cloneExpanded = cloneDeep(expanded);
			cloneExpanded.push(panel);
			setExpanded(cloneExpanded);
		} else {
			let cloneExpanded = cloneDeep(expanded);
			setExpanded(cloneExpanded.filter((ex) => ex !== panel));
		}
	};
	return (
		<Box
			component="main"
			sx={{
				backgroundColor: '#f1f1f1',
				flexGrow: 1,
				height: '100vh',
				overflow: 'auto',
				pt: '120px',
				pr: '32px',
				pl: '32px'
			}}
		>
			<Accordion expanded={expanded.includes('panel1')} onChange={handleChange('panel1')}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
					<Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 700 }}>Transaction Type</Typography>
					{/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est,
						id dignissim quam.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded.includes('panel2')} onChange={handleChange('panel2')}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
					<Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 700 }}>Users</Typography>
					<Typography sx={{ color: 'text.secondary' }}>You are currently not an owner</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros
						in elit. Pellentesque convallis laoreet laoreet.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded.includes('panel3')} onChange={handleChange('panel3')}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
					<Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 700 }}>Advanced settings</Typography>
					<Typography sx={{ color: 'text.secondary' }}>
						Filtering has been entirely disabled for whole web server
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae
						egestas augue. Duis vel est augue.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded.includes('panel4')} onChange={handleChange('panel4')}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
					<Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 700 }}>Personal data</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae
						egestas augue. Duis vel est augue.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
}

export default Compute;
