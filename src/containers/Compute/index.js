/* eslint-disable no-unused-vars */
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
import { cloneDeep } from 'lodash';
import BasicAutocomplete from '../../components/common/BasicAutocomplete';
import BasicSelect from '../../components/common/BasicSelect';
import { aircraftTypeData, flightServiceTypeData, fuelTypeData, IATAData, ICAOData } from '../../data/finalSelectData';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { FL } from '../../data/FLAirport';

function Compute() {
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
		etd: '',
		timeFrom: '',
		timeTo: ''
	});

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

	const handleCorpCommercialChange = (e) => {
		setState({
			...state,
			corpCommercial: e.target.value
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
		commercialBonded,
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
		timeTo
	} = state;

	const iataObject = FL.find((fl) => fl.IATA === iata.label);
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
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 700 }}>Transaction Type</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<FormGroup sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
						<FormControlLabel
							control={
								<Checkbox
									checked={intoPlane}
									onChange={handleTrasactionCheckboxChange}
									name="intoPlane"
								/>
							}
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
					<Grid container spacing={3}>
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
					</Grid>
					<Grid container spacing={3} sx={{ mt: '5px' }}>
						<Grid item xs={12} md={6} lg={3}>
							<TextField
								value={etd}
								onChange={handleTextFieldChange('etd')}
								label="ETD"
								variant="outlined"
							/>
						</Grid>
					</Grid>
					<Grid container spacing={3} sx={{ mt: '5px' }}>
						<Grid item xs={12} md={6} lg={2}>
							<TextField
								value={timeFrom}
								onChange={handleTextFieldChange('timeFrom')}
								label="Time From"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12} md={6} lg={2}>
							<TextField
								value={timeTo}
								onChange={handleTextFieldChange('timeTo')}
								label="Time To"
								variant="outlined"
							/>
						</Grid>
					</Grid>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded.includes('panel3')} onChange={handleChange('panel3')}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 700 }}>Customs and Fuels</Typography>
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
							control={<Checkbox checked={bonded} onChange={handleCustomsCheckboxChange} name="bonded" />}
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
								<Checkbox checked={domestic} onChange={handleCustomsCheckboxChange} name="domestic" />
							}
							label="Domestic"
						/>
						<FormControlLabel
							control={
								<Checkbox checked={dutyFree} onChange={handleCustomsCheckboxChange} name="dutyFree" />
							}
							label="Duty Free"
						/>
						<FormControlLabel
							control={
								<Checkbox checked={dutyPaid} onChange={handleCustomsCheckboxChange} name="dutyPaid" />
							}
							label="Duty Paid"
						/>
						<FormControlLabel
							control={<Checkbox checked={ftz} onChange={handleCustomsCheckboxChange} name="ftz" />}
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
								handleChange={handleCorpCommercialChange}
								options={[
									{ value: 'Corporate', name: 'Corporate' },
									{ value: 'Commercial', name: 'Commercial' }
								]}
							/>
						</Grid>
						<Grid item xs={12} md={6} lg={3}>
							<FormControlLabel
								control={
									<Checkbox checked={internationalFlight} onChange={handleIntFlightCheckboxChange} />
								}
								label="International Flight"
							/>
						</Grid>
					</Grid>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded.includes('panel5')} onChange={handleChange('panel5')}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 700 }}>Customer and Supplier</Typography>
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
