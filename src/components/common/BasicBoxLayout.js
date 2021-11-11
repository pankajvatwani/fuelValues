import React from 'react';
import Box from '@mui/material/Box';

function BasicBoxLayout({ total }) {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column'
			}}
		>
			<Box>
				<Box sx={{ fontWeight: 700, pt: '8px' }}>Flat Tax - $20</Box>
				<Box sx={{ fontWeight: 700, pt: '8px' }}>Total Taxes Including Flat Tax- ${total.toFixed(6)}</Box>
			</Box>
		</Box>
	);
}

export default BasicBoxLayout;
