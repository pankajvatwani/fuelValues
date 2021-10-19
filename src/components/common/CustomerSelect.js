import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Customers } from '../../data/CustomerList';

export default function CustomerSelect(props) {
	const { label, value, handleChange } = props;
	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel>{label}</InputLabel>
				<Select value={value} label={label} onChange={handleChange}>
					{Customers.map((customer) => <MenuItem value={customer.Code}>{customer.Name}</MenuItem>)}
				</Select>
			</FormControl>
		</Box>
	);
}
