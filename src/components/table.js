import React from 'react';
import axios from 'axios';
import TableRow from './row.js';

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeResults: [],
            numResults: 10,
        }
    }

    apiCall = () => {
        const URLBase = 'https://randomuser.me/api/';
        const numResults = 10;
        const URLSuffix = `?results=${numResults}`; // Change number at end to change number of results
        const URL = `${URLBase + URLSuffix}`;
        axios.get(URL)
            .then((res => {
                console.log("This runs first");
                // console.log(res.data.results);
                this.setState(
                    {
                        employeeResults: res.data.results,
                    }
                ) // Full array of objects

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
        return(

            <div>
                <TableRow employeeResults = {this.state.employeeResults}>0</TableRow>
            
            </div>


        );
            // <table>
            //     <tr>
            //         <td>
            //             'Headings'
            //         </td>
            //     </tr>
            //     <Row>
            //     </Row>
                // {/* <Row employeeInfo={`${this.state.employeeResults}`}></Row> */}
            // </table>
            // // <div>{this.state.employeeResults}</div>
        
    }

}

// ReactDOM.render(
//     <Table />
// )