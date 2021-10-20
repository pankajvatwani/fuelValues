import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { result } from '../../data/TaxSearchResult';

export default function BasicTable() {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }}>
				<TableHead>
					<TableRow>
						<TableCell
							sx={{
								color: '#F5874A'
							}}
						>
							Tax
						</TableCell>
						<TableCell
							sx={{
								color: '#F5874A'
							}}
							align="right"
						>
							Tax Rate
						</TableCell>
						<TableCell
							sx={{
								color: '#F5874A'
							}}
							align="right"
						>
							Customs
						</TableCell>
						<TableCell
							sx={{
								color: '#F5874A'
							}}
							align="right"
						>
							Jurisdiction
						</TableCell>
						<TableCell
							sx={{
								color: '#F5874A'
							}}
							align="right"
						>
							Tax Vendor
						</TableCell>
						<TableCell
							sx={{
								color: '#F5874A'
							}}
							align="right"
						>
							Customer
						</TableCell>
						<TableCell
							sx={{
								color: '#F5874A'
							}}
							align="right"
						>
							Supplier
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{result.map((row) => (
						<TableRow key={row.TaxItem} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
								{row.TaxItem}
							</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }} align="right">
								{row.TaxRate}
							</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }} align="right">
								{row.Customs}
							</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }} align="right">
								{row.Jurisdictions}
							</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }} align="right">
								{row.TaxVendor}
							</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }} align="right">
								{row.Customer}
							</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }} align="right">
								{row.Supplier}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
