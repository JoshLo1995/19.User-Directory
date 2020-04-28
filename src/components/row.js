import React, { useEffect } from 'react';

function TableRow(props) {

    useEffect(() => {
        const newArray = props.employeeResults.map(x => x);

        // Mapped to new array, extract info per row

        console.log(newArray);
    });

    return (
        <div>
            Hello
        </div>
    )
};

// class Row extends React.Component {
//     componentDidMount() {
//         console.log("This runs second");
//     }
//     // Extract; name, location, email, DoB
//     extractAndMapInfo() {
        
//         let newArray = [];
//         newArray = this.props.employeeResults.map(x => x)
//         this.props.tempName(newArray);

//         return newArray;
//     }

//     // Then map the data

//     render() {
//         return(
//             <div>
                

//             </div>
//         );

        
//     }

// }
// Pass data and then map
// Use PupsterApp activity for reference


export default TableRow;