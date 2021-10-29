/* eslint-disable no-unused-vars */
import React from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ComputeOutput({ state }) {
	const {
		intoPlane,
		intoTruck,
		intoTank,
		commercial,
		bonded,
		// commercialBonded,
		international,
		domestic,
		dutyFree,
		dutyPaid,
		ftz,
		fuelType,
		aircraftType,
		flightServiceType,
		corpCommercial,
		internationalFlight,
		iata,
		etd,
		timeFrom,
		timeTo,
		customer,
		supplier
	} = state;
	const customsKeys = [
		'commercial',
		'bonded',
		'commercialBonded',
		'international',
		'domestic',
		'dutyFree',
		'dutyPaid',
		'ftz'
	];
	let customs = customsKeys.find((c) => state[c]);
	let transactionType;
	if (intoPlane) {
		transactionType = 'Into Plane';
	} else if (intoTruck) {
		transactionType = 'Into Truck';
	} else {
		transactionType = 'Into Tank';
	}
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
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography sx={{ fontSize: '20px', color: '#F5874A', fontWeight: 700 }}>
						Selection Summary
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Box>
						<Typography>Transaction Type :{transactionType}</Typography>
						<Typography>IATA :{iata.label}</Typography>
						<Typography>ETD :{etd}</Typography>
						<Typography>Time From :{timeFrom}</Typography>
						<Typography>Time To :{timeTo}</Typography>
						<Typography>Customs:{customs}</Typography>
						<Typography>Fuel :{fuelType.label}</Typography>
						<Typography>AirCraft Type :{aircraftType.label}</Typography>
						<Typography>FlightService Type :{flightServiceType.label}</Typography>
					</Box>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
}

export default ComputeOutput;
