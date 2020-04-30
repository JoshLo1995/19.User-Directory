import * as React from 'react';


export default class searchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            searchResultsArray: []
        }
    }

    // Takes the value of the searchbox and sets the state equal to this value
    setSearchTerm = (searchTerm) => {
        this.setState(
            {
                searchTerm: searchTerm
            }
        );
    }

    // Filter the employee array from table
    // set
    setSearchResults = (employeeArray) => {
        let filteredArray = employeeArray.filter(
            (el) => el.email.toString()
                .toLowerCase()
                    .indexOf(this.state.searchTerm) >= 0
        )

        this.props.filterCallback(filteredArray);
        console.log(filteredArray);
        
    }
        
    // Wat do when the user types in the box
    handleChange = (event, props) => {
        this.setSearchTerm(event.target.value);
        this.setSearchResults(this.props.employeeResults);
    }


    render() {
        return(
            <div>
                <input
                id = "searchBar"
                type = "text"
                placeholder = "Filter by email"
                value = {this.state.searchTerm}
                onChange = {this.handleChange}
                />
            </div>
        )
    }

    

    //   <form className="search">
    //     <div className="form-group">
    //       <label htmlFor="breed">Breed Name:</label>
    //       <input
    //         value={props.search}
    //         onChange={props.handleInputChange}
    //         name="breed"
    //         list="breeds"
    //         type="text"
    //         className="form-control"
    //         placeholder="Type in a dog breed to begin"
    //         id="breed"
    //       />
    //       <datalist id="breeds">
    //         {props.breeds.map(breed => (
    //           <option value={breed} key={breed} />
    //         ))}
    //       </datalist>
    //       <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
    //         Search
    //       </button>
    //     </div>
    //   </form>
  }
