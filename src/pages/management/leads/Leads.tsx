import React from "react";
import Container from "@/pages/management/leads/Leads.style";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { InputLabel, TextField } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import { useFlatInject } from "@/services/stores";

const columns: GridColDef[] = [
	{ field: 'id', headerName: 'ID', width: 70 },
	{ field: 'firstName', headerName: 'First name', width: 130 },
	{ field: 'lastName', headerName: 'Last name', width: 130 },
	{ field: 'age', headerName: 'Age', type: 'number', width: 90, },
	{
		field: 'fullName',
		headerName: 'Full name',
		description: 'This column has a value getter and is not sortable.',
		width: 160,
		sortable: false,
		valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
	},
];

const rows = [
	{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
	{ id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
	{ id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
	{ id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
	{ id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
	{ id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
	{ id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
	{ id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
	{ id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

type LeadsPropsType = {
	className?: string,
}

const Leads: React.ComponentType<LeadsPropsType> = (props) => {

	const { isMobile } = useFlatInject('appStore')[0];

	return (
		<Container className={props.className}>
			<div className={`input-param ${isMobile ? "half" : "full"}`}>
				<FormControl className="each" size="small">
					<InputLabel id="select-opportunity-label">Opportunity</InputLabel>
					<Select labelId="select-opportunity-label"
							label="Opportunity" value={1}>
						<MenuItem value={1}>All Opportunities</MenuItem>
						<MenuItem value={2}>Category 1</MenuItem>
						<MenuItem value={3}>Category 3</MenuItem>
					</Select>
				</FormControl>
				<TextField className="each"
						   label="Outlined" variant="outlined" size="small"/>
				<TextField className="each"
						   label="Outlined" variant="outlined" size="small"/>
			</div>
			<DataGrid
				rows={rows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: 5 },
					},
				}}
				pageSizeOptions={[5, 10]}
				checkboxSelection
			/>
		</Container>
	)

}

export default Leads;
