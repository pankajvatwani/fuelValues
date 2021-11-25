import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MainListItems from '../MainList';
import Logo from '../../data/Logo.png';
import { Avatar } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import Menus from '../../components/Menus';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import InputAdornment from '@mui/material/InputAdornment';
// import SearchIcon from '@mui/icons-material/Search';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

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
	boxShadow: 'none'
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
			width: theme.spacing(20)
		})
	}
}));

const mdTheme = createTheme();

function Layout(props) {
	const [ open, setOpen ] = React.useState(false);
	const toggleDrawer = () => {
		setOpen(!open);
	};

	// const [ anchorEl, setAnchorEl ] = React.useState(null);
	// const [ val, setVal ] = React.useState('');

	// const handleClick = (event) => {
	// 	setAnchorEl(event.currentTarget);
	// };

	// const handleClose = () => {
	// 	setAnchorEl(null);
	// };

	// const openPopover = Boolean(anchorEl);

	const Component = props.component;
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
						<Box
							sx={{
								flexGrow: 0.9,
								alignItems: 'center',
								display: 'flex'
							}}
						>
							<Avatar variant="square" src={Logo} sx={{ minWidth: '200px', height: '60px !important' }} />
							<div style={{ width: 400, marginLeft: '200px' }}>
								<ReactSearchAutocomplete
									items={[
										{ id: 0, name: 'MIA-Miami International Airport' },
										{ id: 1, name: 'FLL- Fortlauderdale International Airport' },
										{ id: 2, name: 'LHR- London Heathrow' },
										{ id: 3, name: 'IAH - George Bush Intercontinental Airport' }
									]}
									placeholder="Frequently Used IATA"
									// onSearch={handleOnSearch}
									// onHover={handleOnHover}
									// onSelect={handleOnSelect}
									// onFocus={handleOnFocus}
									// autoFocus
									// formatResult={formatResult}
								/>
							</div>
						</Box>
						<Box
							sx={{
								display: 'flex',
								flexGrow: 0.2,
								justifyContent: 'flex-end'
							}}
						>
							<Menus
								icon={<HelpIcon />}
								menuItems={[
									'Getting Started',
									'Support Center',
									`What's New`,
									'Terms of Service',
									'Give Feedback'
								]}
							/>
							<Menus icon={<AccountCircle />} menuItems={[ 'Profile', 'Logout' ]} />
						</Box>
					</Toolbar>
				</AppBar>
				<Drawer variant="permanent" open={open} sx={{ pt: '64px' }}>
					<Toolbar
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'flex-end',
							px: [ 1 ]
						}}
					>
						<IconButton onClick={toggleDrawer}>{open ? <ChevronLeftIcon /> : <MenuIcon />}</IconButton>
					</Toolbar>
					<Divider />
					<List>
						<MainListItems />
					</List>
				</Drawer>
				<Component />
			</Box>
		</ThemeProvider>
	);
}

export default Layout;
