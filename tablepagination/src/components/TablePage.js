import React, { Component } from 'react'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from 'axios';
import TablePagination from '@material-ui/core/TablePagination';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	root: {
		display: 'block',
	},
	tableCell: {
		border: '1px solid grey',
		textAlign:'center'
	}
});

const tableHeaderData = [
	{ id: 1, header: "First Name" },
	{ id: 2, header: "Last Name" },
	{ id: 3, header: "Company Name" },
	{ id: 4, header: "City" },
	{ id: 5, header: "State" },
	{ id: 6, header: "ZIP" },
	{ id: 7, header: "Email" },
	{ id: 8, header: "Web" },
]

class TablePage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			page: 0,
			rowsPerPage: 10,
			emp: [],
		}
	}

	componentDidMount() {
		this.getEmployee();
	}
	getEmployee = () => {
		axios.get('https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json')
			.then(res => {
				console.log(res.data)
				this.setState({ emp: res.data });
			})
	}

	handleChangePage = (event, newPage) => {
		this.setState({ page: newPage })
	}
	handleChangeRowsPerPage = event => {
		this.setState({ rowsPerPage: +event.target.value, page: 0 })
	}

	render() {
		const { classes } = this.props;
		const { emp, page, rowsPerPage } = this.state
		console.log("object", emp);
		return (
			<Paper className={classes.root}>
				<Table>
					<TableHead style={{ backgroundColor: 'lightseagreen', textAlign: 'center' }}>
						<TableRow >
						{ tableHeaderData !== undefined && tableHeaderData.length &&  tableHeaderData.map(item => (
								<TableCell key={item.id} className={classes.tableCell}>{item.header}</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
					{emp !== undefined && emp.length &&  emp.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(item => (
							<TableRow key={item.id}>
								<TableCell className={classes.tableCell}>{item.first_name}</TableCell>
								<TableCell className={classes.tableCell}>{item.last_name}</TableCell>
								<TableCell className={classes.tableCell}>{item.company_name}</TableCell>
								<TableCell className={classes.tableCell}>{item.city}</TableCell>
								<TableCell className={classes.tableCell}>{item.state}</TableCell>
								<TableCell className={classes.tableCell}>{item.zip}</TableCell>
								<TableCell className={classes.tableCell}>{item.email}</TableCell>
								<TableCell className={classes.tableCell}>{item.web}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				<TablePagination
					rowsPerPageOptions={[10,15,20,25,30,40, 50, 100, 150, 200, 250, 300, 350, 400, 500]}
					component="div"
					count={emp.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={this.handleChangePage}
					onChangeRowsPerPage={this.handleChangeRowsPerPage}
				/>
			</Paper>
		)
	}
}
export default TablePage = withStyles(styles, { withTheme: true })(TablePage)



