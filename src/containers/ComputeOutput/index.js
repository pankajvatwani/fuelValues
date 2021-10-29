import React from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import BasicListItem from '../../components/common/BasicListItem';
import { Grid } from '@mui/material';
import PanelTemplate from '../../components/common/PanelTemplate';
import ComputedOutputTable from '../../components/common/ComputeOutputTable';
import { computed } from '../../data/CalculatedTax';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
function ComputeOutput({ state }) {
	const {
		intoPlane,
		intoTruck,
		// intoTank,
		// commercial,
		// bonded,
		// commercialBonded,
		// international,
		// domestic,
		// dutyFree,
		// dutyPaid,
		// ftz,
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
		supplier,
		ipal,
		fuelQty,
		ruom,
		rcurr
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
	const [ value, setValue ] = React.useState('1');

	const handleChange = (event, newValue) => {
		setValue(newValue);
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
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography sx={{ fontSize: '20px', color: '#F5874A', fontWeight: 700 }}>
						Selection Summary
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Box>
						<Grid container>
							<Grid item xs={12} md={6}>
								<List sx={{ width: '100%', bgcolor: 'background.paper' }}>
									<BasicListItem type={'Transaction Type'} value={transactionType} />
									<BasicListItem type={'IATA'} value={iata.label} />
									<BasicListItem type={'ETD'} value={etd} />
									<BasicListItem type={'Time From'} value={timeFrom} />
									<BasicListItem type={'Time To'} value={timeTo} />
									<BasicListItem type={'Customs'} value={customs} />
									<BasicListItem type={'Fuel'} value={fuelType.label} />
									<BasicListItem type={'AirCraft Type'} value={aircraftType.label} />
									<BasicListItem type={'FlightService Type'} value={flightServiceType.label} />
								</List>
							</Grid>
							<Grid item xs={12} md={6}>
								<List sx={{ width: '100%', bgcolor: 'background.paper' }}>
									<BasicListItem type={'Corp/Commercial'} value={corpCommercial} />
									<BasicListItem
										type={'International Flight'}
										value={internationalFlight ? 'Yes' : 'No'}
									/>
									<BasicListItem type={'Customer'} value={customer} />
									<BasicListItem type={'Supplier'} value={supplier} />
									<BasicListItem type={'Into-Plane Agent'} value={ipal.label} />
									<BasicListItem type={'Fuel Qty'} value={fuelQty} />
									<BasicListItem type={'Required UOM'} value={ruom.label} />
									<BasicListItem type={'Required Currency'} value={rcurr.label} />
								</List>
							</Grid>
						</Grid>
					</Box>
				</AccordionDetails>
			</Accordion>

			<Box sx={{ width: '100%', typography: 'body1', mt: '10px' }}>
				<TabContext value={value}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<TabList onChange={handleChange}>
							<Tab label="Customer" value="1" />
							<Tab label="Supplier/Agents" value="2" />
						</TabList>
					</Box>
					<TabPanel value="1">
						<PanelTemplate header={`Taxes`}>
							<Grid container spacing={3}>
								<Grid item xs={12}>
									<ComputedOutputTable rows={computed.TaxCustomer} />
								</Grid>
							</Grid>
						</PanelTemplate>
						<PanelTemplate header={`Fees`}>
							<Grid container spacing={3}>
								<Grid item xs={12}>
									<ComputedOutputTable isFees={true} rows={computed.FeesCustomer} />
								</Grid>
							</Grid>
						</PanelTemplate>
					</TabPanel>
					<TabPanel value="2">
						<PanelTemplate header={`Taxes`}>
							<Grid container spacing={3}>
								<Grid item xs={12}>
									<ComputedOutputTable rows={computed.TaxSupplier} />
								</Grid>
							</Grid>
						</PanelTemplate>
						<PanelTemplate header={`Fees`}>
							<Grid container spacing={3}>
								<Grid item xs={12}>
									<ComputedOutputTable isFees={true} rows={computed.FeesVendors} />
								</Grid>
							</Grid>
						</PanelTemplate>
					</TabPanel>
				</TabContext>
			</Box>
		</Box>
	);
}

export default ComputeOutput;
