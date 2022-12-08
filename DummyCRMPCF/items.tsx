import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'material',
    headerName: 'Material',
    width: 150,
    editable: true,
  },
  {
    field: 'ref',
    headerName: 'Ref',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.name || ''} ${params.row.material || ''}`,
  },
];

const rows = [
  { id: 1, name: 'K543464', material: '546743', ref: 35 },
  { id: 2, name: 'M543456', material: '7543234', ref: 42 },
  { id: 3, name: 'I435344', material: '345', ref: 45 },
  { id: 4, name: 'H4357634', material: '3453', ref: 16 },
  { id: 5, name: 'M4364343', material: '34634', ref: null },
  { id: 6, name: 'L752224', material: null, ref: 150 },
  { id: 7, name: 'N435734', material: '87434', ref: 44 },
  { id: 8, name: 'I45673', material: '235', ref: 36 },
  { id: 9, name: 'T32452', material: '75434', ref: 65 },
];

export default function ItemList() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}