import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useContext, useState } from 'react';
import { filterValues } from './utils'
import { FilterContext } from '../App';
const InstaFilter = () => {
	const {filterClass, setFilterClass} = useContext(FilterContext);

	function handleChange(e) {
		setFilterClass(e.target.value);
	}
	console.log("filterClass", filterClass)
	return (
		<Box sx={{ maxWidth: 300 }}>
			<FormControl fullWidth>
				<InputLabel>Select</InputLabel>
				<Select
					onChange={handleChange}
					value={filterClass}
					label="Filter"
				>
					{
						filterValues.map((item) => <MenuItem value={item.class} key={item.class}>{item.name}</MenuItem>)
					}
				</Select>
			</FormControl>
		</Box>
	);
};

export default InstaFilter;
