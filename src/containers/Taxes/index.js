import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import PanelTemplate from '../../components/common/PanelTemplate';
import BasicSelect from '../../components/common/BasicSelect';
import BasicTable from '../../components/common/BasicTable';
import CustomButton from '../../components/common/CustomButton';
import BasicAutocomplete from '../../components/common/BasicAutocomplete';
import { states } from '../../data/states';
import { get } from 'lodash';
import {
	countryData,
	customerData,
	IATAData,
	ICAOData,
	stateData,
	supplierData,
	taxData
} from '../../data/finalSelectData';

function Taxes() {
	const [ search, setSearch ] = React.useState(false);
	const [ country, setCountry ] = React.useState('');
	const [ state, setState ] = React.useState('');
	const [ tax, setTax ] = React.useState('');
	const [ customer, setCustomer ] = React.useState('');
	const [ supplier, setSupplier ] = React.useState('');
	const [ iata, setIata ] = React.useState({ label: '' });
	const handleCountryChange = (e) => {
		setCountry(e.target.value);
	};
	const handleStateChange = (e) => {
		setState(e.target.value);
	};
	const handleTaxChange = (e) => {
		setTax(e.target.value);
	};
	const handleCustomerChange = (e) => {
		setCustomer(e.target.value);
	};
	const handleSupplierChange = (e) => {
		setSupplier(e.target.value);
	};
	const handleIATAChange = (e, newValue) => {
		setIata(newValue);
	};

	const stateSelected = states.find((state1) => state1.statecode === state);
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
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<PanelTemplate header="Taxes">
						<Grid container spacing={3} sx={{ mb: 2, pr: 1, pl: 1 }}>
							<Grid item xs={12} md={6} lg={3}>
								<BasicSelect
									label={'Country'}
									value={country}
									handleChange={handleCountryChange}
									options={countryData}
								/>
							</Grid>
							<Grid item xs={12} md={6} lg={3}>
								<BasicSelect
									label={'States'}
									value={state}
									handleChange={handleStateChange}
									options={stateData}
								/>
							</Grid>
							<Grid item xs={12} md={6} lg={3}>
								<BasicSelect
									label={'Tax'}
									value={tax}
									handleChange={handleTaxChange}
									options={taxData}
								/>
							</Grid>
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
						<Grid container spacing={3} sx={{ mb: 2, pr: 1, pl: 1 }}>
							<Grid item xs={12} md={6} lg={4}>
								<BasicSelect
									label={'Customer'}
									value={customer}
									handleChange={handleCustomerChange}
									options={customerData}
								/>
							</Grid>
							<Grid item xs={12} md={6} lg={4}>
								<BasicSelect
									label={'Supplier'}
									value={supplier}
									handleChange={handleSupplierChange}
									options={supplierData}
								/>
							</Grid>
							<Grid item xs={12} md={6} lg={4}>
								<FormGroup>
									<FormControlLabel
										control={
											<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} defaultChecked />
										}
										label="Indicative Rates"
									/>
								</FormGroup>
							</Grid>
						</Grid>
						<Grid container spacing={3} sx={{ mb: 2, pr: 1, pl: 1 }}>
							<Grid item xs={12} md={6} lg={4} sx={{ ml: 'auto' }}>
								<CustomButton
									onClick={() => {
										setSearch(true);
									}}
								>
									Search
								</CustomButton>
							</Grid>
						</Grid>
					</PanelTemplate>
					{search && (
						<PanelTemplate
							header={`United States, ${state}-${get(stateSelected, 'statename', '')}`}
							grey={true}
						>
							<Grid container spacing={3}>
								<Grid item xs={12}>
									<BasicTable />
								</Grid>
							</Grid>
						</PanelTemplate>
					)}
				</Grid>
			</Grid>
		</Box>
	);
}

export default Taxes;
