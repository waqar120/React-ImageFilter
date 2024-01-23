import React, { useContext, useState } from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import { FilterContext } from '../App'

const FilterTab = () => {

	const { tabFilter, setTabFilter,setFilterClass } = useContext(FilterContext)

	function handleChange(e, val) {
		setTabFilter(val)
		if(val === 'customFilter')
		setFilterClass('')
	}

	return (
		<Box sx={{ marginBottom: "2rem" }}>
			<Tabs
				value={tabFilter}
				onChange={handleChange}
				textColor="secondary"
				indicatorColor="secondary"
			>
				<Tab value="instaFilter" label="InstaFilter" />
				<Tab value="customFilter" label="CustomFilter" />
			</Tabs>
		</Box>
	)
}

export default FilterTab