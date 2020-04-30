import React, { useEffect } from 'react';

function TableRow(props) {

    // Extract; name, location, email, and DoB
    useEffect(() => {

        // Necessary workaround
        // if (props.employeeResults) {
        //     let tempArray = props.employeeResults.map(x => x);
        //     console.log(tempArray);
    
        //     // Necessary workaround
        //     if (tempArray.length > 0) {
        //         for (let i = 0; i < 10; i++) {
        //             let name = `${props.employeeResults[i].name.first} ${props.employeeResults[i].name.last}`;
        //             let email = props.employeeResults[i].email;
        //             let dob = props.employeeResults[i].dob.date.slice(0, 10);

        //             const employee = `employee${i}`

        //             this.setState(
        //                 {
        //                     // Need to increment such that employee1, employee2, etc...
        //                     employee: {
        //                         name: name,
        //                         email: email,
        //                         dob: dob
        //                     }     
        //                 }
        //             )

        //             console.log(`${name} ${email} ${dob}`)
                    
        //         } 
        //     }
        // }



        // Mapped to new array, extract info per row

        // console.log(newArray);
    });

    return (
        <tbody>
            {props.employeeResults.map(({name, location, email}) => {
                return(
                    // Make css file
                    <tr key={email} id = "row">
                        <td>
                            {name.first} {name.last}
                        </td>
                        <td>
                            
                            {location.city}, {location.country}
                        </td>
                        <td>
                            {email}
                        </td>
                    </tr>
                )
            })}
        </tbody>
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