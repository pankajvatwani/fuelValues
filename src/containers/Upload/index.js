import React from 'react';
import { Box, Divider, Typography, TextField, Button } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
function Upload() {
	const handleDrag = (e) => {
		e.preventDefault();
		e.stopPropagation();
	};
	const fileRef = React.createRef();

	const handleDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
			///setFilesSelected(true);
			//   const files = e.dataTransfer.files;
			//   selectedFiles = selectedFiles.concat(Array.from(files));
			//   const selectedFileNames = Array.from(files).map((file) => file.name);
			//   const selectedPreviewFile = Array.from(files).map((file) => URL.createObjectURL(file));
			//   setPreviewImages([...previewImages, ...selectedPreviewFile]);
			//   setFileNames([...fileNames, ...selectedFileNames]);
		}
	};
	const selectFiles = (event) => {
		if (event.target.files) {
			//   setFilesSelected(true);
			//   const files = event.target.files;
			//   selectedFiles = selectedFiles.concat(Array.from(files));
			//   const selectedFileNames = Array.from(files).map((file) => file.name);
			//   const selectedPreviewFile = Array.from(files).map((file) => URL.createObjectURL(file));
			//   setPreviewImages([...previewImages, ...selectedPreviewFile]);
			//   setFileNames([...fileNames, ...selectedFileNames]);
		}
	};
	return (
		<Box
			component="main"
			sx={{
				flexGrow: 1,
				height: '100vh',
				overflow: 'auto',
				pt: '90px',
				pr: '32px',
				pl: '32px'
			}}
		>
			<Typography
				sx={{
					color: '#F5874A',
					fontSize: '24px',
					mb: '16px'
				}}
			>
				Upload Taxes and Fees
			</Typography>
			<Divider sx={{ mb: '16px' }} />
			<Box>
				<Typography sx={{ mb: '16px' }}>Title</Typography>
				<TextField sx={{ mb: '16px', width: '40%' }} variant="outlined" />
			</Box>
			<Box
				sx={{
					//backgroundColor: '#B9B9B91A',
					width: 4 / 5,
					height: (theme) => theme.spacing(44.875),
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
					textAlign: 'center',
					border: '1px dashed grey'
				}}
				onDrop={handleDrop}
				onDragEnter={handleDrag}
				onDragLeave={handleDrag}
				onDragOver={handleDrag}
			>
				<FileUploadIcon fontSize="large" sx={{}} />
				<Typography gutterBottom>Drag and Drop Here</Typography>
				<Typography gutterBottom>Or</Typography>
				<Button variant="contained" color="primary" onClick={() => fileRef.current.click()}>
					Browse Files
				</Button>
				<input
					type="file"
					onChange={selectFiles}
					ref={fileRef}
					style={{ visibility: 'hidden', height: 0 }}
					accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,text/csv"
					multiple
				/>
				<br />
			</Box>
			<br />
			<br />
			<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80%' }}>
				<Button sx={{ width: '50%' }} variant="contained" color="primary">
					Upload
				</Button>
			</Box>
		</Box>
	);
}

export default Upload;
