import React, { createContext, useState } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import ImageField from './components/ImageField';
import FilterTab from './components/FilterTab';
import InstaFilter from './components/InstaFilter';
import CustomFilter from './components/CustomFilter';

export const FilterContext = createContext();

function App() {

  const [tabFilter, setTabFilter] = useState('instaFilter');
  const [filterClass, setFilterClass] = useState("");
  const[customFilter,setCustomFilter]=useState({
    contrast: 100,
    brightness: 100,
    saturate: 100,
    sepia: 0,
    gray: 0
  });

  console.log("Custom Filter",customFilter)
  
  const value = {
    tabFilter,
    setTabFilter,
    filterClass,
    setFilterClass,
    customFilter,
    setCustomFilter
  };

  return (
    <>
      <FilterContext.Provider value={value}>
        <Container sx={{ marginTop: '4rem', marginBottom: '4rem' }}>
          <Box sx={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Typography variant="h5">Image Filter</Typography>
          </Box>
          <Grid container spacing={10}>
            <ImageField />
            <Grid item xs={12} md={5}>
              <FilterTab />
              {tabFilter === 'instaFilter' ? <InstaFilter /> : <CustomFilter />}
            </Grid>
          </Grid>
        </Container>
      </FilterContext.Provider>
    </>
  );
}

export default App;
