import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { Grid, Box, Button } from '@mui/material';
import React, { useContext, useRef, useState } from 'react';
import { styled } from '@mui/system';
import { FilterContext } from '../App';
import "../components/styles/instagram.css";

const StyledBox = styled(Box)({
	background: "#ddd",
	minHeight: '20rem',
	maxHeight: "100vh",
	marginBottom: "5px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	cursor: "pointer"
});

const StyledImage = styled('img')(props =>({
	width: '100%',
	height: '100%',
	objectFit: 'contain',
	filter: `contrast(${props.customFilter.contrast}%) brightness(${props.customFilter.brightness}%) saturate(${props.customFilter.saturate}%) sepia(${props.customFilter.sepia}%) grayScale(${props.customFilter.gray}%)`
}));

const ImageField = () => {

	const { filterClass,customFilter } = useContext(FilterContext)
	const uploadInputRef = useRef(null);
	const imgResultRef=useRef(null);
	const [imageFile, setImageFile] = useState(null);

	function handleChangeInput(e) {
		setImageFile(URL.createObjectURL(e.target.files[0]));
	}
	
	function handleDownloadImage() {
		domtoimage.toBlob(imgResultRef.current)
			.then(function (blob) {
				saveAs(blob, 'result.png');
			})
			.catch(function (error) {
				console.error("Something went wrong", error);
			});
	}
	
	const renderImage = () => {
		return (
			<figure style={{ width: "100%", height: "100%" }}>
				<StyledImage className={filterClass} customFilter={!filterClass && customFilter} src={imageFile} ref={imgResultRef} alt='nopic' />
			</figure>
		);
	}

	return (
		<Grid item xs={12} md={7}>
			<StyledBox onClick={() => uploadInputRef.current && uploadInputRef.current.click()}>
				{imageFile ? renderImage() : <p>Upload Image</p>}
			</StyledBox>
			<input onClick={handleChangeInput} ref={uploadInputRef} type='file' accept='image/*' hidden />
			<Button onClick={handleDownloadImage} variant='contained' disabled={!imageFile} size='large' fullWidth>Download</Button>
		</Grid>
	);
};

export default ImageField;
