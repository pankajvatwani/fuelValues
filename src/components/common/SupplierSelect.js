import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Suppliers } from '../../data/SupplierList';

export default function SupplierSelect(props) {
	const { label, value, handleChange } = props;
	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel>{label}</InputLabel>
				<Select value={value} label={label} onChange={handleChange}>
					{Suppliers.map((supplier) => <MenuItem value={supplier.Code}>{supplier.Name}</MenuItem>)}
				</Select>
			</FormControl>
		</Box>
	);
}
