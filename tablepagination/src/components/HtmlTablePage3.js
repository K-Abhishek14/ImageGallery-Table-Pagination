import React, { Component } from 'react'
import axios from 'axios';

const tableHeaderData = [
	{ id: 0.1, header: "Sl.No" },
	{ id: 1, header: "First Name" },
	{ id: 2, header: "Last Name" },
	{ id: 3, header: "Company Name" },
	{ id: 4, header: "City" },
	{ id: 5, header: "State" },
	{ id: 6, header: "ZIP" },
	{ id: 7, header: "Email" },
	{ id: 8, header: "Web" },
]


export class HtmlTablePage3 extends Component {
	constructor(props) {
		super(props)

		this.state = {
			emp: [],
			page: 0,
			rowsPerPage: 25,
		}
	}
	componentDidMount() {
		this.getEmployee();
	}

	getEmployee = () => {
		axios.get('https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json')
			.then(res => {
				console.log("API DATA", res.data)
				this.setState({ emp: res.data })
			})
	}

	nextPage = () => {

	}

	previousPage = event => {

	}


	render() {
		const { emp, page, rowsPerPage } = this.state;
		return (
			<div>
				<h2>BASIC EMPLOYEE TABLE</h2>
				<table style={{ width: '100%', border: '1px solid grey', borderCollapse: 'collapse' }}>
					<thead>
						<tr>
							{tableHeaderData.map(item => (
								<th key={item.id} style={{ border: '1px solid grey' }}>{item.header}</th>
							))}
						</tr>
					</thead>
					{emp !== undefined && emp.length && emp.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(item => (
						<tbody key={item.id}>
							<tr >
								<td style={{ border: '1px solid grey' }}>{item.id}</td>
								<td style={{ border: '1px solid grey' }}>{item.first_name}</td>
								<td style={{ border: '1px solid grey' }}>{item.last_name}</td>
								<td style={{ border: '1px solid grey' }}>{item.company_name}</td>
								<td style={{ border: '1px solid grey' }}>{item.city}</td>
								<td style={{ border: '1px solid grey' }}>{item.state}</td>
								<td style={{ border: '1px solid grey' }}>{item.zip}</td>
								<td style={{ border: '1px solid grey' }}>{item.email}</td>
								<td style={{ border: '1px solid grey' }}>{item.web}</td>
							</tr>
						</tbody>
					))}
				</table>
				<button type="button" style={{ backgroundColor: 'blue', color: 'white' }} onClick={this.previousPage}>Back</button>
				<button type="button" style={{ backgroundColor: 'blue', color: 'white' }} onClick={this.nextPage}>Next</button>
			</div>
		)
	}
}
export default HtmlTablePage3
