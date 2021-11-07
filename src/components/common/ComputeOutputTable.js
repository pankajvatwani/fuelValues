import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ComputeOutputTable({ rows, isFees }) {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650, backgroundColor: '#f1f1f1' }}>
				<TableHead>
					<TableRow>
						<TableCell
							sx={{
								color: '#F5874A'
							}}
						>
							{isFees ? 'Fee Items' : 'Tax Items'}
						</TableCell>
						<TableCell
							sx={{
								color: '#F5874A'
							}}
							align="right"
						>
							Actual UOM
						</TableCell>
						<TableCell
							sx={{
								color: '#F5874A'
							}}
							align="right"
						>
							Requested UOM
						</TableCell>
						<TableCell
							sx={{
								color: '#F5874A'
							}}
							align="right"
						>
							Actual Currency
						</TableCell>
						<TableCell
							sx={{
								color: '#F5874A'
							}}
							align="right"
						>
							Unit Price
						</TableCell>
						<TableCell
							sx={{
								color: '#F5874A'
							}}
							align="right"
						>
							Quantity
						</TableCell>
						<TableCell
							sx={{
								color: '#F5874A'
							}}
							align="right"
						>
							Total
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.TaxItem} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
								{isFees ? row.FeeItem : row.TaxItem}
							</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }} align="right">
								{row.OriginalUOM}
							</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }} align="right">
								{row.RequestedUOM}
							</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }} align="right">
								{'USD'}
							</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }} align="right">
								{'$'}
								{row.UnitPrice}
							</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }} align="right">
								{row.Quantity}
							</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }} align="right">
								{'$'}
								{Number(row.Total).toFixed(6)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
