import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { Grid, TextField } from '@mui/material';


export const DataTableSTI = ({ title, columns, data, pending }) => {

    const [filteredResults, setFilteredResults] = useState([]);

    const [searchInput, setSearchInput] = useState('');

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = data.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else {
            setFilteredResults(data)
        }
    }

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };


    return (


        <Grid container justifyContent="center">
            <Grid item xs={11} >
                <DataTable
                    title={title}
                    columns={columns}
                    data={searchInput.length > 1 ? filteredResults : data}
                    selectableRows
                    selectableRowsHighlight
                    highlightOnHover
                    pagination
                    paginationComponentOptions={paginationComponentOptions}
                    subHeader
                    subHeaderComponent={
                        <TextField
                            placeholder='Buscar'
                            variant="standard"
                            onChange={e => searchItems(e.target.value)}
                        />
                    }
                />
           </Grid>
        </Grid>

    )
}

