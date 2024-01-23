import { Box, Slider } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { FilterContext } from '../App'

const SliderField = ({ slide }) => {
  const { customFilter, setCustomFilter } = useContext(FilterContext)

  console.log('label', slide.label)
  const [value, setValue] = useState(slide.defaultValue)

  function handleSliderValue(e) {
    setValue(e.target.value)
  }

  useEffect(() => {
    setCustomFilter({ ...customFilter, [slide.field]: value })
  }, [value])

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
      <Box>{slide.label}</Box>
      <Slider
        size="small"
        value={value}
        valueLabelDisplay="auto"
        onChange={handleSliderValue}
        max={200}
      />
    </Box>
  )
}

export default SliderField
