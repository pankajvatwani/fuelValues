import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function BasicAutocomplete({ options, label, value, handleChange }) {
	return (
		<Autocomplete
			disablePortal
			options={options}
			getOptionLabel={(option) => option.label}
			value={value}
			onChange={handleChange}
			renderInput={(params) => (
				<TextField
					{...params}
					label={label}
					sx={{
						'& label': {
							fontWeight: 700,
							color: 'black'
						}
					}}
				/>
			)}
		/>
	);
}
