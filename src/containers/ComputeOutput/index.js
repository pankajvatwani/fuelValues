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
import moment from 'moment';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
function ComputeOutput({ state, back }) {
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

	const taxTotal = () => {
		let sum = 20;
		computed.TaxCustomer.map((a) => (sum += Number(a.Total)));
		return sum;
	};

	const feeTotal = () => {
		let sum = 20;
		computed.FeesCustomer.map((a) => (sum += Number(a.Total)));
		return sum;
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
			<Breadcrumbs sx={{ pl: '24px' }}>
				<Link underline="hover" color="inherit">
					Home
				</Link>
				<Link underline="hover" color="inherit" onClick={() => back()}>
					Compute
				</Link>
				<Link underline="hover" color="text.primary">
					Computed Taxes and Fees
				</Link>
			</Breadcrumbs>
			<Accordion sx={{ mt: '16px', mb: '16px', ml: '24px' }}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography sx={{ fontSize: '20px', color: '#F5874A', fontWeight: 700 }}>
						Selection Summary
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Box>
						<Grid container>
							<Grid item xs={12} md={6} lg={4}>
								<List sx={{ width: '100%', bgcolor: 'background.paper' }}>
									<BasicListItem type={'Transaction Type'} value={transactionType} />
									<BasicListItem type={'IATA'} value={iata.label} />
									<BasicListItem type={'ETD'} value={moment(etd).format('MMM Do YY')} />
									<BasicListItem
										type={'Time From'}
										value={moment(timeFrom).format('MMMM Do YYYY, h:mm:ss a')}
									/>
									<BasicListItem
										type={'Time To'}
										value={moment(timeTo).format('MMMM Do YYYY, h:mm:ss a')}
									/>
									<BasicListItem type={'Customs'} value={customs} />
								</List>
							</Grid>
							<Grid item xs={12} md={6} lg={4}>
								<List sx={{ width: '100%', bgcolor: 'background.paper' }}>
									<BasicListItem type={'Fuel'} value={fuelType.label} />
									<BasicListItem type={'AirCraft Type'} value={aircraftType.label} />
									<BasicListItem type={'FlightService Type'} value={flightServiceType.label} />
									<BasicListItem type={'Corp/Commercial'} value={corpCommercial} />
									<BasicListItem
										type={'International Flight'}
										value={internationalFlight ? 'Yes' : 'No'}
									/>
									<BasicListItem type={'Customer'} value={customer} />
								</List>
							</Grid>
							<Grid item xs={12} md={6} lg={4}>
								<List sx={{ width: '100%', bgcolor: 'background.paper' }}>
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
					<Box sx={{ borderColor: 'divider', pl: '24px' }}>
						<TabList
							sx={{ '& .Mui-selected': { color: 'white !important', backgroundColor: '#4F85D7' } }}
							onChange={handleChange}
						>
							<Tab label="Customer" value="1" />
							<Tab label="Supplier/Agents" value="2" />
						</TabList>
					</Box>
					<TabPanel value="1">
						<Box>
							<PanelTemplate header={`Taxes`}>
								<Grid container spacing={3}>
									<Grid item xs={12}>
										<ComputedOutputTable rows={computed.TaxCustomer} />
									</Grid>
								</Grid>
							</PanelTemplate>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									flexDirection: 'column'
								}}
							>
								<Box sx={{ fontWeight: 700, pt: '8px' }}>Flat Tax - $20</Box>
								<Box sx={{ fontWeight: 700, pt: '8px' }}>
									Total Taxes Including Flat Tax- ${taxTotal().toFixed(6)}
								</Box>
							</Box>
						</Box>
						<Box>
							<PanelTemplate header={`Fees`}>
								<Grid container spacing={3}>
									<Grid item xs={12}>
										<ComputedOutputTable isFees={true} rows={computed.FeesCustomer} />
									</Grid>
								</Grid>
							</PanelTemplate>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									flexDirection: 'column'
								}}
							>
								<Box sx={{ fontWeight: 700, pt: '8px' }}>Flat Fee - $20</Box>
								<Box sx={{ fontWeight: 700, pt: '8px' }}>
									Total Fees Including Flat Fee - ${feeTotal().toFixed(6)}
								</Box>
							</Box>
						</Box>
					</TabPanel>
					<TabPanel value="2">
						<Box>
							<PanelTemplate header={`Taxes`}>
								<Grid container spacing={3}>
									<Grid item xs={12}>
										<ComputedOutputTable rows={computed.TaxSupplier} />
									</Grid>
								</Grid>
							</PanelTemplate>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									flexDirection: 'column'
								}}
							>
								<Box sx={{ fontWeight: 700, pt: '8px' }}>Flat Tax - $20</Box>
								<Box sx={{ fontWeight: 700, pt: '8px' }}>
									Total Taxes Including Flat Tax- ${taxTotal().toFixed(6)}
								</Box>
							</Box>
						</Box>
						<Box>
							<PanelTemplate header={`Fees`}>
								<Grid container spacing={3}>
									<Grid item xs={12}>
										<ComputedOutputTable isFees={true} rows={computed.FeesVendors} />
									</Grid>
								</Grid>
							</PanelTemplate>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									flexDirection: 'column'
								}}
							>
								<Box sx={{ fontWeight: 700, pt: '8px' }}>Flat Fee - $20</Box>
								<Box sx={{ fontWeight: 700, pt: '8px' }}>
									Total Fees Including Flat Fee - ${feeTotal().toFixed(6)}
								</Box>
							</Box>
						</Box>
					</TabPanel>
				</TabContext>
			</Box>
		</Box>
	);
}

export default ComputeOutput;
