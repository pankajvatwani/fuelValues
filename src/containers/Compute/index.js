import React from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { cloneDeep, isEmpty } from 'lodash';
import BasicAutocomplete from '../../components/common/BasicAutocomplete';
import BasicSelect from '../../components/common/BasicSelect';
import {
	aircraftTypeData,
	customerData,
	flightServiceTypeData,
	fuelTypeData,
	IATAData,
	ICAOData,
	ipalData,
	supplierData,
	uomData
} from '../../data/finalSelectData';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';
import { FL } from '../../data/FLAirport';
import ComputeButton from '../../components/ComputeButton';
import ComputeOutput from '../ComputeOutput';

function Compute({ isCreate = false }) {
	const [ expanded, setExpanded ] = React.useState([ 'panel1', 'panel2', 'panel3', 'panel4', 'panel5' ]);

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
	const transactionTypeKeys = [ 'intoPlane', 'intoTruck', 'intoTank' ];
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

	const [ state, setState ] = React.useState({
		intoPlane: true,
		intoTruck: false,
		intoTank: false,
		commercial: false,
		bonded: false,
		commercialBonded: false,
		international: false,
		domestic: false,
		dutyFree: false,
		dutyPaid: false,
		ftz: false,
		fuelType: { label: '' },
		aircraftType: { label: '' },
		flightServiceType: { label: '' },
		corpCommercial: '',
		internationalFlight: false,
		iata: { label: '' },
		etd: new Date(),
		timeFrom: null,
		timeTo: null,
		customer: '',
		supplier: '',
		ipal: { label: '' },
		fuelQty: '',
		ruom: { label: '' },
		rcurr: { label: '' }
	});

	const [ input, setInput ] = React.useState(true);

	const handleTrasactionCheckboxChange = (event) => {
		let checkboxState = cloneDeep(state);
		transactionTypeKeys.map((key, index) => {
			checkboxState[key] = false;
			return null;
		});
		setState({
			...checkboxState,
			[event.target.name]: event.target.checked
		});
	};
	const handleCustomsCheckboxChange = (event) => {
		let customsState = cloneDeep(state);
		customsKeys.map((key, index) => {
			customsState[key] = false;
			return null;
		});
		setState({
			...customsState,
			[event.target.name]: event.target.checked
		});
	};

	const handleAutocompleteChange = (key) => (e, newValue) => {
		setState({
			...state,
			[key]: newValue
		});
	};

	const handleSelectChange = (key) => (e) => {
		setState({
			...state,
			[key]: e.target.value
		});
	};

	const handleIntFlightCheckboxChange = (event) => {
		setState({
			...state,
			internationalFlight: event.target.checked
		});
	};

	const handleIATAChange = (e, newValue) => {
		setState({
			...state,
			iata: newValue
		});
	};

	const handleTextFieldChange = (key) => (e) => {
		setState({
			...state,
			[key]: e.target.value
		});
	};

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
		supplier,
		ipal,
		fuelQty,
		ruom,
		rcurr
	} = state;

	const iataObject = FL.find((fl) => fl.IATA === iata.label);
	if (input) {
		return (
			<LocalizationProvider dateAdapter={DateAdapter}>
				<Box
					component="main"
					sx={{
						backgroundColor: '#f1f1f1',
						flexGrow: 1,
						height: '100vh',
						overflow: 'auto',
						pr: '32px',
						pl: '32px',
						pt: '16px',
						pb: '16px',
						...(!isCreate && {
							pt: '120px'
						})
					}}
				>
					<Accordion expanded={expanded.includes('panel1')} onChange={handleChange('panel1')}>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 700 }}>
								Transaction Type
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
								<FormControlLabel
									control={
										<Checkbox
											checked={intoPlane}
											onChange={handleTrasactionCheckboxChange}
											name="intoPlane"
										/>
									}
									sx={{ flex: 0.2 }}
									label="Into-Plane"
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={intoTruck}
											onChange={handleTrasactionCheckboxChange}
											name="intoTruck"
										/>
									}
									sx={{ flex: 0.2 }}
									label="Into-Truck"
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={intoTank}
											onChange={handleTrasactionCheckboxChange}
											name="intoTank"
										/>
									}
									label="Into-Tank"
								/>
							</FormGroup>
						</AccordionDetails>
					</Accordion>
					<Accordion expanded={expanded.includes('panel2')} onChange={handleChange('panel2')}>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 700 }}>Location</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Box sx={{ display: 'flex' }}>
								<Box sx={{ flexGrow: 0.5 }}>
									<Grid container spacing={3} sx={{ flexDirection: 'column' }}>
										<Grid item xs={12} md={6} lg={3}>
											<BasicAutocomplete
												label={'IATA/ICAO'}
												value={iata}
												handleChange={handleIATAChange}
												options={[ ...IATAData, ...ICAOData ].filter((option) => {
													return option.label !== '' && option.label !== undefined;
												})}
											/>
										</Grid>
										<Grid item xs={12} md={6} lg={3}>
											<DatePicker
												label="ETD"
												value={etd}
												onChange={(newValue) => {
													setState({ ...state, etd: newValue });
												}}
												renderInput={(params) => <TextField {...params} />}
											/>
										</Grid>
									</Grid>
									<Grid container spacing={3} sx={{ pt: '24px' }}>
										<Grid item xs={12} md={6} lg={2}>
											<TimePicker
												label="Time From"
												value={timeFrom}
												onChange={(newValue) => {
													setState({ ...state, timeFrom: newValue });
												}}
												renderInput={(params) => <TextField {...params} />}
											/>
										</Grid>
										<Grid item xs={12} md={6} lg={2}>
											<TimePicker
												label="Time To"
												value={timeTo}
												onChange={(newValue) => {
													setState({ ...state, timeTo: newValue });
												}}
												renderInput={(params) => <TextField {...params} />}
											/>
										</Grid>
									</Grid>
								</Box>
								<Box>
									{!isEmpty(iata.label) && (
										<Box>
											<Typography>{iataObject.AirportName || ''}</Typography>
											<Typography>{iataObject.County || ''}</Typography>
											<Typography>{iataObject.State || 'Florida'}</Typography>
											<Typography>{iataObject.Country || 'USA'}</Typography>
										</Box>
									)}
								</Box>
							</Box>
						</AccordionDetails>
					</Accordion>
					<Accordion expanded={expanded.includes('panel3')} onChange={handleChange('panel3')}>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 700 }}>
								Customs and Fuels
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<FormGroup sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
								<FormControlLabel
									control={
										<Checkbox
											checked={commercial}
											onChange={handleCustomsCheckboxChange}
											name="commercial"
										/>
									}
									label="Commercial"
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={bonded}
											onChange={handleCustomsCheckboxChange}
											name="bonded"
										/>
									}
									label="Bonded"
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={international}
											onChange={handleCustomsCheckboxChange}
											name="international"
										/>
									}
									label="International"
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={domestic}
											onChange={handleCustomsCheckboxChange}
											name="domestic"
										/>
									}
									label="Domestic"
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={dutyFree}
											onChange={handleCustomsCheckboxChange}
											name="dutyFree"
										/>
									}
									label="Duty Free"
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={dutyPaid}
											onChange={handleCustomsCheckboxChange}
											name="dutyPaid"
										/>
									}
									label="Duty Paid"
								/>
								<FormControlLabel
									control={
										<Checkbox checked={ftz} onChange={handleCustomsCheckboxChange} name="ftz" />
									}
									label="FTZ"
								/>
							</FormGroup>
							<Grid container spacing={3} sx={{ mt: '10px', mb: '10px' }}>
								<Grid item xs={12} md={3}>
									<BasicAutocomplete
										label={'Fuel'}
										value={fuelType}
										handleChange={handleAutocompleteChange('fuelType')}
										options={fuelTypeData}
									/>
								</Grid>
							</Grid>
						</AccordionDetails>
					</Accordion>
					<Accordion expanded={expanded.includes('panel4')} onChange={handleChange('panel4')}>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 700 }}>
								Aircraft and Flight Service
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Grid container spacing={3} sx={{ mb: '10px' }}>
								<Grid item xs={12} md={6} lg={3}>
									<BasicAutocomplete
										label={'Aircraft Type'}
										value={aircraftType}
										handleChange={handleAutocompleteChange('aircraftType')}
										options={aircraftTypeData}
									/>
								</Grid>
								<Grid item xs={12} md={6} lg={3}>
									<BasicAutocomplete
										label={'Flight Service Type'}
										value={flightServiceType}
										handleChange={handleAutocompleteChange('flightServiceType')}
										options={flightServiceTypeData}
									/>
								</Grid>
								<Grid item xs={12} md={6} lg={3}>
									<BasicSelect
										label={'Corp/Commercial'}
										value={corpCommercial}
										handleChange={handleSelectChange('corpCommercial')}
										options={[
											{ value: 'Corporate', name: 'Corporate' },
											{ value: 'Commercial', name: 'Commercial' }
										]}
									/>
								</Grid>
								<Grid item xs={12} md={6} lg={3}>
									<FormControlLabel
										control={
											<Checkbox
												checked={internationalFlight}
												onChange={handleIntFlightCheckboxChange}
											/>
										}
										label="International Flight"
									/>
								</Grid>
							</Grid>
						</AccordionDetails>
					</Accordion>
					<Accordion expanded={expanded.includes('panel5')} onChange={handleChange('panel5')}>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 700 }}>
								Customer and Supplier
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Grid container spacing={3}>
								<Grid item xs={12} md={6} lg={2}>
									<BasicSelect
										label={'Customer'}
										value={customer}
										handleChange={handleSelectChange('customer')}
										options={customerData}
									/>
								</Grid>
								<Grid item xs={12} md={6} lg={2}>
									<BasicSelect
										label={'Supplier'}
										value={supplier}
										handleChange={handleSelectChange('supplier')}
										options={supplierData}
									/>
								</Grid>
								<Grid item xs={12} md={6} lg={2}>
									<BasicAutocomplete
										label={'Into-Plane Agent'}
										value={ipal}
										handleChange={handleAutocompleteChange('ipal')}
										options={ipalData}
									/>
								</Grid>
								<Grid item xs={12} md={6} lg={2}>
									<TextField
										value={fuelQty}
										onChange={handleTextFieldChange('fuelQty')}
										label="Fuel Qty"
										variant="outlined"
										type="number"
									/>
								</Grid>
								<Grid item xs={12} md={6} lg={2}>
									<BasicAutocomplete
										label={'Required UOM'}
										value={ruom}
										handleChange={handleAutocompleteChange('ruom')}
										options={uomData}
									/>
								</Grid>
								<Grid item xs={12} md={6} lg={2}>
									<BasicAutocomplete
										label={'Required Currency'}
										value={rcurr}
										handleChange={handleAutocompleteChange('rcurr')}
										options={[
											{ label: 'INR' },
											{ label: 'USD' },
											{ label: 'GBP' },
											{ label: 'EUR' }
										]}
									/>
								</Grid>
							</Grid>
						</AccordionDetails>
					</Accordion>
					{!isCreate && (
						<Box sx={{ display: 'flex', alignItems: 'flex-end', mt: '10px', mb: '10px' }}>
							<ComputeButton
								sx={{ ml: 'auto' }}
								onClick={() => {
									setInput(false);
								}}
							>
								Compute Taxes and Fees
							</ComputeButton>
						</Box>
					)}
				</Box>
			</LocalizationProvider>
		);
	}
	return (
		<ComputeOutput
			state={state}
			back={() => {
				setInput(true);
			}}
		/>
	);
}

export default Compute;
