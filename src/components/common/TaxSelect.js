import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TaxItems } from '../../data/TaxItems';

export default function TaxSelect(props) {
	const { label, value, handleChange } = props;
	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel>{label}</InputLabel>
				<Select value={value} label={label} onChange={handleChange}>
					{TaxItems.map((taxItem) => (
						<MenuItem key={taxItem.Code} value={taxItem.Code}>
							{taxItem.TaxItem}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
}
