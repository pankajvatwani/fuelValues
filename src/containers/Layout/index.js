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
import MainListItems from '../listItems';
import Logo from '../../data/Logo.png';
import { Avatar } from '@mui/material';

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
	justifyContent: 'center'
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
			width: theme.spacing(15)
		})
	}
}));

const mdTheme = createTheme();

function Layout(props) {
	const [ open, setOpen ] = React.useState(true);
	const toggleDrawer = () => {
		setOpen(!open);
	};
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
						<div
							style={{
								flexGrow: 1,
								alignItems: 'flex-start',
								display: 'flex',
								flexDirection: 'column'
							}}
						>
							<Avatar variant="square" src={Logo} sx={{ minWidth: '130px' }} />
						</div>
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
