import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Row from './row.js';

export default class Table extends React.Component {
    state = {
        employeeResults: []
    }
    apiCall = () => {
        const URLBase = 'https://randomuser.me/api/'
        const URLSuffix = '?results=10' // Change number at end to change number of results
        const URL = `${URLBase + URLSuffix}`;
        axios.get(URL)
            .then((res => {

                this.setState({employeeResults: res.data.results}) // Full array of results 

            }))
            .catch((err) => {
                // handle failure
                if (err) throw err;
            })
            .finally(() => {
                // Always runs
            })
    }

    componentDidMount() {
        this.apiCall();
    }

    sortTable() {

    }

    filterTable() {

    }

    render() {
        return (
            // <table>
            //     <tr>
            //         <td>
            //             'Headings'
            //         </td>
            //     </tr>
            //     {/* <Row employeeInfo={this.employeeResults}></Row> */}
            // </table>
            <div>{this.state.employeeResults}</div>
        );
    }

}

// ReactDOM.render(
//     <Table />
// )