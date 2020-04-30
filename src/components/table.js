import React from 'react';
import axios from 'axios';
import TableRow from './row.js';
import SearchForm from './searchForm';

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeResults: [],
            numResults: 10,
            isSorted: false,
            searchQuery: '',
        }

        // document.getElementById("emailSort").addEventListener('click', this.sortTable)
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

    invert() {
        let invertedUsers = this.state.employeeResults.sort(
            (a,b) => 
                (a.email < b.email) ? 1 : -1
        )

        this.setState(
            {
                isSorted: false,
                employeeResults: invertedUsers
            }
        );

        console.log(this.state.employeeResults);

    }

    // Sort by email alphabetically and then numerically
    sortTable() {
        let sortedUsers = this.state.employeeResults.sort(
            (a,b) => 
                (a.email > b.email) ? 1 : -1
        )

        this.setState(
            {
                isSorted: true
            }
        );

        console.log(sortedUsers);
        this.setState(
            {
                employeeResults: sortedUsers
            }
        )
    }

    filterCallback = (childData) => {
        this.setState(
            {
                employeeResults: childData
            }
        );
    }

    render() {
        return(

            <div>
                <SearchForm
                    employeeResults = {this.state.employeeResults}
                    filterCallback = {this.filterCallback}>
                </SearchForm>
                <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Location
                        </th>
                        <th>
                            <button id = "emailSort" onClick = {() => {
                                if (!this.state.isSorted) {
                                    this.sortTable();
                                } else {
                                    this.invert();
                                } 
                            }}
                            >email</button>
                        </th>
                    </tr>
                </thead>
                    <TableRow employeeResults = {this.state.employeeResults}></TableRow>
                
                </table>
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