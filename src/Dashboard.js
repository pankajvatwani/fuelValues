import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { mainListItems } from './listItems';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import PanelTemplate from './components/common/PanelTemplate';
import CountrySelect from './components/common/CountrySelect';
import StateSelect from './components/common/StateSelect';
import TaxSelect from './components/common/TaxSelect';
import CustomerSelect from './components/common/CustomerSelect';
import SupplierSelect from './components/common/SupplierSelect';
import BasicTable from './components/common/BasicTable';
import CustomButton from './components/common/CustomButton';
import { states } from './data/states';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create([ 'width', 'margin' ], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen
	}),
	display: 'flex',
	justifyContent: 'center',
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create([ 'width', 'margin' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	})
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
	'& .MuiDrawer-paper': {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		}),
		boxSizing: 'border-box',
		...(!open && {
			overflowX: 'hidden',
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen
			}),
			width: theme.spacing(7),
			[theme.breakpoints.up('sm')]: {
				width: theme.spacing(9)
			}
		})
	}
}));

const mdTheme = createTheme();

function DashboardContent() {
	const [ open, setOpen ] = React.useState(true);
	const [ search, setSearch ] = React.useState(false);
	const [ country, setCountry ] = React.useState('');
	const [ state, setState ] = React.useState('');
	const [ tax, setTax ] = React.useState('');
	const [ customer, setCustomer ] = React.useState('');
	const [ supplier, setSupplier ] = React.useState('');
	const handleCountryChange = (e) => {
		setCountry(e.target.value);
	};
	const handleStateChange = (e) => {
		setState(e.target.value);
	};
	const handleTaxChange = (e) => {
		setTax(e.target.vale);
	};
	const handleCustomerChange = (e) => {
		setCustomer(e.target.vale);
	};
	const handleSupplierChange = (e) => {
		setSupplier(e.target.vale);
	};
	const toggleDrawer = () => {
		setOpen(!open);
	};
	const stateSelected = states.find((state1) => state1.statecode === state);

	return (
		<ThemeProvider theme={mdTheme}>
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<AppBar position="absolute" open={open} sx={{ backgroundColor: 'white' }}>
					<Toolbar
						sx={{
							pr: '24px' // keep right padding when drawer closed
						}}
					>
						<IconButton
							edge="start"
							color="inherit"
							aria-label="open drawer"
							onClick={toggleDrawer}
							sx={{
								marginRight: '36px',
								...(open && { display: 'none' })
							}}
						>
							<MenuIcon
								sx={{
									backgroundColor: 'rgba(0, 0, 0, 0.54);',
									'&:hover': {
										backgroundColor: 'rgba(0, 0, 0, 0.54);'
									}
								}}
							/>
						</IconButton>
						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1, color: 'black', alignItems: 'flex-start', display: 'flex' }}
						>
							Fuel Values
						</Typography>
						<IconButton
							sx={{
								backgroundColor: 'grey',
								'&:hover': {
									backgroundColor: 'grey'
								}
							}}
						>
							<AccountCircle />
						</IconButton>
					</Toolbar>
				</AppBar>
				<Drawer variant="permanent" open={open}>
					<Toolbar
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'flex-end',
							px: [ 1 ]
						}}
					>
						<IconButton onClick={toggleDrawer}>
							<ChevronLeftIcon />
						</IconButton>
					</Toolbar>
					<Divider />
					<List>{mainListItems}</List>
				</Drawer>
				<Box
					component="main"
					sx={{
						backgroundColor: 'white',
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
									<Grid item xs={12} md={6} lg={4}>
										<CountrySelect
											label={'Country'}
											value={country}
											handleChange={handleCountryChange}
										/>
									</Grid>
									<Grid item xs={12} md={6} lg={4}>
										<StateSelect
											label={'IATA/ICO'}
											value={state}
											handleChange={handleStateChange}
										/>
									</Grid>
									<Grid item xs={12} md={6} lg={4}>
										<TaxSelect label={'Tax'} value={tax} handleChange={handleTaxChange} />
									</Grid>
								</Grid>
								<Grid container spacing={3} sx={{ mb: 2, pr: 1, pl: 1 }}>
									<Grid item xs={12} md={6} lg={4}>
										<CustomerSelect
											label={'Customer'}
											value={customer}
											handleChange={handleCustomerChange}
										/>
									</Grid>
									<Grid item xs={12} md={6} lg={4}>
										<SupplierSelect
											label={'Supplier'}
											value={supplier}
											handleChange={handleSupplierChange}
										/>
									</Grid>
									<Grid item xs={12} md={6} lg={4}>
										<FormGroup>
											<FormControlLabel
												control={
													<Checkbox
														sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
														defaultChecked
													/>
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
									header={`United States, ${state}-${stateSelected.statename}`}
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
			</Box>
		</ThemeProvider>
	);
}

export default function Dashboard() {
	return <DashboardContent />;
}
