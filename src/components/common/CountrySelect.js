import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { countries } from '../../data/countries';

export default function CountrySelect(props) {
	const { label, value, handleChange } = props;
	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel>{label}</InputLabel>
				<Select value={value} label={label} onChange={handleChange}>
					{countries.map((country) => (
						<MenuItem key={country.code} value={country.code}>
							{country.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
}
