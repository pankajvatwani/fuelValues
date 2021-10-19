import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { states } from '../../data/states';

export default function StateSelect(props) {
	const { label, value, handleChange } = props;
	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel>{label}</InputLabel>
				<Select value={value} label={label} onChange={handleChange}>
					{states.map((state) => (
						<MenuItem key={state.statecode} value={state.statecode}>
							{state.statename}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
}
