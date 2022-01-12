import { render } from "@testing-library/react";
import React from "react"

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            zipCode: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        event.preventDefault();
        this.setState({
            zipCode:event.target.zip.value
        })
        
        fetch('http://ctp-zip-api.herokuapp.com/zip/'+event.target.zip.value)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    results: [...data]
                })
            })
            .catch(error => {
                console.log("error", error)
            })
            .then(() => console.log(this.state.results));
    }

    render() {
        return (
            <div>
                <header>
                    <div className ="zip-header">
                        <h1> Zip Code Search</h1>

                        <div className ="submit-container">
                            <form onSubmit={this.handleChange}>
                                <h2> Zip Code:</h2>
                                <input type="number" placeholder="ZipCode" name="zip"></input>
                            </form>
                        </div>
                    </div>
                </header>

                <h2>
                    <div className ="zip-body">
                        {this.state.results.map((data) => (

                        //<a key={data.RecordNumber}>
                            <p className={"top-box"}>
                                {data.City}, {data.State}
                                <ul>
                                    <li>State: {data.State}</li>
                                    <li>Location: ({data.Lat}  {data.Long}) </li>
                                    <li>Population(estimated): {data.EstimatedPopulation}</li>
                                    <li>Total Wages: {data.TotalWages}</li>
                                </ul>
                            </p >
                      //  </a >
        
                    ))}
    

                    </div>
                </h2>
            </div>
        );
    }
}
export default SearchResults;